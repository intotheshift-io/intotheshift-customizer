function itsGetToken() {
  return localStorage.getItem("its_token") || localStorage.getItem("token") || localStorage.getItem("auth_token") || "";
}

function itsDecodeToken() {
  const token = itsGetToken();
  if (!token || !token.includes(".")) return null;
  try {
    return JSON.parse(atob(token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/")));
  } catch (e) {
    return null;
  }
}

function itsApiBase() {
  return window.ITS_API_BASE || localStorage.getItem("its_api_base") ||
    (window.location.hostname === "localhost"
      ? "https://into-the-shift-studio-api-staging.osc-fr1.scalingo.io"
      : "https://into-the-shift-studio-api.osc-fr1.scalingo.io");
}

function itsGetCurrentUserKey() {
  const tokenData = itsDecodeToken() || {};
  const userId =
    localStorage.getItem("its_user_id") ||
    localStorage.getItem("user_id") ||
    localStorage.getItem("id") ||
    tokenData.id;

  const email =
    localStorage.getItem("its_user_email") ||
    localStorage.getItem("user_email") ||
    localStorage.getItem("email") ||
    tokenData.email;

  const role =
    localStorage.getItem("its_user_role") ||
    localStorage.getItem("user_role") ||
    localStorage.getItem("role") ||
    tokenData.role;

  if (userId) return "user_" + userId;
  if (email) return "email_" + String(email).toLowerCase().trim();
  return role ? "role_" + role : "anonymous";
}

function itsGetStorageKey() {
  return "intotheshift_customizer_state_v1_" + itsGetCurrentUserKey();
}

const ITS_LEGACY_KEY = "intotheshift_customizer_state_v1";
let itsSaveTimer = null;
let itsIsRestoringProject = false;

function itsGetCurrentProjectId() {
  const params = new URLSearchParams(window.location.search);
  const fromUrl = params.get("projectId") || params.get("id");
  if (fromUrl) {
    localStorage.setItem("its_current_project_id", fromUrl);
    localStorage.setItem("its_current_ad_id", fromUrl);
    return fromUrl;
  }
  return localStorage.getItem("its_current_project_id") || localStorage.getItem("its_current_ad_id") || "";
}

function itsSetCurrentProjectId(id) {
  if (!id) return;
  localStorage.setItem("its_current_project_id", String(id));
  localStorage.setItem("its_current_ad_id", String(id));
}

function itsCurrentStep() {
  const page = (window.location.pathname.split("/").pop() || "").toLowerCase();
  if (page.includes("questions")) return "questions";
  if (page.includes("parametrage")) return "parametrage";
  if (page.includes("campagne")) return "campagne";
  if (page.includes("validation")) return "validation";
  return "";
}

function itsTitleFromState(state) {
  const p = state?.parametrage || state?.meta || {};
  return p.titre || p.nom || state?.title || state?.subject || state?.theme?.title || state?.selectedTheme?.title || "Nouveau projet";
}

function itsLoad() {
  try {
    return JSON.parse(localStorage.getItem(itsGetStorageKey())) || {};
  } catch(e) {
    return {};
  }
}

function itsSave(state) {
  const safeState = state || {};
  localStorage.setItem(itsGetStorageKey(), JSON.stringify(safeState));
  itsQueueProjectSave(safeState);
}

function itsPatch(patch) {
  const current = itsLoad();
  const next = Object.assign({}, current, patch || {});
  itsSave(next);
  return next;
}

function itsClear() {
  localStorage.removeItem(itsGetStorageKey());
  localStorage.removeItem("its_current_project_id");
  localStorage.removeItem("its_current_ad_id");
}

function itsClearLegacyDraft() {
  localStorage.removeItem(ITS_LEGACY_KEY);
}

function itsSlugify(text) {
  return String(text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, "et")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function itsFormatDateFR(dateStr) {
  if (!dateStr) return "—";
  const p = String(dateStr).split("-");
  return p.length === 3 ? `${p[2]}/${p[1]}/${p[0]}` : dateStr;
}

function itsGetAdById(id) {
  return (window.ITS_CATALOGUE || []).find(ad => ad.id === id);
}

function itsClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function itsStartFromCatalogue(adId) {
  const ad = itsGetAdById(adId);
  if (!ad) return null;

  localStorage.removeItem("its_current_project_id");
  localStorage.removeItem("its_current_ad_id");

  const state = {
    selectedAdId: ad.id,
    title: ad.title,
    theme: ad.theme,
    audience: ad.audience,
    tags: ad.tags || ["Base assistée par IA", "Aide à la rédaction", "Relecture obligatoire"],
    duration: ad.duration || "8 à 12 min",
    chapters: itsClone(ad.chapters || []),
    meta: {
      nom: "Autodiagnostic " + ad.title,
      titre: "",
      desc: "Campagne interne Mon entreprise sur " + ad.title + ".",
      slug: itsSlugify(ad.title),
      date_lancement: "",
      date_cloture: ""
    },
    intro: ad.intro || "",
    packPassations: "",
    current_step: "questions",
    demographics: [
      { q:"À quelle catégorie appartenez-vous ?", opts:["Collaborateur·rice","Manager","Direction"], min_groupe:25 },
      { q:"Quel est votre service principal ?", opts:["Production","Maintenance","RH","Fonctions support","Autre"], min_groupe:10 }
    ],
    resources: [
      { titre:"Comprendre les bons réflexes", url:"https://www.monentreprise.fr/ressources/reflexes" },
      { titre:"Accéder aux consignes internes", url:"https://www.monentreprise.fr/ressources/consignes" }
    ]
  };

  itsSave(state);
  return state;
}

function itsQueueProjectSave(state) {
  if (itsIsRestoringProject) return;
  const token = itsGetToken();
  if (!token) return;

  const page = itsCurrentStep();
  if (!["questions", "parametrage", "campagne", "validation"].includes(page)) return;

  const hasContent = state && (
    (Array.isArray(state.chapters) && state.chapters.length) ||
    state.parametrage ||
    state.campagne ||
    state.transmission
  );
  if (!hasContent) return;

  clearTimeout(itsSaveTimer);
  itsSaveTimer = setTimeout(() => itsPersistProject(state).catch(console.error), 650);
}

async function itsPersistProject(state) {
  const token = itsGetToken();
  if (!token) return null;

  const projectId = itsGetCurrentProjectId();
  const step = itsCurrentStep() || state?.current_step || state?.step || "questions";
  const finalState = Object.assign({}, state || {}, { current_step: step, step });

  const configSent = finalState?.configTransmise === true || finalState?.config_transmise === true || finalState?.submitted === true || finalState?.transmission?.status === "sent" || finalState?.transmission?.payload;

  const payload = {
    projectId: projectId || undefined,
    title: itsTitleFromState(finalState),
    currentStep: step,
    status: configSent ? "sent" : "draft",
    organizationId: localStorage.getItem("its_selected_partner_client_id") || undefined,
    data: finalState
  };

  const res = await fetch(itsApiBase() + "/api/projects", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token
    },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || "Sauvegarde projet impossible");
  }

  const data = await res.json();
  if (data?.project?.id) itsSetCurrentProjectId(data.project.id);
  return data.project || null;
}

async function itsLoadProjectFromApi(projectId) {
  const token = itsGetToken();
  if (!token || !projectId) return null;
  const res = await fetch(itsApiBase() + "/api/projects/" + encodeURIComponent(projectId), {
    headers: { "Authorization": "Bearer " + token }
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data.project || null;
}

function itsProjectData(project) {
  let data = project?.data || {};
  if (typeof data === "string") {
    try { data = JSON.parse(data); } catch(e) { data = {}; }
  }
  if (data && data.payload && data.payload.chapters && !data.chapters) return data.payload;
  return data || {};
}

function itsStoreProjectLocally(project) {
  if (!project) return null;
  const data = itsProjectData(project);
  const step = project.currentStep || project.current_step || data.current_step || data.step || "questions";
  const state = Object.assign({}, data, { current_step: step, step, currentProjectId: project.id });
  itsIsRestoringProject = true;
  localStorage.setItem(itsGetStorageKey(), JSON.stringify(state));
  itsSetCurrentProjectId(project.id);
  itsIsRestoringProject = false;
  return state;
}

function itsNextUrlForProject(project) {
  const data = itsProjectData(project);
  const status = String(project?.status || data?.status || "draft").toLowerCase();
  const step = String(project?.currentStep || project?.current_step || data?.current_step || data?.step || "questions").toLowerCase();
  const id = project?.id ? `?projectId=${encodeURIComponent(project.id)}` : "";

  if (status === "published" || status === "results") return "mes-autodiagnostics.html";
  if (step === "validation") return "validation.html" + id;
  if (step === "campagne") return "campagne.html" + id;
  if (step === "parametrage") return "parametrage.html" + id;
  return "questions.html" + id;
}

async function itsOpenProject(projectId) {
  const project = await itsLoadProjectFromApi(projectId);
  if (!project) {
    alert("Impossible de recharger cet autodiagnostic.");
    return;
  }
  itsStoreProjectLocally(project);
  window.location.href = itsNextUrlForProject(project);
}

window.addEventListener("DOMContentLoaded", async function(){
  const params = new URLSearchParams(window.location.search);
  const projectId = params.get("projectId");
  if (!projectId) return;
  const page = itsCurrentStep();
  if (!["questions", "parametrage", "campagne", "validation"].includes(page)) return;
  const current = itsLoad();
  if (String(current.currentProjectId || localStorage.getItem("its_current_project_id") || "") === String(projectId) && current.chapters) return;
  const project = await itsLoadProjectFromApi(projectId);
  if (project) itsStoreProjectLocally(project);
});

