(function () {
  const currentPage = window.location.pathname.split("/").pop() || "home.html";

  const hiddenPages = new Set([
    "questions.html",
    "profils.html",
    "profiles.html",
    "scoring.html",
    "parametrage.html",
    "parametres.html",
    "campaign.html",
    "campagne.html",
    "validation.html",
    "publication.html",
    "kit-communication.html"
  ]);


  // Google Analytics / Google tag - Into The Shift
  function loadGoogleTag() {
    if (window.__ITS_GOOGLE_TAG_LOADED__) return;
    window.__ITS_GOOGLE_TAG_LOADED__ = true;

    const googleTagId = "GT-PLW5S2GX";
    const gaMeasurementId = "G-JC95LF9TF0";

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(googleTagId);
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () {
      window.dataLayer.push(arguments);
    };

    window.gtag("js", new Date());

    // Google Tag global, utile notamment pour Google Ads.
    window.gtag("config", googleTagId);

    // Propriété Google Analytics 4.
    window.gtag("config", gaMeasurementId);
  }

  loadGoogleTag();

  if (hiddenPages.has(currentPage)) return;

  function renderFooter() {
    let footer = document.getElementById("footer");

    if (!footer) {
      footer = document.createElement("footer");
      footer.id = "footer";
      document.body.appendChild(footer);
    }

    footer.className = "its-footer";
    footer.innerHTML = `
      <div class="its-footer-inner">
        <div class="its-footer-brand">
          <img src="/into-the-shift-logo-light.png" alt="Into The Shift" class="its-footer-logo">
          <p>Des diagnostics comportementaux anonymes pour transformer les intentions en pratiques observables.</p>
        </div>

        <nav class="its-footer-nav" aria-label="Navigation de pied de page">
          <div>
            <strong>Plateforme</strong>
            <a href="/home.html">Accueil</a>
            <a href="/index.html">Bibliothèque</a>
            <a href="/tarifs.html">Tarifs</a>
          </div>

          <div>
            <strong>Ressources</strong>
            <a href="/ressources.html">Tous les articles</a>
            <a href="/resources/cyber/guide-metier-cybersecurite.html">Cybersécurité</a>
            <a href="/resources/rse/guide-metier-rse.html">RSE & environnement</a>
          </div>

          <div>
            <strong>Contact</strong>
            <a href="/demande-information.html">Demande d’information</a>
            <a href="https://meandyoutoo.app/fr/autodiagnostic-diversite-et-inclusion" target="_blank" rel="noopener">Catalogue Inclusion Expert</a>
          </div>
        </nav>
      </div>

      <div class="its-footer-bottom">
        <span>© Into The Shift</span>
        <span>Diagnostic anonyme · Sans compte répondant · Résultats collectifs</span>
      </div>
    `;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderFooter);
  } else {
    renderFooter();
  }
})();
