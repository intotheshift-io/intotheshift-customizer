/**
 * catalogue-securite.js — INTO THE SHIFT
 * Domaine : Sécurité & sûreté au travail (9 ADs)
 *
 * Dépend de : catalogue-core.js
 */

(function () {
  var T = window._ITS_CORE.templates;

  // ─────────────────────────────────────────────────────────────────────────
  //  QUESTIONS RÉDIGÉES — Sécurité & sûreté
  //  Étend window.CUSTOM_QUESTIONS avec les entrées de ce domaine.
  // ─────────────────────────────────────────────────────────────────────────

  Object.assign(window.CUSTOM_QUESTIONS, {
    // ─── À coller dans catalogue-securite.js ──────────────────────────────
  // Clé : "culture-securite-terrain" dans Object.assign(window.CUSTOM_QUESTIONS,

  "culture-securite-terrain": {
    0: [
      {
        type: "choix",
        text: "Vous devez réaliser une opération de maintenance sur une machine. La procédure prévoit une consignation complète avant intervention. Votre chef d'équipe est absent ce matin et personne ne vous surveille. La machine tourne depuis des années sans incident.",
        tags: ["consignes", "autonomie"],
        answers: [
          { text: "Je réalise l'opération sans consignation — la machine est connue et le risque est maîtrisé.", score: 0 },
          { text: "Je consigne la machine comme prévu, même sans surveillance.", score: 2 },
          { text: "Je fais une consignation partielle pour gagner du temps — les étapes critiques sont respectées.", score: 0.5 },
          { text: "J'attends le retour de mon chef d'équipe avant d'intervenir.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous adaptez encore votre niveau d'exigence selon le contexte et la surveillance", desc: "Zone connue, chef absent, fin de journée, collègue expérimenté qui fait autrement : autant de contextes où vos standards de sécurité peuvent s'adapter. C'est précisément dans ces situations que les accidents surviennent — la familiarité avec le risque et l'absence de surveillance sont des facteurs aggravants, pas des facteurs protecteurs. L'enjeu est d'appliquer les procédures complètes indépendamment du contexte." },
          moyen: { label: "Pratiques en développement", titre: "Vous respectez les procédures dans la plupart des situations mais vous cédez encore dans les contextes de pression forte", desc: "Vous appliquez les procédures sans problème dans les situations ordinaires. Mais sous pression directe de votre hiérarchie, en fin de journée, ou face à un collègue expérimenté qui fait autrement, vos standards peuvent encore s'adapter. L'enjeu est de tenir ces situations précisément parce qu'elles sont les plus courantes dans les contextes d'accident." },
          haut: { label: "Réflexes installés", titre: "Vous appliquez les procédures complètes dans tous les contextes, sans adaptation selon la surveillance ou la pression", desc: "Vous retournez chercher votre EPI même pour une intervention courte en zone connue. Vous maintenez la vérification complète en fin de journée. Vous suivez la procédure même quand votre chef expérimenté fait autrement. Cette constance absolue — qui suppose d'accepter parfois d'être le seul à la tenir — est le fondement d'une culture de sécurité solide." },
        },
      }, 
      {
        type: "choix",
        text: "Dans votre atelier, tout le monde court-circuite une étape de vérification jugée trop longue pour des opérations courtes. Ça fait des années que ça se passe comme ça, sans accident. Un nouveau collègue vous demande si c'est normal.",
        tags: ["consignes", "normalisation"],
        answers: [
          { text: "Je lui explique que c'est la pratique ici — la procédure est trop contraignante pour ce type d'opération.", score: 0 },
          { text: "Je lui dis de suivre la procédure complète et je soulève le sujet avec mon responsable.", score: 2 },
          { text: "Je lui dis de faire comme tout le monde pour l'instant et qu'on verra si ça change.", score: 0 },
          { text: "Je lui explique le raccourci tout en lui précisant que ce n'est pas vraiment conforme.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous adaptez encore votre niveau d'exigence selon le contexte et la surveillance", desc: "Zone connue, chef absent, fin de journée, collègue expérimenté qui fait autrement : autant de contextes où vos standards de sécurité peuvent s'adapter. C'est précisément dans ces situations que les accidents surviennent — la familiarité avec le risque et l'absence de surveillance sont des facteurs aggravants, pas des facteurs protecteurs. L'enjeu est d'appliquer les procédures complètes indépendamment du contexte." },
          moyen: { label: "Pratiques en développement", titre: "Vous respectez les procédures dans la plupart des situations mais vous cédez encore dans les contextes de pression forte", desc: "Vous appliquez les procédures sans problème dans les situations ordinaires. Mais sous pression directe de votre hiérarchie, en fin de journée, ou face à un collègue expérimenté qui fait autrement, vos standards peuvent encore s'adapter. L'enjeu est de tenir ces situations précisément parce qu'elles sont les plus courantes dans les contextes d'accident." },
          haut: { label: "Réflexes installés", titre: "Vous appliquez les procédures complètes dans tous les contextes, sans adaptation selon la surveillance ou la pression", desc: "Vous retournez chercher votre EPI même pour une intervention courte en zone connue. Vous maintenez la vérification complète en fin de journée. Vous suivez la procédure même quand votre chef expérimenté fait autrement. Cette constance absolue — qui suppose d'accepter parfois d'être le seul à la tenir — est le fondement d'une culture de sécurité solide." },
        },
      }, 
      {
        type: "likert",
        text: "Vous appliquez les procédures de sécurité dans leur intégralité, y compris quand personne ne regarde et quand la tâche vous semble bien connue.",
        tags: ["consignes", "régularité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous adaptez encore votre niveau d'exigence selon le contexte et la surveillance", desc: "Zone connue, chef absent, fin de journée, collègue expérimenté qui fait autrement : autant de contextes où vos standards de sécurité peuvent s'adapter. C'est précisément dans ces situations que les accidents surviennent — la familiarité avec le risque et l'absence de surveillance sont des facteurs aggravants, pas des facteurs protecteurs. L'enjeu est d'appliquer les procédures complètes indépendamment du contexte." },
          moyen: { label: "Pratiques en développement", titre: "Vous respectez les procédures dans la plupart des situations mais vous cédez encore dans les contextes de pression forte", desc: "Vous appliquez les procédures sans problème dans les situations ordinaires. Mais sous pression directe de votre hiérarchie, en fin de journée, ou face à un collègue expérimenté qui fait autrement, vos standards peuvent encore s'adapter. L'enjeu est de tenir ces situations précisément parce qu'elles sont les plus courantes dans les contextes d'accident." },
          haut: { label: "Réflexes installés", titre: "Vous appliquez les procédures complètes dans tous les contextes, sans adaptation selon la surveillance ou la pression", desc: "Vous retournez chercher votre EPI même pour une intervention courte en zone connue. Vous maintenez la vérification complète en fin de journée. Vous suivez la procédure même quand votre chef expérimenté fait autrement. Cette constance absolue — qui suppose d'accepter parfois d'être le seul à la tenir — est le fondement d'une culture de sécurité solide." },
        },
      }, 
      {
        type: "choix",
        text: "Votre chef vous demande d'accélérer une opération pour tenir un délai client. Pour gagner 20 minutes, il faudrait sauter une étape de vérification non obligatoire réglementairement mais inscrite dans votre procédure interne.",
        tags: ["consignes", "pression"],
        answers: [
          { text: "Je saute l'étape — mon chef a demandé et elle n'est pas réglementairement obligatoire.", score: 0 },
          { text: "Je maintiens la procédure complète et j'explique à mon chef pourquoi cette étape est là.", score: 2 },
          { text: "Je réalise une version allégée de la vérification pour trouver un compromis.", score: 0.5 },
          { text: "Je fais l'opération sans l'étape mais je le note dans mon compte rendu.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous adaptez encore votre niveau d'exigence selon le contexte et la surveillance", desc: "Zone connue, chef absent, fin de journée, collègue expérimenté qui fait autrement : autant de contextes où vos standards de sécurité peuvent s'adapter. C'est précisément dans ces situations que les accidents surviennent — la familiarité avec le risque et l'absence de surveillance sont des facteurs aggravants, pas des facteurs protecteurs. L'enjeu est d'appliquer les procédures complètes indépendamment du contexte." },
          moyen: { label: "Pratiques en développement", titre: "Vous respectez les procédures dans la plupart des situations mais vous cédez encore dans les contextes de pression forte", desc: "Vous appliquez les procédures sans problème dans les situations ordinaires. Mais sous pression directe de votre hiérarchie, en fin de journée, ou face à un collègue expérimenté qui fait autrement, vos standards peuvent encore s'adapter. L'enjeu est de tenir ces situations précisément parce qu'elles sont les plus courantes dans les contextes d'accident." },
          haut: { label: "Réflexes installés", titre: "Vous appliquez les procédures complètes dans tous les contextes, sans adaptation selon la surveillance ou la pression", desc: "Vous retournez chercher votre EPI même pour une intervention courte en zone connue. Vous maintenez la vérification complète en fin de journée. Vous suivez la procédure même quand votre chef expérimenté fait autrement. Cette constance absolue — qui suppose d'accepter parfois d'être le seul à la tenir — est le fondement d'une culture de sécurité solide." },
        },
      }, 
      {
        type: "choix",
        text: "Mehdi, 20 ans d'expérience sur ce type d'installation, réalise une opération sans certaines protections collectives. Il dit qu'il connaît trop bien la machine pour avoir besoin de ça.",
        tags: ["consignes", "expérience"],
        answers: [
          { text: "Je ne dis rien — il est bien plus expérimenté que moi et sait ce qu'il fait.", score: 0 },
          { text: "Je lui signale ce que j'observe, sans le mettre en cause devant le groupe.", score: 2 },
          { text: "Je l'observe encore un moment pour voir s'il prend d'autres risques avant de réagir.", score: 0 },
          { text: "J'en parle à notre responsable après la fin de l'opération.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous adaptez encore votre niveau d'exigence selon le contexte et la surveillance", desc: "Zone connue, chef absent, fin de journée, collègue expérimenté qui fait autrement : autant de contextes où vos standards de sécurité peuvent s'adapter. C'est précisément dans ces situations que les accidents surviennent — la familiarité avec le risque et l'absence de surveillance sont des facteurs aggravants, pas des facteurs protecteurs. L'enjeu est d'appliquer les procédures complètes indépendamment du contexte." },
          moyen: { label: "Pratiques en développement", titre: "Vous respectez les procédures dans la plupart des situations mais vous cédez encore dans les contextes de pression forte", desc: "Vous appliquez les procédures sans problème dans les situations ordinaires. Mais sous pression directe de votre hiérarchie, en fin de journée, ou face à un collègue expérimenté qui fait autrement, vos standards peuvent encore s'adapter. L'enjeu est de tenir ces situations précisément parce qu'elles sont les plus courantes dans les contextes d'accident." },
          haut: { label: "Réflexes installés", titre: "Vous appliquez les procédures complètes dans tous les contextes, sans adaptation selon la surveillance ou la pression", desc: "Vous retournez chercher votre EPI même pour une intervention courte en zone connue. Vous maintenez la vérification complète en fin de journée. Vous suivez la procédure même quand votre chef expérimenté fait autrement. Cette constance absolue — qui suppose d'accepter parfois d'être le seul à la tenir — est le fondement d'une culture de sécurité solide." },
        },
      }, 
      {
        type: "likert",
        text: "Vous maintenez les procédures complètes même quand votre hiérarchie vous demande d'accélérer et même quand vos collègues expérimentés font autrement.",
        tags: ["consignes", "résistance"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous adaptez encore votre niveau d'exigence selon le contexte et la surveillance", desc: "Zone connue, chef absent, fin de journée, collègue expérimenté qui fait autrement : autant de contextes où vos standards de sécurité peuvent s'adapter. C'est précisément dans ces situations que les accidents surviennent — la familiarité avec le risque et l'absence de surveillance sont des facteurs aggravants, pas des facteurs protecteurs. L'enjeu est d'appliquer les procédures complètes indépendamment du contexte." },
          moyen: { label: "Pratiques en développement", titre: "Vous respectez les procédures dans la plupart des situations mais vous cédez encore dans les contextes de pression forte", desc: "Vous appliquez les procédures sans problème dans les situations ordinaires. Mais sous pression directe de votre hiérarchie, en fin de journée, ou face à un collègue expérimenté qui fait autrement, vos standards peuvent encore s'adapter. L'enjeu est de tenir ces situations précisément parce qu'elles sont les plus courantes dans les contextes d'accident." },
          haut: { label: "Réflexes installés", titre: "Vous appliquez les procédures complètes dans tous les contextes, sans adaptation selon la surveillance ou la pression", desc: "Vous retournez chercher votre EPI même pour une intervention courte en zone connue. Vous maintenez la vérification complète en fin de journée. Vous suivez la procédure même quand votre chef expérimenté fait autrement. Cette constance absolue — qui suppose d'accepter parfois d'être le seul à la tenir — est le fondement d'une culture de sécurité solide." },
        },
      }, 
      {
        type: "choix",
        text: "Il est 17h45, vous finissez dans 15 minutes. Une opération courante reste à faire. La procédure prévoit une vérification préalable qui prend 10 minutes. Vous l'avez faite des dizaines de fois.",
        tags: ["consignes", "fin de journée"],
        answers: [
          { text: "Je réalise l'opération sans la vérification — je la connais par cœur et je finis à l'heure.", score: 0 },
          { text: "Je fais la vérification complète même si ça me fait finir en retard.", score: 2 },
          { text: "Je fais une vérification rapide des points essentiels pour tenir les horaires.", score: 0.5 },
          { text: "Je laisse l'opération pour demain matin — mieux vaut ne pas commencer une tâche qu'on ne peut pas finir correctement.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous adaptez encore votre niveau d'exigence selon le contexte et la surveillance", desc: "Zone connue, chef absent, fin de journée, collègue expérimenté qui fait autrement : autant de contextes où vos standards de sécurité peuvent s'adapter. C'est précisément dans ces situations que les accidents surviennent — la familiarité avec le risque et l'absence de surveillance sont des facteurs aggravants, pas des facteurs protecteurs. L'enjeu est d'appliquer les procédures complètes indépendamment du contexte." },
          moyen: { label: "Pratiques en développement", titre: "Vous respectez les procédures dans la plupart des situations mais vous cédez encore dans les contextes de pression forte", desc: "Vous appliquez les procédures sans problème dans les situations ordinaires. Mais sous pression directe de votre hiérarchie, en fin de journée, ou face à un collègue expérimenté qui fait autrement, vos standards peuvent encore s'adapter. L'enjeu est de tenir ces situations précisément parce qu'elles sont les plus courantes dans les contextes d'accident." },
          haut: { label: "Réflexes installés", titre: "Vous appliquez les procédures complètes dans tous les contextes, sans adaptation selon la surveillance ou la pression", desc: "Vous retournez chercher votre EPI même pour une intervention courte en zone connue. Vous maintenez la vérification complète en fin de journée. Vous suivez la procédure même quand votre chef expérimenté fait autrement. Cette constance absolue — qui suppose d'accepter parfois d'être le seul à la tenir — est le fondement d'une culture de sécurité solide." },
        },
      }, 
      {
        type: "choix",
        text: "Votre équipe a développé une façon de faire qui s'écarte légèrement d'une consigne mais que tout le monde trouve plus pratique. Aucun incident n'est survenu depuis deux ans.",
        tags: ["consignes", "collectif"],
        answers: [
          { text: "Je continue comme l'équipe — deux ans sans incident, c'est la preuve que ça fonctionne.", score: 0 },
          { text: "Je soulève le sujet avec mon responsable pour régulariser ou modifier la procédure officiellement.", score: 2 },
          { text: "Je suis l'équipe mais je signale l'écart lors du prochain audit.", score: 1 },
          { text: "Je suis la consigne officielle tout seul — je ne peux pas forcer l'équipe à faire pareil.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous adaptez encore votre niveau d'exigence selon le contexte et la surveillance", desc: "Zone connue, chef absent, fin de journée, collègue expérimenté qui fait autrement : autant de contextes où vos standards de sécurité peuvent s'adapter. C'est précisément dans ces situations que les accidents surviennent — la familiarité avec le risque et l'absence de surveillance sont des facteurs aggravants, pas des facteurs protecteurs. L'enjeu est d'appliquer les procédures complètes indépendamment du contexte." },
          moyen: { label: "Pratiques en développement", titre: "Vous respectez les procédures dans la plupart des situations mais vous cédez encore dans les contextes de pression forte", desc: "Vous appliquez les procédures sans problème dans les situations ordinaires. Mais sous pression directe de votre hiérarchie, en fin de journée, ou face à un collègue expérimenté qui fait autrement, vos standards peuvent encore s'adapter. L'enjeu est de tenir ces situations précisément parce qu'elles sont les plus courantes dans les contextes d'accident." },
          haut: { label: "Réflexes installés", titre: "Vous appliquez les procédures complètes dans tous les contextes, sans adaptation selon la surveillance ou la pression", desc: "Vous retournez chercher votre EPI même pour une intervention courte en zone connue. Vous maintenez la vérification complète en fin de journée. Vous suivez la procédure même quand votre chef expérimenté fait autrement. Cette constance absolue — qui suppose d'accepter parfois d'être le seul à la tenir — est le fondement d'une culture de sécurité solide." },
        },
      }, 
      {
        type: "likert",
        text: "Quand vous observez un écart entre la pratique réelle et la procédure officielle, vous le signalez même si l'écart paraît mineur et que personne d'autre ne réagit.",
        tags: ["consignes", "signalement"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous adaptez encore votre niveau d'exigence selon le contexte et la surveillance", desc: "Zone connue, chef absent, fin de journée, collègue expérimenté qui fait autrement : autant de contextes où vos standards de sécurité peuvent s'adapter. C'est précisément dans ces situations que les accidents surviennent — la familiarité avec le risque et l'absence de surveillance sont des facteurs aggravants, pas des facteurs protecteurs. L'enjeu est d'appliquer les procédures complètes indépendamment du contexte." },
          moyen: { label: "Pratiques en développement", titre: "Vous respectez les procédures dans la plupart des situations mais vous cédez encore dans les contextes de pression forte", desc: "Vous appliquez les procédures sans problème dans les situations ordinaires. Mais sous pression directe de votre hiérarchie, en fin de journée, ou face à un collègue expérimenté qui fait autrement, vos standards peuvent encore s'adapter. L'enjeu est de tenir ces situations précisément parce qu'elles sont les plus courantes dans les contextes d'accident." },
          haut: { label: "Réflexes installés", titre: "Vous appliquez les procédures complètes dans tous les contextes, sans adaptation selon la surveillance ou la pression", desc: "Vous retournez chercher votre EPI même pour une intervention courte en zone connue. Vous maintenez la vérification complète en fin de journée. Vous suivez la procédure même quand votre chef expérimenté fait autrement. Cette constance absolue — qui suppose d'accepter parfois d'être le seul à la tenir — est le fondement d'une culture de sécurité solide." },
        },
      }, 
      {
        type: "choix",
        text: "Vous pénétrez dans une zone que vous connaissez parfaitement. L'affichage indique qu'un EPI spécifique est requis. Vous l'avez oublié à votre poste, à 5 minutes.",
        tags: ["consignes", "zone connue"],
        answers: [
          { text: "J'entre quand même — je connais la zone et mon intervention sera courte.", score: 0 },
          { text: "Je retourne chercher mon EPI avant d'entrer.", score: 2 },
          { text: "Je demande à un collègue de me prêter le sien.", score: 1 },
          { text: "Je vérifie d'abord si l'EPI est vraiment obligatoire pour mon type d'intervention.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous adaptez encore votre niveau d'exigence selon le contexte et la surveillance", desc: "Zone connue, chef absent, fin de journée, collègue expérimenté qui fait autrement : autant de contextes où vos standards de sécurité peuvent s'adapter. C'est précisément dans ces situations que les accidents surviennent — la familiarité avec le risque et l'absence de surveillance sont des facteurs aggravants, pas des facteurs protecteurs. L'enjeu est d'appliquer les procédures complètes indépendamment du contexte." },
          moyen: { label: "Pratiques en développement", titre: "Vous respectez les procédures dans la plupart des situations mais vous cédez encore dans les contextes de pression forte", desc: "Vous appliquez les procédures sans problème dans les situations ordinaires. Mais sous pression directe de votre hiérarchie, en fin de journée, ou face à un collègue expérimenté qui fait autrement, vos standards peuvent encore s'adapter. L'enjeu est de tenir ces situations précisément parce qu'elles sont les plus courantes dans les contextes d'accident." },
          haut: { label: "Réflexes installés", titre: "Vous appliquez les procédures complètes dans tous les contextes, sans adaptation selon la surveillance ou la pression", desc: "Vous retournez chercher votre EPI même pour une intervention courte en zone connue. Vous maintenez la vérification complète en fin de journée. Vous suivez la procédure même quand votre chef expérimenté fait autrement. Cette constance absolue — qui suppose d'accepter parfois d'être le seul à la tenir — est le fondement d'une culture de sécurité solide." },
        },
      }
    ],

    1: [
      {
        type: "choix",
        text: "Dans votre service, une alarme se déclenche régulièrement pour des raisons techniques sans rapport avec un danger réel. Tout le monde a pris l'habitude de l'ignorer. Elle se déclenche à nouveau.",
        tags: ["déviance", "normalisation"],
        answers: [
          { text: "Je l'ignore comme d'habitude — c'est une fausse alarme chronique, tout le monde le sait.", score: 0 },
          { text: "Je sors de la zone et je signale le déclenchement, même si c'est probablement une fausse alarme.", score: 2 },
          { text: "Je vérifie rapidement si quelque chose d'anormal est visible avant de décider.", score: 1 },
          { text: "J'attends de voir si mes collègues réagissent avant de faire quoi que ce soit.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous vous alignez sur les pratiques du groupe même quand elles s'écartent des procédures", desc: "Deux ans sans incident, tout le monde fait comme ça, l'ancien qui connaît mieux que la procédure : la normalisation des déviances est l'un des mécanismes les plus documentés dans les accidents industriels graves. Le fait qu'une pratique non conforme n'ait pas encore causé d'accident n'est pas une preuve de sa sécurité — c'est une accumulation de chance. L'enjeu est de traiter chaque écart comme un signal, indépendamment du bilan." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux déviances évidentes mais les glissements progressifs vous échappent encore", desc: "Vous intervenez quand les déviances sont visibles et récentes. Mais les pratiques qui se sont installées progressivement — le raccourci que tout le monde a fini par adopter, la vérification que vous avez vous-même commencé à alléger — sont plus difficiles à voir et à traiter. L'enjeu est de maintenir un regard critique sur vos propres pratiques dans la durée." },
          haut: { label: "Réflexes installés", titre: "Vous résistez à la normalisation des déviances et vous intervenez sur les pratiques non conformes, même anciennement installées", desc: "Vous intervenez quand vous observez un écart chez un collègue ou un prestataire. Vous signalez les pratiques collectives déviantes lors des REX même quand c'est inconfortable. Vous reconnaissez vos propres glissements et vous les corrigez sans attendre un incident. Cette résistance active à la normalisation est le comportement qui évite que les 'petits écarts sans conséquence' deviennent des accidents graves." },
        },
      }, 
      {
        type: "likert",
        text: "Vous traitez chaque alarme et chaque signal de sécurité avec la même attention, même si des déclenchements répétés vous ont appris qu'ils sont souvent sans danger réel.",
        tags: ["déviance", "vigilance"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous vous alignez sur les pratiques du groupe même quand elles s'écartent des procédures", desc: "Deux ans sans incident, tout le monde fait comme ça, l'ancien qui connaît mieux que la procédure : la normalisation des déviances est l'un des mécanismes les plus documentés dans les accidents industriels graves. Le fait qu'une pratique non conforme n'ait pas encore causé d'accident n'est pas une preuve de sa sécurité — c'est une accumulation de chance. L'enjeu est de traiter chaque écart comme un signal, indépendamment du bilan." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux déviances évidentes mais les glissements progressifs vous échappent encore", desc: "Vous intervenez quand les déviances sont visibles et récentes. Mais les pratiques qui se sont installées progressivement — le raccourci que tout le monde a fini par adopter, la vérification que vous avez vous-même commencé à alléger — sont plus difficiles à voir et à traiter. L'enjeu est de maintenir un regard critique sur vos propres pratiques dans la durée." },
          haut: { label: "Réflexes installés", titre: "Vous résistez à la normalisation des déviances et vous intervenez sur les pratiques non conformes, même anciennement installées", desc: "Vous intervenez quand vous observez un écart chez un collègue ou un prestataire. Vous signalez les pratiques collectives déviantes lors des REX même quand c'est inconfortable. Vous reconnaissez vos propres glissements et vous les corrigez sans attendre un incident. Cette résistance active à la normalisation est le comportement qui évite que les 'petits écarts sans conséquence' deviennent des accidents graves." },
        },
      }, 
      {
        type: "choix",
        text: "Kevin, un ancien de l'équipe, vous explique une façon de faire plus rapide qui s'écarte de la procédure officielle. 'On fait tous comme ça depuis des années et ça n'a jamais posé de problème.'",
        tags: ["déviance", "anciens"],
        answers: [
          { text: "Je suis son conseil — il connaît le terrain mieux que la procédure théorique.", score: 0 },
          { text: "Je lui pose des questions sur pourquoi la procédure officielle prévoit autre chose.", score: 1.5 },
          { text: "Je suis la procédure officielle et je signale l'écart à mon responsable.", score: 2 },
          { text: "Je fais comme lui pour l'instant et je me renseigne plus tard.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous vous alignez sur les pratiques du groupe même quand elles s'écartent des procédures", desc: "Deux ans sans incident, tout le monde fait comme ça, l'ancien qui connaît mieux que la procédure : la normalisation des déviances est l'un des mécanismes les plus documentés dans les accidents industriels graves. Le fait qu'une pratique non conforme n'ait pas encore causé d'accident n'est pas une preuve de sa sécurité — c'est une accumulation de chance. L'enjeu est de traiter chaque écart comme un signal, indépendamment du bilan." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux déviances évidentes mais les glissements progressifs vous échappent encore", desc: "Vous intervenez quand les déviances sont visibles et récentes. Mais les pratiques qui se sont installées progressivement — le raccourci que tout le monde a fini par adopter, la vérification que vous avez vous-même commencé à alléger — sont plus difficiles à voir et à traiter. L'enjeu est de maintenir un regard critique sur vos propres pratiques dans la durée." },
          haut: { label: "Réflexes installés", titre: "Vous résistez à la normalisation des déviances et vous intervenez sur les pratiques non conformes, même anciennement installées", desc: "Vous intervenez quand vous observez un écart chez un collègue ou un prestataire. Vous signalez les pratiques collectives déviantes lors des REX même quand c'est inconfortable. Vous reconnaissez vos propres glissements et vous les corrigez sans attendre un incident. Cette résistance active à la normalisation est le comportement qui évite que les 'petits écarts sans conséquence' deviennent des accidents graves." },
        },
      }, 
      {
        type: "choix",
        text: "Un prestataire qui intervient régulièrement sur votre site ne porte pas systématiquement ses EPI. Personne ne lui a jamais rien dit. Vous le croisez à nouveau sans protection.",
        tags: ["déviance", "pression"],
        answers: [
          { text: "Je laisse — il intervient depuis longtemps ici, ce n'est pas à moi de le recadrer.", score: 0 },
          { text: "Je lui signale que les EPI sont obligatoires sur ce site, poliment mais clairement.", score: 2 },
          { text: "J'en parle à mon responsable pour qu'il intervienne.", score: 1 },
          { text: "Je le note et j'en parle lors du prochain point sécurité.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous vous alignez sur les pratiques du groupe même quand elles s'écartent des procédures", desc: "Deux ans sans incident, tout le monde fait comme ça, l'ancien qui connaît mieux que la procédure : la normalisation des déviances est l'un des mécanismes les plus documentés dans les accidents industriels graves. Le fait qu'une pratique non conforme n'ait pas encore causé d'accident n'est pas une preuve de sa sécurité — c'est une accumulation de chance. L'enjeu est de traiter chaque écart comme un signal, indépendamment du bilan." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux déviances évidentes mais les glissements progressifs vous échappent encore", desc: "Vous intervenez quand les déviances sont visibles et récentes. Mais les pratiques qui se sont installées progressivement — le raccourci que tout le monde a fini par adopter, la vérification que vous avez vous-même commencé à alléger — sont plus difficiles à voir et à traiter. L'enjeu est de maintenir un regard critique sur vos propres pratiques dans la durée." },
          haut: { label: "Réflexes installés", titre: "Vous résistez à la normalisation des déviances et vous intervenez sur les pratiques non conformes, même anciennement installées", desc: "Vous intervenez quand vous observez un écart chez un collègue ou un prestataire. Vous signalez les pratiques collectives déviantes lors des REX même quand c'est inconfortable. Vous reconnaissez vos propres glissements et vous les corrigez sans attendre un incident. Cette résistance active à la normalisation est le comportement qui évite que les 'petits écarts sans conséquence' deviennent des accidents graves." },
        },
      }, 
      {
        type: "choix",
        text: "Une étape de nettoyage après intervention est souvent sautée par manque de temps. Vous l'avez vous-même évitée plusieurs fois. Un collègue vient de glisser sur une zone non nettoyée.",
        tags: ["déviance", "habitude"],
        answers: [
          { text: "Je signale l'accident mais je ne mentionne pas que l'étape était régulièrement sautée.", score: 0 },
          { text: "Je signale l'accident et je mentionne la pratique collective de sauter cette étape — c'est la cause réelle.", score: 2 },
          { text: "Je signale l'accident sans entrer dans les détails — l'enquête fera son travail.", score: 0.5 },
          { text: "Je nettoie la zone et je m'assure que ça ne se reproduit pas sans en faire un sujet formel.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous vous alignez sur les pratiques du groupe même quand elles s'écartent des procédures", desc: "Deux ans sans incident, tout le monde fait comme ça, l'ancien qui connaît mieux que la procédure : la normalisation des déviances est l'un des mécanismes les plus documentés dans les accidents industriels graves. Le fait qu'une pratique non conforme n'ait pas encore causé d'accident n'est pas une preuve de sa sécurité — c'est une accumulation de chance. L'enjeu est de traiter chaque écart comme un signal, indépendamment du bilan." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux déviances évidentes mais les glissements progressifs vous échappent encore", desc: "Vous intervenez quand les déviances sont visibles et récentes. Mais les pratiques qui se sont installées progressivement — le raccourci que tout le monde a fini par adopter, la vérification que vous avez vous-même commencé à alléger — sont plus difficiles à voir et à traiter. L'enjeu est de maintenir un regard critique sur vos propres pratiques dans la durée." },
          haut: { label: "Réflexes installés", titre: "Vous résistez à la normalisation des déviances et vous intervenez sur les pratiques non conformes, même anciennement installées", desc: "Vous intervenez quand vous observez un écart chez un collègue ou un prestataire. Vous signalez les pratiques collectives déviantes lors des REX même quand c'est inconfortable. Vous reconnaissez vos propres glissements et vous les corrigez sans attendre un incident. Cette résistance active à la normalisation est le comportement qui évite que les 'petits écarts sans conséquence' deviennent des accidents graves." },
        },
      }, 
      {
        type: "likert",
        text: "Vous intervenez auprès d'un collègue ou d'un prestataire qui ne respecte pas une règle de sécurité, même quand personne d'autre ne réagit et même si la relation peut être inconfortable.",
        tags: ["déviance", "courage"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous vous alignez sur les pratiques du groupe même quand elles s'écartent des procédures", desc: "Deux ans sans incident, tout le monde fait comme ça, l'ancien qui connaît mieux que la procédure : la normalisation des déviances est l'un des mécanismes les plus documentés dans les accidents industriels graves. Le fait qu'une pratique non conforme n'ait pas encore causé d'accident n'est pas une preuve de sa sécurité — c'est une accumulation de chance. L'enjeu est de traiter chaque écart comme un signal, indépendamment du bilan." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux déviances évidentes mais les glissements progressifs vous échappent encore", desc: "Vous intervenez quand les déviances sont visibles et récentes. Mais les pratiques qui se sont installées progressivement — le raccourci que tout le monde a fini par adopter, la vérification que vous avez vous-même commencé à alléger — sont plus difficiles à voir et à traiter. L'enjeu est de maintenir un regard critique sur vos propres pratiques dans la durée." },
          haut: { label: "Réflexes installés", titre: "Vous résistez à la normalisation des déviances et vous intervenez sur les pratiques non conformes, même anciennement installées", desc: "Vous intervenez quand vous observez un écart chez un collègue ou un prestataire. Vous signalez les pratiques collectives déviantes lors des REX même quand c'est inconfortable. Vous reconnaissez vos propres glissements et vous les corrigez sans attendre un incident. Cette résistance active à la normalisation est le comportement qui évite que les 'petits écarts sans conséquence' deviennent des accidents graves." },
        },
      }, 
      {
        type: "choix",
        text: "Votre responsable réalise lui-même régulièrement une opération sans les protections requises. Il est pressé et compétent. Vous l'observez.",
        tags: ["déviance", "hiérarchie"],
        answers: [
          { text: "Je ne dis rien — on ne reprend pas son chef sur la sécurité.", score: 0 },
          { text: "Je lui signale ce que j'observe après l'opération, en privé.", score: 2 },
          { text: "Je l'observe et j'attends qu'un incident survienne pour que le sujet soit traité.", score: 0 },
          { text: "J'en parle au responsable sécurité sans en parler à mon chef directement.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous vous alignez sur les pratiques du groupe même quand elles s'écartent des procédures", desc: "Deux ans sans incident, tout le monde fait comme ça, l'ancien qui connaît mieux que la procédure : la normalisation des déviances est l'un des mécanismes les plus documentés dans les accidents industriels graves. Le fait qu'une pratique non conforme n'ait pas encore causé d'accident n'est pas une preuve de sa sécurité — c'est une accumulation de chance. L'enjeu est de traiter chaque écart comme un signal, indépendamment du bilan." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux déviances évidentes mais les glissements progressifs vous échappent encore", desc: "Vous intervenez quand les déviances sont visibles et récentes. Mais les pratiques qui se sont installées progressivement — le raccourci que tout le monde a fini par adopter, la vérification que vous avez vous-même commencé à alléger — sont plus difficiles à voir et à traiter. L'enjeu est de maintenir un regard critique sur vos propres pratiques dans la durée." },
          haut: { label: "Réflexes installés", titre: "Vous résistez à la normalisation des déviances et vous intervenez sur les pratiques non conformes, même anciennement installées", desc: "Vous intervenez quand vous observez un écart chez un collègue ou un prestataire. Vous signalez les pratiques collectives déviantes lors des REX même quand c'est inconfortable. Vous reconnaissez vos propres glissements et vous les corrigez sans attendre un incident. Cette résistance active à la normalisation est le comportement qui évite que les 'petits écarts sans conséquence' deviennent des accidents graves." },
        },
      }, 
      {
        type: "choix",
        text: "Lors d'un REX sur un presqu'accident, il apparaît clairement qu'une pratique non conforme était répandue dans l'équipe depuis longtemps. Plusieurs personnes hésitent à le dire ouvertement.",
        tags: ["déviance", "REX"],
        answers: [
          { text: "Je me tais aussi — dénoncer une pratique collective ferait porter la responsabilité sur tout le monde.", score: 0 },
          { text: "Je confirme que la pratique était répandue — le REX ne peut être utile que s'il repose sur les faits réels.", score: 2 },
          { text: "Je dis que j'ai parfois vu des écarts sans préciser que c'était systématique.", score: 0.5 },
          { text: "J'attends que quelqu'un d'autre le dise en premier.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous vous alignez sur les pratiques du groupe même quand elles s'écartent des procédures", desc: "Deux ans sans incident, tout le monde fait comme ça, l'ancien qui connaît mieux que la procédure : la normalisation des déviances est l'un des mécanismes les plus documentés dans les accidents industriels graves. Le fait qu'une pratique non conforme n'ait pas encore causé d'accident n'est pas une preuve de sa sécurité — c'est une accumulation de chance. L'enjeu est de traiter chaque écart comme un signal, indépendamment du bilan." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux déviances évidentes mais les glissements progressifs vous échappent encore", desc: "Vous intervenez quand les déviances sont visibles et récentes. Mais les pratiques qui se sont installées progressivement — le raccourci que tout le monde a fini par adopter, la vérification que vous avez vous-même commencé à alléger — sont plus difficiles à voir et à traiter. L'enjeu est de maintenir un regard critique sur vos propres pratiques dans la durée." },
          haut: { label: "Réflexes installés", titre: "Vous résistez à la normalisation des déviances et vous intervenez sur les pratiques non conformes, même anciennement installées", desc: "Vous intervenez quand vous observez un écart chez un collègue ou un prestataire. Vous signalez les pratiques collectives déviantes lors des REX même quand c'est inconfortable. Vous reconnaissez vos propres glissements et vous les corrigez sans attendre un incident. Cette résistance active à la normalisation est le comportement qui évite que les 'petits écarts sans conséquence' deviennent des accidents graves." },
        },
      }, 
      {
        type: "likert",
        text: "Lors des retours d'expérience, vous décrivez ce qui s'est réellement passé, y compris les pratiques déviantes collectives, même si c'est inconfortable.",
        tags: ["déviance", "REX"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous vous alignez sur les pratiques du groupe même quand elles s'écartent des procédures", desc: "Deux ans sans incident, tout le monde fait comme ça, l'ancien qui connaît mieux que la procédure : la normalisation des déviances est l'un des mécanismes les plus documentés dans les accidents industriels graves. Le fait qu'une pratique non conforme n'ait pas encore causé d'accident n'est pas une preuve de sa sécurité — c'est une accumulation de chance. L'enjeu est de traiter chaque écart comme un signal, indépendamment du bilan." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux déviances évidentes mais les glissements progressifs vous échappent encore", desc: "Vous intervenez quand les déviances sont visibles et récentes. Mais les pratiques qui se sont installées progressivement — le raccourci que tout le monde a fini par adopter, la vérification que vous avez vous-même commencé à alléger — sont plus difficiles à voir et à traiter. L'enjeu est de maintenir un regard critique sur vos propres pratiques dans la durée." },
          haut: { label: "Réflexes installés", titre: "Vous résistez à la normalisation des déviances et vous intervenez sur les pratiques non conformes, même anciennement installées", desc: "Vous intervenez quand vous observez un écart chez un collègue ou un prestataire. Vous signalez les pratiques collectives déviantes lors des REX même quand c'est inconfortable. Vous reconnaissez vos propres glissements et vous les corrigez sans attendre un incident. Cette résistance active à la normalisation est le comportement qui évite que les 'petits écarts sans conséquence' deviennent des accidents graves." },
        },
      }, 
      {
        type: "choix",
        text: "Vous réalisez que depuis six mois, votre propre niveau d'exigence sur certaines vérifications a glissé — vous faites les choses moins rigoureusement qu'avant, sans vous en être rendu compte.",
        tags: ["déviance", "glissement"],
        answers: [
          { text: "Je me dis que c'est l'expérience qui parle — je sais ce qui est vraiment important.", score: 0 },
          { text: "Je reconnais ce glissement et je me réimpose les standards complets, sans attendre un incident.", score: 2 },
          { text: "Je surveille si ça a des conséquences et j'ajusterai si nécessaire.", score: 0 },
          { text: "J'en parle à mon responsable pour qu'il m'aide à recadrer.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous vous alignez sur les pratiques du groupe même quand elles s'écartent des procédures", desc: "Deux ans sans incident, tout le monde fait comme ça, l'ancien qui connaît mieux que la procédure : la normalisation des déviances est l'un des mécanismes les plus documentés dans les accidents industriels graves. Le fait qu'une pratique non conforme n'ait pas encore causé d'accident n'est pas une preuve de sa sécurité — c'est une accumulation de chance. L'enjeu est de traiter chaque écart comme un signal, indépendamment du bilan." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux déviances évidentes mais les glissements progressifs vous échappent encore", desc: "Vous intervenez quand les déviances sont visibles et récentes. Mais les pratiques qui se sont installées progressivement — le raccourci que tout le monde a fini par adopter, la vérification que vous avez vous-même commencé à alléger — sont plus difficiles à voir et à traiter. L'enjeu est de maintenir un regard critique sur vos propres pratiques dans la durée." },
          haut: { label: "Réflexes installés", titre: "Vous résistez à la normalisation des déviances et vous intervenez sur les pratiques non conformes, même anciennement installées", desc: "Vous intervenez quand vous observez un écart chez un collègue ou un prestataire. Vous signalez les pratiques collectives déviantes lors des REX même quand c'est inconfortable. Vous reconnaissez vos propres glissements et vous les corrigez sans attendre un incident. Cette résistance active à la normalisation est le comportement qui évite que les 'petits écarts sans conséquence' deviennent des accidents graves." },
        },
      }
    ],

    2: [
      {
        type: "choix",
        text: "Vous observez une situation qui vous semble dangereuse mais qui n'a pas déclenché d'alerte chez vos collègues. Vous n'êtes pas sûr·e d'avoir raison et vous ne voulez pas passer pour quelqu'un qui exagère.",
        tags: ["signalement", "courage"],
        answers: [
          { text: "Je ne dis rien — si personne d'autre ne réagit, c'est que le risque est probablement gérable.", score: 0 },
          { text: "Je signale ce que j'observe en restant factuel sur ce que j'ai vu, sans interprétation.", score: 2 },
          { text: "Je pose une question à un collègue pour valider mon ressenti avant de décider.", score: 1 },
          { text: "Je note mentalement pour en parler plus tard si la situation se reproduit.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous évitez encore de signaler par peur du coût social ou par doute sur votre légitimité", desc: "Ne pas signaler parce que personne d'autre ne réagit, parce que ça pourrait créer des ennuis à un collègue, parce que le système semble inefficace : ces raisonnements laissent des situations dangereuses sans traitement. Signaler ce qu'on observe — même en étant le seul, même sans être certain — est le comportement qui permet aux systèmes de sécurité de fonctionner." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les situations graves, vous hésitez encore sur les situations ambiguës ou à coût social élevé", desc: "Vous signalez les situations clairement dangereuses. Mais quand vous n'êtes pas sûr·e, quand ça peut créer un inconfort relationnel, quand le système semble peu efficace : votre signalement peut encore hésiter. L'enjeu est d'abaisser ce seuil — signaler sur le doute est toujours plus utile qu'attendre la certitude." },
          haut: { label: "Réflexes installés", titre: "Vous signalez ce que vous observez sans attendre la certitude, le consensus ou la demande explicite", desc: "Vous signalez ce que vous observez même quand personne d'autre ne réagit, même quand vous n'êtes pas certain·e, même quand ça peut créer un inconfort relationnel. Vous signalez vos propres erreurs même sans conséquence visible. Cette posture de signalement systématique est ce qui permet aux systèmes de sécurité de détecter les situations à risque avant qu'elles dégénèrent." },
        },
      }, 
      {
        type: "likert",
        text: "Vous signalez les situations qui vous semblent anormales même quand vous n'êtes pas certain·e que le risque est réel et même quand personne d'autre ne l'a fait.",
        tags: ["signalement", "initiative"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous évitez encore de signaler par peur du coût social ou par doute sur votre légitimité", desc: "Ne pas signaler parce que personne d'autre ne réagit, parce que ça pourrait créer des ennuis à un collègue, parce que le système semble inefficace : ces raisonnements laissent des situations dangereuses sans traitement. Signaler ce qu'on observe — même en étant le seul, même sans être certain — est le comportement qui permet aux systèmes de sécurité de fonctionner." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les situations graves, vous hésitez encore sur les situations ambiguës ou à coût social élevé", desc: "Vous signalez les situations clairement dangereuses. Mais quand vous n'êtes pas sûr·e, quand ça peut créer un inconfort relationnel, quand le système semble peu efficace : votre signalement peut encore hésiter. L'enjeu est d'abaisser ce seuil — signaler sur le doute est toujours plus utile qu'attendre la certitude." },
          haut: { label: "Réflexes installés", titre: "Vous signalez ce que vous observez sans attendre la certitude, le consensus ou la demande explicite", desc: "Vous signalez ce que vous observez même quand personne d'autre ne réagit, même quand vous n'êtes pas certain·e, même quand ça peut créer un inconfort relationnel. Vous signalez vos propres erreurs même sans conséquence visible. Cette posture de signalement systématique est ce qui permet aux systèmes de sécurité de détecter les situations à risque avant qu'elles dégénèrent." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez observé un écart de sécurité impliquant un collègue avec qui vous avez une bonne relation. Signaler pourrait lui créer des ennuis.",
        tags: ["signalement", "peur"],
        answers: [
          { text: "Je lui en parle directement pour lui laisser l'opportunité de régulariser lui-même.", score: 1.5 },
          { text: "Je ne signale pas — la relation est plus importante que cette entorse ponctuelle.", score: 0 },
          { text: "Je signale les faits sans nommer mon collègue si le système le permet.", score: 2 },
          { text: "Je le signale avec son nom — la sécurité prime sur les relations.", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous évitez encore de signaler par peur du coût social ou par doute sur votre légitimité", desc: "Ne pas signaler parce que personne d'autre ne réagit, parce que ça pourrait créer des ennuis à un collègue, parce que le système semble inefficace : ces raisonnements laissent des situations dangereuses sans traitement. Signaler ce qu'on observe — même en étant le seul, même sans être certain — est le comportement qui permet aux systèmes de sécurité de fonctionner." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les situations graves, vous hésitez encore sur les situations ambiguës ou à coût social élevé", desc: "Vous signalez les situations clairement dangereuses. Mais quand vous n'êtes pas sûr·e, quand ça peut créer un inconfort relationnel, quand le système semble peu efficace : votre signalement peut encore hésiter. L'enjeu est d'abaisser ce seuil — signaler sur le doute est toujours plus utile qu'attendre la certitude." },
          haut: { label: "Réflexes installés", titre: "Vous signalez ce que vous observez sans attendre la certitude, le consensus ou la demande explicite", desc: "Vous signalez ce que vous observez même quand personne d'autre ne réagit, même quand vous n'êtes pas certain·e, même quand ça peut créer un inconfort relationnel. Vous signalez vos propres erreurs même sans conséquence visible. Cette posture de signalement systématique est ce qui permet aux systèmes de sécurité de détecter les situations à risque avant qu'elles dégénèrent." },
        },
      }, 
      {
        type: "choix",
        text: "La dernière fois que vous avez signalé une situation, ça n'a pas eu de suite visible. Vous observez aujourd'hui une situation similaire.",
        tags: ["signalement", "réaction"],
        answers: [
          { text: "Je ne signale pas — ça ne sert à rien puisque rien ne change.", score: 0 },
          { text: "Je signale à nouveau et je demande un retour sur ce qui a été fait.", score: 2 },
          { text: "Je signale encore une fois, sans grand espoir.", score: 1 },
          { text: "J'en parle à un collègue pour savoir s'il a eu le même sentiment.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous évitez encore de signaler par peur du coût social ou par doute sur votre légitimité", desc: "Ne pas signaler parce que personne d'autre ne réagit, parce que ça pourrait créer des ennuis à un collègue, parce que le système semble inefficace : ces raisonnements laissent des situations dangereuses sans traitement. Signaler ce qu'on observe — même en étant le seul, même sans être certain — est le comportement qui permet aux systèmes de sécurité de fonctionner." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les situations graves, vous hésitez encore sur les situations ambiguës ou à coût social élevé", desc: "Vous signalez les situations clairement dangereuses. Mais quand vous n'êtes pas sûr·e, quand ça peut créer un inconfort relationnel, quand le système semble peu efficace : votre signalement peut encore hésiter. L'enjeu est d'abaisser ce seuil — signaler sur le doute est toujours plus utile qu'attendre la certitude." },
          haut: { label: "Réflexes installés", titre: "Vous signalez ce que vous observez sans attendre la certitude, le consensus ou la demande explicite", desc: "Vous signalez ce que vous observez même quand personne d'autre ne réagit, même quand vous n'êtes pas certain·e, même quand ça peut créer un inconfort relationnel. Vous signalez vos propres erreurs même sans conséquence visible. Cette posture de signalement systématique est ce qui permet aux systèmes de sécurité de détecter les situations à risque avant qu'elles dégénèrent." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez commis une erreur de procédure qui aurait pu avoir des conséquences graves mais qui n'en a pas eu. Vous êtes la seule personne à le savoir.",
        tags: ["signalement", "honte"],
        answers: [
          { text: "Je ne le signale pas — puisqu'il n'y a pas eu de conséquence, ça ne sert à rien.", score: 0 },
          { text: "Je le signale — même sans conséquence, l'erreur doit être connue pour éviter qu'elle se reproduise.", score: 2 },
          { text: "Je le signale anonymement si le système le permet.", score: 1.5 },
          { text: "J'ajuste mes pratiques sans signaler — je saurai éviter ça la prochaine fois.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous évitez encore de signaler par peur du coût social ou par doute sur votre légitimité", desc: "Ne pas signaler parce que personne d'autre ne réagit, parce que ça pourrait créer des ennuis à un collègue, parce que le système semble inefficace : ces raisonnements laissent des situations dangereuses sans traitement. Signaler ce qu'on observe — même en étant le seul, même sans être certain — est le comportement qui permet aux systèmes de sécurité de fonctionner." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les situations graves, vous hésitez encore sur les situations ambiguës ou à coût social élevé", desc: "Vous signalez les situations clairement dangereuses. Mais quand vous n'êtes pas sûr·e, quand ça peut créer un inconfort relationnel, quand le système semble peu efficace : votre signalement peut encore hésiter. L'enjeu est d'abaisser ce seuil — signaler sur le doute est toujours plus utile qu'attendre la certitude." },
          haut: { label: "Réflexes installés", titre: "Vous signalez ce que vous observez sans attendre la certitude, le consensus ou la demande explicite", desc: "Vous signalez ce que vous observez même quand personne d'autre ne réagit, même quand vous n'êtes pas certain·e, même quand ça peut créer un inconfort relationnel. Vous signalez vos propres erreurs même sans conséquence visible. Cette posture de signalement systématique est ce qui permet aux systèmes de sécurité de détecter les situations à risque avant qu'elles dégénèrent." },
        },
      }, 
      {
        type: "likert",
        text: "Vous signalez vos propres erreurs ou presqu'accidents même quand personne d'autre ne les a vus et même si ça peut vous mettre en difficulté.",
        tags: ["signalement", "propre erreur"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous évitez encore de signaler par peur du coût social ou par doute sur votre légitimité", desc: "Ne pas signaler parce que personne d'autre ne réagit, parce que ça pourrait créer des ennuis à un collègue, parce que le système semble inefficace : ces raisonnements laissent des situations dangereuses sans traitement. Signaler ce qu'on observe — même en étant le seul, même sans être certain — est le comportement qui permet aux systèmes de sécurité de fonctionner." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les situations graves, vous hésitez encore sur les situations ambiguës ou à coût social élevé", desc: "Vous signalez les situations clairement dangereuses. Mais quand vous n'êtes pas sûr·e, quand ça peut créer un inconfort relationnel, quand le système semble peu efficace : votre signalement peut encore hésiter. L'enjeu est d'abaisser ce seuil — signaler sur le doute est toujours plus utile qu'attendre la certitude." },
          haut: { label: "Réflexes installés", titre: "Vous signalez ce que vous observez sans attendre la certitude, le consensus ou la demande explicite", desc: "Vous signalez ce que vous observez même quand personne d'autre ne réagit, même quand vous n'êtes pas certain·e, même quand ça peut créer un inconfort relationnel. Vous signalez vos propres erreurs même sans conséquence visible. Cette posture de signalement systématique est ce qui permet aux systèmes de sécurité de détecter les situations à risque avant qu'elles dégénèrent." },
        },
      }, 
      {
        type: "choix",
        text: "Après un incident, votre équipe s'accorde tacitement sur une version des faits qui minimise les responsabilités collectives. On vous demande implicitement d'aller dans ce sens.",
        tags: ["signalement", "pression groupe"],
        answers: [
          { text: "Je m'aligne — le groupe a besoin de cohésion et je ne vais pas être celui qui complique.", score: 0 },
          { text: "Je décris les faits tels que je les ai vécus, même si ça diverge de la version collective.", score: 2 },
          { text: "Je reste vague dans mon témoignage pour ne ni mentir ni contredire le groupe.", score: 0 },
          { text: "J'en parle au responsable sécurité en privé avant de témoigner officiellement.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous évitez encore de signaler par peur du coût social ou par doute sur votre légitimité", desc: "Ne pas signaler parce que personne d'autre ne réagit, parce que ça pourrait créer des ennuis à un collègue, parce que le système semble inefficace : ces raisonnements laissent des situations dangereuses sans traitement. Signaler ce qu'on observe — même en étant le seul, même sans être certain — est le comportement qui permet aux systèmes de sécurité de fonctionner." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les situations graves, vous hésitez encore sur les situations ambiguës ou à coût social élevé", desc: "Vous signalez les situations clairement dangereuses. Mais quand vous n'êtes pas sûr·e, quand ça peut créer un inconfort relationnel, quand le système semble peu efficace : votre signalement peut encore hésiter. L'enjeu est d'abaisser ce seuil — signaler sur le doute est toujours plus utile qu'attendre la certitude." },
          haut: { label: "Réflexes installés", titre: "Vous signalez ce que vous observez sans attendre la certitude, le consensus ou la demande explicite", desc: "Vous signalez ce que vous observez même quand personne d'autre ne réagit, même quand vous n'êtes pas certain·e, même quand ça peut créer un inconfort relationnel. Vous signalez vos propres erreurs même sans conséquence visible. Cette posture de signalement systématique est ce qui permet aux systèmes de sécurité de détecter les situations à risque avant qu'elles dégénèrent." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez observé quelque chose il y a trois jours mais vous avez attendu pour le signaler en espérant que ça s'arrange seul. La situation est toujours présente.",
        tags: ["signalement", "délai"],
        answers: [
          { text: "Je ne signale plus — j'aurais dû le faire à temps, il est trop tard maintenant.", score: 0 },
          { text: "Je signale maintenant en expliquant pourquoi j'ai attendu.", score: 2 },
          { text: "Je signale en occultant que j'avais vu la situation plus tôt.", score: 0 },
          { text: "Je signale de façon anonyme pour éviter qu'on me demande pourquoi j'ai attendu.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous évitez encore de signaler par peur du coût social ou par doute sur votre légitimité", desc: "Ne pas signaler parce que personne d'autre ne réagit, parce que ça pourrait créer des ennuis à un collègue, parce que le système semble inefficace : ces raisonnements laissent des situations dangereuses sans traitement. Signaler ce qu'on observe — même en étant le seul, même sans être certain — est le comportement qui permet aux systèmes de sécurité de fonctionner." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les situations graves, vous hésitez encore sur les situations ambiguës ou à coût social élevé", desc: "Vous signalez les situations clairement dangereuses. Mais quand vous n'êtes pas sûr·e, quand ça peut créer un inconfort relationnel, quand le système semble peu efficace : votre signalement peut encore hésiter. L'enjeu est d'abaisser ce seuil — signaler sur le doute est toujours plus utile qu'attendre la certitude." },
          haut: { label: "Réflexes installés", titre: "Vous signalez ce que vous observez sans attendre la certitude, le consensus ou la demande explicite", desc: "Vous signalez ce que vous observez même quand personne d'autre ne réagit, même quand vous n'êtes pas certain·e, même quand ça peut créer un inconfort relationnel. Vous signalez vos propres erreurs même sans conséquence visible. Cette posture de signalement systématique est ce qui permet aux systèmes de sécurité de détecter les situations à risque avant qu'elles dégénèrent." },
        },
      }, 
      {
        type: "likert",
        text: "Vous signalez les situations dangereuses sans attendre de voir si elles se résolvent seules ou si quelqu'un d'autre le fait à votre place.",
        tags: ["signalement", "rapidité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous évitez encore de signaler par peur du coût social ou par doute sur votre légitimité", desc: "Ne pas signaler parce que personne d'autre ne réagit, parce que ça pourrait créer des ennuis à un collègue, parce que le système semble inefficace : ces raisonnements laissent des situations dangereuses sans traitement. Signaler ce qu'on observe — même en étant le seul, même sans être certain — est le comportement qui permet aux systèmes de sécurité de fonctionner." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les situations graves, vous hésitez encore sur les situations ambiguës ou à coût social élevé", desc: "Vous signalez les situations clairement dangereuses. Mais quand vous n'êtes pas sûr·e, quand ça peut créer un inconfort relationnel, quand le système semble peu efficace : votre signalement peut encore hésiter. L'enjeu est d'abaisser ce seuil — signaler sur le doute est toujours plus utile qu'attendre la certitude." },
          haut: { label: "Réflexes installés", titre: "Vous signalez ce que vous observez sans attendre la certitude, le consensus ou la demande explicite", desc: "Vous signalez ce que vous observez même quand personne d'autre ne réagit, même quand vous n'êtes pas certain·e, même quand ça peut créer un inconfort relationnel. Vous signalez vos propres erreurs même sans conséquence visible. Cette posture de signalement systématique est ce qui permet aux systèmes de sécurité de détecter les situations à risque avant qu'elles dégénèrent." },
        },
      }, 
      {
        type: "choix",
        text: "Le système de signalement de votre entreprise est perçu comme lourd et peu efficace. Vos collègues l'utilisent rarement. Vous avez quelque chose à signaler.",
        tags: ["signalement", "futilité perçue"],
        answers: [
          { text: "Je ne l'utilise pas non plus — si le système est inefficace, ça ne changera rien.", score: 0 },
          { text: "Je l'utilise quand même et je formule mon signalement de façon à ce qu'il soit exploitable.", score: 2 },
          { text: "Je le signale verbalement à mon responsable plutôt que par le système officiel.", score: 1 },
          { text: "Je participe à améliorer le système en signalant ET en suggérant des améliorations.", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous évitez encore de signaler par peur du coût social ou par doute sur votre légitimité", desc: "Ne pas signaler parce que personne d'autre ne réagit, parce que ça pourrait créer des ennuis à un collègue, parce que le système semble inefficace : ces raisonnements laissent des situations dangereuses sans traitement. Signaler ce qu'on observe — même en étant le seul, même sans être certain — est le comportement qui permet aux systèmes de sécurité de fonctionner." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les situations graves, vous hésitez encore sur les situations ambiguës ou à coût social élevé", desc: "Vous signalez les situations clairement dangereuses. Mais quand vous n'êtes pas sûr·e, quand ça peut créer un inconfort relationnel, quand le système semble peu efficace : votre signalement peut encore hésiter. L'enjeu est d'abaisser ce seuil — signaler sur le doute est toujours plus utile qu'attendre la certitude." },
          haut: { label: "Réflexes installés", titre: "Vous signalez ce que vous observez sans attendre la certitude, le consensus ou la demande explicite", desc: "Vous signalez ce que vous observez même quand personne d'autre ne réagit, même quand vous n'êtes pas certain·e, même quand ça peut créer un inconfort relationnel. Vous signalez vos propres erreurs même sans conséquence visible. Cette posture de signalement systématique est ce qui permet aux systèmes de sécurité de détecter les situations à risque avant qu'elles dégénèrent." },
        },
      }
    ],

    3: [
      {
        type: "choix",
        text: "Votre équipe n'a eu aucun accident depuis 18 mois. Les points sécurité ont commencé à être expédiés en quelques minutes. Personne ne s'en plaint.",
        tags: ["culture", "bon bilan"],
        answers: [
          { text: "C'est normal — quand ça va bien, on n'a pas besoin de s'attarder sur la sécurité.", score: 0 },
          { text: "Je soulève le sujet : le bon bilan est le résultat des bonnes pratiques, pas la preuve qu'on peut les alléger.", score: 2 },
          { text: "Je maintiens mes propres pratiques sans chercher à changer l'attitude de l'équipe.", score: 1 },
          { text: "J'en parle à notre responsable pour qu'il redonne de l'importance aux points sécurité.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre contribution à la culture sécurité reste passive — vous suivez sans influencer", desc: "S'aligner sur les pratiques du groupe sans les questionner, ne pas prendre la parole sur les écarts observés, ne pas transmettre les bonnes pratiques aux nouveaux : la culture sécurité d'une équipe se construit ou s'érode à travers les comportements individuels quotidiens. Rester passif dans une équipe dont les standards glissent, c'est contribuer à ce glissement." },
          moyen: { label: "Pratiques en développement", titre: "Vous contribuez à la culture sécurité par l'exemple mais vous intervenez peu sur les pratiques collectives", desc: "Vous donnez l'exemple dans vos propres pratiques. Mais prendre la parole sur les écarts collectifs, questionner un bilan sans incident comme preuve de bonne santé, transmettre activement les bonnes pratiques : ces comportements d'influence sur la culture collective sont encore peu présents. L'enjeu est de passer de l'exemplarité individuelle à la contribution collective." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement à la culture sécurité de votre équipe par l'exemple, la parole et la transmission", desc: "Vous questionnez un bon bilan sans incident comme preuve de santé, vous transmettez les bonnes pratiques aux nouveaux, vous prenez la parole sur les écarts collectifs, vous remontez les informations utiles venant d'autres entreprises. Cette contribution active à la culture collective est ce qui fait qu'une équipe maintient ses standards dans le temps." },
        },
      }, 
      {
        type: "likert",
        text: "Vous adoptez les comportements de sécurité que vous attendez de vos collègues, sans exception, y compris dans les situations où personne ne vous observe.",
        tags: ["culture", "exemplarité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre contribution à la culture sécurité reste passive — vous suivez sans influencer", desc: "S'aligner sur les pratiques du groupe sans les questionner, ne pas prendre la parole sur les écarts observés, ne pas transmettre les bonnes pratiques aux nouveaux : la culture sécurité d'une équipe se construit ou s'érode à travers les comportements individuels quotidiens. Rester passif dans une équipe dont les standards glissent, c'est contribuer à ce glissement." },
          moyen: { label: "Pratiques en développement", titre: "Vous contribuez à la culture sécurité par l'exemple mais vous intervenez peu sur les pratiques collectives", desc: "Vous donnez l'exemple dans vos propres pratiques. Mais prendre la parole sur les écarts collectifs, questionner un bilan sans incident comme preuve de bonne santé, transmettre activement les bonnes pratiques : ces comportements d'influence sur la culture collective sont encore peu présents. L'enjeu est de passer de l'exemplarité individuelle à la contribution collective." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement à la culture sécurité de votre équipe par l'exemple, la parole et la transmission", desc: "Vous questionnez un bon bilan sans incident comme preuve de santé, vous transmettez les bonnes pratiques aux nouveaux, vous prenez la parole sur les écarts collectifs, vous remontez les informations utiles venant d'autres entreprises. Cette contribution active à la culture collective est ce qui fait qu'une équipe maintient ses standards dans le temps." },
        },
      }, 
      {
        type: "choix",
        text: "Un·e nouveau·elle arrivant·e dans votre équipe observe les pratiques réelles et les compare aux procédures affichées. Il/elle constate des écarts et vous pose des questions.",
        tags: ["culture", "nouveau"],
        answers: [
          { text: "Je lui explique que la pratique réelle est adaptée au contexte — les procédures sont souvent trop théoriques.", score: 0 },
          { text: "Je lui dis que les écarts qu'il/elle observe sont un problème et que la procédure officielle est la référence.", score: 2 },
          { text: "Je lui conseille de faire comme l'équipe pour l'intégration et de poser des questions plus tard.", score: 0 },
          { text: "Je lui explique les raisons historiques des écarts sans les cautionner.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre contribution à la culture sécurité reste passive — vous suivez sans influencer", desc: "S'aligner sur les pratiques du groupe sans les questionner, ne pas prendre la parole sur les écarts observés, ne pas transmettre les bonnes pratiques aux nouveaux : la culture sécurité d'une équipe se construit ou s'érode à travers les comportements individuels quotidiens. Rester passif dans une équipe dont les standards glissent, c'est contribuer à ce glissement." },
          moyen: { label: "Pratiques en développement", titre: "Vous contribuez à la culture sécurité par l'exemple mais vous intervenez peu sur les pratiques collectives", desc: "Vous donnez l'exemple dans vos propres pratiques. Mais prendre la parole sur les écarts collectifs, questionner un bilan sans incident comme preuve de bonne santé, transmettre activement les bonnes pratiques : ces comportements d'influence sur la culture collective sont encore peu présents. L'enjeu est de passer de l'exemplarité individuelle à la contribution collective." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement à la culture sécurité de votre équipe par l'exemple, la parole et la transmission", desc: "Vous questionnez un bon bilan sans incident comme preuve de santé, vous transmettez les bonnes pratiques aux nouveaux, vous prenez la parole sur les écarts collectifs, vous remontez les informations utiles venant d'autres entreprises. Cette contribution active à la culture collective est ce qui fait qu'une équipe maintient ses standards dans le temps." },
        },
      }, 
      {
        type: "choix",
        text: "Votre équipe vient d'avoir un presqu'accident. Le REX est prévu pour vendredi. Certains collègues voudraient qu'il soit rapide et qu'on 'tourne la page'.",
        tags: ["culture", "REX"],
        answers: [
          { text: "Je m'aligne — un REX trop long et trop détaillé crée de la culpabilité sans valeur ajoutée.", score: 0 },
          { text: "Je propose qu'on prenne le temps nécessaire pour vraiment comprendre ce qui s'est passé.", score: 2 },
          { text: "Je participe au REX sans me prononcer sur sa durée ou sa profondeur.", score: 0.5 },
          { text: "Je prépare des éléments factuels pour que le REX soit le plus utile possible.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre contribution à la culture sécurité reste passive — vous suivez sans influencer", desc: "S'aligner sur les pratiques du groupe sans les questionner, ne pas prendre la parole sur les écarts observés, ne pas transmettre les bonnes pratiques aux nouveaux : la culture sécurité d'une équipe se construit ou s'érode à travers les comportements individuels quotidiens. Rester passif dans une équipe dont les standards glissent, c'est contribuer à ce glissement." },
          moyen: { label: "Pratiques en développement", titre: "Vous contribuez à la culture sécurité par l'exemple mais vous intervenez peu sur les pratiques collectives", desc: "Vous donnez l'exemple dans vos propres pratiques. Mais prendre la parole sur les écarts collectifs, questionner un bilan sans incident comme preuve de bonne santé, transmettre activement les bonnes pratiques : ces comportements d'influence sur la culture collective sont encore peu présents. L'enjeu est de passer de l'exemplarité individuelle à la contribution collective." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement à la culture sécurité de votre équipe par l'exemple, la parole et la transmission", desc: "Vous questionnez un bon bilan sans incident comme preuve de santé, vous transmettez les bonnes pratiques aux nouveaux, vous prenez la parole sur les écarts collectifs, vous remontez les informations utiles venant d'autres entreprises. Cette contribution active à la culture collective est ce qui fait qu'une équipe maintient ses standards dans le temps." },
        },
      }, 
      {
        type: "choix",
        text: "Votre équipe est évaluée sur sa productivité. La sécurité ralentit parfois le rythme. Certains collègues font le lien explicitement entre moins de sécurité et meilleurs résultats.",
        tags: ["culture", "concurrence"],
        answers: [
          { text: "Je les comprends — il faut bien concilier les deux contraintes.", score: 0 },
          { text: "Je dis clairement que la sécurité n'est pas une variable d'ajustement de la productivité.", score: 2 },
          { text: "Je reste sur mes pratiques sans entrer dans ce débat.", score: 1 },
          { text: "J'en parle à notre responsable pour qu'il clarifie les priorités.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre contribution à la culture sécurité reste passive — vous suivez sans influencer", desc: "S'aligner sur les pratiques du groupe sans les questionner, ne pas prendre la parole sur les écarts observés, ne pas transmettre les bonnes pratiques aux nouveaux : la culture sécurité d'une équipe se construit ou s'érode à travers les comportements individuels quotidiens. Rester passif dans une équipe dont les standards glissent, c'est contribuer à ce glissement." },
          moyen: { label: "Pratiques en développement", titre: "Vous contribuez à la culture sécurité par l'exemple mais vous intervenez peu sur les pratiques collectives", desc: "Vous donnez l'exemple dans vos propres pratiques. Mais prendre la parole sur les écarts collectifs, questionner un bilan sans incident comme preuve de bonne santé, transmettre activement les bonnes pratiques : ces comportements d'influence sur la culture collective sont encore peu présents. L'enjeu est de passer de l'exemplarité individuelle à la contribution collective." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement à la culture sécurité de votre équipe par l'exemple, la parole et la transmission", desc: "Vous questionnez un bon bilan sans incident comme preuve de santé, vous transmettez les bonnes pratiques aux nouveaux, vous prenez la parole sur les écarts collectifs, vous remontez les informations utiles venant d'autres entreprises. Cette contribution active à la culture collective est ce qui fait qu'une équipe maintient ses standards dans le temps." },
        },
      }, 
      {
        type: "likert",
        text: "Vous transmettez activement les bonnes pratiques de sécurité aux nouveaux arrivants et aux collègues moins expérimentés, sans attendre qu'on vous le demande.",
        tags: ["culture", "transmission"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre contribution à la culture sécurité reste passive — vous suivez sans influencer", desc: "S'aligner sur les pratiques du groupe sans les questionner, ne pas prendre la parole sur les écarts observés, ne pas transmettre les bonnes pratiques aux nouveaux : la culture sécurité d'une équipe se construit ou s'érode à travers les comportements individuels quotidiens. Rester passif dans une équipe dont les standards glissent, c'est contribuer à ce glissement." },
          moyen: { label: "Pratiques en développement", titre: "Vous contribuez à la culture sécurité par l'exemple mais vous intervenez peu sur les pratiques collectives", desc: "Vous donnez l'exemple dans vos propres pratiques. Mais prendre la parole sur les écarts collectifs, questionner un bilan sans incident comme preuve de bonne santé, transmettre activement les bonnes pratiques : ces comportements d'influence sur la culture collective sont encore peu présents. L'enjeu est de passer de l'exemplarité individuelle à la contribution collective." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement à la culture sécurité de votre équipe par l'exemple, la parole et la transmission", desc: "Vous questionnez un bon bilan sans incident comme preuve de santé, vous transmettez les bonnes pratiques aux nouveaux, vous prenez la parole sur les écarts collectifs, vous remontez les informations utiles venant d'autres entreprises. Cette contribution active à la culture collective est ce qui fait qu'une équipe maintient ses standards dans le temps." },
        },
      }, 
      {
        type: "choix",
        text: "Vous identifiez une amélioration possible d'une procédure de sécurité. La démarche pour la proposer officiellement est longue et administrative.",
        tags: ["culture", "amélioration"],
        answers: [
          { text: "Je renonce — le jeu n'en vaut pas la chandelle.", score: 0 },
          { text: "Je la propose quand même par les voies officielles, même si c'est long.", score: 2 },
          { text: "Je l'applique à mon niveau sans la formaliser.", score: 0.5 },
          { text: "J'en parle à mon responsable pour qu'il la porte à ma place.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre contribution à la culture sécurité reste passive — vous suivez sans influencer", desc: "S'aligner sur les pratiques du groupe sans les questionner, ne pas prendre la parole sur les écarts observés, ne pas transmettre les bonnes pratiques aux nouveaux : la culture sécurité d'une équipe se construit ou s'érode à travers les comportements individuels quotidiens. Rester passif dans une équipe dont les standards glissent, c'est contribuer à ce glissement." },
          moyen: { label: "Pratiques en développement", titre: "Vous contribuez à la culture sécurité par l'exemple mais vous intervenez peu sur les pratiques collectives", desc: "Vous donnez l'exemple dans vos propres pratiques. Mais prendre la parole sur les écarts collectifs, questionner un bilan sans incident comme preuve de bonne santé, transmettre activement les bonnes pratiques : ces comportements d'influence sur la culture collective sont encore peu présents. L'enjeu est de passer de l'exemplarité individuelle à la contribution collective." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement à la culture sécurité de votre équipe par l'exemple, la parole et la transmission", desc: "Vous questionnez un bon bilan sans incident comme preuve de santé, vous transmettez les bonnes pratiques aux nouveaux, vous prenez la parole sur les écarts collectifs, vous remontez les informations utiles venant d'autres entreprises. Cette contribution active à la culture collective est ce qui fait qu'une équipe maintient ses standards dans le temps." },
        },
      }, 
      {
        type: "choix",
        text: "Vous apprenez qu'un incident grave s'est produit dans une entreprise similaire à la vôtre, sur un équipement identique. L'information circule de façon informelle.",
        tags: ["culture", "incident tiers"],
        answers: [
          { text: "Je prends note mais ça ne concerne pas directement notre entreprise.", score: 0 },
          { text: "Je remonte l'information à mon responsable et au responsable sécurité pour qu'elle soit traitée.", score: 2 },
          { text: "J'en parle à mes collègues pour qu'on soit vigilants.", score: 1 },
          { text: "J'attends que l'information arrive par les canaux officiels.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre contribution à la culture sécurité reste passive — vous suivez sans influencer", desc: "S'aligner sur les pratiques du groupe sans les questionner, ne pas prendre la parole sur les écarts observés, ne pas transmettre les bonnes pratiques aux nouveaux : la culture sécurité d'une équipe se construit ou s'érode à travers les comportements individuels quotidiens. Rester passif dans une équipe dont les standards glissent, c'est contribuer à ce glissement." },
          moyen: { label: "Pratiques en développement", titre: "Vous contribuez à la culture sécurité par l'exemple mais vous intervenez peu sur les pratiques collectives", desc: "Vous donnez l'exemple dans vos propres pratiques. Mais prendre la parole sur les écarts collectifs, questionner un bilan sans incident comme preuve de bonne santé, transmettre activement les bonnes pratiques : ces comportements d'influence sur la culture collective sont encore peu présents. L'enjeu est de passer de l'exemplarité individuelle à la contribution collective." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement à la culture sécurité de votre équipe par l'exemple, la parole et la transmission", desc: "Vous questionnez un bon bilan sans incident comme preuve de santé, vous transmettez les bonnes pratiques aux nouveaux, vous prenez la parole sur les écarts collectifs, vous remontez les informations utiles venant d'autres entreprises. Cette contribution active à la culture collective est ce qui fait qu'une équipe maintient ses standards dans le temps." },
        },
      }, 
      {
        type: "likert",
        text: "Vous contribuez activement à l'amélioration des pratiques de sécurité de votre équipe — signalements, suggestions, participation aux REX — sans attendre d'y être obligé·e.",
        tags: ["culture", "amélioration continue"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre contribution à la culture sécurité reste passive — vous suivez sans influencer", desc: "S'aligner sur les pratiques du groupe sans les questionner, ne pas prendre la parole sur les écarts observés, ne pas transmettre les bonnes pratiques aux nouveaux : la culture sécurité d'une équipe se construit ou s'érode à travers les comportements individuels quotidiens. Rester passif dans une équipe dont les standards glissent, c'est contribuer à ce glissement." },
          moyen: { label: "Pratiques en développement", titre: "Vous contribuez à la culture sécurité par l'exemple mais vous intervenez peu sur les pratiques collectives", desc: "Vous donnez l'exemple dans vos propres pratiques. Mais prendre la parole sur les écarts collectifs, questionner un bilan sans incident comme preuve de bonne santé, transmettre activement les bonnes pratiques : ces comportements d'influence sur la culture collective sont encore peu présents. L'enjeu est de passer de l'exemplarité individuelle à la contribution collective." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement à la culture sécurité de votre équipe par l'exemple, la parole et la transmission", desc: "Vous questionnez un bon bilan sans incident comme preuve de santé, vous transmettez les bonnes pratiques aux nouveaux, vous prenez la parole sur les écarts collectifs, vous remontez les informations utiles venant d'autres entreprises. Cette contribution active à la culture collective est ce qui fait qu'une équipe maintient ses standards dans le temps." },
        },
      }, 
      {
        type: "choix",
        text: "Un client important est sur site et observe votre travail. Pour faire bonne impression sur la productivité, certains collègues accélèrent et allègent quelques vérifications.",
        tags: ["culture", "pression client"],
        answers: [
          { text: "Je fais pareil — c'est un client important et l'image de l'entreprise compte.", score: 0 },
          { text: "Je maintiens mes pratiques habituelles — la sécurité ne change pas selon le public.", score: 2 },
          { text: "Je fais attention à ce que le client ne voie pas les raccourcis.", score: 0 },
          { text: "J'en parle discrètement à mes collègues après la visite.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre contribution à la culture sécurité reste passive — vous suivez sans influencer", desc: "S'aligner sur les pratiques du groupe sans les questionner, ne pas prendre la parole sur les écarts observés, ne pas transmettre les bonnes pratiques aux nouveaux : la culture sécurité d'une équipe se construit ou s'érode à travers les comportements individuels quotidiens. Rester passif dans une équipe dont les standards glissent, c'est contribuer à ce glissement." },
          moyen: { label: "Pratiques en développement", titre: "Vous contribuez à la culture sécurité par l'exemple mais vous intervenez peu sur les pratiques collectives", desc: "Vous donnez l'exemple dans vos propres pratiques. Mais prendre la parole sur les écarts collectifs, questionner un bilan sans incident comme preuve de bonne santé, transmettre activement les bonnes pratiques : ces comportements d'influence sur la culture collective sont encore peu présents. L'enjeu est de passer de l'exemplarité individuelle à la contribution collective." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement à la culture sécurité de votre équipe par l'exemple, la parole et la transmission", desc: "Vous questionnez un bon bilan sans incident comme preuve de santé, vous transmettez les bonnes pratiques aux nouveaux, vous prenez la parole sur les écarts collectifs, vous remontez les informations utiles venant d'autres entreprises. Cette contribution active à la culture collective est ce qui fait qu'une équipe maintient ses standards dans le temps." },
        },
      }
    ],

  },
  // ─────────────────────────────────────────────────────────────────────

    // ─── À coller dans catalogue-securite.js ──────────────────────────────
  // Clé : "presquaccidents-signalement"

  "presquaccidents-signalement": {
    0: [
      {
        type: "choix",
        text: "En manipulant une pièce, vous glissez légèrement et perdez l'équilibre une seconde. Vous vous rattrapez, il n'y a aucune blessure ni dégât. L'opération s'est poursuivie normalement.",
        tags: ["signalement", "seuil"],
        answers: [
          { text: "Je ne signale pas — il ne s'est rien passé, personne n'a été blessé.", score: 0 },
          { text: "Je signale comme presqu'accident — ce qui a failli se passer mérite d'être connu.", score: 2 },
          { text: "J'en parle à mon collègue mais je ne fais pas de déclaration formelle.", score: 0.5 },
          { text: "Je surveille si ça se reproduit avant de décider si c'est worth signaler.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous signalez les accidents avérés mais pas encore les presqu'accidents et les signaux faibles", desc: "Signaler uniquement quand il y a un blessé ou un dégât visible, c'est intervenir en fin de chaîne — quand la prévention n'a plus d'utilité. Les presqu'accidents et les anomalies récurrentes sont les signaux qui permettent d'agir avant l'accident grave. Chaque situation non signalée est une opportunité d'apprentissage collectif perdue." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les événements significatifs mais votre seuil de signalement est encore trop élevé", desc: "Vous signalez les incidents clairement dangereux et les presqu'accidents visibles. Mais les anomalies mineures récurrentes, les situations qui 'auraient pu mal tourner' sans y être proches, les doutes non confirmés : votre seuil est encore trop élevé pour capturer les signaux faibles. L'enjeu est de traiter chaque situation qui vous interpelle comme méritant d'être signalée." },
          haut: { label: "Réflexes installés", titre: "Vous signalez les presqu'accidents, les anomalies mineures et les doutes — pas seulement les incidents avérés", desc: "Vous signalez les presqu'accidents sans blessé, les anomalies récurrentes mineures, les doutes sur ce que vous avez observé. Cette façon d'abaisser votre seuil de signalement est ce qui permet au système de sécurité d'identifier les causes profondes avant qu'elles produisent un accident grave. Chaque signalement précoce est une intervention en amont de la chaîne." },
        },
      }, 
      {
        type: "choix",
        text: "Vous remarquez qu'un cache de protection sur une machine présente une légère fissure. La machine fonctionne normalement. Votre prochain contrôle préventif est dans trois semaines.",
        tags: ["signalement", "anomalie matérielle"],
        answers: [
          { text: "J'attends le contrôle préventif prévu — la fissure est légère et la machine tourne bien.", score: 0 },
          { text: "Je signale la fissure immédiatement pour qu'elle soit évaluée avant la prochaine utilisation.", score: 2 },
          { text: "Je note la fissure dans mon carnet et j'en parle lors du prochain briefing.", score: 1 },
          { text: "Je vérifie si la fissure s'agrandit dans les prochains jours avant de décider.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous signalez les accidents avérés mais pas encore les presqu'accidents et les signaux faibles", desc: "Signaler uniquement quand il y a un blessé ou un dégât visible, c'est intervenir en fin de chaîne — quand la prévention n'a plus d'utilité. Les presqu'accidents et les anomalies récurrentes sont les signaux qui permettent d'agir avant l'accident grave. Chaque situation non signalée est une opportunité d'apprentissage collectif perdue." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les événements significatifs mais votre seuil de signalement est encore trop élevé", desc: "Vous signalez les incidents clairement dangereux et les presqu'accidents visibles. Mais les anomalies mineures récurrentes, les situations qui 'auraient pu mal tourner' sans y être proches, les doutes non confirmés : votre seuil est encore trop élevé pour capturer les signaux faibles. L'enjeu est de traiter chaque situation qui vous interpelle comme méritant d'être signalée." },
          haut: { label: "Réflexes installés", titre: "Vous signalez les presqu'accidents, les anomalies mineures et les doutes — pas seulement les incidents avérés", desc: "Vous signalez les presqu'accidents sans blessé, les anomalies récurrentes mineures, les doutes sur ce que vous avez observé. Cette façon d'abaisser votre seuil de signalement est ce qui permet au système de sécurité d'identifier les causes profondes avant qu'elles produisent un accident grave. Chaque signalement précoce est une intervention en amont de la chaîne." },
        },
      }, 
      {
        type: "likert",
        text: "Vous signalez les situations qui auraient pu mal tourner, pas seulement celles qui ont causé un dommage réel.",
        tags: ["signalement", "seuil bas"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous signalez les accidents avérés mais pas encore les presqu'accidents et les signaux faibles", desc: "Signaler uniquement quand il y a un blessé ou un dégât visible, c'est intervenir en fin de chaîne — quand la prévention n'a plus d'utilité. Les presqu'accidents et les anomalies récurrentes sont les signaux qui permettent d'agir avant l'accident grave. Chaque situation non signalée est une opportunité d'apprentissage collectif perdue." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les événements significatifs mais votre seuil de signalement est encore trop élevé", desc: "Vous signalez les incidents clairement dangereux et les presqu'accidents visibles. Mais les anomalies mineures récurrentes, les situations qui 'auraient pu mal tourner' sans y être proches, les doutes non confirmés : votre seuil est encore trop élevé pour capturer les signaux faibles. L'enjeu est de traiter chaque situation qui vous interpelle comme méritant d'être signalée." },
          haut: { label: "Réflexes installés", titre: "Vous signalez les presqu'accidents, les anomalies mineures et les doutes — pas seulement les incidents avérés", desc: "Vous signalez les presqu'accidents sans blessé, les anomalies récurrentes mineures, les doutes sur ce que vous avez observé. Cette façon d'abaisser votre seuil de signalement est ce qui permet au système de sécurité d'identifier les causes profondes avant qu'elles produisent un accident grave. Chaque signalement précoce est une intervention en amont de la chaîne." },
        },
      }, 
      {
        type: "choix",
        text: "Une situation anormale récurrente s'est produite une fois de plus — une fuite mineure sur un circuit, troisième fois ce mois-ci. Chaque fois, ça a été colmaté sans conséquence.",
        tags: ["signalement", "habitude"],
        answers: [
          { text: "Je colmate à nouveau — c'est récurrent mais jamais grave, ça fait partie du quotidien.", score: 0 },
          { text: "Je signale la récurrence comme un signal faible qui mérite une analyse de fond.", score: 2 },
          { text: "Je le mentionne à mon chef mais sans déclaration formelle.", score: 1 },
          { text: "Je signale uniquement si ça devient plus fréquent.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous signalez les accidents avérés mais pas encore les presqu'accidents et les signaux faibles", desc: "Signaler uniquement quand il y a un blessé ou un dégât visible, c'est intervenir en fin de chaîne — quand la prévention n'a plus d'utilité. Les presqu'accidents et les anomalies récurrentes sont les signaux qui permettent d'agir avant l'accident grave. Chaque situation non signalée est une opportunité d'apprentissage collectif perdue." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les événements significatifs mais votre seuil de signalement est encore trop élevé", desc: "Vous signalez les incidents clairement dangereux et les presqu'accidents visibles. Mais les anomalies mineures récurrentes, les situations qui 'auraient pu mal tourner' sans y être proches, les doutes non confirmés : votre seuil est encore trop élevé pour capturer les signaux faibles. L'enjeu est de traiter chaque situation qui vous interpelle comme méritant d'être signalée." },
          haut: { label: "Réflexes installés", titre: "Vous signalez les presqu'accidents, les anomalies mineures et les doutes — pas seulement les incidents avérés", desc: "Vous signalez les presqu'accidents sans blessé, les anomalies récurrentes mineures, les doutes sur ce que vous avez observé. Cette façon d'abaisser votre seuil de signalement est ce qui permet au système de sécurité d'identifier les causes profondes avant qu'elles produisent un accident grave. Chaque signalement précoce est une intervention en amont de la chaîne." },
        },
      }, 
      {
        type: "choix",
        text: "Lors d'une manœuvre complexe impliquant plusieurs personnes, une erreur de coordination aurait pu créer une situation grave. Tout s'est bien terminé. L'équipe est soulagée et passée à autre chose.",
        tags: ["signalement", "situation collective"],
        answers: [
          { text: "Je ne reviens pas dessus — l'équipe est soulagée et ça n'a pas mal tourné.", score: 0 },
          { text: "Je propose qu'on documente ce qui s'est passé pendant qu'on s'en souvient.", score: 2 },
          { text: "J'en parle à notre responsable pour qu'il décide si un REX est nécessaire.", score: 1.5 },
          { text: "Je note les éléments pour moi mais je laisse l'équipe décider collectivement.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous signalez les accidents avérés mais pas encore les presqu'accidents et les signaux faibles", desc: "Signaler uniquement quand il y a un blessé ou un dégât visible, c'est intervenir en fin de chaîne — quand la prévention n'a plus d'utilité. Les presqu'accidents et les anomalies récurrentes sont les signaux qui permettent d'agir avant l'accident grave. Chaque situation non signalée est une opportunité d'apprentissage collectif perdue." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les événements significatifs mais votre seuil de signalement est encore trop élevé", desc: "Vous signalez les incidents clairement dangereux et les presqu'accidents visibles. Mais les anomalies mineures récurrentes, les situations qui 'auraient pu mal tourner' sans y être proches, les doutes non confirmés : votre seuil est encore trop élevé pour capturer les signaux faibles. L'enjeu est de traiter chaque situation qui vous interpelle comme méritant d'être signalée." },
          haut: { label: "Réflexes installés", titre: "Vous signalez les presqu'accidents, les anomalies mineures et les doutes — pas seulement les incidents avérés", desc: "Vous signalez les presqu'accidents sans blessé, les anomalies récurrentes mineures, les doutes sur ce que vous avez observé. Cette façon d'abaisser votre seuil de signalement est ce qui permet au système de sécurité d'identifier les causes profondes avant qu'elles produisent un accident grave. Chaque signalement précoce est une intervention en amont de la chaîne." },
        },
      }, 
      {
        type: "likert",
        text: "Quand une même anomalie se répète, vous la signalez comme un problème structurel même si chaque occurrence individuelle est mineure.",
        tags: ["signalement", "récurrence"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous signalez les accidents avérés mais pas encore les presqu'accidents et les signaux faibles", desc: "Signaler uniquement quand il y a un blessé ou un dégât visible, c'est intervenir en fin de chaîne — quand la prévention n'a plus d'utilité. Les presqu'accidents et les anomalies récurrentes sont les signaux qui permettent d'agir avant l'accident grave. Chaque situation non signalée est une opportunité d'apprentissage collectif perdue." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les événements significatifs mais votre seuil de signalement est encore trop élevé", desc: "Vous signalez les incidents clairement dangereux et les presqu'accidents visibles. Mais les anomalies mineures récurrentes, les situations qui 'auraient pu mal tourner' sans y être proches, les doutes non confirmés : votre seuil est encore trop élevé pour capturer les signaux faibles. L'enjeu est de traiter chaque situation qui vous interpelle comme méritant d'être signalée." },
          haut: { label: "Réflexes installés", titre: "Vous signalez les presqu'accidents, les anomalies mineures et les doutes — pas seulement les incidents avérés", desc: "Vous signalez les presqu'accidents sans blessé, les anomalies récurrentes mineures, les doutes sur ce que vous avez observé. Cette façon d'abaisser votre seuil de signalement est ce qui permet au système de sécurité d'identifier les causes profondes avant qu'elles produisent un accident grave. Chaque signalement précoce est une intervention en amont de la chaîne." },
        },
      }, 
      {
        type: "choix",
        text: "Vous observez un presqu'accident impliquant un collègue d'une autre équipe. Il n'a rien dit et semble vouloir passer à autre chose.",
        tags: ["signalement", "tiers"],
        answers: [
          { text: "Je le laisse gérer — c'est lui le concerné, c'est à lui de décider s'il signale.", score: 0 },
          { text: "Je l'encourage à signaler et je lui propose de le faire avec lui si nécessaire.", score: 2 },
          { text: "Je signale moi-même ce que j'ai observé si lui ne le fait pas.", score: 2 },
          { text: "J'attends de voir s'il en parle à son chef.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous signalez les accidents avérés mais pas encore les presqu'accidents et les signaux faibles", desc: "Signaler uniquement quand il y a un blessé ou un dégât visible, c'est intervenir en fin de chaîne — quand la prévention n'a plus d'utilité. Les presqu'accidents et les anomalies récurrentes sont les signaux qui permettent d'agir avant l'accident grave. Chaque situation non signalée est une opportunité d'apprentissage collectif perdue." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les événements significatifs mais votre seuil de signalement est encore trop élevé", desc: "Vous signalez les incidents clairement dangereux et les presqu'accidents visibles. Mais les anomalies mineures récurrentes, les situations qui 'auraient pu mal tourner' sans y être proches, les doutes non confirmés : votre seuil est encore trop élevé pour capturer les signaux faibles. L'enjeu est de traiter chaque situation qui vous interpelle comme méritant d'être signalée." },
          haut: { label: "Réflexes installés", titre: "Vous signalez les presqu'accidents, les anomalies mineures et les doutes — pas seulement les incidents avérés", desc: "Vous signalez les presqu'accidents sans blessé, les anomalies récurrentes mineures, les doutes sur ce que vous avez observé. Cette façon d'abaisser votre seuil de signalement est ce qui permet au système de sécurité d'identifier les causes profondes avant qu'elles produisent un accident grave. Chaque signalement précoce est une intervention en amont de la chaîne." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez observé quelque chose qui vous a semblé anormal mais vous n'êtes pas certain·e de ce que vous avez vu. Vous ne voulez pas déclencher une alerte inutile.",
        tags: ["signalement", "doute"],
        answers: [
          { text: "Je ne signale pas — un doute ne suffit pas pour déclencher une procédure.", score: 0 },
          { text: "Je signale le doute en précisant que je n'en suis pas sûr·e — c'est mieux qu'un silence.", score: 2 },
          { text: "J'en parle à un collègue pour voir s'il a observé la même chose.", score: 1 },
          { text: "Je retourne sur les lieux pour vérifier avant de décider.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous signalez les accidents avérés mais pas encore les presqu'accidents et les signaux faibles", desc: "Signaler uniquement quand il y a un blessé ou un dégât visible, c'est intervenir en fin de chaîne — quand la prévention n'a plus d'utilité. Les presqu'accidents et les anomalies récurrentes sont les signaux qui permettent d'agir avant l'accident grave. Chaque situation non signalée est une opportunité d'apprentissage collectif perdue." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les événements significatifs mais votre seuil de signalement est encore trop élevé", desc: "Vous signalez les incidents clairement dangereux et les presqu'accidents visibles. Mais les anomalies mineures récurrentes, les situations qui 'auraient pu mal tourner' sans y être proches, les doutes non confirmés : votre seuil est encore trop élevé pour capturer les signaux faibles. L'enjeu est de traiter chaque situation qui vous interpelle comme méritant d'être signalée." },
          haut: { label: "Réflexes installés", titre: "Vous signalez les presqu'accidents, les anomalies mineures et les doutes — pas seulement les incidents avérés", desc: "Vous signalez les presqu'accidents sans blessé, les anomalies récurrentes mineures, les doutes sur ce que vous avez observé. Cette façon d'abaisser votre seuil de signalement est ce qui permet au système de sécurité d'identifier les causes profondes avant qu'elles produisent un accident grave. Chaque signalement précoce est une intervention en amont de la chaîne." },
        },
      }, 
      {
        type: "likert",
        text: "Vous signalez même quand vous n'êtes pas certain·e de la gravité — vous préférez une alerte inutile à un silence risqué.",
        tags: ["signalement", "incertitude"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous signalez les accidents avérés mais pas encore les presqu'accidents et les signaux faibles", desc: "Signaler uniquement quand il y a un blessé ou un dégât visible, c'est intervenir en fin de chaîne — quand la prévention n'a plus d'utilité. Les presqu'accidents et les anomalies récurrentes sont les signaux qui permettent d'agir avant l'accident grave. Chaque situation non signalée est une opportunité d'apprentissage collectif perdue." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les événements significatifs mais votre seuil de signalement est encore trop élevé", desc: "Vous signalez les incidents clairement dangereux et les presqu'accidents visibles. Mais les anomalies mineures récurrentes, les situations qui 'auraient pu mal tourner' sans y être proches, les doutes non confirmés : votre seuil est encore trop élevé pour capturer les signaux faibles. L'enjeu est de traiter chaque situation qui vous interpelle comme méritant d'être signalée." },
          haut: { label: "Réflexes installés", titre: "Vous signalez les presqu'accidents, les anomalies mineures et les doutes — pas seulement les incidents avérés", desc: "Vous signalez les presqu'accidents sans blessé, les anomalies récurrentes mineures, les doutes sur ce que vous avez observé. Cette façon d'abaisser votre seuil de signalement est ce qui permet au système de sécurité d'identifier les causes profondes avant qu'elles produisent un accident grave. Chaque signalement précoce est une intervention en amont de la chaîne." },
        },
      }, 
      {
        type: "choix",
        text: "En début de poste, vous constatez qu'une signalétique de sécurité est illisible — décolorée, partiellement arrachée. L'installation concernée est connue de tout le monde.",
        tags: ["signalement", "condition matérielle"],
        answers: [
          { text: "Je laisse — tout le monde connaît déjà la zone, la signalétique est une formalité.", score: 0 },
          { text: "Je la signale pour qu'elle soit remplacée — elle est là pour les situations où les habitudes ne suffisent pas.", score: 2 },
          { text: "Je préviens verbalement mes collègues lors du briefing.", score: 0.5 },
          { text: "Je la remplace moi-même si j'ai le matériel.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous signalez les accidents avérés mais pas encore les presqu'accidents et les signaux faibles", desc: "Signaler uniquement quand il y a un blessé ou un dégât visible, c'est intervenir en fin de chaîne — quand la prévention n'a plus d'utilité. Les presqu'accidents et les anomalies récurrentes sont les signaux qui permettent d'agir avant l'accident grave. Chaque situation non signalée est une opportunité d'apprentissage collectif perdue." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les événements significatifs mais votre seuil de signalement est encore trop élevé", desc: "Vous signalez les incidents clairement dangereux et les presqu'accidents visibles. Mais les anomalies mineures récurrentes, les situations qui 'auraient pu mal tourner' sans y être proches, les doutes non confirmés : votre seuil est encore trop élevé pour capturer les signaux faibles. L'enjeu est de traiter chaque situation qui vous interpelle comme méritant d'être signalée." },
          haut: { label: "Réflexes installés", titre: "Vous signalez les presqu'accidents, les anomalies mineures et les doutes — pas seulement les incidents avérés", desc: "Vous signalez les presqu'accidents sans blessé, les anomalies récurrentes mineures, les doutes sur ce que vous avez observé. Cette façon d'abaisser votre seuil de signalement est ce qui permet au système de sécurité d'identifier les causes profondes avant qu'elles produisent un accident grave. Chaque signalement précoce est une intervention en amont de la chaîne." },
        },
      }
    ],

    1: [
      {
        type: "choix",
        text: "Vous avez commis une erreur lors d'une opération. Elle ne s'est pas traduite par un incident mais elle aurait pu. Signaler implique de reconnaître votre propre responsabilité.",
        tags: ["freins", "peur conséquences"],
        answers: [
          { text: "Je ne signale pas — la situation s'est résolue et me mettre en cause serait inutile.", score: 0 },
          { text: "Je signale en décrivant les faits, y compris ma part dans l'erreur.", score: 2 },
          { text: "Je signale l'événement sans mentionner ma responsabilité directe.", score: 0.5 },
          { text: "J'en parle à mon responsable en privé avant de décider si je fais une déclaration officielle.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les freins au signalement — peur des conséquences, inutilité perçue, pression collective — l'emportent encore souvent", desc: "Ne pas signaler parce que personne d'autre ne l'a fait, parce qu'un collègue vous demande de ne pas le faire, parce que votre chef minimise l'événement : ces freins transforment la culture du signalement en culture du silence. Le silence collectif sur les incidents est le terrain commun des accidents graves." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux freins évidents mais vous cédez encore dans les situations à coût social élevé", desc: "Vous signalez sans vous laisser influencer par la pression collective ordinaire. Mais quand votre chef vous demande de ne pas remonter, quand un bon collègue vous demande de protéger sa version, quand ça implique de reconnaître votre propre responsabilité dans l'événement : votre résistance peut encore fléchir. L'enjeu est de tenir précisément dans ces situations." },
          haut: { label: "Réflexes installés", titre: "Vous surmontez les freins au signalement quelle que soit leur nature — peur, pression collective, hiérarchie", desc: "Vous signalez même quand ça implique de reconnaître votre part de responsabilité, même quand votre chef préfère gérer en interne, même quand un collègue vous demande de ne pas le faire. Cette indépendance dans le signalement — qui suppose d'accepter parfois un inconfort relationnel ou hiérarchique — est le comportement qui rend un système de signalement vraiment fiable." },
        },
      }, 
      {
        type: "likert",
        text: "Vous signalez les incidents dans lesquels vous avez vous-même une part de responsabilité, même si c'est inconfortable.",
        tags: ["freins", "courage"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les freins au signalement — peur des conséquences, inutilité perçue, pression collective — l'emportent encore souvent", desc: "Ne pas signaler parce que personne d'autre ne l'a fait, parce qu'un collègue vous demande de ne pas le faire, parce que votre chef minimise l'événement : ces freins transforment la culture du signalement en culture du silence. Le silence collectif sur les incidents est le terrain commun des accidents graves." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux freins évidents mais vous cédez encore dans les situations à coût social élevé", desc: "Vous signalez sans vous laisser influencer par la pression collective ordinaire. Mais quand votre chef vous demande de ne pas remonter, quand un bon collègue vous demande de protéger sa version, quand ça implique de reconnaître votre propre responsabilité dans l'événement : votre résistance peut encore fléchir. L'enjeu est de tenir précisément dans ces situations." },
          haut: { label: "Réflexes installés", titre: "Vous surmontez les freins au signalement quelle que soit leur nature — peur, pression collective, hiérarchie", desc: "Vous signalez même quand ça implique de reconnaître votre part de responsabilité, même quand votre chef préfère gérer en interne, même quand un collègue vous demande de ne pas le faire. Cette indépendance dans le signalement — qui suppose d'accepter parfois un inconfort relationnel ou hiérarchique — est le comportement qui rend un système de signalement vraiment fiable." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez fait plusieurs signalements ces derniers mois. Aucun n'a eu de suite visible — pas de retour, pas d'action corrective communiquée. Un nouvel événement se produit.",
        tags: ["freins", "inutilité perçue"],
        answers: [
          { text: "Je ne signale plus — si rien ne change, ça ne sert à rien.", score: 0 },
          { text: "Je signale et je demande explicitement un retour sur ce signalement.", score: 2 },
          { text: "Je signale en espérant que cette fois ça serve à quelque chose.", score: 1 },
          { text: "J'en parle directement à mon responsable plutôt que par le système officiel.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les freins au signalement — peur des conséquences, inutilité perçue, pression collective — l'emportent encore souvent", desc: "Ne pas signaler parce que personne d'autre ne l'a fait, parce qu'un collègue vous demande de ne pas le faire, parce que votre chef minimise l'événement : ces freins transforment la culture du signalement en culture du silence. Le silence collectif sur les incidents est le terrain commun des accidents graves." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux freins évidents mais vous cédez encore dans les situations à coût social élevé", desc: "Vous signalez sans vous laisser influencer par la pression collective ordinaire. Mais quand votre chef vous demande de ne pas remonter, quand un bon collègue vous demande de protéger sa version, quand ça implique de reconnaître votre propre responsabilité dans l'événement : votre résistance peut encore fléchir. L'enjeu est de tenir précisément dans ces situations." },
          haut: { label: "Réflexes installés", titre: "Vous surmontez les freins au signalement quelle que soit leur nature — peur, pression collective, hiérarchie", desc: "Vous signalez même quand ça implique de reconnaître votre part de responsabilité, même quand votre chef préfère gérer en interne, même quand un collègue vous demande de ne pas le faire. Cette indépendance dans le signalement — qui suppose d'accepter parfois un inconfort relationnel ou hiérarchique — est le comportement qui rend un système de signalement vraiment fiable." },
        },
      }, 
      {
        type: "choix",
        text: "Votre équipe a tacitement décidé de ne pas signaler un incident pour ne pas 'attirer les ennuis'. On vous demande implicitement de faire pareil.",
        tags: ["freins", "collectif"],
        answers: [
          { text: "Je m'aligne — l'équipe a ses raisons et la solidarité compte.", score: 0 },
          { text: "Je signale quand même — je ne peux pas garantir la sécurité des autres si les informations ne circulent pas.", score: 2 },
          { text: "Je ne signale pas mais je m'assure que les collègues concernés prennent les mesures correctives.", score: 0 },
          { text: "J'en parle à mon responsable sans passer par le système officiel.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les freins au signalement — peur des conséquences, inutilité perçue, pression collective — l'emportent encore souvent", desc: "Ne pas signaler parce que personne d'autre ne l'a fait, parce qu'un collègue vous demande de ne pas le faire, parce que votre chef minimise l'événement : ces freins transforment la culture du signalement en culture du silence. Le silence collectif sur les incidents est le terrain commun des accidents graves." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux freins évidents mais vous cédez encore dans les situations à coût social élevé", desc: "Vous signalez sans vous laisser influencer par la pression collective ordinaire. Mais quand votre chef vous demande de ne pas remonter, quand un bon collègue vous demande de protéger sa version, quand ça implique de reconnaître votre propre responsabilité dans l'événement : votre résistance peut encore fléchir. L'enjeu est de tenir précisément dans ces situations." },
          haut: { label: "Réflexes installés", titre: "Vous surmontez les freins au signalement quelle que soit leur nature — peur, pression collective, hiérarchie", desc: "Vous signalez même quand ça implique de reconnaître votre part de responsabilité, même quand votre chef préfère gérer en interne, même quand un collègue vous demande de ne pas le faire. Cette indépendance dans le signalement — qui suppose d'accepter parfois un inconfort relationnel ou hiérarchique — est le comportement qui rend un système de signalement vraiment fiable." },
        },
      }, 
      {
        type: "choix",
        text: "L'incident que vous devez signaler implique directement Sophie, une collègue avec qui vous avez une excellente relation. Elle vous demande de ne pas le faire.",
        tags: ["freins", "relation"],
        answers: [
          { text: "Je ne signale pas — notre relation compte et elle prendra les précautions nécessaires.", score: 0 },
          { text: "Je lui explique pourquoi je dois signaler et je le fais.", score: 2 },
          { text: "Je lui laisse le temps de le signaler elle-même avant d'agir.", score: 1 },
          { text: "Je signale l'événement sans mentionner son nom si le format le permet.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les freins au signalement — peur des conséquences, inutilité perçue, pression collective — l'emportent encore souvent", desc: "Ne pas signaler parce que personne d'autre ne l'a fait, parce qu'un collègue vous demande de ne pas le faire, parce que votre chef minimise l'événement : ces freins transforment la culture du signalement en culture du silence. Le silence collectif sur les incidents est le terrain commun des accidents graves." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux freins évidents mais vous cédez encore dans les situations à coût social élevé", desc: "Vous signalez sans vous laisser influencer par la pression collective ordinaire. Mais quand votre chef vous demande de ne pas remonter, quand un bon collègue vous demande de protéger sa version, quand ça implique de reconnaître votre propre responsabilité dans l'événement : votre résistance peut encore fléchir. L'enjeu est de tenir précisément dans ces situations." },
          haut: { label: "Réflexes installés", titre: "Vous surmontez les freins au signalement quelle que soit leur nature — peur, pression collective, hiérarchie", desc: "Vous signalez même quand ça implique de reconnaître votre part de responsabilité, même quand votre chef préfère gérer en interne, même quand un collègue vous demande de ne pas le faire. Cette indépendance dans le signalement — qui suppose d'accepter parfois un inconfort relationnel ou hiérarchique — est le comportement qui rend un système de signalement vraiment fiable." },
        },
      }, 
      {
        type: "likert",
        text: "Vous signalez les incidents même quand votre équipe ou un collègue vous demande de ne pas le faire.",
        tags: ["freins", "indépendance"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les freins au signalement — peur des conséquences, inutilité perçue, pression collective — l'emportent encore souvent", desc: "Ne pas signaler parce que personne d'autre ne l'a fait, parce qu'un collègue vous demande de ne pas le faire, parce que votre chef minimise l'événement : ces freins transforment la culture du signalement en culture du silence. Le silence collectif sur les incidents est le terrain commun des accidents graves." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux freins évidents mais vous cédez encore dans les situations à coût social élevé", desc: "Vous signalez sans vous laisser influencer par la pression collective ordinaire. Mais quand votre chef vous demande de ne pas remonter, quand un bon collègue vous demande de protéger sa version, quand ça implique de reconnaître votre propre responsabilité dans l'événement : votre résistance peut encore fléchir. L'enjeu est de tenir précisément dans ces situations." },
          haut: { label: "Réflexes installés", titre: "Vous surmontez les freins au signalement quelle que soit leur nature — peur, pression collective, hiérarchie", desc: "Vous signalez même quand ça implique de reconnaître votre part de responsabilité, même quand votre chef préfère gérer en interne, même quand un collègue vous demande de ne pas le faire. Cette indépendance dans le signalement — qui suppose d'accepter parfois un inconfort relationnel ou hiérarchique — est le comportement qui rend un système de signalement vraiment fiable." },
        },
      }, 
      {
        type: "choix",
        text: "Votre chef vous dit que ce type d'événement 'n'a pas besoin d'être remonté' — il préfère gérer ça en interne sans laisser de trace. Vous estimez que ça devrait être signalé.",
        tags: ["freins", "hiérarchie"],
        answers: [
          { text: "Je m'aligne — c'est lui le responsable et il connaît les enjeux.", score: 0 },
          { text: "Je lui demande de me confirmer par écrit que je n'ai pas à le signaler.", score: 2 },
          { text: "Je signale quand même par le canal habituel.", score: 2 },
          { text: "J'attends et j'observe si la situation évolue avant de décider.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les freins au signalement — peur des conséquences, inutilité perçue, pression collective — l'emportent encore souvent", desc: "Ne pas signaler parce que personne d'autre ne l'a fait, parce qu'un collègue vous demande de ne pas le faire, parce que votre chef minimise l'événement : ces freins transforment la culture du signalement en culture du silence. Le silence collectif sur les incidents est le terrain commun des accidents graves." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux freins évidents mais vous cédez encore dans les situations à coût social élevé", desc: "Vous signalez sans vous laisser influencer par la pression collective ordinaire. Mais quand votre chef vous demande de ne pas remonter, quand un bon collègue vous demande de protéger sa version, quand ça implique de reconnaître votre propre responsabilité dans l'événement : votre résistance peut encore fléchir. L'enjeu est de tenir précisément dans ces situations." },
          haut: { label: "Réflexes installés", titre: "Vous surmontez les freins au signalement quelle que soit leur nature — peur, pression collective, hiérarchie", desc: "Vous signalez même quand ça implique de reconnaître votre part de responsabilité, même quand votre chef préfère gérer en interne, même quand un collègue vous demande de ne pas le faire. Cette indépendance dans le signalement — qui suppose d'accepter parfois un inconfort relationnel ou hiérarchique — est le comportement qui rend un système de signalement vraiment fiable." },
        },
      }, 
      {
        type: "choix",
        text: "Un incident mineur s'est produit. Votre responsable dit que 'ce n'est pas la peine d'en faire un plat' et que ce type d'événement est courant dans votre métier.",
        tags: ["freins", "gravité minimisée"],
        answers: [
          { text: "Je m'aligne — il a l'expérience et sait ce qui mérite d'être signalé ou non.", score: 0 },
          { text: "Je signale quand même — la fréquence d'un événement ne réduit pas son risque.", score: 2 },
          { text: "Je demande à un collègue expérimenté son avis avant de décider.", score: 0.5 },
          { text: "Je note l'événement dans mon carnet sans déclaration formelle.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les freins au signalement — peur des conséquences, inutilité perçue, pression collective — l'emportent encore souvent", desc: "Ne pas signaler parce que personne d'autre ne l'a fait, parce qu'un collègue vous demande de ne pas le faire, parce que votre chef minimise l'événement : ces freins transforment la culture du signalement en culture du silence. Le silence collectif sur les incidents est le terrain commun des accidents graves." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux freins évidents mais vous cédez encore dans les situations à coût social élevé", desc: "Vous signalez sans vous laisser influencer par la pression collective ordinaire. Mais quand votre chef vous demande de ne pas remonter, quand un bon collègue vous demande de protéger sa version, quand ça implique de reconnaître votre propre responsabilité dans l'événement : votre résistance peut encore fléchir. L'enjeu est de tenir précisément dans ces situations." },
          haut: { label: "Réflexes installés", titre: "Vous surmontez les freins au signalement quelle que soit leur nature — peur, pression collective, hiérarchie", desc: "Vous signalez même quand ça implique de reconnaître votre part de responsabilité, même quand votre chef préfère gérer en interne, même quand un collègue vous demande de ne pas le faire. Cette indépendance dans le signalement — qui suppose d'accepter parfois un inconfort relationnel ou hiérarchique — est le comportement qui rend un système de signalement vraiment fiable." },
        },
      }, 
      {
        type: "likert",
        text: "Vous signalez les événements courants et récurrents, même si tout le monde considère que 'ça fait partie du métier'.",
        tags: ["freins", "normalisation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les freins au signalement — peur des conséquences, inutilité perçue, pression collective — l'emportent encore souvent", desc: "Ne pas signaler parce que personne d'autre ne l'a fait, parce qu'un collègue vous demande de ne pas le faire, parce que votre chef minimise l'événement : ces freins transforment la culture du signalement en culture du silence. Le silence collectif sur les incidents est le terrain commun des accidents graves." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux freins évidents mais vous cédez encore dans les situations à coût social élevé", desc: "Vous signalez sans vous laisser influencer par la pression collective ordinaire. Mais quand votre chef vous demande de ne pas remonter, quand un bon collègue vous demande de protéger sa version, quand ça implique de reconnaître votre propre responsabilité dans l'événement : votre résistance peut encore fléchir. L'enjeu est de tenir précisément dans ces situations." },
          haut: { label: "Réflexes installés", titre: "Vous surmontez les freins au signalement quelle que soit leur nature — peur, pression collective, hiérarchie", desc: "Vous signalez même quand ça implique de reconnaître votre part de responsabilité, même quand votre chef préfère gérer en interne, même quand un collègue vous demande de ne pas le faire. Cette indépendance dans le signalement — qui suppose d'accepter parfois un inconfort relationnel ou hiérarchique — est le comportement qui rend un système de signalement vraiment fiable." },
        },
      }, 
      {
        type: "choix",
        text: "Le processus de déclaration dans votre entreprise est long et administratif. Signaler un presqu'accident mineur prend 30 minutes. Vous êtes en plein rush.",
        tags: ["freins", "charge"],
        answers: [
          { text: "Je ne signale pas — pour un presqu'accident mineur, 30 minutes n'est pas proportionné.", score: 0 },
          { text: "Je note les éléments essentiels maintenant et je fais la déclaration complète dès que j'ai 30 minutes.", score: 2 },
          { text: "Je le signale verbalement à mon chef pour qu'il le fasse à ma place.", score: 1 },
          { text: "Je fais une déclaration rapide et incomplète pour respecter les délais.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les freins au signalement — peur des conséquences, inutilité perçue, pression collective — l'emportent encore souvent", desc: "Ne pas signaler parce que personne d'autre ne l'a fait, parce qu'un collègue vous demande de ne pas le faire, parce que votre chef minimise l'événement : ces freins transforment la culture du signalement en culture du silence. Le silence collectif sur les incidents est le terrain commun des accidents graves." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux freins évidents mais vous cédez encore dans les situations à coût social élevé", desc: "Vous signalez sans vous laisser influencer par la pression collective ordinaire. Mais quand votre chef vous demande de ne pas remonter, quand un bon collègue vous demande de protéger sa version, quand ça implique de reconnaître votre propre responsabilité dans l'événement : votre résistance peut encore fléchir. L'enjeu est de tenir précisément dans ces situations." },
          haut: { label: "Réflexes installés", titre: "Vous surmontez les freins au signalement quelle que soit leur nature — peur, pression collective, hiérarchie", desc: "Vous signalez même quand ça implique de reconnaître votre part de responsabilité, même quand votre chef préfère gérer en interne, même quand un collègue vous demande de ne pas le faire. Cette indépendance dans le signalement — qui suppose d'accepter parfois un inconfort relationnel ou hiérarchique — est le comportement qui rend un système de signalement vraiment fiable." },
        },
      }
    ],

    2: [
      {
        type: "choix",
        text: "Vous rédigez un signalement. Vous pensez savoir pourquoi l'incident s'est produit. Vous hésitez à inclure votre interprétation dans le document.",
        tags: ["qualification", "faits"],
        answers: [
          { text: "J'inclus mon interprétation — elle peut aider à comprendre les causes.", score: 0.5 },
          { text: "Je décris uniquement les faits observés et je mentionne séparément mes hypothèses.", score: 2 },
          { text: "Je décris les faits et j'omets mon interprétation pour rester neutre.", score: 1.5 },
          { text: "Je laisse les experts interpréter — mon rôle est juste de décrire.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos signalements sont incomplets ou atténués par crainte d'exposer le contexte réel", desc: "Omettre la pression de délai qui a précédé l'incident, décrire les faits sans leur contexte, accepter de 'simplifier' un signalement à la demande de votre hiérarchie : un signalement incomplet ou atténué ne permet pas d'identifier les vraies causes. Ce qui n'est pas écrit n'est pas traité." },
          moyen: { label: "Pratiques en développement", titre: "Vos signalements sont généralement complets mais vous atténuez encore dans les situations inconfortables", desc: "Vos signalements sont honnêtes et factuels dans la plupart des situations. Mais mentionner la pression de délai qui a précédé l'incident, résister à une demande de 'simplification' hiérarchique, inclure votre propre part dans la cause : ces situations peuvent encore amener à des signalements incomplets. L'enjeu est d'aller jusqu'au bout de l'honnêteté même dans ces zones inconfortables." },
          haut: { label: "Réflexes installés", titre: "Vos signalements sont complets et honnêtes, y compris sur les éléments qui vous impliquent ou exposent le contexte", desc: "Vos signalements incluent le contexte complet — y compris la pression de délai, vos propres erreurs, les pratiques déviantes collectives. Vous résistez aux demandes de simplification ou d'atténuation. Ce niveau d'honnêteté dans le signalement est ce qui permet d'identifier les vraies causes et pas seulement les causes de surface." },
        },
      }, 
      {
        type: "likert",
        text: "Vos signalements contiennent les éléments factuels essentiels — quoi, quand, où, dans quelles conditions — sans interprétation ni jugement.",
        tags: ["qualification", "précision"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos signalements sont incomplets ou atténués par crainte d'exposer le contexte réel", desc: "Omettre la pression de délai qui a précédé l'incident, décrire les faits sans leur contexte, accepter de 'simplifier' un signalement à la demande de votre hiérarchie : un signalement incomplet ou atténué ne permet pas d'identifier les vraies causes. Ce qui n'est pas écrit n'est pas traité." },
          moyen: { label: "Pratiques en développement", titre: "Vos signalements sont généralement complets mais vous atténuez encore dans les situations inconfortables", desc: "Vos signalements sont honnêtes et factuels dans la plupart des situations. Mais mentionner la pression de délai qui a précédé l'incident, résister à une demande de 'simplification' hiérarchique, inclure votre propre part dans la cause : ces situations peuvent encore amener à des signalements incomplets. L'enjeu est d'aller jusqu'au bout de l'honnêteté même dans ces zones inconfortables." },
          haut: { label: "Réflexes installés", titre: "Vos signalements sont complets et honnêtes, y compris sur les éléments qui vous impliquent ou exposent le contexte", desc: "Vos signalements incluent le contexte complet — y compris la pression de délai, vos propres erreurs, les pratiques déviantes collectives. Vous résistez aux demandes de simplification ou d'atténuation. Ce niveau d'honnêteté dans le signalement est ce qui permet d'identifier les vraies causes et pas seulement les causes de surface." },
        },
      }, 
      {
        type: "choix",
        text: "Un presqu'accident s'est produit il y a deux heures. Vous êtes en fin de poste et vous devez partir. Le signalement peut attendre demain.",
        tags: ["qualification", "délai"],
        answers: [
          { text: "Je laisse pour demain — les faits seront toujours là et j'aurai plus de temps.", score: 0 },
          { text: "Je prends 10 minutes maintenant pour noter les éléments essentiels avant que les détails s'estompent.", score: 2 },
          { text: "J'en parle oralement à mon remplaçant pour qu'il fasse le signalement.", score: 1 },
          { text: "Je fais le signalement demain matin en premier — c'est encore frais.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos signalements sont incomplets ou atténués par crainte d'exposer le contexte réel", desc: "Omettre la pression de délai qui a précédé l'incident, décrire les faits sans leur contexte, accepter de 'simplifier' un signalement à la demande de votre hiérarchie : un signalement incomplet ou atténué ne permet pas d'identifier les vraies causes. Ce qui n'est pas écrit n'est pas traité." },
          moyen: { label: "Pratiques en développement", titre: "Vos signalements sont généralement complets mais vous atténuez encore dans les situations inconfortables", desc: "Vos signalements sont honnêtes et factuels dans la plupart des situations. Mais mentionner la pression de délai qui a précédé l'incident, résister à une demande de 'simplification' hiérarchique, inclure votre propre part dans la cause : ces situations peuvent encore amener à des signalements incomplets. L'enjeu est d'aller jusqu'au bout de l'honnêteté même dans ces zones inconfortables." },
          haut: { label: "Réflexes installés", titre: "Vos signalements sont complets et honnêtes, y compris sur les éléments qui vous impliquent ou exposent le contexte", desc: "Vos signalements incluent le contexte complet — y compris la pression de délai, vos propres erreurs, les pratiques déviantes collectives. Vous résistez aux demandes de simplification ou d'atténuation. Ce niveau d'honnêteté dans le signalement est ce qui permet d'identifier les vraies causes et pas seulement les causes de surface." },
        },
      }, 
      {
        type: "choix",
        text: "Vous signalez un incident. En rédigeant, vous réalisez que mentionner le contexte complet implique d'indiquer que vous étiez en retard sur un délai et que vous aviez accéléré le rythme.",
        tags: ["qualification", "contexte"],
        answers: [
          { text: "Je décris l'incident sans mentionner le contexte de délai — ce n'est pas directement lié.", score: 0 },
          { text: "Je mentionne le contexte complet, y compris la pression de délai — c'est potentiellement une cause.", score: 2 },
          { text: "Je mentionne que 'les conditions de travail étaient inhabituelles' sans préciser.", score: 0.5 },
          { text: "J'en parle verbalement à mon responsable mais je ne l'écris pas.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos signalements sont incomplets ou atténués par crainte d'exposer le contexte réel", desc: "Omettre la pression de délai qui a précédé l'incident, décrire les faits sans leur contexte, accepter de 'simplifier' un signalement à la demande de votre hiérarchie : un signalement incomplet ou atténué ne permet pas d'identifier les vraies causes. Ce qui n'est pas écrit n'est pas traité." },
          moyen: { label: "Pratiques en développement", titre: "Vos signalements sont généralement complets mais vous atténuez encore dans les situations inconfortables", desc: "Vos signalements sont honnêtes et factuels dans la plupart des situations. Mais mentionner la pression de délai qui a précédé l'incident, résister à une demande de 'simplification' hiérarchique, inclure votre propre part dans la cause : ces situations peuvent encore amener à des signalements incomplets. L'enjeu est d'aller jusqu'au bout de l'honnêteté même dans ces zones inconfortables." },
          haut: { label: "Réflexes installés", titre: "Vos signalements sont complets et honnêtes, y compris sur les éléments qui vous impliquent ou exposent le contexte", desc: "Vos signalements incluent le contexte complet — y compris la pression de délai, vos propres erreurs, les pratiques déviantes collectives. Vous résistez aux demandes de simplification ou d'atténuation. Ce niveau d'honnêteté dans le signalement est ce qui permet d'identifier les vraies causes et pas seulement les causes de surface." },
        },
      }, 
      {
        type: "likert",
        text: "Vos signalements incluent le contexte complet — y compris les éléments qui pourraient mettre en cause votre organisation ou votre propre comportement.",
        tags: ["qualification", "honnêteté"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos signalements sont incomplets ou atténués par crainte d'exposer le contexte réel", desc: "Omettre la pression de délai qui a précédé l'incident, décrire les faits sans leur contexte, accepter de 'simplifier' un signalement à la demande de votre hiérarchie : un signalement incomplet ou atténué ne permet pas d'identifier les vraies causes. Ce qui n'est pas écrit n'est pas traité." },
          moyen: { label: "Pratiques en développement", titre: "Vos signalements sont généralement complets mais vous atténuez encore dans les situations inconfortables", desc: "Vos signalements sont honnêtes et factuels dans la plupart des situations. Mais mentionner la pression de délai qui a précédé l'incident, résister à une demande de 'simplification' hiérarchique, inclure votre propre part dans la cause : ces situations peuvent encore amener à des signalements incomplets. L'enjeu est d'aller jusqu'au bout de l'honnêteté même dans ces zones inconfortables." },
          haut: { label: "Réflexes installés", titre: "Vos signalements sont complets et honnêtes, y compris sur les éléments qui vous impliquent ou exposent le contexte", desc: "Vos signalements incluent le contexte complet — y compris la pression de délai, vos propres erreurs, les pratiques déviantes collectives. Vous résistez aux demandes de simplification ou d'atténuation. Ce niveau d'honnêteté dans le signalement est ce qui permet d'identifier les vraies causes et pas seulement les causes de surface." },
        },
      }, 
      {
        type: "choix",
        text: "Vous observez une situation dangereuse imminente — pas encore un accident, mais quelque chose qui peut mal tourner dans les prochaines minutes. Vous ne savez pas quel canal utiliser.",
        tags: ["qualification", "canal"],
        answers: [
          { text: "Je cherche le bon formulaire avant d'agir — un signalement doit suivre la procédure.", score: 0 },
          { text: "J'interviens immédiatement pour sécuriser la situation, le signalement formel viendra après.", score: 2 },
          { text: "Je préviens verbalement les personnes concernées et je fais le signalement en parallèle.", score: 2 },
          { text: "Je préviens mon chef pour qu'il décide de la marche à suivre.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos signalements sont incomplets ou atténués par crainte d'exposer le contexte réel", desc: "Omettre la pression de délai qui a précédé l'incident, décrire les faits sans leur contexte, accepter de 'simplifier' un signalement à la demande de votre hiérarchie : un signalement incomplet ou atténué ne permet pas d'identifier les vraies causes. Ce qui n'est pas écrit n'est pas traité." },
          moyen: { label: "Pratiques en développement", titre: "Vos signalements sont généralement complets mais vous atténuez encore dans les situations inconfortables", desc: "Vos signalements sont honnêtes et factuels dans la plupart des situations. Mais mentionner la pression de délai qui a précédé l'incident, résister à une demande de 'simplification' hiérarchique, inclure votre propre part dans la cause : ces situations peuvent encore amener à des signalements incomplets. L'enjeu est d'aller jusqu'au bout de l'honnêteté même dans ces zones inconfortables." },
          haut: { label: "Réflexes installés", titre: "Vos signalements sont complets et honnêtes, y compris sur les éléments qui vous impliquent ou exposent le contexte", desc: "Vos signalements incluent le contexte complet — y compris la pression de délai, vos propres erreurs, les pratiques déviantes collectives. Vous résistez aux demandes de simplification ou d'atténuation. Ce niveau d'honnêteté dans le signalement est ce qui permet d'identifier les vraies causes et pas seulement les causes de surface." },
        },
      }, 
      {
        type: "choix",
        text: "En rédigeant votre signalement, vous réalisez que certains détails vous manquent — vous n'êtes plus sûr·e de l'heure exacte ni d'un élément technique précis.",
        tags: ["qualification", "exactitude"],
        answers: [
          { text: "Je complète avec ce qui me semble le plus probable — mieux vaut un signalement complet.", score: 0 },
          { text: "Je signale ce dont je suis certain·e en indiquant clairement ce qui est approximatif.", score: 2 },
          { text: "J'attends d'avoir les détails exacts avant de soumettre le signalement.", score: 0 },
          { text: "Je demande à un collègue présent de compléter les éléments qui me manquent.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos signalements sont incomplets ou atténués par crainte d'exposer le contexte réel", desc: "Omettre la pression de délai qui a précédé l'incident, décrire les faits sans leur contexte, accepter de 'simplifier' un signalement à la demande de votre hiérarchie : un signalement incomplet ou atténué ne permet pas d'identifier les vraies causes. Ce qui n'est pas écrit n'est pas traité." },
          moyen: { label: "Pratiques en développement", titre: "Vos signalements sont généralement complets mais vous atténuez encore dans les situations inconfortables", desc: "Vos signalements sont honnêtes et factuels dans la plupart des situations. Mais mentionner la pression de délai qui a précédé l'incident, résister à une demande de 'simplification' hiérarchique, inclure votre propre part dans la cause : ces situations peuvent encore amener à des signalements incomplets. L'enjeu est d'aller jusqu'au bout de l'honnêteté même dans ces zones inconfortables." },
          haut: { label: "Réflexes installés", titre: "Vos signalements sont complets et honnêtes, y compris sur les éléments qui vous impliquent ou exposent le contexte", desc: "Vos signalements incluent le contexte complet — y compris la pression de délai, vos propres erreurs, les pratiques déviantes collectives. Vous résistez aux demandes de simplification ou d'atténuation. Ce niveau d'honnêteté dans le signalement est ce qui permet d'identifier les vraies causes et pas seulement les causes de surface." },
        },
      }, 
      {
        type: "choix",
        text: "Vous venez de finir de rédiger un signalement détaillé. Votre responsable vous demande de le 'simplifier' avant de le transmettre — certains éléments lui semblent trop détaillés.",
        tags: ["qualification", "transmission"],
        answers: [
          { text: "Je simplifie comme il demande — c'est lui qui valide et il connaît les usages.", score: 0 },
          { text: "Je lui demande ce qui le gêne précisément avant de modifier quoi que ce soit.", score: 2 },
          { text: "Je garde mon signalement complet et je lui envoie à lui une version allégée séparément.", score: 1 },
          { text: "Je simplifie en retirant les éléments les moins critiques selon moi.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos signalements sont incomplets ou atténués par crainte d'exposer le contexte réel", desc: "Omettre la pression de délai qui a précédé l'incident, décrire les faits sans leur contexte, accepter de 'simplifier' un signalement à la demande de votre hiérarchie : un signalement incomplet ou atténué ne permet pas d'identifier les vraies causes. Ce qui n'est pas écrit n'est pas traité." },
          moyen: { label: "Pratiques en développement", titre: "Vos signalements sont généralement complets mais vous atténuez encore dans les situations inconfortables", desc: "Vos signalements sont honnêtes et factuels dans la plupart des situations. Mais mentionner la pression de délai qui a précédé l'incident, résister à une demande de 'simplification' hiérarchique, inclure votre propre part dans la cause : ces situations peuvent encore amener à des signalements incomplets. L'enjeu est d'aller jusqu'au bout de l'honnêteté même dans ces zones inconfortables." },
          haut: { label: "Réflexes installés", titre: "Vos signalements sont complets et honnêtes, y compris sur les éléments qui vous impliquent ou exposent le contexte", desc: "Vos signalements incluent le contexte complet — y compris la pression de délai, vos propres erreurs, les pratiques déviantes collectives. Vous résistez aux demandes de simplification ou d'atténuation. Ce niveau d'honnêteté dans le signalement est ce qui permet d'identifier les vraies causes et pas seulement les causes de surface." },
        },
      }, 
      {
        type: "likert",
        text: "Vous résistez aux demandes de modification de vos signalements qui en réduiraient la portée ou en masqueraient des éléments importants.",
        tags: ["qualification", "intégrité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos signalements sont incomplets ou atténués par crainte d'exposer le contexte réel", desc: "Omettre la pression de délai qui a précédé l'incident, décrire les faits sans leur contexte, accepter de 'simplifier' un signalement à la demande de votre hiérarchie : un signalement incomplet ou atténué ne permet pas d'identifier les vraies causes. Ce qui n'est pas écrit n'est pas traité." },
          moyen: { label: "Pratiques en développement", titre: "Vos signalements sont généralement complets mais vous atténuez encore dans les situations inconfortables", desc: "Vos signalements sont honnêtes et factuels dans la plupart des situations. Mais mentionner la pression de délai qui a précédé l'incident, résister à une demande de 'simplification' hiérarchique, inclure votre propre part dans la cause : ces situations peuvent encore amener à des signalements incomplets. L'enjeu est d'aller jusqu'au bout de l'honnêteté même dans ces zones inconfortables." },
          haut: { label: "Réflexes installés", titre: "Vos signalements sont complets et honnêtes, y compris sur les éléments qui vous impliquent ou exposent le contexte", desc: "Vos signalements incluent le contexte complet — y compris la pression de délai, vos propres erreurs, les pratiques déviantes collectives. Vous résistez aux demandes de simplification ou d'atténuation. Ce niveau d'honnêteté dans le signalement est ce qui permet d'identifier les vraies causes et pas seulement les causes de surface." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez fait un signalement il y a deux semaines. Vous n'avez reçu aucun retour. La situation signalée est toujours présente.",
        tags: ["qualification", "retour"],
        answers: [
          { text: "J'attends — les équipes sécurité ont leurs processus et ça prend du temps.", score: 0.5 },
          { text: "Je relance pour avoir un retour et je revérifie que mon signalement a bien été reçu.", score: 2 },
          { text: "Je signale à nouveau en espérant que cette fois ça remonte.", score: 1 },
          { text: "Je gère la situation moi-même puisque personne ne s'en occupe.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos signalements sont incomplets ou atténués par crainte d'exposer le contexte réel", desc: "Omettre la pression de délai qui a précédé l'incident, décrire les faits sans leur contexte, accepter de 'simplifier' un signalement à la demande de votre hiérarchie : un signalement incomplet ou atténué ne permet pas d'identifier les vraies causes. Ce qui n'est pas écrit n'est pas traité." },
          moyen: { label: "Pratiques en développement", titre: "Vos signalements sont généralement complets mais vous atténuez encore dans les situations inconfortables", desc: "Vos signalements sont honnêtes et factuels dans la plupart des situations. Mais mentionner la pression de délai qui a précédé l'incident, résister à une demande de 'simplification' hiérarchique, inclure votre propre part dans la cause : ces situations peuvent encore amener à des signalements incomplets. L'enjeu est d'aller jusqu'au bout de l'honnêteté même dans ces zones inconfortables." },
          haut: { label: "Réflexes installés", titre: "Vos signalements sont complets et honnêtes, y compris sur les éléments qui vous impliquent ou exposent le contexte", desc: "Vos signalements incluent le contexte complet — y compris la pression de délai, vos propres erreurs, les pratiques déviantes collectives. Vous résistez aux demandes de simplification ou d'atténuation. Ce niveau d'honnêteté dans le signalement est ce qui permet d'identifier les vraies causes et pas seulement les causes de surface." },
        },
      }
    ],

    3: [
      {
        type: "choix",
        text: "Un REX est organisé sur un incident qui ne vous implique pas directement. Vous avez observé des éléments pertinents mais votre participation n'est pas obligatoire.",
        tags: ["REX", "participation"],
        answers: [
          { text: "Je n'y assiste pas — je n'étais pas impliqué et ma présence n'est pas requise.", score: 0 },
          { text: "Je participe et je partage ce que j'ai observé — ma perspective peut être utile.", score: 2 },
          { text: "J'envoie mes observations par écrit sans assister.", score: 1.5 },
          { text: "J'en parle à un collègue qui y sera pour qu'il transmette mes éléments.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les REX sont des exercices formels pour vous, pas encore de vrais outils d'apprentissage", desc: "Ne lire que les REX obligatoires, ne pas prendre la parole quand les conclusions semblent incomplètes, ne pas vérifier si les mesures correctives ont été appliquées : le REX n'est utile que si les personnes qui connaissent le terrain y contribuent activement et vérifient que ses conclusions se traduisent en pratiques." },
          moyen: { label: "Pratiques en développement", titre: "Vous participez aux REX et en tirez des enseignements, mais votre contribution active reste limitée", desc: "Vous participez aux REX qui vous concernent directement et vous appliquez les recommandations dans votre périmètre. Mais participer à des REX qui ne vous impliquent pas directement, questionner des conclusions qui semblent incomplètes, vérifier le suivi des mesures correctives : votre rôle actif dans le système d'apprentissage reste encore limité." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement aux REX, vous questionnez les conclusions incomplètes et vous vérifiez le suivi des mesures", desc: "Vous participez aux REX au-delà de votre périmètre direct, vous formulez des observations quand les conclusions vous semblent incomplètes, vous vérifiez que les mesures correctives ont été appliquées, vous remontez les informations de sécurité venant de l'extérieur. Cette contribution active au système d'apprentissage est ce qui transforme les incidents en améliorations réelles." },
        },
      }, 
      {
        type: "likert",
        text: "Vous lisez les REX et les comptes rendus d'incidents — y compris ceux qui ne vous concernent pas directement — pour en tirer des enseignements pour votre propre pratique.",
        tags: ["REX", "apprentissage"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les REX sont des exercices formels pour vous, pas encore de vrais outils d'apprentissage", desc: "Ne lire que les REX obligatoires, ne pas prendre la parole quand les conclusions semblent incomplètes, ne pas vérifier si les mesures correctives ont été appliquées : le REX n'est utile que si les personnes qui connaissent le terrain y contribuent activement et vérifient que ses conclusions se traduisent en pratiques." },
          moyen: { label: "Pratiques en développement", titre: "Vous participez aux REX et en tirez des enseignements, mais votre contribution active reste limitée", desc: "Vous participez aux REX qui vous concernent directement et vous appliquez les recommandations dans votre périmètre. Mais participer à des REX qui ne vous impliquent pas directement, questionner des conclusions qui semblent incomplètes, vérifier le suivi des mesures correctives : votre rôle actif dans le système d'apprentissage reste encore limité." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement aux REX, vous questionnez les conclusions incomplètes et vous vérifiez le suivi des mesures", desc: "Vous participez aux REX au-delà de votre périmètre direct, vous formulez des observations quand les conclusions vous semblent incomplètes, vous vérifiez que les mesures correctives ont été appliquées, vous remontez les informations de sécurité venant de l'extérieur. Cette contribution active au système d'apprentissage est ce qui transforme les incidents en améliorations réelles." },
        },
      }, 
      {
        type: "choix",
        text: "Lors d'un REX, il apparaît que votre façon de réaliser l'opération concernée n'est pas conforme à la procédure. La question vous est posée directement.",
        tags: ["REX", "honnêteté"],
        answers: [
          { text: "Je dis que je respecte la procédure — ce n'est pas le moment de me mettre en difficulté.", score: 0 },
          { text: "Je décris ma pratique réelle, même si elle s'écarte de la procédure.", score: 2 },
          { text: "Je réponds de façon vague pour ne ni mentir ni m'exposer.", score: 0 },
          { text: "Je dis que j'ai parfois des adaptations mais sans entrer dans les détails.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les REX sont des exercices formels pour vous, pas encore de vrais outils d'apprentissage", desc: "Ne lire que les REX obligatoires, ne pas prendre la parole quand les conclusions semblent incomplètes, ne pas vérifier si les mesures correctives ont été appliquées : le REX n'est utile que si les personnes qui connaissent le terrain y contribuent activement et vérifient que ses conclusions se traduisent en pratiques." },
          moyen: { label: "Pratiques en développement", titre: "Vous participez aux REX et en tirez des enseignements, mais votre contribution active reste limitée", desc: "Vous participez aux REX qui vous concernent directement et vous appliquez les recommandations dans votre périmètre. Mais participer à des REX qui ne vous impliquent pas directement, questionner des conclusions qui semblent incomplètes, vérifier le suivi des mesures correctives : votre rôle actif dans le système d'apprentissage reste encore limité." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement aux REX, vous questionnez les conclusions incomplètes et vous vérifiez le suivi des mesures", desc: "Vous participez aux REX au-delà de votre périmètre direct, vous formulez des observations quand les conclusions vous semblent incomplètes, vous vérifiez que les mesures correctives ont été appliquées, vous remontez les informations de sécurité venant de l'extérieur. Cette contribution active au système d'apprentissage est ce qui transforme les incidents en améliorations réelles." },
        },
      }, 
      {
        type: "choix",
        text: "Un REX sur un incident survenu dans une autre entreprise de votre secteur est diffusé dans votre organisation. Votre responsable ne le mentionne pas en réunion d'équipe.",
        tags: ["REX", "tiers"],
        answers: [
          { text: "Je le lis pour moi mais je ne le mets pas sur la table — si mon chef n'en parle pas, c'est qu'il n'est pas pertinent.", score: 0 },
          { text: "Je le lis et je propose qu'on en discute en équipe en faisant le lien avec nos pratiques.", score: 2 },
          { text: "Je le partage avec mes collègues par message pour qu'ils le lisent.", score: 1 },
          { text: "J'en parle à mon chef pour savoir s'il en est informé.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les REX sont des exercices formels pour vous, pas encore de vrais outils d'apprentissage", desc: "Ne lire que les REX obligatoires, ne pas prendre la parole quand les conclusions semblent incomplètes, ne pas vérifier si les mesures correctives ont été appliquées : le REX n'est utile que si les personnes qui connaissent le terrain y contribuent activement et vérifient que ses conclusions se traduisent en pratiques." },
          moyen: { label: "Pratiques en développement", titre: "Vous participez aux REX et en tirez des enseignements, mais votre contribution active reste limitée", desc: "Vous participez aux REX qui vous concernent directement et vous appliquez les recommandations dans votre périmètre. Mais participer à des REX qui ne vous impliquent pas directement, questionner des conclusions qui semblent incomplètes, vérifier le suivi des mesures correctives : votre rôle actif dans le système d'apprentissage reste encore limité." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement aux REX, vous questionnez les conclusions incomplètes et vous vérifiez le suivi des mesures", desc: "Vous participez aux REX au-delà de votre périmètre direct, vous formulez des observations quand les conclusions vous semblent incomplètes, vous vérifiez que les mesures correctives ont été appliquées, vous remontez les informations de sécurité venant de l'extérieur. Cette contribution active au système d'apprentissage est ce qui transforme les incidents en améliorations réelles." },
        },
      }, 
      {
        type: "likert",
        text: "Quand un REX identifie une cause ou une pratique à améliorer qui concerne votre poste, vous ajustez concrètement votre façon de travailler.",
        tags: ["REX", "application"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les REX sont des exercices formels pour vous, pas encore de vrais outils d'apprentissage", desc: "Ne lire que les REX obligatoires, ne pas prendre la parole quand les conclusions semblent incomplètes, ne pas vérifier si les mesures correctives ont été appliquées : le REX n'est utile que si les personnes qui connaissent le terrain y contribuent activement et vérifient que ses conclusions se traduisent en pratiques." },
          moyen: { label: "Pratiques en développement", titre: "Vous participez aux REX et en tirez des enseignements, mais votre contribution active reste limitée", desc: "Vous participez aux REX qui vous concernent directement et vous appliquez les recommandations dans votre périmètre. Mais participer à des REX qui ne vous impliquent pas directement, questionner des conclusions qui semblent incomplètes, vérifier le suivi des mesures correctives : votre rôle actif dans le système d'apprentissage reste encore limité." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement aux REX, vous questionnez les conclusions incomplètes et vous vérifiez le suivi des mesures", desc: "Vous participez aux REX au-delà de votre périmètre direct, vous formulez des observations quand les conclusions vous semblent incomplètes, vous vérifiez que les mesures correctives ont été appliquées, vous remontez les informations de sécurité venant de l'extérieur. Cette contribution active au système d'apprentissage est ce qui transforme les incidents en améliorations réelles." },
        },
      }, 
      {
        type: "choix",
        text: "Les conclusions d'un REX sur un incident récent vous semblent incomplètes — vous pensez que la cause profonde n'a pas été identifiée.",
        tags: ["REX", "conclusions"],
        answers: [
          { text: "Je fais confiance aux experts qui ont conduit le REX.", score: 0 },
          { text: "Je formule mes observations et je les soumets aux responsables du REX.", score: 2 },
          { text: "J'en parle à mes collègues mais sans remettre formellement en cause les conclusions.", score: 1 },
          { text: "J'attends de voir si un incident similaire se reproduit pour valider mon hypothèse.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les REX sont des exercices formels pour vous, pas encore de vrais outils d'apprentissage", desc: "Ne lire que les REX obligatoires, ne pas prendre la parole quand les conclusions semblent incomplètes, ne pas vérifier si les mesures correctives ont été appliquées : le REX n'est utile que si les personnes qui connaissent le terrain y contribuent activement et vérifient que ses conclusions se traduisent en pratiques." },
          moyen: { label: "Pratiques en développement", titre: "Vous participez aux REX et en tirez des enseignements, mais votre contribution active reste limitée", desc: "Vous participez aux REX qui vous concernent directement et vous appliquez les recommandations dans votre périmètre. Mais participer à des REX qui ne vous impliquent pas directement, questionner des conclusions qui semblent incomplètes, vérifier le suivi des mesures correctives : votre rôle actif dans le système d'apprentissage reste encore limité." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement aux REX, vous questionnez les conclusions incomplètes et vous vérifiez le suivi des mesures", desc: "Vous participez aux REX au-delà de votre périmètre direct, vous formulez des observations quand les conclusions vous semblent incomplètes, vous vérifiez que les mesures correctives ont été appliquées, vous remontez les informations de sécurité venant de l'extérieur. Cette contribution active au système d'apprentissage est ce qui transforme les incidents en améliorations réelles." },
        },
      }, 
      {
        type: "choix",
        text: "Suite à un REX, une mesure corrective a été décidée mais elle n'est pas encore mise en place deux mois après. La situation à risque identifiée est toujours présente.",
        tags: ["REX", "mesures correctives"],
        answers: [
          { text: "J'attends — la mise en place prend du temps et ce n'est pas de ma responsabilité.", score: 0 },
          { text: "Je le signale à mon responsable en m'appuyant sur le REX et la décision prise.", score: 2 },
          { text: "Je prends des mesures compensatoires à mon niveau en attendant.", score: 1 },
          { text: "J'en parle aux collègues pour qu'on soit tous vigilants en attendant la correction.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les REX sont des exercices formels pour vous, pas encore de vrais outils d'apprentissage", desc: "Ne lire que les REX obligatoires, ne pas prendre la parole quand les conclusions semblent incomplètes, ne pas vérifier si les mesures correctives ont été appliquées : le REX n'est utile que si les personnes qui connaissent le terrain y contribuent activement et vérifient que ses conclusions se traduisent en pratiques." },
          moyen: { label: "Pratiques en développement", titre: "Vous participez aux REX et en tirez des enseignements, mais votre contribution active reste limitée", desc: "Vous participez aux REX qui vous concernent directement et vous appliquez les recommandations dans votre périmètre. Mais participer à des REX qui ne vous impliquent pas directement, questionner des conclusions qui semblent incomplètes, vérifier le suivi des mesures correctives : votre rôle actif dans le système d'apprentissage reste encore limité." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement aux REX, vous questionnez les conclusions incomplètes et vous vérifiez le suivi des mesures", desc: "Vous participez aux REX au-delà de votre périmètre direct, vous formulez des observations quand les conclusions vous semblent incomplètes, vous vérifiez que les mesures correctives ont été appliquées, vous remontez les informations de sécurité venant de l'extérieur. Cette contribution active au système d'apprentissage est ce qui transforme les incidents en améliorations réelles." },
        },
      }, 
      {
        type: "choix",
        text: "Vous revenez d'une formation où un incident grave survenu dans une entreprise similaire a été présenté. Les causes ressemblent à des pratiques que vous observez chez vous.",
        tags: ["REX", "transfert"],
        answers: [
          { text: "Je reste vigilant pour moi mais je ne remonte pas l'information — un cas isolé ne prouve rien.", score: 0 },
          { text: "Je partage l'information avec mon responsable et je propose qu'on regarde si les causes s'appliquent à notre contexte.", score: 2 },
          { text: "J'en parle à mes collègues lors du prochain briefing.", score: 1 },
          { text: "J'attends que quelqu'un d'autre fasse le lien officiellement.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les REX sont des exercices formels pour vous, pas encore de vrais outils d'apprentissage", desc: "Ne lire que les REX obligatoires, ne pas prendre la parole quand les conclusions semblent incomplètes, ne pas vérifier si les mesures correctives ont été appliquées : le REX n'est utile que si les personnes qui connaissent le terrain y contribuent activement et vérifient que ses conclusions se traduisent en pratiques." },
          moyen: { label: "Pratiques en développement", titre: "Vous participez aux REX et en tirez des enseignements, mais votre contribution active reste limitée", desc: "Vous participez aux REX qui vous concernent directement et vous appliquez les recommandations dans votre périmètre. Mais participer à des REX qui ne vous impliquent pas directement, questionner des conclusions qui semblent incomplètes, vérifier le suivi des mesures correctives : votre rôle actif dans le système d'apprentissage reste encore limité." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement aux REX, vous questionnez les conclusions incomplètes et vous vérifiez le suivi des mesures", desc: "Vous participez aux REX au-delà de votre périmètre direct, vous formulez des observations quand les conclusions vous semblent incomplètes, vous vérifiez que les mesures correctives ont été appliquées, vous remontez les informations de sécurité venant de l'extérieur. Cette contribution active au système d'apprentissage est ce qui transforme les incidents en améliorations réelles." },
        },
      }, 
      {
        type: "likert",
        text: "Vous remontez les informations de sécurité venant de l'extérieur — formations, REX d'autres entreprises, incidents sectoriels — sans attendre qu'on vous le demande.",
        tags: ["REX", "proactivité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les REX sont des exercices formels pour vous, pas encore de vrais outils d'apprentissage", desc: "Ne lire que les REX obligatoires, ne pas prendre la parole quand les conclusions semblent incomplètes, ne pas vérifier si les mesures correctives ont été appliquées : le REX n'est utile que si les personnes qui connaissent le terrain y contribuent activement et vérifient que ses conclusions se traduisent en pratiques." },
          moyen: { label: "Pratiques en développement", titre: "Vous participez aux REX et en tirez des enseignements, mais votre contribution active reste limitée", desc: "Vous participez aux REX qui vous concernent directement et vous appliquez les recommandations dans votre périmètre. Mais participer à des REX qui ne vous impliquent pas directement, questionner des conclusions qui semblent incomplètes, vérifier le suivi des mesures correctives : votre rôle actif dans le système d'apprentissage reste encore limité." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement aux REX, vous questionnez les conclusions incomplètes et vous vérifiez le suivi des mesures", desc: "Vous participez aux REX au-delà de votre périmètre direct, vous formulez des observations quand les conclusions vous semblent incomplètes, vous vérifiez que les mesures correctives ont été appliquées, vous remontez les informations de sécurité venant de l'extérieur. Cette contribution active au système d'apprentissage est ce qui transforme les incidents en améliorations réelles." },
        },
      }, 
      {
        type: "choix",
        text: "Un REX auquel vous avez participé a produit des recommandations. Six mois plus tard, vous ne savez pas si elles ont été appliquées.",
        tags: ["REX", "suivi"],
        answers: [
          { text: "Je fais confiance à l'organisation pour suivre les recommandations.", score: 0 },
          { text: "Je demande un retour sur l'avancement des recommandations qui me concernent.", score: 2 },
          { text: "Je vérifie dans mon périmètre si ce qui me concernait a bien été mis en place.", score: 1.5 },
          { text: "Je relance si je constate que la situation à risque est toujours présente.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les REX sont des exercices formels pour vous, pas encore de vrais outils d'apprentissage", desc: "Ne lire que les REX obligatoires, ne pas prendre la parole quand les conclusions semblent incomplètes, ne pas vérifier si les mesures correctives ont été appliquées : le REX n'est utile que si les personnes qui connaissent le terrain y contribuent activement et vérifient que ses conclusions se traduisent en pratiques." },
          moyen: { label: "Pratiques en développement", titre: "Vous participez aux REX et en tirez des enseignements, mais votre contribution active reste limitée", desc: "Vous participez aux REX qui vous concernent directement et vous appliquez les recommandations dans votre périmètre. Mais participer à des REX qui ne vous impliquent pas directement, questionner des conclusions qui semblent incomplètes, vérifier le suivi des mesures correctives : votre rôle actif dans le système d'apprentissage reste encore limité." },
          haut: { label: "Réflexes installés", titre: "Vous contribuez activement aux REX, vous questionnez les conclusions incomplètes et vous vérifiez le suivi des mesures", desc: "Vous participez aux REX au-delà de votre périmètre direct, vous formulez des observations quand les conclusions vous semblent incomplètes, vous vérifiez que les mesures correctives ont été appliquées, vous remontez les informations de sécurité venant de l'extérieur. Cette contribution active au système d'apprentissage est ce qui transforme les incidents en améliorations réelles." },
        },
      }
    ],

  },
  // ─────────────────────────────────────────────────────────────────────
    // ─── À coller dans catalogue-securite.js ──────────────────────────────
  // Clé : "acces-sites-surete"

  "acces-sites-surete": {
    0: [
      {
        type: "choix",
        text: "Un livreur se présente à l'accueil avec un colis urgent. Il n'a pas de badge visiteur et dit qu'il est déjà venu plusieurs fois. La réceptionniste est absente ce matin.",
        tags: ["accès", "contrôle"],
        answers: [
          { text: "Je le laisse déposer le colis dans le hall — il connaît le site et c'est urgent.", score: 0 },
          { text: "Je lui demande d'attendre et je contacte quelqu'un d'habilité à valider son accès.", score: 2 },
          { text: "Je l'accompagne moi-même jusqu'au bureau concerné pour éviter qu'il circule seul.", score: 1.5 },
          { text: "Je prends le colis et je le dépose à sa place pour qu'il n'entre pas.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous adaptez encore le contrôle des accès selon votre relation avec la personne ou l'urgence présentée", desc: "Faire entrer un collègue sans badge parce qu'on le connaît, laisser un prestataire circuler seul parce qu'il a un bon de commande, ouvrir une porte sur insistance parce que c'est urgent : ces comportements créent des failles réelles dans des dispositifs de contrôle qui ne valent que si tout le monde les applique sans exception. La familiarité avec une personne ne remplace pas une habilitation valide." },
          moyen: { label: "Pratiques en développement", titre: "Vous contrôlez les accès correctement dans la plupart des situations mais vous cédez encore sous pression relationnelle", desc: "Vous appliquez les procédures de contrôle d'accès dans les situations ordinaires. Mais face à un collègue proche qui a oublié son badge, un prestataire qui insiste sur l'urgence, ou une demande qui vient de quelqu'un de confiance : votre rigueur peut encore s'adapter. L'enjeu est d'appliquer la même procédure indépendamment de la relation ou de l'urgence présentée." },
          haut: { label: "Réflexes installés", titre: "Vous contrôlez les accès sans exception, quelle que soit votre relation avec la personne ou l'urgence invoquée", desc: "Vous orientez vers l'accueil le collègue qui a oublié son badge, même s'il est de confiance. Vous refusez l'accès au prestataire non escorté, même si son intervention est urgente. Vous ne franchissez pas une zone sans raison professionnelle, même si votre habilitation le permet. Cette rigueur sans exception est la seule façon de maintenir un dispositif de contrôle d'accès réellement efficace." },
        },
      }, 
      {
        type: "choix",
        text: "En arrivant au bureau, vous croisez une personne qui franchit le portique derrière vous sans badger — elle profite de votre passage pour entrer. Vous ne la reconnaissez pas.",
        tags: ["accès", "badge"],
        answers: [
          { text: "Je laisse passer — elle a peut-être oublié son badge et travaille sûrement ici.", score: 0 },
          { text: "Je lui demande si elle a son badge et je l'oriente vers l'accueil si elle n'en a pas.", score: 2 },
          { text: "Je la regarde mais je ne dis rien — ce n'est pas mon rôle de contrôler les accès.", score: 0 },
          { text: "J'en parle à la sécurité après coup en décrivant la personne.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous adaptez encore le contrôle des accès selon votre relation avec la personne ou l'urgence présentée", desc: "Faire entrer un collègue sans badge parce qu'on le connaît, laisser un prestataire circuler seul parce qu'il a un bon de commande, ouvrir une porte sur insistance parce que c'est urgent : ces comportements créent des failles réelles dans des dispositifs de contrôle qui ne valent que si tout le monde les applique sans exception. La familiarité avec une personne ne remplace pas une habilitation valide." },
          moyen: { label: "Pratiques en développement", titre: "Vous contrôlez les accès correctement dans la plupart des situations mais vous cédez encore sous pression relationnelle", desc: "Vous appliquez les procédures de contrôle d'accès dans les situations ordinaires. Mais face à un collègue proche qui a oublié son badge, un prestataire qui insiste sur l'urgence, ou une demande qui vient de quelqu'un de confiance : votre rigueur peut encore s'adapter. L'enjeu est d'appliquer la même procédure indépendamment de la relation ou de l'urgence présentée." },
          haut: { label: "Réflexes installés", titre: "Vous contrôlez les accès sans exception, quelle que soit votre relation avec la personne ou l'urgence invoquée", desc: "Vous orientez vers l'accueil le collègue qui a oublié son badge, même s'il est de confiance. Vous refusez l'accès au prestataire non escorté, même si son intervention est urgente. Vous ne franchissez pas une zone sans raison professionnelle, même si votre habilitation le permet. Cette rigueur sans exception est la seule façon de maintenir un dispositif de contrôle d'accès réellement efficace." },
        },
      }, 
      {
        type: "likert",
        text: "Vous interpellez les personnes que vous ne reconnaissez pas et qui semblent circuler sans être accompagnées dans les zones à accès restreint.",
        tags: ["accès", "vigilance"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous adaptez encore le contrôle des accès selon votre relation avec la personne ou l'urgence présentée", desc: "Faire entrer un collègue sans badge parce qu'on le connaît, laisser un prestataire circuler seul parce qu'il a un bon de commande, ouvrir une porte sur insistance parce que c'est urgent : ces comportements créent des failles réelles dans des dispositifs de contrôle qui ne valent que si tout le monde les applique sans exception. La familiarité avec une personne ne remplace pas une habilitation valide." },
          moyen: { label: "Pratiques en développement", titre: "Vous contrôlez les accès correctement dans la plupart des situations mais vous cédez encore sous pression relationnelle", desc: "Vous appliquez les procédures de contrôle d'accès dans les situations ordinaires. Mais face à un collègue proche qui a oublié son badge, un prestataire qui insiste sur l'urgence, ou une demande qui vient de quelqu'un de confiance : votre rigueur peut encore s'adapter. L'enjeu est d'appliquer la même procédure indépendamment de la relation ou de l'urgence présentée." },
          haut: { label: "Réflexes installés", titre: "Vous contrôlez les accès sans exception, quelle que soit votre relation avec la personne ou l'urgence invoquée", desc: "Vous orientez vers l'accueil le collègue qui a oublié son badge, même s'il est de confiance. Vous refusez l'accès au prestataire non escorté, même si son intervention est urgente. Vous ne franchissez pas une zone sans raison professionnelle, même si votre habilitation le permet. Cette rigueur sans exception est la seule façon de maintenir un dispositif de contrôle d'accès réellement efficace." },
        },
      }, 
      {
        type: "choix",
        text: "Un technicien de maintenance se présente pour une intervention planifiée. Il a un bon de commande mais pas de badge visiteur ni d'escorte. Son intervention est urgente selon lui.",
        tags: ["accès", "prestataire"],
        answers: [
          { text: "Je le laisse intervenir — il a un bon de commande, son intervention est planifiée.", score: 0 },
          { text: "Je contacte le service qui a commandé l'intervention pour qu'il envoie quelqu'un l'escorter.", score: 2 },
          { text: "Je l'accompagne moi-même jusqu'à la zone d'intervention.", score: 1.5 },
          { text: "Je lui donne un badge visiteur temporaire et je lui explique où aller.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous adaptez encore le contrôle des accès selon votre relation avec la personne ou l'urgence présentée", desc: "Faire entrer un collègue sans badge parce qu'on le connaît, laisser un prestataire circuler seul parce qu'il a un bon de commande, ouvrir une porte sur insistance parce que c'est urgent : ces comportements créent des failles réelles dans des dispositifs de contrôle qui ne valent que si tout le monde les applique sans exception. La familiarité avec une personne ne remplace pas une habilitation valide." },
          moyen: { label: "Pratiques en développement", titre: "Vous contrôlez les accès correctement dans la plupart des situations mais vous cédez encore sous pression relationnelle", desc: "Vous appliquez les procédures de contrôle d'accès dans les situations ordinaires. Mais face à un collègue proche qui a oublié son badge, un prestataire qui insiste sur l'urgence, ou une demande qui vient de quelqu'un de confiance : votre rigueur peut encore s'adapter. L'enjeu est d'appliquer la même procédure indépendamment de la relation ou de l'urgence présentée." },
          haut: { label: "Réflexes installés", titre: "Vous contrôlez les accès sans exception, quelle que soit votre relation avec la personne ou l'urgence invoquée", desc: "Vous orientez vers l'accueil le collègue qui a oublié son badge, même s'il est de confiance. Vous refusez l'accès au prestataire non escorté, même si son intervention est urgente. Vous ne franchissez pas une zone sans raison professionnelle, même si votre habilitation le permet. Cette rigueur sans exception est la seule façon de maintenir un dispositif de contrôle d'accès réellement efficace." },
        },
      }, 
      {
        type: "choix",
        text: "Votre collègue Sarah a oublié son badge. Elle vous demande de la faire entrer avec le vôtre. C'est une personne de confiance que vous côtoyez depuis deux ans.",
        tags: ["accès", "collègue"],
        answers: [
          { text: "Je la fais entrer — elle travaille ici et c'est juste un oubli.", score: 0 },
          { text: "Je lui dis d'aller à l'accueil pour qu'on lui délivre un badge provisoire.", score: 2 },
          { text: "Je l'accompagne jusqu'à son bureau et je préviens la sécurité.", score: 1 },
          { text: "Je refuse mais je l'aide à contacter rapidement quelqu'un qui peut régler la situation.", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous adaptez encore le contrôle des accès selon votre relation avec la personne ou l'urgence présentée", desc: "Faire entrer un collègue sans badge parce qu'on le connaît, laisser un prestataire circuler seul parce qu'il a un bon de commande, ouvrir une porte sur insistance parce que c'est urgent : ces comportements créent des failles réelles dans des dispositifs de contrôle qui ne valent que si tout le monde les applique sans exception. La familiarité avec une personne ne remplace pas une habilitation valide." },
          moyen: { label: "Pratiques en développement", titre: "Vous contrôlez les accès correctement dans la plupart des situations mais vous cédez encore sous pression relationnelle", desc: "Vous appliquez les procédures de contrôle d'accès dans les situations ordinaires. Mais face à un collègue proche qui a oublié son badge, un prestataire qui insiste sur l'urgence, ou une demande qui vient de quelqu'un de confiance : votre rigueur peut encore s'adapter. L'enjeu est d'appliquer la même procédure indépendamment de la relation ou de l'urgence présentée." },
          haut: { label: "Réflexes installés", titre: "Vous contrôlez les accès sans exception, quelle que soit votre relation avec la personne ou l'urgence invoquée", desc: "Vous orientez vers l'accueil le collègue qui a oublié son badge, même s'il est de confiance. Vous refusez l'accès au prestataire non escorté, même si son intervention est urgente. Vous ne franchissez pas une zone sans raison professionnelle, même si votre habilitation le permet. Cette rigueur sans exception est la seule façon de maintenir un dispositif de contrôle d'accès réellement efficace." },
        },
      }, 
      {
        type: "likert",
        text: "Vous refusez de faire entrer quelqu'un sans badge valide, quelle que soit votre relation avec cette personne et quelle que soit l'urgence présentée.",
        tags: ["accès", "procédure"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous adaptez encore le contrôle des accès selon votre relation avec la personne ou l'urgence présentée", desc: "Faire entrer un collègue sans badge parce qu'on le connaît, laisser un prestataire circuler seul parce qu'il a un bon de commande, ouvrir une porte sur insistance parce que c'est urgent : ces comportements créent des failles réelles dans des dispositifs de contrôle qui ne valent que si tout le monde les applique sans exception. La familiarité avec une personne ne remplace pas une habilitation valide." },
          moyen: { label: "Pratiques en développement", titre: "Vous contrôlez les accès correctement dans la plupart des situations mais vous cédez encore sous pression relationnelle", desc: "Vous appliquez les procédures de contrôle d'accès dans les situations ordinaires. Mais face à un collègue proche qui a oublié son badge, un prestataire qui insiste sur l'urgence, ou une demande qui vient de quelqu'un de confiance : votre rigueur peut encore s'adapter. L'enjeu est d'appliquer la même procédure indépendamment de la relation ou de l'urgence présentée." },
          haut: { label: "Réflexes installés", titre: "Vous contrôlez les accès sans exception, quelle que soit votre relation avec la personne ou l'urgence invoquée", desc: "Vous orientez vers l'accueil le collègue qui a oublié son badge, même s'il est de confiance. Vous refusez l'accès au prestataire non escorté, même si son intervention est urgente. Vous ne franchissez pas une zone sans raison professionnelle, même si votre habilitation le permet. Cette rigueur sans exception est la seule façon de maintenir un dispositif de contrôle d'accès réellement efficace." },
        },
      }, 
      {
        type: "choix",
        text: "Vous travaillez près d'une zone à accès restreint. Vous remarquez qu'une porte de cette zone est entrouverte depuis plusieurs minutes et que personne n'est en vue.",
        tags: ["accès", "zone sensible"],
        answers: [
          { text: "Je la ferme moi-même — c'est probablement un oubli de quelqu'un.", score: 0.5 },
          { text: "Je contacte la sécurité sans toucher à la porte.", score: 2 },
          { text: "J'attends encore quelques minutes pour voir si quelqu'un sort.", score: 0 },
          { text: "Je passe la tête pour vérifier qu'il n'y a personne à l'intérieur avant de fermer.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous adaptez encore le contrôle des accès selon votre relation avec la personne ou l'urgence présentée", desc: "Faire entrer un collègue sans badge parce qu'on le connaît, laisser un prestataire circuler seul parce qu'il a un bon de commande, ouvrir une porte sur insistance parce que c'est urgent : ces comportements créent des failles réelles dans des dispositifs de contrôle qui ne valent que si tout le monde les applique sans exception. La familiarité avec une personne ne remplace pas une habilitation valide." },
          moyen: { label: "Pratiques en développement", titre: "Vous contrôlez les accès correctement dans la plupart des situations mais vous cédez encore sous pression relationnelle", desc: "Vous appliquez les procédures de contrôle d'accès dans les situations ordinaires. Mais face à un collègue proche qui a oublié son badge, un prestataire qui insiste sur l'urgence, ou une demande qui vient de quelqu'un de confiance : votre rigueur peut encore s'adapter. L'enjeu est d'appliquer la même procédure indépendamment de la relation ou de l'urgence présentée." },
          haut: { label: "Réflexes installés", titre: "Vous contrôlez les accès sans exception, quelle que soit votre relation avec la personne ou l'urgence invoquée", desc: "Vous orientez vers l'accueil le collègue qui a oublié son badge, même s'il est de confiance. Vous refusez l'accès au prestataire non escorté, même si son intervention est urgente. Vous ne franchissez pas une zone sans raison professionnelle, même si votre habilitation le permet. Cette rigueur sans exception est la seule façon de maintenir un dispositif de contrôle d'accès réellement efficace." },
        },
      }, 
      {
        type: "choix",
        text: "Vous accompagnez un visiteur client dans vos locaux. En chemin, il vous pose des questions sur le nombre de personnes qui travaillent ici et sur l'organisation des équipes.",
        tags: ["accès", "visiteur"],
        answers: [
          { text: "Je réponds naturellement — c'est un client et ces informations ne sont pas secrètes.", score: 0 },
          { text: "Je réponds sur les aspects généraux et je dévie les questions qui me semblent trop précises.", score: 2 },
          { text: "Je lui dis que je préfère qu'il pose ces questions à notre responsable commercial.", score: 1.5 },
          { text: "Je note mentalement ces questions pour en parler à la sécurité après.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous adaptez encore le contrôle des accès selon votre relation avec la personne ou l'urgence présentée", desc: "Faire entrer un collègue sans badge parce qu'on le connaît, laisser un prestataire circuler seul parce qu'il a un bon de commande, ouvrir une porte sur insistance parce que c'est urgent : ces comportements créent des failles réelles dans des dispositifs de contrôle qui ne valent que si tout le monde les applique sans exception. La familiarité avec une personne ne remplace pas une habilitation valide." },
          moyen: { label: "Pratiques en développement", titre: "Vous contrôlez les accès correctement dans la plupart des situations mais vous cédez encore sous pression relationnelle", desc: "Vous appliquez les procédures de contrôle d'accès dans les situations ordinaires. Mais face à un collègue proche qui a oublié son badge, un prestataire qui insiste sur l'urgence, ou une demande qui vient de quelqu'un de confiance : votre rigueur peut encore s'adapter. L'enjeu est d'appliquer la même procédure indépendamment de la relation ou de l'urgence présentée." },
          haut: { label: "Réflexes installés", titre: "Vous contrôlez les accès sans exception, quelle que soit votre relation avec la personne ou l'urgence invoquée", desc: "Vous orientez vers l'accueil le collègue qui a oublié son badge, même s'il est de confiance. Vous refusez l'accès au prestataire non escorté, même si son intervention est urgente. Vous ne franchissez pas une zone sans raison professionnelle, même si votre habilitation le permet. Cette rigueur sans exception est la seule façon de maintenir un dispositif de contrôle d'accès réellement efficace." },
        },
      }, 
      {
        type: "likert",
        text: "Vous faites attention aux informations sur l'organisation et les effectifs que vous partagez avec des personnes extérieures, même dans un contexte commercial.",
        tags: ["accès", "information"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous adaptez encore le contrôle des accès selon votre relation avec la personne ou l'urgence présentée", desc: "Faire entrer un collègue sans badge parce qu'on le connaît, laisser un prestataire circuler seul parce qu'il a un bon de commande, ouvrir une porte sur insistance parce que c'est urgent : ces comportements créent des failles réelles dans des dispositifs de contrôle qui ne valent que si tout le monde les applique sans exception. La familiarité avec une personne ne remplace pas une habilitation valide." },
          moyen: { label: "Pratiques en développement", titre: "Vous contrôlez les accès correctement dans la plupart des situations mais vous cédez encore sous pression relationnelle", desc: "Vous appliquez les procédures de contrôle d'accès dans les situations ordinaires. Mais face à un collègue proche qui a oublié son badge, un prestataire qui insiste sur l'urgence, ou une demande qui vient de quelqu'un de confiance : votre rigueur peut encore s'adapter. L'enjeu est d'appliquer la même procédure indépendamment de la relation ou de l'urgence présentée." },
          haut: { label: "Réflexes installés", titre: "Vous contrôlez les accès sans exception, quelle que soit votre relation avec la personne ou l'urgence invoquée", desc: "Vous orientez vers l'accueil le collègue qui a oublié son badge, même s'il est de confiance. Vous refusez l'accès au prestataire non escorté, même si son intervention est urgente. Vous ne franchissez pas une zone sans raison professionnelle, même si votre habilitation le permet. Cette rigueur sans exception est la seule façon de maintenir un dispositif de contrôle d'accès réellement efficace." },
        },
      }, 
      {
        type: "choix",
        text: "Vous êtes en astreinte de nuit. Un individu sonne à l'interphone en disant qu'il est technicien et qu'il a une urgence à traiter. Il n'est pas sur la liste des prestataires autorisés.",
        tags: ["accès", "nuit"],
        answers: [
          { text: "Je le laisse entrer — une urgence technique de nuit ne peut pas attendre la vérification.", score: 0 },
          { text: "Je refuse l'accès et je contacte mon responsable d'astreinte pour signaler la situation.", score: 2 },
          { text: "Je lui demande ses coordonnées et je rappelle l'entreprise qu'il prétend représenter avant d'ouvrir.", score: 2 },
          { text: "Je le laisse entrer en le surveillant de près.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous adaptez encore le contrôle des accès selon votre relation avec la personne ou l'urgence présentée", desc: "Faire entrer un collègue sans badge parce qu'on le connaît, laisser un prestataire circuler seul parce qu'il a un bon de commande, ouvrir une porte sur insistance parce que c'est urgent : ces comportements créent des failles réelles dans des dispositifs de contrôle qui ne valent que si tout le monde les applique sans exception. La familiarité avec une personne ne remplace pas une habilitation valide." },
          moyen: { label: "Pratiques en développement", titre: "Vous contrôlez les accès correctement dans la plupart des situations mais vous cédez encore sous pression relationnelle", desc: "Vous appliquez les procédures de contrôle d'accès dans les situations ordinaires. Mais face à un collègue proche qui a oublié son badge, un prestataire qui insiste sur l'urgence, ou une demande qui vient de quelqu'un de confiance : votre rigueur peut encore s'adapter. L'enjeu est d'appliquer la même procédure indépendamment de la relation ou de l'urgence présentée." },
          haut: { label: "Réflexes installés", titre: "Vous contrôlez les accès sans exception, quelle que soit votre relation avec la personne ou l'urgence invoquée", desc: "Vous orientez vers l'accueil le collègue qui a oublié son badge, même s'il est de confiance. Vous refusez l'accès au prestataire non escorté, même si son intervention est urgente. Vous ne franchissez pas une zone sans raison professionnelle, même si votre habilitation le permet. Cette rigueur sans exception est la seule façon de maintenir un dispositif de contrôle d'accès réellement efficace." },
        },
      }
    ],

    1: [
      {
        type: "choix",
        text: "En passant dans un couloir, vous croisez quelqu'un qui photographie les équipements avec son téléphone. Il a un badge visiteur mais la zone n'est pas une zone de visite habituelle.",
        tags: ["comportement", "signalement"],
        answers: [
          { text: "Je laisse passer — il a un badge visiteur, il est donc autorisé à être là.", score: 0 },
          { text: "Je l'interpelle poliment pour lui demander l'objet de sa visite et je contacte la sécurité.", score: 2 },
          { text: "Je contacte discrètement la sécurité sans l'interpeller.", score: 1.5 },
          { text: "Je note sa description et j'en parle à la fin de ma journée.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous remarquez les comportements inhabituels mais vous hésitez encore à les signaler", desc: "Ne pas interpeller quelqu'un qui photographie les équipements parce qu'il a un badge, ne pas signaler un véhicule inconnu parce que 'ça fait partie du décor', attendre qu'un comportement se répète avant de réagir : le signalement tardif ou absent est la première cause d'échec des dispositifs de sûreté. L'enjeu est d'agir sur le premier signal, pas sur la confirmation." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les comportements clairement anormaux, les signaux plus subtils vous échappent encore", desc: "Vous réagissez quand les comportements sont clairement problématiques. Mais les signaux plus ambigus — quelqu'un qui pose des questions précises sur le dispositif de sécurité, un véhicule inconnu depuis quelques jours, un collègue qui se comporte différemment — ne déclenchent pas encore systématiquement un signalement. L'enjeu est d'abaisser votre seuil d'alerte sur ces situations intermédiaires." },
          haut: { label: "Réflexes installés", titre: "Vous signalez immédiatement tout comportement qui vous interpelle, même en cas de doute sur sa gravité", desc: "Vous interpellez immédiatement la personne qui photographie, vous signalez le véhicule inconnu dès le premier jour, vous remontez le comportement inhabituel d'un collègue en décrivant les faits. Vous signalez même quand vous n'êtes pas certain·e de la gravité. Cette réactivité sur le premier signal est ce qui permet aux équipes de sûreté de traiter les situations avant qu'elles dégénèrent." },
        },
      }, 
      {
        type: "likert",
        text: "Vous signalez immédiatement les comportements qui vous semblent anormaux sur votre site, sans attendre de les avoir observés une deuxième fois.",
        tags: ["comportement", "alerte"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous remarquez les comportements inhabituels mais vous hésitez encore à les signaler", desc: "Ne pas interpeller quelqu'un qui photographie les équipements parce qu'il a un badge, ne pas signaler un véhicule inconnu parce que 'ça fait partie du décor', attendre qu'un comportement se répète avant de réagir : le signalement tardif ou absent est la première cause d'échec des dispositifs de sûreté. L'enjeu est d'agir sur le premier signal, pas sur la confirmation." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les comportements clairement anormaux, les signaux plus subtils vous échappent encore", desc: "Vous réagissez quand les comportements sont clairement problématiques. Mais les signaux plus ambigus — quelqu'un qui pose des questions précises sur le dispositif de sécurité, un véhicule inconnu depuis quelques jours, un collègue qui se comporte différemment — ne déclenchent pas encore systématiquement un signalement. L'enjeu est d'abaisser votre seuil d'alerte sur ces situations intermédiaires." },
          haut: { label: "Réflexes installés", titre: "Vous signalez immédiatement tout comportement qui vous interpelle, même en cas de doute sur sa gravité", desc: "Vous interpellez immédiatement la personne qui photographie, vous signalez le véhicule inconnu dès le premier jour, vous remontez le comportement inhabituel d'un collègue en décrivant les faits. Vous signalez même quand vous n'êtes pas certain·e de la gravité. Cette réactivité sur le premier signal est ce qui permet aux équipes de sûreté de traiter les situations avant qu'elles dégénèrent." },
        },
      }, 
      {
        type: "choix",
        text: "Un véhicule que vous ne reconnaissez pas est garé depuis hier matin sur le parking réservé aux visiteurs. Il est encore là ce matin. Personne ne semble s'en préoccuper.",
        tags: ["comportement", "véhicule"],
        answers: [
          { text: "Je laisse — le parking visiteur est ouvert et un véhicule peut y rester quelques jours.", score: 0 },
          { text: "Je le signale à la sécurité du site en indiquant depuis quand je l'observe.", score: 2 },
          { text: "Je regarde s'il y a quelque chose de suspect dans le véhicule avant de décider.", score: 0 },
          { text: "J'en parle à mes collègues pour voir si quelqu'un le reconnaît.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous remarquez les comportements inhabituels mais vous hésitez encore à les signaler", desc: "Ne pas interpeller quelqu'un qui photographie les équipements parce qu'il a un badge, ne pas signaler un véhicule inconnu parce que 'ça fait partie du décor', attendre qu'un comportement se répète avant de réagir : le signalement tardif ou absent est la première cause d'échec des dispositifs de sûreté. L'enjeu est d'agir sur le premier signal, pas sur la confirmation." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les comportements clairement anormaux, les signaux plus subtils vous échappent encore", desc: "Vous réagissez quand les comportements sont clairement problématiques. Mais les signaux plus ambigus — quelqu'un qui pose des questions précises sur le dispositif de sécurité, un véhicule inconnu depuis quelques jours, un collègue qui se comporte différemment — ne déclenchent pas encore systématiquement un signalement. L'enjeu est d'abaisser votre seuil d'alerte sur ces situations intermédiaires." },
          haut: { label: "Réflexes installés", titre: "Vous signalez immédiatement tout comportement qui vous interpelle, même en cas de doute sur sa gravité", desc: "Vous interpellez immédiatement la personne qui photographie, vous signalez le véhicule inconnu dès le premier jour, vous remontez le comportement inhabituel d'un collègue en décrivant les faits. Vous signalez même quand vous n'êtes pas certain·e de la gravité. Cette réactivité sur le premier signal est ce qui permet aux équipes de sûreté de traiter les situations avant qu'elles dégénèrent." },
        },
      }, 
      {
        type: "choix",
        text: "Un prestataire en intervention vous pose des questions détaillées sur les systèmes de sécurité du bâtiment — cameras, alarmes, rondes de surveillance. Il dit que c'est pour adapter son travail.",
        tags: ["comportement", "questionnement"],
        answers: [
          { text: "Je réponds — il est prestataire autorisé et ses questions semblent liées à son travail.", score: 0 },
          { text: "Je lui dis que ces informations doivent être demandées au responsable sécurité du site.", score: 2 },
          { text: "Je réponds de façon vague sans entrer dans les détails.", score: 1 },
          { text: "Je note ses questions et j'en parle à la sécurité après son départ.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous remarquez les comportements inhabituels mais vous hésitez encore à les signaler", desc: "Ne pas interpeller quelqu'un qui photographie les équipements parce qu'il a un badge, ne pas signaler un véhicule inconnu parce que 'ça fait partie du décor', attendre qu'un comportement se répète avant de réagir : le signalement tardif ou absent est la première cause d'échec des dispositifs de sûreté. L'enjeu est d'agir sur le premier signal, pas sur la confirmation." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les comportements clairement anormaux, les signaux plus subtils vous échappent encore", desc: "Vous réagissez quand les comportements sont clairement problématiques. Mais les signaux plus ambigus — quelqu'un qui pose des questions précises sur le dispositif de sécurité, un véhicule inconnu depuis quelques jours, un collègue qui se comporte différemment — ne déclenchent pas encore systématiquement un signalement. L'enjeu est d'abaisser votre seuil d'alerte sur ces situations intermédiaires." },
          haut: { label: "Réflexes installés", titre: "Vous signalez immédiatement tout comportement qui vous interpelle, même en cas de doute sur sa gravité", desc: "Vous interpellez immédiatement la personne qui photographie, vous signalez le véhicule inconnu dès le premier jour, vous remontez le comportement inhabituel d'un collègue en décrivant les faits. Vous signalez même quand vous n'êtes pas certain·e de la gravité. Cette réactivité sur le premier signal est ce qui permet aux équipes de sûreté de traiter les situations avant qu'elles dégénèrent." },
        },
      }, 
      {
        type: "choix",
        text: "Un collègue que vous connaissez bien se comporte de façon inhabituelle depuis quelques jours — nerveux, agité, il évite certaines zones et certaines personnes. Vous ne savez pas quoi penser.",
        tags: ["comportement", "stress"],
        answers: [
          { text: "Je ne dis rien — c'est peut-être personnel et je ne veux pas me mêler de sa vie.", score: 0 },
          { text: "Je lui demande si tout va bien en tête-à-tête, sans entrer dans les détails de ce que j'ai observé.", score: 1.5 },
          { text: "Je le signale à la sécurité en décrivant les comportements observés.", score: 2 },
          { text: "J'en parle à notre responsable pour qu'il fasse le point avec lui.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous remarquez les comportements inhabituels mais vous hésitez encore à les signaler", desc: "Ne pas interpeller quelqu'un qui photographie les équipements parce qu'il a un badge, ne pas signaler un véhicule inconnu parce que 'ça fait partie du décor', attendre qu'un comportement se répète avant de réagir : le signalement tardif ou absent est la première cause d'échec des dispositifs de sûreté. L'enjeu est d'agir sur le premier signal, pas sur la confirmation." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les comportements clairement anormaux, les signaux plus subtils vous échappent encore", desc: "Vous réagissez quand les comportements sont clairement problématiques. Mais les signaux plus ambigus — quelqu'un qui pose des questions précises sur le dispositif de sécurité, un véhicule inconnu depuis quelques jours, un collègue qui se comporte différemment — ne déclenchent pas encore systématiquement un signalement. L'enjeu est d'abaisser votre seuil d'alerte sur ces situations intermédiaires." },
          haut: { label: "Réflexes installés", titre: "Vous signalez immédiatement tout comportement qui vous interpelle, même en cas de doute sur sa gravité", desc: "Vous interpellez immédiatement la personne qui photographie, vous signalez le véhicule inconnu dès le premier jour, vous remontez le comportement inhabituel d'un collègue en décrivant les faits. Vous signalez même quand vous n'êtes pas certain·e de la gravité. Cette réactivité sur le premier signal est ce qui permet aux équipes de sûreté de traiter les situations avant qu'elles dégénèrent." },
        },
      }, 
      {
        type: "likert",
        text: "Vous signalez les comportements qui vous interpellent même quand vous n'êtes pas certain·e qu'ils sont réellement problématiques.",
        tags: ["comportement", "doute"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous remarquez les comportements inhabituels mais vous hésitez encore à les signaler", desc: "Ne pas interpeller quelqu'un qui photographie les équipements parce qu'il a un badge, ne pas signaler un véhicule inconnu parce que 'ça fait partie du décor', attendre qu'un comportement se répète avant de réagir : le signalement tardif ou absent est la première cause d'échec des dispositifs de sûreté. L'enjeu est d'agir sur le premier signal, pas sur la confirmation." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les comportements clairement anormaux, les signaux plus subtils vous échappent encore", desc: "Vous réagissez quand les comportements sont clairement problématiques. Mais les signaux plus ambigus — quelqu'un qui pose des questions précises sur le dispositif de sécurité, un véhicule inconnu depuis quelques jours, un collègue qui se comporte différemment — ne déclenchent pas encore systématiquement un signalement. L'enjeu est d'abaisser votre seuil d'alerte sur ces situations intermédiaires." },
          haut: { label: "Réflexes installés", titre: "Vous signalez immédiatement tout comportement qui vous interpelle, même en cas de doute sur sa gravité", desc: "Vous interpellez immédiatement la personne qui photographie, vous signalez le véhicule inconnu dès le premier jour, vous remontez le comportement inhabituel d'un collègue en décrivant les faits. Vous signalez même quand vous n'êtes pas certain·e de la gravité. Cette réactivité sur le premier signal est ce qui permet aux équipes de sûreté de traiter les situations avant qu'elles dégénèrent." },
        },
      }, 
      {
        type: "choix",
        text: "Vous trouvez un colis ou un objet que vous ne reconnaissez pas dans une zone de passage. Il n'y a pas de marquage ni d'indication d'appartenance.",
        tags: ["comportement", "colis"],
        answers: [
          { text: "Je l'ouvre pour identifier son propriétaire.", score: 0 },
          { text: "Je le signale à la sécurité sans y toucher ni m'en approcher davantage.", score: 2 },
          { text: "Je le déplace vers l'accueil pour que quelqu'un l'identifie.", score: 0 },
          { text: "J'attends quelques minutes pour voir si quelqu'un vient le récupérer.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous remarquez les comportements inhabituels mais vous hésitez encore à les signaler", desc: "Ne pas interpeller quelqu'un qui photographie les équipements parce qu'il a un badge, ne pas signaler un véhicule inconnu parce que 'ça fait partie du décor', attendre qu'un comportement se répète avant de réagir : le signalement tardif ou absent est la première cause d'échec des dispositifs de sûreté. L'enjeu est d'agir sur le premier signal, pas sur la confirmation." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les comportements clairement anormaux, les signaux plus subtils vous échappent encore", desc: "Vous réagissez quand les comportements sont clairement problématiques. Mais les signaux plus ambigus — quelqu'un qui pose des questions précises sur le dispositif de sécurité, un véhicule inconnu depuis quelques jours, un collègue qui se comporte différemment — ne déclenchent pas encore systématiquement un signalement. L'enjeu est d'abaisser votre seuil d'alerte sur ces situations intermédiaires." },
          haut: { label: "Réflexes installés", titre: "Vous signalez immédiatement tout comportement qui vous interpelle, même en cas de doute sur sa gravité", desc: "Vous interpellez immédiatement la personne qui photographie, vous signalez le véhicule inconnu dès le premier jour, vous remontez le comportement inhabituel d'un collègue en décrivant les faits. Vous signalez même quand vous n'êtes pas certain·e de la gravité. Cette réactivité sur le premier signal est ce qui permet aux équipes de sûreté de traiter les situations avant qu'elles dégénèrent." },
        },
      }, 
      {
        type: "choix",
        text: "Vous voyez un collègue publier sur ses réseaux sociaux une photo prise dans vos locaux où l'on distingue clairement des équipements sensibles et des informations internes.",
        tags: ["comportement", "réseaux sociaux"],
        answers: [
          { text: "Je ne dis rien — c'est sa vie privée et il ne l'a probablement pas fait intentionnellement.", score: 0 },
          { text: "Je lui signale ce que j'ai observé et je l'encourage à supprimer la photo.", score: 2 },
          { text: "Je le signale directement à la sécurité sans en parler à mon collègue.", score: 1.5 },
          { text: "Je laisse passer — une photo sur les réseaux ne crée pas de risque réel.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous remarquez les comportements inhabituels mais vous hésitez encore à les signaler", desc: "Ne pas interpeller quelqu'un qui photographie les équipements parce qu'il a un badge, ne pas signaler un véhicule inconnu parce que 'ça fait partie du décor', attendre qu'un comportement se répète avant de réagir : le signalement tardif ou absent est la première cause d'échec des dispositifs de sûreté. L'enjeu est d'agir sur le premier signal, pas sur la confirmation." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les comportements clairement anormaux, les signaux plus subtils vous échappent encore", desc: "Vous réagissez quand les comportements sont clairement problématiques. Mais les signaux plus ambigus — quelqu'un qui pose des questions précises sur le dispositif de sécurité, un véhicule inconnu depuis quelques jours, un collègue qui se comporte différemment — ne déclenchent pas encore systématiquement un signalement. L'enjeu est d'abaisser votre seuil d'alerte sur ces situations intermédiaires." },
          haut: { label: "Réflexes installés", titre: "Vous signalez immédiatement tout comportement qui vous interpelle, même en cas de doute sur sa gravité", desc: "Vous interpellez immédiatement la personne qui photographie, vous signalez le véhicule inconnu dès le premier jour, vous remontez le comportement inhabituel d'un collègue en décrivant les faits. Vous signalez même quand vous n'êtes pas certain·e de la gravité. Cette réactivité sur le premier signal est ce qui permet aux équipes de sûreté de traiter les situations avant qu'elles dégénèrent." },
        },
      }, 
      {
        type: "likert",
        text: "Vous faites attention à ce que vous publiez sur les réseaux sociaux concernant votre lieu de travail, vos équipements et votre organisation.",
        tags: ["comportement", "information"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous remarquez les comportements inhabituels mais vous hésitez encore à les signaler", desc: "Ne pas interpeller quelqu'un qui photographie les équipements parce qu'il a un badge, ne pas signaler un véhicule inconnu parce que 'ça fait partie du décor', attendre qu'un comportement se répète avant de réagir : le signalement tardif ou absent est la première cause d'échec des dispositifs de sûreté. L'enjeu est d'agir sur le premier signal, pas sur la confirmation." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les comportements clairement anormaux, les signaux plus subtils vous échappent encore", desc: "Vous réagissez quand les comportements sont clairement problématiques. Mais les signaux plus ambigus — quelqu'un qui pose des questions précises sur le dispositif de sécurité, un véhicule inconnu depuis quelques jours, un collègue qui se comporte différemment — ne déclenchent pas encore systématiquement un signalement. L'enjeu est d'abaisser votre seuil d'alerte sur ces situations intermédiaires." },
          haut: { label: "Réflexes installés", titre: "Vous signalez immédiatement tout comportement qui vous interpelle, même en cas de doute sur sa gravité", desc: "Vous interpellez immédiatement la personne qui photographie, vous signalez le véhicule inconnu dès le premier jour, vous remontez le comportement inhabituel d'un collègue en décrivant les faits. Vous signalez même quand vous n'êtes pas certain·e de la gravité. Cette réactivité sur le premier signal est ce qui permet aux équipes de sûreté de traiter les situations avant qu'elles dégénèrent." },
        },
      }, 
      {
        type: "choix",
        text: "En arrivant le matin, vous remarquez des traces qui suggèrent qu'une fenêtre a été forcée. Vos collègues disent que c'est probablement le vent ou une mauvaise fermeture.",
        tags: ["comportement", "intrusion"],
        answers: [
          { text: "Je me range à l'avis de mes collègues — ils ont plus d'expérience du bâtiment.", score: 0 },
          { text: "Je contacte la sécurité et je ne touche à rien en attendant leur venue.", score: 2 },
          { text: "Je vérifie si quelque chose manque avant de décider si c'est serious.", score: 0 },
          { text: "Je ferme la fenêtre et j'en parle au gestionnaire des locaux.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous remarquez les comportements inhabituels mais vous hésitez encore à les signaler", desc: "Ne pas interpeller quelqu'un qui photographie les équipements parce qu'il a un badge, ne pas signaler un véhicule inconnu parce que 'ça fait partie du décor', attendre qu'un comportement se répète avant de réagir : le signalement tardif ou absent est la première cause d'échec des dispositifs de sûreté. L'enjeu est d'agir sur le premier signal, pas sur la confirmation." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les comportements clairement anormaux, les signaux plus subtils vous échappent encore", desc: "Vous réagissez quand les comportements sont clairement problématiques. Mais les signaux plus ambigus — quelqu'un qui pose des questions précises sur le dispositif de sécurité, un véhicule inconnu depuis quelques jours, un collègue qui se comporte différemment — ne déclenchent pas encore systématiquement un signalement. L'enjeu est d'abaisser votre seuil d'alerte sur ces situations intermédiaires." },
          haut: { label: "Réflexes installés", titre: "Vous signalez immédiatement tout comportement qui vous interpelle, même en cas de doute sur sa gravité", desc: "Vous interpellez immédiatement la personne qui photographie, vous signalez le véhicule inconnu dès le premier jour, vous remontez le comportement inhabituel d'un collègue en décrivant les faits. Vous signalez même quand vous n'êtes pas certain·e de la gravité. Cette réactivité sur le premier signal est ce qui permet aux équipes de sûreté de traiter les situations avant qu'elles dégénèrent." },
        },
      }
    ],

    2: [
      {
        type: "choix",
        text: "Vous avez accès à une zone dont votre habilitation couvre techniquement l'entrée, mais vous n'avez aucune raison professionnelle d'y être aujourd'hui. Vous voulez récupérer un outil qui s'y trouve.",
        tags: ["zones sensibles", "habilitation"],
        answers: [
          { text: "J'entre — mon habilitation couvre cette zone.", score: 0 },
          { text: "Je demande à quelqu'un qui a une raison légitime d'y être de me récupérer l'outil.", score: 2 },
          { text: "J'entre rapidement pour récupérer l'outil et je ressors immédiatement.", score: 0 },
          { text: "Je vérifie auprès de mon responsable si j'ai le droit d'y aller pour ça.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous protégez les informations sensibles de façon sélective plutôt que systématique", desc: "Laisser son écran déverrouillé pour une absence courte, discuter de sujets sensibles dans un train, entrer dans une zone sans raison professionnelle parce que l'habilitation le permet techniquement : la protection de l'information ne repose pas sur des règles ponctuelles mais sur des réflexes quotidiens cohérents. Ce qui est protégé de façon sélective n'est pas vraiment protégé." },
          moyen: { label: "Pratiques en développement", titre: "Vous protégez les informations sensibles globalement mais quelques réflexes restent encore à ancrer", desc: "Vous verrouillez votre écran, vous faites attention aux zones sensibles, vous déclarez vos badges perdus. Mais certains réflexes peuvent encore manquer — conversation professionnelle dans un lieu public, document imprimé par erreur, visiteur qui s'éloigne de la zone de réunion. L'enjeu est de rendre ces réflexes automatiques dans toutes les situations." },
          haut: { label: "Réflexes installés", titre: "Vous protégez les informations et les zones sensibles de façon systématique, dans toutes les situations", desc: "Vous verrouillez votre écran systématiquement, vous ne discutez pas de sujets sensibles en public, vous déclarez immédiatement la perte de votre badge, vous détruisez correctement les documents confidentiels. Ces réflexes quotidiens constituent une protection réelle — pas parce qu'ils préviennent tous les incidents, mais parce qu'ils les rendent beaucoup plus difficiles à orchestrer." },
        },
      }, 
      {
        type: "likert",
        text: "Vous accédez uniquement aux zones et aux informations dont vous avez réellement besoin pour votre travail, même si votre habilitation vous en donne techniquement l'accès.",
        tags: ["zones sensibles", "besoin d'en connaître"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous protégez les informations sensibles de façon sélective plutôt que systématique", desc: "Laisser son écran déverrouillé pour une absence courte, discuter de sujets sensibles dans un train, entrer dans une zone sans raison professionnelle parce que l'habilitation le permet techniquement : la protection de l'information ne repose pas sur des règles ponctuelles mais sur des réflexes quotidiens cohérents. Ce qui est protégé de façon sélective n'est pas vraiment protégé." },
          moyen: { label: "Pratiques en développement", titre: "Vous protégez les informations sensibles globalement mais quelques réflexes restent encore à ancrer", desc: "Vous verrouillez votre écran, vous faites attention aux zones sensibles, vous déclarez vos badges perdus. Mais certains réflexes peuvent encore manquer — conversation professionnelle dans un lieu public, document imprimé par erreur, visiteur qui s'éloigne de la zone de réunion. L'enjeu est de rendre ces réflexes automatiques dans toutes les situations." },
          haut: { label: "Réflexes installés", titre: "Vous protégez les informations et les zones sensibles de façon systématique, dans toutes les situations", desc: "Vous verrouillez votre écran systématiquement, vous ne discutez pas de sujets sensibles en public, vous déclarez immédiatement la perte de votre badge, vous détruisez correctement les documents confidentiels. Ces réflexes quotidiens constituent une protection réelle — pas parce qu'ils préviennent tous les incidents, mais parce qu'ils les rendent beaucoup plus difficiles à orchestrer." },
        },
      }, 
      {
        type: "choix",
        text: "Vous trouvez sur l'imprimante un document confidentiel oublié par un collègue. Vous connaissez son destinataire.",
        tags: ["zones sensibles", "document"],
        answers: [
          { text: "Je le lis rapidement — il est déjà imprimé et ça peut m'être utile.", score: 0 },
          { text: "Je le retourne face vers le bas et je préviens immédiatement son propriétaire.", score: 2 },
          { text: "Je le laisse sur l'imprimante — ce n'est pas à moi de le gérer.", score: 0 },
          { text: "Je le dépose dans la corbeille sécurisée.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous protégez les informations sensibles de façon sélective plutôt que systématique", desc: "Laisser son écran déverrouillé pour une absence courte, discuter de sujets sensibles dans un train, entrer dans une zone sans raison professionnelle parce que l'habilitation le permet techniquement : la protection de l'information ne repose pas sur des règles ponctuelles mais sur des réflexes quotidiens cohérents. Ce qui est protégé de façon sélective n'est pas vraiment protégé." },
          moyen: { label: "Pratiques en développement", titre: "Vous protégez les informations sensibles globalement mais quelques réflexes restent encore à ancrer", desc: "Vous verrouillez votre écran, vous faites attention aux zones sensibles, vous déclarez vos badges perdus. Mais certains réflexes peuvent encore manquer — conversation professionnelle dans un lieu public, document imprimé par erreur, visiteur qui s'éloigne de la zone de réunion. L'enjeu est de rendre ces réflexes automatiques dans toutes les situations." },
          haut: { label: "Réflexes installés", titre: "Vous protégez les informations et les zones sensibles de façon systématique, dans toutes les situations", desc: "Vous verrouillez votre écran systématiquement, vous ne discutez pas de sujets sensibles en public, vous déclarez immédiatement la perte de votre badge, vous détruisez correctement les documents confidentiels. Ces réflexes quotidiens constituent une protection réelle — pas parce qu'ils préviennent tous les incidents, mais parce qu'ils les rendent beaucoup plus difficiles à orchestrer." },
        },
      }, 
      {
        type: "choix",
        text: "Vous quittez votre poste de travail pour une réunion de deux heures. Votre écran affiche des informations sensibles sur un dossier en cours.",
        tags: ["zones sensibles", "écran"],
        answers: [
          { text: "Je laisse — le bureau est dans un espace sécurisé et mes collègues sont de confiance.", score: 0 },
          { text: "Je verrouille mon écran avant de partir.", score: 2 },
          { text: "Je ferme les fenêtres sensibles mais je ne verrouille pas l'écran.", score: 0.5 },
          { text: "Je demande à un collègue de surveiller mon poste pendant mon absence.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous protégez les informations sensibles de façon sélective plutôt que systématique", desc: "Laisser son écran déverrouillé pour une absence courte, discuter de sujets sensibles dans un train, entrer dans une zone sans raison professionnelle parce que l'habilitation le permet techniquement : la protection de l'information ne repose pas sur des règles ponctuelles mais sur des réflexes quotidiens cohérents. Ce qui est protégé de façon sélective n'est pas vraiment protégé." },
          moyen: { label: "Pratiques en développement", titre: "Vous protégez les informations sensibles globalement mais quelques réflexes restent encore à ancrer", desc: "Vous verrouillez votre écran, vous faites attention aux zones sensibles, vous déclarez vos badges perdus. Mais certains réflexes peuvent encore manquer — conversation professionnelle dans un lieu public, document imprimé par erreur, visiteur qui s'éloigne de la zone de réunion. L'enjeu est de rendre ces réflexes automatiques dans toutes les situations." },
          haut: { label: "Réflexes installés", titre: "Vous protégez les informations et les zones sensibles de façon systématique, dans toutes les situations", desc: "Vous verrouillez votre écran systématiquement, vous ne discutez pas de sujets sensibles en public, vous déclarez immédiatement la perte de votre badge, vous détruisez correctement les documents confidentiels. Ces réflexes quotidiens constituent une protection réelle — pas parce qu'ils préviennent tous les incidents, mais parce qu'ils les rendent beaucoup plus difficiles à orchestrer." },
        },
      }, 
      {
        type: "likert",
        text: "Vous verrouillez systématiquement votre poste de travail dès que vous vous absentez, même pour quelques minutes.",
        tags: ["zones sensibles", "écran"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous protégez les informations sensibles de façon sélective plutôt que systématique", desc: "Laisser son écran déverrouillé pour une absence courte, discuter de sujets sensibles dans un train, entrer dans une zone sans raison professionnelle parce que l'habilitation le permet techniquement : la protection de l'information ne repose pas sur des règles ponctuelles mais sur des réflexes quotidiens cohérents. Ce qui est protégé de façon sélective n'est pas vraiment protégé." },
          moyen: { label: "Pratiques en développement", titre: "Vous protégez les informations sensibles globalement mais quelques réflexes restent encore à ancrer", desc: "Vous verrouillez votre écran, vous faites attention aux zones sensibles, vous déclarez vos badges perdus. Mais certains réflexes peuvent encore manquer — conversation professionnelle dans un lieu public, document imprimé par erreur, visiteur qui s'éloigne de la zone de réunion. L'enjeu est de rendre ces réflexes automatiques dans toutes les situations." },
          haut: { label: "Réflexes installés", titre: "Vous protégez les informations et les zones sensibles de façon systématique, dans toutes les situations", desc: "Vous verrouillez votre écran systématiquement, vous ne discutez pas de sujets sensibles en public, vous déclarez immédiatement la perte de votre badge, vous détruisez correctement les documents confidentiels. Ces réflexes quotidiens constituent une protection réelle — pas parce qu'ils préviennent tous les incidents, mais parce qu'ils les rendent beaucoup plus difficiles à orchestrer." },
        },
      }, 
      {
        type: "choix",
        text: "Vous êtes en déplacement dans un train et vous passez un appel professionnel où vous évoquez des informations sensibles sur un projet en cours. Le wagon est occupé.",
        tags: ["zones sensibles", "conversation"],
        answers: [
          { text: "Je continue l'appel — les informations seront oubliées par les passagers.", score: 0 },
          { text: "Je reporte l'appel ou je passe dans un espace plus isolé.", score: 2 },
          { text: "Je baisse la voix et je fais attention à ne pas mentionner les noms.", score: 0.5 },
          { text: "Je continue en faisant attention à ce que je dis.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous protégez les informations sensibles de façon sélective plutôt que systématique", desc: "Laisser son écran déverrouillé pour une absence courte, discuter de sujets sensibles dans un train, entrer dans une zone sans raison professionnelle parce que l'habilitation le permet techniquement : la protection de l'information ne repose pas sur des règles ponctuelles mais sur des réflexes quotidiens cohérents. Ce qui est protégé de façon sélective n'est pas vraiment protégé." },
          moyen: { label: "Pratiques en développement", titre: "Vous protégez les informations sensibles globalement mais quelques réflexes restent encore à ancrer", desc: "Vous verrouillez votre écran, vous faites attention aux zones sensibles, vous déclarez vos badges perdus. Mais certains réflexes peuvent encore manquer — conversation professionnelle dans un lieu public, document imprimé par erreur, visiteur qui s'éloigne de la zone de réunion. L'enjeu est de rendre ces réflexes automatiques dans toutes les situations." },
          haut: { label: "Réflexes installés", titre: "Vous protégez les informations et les zones sensibles de façon systématique, dans toutes les situations", desc: "Vous verrouillez votre écran systématiquement, vous ne discutez pas de sujets sensibles en public, vous déclarez immédiatement la perte de votre badge, vous détruisez correctement les documents confidentiels. Ces réflexes quotidiens constituent une protection réelle — pas parce qu'ils préviennent tous les incidents, mais parce qu'ils les rendent beaucoup plus difficiles à orchestrer." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez perdu votre badge d'accès. Vous pensez l'avoir laissé dans votre voiture. Vous devez entrer dans le bâtiment rapidement pour une réunion importante.",
        tags: ["zones sensibles", "badge"],
        answers: [
          { text: "J'entre avec un collègue qui valide mon accès — tout le monde me connaît ici.", score: 0 },
          { text: "Je passe par l'accueil pour déclarer la perte et obtenir un badge provisoire.", score: 2 },
          { text: "Je retourne chercher mon badge dans la voiture même si je suis en retard.", score: 1.5 },
          { text: "J'attends devant le bâtiment qu'un collègue passe et m'ouvre.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous protégez les informations sensibles de façon sélective plutôt que systématique", desc: "Laisser son écran déverrouillé pour une absence courte, discuter de sujets sensibles dans un train, entrer dans une zone sans raison professionnelle parce que l'habilitation le permet techniquement : la protection de l'information ne repose pas sur des règles ponctuelles mais sur des réflexes quotidiens cohérents. Ce qui est protégé de façon sélective n'est pas vraiment protégé." },
          moyen: { label: "Pratiques en développement", titre: "Vous protégez les informations sensibles globalement mais quelques réflexes restent encore à ancrer", desc: "Vous verrouillez votre écran, vous faites attention aux zones sensibles, vous déclarez vos badges perdus. Mais certains réflexes peuvent encore manquer — conversation professionnelle dans un lieu public, document imprimé par erreur, visiteur qui s'éloigne de la zone de réunion. L'enjeu est de rendre ces réflexes automatiques dans toutes les situations." },
          haut: { label: "Réflexes installés", titre: "Vous protégez les informations et les zones sensibles de façon systématique, dans toutes les situations", desc: "Vous verrouillez votre écran systématiquement, vous ne discutez pas de sujets sensibles en public, vous déclarez immédiatement la perte de votre badge, vous détruisez correctement les documents confidentiels. Ces réflexes quotidiens constituent une protection réelle — pas parce qu'ils préviennent tous les incidents, mais parce qu'ils les rendent beaucoup plus difficiles à orchestrer." },
        },
      }, 
      {
        type: "likert",
        text: "Vous déclarez immédiatement la perte ou le vol de votre badge d'accès, sans attendre de vérifier si vous l'avez simplement égaré.",
        tags: ["zones sensibles", "déclaration"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous protégez les informations sensibles de façon sélective plutôt que systématique", desc: "Laisser son écran déverrouillé pour une absence courte, discuter de sujets sensibles dans un train, entrer dans une zone sans raison professionnelle parce que l'habilitation le permet techniquement : la protection de l'information ne repose pas sur des règles ponctuelles mais sur des réflexes quotidiens cohérents. Ce qui est protégé de façon sélective n'est pas vraiment protégé." },
          moyen: { label: "Pratiques en développement", titre: "Vous protégez les informations sensibles globalement mais quelques réflexes restent encore à ancrer", desc: "Vous verrouillez votre écran, vous faites attention aux zones sensibles, vous déclarez vos badges perdus. Mais certains réflexes peuvent encore manquer — conversation professionnelle dans un lieu public, document imprimé par erreur, visiteur qui s'éloigne de la zone de réunion. L'enjeu est de rendre ces réflexes automatiques dans toutes les situations." },
          haut: { label: "Réflexes installés", titre: "Vous protégez les informations et les zones sensibles de façon systématique, dans toutes les situations", desc: "Vous verrouillez votre écran systématiquement, vous ne discutez pas de sujets sensibles en public, vous déclarez immédiatement la perte de votre badge, vous détruisez correctement les documents confidentiels. Ces réflexes quotidiens constituent une protection réelle — pas parce qu'ils préviennent tous les incidents, mais parce qu'ils les rendent beaucoup plus difficiles à orchestrer." },
        },
      }, 
      {
        type: "choix",
        text: "Vous recevez un visiteur externe pour une réunion. En attendant dans la salle, il se lève et commence à faire le tour de la pièce en regardant les documents affichés au mur.",
        tags: ["zones sensibles", "visiteur"],
        answers: [
          { text: "Je le laisse — les documents au mur ne sont pas confidentiels.", score: 0.5 },
          { text: "Je lui propose de s'asseoir et je retire discrètement les documents qui pourraient être sensibles.", score: 2 },
          { text: "Je lui signale que certains documents sont confidentiels.", score: 1.5 },
          { text: "Je l'accompagne dans ses déplacements dans la salle.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous protégez les informations sensibles de façon sélective plutôt que systématique", desc: "Laisser son écran déverrouillé pour une absence courte, discuter de sujets sensibles dans un train, entrer dans une zone sans raison professionnelle parce que l'habilitation le permet techniquement : la protection de l'information ne repose pas sur des règles ponctuelles mais sur des réflexes quotidiens cohérents. Ce qui est protégé de façon sélective n'est pas vraiment protégé." },
          moyen: { label: "Pratiques en développement", titre: "Vous protégez les informations sensibles globalement mais quelques réflexes restent encore à ancrer", desc: "Vous verrouillez votre écran, vous faites attention aux zones sensibles, vous déclarez vos badges perdus. Mais certains réflexes peuvent encore manquer — conversation professionnelle dans un lieu public, document imprimé par erreur, visiteur qui s'éloigne de la zone de réunion. L'enjeu est de rendre ces réflexes automatiques dans toutes les situations." },
          haut: { label: "Réflexes installés", titre: "Vous protégez les informations et les zones sensibles de façon systématique, dans toutes les situations", desc: "Vous verrouillez votre écran systématiquement, vous ne discutez pas de sujets sensibles en public, vous déclarez immédiatement la perte de votre badge, vous détruisez correctement les documents confidentiels. Ces réflexes quotidiens constituent une protection réelle — pas parce qu'ils préviennent tous les incidents, mais parce qu'ils les rendent beaucoup plus difficiles à orchestrer." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez imprimé par erreur un document confidentiel en double. Le second exemplaire est inutile.",
        tags: ["zones sensibles", "destruction"],
        answers: [
          { text: "Je le jette à la poubelle — il sera mélangé aux autres déchets.", score: 0 },
          { text: "Je le déchiquette ou je le mets dans la corbeille de destruction sécurisée.", score: 2 },
          { text: "Je le conserve comme brouillon pour mes notes.", score: 0 },
          { text: "Je le froisse pour qu'il soit illisible avant de le jeter.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous protégez les informations sensibles de façon sélective plutôt que systématique", desc: "Laisser son écran déverrouillé pour une absence courte, discuter de sujets sensibles dans un train, entrer dans une zone sans raison professionnelle parce que l'habilitation le permet techniquement : la protection de l'information ne repose pas sur des règles ponctuelles mais sur des réflexes quotidiens cohérents. Ce qui est protégé de façon sélective n'est pas vraiment protégé." },
          moyen: { label: "Pratiques en développement", titre: "Vous protégez les informations sensibles globalement mais quelques réflexes restent encore à ancrer", desc: "Vous verrouillez votre écran, vous faites attention aux zones sensibles, vous déclarez vos badges perdus. Mais certains réflexes peuvent encore manquer — conversation professionnelle dans un lieu public, document imprimé par erreur, visiteur qui s'éloigne de la zone de réunion. L'enjeu est de rendre ces réflexes automatiques dans toutes les situations." },
          haut: { label: "Réflexes installés", titre: "Vous protégez les informations et les zones sensibles de façon systématique, dans toutes les situations", desc: "Vous verrouillez votre écran systématiquement, vous ne discutez pas de sujets sensibles en public, vous déclarez immédiatement la perte de votre badge, vous détruisez correctement les documents confidentiels. Ces réflexes quotidiens constituent une protection réelle — pas parce qu'ils préviennent tous les incidents, mais parce qu'ils les rendent beaucoup plus difficiles à orchestrer." },
        },
      }
    ],

    3: [
      {
        type: "choix",
        text: "L'alarme d'évacuation retentit. Vous êtes en plein milieu d'une opération délicate qui nécessite 5 minutes pour être sécurisée correctement. Certains collègues évacuent déjà.",
        tags: ["alerte", "procédure"],
        answers: [
          { text: "Je termine les 5 minutes de sécurisation — interrompre maintenant créerait un autre risque.", score: 0 },
          { text: "J'évacue immédiatement en laissant l'opération dans l'état le plus sûr possible en 30 secondes.", score: 2 },
          { text: "J'envoie un collègue prévenir le responsable d'évacuation et je termine.", score: 0 },
          { text: "J'attends 1 minute pour voir si c'est une fausse alarme avant d'évacuer.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre réaction aux alertes sûreté est encore influencée par le contexte ou l'historique des fausses alarmes", desc: "Rester à son poste sur une alarme parce que les dernières étaient des fausses alarmes, terminer une opération avant d'évacuer, attendre de voir si l'alarme persiste : chaque délai dans la réaction à une alerte sûreté est une réduction de la marge de manœuvre des équipes d'intervention. La procédure n'est pas optionnelle selon l'historique des alarmes." },
          moyen: { label: "Pratiques en développement", titre: "Vous réagissez aux alertes sûreté mais votre réaction peut encore être influencée par le contexte", desc: "Vous évacuez sur alarme dans la plupart des situations. Mais après plusieurs fausses alarmes, en plein milieu d'une opération délicate, lors d'un appel important : votre réaction peut encore être différée. L'enjeu est de traiter chaque alarme comme potentiellement réelle, quel que soit l'historique." },
          haut: { label: "Réflexes installés", titre: "Vous réagissez aux alertes sûreté sans délai ni adaptation selon le contexte ou l'historique", desc: "Vous évacuez immédiatement sur alarme sans attendre de confirmer qu'elle est réelle, sans terminer ce que vous faites, sans regarder si vos collègues réagissent. Vous signalez l'absence d'un collègue au point de rassemblement. Vous ne revenez pas chercher des affaires après une évacuation. Cette réaction sans délai est ce qui donne aux dispositifs d'urgence leur efficacité." },
        },
      }, 
      {
        type: "likert",
        text: "Vous évacuez immédiatement sur alarme, sans attendre de confirmer que c'est une vraie alerte ou d'avoir terminé ce que vous êtes en train de faire.",
        tags: ["alerte", "réflexe"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre réaction aux alertes sûreté est encore influencée par le contexte ou l'historique des fausses alarmes", desc: "Rester à son poste sur une alarme parce que les dernières étaient des fausses alarmes, terminer une opération avant d'évacuer, attendre de voir si l'alarme persiste : chaque délai dans la réaction à une alerte sûreté est une réduction de la marge de manœuvre des équipes d'intervention. La procédure n'est pas optionnelle selon l'historique des alarmes." },
          moyen: { label: "Pratiques en développement", titre: "Vous réagissez aux alertes sûreté mais votre réaction peut encore être influencée par le contexte", desc: "Vous évacuez sur alarme dans la plupart des situations. Mais après plusieurs fausses alarmes, en plein milieu d'une opération délicate, lors d'un appel important : votre réaction peut encore être différée. L'enjeu est de traiter chaque alarme comme potentiellement réelle, quel que soit l'historique." },
          haut: { label: "Réflexes installés", titre: "Vous réagissez aux alertes sûreté sans délai ni adaptation selon le contexte ou l'historique", desc: "Vous évacuez immédiatement sur alarme sans attendre de confirmer qu'elle est réelle, sans terminer ce que vous faites, sans regarder si vos collègues réagissent. Vous signalez l'absence d'un collègue au point de rassemblement. Vous ne revenez pas chercher des affaires après une évacuation. Cette réaction sans délai est ce qui donne aux dispositifs d'urgence leur efficacité." },
        },
      }, 
      {
        type: "choix",
        text: "Lors d'une évacuation, vous réalisez qu'un collègue manque au point de rassemblement. Personne d'autre ne semble l'avoir remarqué.",
        tags: ["alerte", "point de rassemblement"],
        answers: [
          { text: "Je pense qu'il est peut-être parti directement chez lui.", score: 0 },
          { text: "Je le signale immédiatement au responsable d'évacuation.", score: 2 },
          { text: "J'attends encore quelques minutes pour voir s'il arrive.", score: 0 },
          { text: "Je retourne dans le bâtiment le chercher.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre réaction aux alertes sûreté est encore influencée par le contexte ou l'historique des fausses alarmes", desc: "Rester à son poste sur une alarme parce que les dernières étaient des fausses alarmes, terminer une opération avant d'évacuer, attendre de voir si l'alarme persiste : chaque délai dans la réaction à une alerte sûreté est une réduction de la marge de manœuvre des équipes d'intervention. La procédure n'est pas optionnelle selon l'historique des alarmes." },
          moyen: { label: "Pratiques en développement", titre: "Vous réagissez aux alertes sûreté mais votre réaction peut encore être influencée par le contexte", desc: "Vous évacuez sur alarme dans la plupart des situations. Mais après plusieurs fausses alarmes, en plein milieu d'une opération délicate, lors d'un appel important : votre réaction peut encore être différée. L'enjeu est de traiter chaque alarme comme potentiellement réelle, quel que soit l'historique." },
          haut: { label: "Réflexes installés", titre: "Vous réagissez aux alertes sûreté sans délai ni adaptation selon le contexte ou l'historique", desc: "Vous évacuez immédiatement sur alarme sans attendre de confirmer qu'elle est réelle, sans terminer ce que vous faites, sans regarder si vos collègues réagissent. Vous signalez l'absence d'un collègue au point de rassemblement. Vous ne revenez pas chercher des affaires après une évacuation. Cette réaction sans délai est ce qui donne aux dispositifs d'urgence leur efficacité." },
        },
      }, 
      {
        type: "choix",
        text: "Votre site a eu trois fausses alarmes ce mois-ci. L'alarme se déclenche à nouveau. Plusieurs collègues restent à leurs postes en disant que c'est probablement encore une fausse alarme.",
        tags: ["alerte", "fausse alarme"],
        answers: [
          { text: "Je reste aussi — trois fausses alarmes en un mois, c'est clairement un problème technique.", score: 0 },
          { text: "J'évacue comme prévu et j'encourage mes collègues à faire de même.", score: 2 },
          { text: "J'évacue mais je ne dis rien à mes collègues — chacun prend sa décision.", score: 1 },
          { text: "Je vérifie rapidement s'il y a un signal visuel d'alarme avant de décider.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre réaction aux alertes sûreté est encore influencée par le contexte ou l'historique des fausses alarmes", desc: "Rester à son poste sur une alarme parce que les dernières étaient des fausses alarmes, terminer une opération avant d'évacuer, attendre de voir si l'alarme persiste : chaque délai dans la réaction à une alerte sûreté est une réduction de la marge de manœuvre des équipes d'intervention. La procédure n'est pas optionnelle selon l'historique des alarmes." },
          moyen: { label: "Pratiques en développement", titre: "Vous réagissez aux alertes sûreté mais votre réaction peut encore être influencée par le contexte", desc: "Vous évacuez sur alarme dans la plupart des situations. Mais après plusieurs fausses alarmes, en plein milieu d'une opération délicate, lors d'un appel important : votre réaction peut encore être différée. L'enjeu est de traiter chaque alarme comme potentiellement réelle, quel que soit l'historique." },
          haut: { label: "Réflexes installés", titre: "Vous réagissez aux alertes sûreté sans délai ni adaptation selon le contexte ou l'historique", desc: "Vous évacuez immédiatement sur alarme sans attendre de confirmer qu'elle est réelle, sans terminer ce que vous faites, sans regarder si vos collègues réagissent. Vous signalez l'absence d'un collègue au point de rassemblement. Vous ne revenez pas chercher des affaires après une évacuation. Cette réaction sans délai est ce qui donne aux dispositifs d'urgence leur efficacité." },
        },
      }, 
      {
        type: "likert",
        text: "Vous participez sérieusement aux exercices d'évacuation, sans les traiter comme une interruption sans intérêt.",
        tags: ["alerte", "entraînement"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre réaction aux alertes sûreté est encore influencée par le contexte ou l'historique des fausses alarmes", desc: "Rester à son poste sur une alarme parce que les dernières étaient des fausses alarmes, terminer une opération avant d'évacuer, attendre de voir si l'alarme persiste : chaque délai dans la réaction à une alerte sûreté est une réduction de la marge de manœuvre des équipes d'intervention. La procédure n'est pas optionnelle selon l'historique des alarmes." },
          moyen: { label: "Pratiques en développement", titre: "Vous réagissez aux alertes sûreté mais votre réaction peut encore être influencée par le contexte", desc: "Vous évacuez sur alarme dans la plupart des situations. Mais après plusieurs fausses alarmes, en plein milieu d'une opération délicate, lors d'un appel important : votre réaction peut encore être différée. L'enjeu est de traiter chaque alarme comme potentiellement réelle, quel que soit l'historique." },
          haut: { label: "Réflexes installés", titre: "Vous réagissez aux alertes sûreté sans délai ni adaptation selon le contexte ou l'historique", desc: "Vous évacuez immédiatement sur alarme sans attendre de confirmer qu'elle est réelle, sans terminer ce que vous faites, sans regarder si vos collègues réagissent. Vous signalez l'absence d'un collègue au point de rassemblement. Vous ne revenez pas chercher des affaires après une évacuation. Cette réaction sans délai est ce qui donne aux dispositifs d'urgence leur efficacité." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez connaissance d'une menace verbale formulée contre votre entreprise par un ex-employé, mentionnée dans une conversation informelle. Vous n'êtes pas sûr·e de sa crédibilité.",
        tags: ["alerte", "signalement"],
        answers: [
          { text: "Je n'en parle pas — c'était une conversation informelle et je ne veux pas créer une psychose.", score: 0 },
          { text: "Je le signale à la sécurité en précisant le contexte et mes doutes sur la crédibilité.", score: 2 },
          { text: "J'en parle à mon responsable pour qu'il décide s'il faut alerter.", score: 1.5 },
          { text: "J'attends de voir si d'autres personnes ont entendu la même chose.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre réaction aux alertes sûreté est encore influencée par le contexte ou l'historique des fausses alarmes", desc: "Rester à son poste sur une alarme parce que les dernières étaient des fausses alarmes, terminer une opération avant d'évacuer, attendre de voir si l'alarme persiste : chaque délai dans la réaction à une alerte sûreté est une réduction de la marge de manœuvre des équipes d'intervention. La procédure n'est pas optionnelle selon l'historique des alarmes." },
          moyen: { label: "Pratiques en développement", titre: "Vous réagissez aux alertes sûreté mais votre réaction peut encore être influencée par le contexte", desc: "Vous évacuez sur alarme dans la plupart des situations. Mais après plusieurs fausses alarmes, en plein milieu d'une opération délicate, lors d'un appel important : votre réaction peut encore être différée. L'enjeu est de traiter chaque alarme comme potentiellement réelle, quel que soit l'historique." },
          haut: { label: "Réflexes installés", titre: "Vous réagissez aux alertes sûreté sans délai ni adaptation selon le contexte ou l'historique", desc: "Vous évacuez immédiatement sur alarme sans attendre de confirmer qu'elle est réelle, sans terminer ce que vous faites, sans regarder si vos collègues réagissent. Vous signalez l'absence d'un collègue au point de rassemblement. Vous ne revenez pas chercher des affaires après une évacuation. Cette réaction sans délai est ce qui donne aux dispositifs d'urgence leur efficacité." },
        },
      }, 
      {
        type: "choix",
        text: "Une alerte de confinement est déclenchée dans votre bâtiment. Vous êtes dans le couloir et votre bureau est à 30 secondes. La sortie de secours est à 10 secondes.",
        tags: ["alerte", "confinement"],
        answers: [
          { text: "Je sors par la sortie de secours — c'est le chemin le plus court.", score: 0 },
          { text: "Je me confine dans la pièce la plus proche et je contacte les secours.", score: 2 },
          { text: "Je cours jusqu'à mon bureau pour me confiner.", score: 0.5 },
          { text: "J'attends les instructions avant de bouger.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre réaction aux alertes sûreté est encore influencée par le contexte ou l'historique des fausses alarmes", desc: "Rester à son poste sur une alarme parce que les dernières étaient des fausses alarmes, terminer une opération avant d'évacuer, attendre de voir si l'alarme persiste : chaque délai dans la réaction à une alerte sûreté est une réduction de la marge de manœuvre des équipes d'intervention. La procédure n'est pas optionnelle selon l'historique des alarmes." },
          moyen: { label: "Pratiques en développement", titre: "Vous réagissez aux alertes sûreté mais votre réaction peut encore être influencée par le contexte", desc: "Vous évacuez sur alarme dans la plupart des situations. Mais après plusieurs fausses alarmes, en plein milieu d'une opération délicate, lors d'un appel important : votre réaction peut encore être différée. L'enjeu est de traiter chaque alarme comme potentiellement réelle, quel que soit l'historique." },
          haut: { label: "Réflexes installés", titre: "Vous réagissez aux alertes sûreté sans délai ni adaptation selon le contexte ou l'historique", desc: "Vous évacuez immédiatement sur alarme sans attendre de confirmer qu'elle est réelle, sans terminer ce que vous faites, sans regarder si vos collègues réagissent. Vous signalez l'absence d'un collègue au point de rassemblement. Vous ne revenez pas chercher des affaires après une évacuation. Cette réaction sans délai est ce qui donne aux dispositifs d'urgence leur efficacité." },
        },
      }, 
      {
        type: "choix",
        text: "Lors d'une évacuation, vous êtes en plein appel téléphonique important avec un client. L'alarme retentit.",
        tags: ["alerte", "téléphone"],
        answers: [
          { text: "Je termine l'appel rapidement — 2 minutes de plus ne changeront rien.", score: 0 },
          { text: "Je dis à mon client que je dois raccrocher immédiatement pour des raisons de sécurité.", score: 2 },
          { text: "Je lui dis d'attendre et j'évacue en gardant le téléphone à l'oreille.", score: 0 },
          { text: "Je mets l'appel en attente le temps d'évaluer si c'est une vraie alarme.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre réaction aux alertes sûreté est encore influencée par le contexte ou l'historique des fausses alarmes", desc: "Rester à son poste sur une alarme parce que les dernières étaient des fausses alarmes, terminer une opération avant d'évacuer, attendre de voir si l'alarme persiste : chaque délai dans la réaction à une alerte sûreté est une réduction de la marge de manœuvre des équipes d'intervention. La procédure n'est pas optionnelle selon l'historique des alarmes." },
          moyen: { label: "Pratiques en développement", titre: "Vous réagissez aux alertes sûreté mais votre réaction peut encore être influencée par le contexte", desc: "Vous évacuez sur alarme dans la plupart des situations. Mais après plusieurs fausses alarmes, en plein milieu d'une opération délicate, lors d'un appel important : votre réaction peut encore être différée. L'enjeu est de traiter chaque alarme comme potentiellement réelle, quel que soit l'historique." },
          haut: { label: "Réflexes installés", titre: "Vous réagissez aux alertes sûreté sans délai ni adaptation selon le contexte ou l'historique", desc: "Vous évacuez immédiatement sur alarme sans attendre de confirmer qu'elle est réelle, sans terminer ce que vous faites, sans regarder si vos collègues réagissent. Vous signalez l'absence d'un collègue au point de rassemblement. Vous ne revenez pas chercher des affaires après une évacuation. Cette réaction sans délai est ce qui donne aux dispositifs d'urgence leur efficacité." },
        },
      }, 
      {
        type: "likert",
        text: "Vous connaissez les procédures d'urgence de votre site — points de rassemblement, responsables d'évacuation, numéros d'urgence internes.",
        tags: ["alerte", "connaissance"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre réaction aux alertes sûreté est encore influencée par le contexte ou l'historique des fausses alarmes", desc: "Rester à son poste sur une alarme parce que les dernières étaient des fausses alarmes, terminer une opération avant d'évacuer, attendre de voir si l'alarme persiste : chaque délai dans la réaction à une alerte sûreté est une réduction de la marge de manœuvre des équipes d'intervention. La procédure n'est pas optionnelle selon l'historique des alarmes." },
          moyen: { label: "Pratiques en développement", titre: "Vous réagissez aux alertes sûreté mais votre réaction peut encore être influencée par le contexte", desc: "Vous évacuez sur alarme dans la plupart des situations. Mais après plusieurs fausses alarmes, en plein milieu d'une opération délicate, lors d'un appel important : votre réaction peut encore être différée. L'enjeu est de traiter chaque alarme comme potentiellement réelle, quel que soit l'historique." },
          haut: { label: "Réflexes installés", titre: "Vous réagissez aux alertes sûreté sans délai ni adaptation selon le contexte ou l'historique", desc: "Vous évacuez immédiatement sur alarme sans attendre de confirmer qu'elle est réelle, sans terminer ce que vous faites, sans regarder si vos collègues réagissent. Vous signalez l'absence d'un collègue au point de rassemblement. Vous ne revenez pas chercher des affaires après une évacuation. Cette réaction sans délai est ce qui donne aux dispositifs d'urgence leur efficacité." },
        },
      }, 
      {
        type: "choix",
        text: "Après une évacuation, vous êtes de retour à votre poste. En rangeant vos affaires, vous trouvez un objet suspect que vous n'avez pas remarqué avant l'évacuation.",
        tags: ["alerte", "après"],
        answers: [
          { text: "Je le prends pour l'examiner de plus près.", score: 0 },
          { text: "Je n'y touche pas et je contacte immédiatement la sécurité.", score: 2 },
          { text: "Je le montre à mes collègues pour voir s'ils le reconnaissent.", score: 0 },
          { text: "Je le mets dans un coin et j'en parle à mon responsable.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre réaction aux alertes sûreté est encore influencée par le contexte ou l'historique des fausses alarmes", desc: "Rester à son poste sur une alarme parce que les dernières étaient des fausses alarmes, terminer une opération avant d'évacuer, attendre de voir si l'alarme persiste : chaque délai dans la réaction à une alerte sûreté est une réduction de la marge de manœuvre des équipes d'intervention. La procédure n'est pas optionnelle selon l'historique des alarmes." },
          moyen: { label: "Pratiques en développement", titre: "Vous réagissez aux alertes sûreté mais votre réaction peut encore être influencée par le contexte", desc: "Vous évacuez sur alarme dans la plupart des situations. Mais après plusieurs fausses alarmes, en plein milieu d'une opération délicate, lors d'un appel important : votre réaction peut encore être différée. L'enjeu est de traiter chaque alarme comme potentiellement réelle, quel que soit l'historique." },
          haut: { label: "Réflexes installés", titre: "Vous réagissez aux alertes sûreté sans délai ni adaptation selon le contexte ou l'historique", desc: "Vous évacuez immédiatement sur alarme sans attendre de confirmer qu'elle est réelle, sans terminer ce que vous faites, sans regarder si vos collègues réagissent. Vous signalez l'absence d'un collègue au point de rassemblement. Vous ne revenez pas chercher des affaires après une évacuation. Cette réaction sans délai est ce qui donne aux dispositifs d'urgence leur efficacité." },
        },
      }
    ],

  },
  // ─────────────────────────────────────────────────────────────────────

    // ─── À coller dans catalogue-securite.js ──────────────────────────────
  // Clé : "managers-securite"

  "managers-securite": {
    0: [
      {
        type: "choix",
        text: "Vous traversez votre atelier en urgence pour gérer une situation. Les EPI requis sont à votre bureau à 40 mètres. Votre équipe vous regarde partir.",
        tags: ["exemplarité", "manager"],
        answers: [
          { text: "Je traverse sans EPI — c'est une urgence et mon équipe comprend le contexte.", score: 0 },
          { text: "Je prends 90 secondes pour aller chercher mes EPI avant d'entrer dans la zone.", score: 2 },
          { text: "Je traverse rapidement en signalant à mon équipe que c'est exceptionnel.", score: 0 },
          { text: "Je demande à un collègue de gérer pendant que je récupère mes EPI.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre exemplarité sécurité s'adapte encore selon le contexte, la pression ou les regards", desc: "Traverser l'atelier sans EPI parce que c'est urgent, retirer sa protection parce qu'il fait chaud, s'aligner sur la majorité quand une décision risquée est proposée : votre équipe observe et reproduit ces comportements, pas les consignes affichées. L'exemplarité managériale en sécurité ne se négocie pas selon les circonstances — c'est précisément dans les moments difficiles qu'elle compte le plus." },
          moyen: { label: "Pratiques en développement", titre: "Votre exemplarité est cohérente dans les situations normales mais peut fléchir sous pression forte", desc: "Vous donnez l'exemple dans les situations ordinaires. Mais sous très forte pression opérationnelle, face à une décision collective de votre hiérarchie, lors d'une visite client importante : votre exemplarité peut encore fléchir. L'enjeu est de tenir précisément dans ces moments — c'est là qu'elle est la plus visible et la plus influente pour votre équipe." },
          haut: { label: "Réflexes installés", titre: "Votre exemplarité sécurité est absolue et constante — aucune exception selon le contexte ou les regards", desc: "Vous allez chercher vos EPI même pour une urgence avec votre équipe qui regarde. Vous maintenez votre opposition formelle dans une réunion de direction même seul·e contre la majorité. Votre comportement en sécurité est identique que vous soyez observé·e ou non. Cette constance absolue est la seule base crédible pour exiger de votre équipe ce que vous exigez d'elle." },
        },
      }, 
      {
        type: "choix",
        text: "En réunion de direction, un responsable propose de court-circuiter une procédure de sécurité pour tenir un délai client stratégique. Plusieurs managers acquiescent.",
        tags: ["exemplarité", "procédure"],
        answers: [
          { text: "Je m'aligne — la décision a été prise collectivement par des gens responsables.", score: 0 },
          { text: "Je maintiens mon opposition et je demande que ma position soit consignée.", score: 2 },
          { text: "Je pose des questions sur les risques sans m'opposer frontalement.", score: 1 },
          { text: "Je dis que je préfère une autre solution mais je m'aligne si la majorité tranche.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre exemplarité sécurité s'adapte encore selon le contexte, la pression ou les regards", desc: "Traverser l'atelier sans EPI parce que c'est urgent, retirer sa protection parce qu'il fait chaud, s'aligner sur la majorité quand une décision risquée est proposée : votre équipe observe et reproduit ces comportements, pas les consignes affichées. L'exemplarité managériale en sécurité ne se négocie pas selon les circonstances — c'est précisément dans les moments difficiles qu'elle compte le plus." },
          moyen: { label: "Pratiques en développement", titre: "Votre exemplarité est cohérente dans les situations normales mais peut fléchir sous pression forte", desc: "Vous donnez l'exemple dans les situations ordinaires. Mais sous très forte pression opérationnelle, face à une décision collective de votre hiérarchie, lors d'une visite client importante : votre exemplarité peut encore fléchir. L'enjeu est de tenir précisément dans ces moments — c'est là qu'elle est la plus visible et la plus influente pour votre équipe." },
          haut: { label: "Réflexes installés", titre: "Votre exemplarité sécurité est absolue et constante — aucune exception selon le contexte ou les regards", desc: "Vous allez chercher vos EPI même pour une urgence avec votre équipe qui regarde. Vous maintenez votre opposition formelle dans une réunion de direction même seul·e contre la majorité. Votre comportement en sécurité est identique que vous soyez observé·e ou non. Cette constance absolue est la seule base crédible pour exiger de votre équipe ce que vous exigez d'elle." },
        },
      }, 
      {
        type: "likert",
        text: "Vous appliquez vous-même les règles de sécurité que vous demandez à votre équipe de respecter, sans exception, y compris quand personne ne vous regarde.",
        tags: ["exemplarité", "constance"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre exemplarité sécurité s'adapte encore selon le contexte, la pression ou les regards", desc: "Traverser l'atelier sans EPI parce que c'est urgent, retirer sa protection parce qu'il fait chaud, s'aligner sur la majorité quand une décision risquée est proposée : votre équipe observe et reproduit ces comportements, pas les consignes affichées. L'exemplarité managériale en sécurité ne se négocie pas selon les circonstances — c'est précisément dans les moments difficiles qu'elle compte le plus." },
          moyen: { label: "Pratiques en développement", titre: "Votre exemplarité est cohérente dans les situations normales mais peut fléchir sous pression forte", desc: "Vous donnez l'exemple dans les situations ordinaires. Mais sous très forte pression opérationnelle, face à une décision collective de votre hiérarchie, lors d'une visite client importante : votre exemplarité peut encore fléchir. L'enjeu est de tenir précisément dans ces moments — c'est là qu'elle est la plus visible et la plus influente pour votre équipe." },
          haut: { label: "Réflexes installés", titre: "Votre exemplarité sécurité est absolue et constante — aucune exception selon le contexte ou les regards", desc: "Vous allez chercher vos EPI même pour une urgence avec votre équipe qui regarde. Vous maintenez votre opposition formelle dans une réunion de direction même seul·e contre la majorité. Votre comportement en sécurité est identique que vous soyez observé·e ou non. Cette constance absolue est la seule base crédible pour exiger de votre équipe ce que vous exigez d'elle." },
        },
      }, 
      {
        type: "choix",
        text: "Il fait très chaud et vous retirez votre EPI pendant une pause dans la zone. Vos collaborateurs vous observent. Vous estimez que le risque est temporairement négligeable.",
        tags: ["exemplarité", "chaleur"],
        answers: [
          { text: "Je le retire — je suis dans une zone à faible risque à ce moment et mon confort est légitime.", score: 0 },
          { text: "Je le garde — mon équipe va reproduire ce qu'elle m'observe faire, pas ce que je dis.", score: 2 },
          { text: "Je le retire mais je précise clairement que je m'autorise quelque chose que je n'attends pas d'eux.", score: 0 },
          { text: "Je l'enlève discrètement en m'éloignant du groupe.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre exemplarité sécurité s'adapte encore selon le contexte, la pression ou les regards", desc: "Traverser l'atelier sans EPI parce que c'est urgent, retirer sa protection parce qu'il fait chaud, s'aligner sur la majorité quand une décision risquée est proposée : votre équipe observe et reproduit ces comportements, pas les consignes affichées. L'exemplarité managériale en sécurité ne se négocie pas selon les circonstances — c'est précisément dans les moments difficiles qu'elle compte le plus." },
          moyen: { label: "Pratiques en développement", titre: "Votre exemplarité est cohérente dans les situations normales mais peut fléchir sous pression forte", desc: "Vous donnez l'exemple dans les situations ordinaires. Mais sous très forte pression opérationnelle, face à une décision collective de votre hiérarchie, lors d'une visite client importante : votre exemplarité peut encore fléchir. L'enjeu est de tenir précisément dans ces moments — c'est là qu'elle est la plus visible et la plus influente pour votre équipe." },
          haut: { label: "Réflexes installés", titre: "Votre exemplarité sécurité est absolue et constante — aucune exception selon le contexte ou les regards", desc: "Vous allez chercher vos EPI même pour une urgence avec votre équipe qui regarde. Vous maintenez votre opposition formelle dans une réunion de direction même seul·e contre la majorité. Votre comportement en sécurité est identique que vous soyez observé·e ou non. Cette constance absolue est la seule base crédible pour exiger de votre équipe ce que vous exigez d'elle." },
        },
      }, 
      {
        type: "choix",
        text: "Votre équipe est sous pression pour livrer un chantier. Pour récupérer deux heures, vous pourriez sauter une vérification intermédiaire non réglementairement obligatoire mais inscrite dans votre procédure interne.",
        tags: ["exemplarité", "délai"],
        answers: [
          { text: "Je saute la vérification — ce n'est pas réglementaire et le délai compte.", score: 0 },
          { text: "Je maintiens la vérification et j'explique à ma hiérarchie pourquoi le délai ne peut pas être tenu.", score: 2 },
          { text: "Je fais une version allégée de la vérification pour trouver un équilibre.", score: 0.5 },
          { text: "Je délègue la vérification à un collaborateur pendant que je prépare la suite.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre exemplarité sécurité s'adapte encore selon le contexte, la pression ou les regards", desc: "Traverser l'atelier sans EPI parce que c'est urgent, retirer sa protection parce qu'il fait chaud, s'aligner sur la majorité quand une décision risquée est proposée : votre équipe observe et reproduit ces comportements, pas les consignes affichées. L'exemplarité managériale en sécurité ne se négocie pas selon les circonstances — c'est précisément dans les moments difficiles qu'elle compte le plus." },
          moyen: { label: "Pratiques en développement", titre: "Votre exemplarité est cohérente dans les situations normales mais peut fléchir sous pression forte", desc: "Vous donnez l'exemple dans les situations ordinaires. Mais sous très forte pression opérationnelle, face à une décision collective de votre hiérarchie, lors d'une visite client importante : votre exemplarité peut encore fléchir. L'enjeu est de tenir précisément dans ces moments — c'est là qu'elle est la plus visible et la plus influente pour votre équipe." },
          haut: { label: "Réflexes installés", titre: "Votre exemplarité sécurité est absolue et constante — aucune exception selon le contexte ou les regards", desc: "Vous allez chercher vos EPI même pour une urgence avec votre équipe qui regarde. Vous maintenez votre opposition formelle dans une réunion de direction même seul·e contre la majorité. Votre comportement en sécurité est identique que vous soyez observé·e ou non. Cette constance absolue est la seule base crédible pour exiger de votre équipe ce que vous exigez d'elle." },
        },
      }, 
      {
        type: "likert",
        text: "Lorsqu'une décision de votre direction compromet la sécurité, vous maintenez votre opposition formellement même si vous êtes seul·e contre la majorité.",
        tags: ["exemplarité", "hiérarchie"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre exemplarité sécurité s'adapte encore selon le contexte, la pression ou les regards", desc: "Traverser l'atelier sans EPI parce que c'est urgent, retirer sa protection parce qu'il fait chaud, s'aligner sur la majorité quand une décision risquée est proposée : votre équipe observe et reproduit ces comportements, pas les consignes affichées. L'exemplarité managériale en sécurité ne se négocie pas selon les circonstances — c'est précisément dans les moments difficiles qu'elle compte le plus." },
          moyen: { label: "Pratiques en développement", titre: "Votre exemplarité est cohérente dans les situations normales mais peut fléchir sous pression forte", desc: "Vous donnez l'exemple dans les situations ordinaires. Mais sous très forte pression opérationnelle, face à une décision collective de votre hiérarchie, lors d'une visite client importante : votre exemplarité peut encore fléchir. L'enjeu est de tenir précisément dans ces moments — c'est là qu'elle est la plus visible et la plus influente pour votre équipe." },
          haut: { label: "Réflexes installés", titre: "Votre exemplarité sécurité est absolue et constante — aucune exception selon le contexte ou les regards", desc: "Vous allez chercher vos EPI même pour une urgence avec votre équipe qui regarde. Vous maintenez votre opposition formelle dans une réunion de direction même seul·e contre la majorité. Votre comportement en sécurité est identique que vous soyez observé·e ou non. Cette constance absolue est la seule base crédible pour exiger de votre équipe ce que vous exigez d'elle." },
        },
      }, 
      {
        type: "choix",
        text: "Lors d'une visite d'un grand client, votre équipe allège quelques vérifications pour paraître plus efficace. Vous l'observez sans intervenir.",
        tags: ["exemplarité", "prise de parole"],
        answers: [
          { text: "Je laisse passer — c'est une visite exceptionnelle et ça ne remet pas en cause nos pratiques habituelles.", score: 0 },
          { text: "J'interviens immédiatement pour rétablir les pratiques normales, même devant le client.", score: 2 },
          { text: "Je laisse passer et j'en parle à l'équipe après la visite.", score: 0.5 },
          { text: "Je fais signe discrètement à mon équipe de revenir aux pratiques habituelles.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre exemplarité sécurité s'adapte encore selon le contexte, la pression ou les regards", desc: "Traverser l'atelier sans EPI parce que c'est urgent, retirer sa protection parce qu'il fait chaud, s'aligner sur la majorité quand une décision risquée est proposée : votre équipe observe et reproduit ces comportements, pas les consignes affichées. L'exemplarité managériale en sécurité ne se négocie pas selon les circonstances — c'est précisément dans les moments difficiles qu'elle compte le plus." },
          moyen: { label: "Pratiques en développement", titre: "Votre exemplarité est cohérente dans les situations normales mais peut fléchir sous pression forte", desc: "Vous donnez l'exemple dans les situations ordinaires. Mais sous très forte pression opérationnelle, face à une décision collective de votre hiérarchie, lors d'une visite client importante : votre exemplarité peut encore fléchir. L'enjeu est de tenir précisément dans ces moments — c'est là qu'elle est la plus visible et la plus influente pour votre équipe." },
          haut: { label: "Réflexes installés", titre: "Votre exemplarité sécurité est absolue et constante — aucune exception selon le contexte ou les regards", desc: "Vous allez chercher vos EPI même pour une urgence avec votre équipe qui regarde. Vous maintenez votre opposition formelle dans une réunion de direction même seul·e contre la majorité. Votre comportement en sécurité est identique que vous soyez observé·e ou non. Cette constance absolue est la seule base crédible pour exiger de votre équipe ce que vous exigez d'elle." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez établi une règle de sécurité dans votre équipe mais vous-même ne l'avez pas respectée lors d'une intervention récente. Un collaborateur vous le fait remarquer.",
        tags: ["exemplarité", "communication"],
        answers: [
          { text: "Je lui explique que j'avais une bonne raison — le contexte était différent.", score: 0 },
          { text: "Je reconnais l'écart et je lui confirme que la règle s'applique à moi aussi.", score: 2 },
          { text: "Je lui dis qu'il a raison sans entrer dans les détails.", score: 1 },
          { text: "Je lui demande de ne pas en faire un sujet devant l'équipe.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre exemplarité sécurité s'adapte encore selon le contexte, la pression ou les regards", desc: "Traverser l'atelier sans EPI parce que c'est urgent, retirer sa protection parce qu'il fait chaud, s'aligner sur la majorité quand une décision risquée est proposée : votre équipe observe et reproduit ces comportements, pas les consignes affichées. L'exemplarité managériale en sécurité ne se négocie pas selon les circonstances — c'est précisément dans les moments difficiles qu'elle compte le plus." },
          moyen: { label: "Pratiques en développement", titre: "Votre exemplarité est cohérente dans les situations normales mais peut fléchir sous pression forte", desc: "Vous donnez l'exemple dans les situations ordinaires. Mais sous très forte pression opérationnelle, face à une décision collective de votre hiérarchie, lors d'une visite client importante : votre exemplarité peut encore fléchir. L'enjeu est de tenir précisément dans ces moments — c'est là qu'elle est la plus visible et la plus influente pour votre équipe." },
          haut: { label: "Réflexes installés", titre: "Votre exemplarité sécurité est absolue et constante — aucune exception selon le contexte ou les regards", desc: "Vous allez chercher vos EPI même pour une urgence avec votre équipe qui regarde. Vous maintenez votre opposition formelle dans une réunion de direction même seul·e contre la majorité. Votre comportement en sécurité est identique que vous soyez observé·e ou non. Cette constance absolue est la seule base crédible pour exiger de votre équipe ce que vous exigez d'elle." },
        },
      }, 
      {
        type: "likert",
        text: "Votre comportement en matière de sécurité est identique que vous soyez observé·e par votre équipe, votre hiérarchie, ou seul·e.",
        tags: ["exemplarité", "cohérence"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre exemplarité sécurité s'adapte encore selon le contexte, la pression ou les regards", desc: "Traverser l'atelier sans EPI parce que c'est urgent, retirer sa protection parce qu'il fait chaud, s'aligner sur la majorité quand une décision risquée est proposée : votre équipe observe et reproduit ces comportements, pas les consignes affichées. L'exemplarité managériale en sécurité ne se négocie pas selon les circonstances — c'est précisément dans les moments difficiles qu'elle compte le plus." },
          moyen: { label: "Pratiques en développement", titre: "Votre exemplarité est cohérente dans les situations normales mais peut fléchir sous pression forte", desc: "Vous donnez l'exemple dans les situations ordinaires. Mais sous très forte pression opérationnelle, face à une décision collective de votre hiérarchie, lors d'une visite client importante : votre exemplarité peut encore fléchir. L'enjeu est de tenir précisément dans ces moments — c'est là qu'elle est la plus visible et la plus influente pour votre équipe." },
          haut: { label: "Réflexes installés", titre: "Votre exemplarité sécurité est absolue et constante — aucune exception selon le contexte ou les regards", desc: "Vous allez chercher vos EPI même pour une urgence avec votre équipe qui regarde. Vous maintenez votre opposition formelle dans une réunion de direction même seul·e contre la majorité. Votre comportement en sécurité est identique que vous soyez observé·e ou non. Cette constance absolue est la seule base crédible pour exiger de votre équipe ce que vous exigez d'elle." },
        },
      }, 
      {
        type: "choix",
        text: "Un nouveau collaborateur, Julien, prend ses marques dans l'équipe. Il observe que certains anciens s'autorisent des raccourcis que vous leur avez pourtant interdit formellement.",
        tags: ["exemplarité", "nouveau"],
        answers: [
          { text: "Je laisse les anciens gérer leur pratique — ils connaissent les risques réels.", score: 0 },
          { text: "Je traite l'écart des anciens de la même façon que je le ferais pour Julien.", score: 2 },
          { text: "Je rappelle la règle à Julien pour qu'il ne reproduise pas ce qu'il observe.", score: 0.5 },
          { text: "Je parle aux anciens en privé pour qu'ils fassent attention devant le nouveau.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre exemplarité sécurité s'adapte encore selon le contexte, la pression ou les regards", desc: "Traverser l'atelier sans EPI parce que c'est urgent, retirer sa protection parce qu'il fait chaud, s'aligner sur la majorité quand une décision risquée est proposée : votre équipe observe et reproduit ces comportements, pas les consignes affichées. L'exemplarité managériale en sécurité ne se négocie pas selon les circonstances — c'est précisément dans les moments difficiles qu'elle compte le plus." },
          moyen: { label: "Pratiques en développement", titre: "Votre exemplarité est cohérente dans les situations normales mais peut fléchir sous pression forte", desc: "Vous donnez l'exemple dans les situations ordinaires. Mais sous très forte pression opérationnelle, face à une décision collective de votre hiérarchie, lors d'une visite client importante : votre exemplarité peut encore fléchir. L'enjeu est de tenir précisément dans ces moments — c'est là qu'elle est la plus visible et la plus influente pour votre équipe." },
          haut: { label: "Réflexes installés", titre: "Votre exemplarité sécurité est absolue et constante — aucune exception selon le contexte ou les regards", desc: "Vous allez chercher vos EPI même pour une urgence avec votre équipe qui regarde. Vous maintenez votre opposition formelle dans une réunion de direction même seul·e contre la majorité. Votre comportement en sécurité est identique que vous soyez observé·e ou non. Cette constance absolue est la seule base crédible pour exiger de votre équipe ce que vous exigez d'elle." },
        },
      }
    ],

    1: [
      {
        type: "choix",
        text: "Laura vous signale un presqu'accident impliquant une pratique que votre équipe utilise depuis longtemps. Reconnaître ce risque va nécessiter une formation et ralentir l'activité.",
        tags: ["remontées", "réception"],
        answers: [
          { text: "Je minimise — je connais bien cette pratique et le risque est gérable.", score: 0 },
          { text: "Je remonte le signalement sans délai et je remercie Laura d'avoir eu le courage de le faire.", score: 2 },
          { text: "Je prends note pour le traiter lors du prochain point sécurité de l'équipe.", score: 1 },
          { text: "Je lui demande d'approfondir son analyse avant de remonter quoi que ce soit.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous recevez les signalements mais votre traitement n'encourage pas encore suffisamment les suivants", desc: "Minimiser un signalement parce qu'il crée des contraintes, montrer implicitement qu'un volume élevé est excessif, ne pas donner de retour visible sur les suites : ces comportements envoient à l'équipe le message que signaler est coûteux et peu utile. La culture de signalement se construit ou se détruit réponse par réponse, à chaque interaction avec un collaborateur qui remonte quelque chose." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les signalements sérieusement mais le suivi visible et la protection des signalants sont encore insuffisants", desc: "Vous recevez et traitez les signalements. Mais le retour visible sur ce qui a été fait, la protection active des collaborateurs qui ont signalé malgré une pression collective, le traitement équitable indépendamment de qui a signalé : ces dimensions du management des remontées sont encore insuffisamment développées. L'enjeu est de construire une vraie culture de signalement, pas seulement de recevoir les remontées." },
          haut: { label: "Réflexes installés", titre: "Votre management des remontées construit activement la culture de signalement de votre équipe", desc: "Vous remerciez visiblement les signalements, vous donnez un retour sur les suites, vous protégez les collaborateurs qui signalent sous pression collective, vous traitez tous les signalements avec le même sérieux. Cette façon de gérer les remontées transforme progressivement votre équipe en équipe qui signale naturellement — parce qu'elle a appris que ça sert à quelque chose et que ça ne coûte rien." },
        },
      }, 
      {
        type: "likert",
        text: "Vous remerciez visiblement les collaborateurs qui font des signalements de sécurité, même quand le signalement crée des contraintes opérationnelles.",
        tags: ["remontées", "valorisation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous recevez les signalements mais votre traitement n'encourage pas encore suffisamment les suivants", desc: "Minimiser un signalement parce qu'il crée des contraintes, montrer implicitement qu'un volume élevé est excessif, ne pas donner de retour visible sur les suites : ces comportements envoient à l'équipe le message que signaler est coûteux et peu utile. La culture de signalement se construit ou se détruit réponse par réponse, à chaque interaction avec un collaborateur qui remonte quelque chose." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les signalements sérieusement mais le suivi visible et la protection des signalants sont encore insuffisants", desc: "Vous recevez et traitez les signalements. Mais le retour visible sur ce qui a été fait, la protection active des collaborateurs qui ont signalé malgré une pression collective, le traitement équitable indépendamment de qui a signalé : ces dimensions du management des remontées sont encore insuffisamment développées. L'enjeu est de construire une vraie culture de signalement, pas seulement de recevoir les remontées." },
          haut: { label: "Réflexes installés", titre: "Votre management des remontées construit activement la culture de signalement de votre équipe", desc: "Vous remerciez visiblement les signalements, vous donnez un retour sur les suites, vous protégez les collaborateurs qui signalent sous pression collective, vous traitez tous les signalements avec le même sérieux. Cette façon de gérer les remontées transforme progressivement votre équipe en équipe qui signale naturellement — parce qu'elle a appris que ça sert à quelque chose et que ça ne coûte rien." },
        },
      }, 
      {
        type: "choix",
        text: "David vous signale fréquemment des situations à risque. Certains de ses signalements concernent des situations ordinaires. Ça prend du temps à traiter. Il revient avec un nouveau signalement.",
        tags: ["remontées", "volume"],
        answers: [
          { text: "Je lui fais remarquer que ses signalements sont souvent disproportionnés et je lui demande de mieux filtrer.", score: 0 },
          { text: "Je traite ce signalement normalement et j'explique séparément comment améliorer la précision de ses remontées.", score: 2 },
          { text: "Je traite le signalement en montrant discrètement que je trouve le volume excessif.", score: 0 },
          { text: "Je lui délègue la vérification de ses propres signalements avant de me les soumettre.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous recevez les signalements mais votre traitement n'encourage pas encore suffisamment les suivants", desc: "Minimiser un signalement parce qu'il crée des contraintes, montrer implicitement qu'un volume élevé est excessif, ne pas donner de retour visible sur les suites : ces comportements envoient à l'équipe le message que signaler est coûteux et peu utile. La culture de signalement se construit ou se détruit réponse par réponse, à chaque interaction avec un collaborateur qui remonte quelque chose." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les signalements sérieusement mais le suivi visible et la protection des signalants sont encore insuffisants", desc: "Vous recevez et traitez les signalements. Mais le retour visible sur ce qui a été fait, la protection active des collaborateurs qui ont signalé malgré une pression collective, le traitement équitable indépendamment de qui a signalé : ces dimensions du management des remontées sont encore insuffisamment développées. L'enjeu est de construire une vraie culture de signalement, pas seulement de recevoir les remontées." },
          haut: { label: "Réflexes installés", titre: "Votre management des remontées construit activement la culture de signalement de votre équipe", desc: "Vous remerciez visiblement les signalements, vous donnez un retour sur les suites, vous protégez les collaborateurs qui signalent sous pression collective, vous traitez tous les signalements avec le même sérieux. Cette façon de gérer les remontées transforme progressivement votre équipe en équipe qui signale naturellement — parce qu'elle a appris que ça sert à quelque chose et que ça ne coûte rien." },
        },
      }, 
      {
        type: "choix",
        text: "Un collaborateur vous dit qu'il hésite à signaler une situation parce qu'une remontée précédente n'a pas eu de suite visible. Il perd confiance.",
        tags: ["remontées", "suite"],
        answers: [
          { text: "Je lui dis que les signalements sont traités même si ce n'est pas toujours visible.", score: 0.5 },
          { text: "Je lui explique ce qui a été fait suite à son signalement précédent et je confirme l'importance du prochain.", score: 2 },
          { text: "Je reconnais que le suivi n'a pas été suffisant et je lui propose de faire le point ensemble.", score: 1.5 },
          { text: "Je lui demande de continuer à signaler — la confiance dans le système se construit dans le temps.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous recevez les signalements mais votre traitement n'encourage pas encore suffisamment les suivants", desc: "Minimiser un signalement parce qu'il crée des contraintes, montrer implicitement qu'un volume élevé est excessif, ne pas donner de retour visible sur les suites : ces comportements envoient à l'équipe le message que signaler est coûteux et peu utile. La culture de signalement se construit ou se détruit réponse par réponse, à chaque interaction avec un collaborateur qui remonte quelque chose." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les signalements sérieusement mais le suivi visible et la protection des signalants sont encore insuffisants", desc: "Vous recevez et traitez les signalements. Mais le retour visible sur ce qui a été fait, la protection active des collaborateurs qui ont signalé malgré une pression collective, le traitement équitable indépendamment de qui a signalé : ces dimensions du management des remontées sont encore insuffisamment développées. L'enjeu est de construire une vraie culture de signalement, pas seulement de recevoir les remontées." },
          haut: { label: "Réflexes installés", titre: "Votre management des remontées construit activement la culture de signalement de votre équipe", desc: "Vous remerciez visiblement les signalements, vous donnez un retour sur les suites, vous protégez les collaborateurs qui signalent sous pression collective, vous traitez tous les signalements avec le même sérieux. Cette façon de gérer les remontées transforme progressivement votre équipe en équipe qui signale naturellement — parce qu'elle a appris que ça sert à quelque chose et que ça ne coûte rien." },
        },
      }, 
      {
        type: "choix",
        text: "Un collaborateur vous signale un écart de sécurité commis par un collègue plus ancien. Il craint des représailles de la part du groupe.",
        tags: ["remontées", "protection"],
        answers: [
          { text: "Je lui dis que les représailles ne font pas partie de notre culture — il peut signaler sans risque.", score: 1 },
          { text: "Je le rassure sur ma protection et je traite le signalement sans exposer sa source inutilement.", score: 2 },
          { text: "Je lui conseille de signaler anonymement pour se protéger.", score: 1 },
          { text: "Je traite moi-même l'écart sans mentionner le signalement.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous recevez les signalements mais votre traitement n'encourage pas encore suffisamment les suivants", desc: "Minimiser un signalement parce qu'il crée des contraintes, montrer implicitement qu'un volume élevé est excessif, ne pas donner de retour visible sur les suites : ces comportements envoient à l'équipe le message que signaler est coûteux et peu utile. La culture de signalement se construit ou se détruit réponse par réponse, à chaque interaction avec un collaborateur qui remonte quelque chose." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les signalements sérieusement mais le suivi visible et la protection des signalants sont encore insuffisants", desc: "Vous recevez et traitez les signalements. Mais le retour visible sur ce qui a été fait, la protection active des collaborateurs qui ont signalé malgré une pression collective, le traitement équitable indépendamment de qui a signalé : ces dimensions du management des remontées sont encore insuffisamment développées. L'enjeu est de construire une vraie culture de signalement, pas seulement de recevoir les remontées." },
          haut: { label: "Réflexes installés", titre: "Votre management des remontées construit activement la culture de signalement de votre équipe", desc: "Vous remerciez visiblement les signalements, vous donnez un retour sur les suites, vous protégez les collaborateurs qui signalent sous pression collective, vous traitez tous les signalements avec le même sérieux. Cette façon de gérer les remontées transforme progressivement votre équipe en équipe qui signale naturellement — parce qu'elle a appris que ça sert à quelque chose et que ça ne coûte rien." },
        },
      }, 
      {
        type: "likert",
        text: "Vous donnez un retour visible à vos collaborateurs sur ce qui a été fait suite à leurs signalements sécurité.",
        tags: ["remontées", "retour"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous recevez les signalements mais votre traitement n'encourage pas encore suffisamment les suivants", desc: "Minimiser un signalement parce qu'il crée des contraintes, montrer implicitement qu'un volume élevé est excessif, ne pas donner de retour visible sur les suites : ces comportements envoient à l'équipe le message que signaler est coûteux et peu utile. La culture de signalement se construit ou se détruit réponse par réponse, à chaque interaction avec un collaborateur qui remonte quelque chose." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les signalements sérieusement mais le suivi visible et la protection des signalants sont encore insuffisants", desc: "Vous recevez et traitez les signalements. Mais le retour visible sur ce qui a été fait, la protection active des collaborateurs qui ont signalé malgré une pression collective, le traitement équitable indépendamment de qui a signalé : ces dimensions du management des remontées sont encore insuffisamment développées. L'enjeu est de construire une vraie culture de signalement, pas seulement de recevoir les remontées." },
          haut: { label: "Réflexes installés", titre: "Votre management des remontées construit activement la culture de signalement de votre équipe", desc: "Vous remerciez visiblement les signalements, vous donnez un retour sur les suites, vous protégez les collaborateurs qui signalent sous pression collective, vous traitez tous les signalements avec le même sérieux. Cette façon de gérer les remontées transforme progressivement votre équipe en équipe qui signale naturellement — parce qu'elle a appris que ça sert à quelque chose et que ça ne coûte rien." },
        },
      }, 
      {
        type: "choix",
        text: "Votre responsable vous demande de 'calmer' les signalements de votre équipe qui sont 'trop nombreux' et 'créent de l'inquiétude inutile'. Vous avez une équipe qui signale bien.",
        tags: ["remontées", "hiérarchie"],
        answers: [
          { text: "Je demande à mon équipe de mieux filtrer ses signalements — mon responsable a ses raisons.", score: 0 },
          { text: "Je lui explique que le volume de signalements est un indicateur positif de culture sécurité.", score: 2 },
          { text: "Je lui demande ce qu'il entend par 'trop nombreux' avant de décider quoi faire.", score: 1.5 },
          { text: "Je m'aligne sans en parler à mon équipe — c'est une question de management interne.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous recevez les signalements mais votre traitement n'encourage pas encore suffisamment les suivants", desc: "Minimiser un signalement parce qu'il crée des contraintes, montrer implicitement qu'un volume élevé est excessif, ne pas donner de retour visible sur les suites : ces comportements envoient à l'équipe le message que signaler est coûteux et peu utile. La culture de signalement se construit ou se détruit réponse par réponse, à chaque interaction avec un collaborateur qui remonte quelque chose." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les signalements sérieusement mais le suivi visible et la protection des signalants sont encore insuffisants", desc: "Vous recevez et traitez les signalements. Mais le retour visible sur ce qui a été fait, la protection active des collaborateurs qui ont signalé malgré une pression collective, le traitement équitable indépendamment de qui a signalé : ces dimensions du management des remontées sont encore insuffisamment développées. L'enjeu est de construire une vraie culture de signalement, pas seulement de recevoir les remontées." },
          haut: { label: "Réflexes installés", titre: "Votre management des remontées construit activement la culture de signalement de votre équipe", desc: "Vous remerciez visiblement les signalements, vous donnez un retour sur les suites, vous protégez les collaborateurs qui signalent sous pression collective, vous traitez tous les signalements avec le même sérieux. Cette façon de gérer les remontées transforme progressivement votre équipe en équipe qui signale naturellement — parce qu'elle a appris que ça sert à quelque chose et que ça ne coûte rien." },
        },
      }, 
      {
        type: "choix",
        text: "Un signalement de sécurité vient d'un collaborateur qui a tendance à exagérer. Le contenu vous semble peu crédible. Vous avez d'autres priorités ce matin.",
        tags: ["remontées", "biais"],
        answers: [
          { text: "Je le mets de côté pour plus tard — sa tendance à exagérer suggère que ce n'est pas urgent.", score: 0 },
          { text: "Je traite le signalement sur les faits, indépendamment de qui l'a fait.", score: 2 },
          { text: "Je lui demande des précisions avant de décider si ça mérite traitement.", score: 1 },
          { text: "Je délègue la vérification à un autre collaborateur.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous recevez les signalements mais votre traitement n'encourage pas encore suffisamment les suivants", desc: "Minimiser un signalement parce qu'il crée des contraintes, montrer implicitement qu'un volume élevé est excessif, ne pas donner de retour visible sur les suites : ces comportements envoient à l'équipe le message que signaler est coûteux et peu utile. La culture de signalement se construit ou se détruit réponse par réponse, à chaque interaction avec un collaborateur qui remonte quelque chose." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les signalements sérieusement mais le suivi visible et la protection des signalants sont encore insuffisants", desc: "Vous recevez et traitez les signalements. Mais le retour visible sur ce qui a été fait, la protection active des collaborateurs qui ont signalé malgré une pression collective, le traitement équitable indépendamment de qui a signalé : ces dimensions du management des remontées sont encore insuffisamment développées. L'enjeu est de construire une vraie culture de signalement, pas seulement de recevoir les remontées." },
          haut: { label: "Réflexes installés", titre: "Votre management des remontées construit activement la culture de signalement de votre équipe", desc: "Vous remerciez visiblement les signalements, vous donnez un retour sur les suites, vous protégez les collaborateurs qui signalent sous pression collective, vous traitez tous les signalements avec le même sérieux. Cette façon de gérer les remontées transforme progressivement votre équipe en équipe qui signale naturellement — parce qu'elle a appris que ça sert à quelque chose et que ça ne coûte rien." },
        },
      }, 
      {
        type: "likert",
        text: "Vous traitez tous les signalements de sécurité avec le même sérieux, quelle que soit la personne qui les fait.",
        tags: ["remontées", "équité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous recevez les signalements mais votre traitement n'encourage pas encore suffisamment les suivants", desc: "Minimiser un signalement parce qu'il crée des contraintes, montrer implicitement qu'un volume élevé est excessif, ne pas donner de retour visible sur les suites : ces comportements envoient à l'équipe le message que signaler est coûteux et peu utile. La culture de signalement se construit ou se détruit réponse par réponse, à chaque interaction avec un collaborateur qui remonte quelque chose." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les signalements sérieusement mais le suivi visible et la protection des signalants sont encore insuffisants", desc: "Vous recevez et traitez les signalements. Mais le retour visible sur ce qui a été fait, la protection active des collaborateurs qui ont signalé malgré une pression collective, le traitement équitable indépendamment de qui a signalé : ces dimensions du management des remontées sont encore insuffisamment développées. L'enjeu est de construire une vraie culture de signalement, pas seulement de recevoir les remontées." },
          haut: { label: "Réflexes installés", titre: "Votre management des remontées construit activement la culture de signalement de votre équipe", desc: "Vous remerciez visiblement les signalements, vous donnez un retour sur les suites, vous protégez les collaborateurs qui signalent sous pression collective, vous traitez tous les signalements avec le même sérieux. Cette façon de gérer les remontées transforme progressivement votre équipe en équipe qui signale naturellement — parce qu'elle a appris que ça sert à quelque chose et que ça ne coûte rien." },
        },
      }, 
      {
        type: "choix",
        text: "Un REX sur un presqu'accident révèle que plusieurs membres de votre équipe savaient depuis des semaines que la situation était risquée mais n'ont pas signalé.",
        tags: ["remontées", "REX"],
        answers: [
          { text: "Je comprends — le système de signalement est complexe et les gens ont peur des conséquences.", score: 0.5 },
          { text: "Je cherche à comprendre pourquoi ils n'ont pas signalé avant d'envisager toute autre action.", score: 2 },
          { text: "Je rappelle les règles de signalement à l'ensemble de l'équipe.", score: 1 },
          { text: "Je recadre individuellement les personnes qui n'ont pas signalé.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous recevez les signalements mais votre traitement n'encourage pas encore suffisamment les suivants", desc: "Minimiser un signalement parce qu'il crée des contraintes, montrer implicitement qu'un volume élevé est excessif, ne pas donner de retour visible sur les suites : ces comportements envoient à l'équipe le message que signaler est coûteux et peu utile. La culture de signalement se construit ou se détruit réponse par réponse, à chaque interaction avec un collaborateur qui remonte quelque chose." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les signalements sérieusement mais le suivi visible et la protection des signalants sont encore insuffisants", desc: "Vous recevez et traitez les signalements. Mais le retour visible sur ce qui a été fait, la protection active des collaborateurs qui ont signalé malgré une pression collective, le traitement équitable indépendamment de qui a signalé : ces dimensions du management des remontées sont encore insuffisamment développées. L'enjeu est de construire une vraie culture de signalement, pas seulement de recevoir les remontées." },
          haut: { label: "Réflexes installés", titre: "Votre management des remontées construit activement la culture de signalement de votre équipe", desc: "Vous remerciez visiblement les signalements, vous donnez un retour sur les suites, vous protégez les collaborateurs qui signalent sous pression collective, vous traitez tous les signalements avec le même sérieux. Cette façon de gérer les remontées transforme progressivement votre équipe en équipe qui signale naturellement — parce qu'elle a appris que ça sert à quelque chose et que ça ne coûte rien." },
        },
      }
    ],

    2: [
      {
        type: "choix",
        text: "Vous observez un collaborateur, Rayan, qui prend un raccourci sur une procédure de sécurité. C'est la première fois que vous le voyez faire ça. Plusieurs collègues sont présents.",
        tags: ["écart", "intervention"],
        answers: [
          { text: "Je le reprends immédiatement devant tout le monde — la règle s'applique à tous.", score: 0 },
          { text: "Je lui parle en privé après pour comprendre pourquoi et corriger sans humilier.", score: 2 },
          { text: "Je lui fais signe discrètement pour qu'il corrige sans que les autres voient.", score: 1.5 },
          { text: "Je laisse passer cette fois — c'est la première et il va probablement se corriger seul.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous traitez les écarts de façon inégale selon la personne concernée ou la pression du moment", desc: "Ne pas intervenir sur le meilleur élément qui prend des raccourcis, laisser passer un prestataire parce que la relation est stratégique, recadrer plus sévèrement les moins expérimentés : l'inégalité dans le traitement des écarts détruit la crédibilité des exigences sécurité. La règle qui ne s'applique qu'à certains n'est plus une règle." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les écarts régulièrement mais votre approche reste encore principalement corrective", desc: "Vous intervenez sur les écarts quand vous les observez. Mais intervenir différemment selon que c'est le meilleur élément ou un nouveau, comprendre la cause d'une récidive avant d'escalader, traiter un écart collectif en impliquant l'équipe : ces dimensions plus nuancées du traitement des écarts sont encore en développement. L'enjeu est de passer d'une approche corrective à une approche qui prévient la récidive." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les écarts de façon équitable, pédagogique et en cherchant les causes de fond", desc: "Vous intervenez sur le meilleur élément exactement comme sur le moins expérimenté. Vous cherchez la cause d'une récidive avant d'escalader. Vous impliquez l'équipe dans la correction d'un écart collectif. Et vous expliquez le risque derrière la règle plutôt que de vous appuyer sur l'autorité de la procédure. Ce management des écarts — équitable, pédagogique et orienté causes — est ce qui ancre durablement les comportements sécurité." },
        },
      }, 
      {
        type: "likert",
        text: "Vous traitez les écarts de sécurité que vous observez rapidement, sans attendre qu'ils se reproduisent ou qu'un incident survienne.",
        tags: ["écart", "timing"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous traitez les écarts de façon inégale selon la personne concernée ou la pression du moment", desc: "Ne pas intervenir sur le meilleur élément qui prend des raccourcis, laisser passer un prestataire parce que la relation est stratégique, recadrer plus sévèrement les moins expérimentés : l'inégalité dans le traitement des écarts détruit la crédibilité des exigences sécurité. La règle qui ne s'applique qu'à certains n'est plus une règle." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les écarts régulièrement mais votre approche reste encore principalement corrective", desc: "Vous intervenez sur les écarts quand vous les observez. Mais intervenir différemment selon que c'est le meilleur élément ou un nouveau, comprendre la cause d'une récidive avant d'escalader, traiter un écart collectif en impliquant l'équipe : ces dimensions plus nuancées du traitement des écarts sont encore en développement. L'enjeu est de passer d'une approche corrective à une approche qui prévient la récidive." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les écarts de façon équitable, pédagogique et en cherchant les causes de fond", desc: "Vous intervenez sur le meilleur élément exactement comme sur le moins expérimenté. Vous cherchez la cause d'une récidive avant d'escalader. Vous impliquez l'équipe dans la correction d'un écart collectif. Et vous expliquez le risque derrière la règle plutôt que de vous appuyer sur l'autorité de la procédure. Ce management des écarts — équitable, pédagogique et orienté causes — est ce qui ancre durablement les comportements sécurité." },
        },
      }, 
      {
        type: "choix",
        text: "Un collaborateur que vous avez déjà repris sur un écart de sécurité recommence. C'est la troisième fois en deux mois.",
        tags: ["écart", "récidive"],
        answers: [
          { text: "Je le reprends à nouveau de la même façon — la répétition finira par porter ses fruits.", score: 0.5 },
          { text: "Je cherche à comprendre ce qui empêche la correction durable avant de décider comment escalader.", score: 2 },
          { text: "J'escalade directement aux RH — la répétition justifie une procédure formelle.", score: 0.5 },
          { text: "Je renforce la supervision sur ce collaborateur pour éviter que ça se reproduise.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous traitez les écarts de façon inégale selon la personne concernée ou la pression du moment", desc: "Ne pas intervenir sur le meilleur élément qui prend des raccourcis, laisser passer un prestataire parce que la relation est stratégique, recadrer plus sévèrement les moins expérimentés : l'inégalité dans le traitement des écarts détruit la crédibilité des exigences sécurité. La règle qui ne s'applique qu'à certains n'est plus une règle." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les écarts régulièrement mais votre approche reste encore principalement corrective", desc: "Vous intervenez sur les écarts quand vous les observez. Mais intervenir différemment selon que c'est le meilleur élément ou un nouveau, comprendre la cause d'une récidive avant d'escalader, traiter un écart collectif en impliquant l'équipe : ces dimensions plus nuancées du traitement des écarts sont encore en développement. L'enjeu est de passer d'une approche corrective à une approche qui prévient la récidive." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les écarts de façon équitable, pédagogique et en cherchant les causes de fond", desc: "Vous intervenez sur le meilleur élément exactement comme sur le moins expérimenté. Vous cherchez la cause d'une récidive avant d'escalader. Vous impliquez l'équipe dans la correction d'un écart collectif. Et vous expliquez le risque derrière la règle plutôt que de vous appuyer sur l'autorité de la procédure. Ce management des écarts — équitable, pédagogique et orienté causes — est ce qui ancre durablement les comportements sécurité." },
        },
      }, 
      {
        type: "choix",
        text: "Vous réalisez que toute votre équipe a progressivement adopté une pratique déviante — personne ne l'a décidé, c'est arrivé progressivement. Aucun incident n'est survenu.",
        tags: ["écart", "collectif"],
        answers: [
          { text: "Je laisse — si tout le monde fait comme ça et qu'il n'y a pas d'incident, c'est que la procédure est inadaptée.", score: 0 },
          { text: "Je traite l'écart collectif et j'implique l'équipe dans la recherche d'une solution durable.", score: 2 },
          { text: "Je remets la procédure en place et j'explique pourquoi l'écart est dangereux.", score: 1.5 },
          { text: "Je remonte la situation à ma hiérarchie pour qu'elle décide si la procédure doit être modifiée.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous traitez les écarts de façon inégale selon la personne concernée ou la pression du moment", desc: "Ne pas intervenir sur le meilleur élément qui prend des raccourcis, laisser passer un prestataire parce que la relation est stratégique, recadrer plus sévèrement les moins expérimentés : l'inégalité dans le traitement des écarts détruit la crédibilité des exigences sécurité. La règle qui ne s'applique qu'à certains n'est plus une règle." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les écarts régulièrement mais votre approche reste encore principalement corrective", desc: "Vous intervenez sur les écarts quand vous les observez. Mais intervenir différemment selon que c'est le meilleur élément ou un nouveau, comprendre la cause d'une récidive avant d'escalader, traiter un écart collectif en impliquant l'équipe : ces dimensions plus nuancées du traitement des écarts sont encore en développement. L'enjeu est de passer d'une approche corrective à une approche qui prévient la récidive." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les écarts de façon équitable, pédagogique et en cherchant les causes de fond", desc: "Vous intervenez sur le meilleur élément exactement comme sur le moins expérimenté. Vous cherchez la cause d'une récidive avant d'escalader. Vous impliquez l'équipe dans la correction d'un écart collectif. Et vous expliquez le risque derrière la règle plutôt que de vous appuyer sur l'autorité de la procédure. Ce management des écarts — équitable, pédagogique et orienté causes — est ce qui ancre durablement les comportements sécurité." },
        },
      }, 
      {
        type: "choix",
        text: "Votre meilleur collaborateur, Élodie, prend régulièrement des raccourcis sur la sécurité. Sa productivité est exceptionnelle et l'équipe l'admire. Vous hésitez à intervenir.",
        tags: ["écart", "performance"],
        answers: [
          { text: "Je ne dis rien — son impact global positif est bien supérieur aux risques de ses raccourcis.", score: 0 },
          { text: "Je lui parle exactement comme je le ferais avec n'importe qui d'autre.", score: 2 },
          { text: "Je lui en parle en privé en valorisant sa performance mais en maintenant l'exigence.", score: 2 },
          { text: "Je lui demande d'être plus discret dans ses raccourcis pour ne pas donner le mauvais exemple.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous traitez les écarts de façon inégale selon la personne concernée ou la pression du moment", desc: "Ne pas intervenir sur le meilleur élément qui prend des raccourcis, laisser passer un prestataire parce que la relation est stratégique, recadrer plus sévèrement les moins expérimentés : l'inégalité dans le traitement des écarts détruit la crédibilité des exigences sécurité. La règle qui ne s'applique qu'à certains n'est plus une règle." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les écarts régulièrement mais votre approche reste encore principalement corrective", desc: "Vous intervenez sur les écarts quand vous les observez. Mais intervenir différemment selon que c'est le meilleur élément ou un nouveau, comprendre la cause d'une récidive avant d'escalader, traiter un écart collectif en impliquant l'équipe : ces dimensions plus nuancées du traitement des écarts sont encore en développement. L'enjeu est de passer d'une approche corrective à une approche qui prévient la récidive." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les écarts de façon équitable, pédagogique et en cherchant les causes de fond", desc: "Vous intervenez sur le meilleur élément exactement comme sur le moins expérimenté. Vous cherchez la cause d'une récidive avant d'escalader. Vous impliquez l'équipe dans la correction d'un écart collectif. Et vous expliquez le risque derrière la règle plutôt que de vous appuyer sur l'autorité de la procédure. Ce management des écarts — équitable, pédagogique et orienté causes — est ce qui ancre durablement les comportements sécurité." },
        },
      }, 
      {
        type: "likert",
        text: "Vous traitez les écarts de sécurité de la même façon quelle que soit la personne concernée — meilleur élément, ancien, nouveau, peu importe.",
        tags: ["écart", "équité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous traitez les écarts de façon inégale selon la personne concernée ou la pression du moment", desc: "Ne pas intervenir sur le meilleur élément qui prend des raccourcis, laisser passer un prestataire parce que la relation est stratégique, recadrer plus sévèrement les moins expérimentés : l'inégalité dans le traitement des écarts détruit la crédibilité des exigences sécurité. La règle qui ne s'applique qu'à certains n'est plus une règle." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les écarts régulièrement mais votre approche reste encore principalement corrective", desc: "Vous intervenez sur les écarts quand vous les observez. Mais intervenir différemment selon que c'est le meilleur élément ou un nouveau, comprendre la cause d'une récidive avant d'escalader, traiter un écart collectif en impliquant l'équipe : ces dimensions plus nuancées du traitement des écarts sont encore en développement. L'enjeu est de passer d'une approche corrective à une approche qui prévient la récidive." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les écarts de façon équitable, pédagogique et en cherchant les causes de fond", desc: "Vous intervenez sur le meilleur élément exactement comme sur le moins expérimenté. Vous cherchez la cause d'une récidive avant d'escalader. Vous impliquez l'équipe dans la correction d'un écart collectif. Et vous expliquez le risque derrière la règle plutôt que de vous appuyer sur l'autorité de la procédure. Ce management des écarts — équitable, pédagogique et orienté causes — est ce qui ancre durablement les comportements sécurité." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez repris un collaborateur sur un écart. Il vous explique que la procédure est inadaptée au contexte réel — son argument tient la route.",
        tags: ["écart", "compréhension"],
        answers: [
          { text: "Je maintiens la procédure en attendant qu'elle soit officiellement modifiée.", score: 2 },
          { text: "Je lui accorde une dérogation provisoire en attendant de modifier la procédure.", score: 0 },
          { text: "Je remonte son argument à ma hiérarchie tout en maintenant la procédure en attendant.", score: 2 },
          { text: "Je lui dis d'appliquer la procédure et de faire remonter son observation par le bon canal.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous traitez les écarts de façon inégale selon la personne concernée ou la pression du moment", desc: "Ne pas intervenir sur le meilleur élément qui prend des raccourcis, laisser passer un prestataire parce que la relation est stratégique, recadrer plus sévèrement les moins expérimentés : l'inégalité dans le traitement des écarts détruit la crédibilité des exigences sécurité. La règle qui ne s'applique qu'à certains n'est plus une règle." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les écarts régulièrement mais votre approche reste encore principalement corrective", desc: "Vous intervenez sur les écarts quand vous les observez. Mais intervenir différemment selon que c'est le meilleur élément ou un nouveau, comprendre la cause d'une récidive avant d'escalader, traiter un écart collectif en impliquant l'équipe : ces dimensions plus nuancées du traitement des écarts sont encore en développement. L'enjeu est de passer d'une approche corrective à une approche qui prévient la récidive." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les écarts de façon équitable, pédagogique et en cherchant les causes de fond", desc: "Vous intervenez sur le meilleur élément exactement comme sur le moins expérimenté. Vous cherchez la cause d'une récidive avant d'escalader. Vous impliquez l'équipe dans la correction d'un écart collectif. Et vous expliquez le risque derrière la règle plutôt que de vous appuyer sur l'autorité de la procédure. Ce management des écarts — équitable, pédagogique et orienté causes — est ce qui ancre durablement les comportements sécurité." },
        },
      }, 
      {
        type: "choix",
        text: "Après avoir traité un écart de sécurité, vous constatez que l'ambiance s'est refroidie dans l'équipe. Certains semblent avoir peur de faire des erreurs.",
        tags: ["écart", "peur"],
        answers: [
          { text: "C'est normal après un recadrage — ça se détendra dans quelques jours.", score: 0.5 },
          { text: "Je prends le temps d'expliquer la différence entre traiter un écart et punir une personne.", score: 2 },
          { text: "Je renforce les moments positifs pour compenser le refroidissement.", score: 1 },
          { text: "Je laisse passer — la peur de faire des erreurs n'est pas forcément mauvaise en sécurité.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous traitez les écarts de façon inégale selon la personne concernée ou la pression du moment", desc: "Ne pas intervenir sur le meilleur élément qui prend des raccourcis, laisser passer un prestataire parce que la relation est stratégique, recadrer plus sévèrement les moins expérimentés : l'inégalité dans le traitement des écarts détruit la crédibilité des exigences sécurité. La règle qui ne s'applique qu'à certains n'est plus une règle." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les écarts régulièrement mais votre approche reste encore principalement corrective", desc: "Vous intervenez sur les écarts quand vous les observez. Mais intervenir différemment selon que c'est le meilleur élément ou un nouveau, comprendre la cause d'une récidive avant d'escalader, traiter un écart collectif en impliquant l'équipe : ces dimensions plus nuancées du traitement des écarts sont encore en développement. L'enjeu est de passer d'une approche corrective à une approche qui prévient la récidive." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les écarts de façon équitable, pédagogique et en cherchant les causes de fond", desc: "Vous intervenez sur le meilleur élément exactement comme sur le moins expérimenté. Vous cherchez la cause d'une récidive avant d'escalader. Vous impliquez l'équipe dans la correction d'un écart collectif. Et vous expliquez le risque derrière la règle plutôt que de vous appuyer sur l'autorité de la procédure. Ce management des écarts — équitable, pédagogique et orienté causes — est ce qui ancre durablement les comportements sécurité." },
        },
      }, 
      {
        type: "likert",
        text: "Quand vous traitez un écart de sécurité, vous expliquez le risque derrière la règle plutôt que de vous appuyer uniquement sur l'autorité de la procédure.",
        tags: ["écart", "pédagogie"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous traitez les écarts de façon inégale selon la personne concernée ou la pression du moment", desc: "Ne pas intervenir sur le meilleur élément qui prend des raccourcis, laisser passer un prestataire parce que la relation est stratégique, recadrer plus sévèrement les moins expérimentés : l'inégalité dans le traitement des écarts détruit la crédibilité des exigences sécurité. La règle qui ne s'applique qu'à certains n'est plus une règle." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les écarts régulièrement mais votre approche reste encore principalement corrective", desc: "Vous intervenez sur les écarts quand vous les observez. Mais intervenir différemment selon que c'est le meilleur élément ou un nouveau, comprendre la cause d'une récidive avant d'escalader, traiter un écart collectif en impliquant l'équipe : ces dimensions plus nuancées du traitement des écarts sont encore en développement. L'enjeu est de passer d'une approche corrective à une approche qui prévient la récidive." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les écarts de façon équitable, pédagogique et en cherchant les causes de fond", desc: "Vous intervenez sur le meilleur élément exactement comme sur le moins expérimenté. Vous cherchez la cause d'une récidive avant d'escalader. Vous impliquez l'équipe dans la correction d'un écart collectif. Et vous expliquez le risque derrière la règle plutôt que de vous appuyer sur l'autorité de la procédure. Ce management des écarts — équitable, pédagogique et orienté causes — est ce qui ancre durablement les comportements sécurité." },
        },
      }, 
      {
        type: "choix",
        text: "Un prestataire important prend régulièrement des libertés avec les règles de sécurité de votre site. La relation commerciale est stratégique et votre responsable préfère ne pas créer de tension.",
        tags: ["écart", "prestataire"],
        answers: [
          { text: "Je laisse — mon responsable a arbitré et la relation commerciale prime.", score: 0 },
          { text: "J'interviens sur les écarts du prestataire comme je le ferais pour mes propres équipes.", score: 2 },
          { text: "Je lui signale les écarts mais sans aller jusqu'à stopper son intervention.", score: 1 },
          { text: "Je documente les écarts pour me couvrir en cas d'incident.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous traitez les écarts de façon inégale selon la personne concernée ou la pression du moment", desc: "Ne pas intervenir sur le meilleur élément qui prend des raccourcis, laisser passer un prestataire parce que la relation est stratégique, recadrer plus sévèrement les moins expérimentés : l'inégalité dans le traitement des écarts détruit la crédibilité des exigences sécurité. La règle qui ne s'applique qu'à certains n'est plus une règle." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les écarts régulièrement mais votre approche reste encore principalement corrective", desc: "Vous intervenez sur les écarts quand vous les observez. Mais intervenir différemment selon que c'est le meilleur élément ou un nouveau, comprendre la cause d'une récidive avant d'escalader, traiter un écart collectif en impliquant l'équipe : ces dimensions plus nuancées du traitement des écarts sont encore en développement. L'enjeu est de passer d'une approche corrective à une approche qui prévient la récidive." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les écarts de façon équitable, pédagogique et en cherchant les causes de fond", desc: "Vous intervenez sur le meilleur élément exactement comme sur le moins expérimenté. Vous cherchez la cause d'une récidive avant d'escalader. Vous impliquez l'équipe dans la correction d'un écart collectif. Et vous expliquez le risque derrière la règle plutôt que de vous appuyer sur l'autorité de la procédure. Ce management des écarts — équitable, pédagogique et orienté causes — est ce qui ancre durablement les comportements sécurité." },
        },
      }
    ],

    3: [
      {
        type: "choix",
        text: "Un client stratégique menace de rompre le contrat si la livraison n'est pas faite dans les délais. Respecter la procédure de sécurité implique un retard de deux jours. Votre direction vous dit de 'trouver une solution'.",
        tags: ["pression", "délai"],
        answers: [
          { text: "Je cherche un contournement de la procédure — la relation client doit être préservée.", score: 0 },
          { text: "Je maintiens la procédure et j'aide ma direction à expliquer les contraintes réelles au client.", score: 2 },
          { text: "Je tente de compresser la procédure sans en supprimer les étapes critiques.", score: 0.5 },
          { text: "Je remonte la situation par écrit à ma direction en documentant le dilemme.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre cap sécurité cède encore sous la pression opérationnelle, commerciale ou hiérarchique", desc: "Contourner une procédure sous pression client, autoriser les opérations solo faute d'effectifs, réduire les ressources sécurité après un bon bilan : ces décisions semblent pragmatiques à court terme mais construisent les conditions des accidents à venir. La pression opérationnelle n'est pas une circonstance atténuante — elle est souvent la cause identifiée dans les accidents industriels graves." },
          moyen: { label: "Pratiques en développement", titre: "Vous tenez le cap sécurité dans les pressions modérées mais vous absorbez encore les pressions fortes seul·e", desc: "Vous maintenez le cap sécurité dans la plupart des situations. Mais quand la pression vient simultanément du client, de la direction et des délais, ou quand la restructuration distrait l'équipe : vous pouvez encore absorber seul·e une pression que vous devriez rendre visible. L'enjeu est d'escalader systématiquement les situations où la sécurité et la performance sont en tension." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez le cap sécurité sous toutes les pressions et vous rendez les dilemmes visibles à votre hiérarchie", desc: "Vous ne contournez pas les procédures sous pression client, vous refusez les opérations solo qui l'interdisent même sous-effectif, et vous rendez visible à votre hiérarchie le dilemme quand sécurité et performance entrent en tension. Vous renforcez votre vigilance dans les périodes difficiles plutôt que de l'alléger. C'est cette posture — ferme, cohérente et visible — qui donne à votre management sécurité sa crédibilité dans la durée." },
        },
      }, 
      {
        type: "likert",
        text: "Vous maintenez les exigences de sécurité de votre équipe face aux pressions de délai et de performance, même quand ça vous met en difficulté avec votre hiérarchie.",
        tags: ["pression", "fermeté"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre cap sécurité cède encore sous la pression opérationnelle, commerciale ou hiérarchique", desc: "Contourner une procédure sous pression client, autoriser les opérations solo faute d'effectifs, réduire les ressources sécurité après un bon bilan : ces décisions semblent pragmatiques à court terme mais construisent les conditions des accidents à venir. La pression opérationnelle n'est pas une circonstance atténuante — elle est souvent la cause identifiée dans les accidents industriels graves." },
          moyen: { label: "Pratiques en développement", titre: "Vous tenez le cap sécurité dans les pressions modérées mais vous absorbez encore les pressions fortes seul·e", desc: "Vous maintenez le cap sécurité dans la plupart des situations. Mais quand la pression vient simultanément du client, de la direction et des délais, ou quand la restructuration distrait l'équipe : vous pouvez encore absorber seul·e une pression que vous devriez rendre visible. L'enjeu est d'escalader systématiquement les situations où la sécurité et la performance sont en tension." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez le cap sécurité sous toutes les pressions et vous rendez les dilemmes visibles à votre hiérarchie", desc: "Vous ne contournez pas les procédures sous pression client, vous refusez les opérations solo qui l'interdisent même sous-effectif, et vous rendez visible à votre hiérarchie le dilemme quand sécurité et performance entrent en tension. Vous renforcez votre vigilance dans les périodes difficiles plutôt que de l'alléger. C'est cette posture — ferme, cohérente et visible — qui donne à votre management sécurité sa crédibilité dans la durée." },
        },
      }, 
      {
        type: "choix",
        text: "Votre équipe est en sous-effectif. Pour tenir le planning, des opérations normalement réalisées à deux devront être faites seul. Vos collaborateurs sont prêts à le faire.",
        tags: ["pression", "sous-effectif"],
        answers: [
          { text: "J'autorise — ils sont compétents et le sous-effectif est temporaire.", score: 0 },
          { text: "Je refuse les opérations qui requièrent impérativement deux personnes et je réorganise les priorités.", score: 2 },
          { text: "J'autorise avec des mesures de compensation — supervision accrue, check intermédiaire.", score: 0.5 },
          { text: "Je remonte le problème à ma hiérarchie pour qu'elle arbitre.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre cap sécurité cède encore sous la pression opérationnelle, commerciale ou hiérarchique", desc: "Contourner une procédure sous pression client, autoriser les opérations solo faute d'effectifs, réduire les ressources sécurité après un bon bilan : ces décisions semblent pragmatiques à court terme mais construisent les conditions des accidents à venir. La pression opérationnelle n'est pas une circonstance atténuante — elle est souvent la cause identifiée dans les accidents industriels graves." },
          moyen: { label: "Pratiques en développement", titre: "Vous tenez le cap sécurité dans les pressions modérées mais vous absorbez encore les pressions fortes seul·e", desc: "Vous maintenez le cap sécurité dans la plupart des situations. Mais quand la pression vient simultanément du client, de la direction et des délais, ou quand la restructuration distrait l'équipe : vous pouvez encore absorber seul·e une pression que vous devriez rendre visible. L'enjeu est d'escalader systématiquement les situations où la sécurité et la performance sont en tension." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez le cap sécurité sous toutes les pressions et vous rendez les dilemmes visibles à votre hiérarchie", desc: "Vous ne contournez pas les procédures sous pression client, vous refusez les opérations solo qui l'interdisent même sous-effectif, et vous rendez visible à votre hiérarchie le dilemme quand sécurité et performance entrent en tension. Vous renforcez votre vigilance dans les périodes difficiles plutôt que de l'alléger. C'est cette posture — ferme, cohérente et visible — qui donne à votre management sécurité sa crédibilité dans la durée." },
        },
      }, 
      {
        type: "choix",
        text: "Votre indicateur sécurité est excellent depuis 18 mois. Votre direction réduit progressivement les ressources allouées à la sécurité en estimant que 'ça tourne'. Vous voyez les risques que ça crée.",
        tags: ["pression", "résultat"],
        answers: [
          { text: "Je laisse — les indicateurs donnent raison à la direction et ce n'est pas le bon moment pour contester.", score: 0 },
          { text: "Je remonte à ma direction le lien entre les ressources sécurité et les bons indicateurs.", score: 2 },
          { text: "Je compense avec les ressources disponibles sans créer de tension.", score: 0.5 },
          { text: "Je documente les risques créés pour me protéger en cas d'incident futur.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre cap sécurité cède encore sous la pression opérationnelle, commerciale ou hiérarchique", desc: "Contourner une procédure sous pression client, autoriser les opérations solo faute d'effectifs, réduire les ressources sécurité après un bon bilan : ces décisions semblent pragmatiques à court terme mais construisent les conditions des accidents à venir. La pression opérationnelle n'est pas une circonstance atténuante — elle est souvent la cause identifiée dans les accidents industriels graves." },
          moyen: { label: "Pratiques en développement", titre: "Vous tenez le cap sécurité dans les pressions modérées mais vous absorbez encore les pressions fortes seul·e", desc: "Vous maintenez le cap sécurité dans la plupart des situations. Mais quand la pression vient simultanément du client, de la direction et des délais, ou quand la restructuration distrait l'équipe : vous pouvez encore absorber seul·e une pression que vous devriez rendre visible. L'enjeu est d'escalader systématiquement les situations où la sécurité et la performance sont en tension." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez le cap sécurité sous toutes les pressions et vous rendez les dilemmes visibles à votre hiérarchie", desc: "Vous ne contournez pas les procédures sous pression client, vous refusez les opérations solo qui l'interdisent même sous-effectif, et vous rendez visible à votre hiérarchie le dilemme quand sécurité et performance entrent en tension. Vous renforcez votre vigilance dans les périodes difficiles plutôt que de l'alléger. C'est cette posture — ferme, cohérente et visible — qui donne à votre management sécurité sa crédibilité dans la durée." },
        },
      }, 
      {
        type: "choix",
        text: "Votre équipe a eu un très bon bilan sécurité cette année. Les points sécurité sont de plus en plus expédiés. Personne ne soulève le sujet.",
        tags: ["pression", "bilan"],
        answers: [
          { text: "Je laisse — le bon bilan prouve que l'équipe a intégré les bonnes pratiques.", score: 0 },
          { text: "Je maintiens la rigueur des points sécurité et j'explique que le bon bilan est leur résultat, pas une raison de les alléger.", score: 2 },
          { text: "Je réduis légèrement la fréquence tout en maintenant la qualité.", score: 0.5 },
          { text: "Je demande à l'équipe comment elle souhaite faire évoluer les points sécurité.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre cap sécurité cède encore sous la pression opérationnelle, commerciale ou hiérarchique", desc: "Contourner une procédure sous pression client, autoriser les opérations solo faute d'effectifs, réduire les ressources sécurité après un bon bilan : ces décisions semblent pragmatiques à court terme mais construisent les conditions des accidents à venir. La pression opérationnelle n'est pas une circonstance atténuante — elle est souvent la cause identifiée dans les accidents industriels graves." },
          moyen: { label: "Pratiques en développement", titre: "Vous tenez le cap sécurité dans les pressions modérées mais vous absorbez encore les pressions fortes seul·e", desc: "Vous maintenez le cap sécurité dans la plupart des situations. Mais quand la pression vient simultanément du client, de la direction et des délais, ou quand la restructuration distrait l'équipe : vous pouvez encore absorber seul·e une pression que vous devriez rendre visible. L'enjeu est d'escalader systématiquement les situations où la sécurité et la performance sont en tension." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez le cap sécurité sous toutes les pressions et vous rendez les dilemmes visibles à votre hiérarchie", desc: "Vous ne contournez pas les procédures sous pression client, vous refusez les opérations solo qui l'interdisent même sous-effectif, et vous rendez visible à votre hiérarchie le dilemme quand sécurité et performance entrent en tension. Vous renforcez votre vigilance dans les périodes difficiles plutôt que de l'alléger. C'est cette posture — ferme, cohérente et visible — qui donne à votre management sécurité sa crédibilité dans la durée." },
        },
      }, 
      {
        type: "likert",
        text: "Lorsque les pressions opérationnelles vous mettent en situation de devoir choisir entre sécurité et performance, vous rendez le dilemme visible à votre hiérarchie plutôt que de l'absorber seul·e.",
        tags: ["pression", "escalade"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre cap sécurité cède encore sous la pression opérationnelle, commerciale ou hiérarchique", desc: "Contourner une procédure sous pression client, autoriser les opérations solo faute d'effectifs, réduire les ressources sécurité après un bon bilan : ces décisions semblent pragmatiques à court terme mais construisent les conditions des accidents à venir. La pression opérationnelle n'est pas une circonstance atténuante — elle est souvent la cause identifiée dans les accidents industriels graves." },
          moyen: { label: "Pratiques en développement", titre: "Vous tenez le cap sécurité dans les pressions modérées mais vous absorbez encore les pressions fortes seul·e", desc: "Vous maintenez le cap sécurité dans la plupart des situations. Mais quand la pression vient simultanément du client, de la direction et des délais, ou quand la restructuration distrait l'équipe : vous pouvez encore absorber seul·e une pression que vous devriez rendre visible. L'enjeu est d'escalader systématiquement les situations où la sécurité et la performance sont en tension." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez le cap sécurité sous toutes les pressions et vous rendez les dilemmes visibles à votre hiérarchie", desc: "Vous ne contournez pas les procédures sous pression client, vous refusez les opérations solo qui l'interdisent même sous-effectif, et vous rendez visible à votre hiérarchie le dilemme quand sécurité et performance entrent en tension. Vous renforcez votre vigilance dans les périodes difficiles plutôt que de l'alléger. C'est cette posture — ferme, cohérente et visible — qui donne à votre management sécurité sa crédibilité dans la durée." },
        },
      }, 
      {
        type: "choix",
        text: "Un accident léger survient dans votre équipe pendant une période de forte pression opérationnelle. L'analyse préliminaire montre que la pression a contribué à l'accident.",
        tags: ["pression", "incident"],
        answers: [
          { text: "Je gère l'accident sans mentionner la pression opérationnelle — ça ne ferait que créer des tensions.", score: 0 },
          { text: "Je documente le lien entre la pression opérationnelle et l'accident dans mon rapport.", score: 2 },
          { text: "J'en parle à ma direction en privé sans le formaliser.", score: 0.5 },
          { text: "Je mentionne la pression opérationnelle dans le REX sans en faire la cause principale.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre cap sécurité cède encore sous la pression opérationnelle, commerciale ou hiérarchique", desc: "Contourner une procédure sous pression client, autoriser les opérations solo faute d'effectifs, réduire les ressources sécurité après un bon bilan : ces décisions semblent pragmatiques à court terme mais construisent les conditions des accidents à venir. La pression opérationnelle n'est pas une circonstance atténuante — elle est souvent la cause identifiée dans les accidents industriels graves." },
          moyen: { label: "Pratiques en développement", titre: "Vous tenez le cap sécurité dans les pressions modérées mais vous absorbez encore les pressions fortes seul·e", desc: "Vous maintenez le cap sécurité dans la plupart des situations. Mais quand la pression vient simultanément du client, de la direction et des délais, ou quand la restructuration distrait l'équipe : vous pouvez encore absorber seul·e une pression que vous devriez rendre visible. L'enjeu est d'escalader systématiquement les situations où la sécurité et la performance sont en tension." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez le cap sécurité sous toutes les pressions et vous rendez les dilemmes visibles à votre hiérarchie", desc: "Vous ne contournez pas les procédures sous pression client, vous refusez les opérations solo qui l'interdisent même sous-effectif, et vous rendez visible à votre hiérarchie le dilemme quand sécurité et performance entrent en tension. Vous renforcez votre vigilance dans les périodes difficiles plutôt que de l'alléger. C'est cette posture — ferme, cohérente et visible — qui donne à votre management sécurité sa crédibilité dans la durée." },
        },
      }, 
      {
        type: "choix",
        text: "Votre direction tient un discours très engagé sur la sécurité mais ses décisions opérationnelles la contredisent régulièrement. Votre équipe commence à décrocher.",
        tags: ["pression", "discours"],
        answers: [
          { text: "Je traduis le discours de la direction sans commenter l'écart avec les décisions.", score: 0 },
          { text: "Je remonte le décalage observé à ma direction en lui montrant l'effet sur l'équipe.", score: 2 },
          { text: "Je compense en étant moi-même très cohérent·e dans mon management.", score: 1 },
          { text: "Je dis à l'équipe de se concentrer sur les règles concrètes et de ne pas écouter les discours.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre cap sécurité cède encore sous la pression opérationnelle, commerciale ou hiérarchique", desc: "Contourner une procédure sous pression client, autoriser les opérations solo faute d'effectifs, réduire les ressources sécurité après un bon bilan : ces décisions semblent pragmatiques à court terme mais construisent les conditions des accidents à venir. La pression opérationnelle n'est pas une circonstance atténuante — elle est souvent la cause identifiée dans les accidents industriels graves." },
          moyen: { label: "Pratiques en développement", titre: "Vous tenez le cap sécurité dans les pressions modérées mais vous absorbez encore les pressions fortes seul·e", desc: "Vous maintenez le cap sécurité dans la plupart des situations. Mais quand la pression vient simultanément du client, de la direction et des délais, ou quand la restructuration distrait l'équipe : vous pouvez encore absorber seul·e une pression que vous devriez rendre visible. L'enjeu est d'escalader systématiquement les situations où la sécurité et la performance sont en tension." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez le cap sécurité sous toutes les pressions et vous rendez les dilemmes visibles à votre hiérarchie", desc: "Vous ne contournez pas les procédures sous pression client, vous refusez les opérations solo qui l'interdisent même sous-effectif, et vous rendez visible à votre hiérarchie le dilemme quand sécurité et performance entrent en tension. Vous renforcez votre vigilance dans les périodes difficiles plutôt que de l'alléger. C'est cette posture — ferme, cohérente et visible — qui donne à votre management sécurité sa crédibilité dans la durée." },
        },
      }, 
      {
        type: "likert",
        text: "Votre discours sur la sécurité et vos décisions opérationnelles sont alignés — vous n'avez pas un discours sécurité et une pratique de gestion qui le contredit.",
        tags: ["pression", "cohérence"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre cap sécurité cède encore sous la pression opérationnelle, commerciale ou hiérarchique", desc: "Contourner une procédure sous pression client, autoriser les opérations solo faute d'effectifs, réduire les ressources sécurité après un bon bilan : ces décisions semblent pragmatiques à court terme mais construisent les conditions des accidents à venir. La pression opérationnelle n'est pas une circonstance atténuante — elle est souvent la cause identifiée dans les accidents industriels graves." },
          moyen: { label: "Pratiques en développement", titre: "Vous tenez le cap sécurité dans les pressions modérées mais vous absorbez encore les pressions fortes seul·e", desc: "Vous maintenez le cap sécurité dans la plupart des situations. Mais quand la pression vient simultanément du client, de la direction et des délais, ou quand la restructuration distrait l'équipe : vous pouvez encore absorber seul·e une pression que vous devriez rendre visible. L'enjeu est d'escalader systématiquement les situations où la sécurité et la performance sont en tension." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez le cap sécurité sous toutes les pressions et vous rendez les dilemmes visibles à votre hiérarchie", desc: "Vous ne contournez pas les procédures sous pression client, vous refusez les opérations solo qui l'interdisent même sous-effectif, et vous rendez visible à votre hiérarchie le dilemme quand sécurité et performance entrent en tension. Vous renforcez votre vigilance dans les périodes difficiles plutôt que de l'alléger. C'est cette posture — ferme, cohérente et visible — qui donne à votre management sécurité sa crédibilité dans la durée." },
        },
      }, 
      {
        type: "choix",
        text: "Votre entreprise traverse une restructuration. L'attention de l'équipe est ailleurs. Le niveau de rigueur sécurité a visiblement baissé. Ce n'est pas le bon moment pour insister.",
        tags: ["pression", "période difficile"],
        answers: [
          { text: "J'attends que la restructuration soit terminée pour remettre la sécurité à l'ordre du jour.", score: 0 },
          { text: "Je renforce au contraire ma vigilance sécurité — les périodes de perturbation sont celles où les accidents surviennent.", score: 2 },
          { text: "Je maintiens les standards sans en faire un sujet — l'équipe a assez de pression.", score: 1 },
          { text: "Je remonte la situation à ma hiérarchie pour qu'elle donne des signaux clairs à l'équipe.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre cap sécurité cède encore sous la pression opérationnelle, commerciale ou hiérarchique", desc: "Contourner une procédure sous pression client, autoriser les opérations solo faute d'effectifs, réduire les ressources sécurité après un bon bilan : ces décisions semblent pragmatiques à court terme mais construisent les conditions des accidents à venir. La pression opérationnelle n'est pas une circonstance atténuante — elle est souvent la cause identifiée dans les accidents industriels graves." },
          moyen: { label: "Pratiques en développement", titre: "Vous tenez le cap sécurité dans les pressions modérées mais vous absorbez encore les pressions fortes seul·e", desc: "Vous maintenez le cap sécurité dans la plupart des situations. Mais quand la pression vient simultanément du client, de la direction et des délais, ou quand la restructuration distrait l'équipe : vous pouvez encore absorber seul·e une pression que vous devriez rendre visible. L'enjeu est d'escalader systématiquement les situations où la sécurité et la performance sont en tension." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez le cap sécurité sous toutes les pressions et vous rendez les dilemmes visibles à votre hiérarchie", desc: "Vous ne contournez pas les procédures sous pression client, vous refusez les opérations solo qui l'interdisent même sous-effectif, et vous rendez visible à votre hiérarchie le dilemme quand sécurité et performance entrent en tension. Vous renforcez votre vigilance dans les périodes difficiles plutôt que de l'alléger. C'est cette posture — ferme, cohérente et visible — qui donne à votre management sécurité sa crédibilité dans la durée." },
        },
      }
    ],

  },
  // ─────────────────────────────────────────────────────────────────────

    // ─── À coller dans catalogue-securite.js ──────────────────────────────
  // Clé : "coactivite-sous-traitance"

  "coactivite-sous-traitance": {
    0: [
      {
        type: "choix",
        text: "Un prestataire régulier arrive pour sa dixième intervention sur votre site cette année. Il connaît les lieux, il est pressé. Vous êtes censé·e réaliser avec lui le plan de prévention.",
        tags: ["intégration", "prestataire"],
        answers: [
          { text: "Je saute le plan de prévention — il connaît le site mieux que certains de mes collègues.", score: 0 },
          { text: "Je réalise le plan de prévention même si c'est un habitué.", score: 2 },
          { text: "Je fais un rappel rapide des points essentiels sans refaire le plan complet.", score: 1 },
          { text: "Je lui demande de signer le plan de prévention de la dernière fois s'il est encore valide.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos exigences d'intégration s'assouplissent encore pour les prestataires habituels ou sous pression de délai", desc: "Sauter le plan de prévention pour un habitué, réduire l'accueil sécurité sous pression, accepter les documents manquants en promesse : ces accommodements créent des failles réelles dans la gestion des risques de co-activité. La grande majorité des accidents en co-activité implique des intervenants 'qui connaissaient le site' ou des situations 'déjà vécues'. La familiarité est un facteur de risque, pas une protection." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez rigoureusement les nouveaux prestataires mais vos exigences peuvent s'assouplir pour les habitués", desc: "Vous appliquez les procédures d'intégration avec les nouveaux intervenants. Mais les prestataires réguliers bénéficient encore parfois d'un accueil allégé, et les documents manquants peuvent être acceptés en promesse. L'enjeu est d'appliquer les mêmes exigences indépendamment de la fréquence des interventions — les habitudes créent des angles morts, pas des protections." },
          haut: { label: "Réflexes installés", titre: "Vous appliquez les mêmes exigences d'intégration à tous les intervenants, habitués ou non, quelles que soient les pressions", desc: "Vous réalisez le plan de prévention même pour le prestataire de la dixième intervention. Vous refusez le démarrage si les qualifications ou les documents requis ne sont pas là. Vous stoppez l'intervention du prestataire sans EPI même en plein travail. Cette constance absolue — qui suppose d'assumer des retards et des tensions — est ce qui rend votre gestion de la co-activité réellement protectrice." },
        },
      }, 
      {
        type: "choix",
        text: "Un nouveau sous-traitant commence une mission longue durée. Votre responsable vous demande d'accélérer son intégration pour qu'il soit opérationnel rapidement. L'accueil sécurité complet prend une demi-journée.",
        tags: ["intégration", "accueil sécurité"],
        answers: [
          { text: "Je réalise un accueil sécurité allégé — on complétera en cours de mission.", score: 0 },
          { text: "Je réalise l'accueil sécurité complet avant qu'il commence à travailler.", score: 2 },
          { text: "Je lui donne le document d'accueil à lire seul et je le valide avec lui le lendemain.", score: 0.5 },
          { text: "Je lui fais l'accueil verbal les points critiques et je programme le complet pour la semaine prochaine.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos exigences d'intégration s'assouplissent encore pour les prestataires habituels ou sous pression de délai", desc: "Sauter le plan de prévention pour un habitué, réduire l'accueil sécurité sous pression, accepter les documents manquants en promesse : ces accommodements créent des failles réelles dans la gestion des risques de co-activité. La grande majorité des accidents en co-activité implique des intervenants 'qui connaissaient le site' ou des situations 'déjà vécues'. La familiarité est un facteur de risque, pas une protection." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez rigoureusement les nouveaux prestataires mais vos exigences peuvent s'assouplir pour les habitués", desc: "Vous appliquez les procédures d'intégration avec les nouveaux intervenants. Mais les prestataires réguliers bénéficient encore parfois d'un accueil allégé, et les documents manquants peuvent être acceptés en promesse. L'enjeu est d'appliquer les mêmes exigences indépendamment de la fréquence des interventions — les habitudes créent des angles morts, pas des protections." },
          haut: { label: "Réflexes installés", titre: "Vous appliquez les mêmes exigences d'intégration à tous les intervenants, habitués ou non, quelles que soient les pressions", desc: "Vous réalisez le plan de prévention même pour le prestataire de la dixième intervention. Vous refusez le démarrage si les qualifications ou les documents requis ne sont pas là. Vous stoppez l'intervention du prestataire sans EPI même en plein travail. Cette constance absolue — qui suppose d'assumer des retards et des tensions — est ce qui rend votre gestion de la co-activité réellement protectrice." },
        },
      }, 
      {
        type: "likert",
        text: "Vous réalisez l'accueil sécurité complet de tout intervenant extérieur avant qu'il commence à travailler, quelle que soit sa connaissance du site ou la pression de délai.",
        tags: ["intégration", "rigueur"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos exigences d'intégration s'assouplissent encore pour les prestataires habituels ou sous pression de délai", desc: "Sauter le plan de prévention pour un habitué, réduire l'accueil sécurité sous pression, accepter les documents manquants en promesse : ces accommodements créent des failles réelles dans la gestion des risques de co-activité. La grande majorité des accidents en co-activité implique des intervenants 'qui connaissaient le site' ou des situations 'déjà vécues'. La familiarité est un facteur de risque, pas une protection." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez rigoureusement les nouveaux prestataires mais vos exigences peuvent s'assouplir pour les habitués", desc: "Vous appliquez les procédures d'intégration avec les nouveaux intervenants. Mais les prestataires réguliers bénéficient encore parfois d'un accueil allégé, et les documents manquants peuvent être acceptés en promesse. L'enjeu est d'appliquer les mêmes exigences indépendamment de la fréquence des interventions — les habitudes créent des angles morts, pas des protections." },
          haut: { label: "Réflexes installés", titre: "Vous appliquez les mêmes exigences d'intégration à tous les intervenants, habitués ou non, quelles que soient les pressions", desc: "Vous réalisez le plan de prévention même pour le prestataire de la dixième intervention. Vous refusez le démarrage si les qualifications ou les documents requis ne sont pas là. Vous stoppez l'intervention du prestataire sans EPI même en plein travail. Cette constance absolue — qui suppose d'assumer des retards et des tensions — est ce qui rend votre gestion de la co-activité réellement protectrice." },
        },
      }, 
      {
        type: "choix",
        text: "Un sous-traitant vous explique qu'il applique des procédures de sécurité différentes des vôtres 'parce que c'est comme ça chez eux'. Il estime que ses méthodes couvrent les risques de façon équivalente.",
        tags: ["intégration", "pratiques différentes"],
        answers: [
          { text: "J'accepte — il est expert de son métier et ses méthodes couvrent les risques.", score: 0 },
          { text: "Je lui explique que sur ce site, c'est notre procédure qui s'applique, pas celle de son organisation.", score: 2 },
          { text: "Je compare les deux approches et je valide la sienne si elle me semble équivalente.", score: 0.5 },
          { text: "Je lui demande de nous soumettre sa procédure par écrit pour validation.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos exigences d'intégration s'assouplissent encore pour les prestataires habituels ou sous pression de délai", desc: "Sauter le plan de prévention pour un habitué, réduire l'accueil sécurité sous pression, accepter les documents manquants en promesse : ces accommodements créent des failles réelles dans la gestion des risques de co-activité. La grande majorité des accidents en co-activité implique des intervenants 'qui connaissaient le site' ou des situations 'déjà vécues'. La familiarité est un facteur de risque, pas une protection." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez rigoureusement les nouveaux prestataires mais vos exigences peuvent s'assouplir pour les habitués", desc: "Vous appliquez les procédures d'intégration avec les nouveaux intervenants. Mais les prestataires réguliers bénéficient encore parfois d'un accueil allégé, et les documents manquants peuvent être acceptés en promesse. L'enjeu est d'appliquer les mêmes exigences indépendamment de la fréquence des interventions — les habitudes créent des angles morts, pas des protections." },
          haut: { label: "Réflexes installés", titre: "Vous appliquez les mêmes exigences d'intégration à tous les intervenants, habitués ou non, quelles que soient les pressions", desc: "Vous réalisez le plan de prévention même pour le prestataire de la dixième intervention. Vous refusez le démarrage si les qualifications ou les documents requis ne sont pas là. Vous stoppez l'intervention du prestataire sans EPI même en plein travail. Cette constance absolue — qui suppose d'assumer des retards et des tensions — est ce qui rend votre gestion de la co-activité réellement protectrice." },
        },
      }, 
      {
        type: "choix",
        text: "Vous constatez qu'un prestataire sur votre site ne porte pas les EPI requis. Il est en plein travail. Stopper son intervention va créer un retard.",
        tags: ["intégration", "EPI"],
        answers: [
          { text: "Je le lui signale mais je le laisse finir son intervention en cours.", score: 0 },
          { text: "Je lui demande d'arrêter immédiatement jusqu'à ce qu'il ait l'EPI requis.", score: 2 },
          { text: "Je lui prête un EPI disponible pour qu'il puisse continuer.", score: 1 },
          { text: "Je le note pour l'évoquer lors du prochain point avec son responsable.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos exigences d'intégration s'assouplissent encore pour les prestataires habituels ou sous pression de délai", desc: "Sauter le plan de prévention pour un habitué, réduire l'accueil sécurité sous pression, accepter les documents manquants en promesse : ces accommodements créent des failles réelles dans la gestion des risques de co-activité. La grande majorité des accidents en co-activité implique des intervenants 'qui connaissaient le site' ou des situations 'déjà vécues'. La familiarité est un facteur de risque, pas une protection." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez rigoureusement les nouveaux prestataires mais vos exigences peuvent s'assouplir pour les habitués", desc: "Vous appliquez les procédures d'intégration avec les nouveaux intervenants. Mais les prestataires réguliers bénéficient encore parfois d'un accueil allégé, et les documents manquants peuvent être acceptés en promesse. L'enjeu est d'appliquer les mêmes exigences indépendamment de la fréquence des interventions — les habitudes créent des angles morts, pas des protections." },
          haut: { label: "Réflexes installés", titre: "Vous appliquez les mêmes exigences d'intégration à tous les intervenants, habitués ou non, quelles que soient les pressions", desc: "Vous réalisez le plan de prévention même pour le prestataire de la dixième intervention. Vous refusez le démarrage si les qualifications ou les documents requis ne sont pas là. Vous stoppez l'intervention du prestataire sans EPI même en plein travail. Cette constance absolue — qui suppose d'assumer des retards et des tensions — est ce qui rend votre gestion de la co-activité réellement protectrice." },
        },
      }, 
      {
        type: "likert",
        text: "Vous stoppez l'intervention d'un prestataire qui ne respecte pas les règles de sécurité de votre site, quelle que soit la pression contractuelle ou le retard créé.",
        tags: ["intégration", "arrêt"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos exigences d'intégration s'assouplissent encore pour les prestataires habituels ou sous pression de délai", desc: "Sauter le plan de prévention pour un habitué, réduire l'accueil sécurité sous pression, accepter les documents manquants en promesse : ces accommodements créent des failles réelles dans la gestion des risques de co-activité. La grande majorité des accidents en co-activité implique des intervenants 'qui connaissaient le site' ou des situations 'déjà vécues'. La familiarité est un facteur de risque, pas une protection." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez rigoureusement les nouveaux prestataires mais vos exigences peuvent s'assouplir pour les habitués", desc: "Vous appliquez les procédures d'intégration avec les nouveaux intervenants. Mais les prestataires réguliers bénéficient encore parfois d'un accueil allégé, et les documents manquants peuvent être acceptés en promesse. L'enjeu est d'appliquer les mêmes exigences indépendamment de la fréquence des interventions — les habitudes créent des angles morts, pas des protections." },
          haut: { label: "Réflexes installés", titre: "Vous appliquez les mêmes exigences d'intégration à tous les intervenants, habitués ou non, quelles que soient les pressions", desc: "Vous réalisez le plan de prévention même pour le prestataire de la dixième intervention. Vous refusez le démarrage si les qualifications ou les documents requis ne sont pas là. Vous stoppez l'intervention du prestataire sans EPI même en plein travail. Cette constance absolue — qui suppose d'assumer des retards et des tensions — est ce qui rend votre gestion de la co-activité réellement protectrice." },
        },
      }, 
      {
        type: "choix",
        text: "Un prestataire vous informe à la dernière minute que la personne prévue est indisponible. Il propose de la remplacer par quelqu'un moins qualifié pour ne pas retarder l'intervention.",
        tags: ["intégration", "qualifications"],
        answers: [
          { text: "J'accepte — le planning est contraint et le prestataire assume la responsabilité de son équipe.", score: 0 },
          { text: "Je refuse et j'exige que les qualifications requises soient fournies avant le démarrage.", score: 2 },
          { text: "J'évalue les tâches qui peuvent être réalisées avec le niveau de qualification disponible.", score: 0.5 },
          { text: "Je valide avec mon responsable avant de décider.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos exigences d'intégration s'assouplissent encore pour les prestataires habituels ou sous pression de délai", desc: "Sauter le plan de prévention pour un habitué, réduire l'accueil sécurité sous pression, accepter les documents manquants en promesse : ces accommodements créent des failles réelles dans la gestion des risques de co-activité. La grande majorité des accidents en co-activité implique des intervenants 'qui connaissaient le site' ou des situations 'déjà vécues'. La familiarité est un facteur de risque, pas une protection." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez rigoureusement les nouveaux prestataires mais vos exigences peuvent s'assouplir pour les habitués", desc: "Vous appliquez les procédures d'intégration avec les nouveaux intervenants. Mais les prestataires réguliers bénéficient encore parfois d'un accueil allégé, et les documents manquants peuvent être acceptés en promesse. L'enjeu est d'appliquer les mêmes exigences indépendamment de la fréquence des interventions — les habitudes créent des angles morts, pas des protections." },
          haut: { label: "Réflexes installés", titre: "Vous appliquez les mêmes exigences d'intégration à tous les intervenants, habitués ou non, quelles que soient les pressions", desc: "Vous réalisez le plan de prévention même pour le prestataire de la dixième intervention. Vous refusez le démarrage si les qualifications ou les documents requis ne sont pas là. Vous stoppez l'intervention du prestataire sans EPI même en plein travail. Cette constance absolue — qui suppose d'assumer des retards et des tensions — est ce qui rend votre gestion de la co-activité réellement protectrice." },
        },
      }, 
      {
        type: "choix",
        text: "Un prestataire refuse de réaliser la visite préalable obligatoire avant son intervention — 'ça fait perdre du temps pour un travail qu'on a déjà fait cent fois'.",
        tags: ["intégration", "visite préalable"],
        answers: [
          { text: "Je l'exempte — la visite préalable est une formalité pour les habitués.", score: 0 },
          { text: "Je maintiens l'obligation — la visite préalable est non négociable quelle que soit l'expérience.", score: 2 },
          { text: "Je la réduis à l'essentiel pour trouver un compromis.", score: 0.5 },
          { text: "Je lui demande de la réaliser seul et de me rendre compte.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos exigences d'intégration s'assouplissent encore pour les prestataires habituels ou sous pression de délai", desc: "Sauter le plan de prévention pour un habitué, réduire l'accueil sécurité sous pression, accepter les documents manquants en promesse : ces accommodements créent des failles réelles dans la gestion des risques de co-activité. La grande majorité des accidents en co-activité implique des intervenants 'qui connaissaient le site' ou des situations 'déjà vécues'. La familiarité est un facteur de risque, pas une protection." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez rigoureusement les nouveaux prestataires mais vos exigences peuvent s'assouplir pour les habitués", desc: "Vous appliquez les procédures d'intégration avec les nouveaux intervenants. Mais les prestataires réguliers bénéficient encore parfois d'un accueil allégé, et les documents manquants peuvent être acceptés en promesse. L'enjeu est d'appliquer les mêmes exigences indépendamment de la fréquence des interventions — les habitudes créent des angles morts, pas des protections." },
          haut: { label: "Réflexes installés", titre: "Vous appliquez les mêmes exigences d'intégration à tous les intervenants, habitués ou non, quelles que soient les pressions", desc: "Vous réalisez le plan de prévention même pour le prestataire de la dixième intervention. Vous refusez le démarrage si les qualifications ou les documents requis ne sont pas là. Vous stoppez l'intervention du prestataire sans EPI même en plein travail. Cette constance absolue — qui suppose d'assumer des retards et des tensions — est ce qui rend votre gestion de la co-activité réellement protectrice." },
        },
      }, 
      {
        type: "likert",
        text: "Vous appliquez les mêmes exigences d'intégration sécurité à tous les intervenants extérieurs, habitués ou non, quelle que soit la relation commerciale.",
        tags: ["intégration", "constance"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos exigences d'intégration s'assouplissent encore pour les prestataires habituels ou sous pression de délai", desc: "Sauter le plan de prévention pour un habitué, réduire l'accueil sécurité sous pression, accepter les documents manquants en promesse : ces accommodements créent des failles réelles dans la gestion des risques de co-activité. La grande majorité des accidents en co-activité implique des intervenants 'qui connaissaient le site' ou des situations 'déjà vécues'. La familiarité est un facteur de risque, pas une protection." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez rigoureusement les nouveaux prestataires mais vos exigences peuvent s'assouplir pour les habitués", desc: "Vous appliquez les procédures d'intégration avec les nouveaux intervenants. Mais les prestataires réguliers bénéficient encore parfois d'un accueil allégé, et les documents manquants peuvent être acceptés en promesse. L'enjeu est d'appliquer les mêmes exigences indépendamment de la fréquence des interventions — les habitudes créent des angles morts, pas des protections." },
          haut: { label: "Réflexes installés", titre: "Vous appliquez les mêmes exigences d'intégration à tous les intervenants, habitués ou non, quelles que soient les pressions", desc: "Vous réalisez le plan de prévention même pour le prestataire de la dixième intervention. Vous refusez le démarrage si les qualifications ou les documents requis ne sont pas là. Vous stoppez l'intervention du prestataire sans EPI même en plein travail. Cette constance absolue — qui suppose d'assumer des retards et des tensions — est ce qui rend votre gestion de la co-activité réellement protectrice." },
        },
      }, 
      {
        type: "choix",
        text: "Le prestataire arrive sans les documents requis pour l'intervention — habilitations, certificats, attestations. Il dit qu'il les enverra par mail dans l'après-midi.",
        tags: ["intégration", "documents"],
        answers: [
          { text: "J'autorise l'intervention en attendant les documents — il est de bonne foi.", score: 0 },
          { text: "Je conditionne le démarrage à la réception des documents requis.", score: 2 },
          { text: "Je démarre pour les tâches qui ne nécessitent pas ces documents.", score: 0.5 },
          { text: "Je contacte son responsable pour accélérer l'envoi des documents.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vos exigences d'intégration s'assouplissent encore pour les prestataires habituels ou sous pression de délai", desc: "Sauter le plan de prévention pour un habitué, réduire l'accueil sécurité sous pression, accepter les documents manquants en promesse : ces accommodements créent des failles réelles dans la gestion des risques de co-activité. La grande majorité des accidents en co-activité implique des intervenants 'qui connaissaient le site' ou des situations 'déjà vécues'. La familiarité est un facteur de risque, pas une protection." },
          moyen: { label: "Pratiques en développement", titre: "Vous intégrez rigoureusement les nouveaux prestataires mais vos exigences peuvent s'assouplir pour les habitués", desc: "Vous appliquez les procédures d'intégration avec les nouveaux intervenants. Mais les prestataires réguliers bénéficient encore parfois d'un accueil allégé, et les documents manquants peuvent être acceptés en promesse. L'enjeu est d'appliquer les mêmes exigences indépendamment de la fréquence des interventions — les habitudes créent des angles morts, pas des protections." },
          haut: { label: "Réflexes installés", titre: "Vous appliquez les mêmes exigences d'intégration à tous les intervenants, habitués ou non, quelles que soient les pressions", desc: "Vous réalisez le plan de prévention même pour le prestataire de la dixième intervention. Vous refusez le démarrage si les qualifications ou les documents requis ne sont pas là. Vous stoppez l'intervention du prestataire sans EPI même en plein travail. Cette constance absolue — qui suppose d'assumer des retards et des tensions — est ce qui rend votre gestion de la co-activité réellement protectrice." },
        },
      }
    ],

    1: [
      {
        type: "choix",
        text: "Deux équipes doivent intervenir simultanément dans une même zone demain. Un risque d'interférence vous semble possible mais pas certain. Les deux plannings sont contraints.",
        tags: ["interférence", "analyse"],
        answers: [
          { text: "Je laisse les deux équipes démarrer — le risque est incertain et les plannings ne peuvent pas bouger.", score: 0 },
          { text: "Je réalise une analyse de co-activité avant d'autoriser les deux équipes à démarrer simultanément.", score: 2 },
          { text: "Je demande aux deux chefs d'équipe de se coordonner entre eux.", score: 1 },
          { text: "Je supervise moi-même l'intervention pour gérer les interférences en temps réel.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous analysez les co-activités planifiées mais réagissez encore de façon insuffisante aux situations imprévues", desc: "Laisser deux équipes démarrer simultanément parce que le risque semble incertain, continuer son intervention quand une équipe démarre à côté sans prévenir, ne pas formaliser les informations transmises oralement : ces comportements laissent des risques d'interférence non traités. En co-activité, les accidents surviennent précisément dans les zones d'intersection non anticipées." },
          moyen: { label: "Pratiques en développement", titre: "Vous gérez bien les co-activités prévues mais les situations imprévues vous trouvent encore en réaction", desc: "Vous analysez les co-activités planifiées et vous documentez les risques d'interférence. Mais quand une situation imprévue survient en cours d'intervention — une équipe qui démarre sans prévenir, un changement de dernière minute — votre réaction peut encore être insuffisante. L'enjeu est d'appliquer le même réflexe de suspension et de réévaluation aux situations non planifiées." },
          haut: { label: "Réflexes installés", titre: "Vous anticipez les risques d'interférence et suspendez systématiquement face aux situations imprévues", desc: "Vous analysez les co-activités avant de les autoriser, même quand le risque semble incertain. Vous arrêtez votre intervention quand une équipe démarre à côté sans vous avoir informé. Vous suspendez et réévaluez avant d'autoriser un accès urgent non prévu. Cette posture préventive — sur les situations planifiées comme sur les imprévues — est ce qui évite les accidents dans les zones d'intersection." },
        },
      }, 
      {
        type: "likert",
        text: "Avant toute situation de co-activité, vous réalisez une analyse des risques d'interférence et vous la documentez, même pour des interventions qui semblent sans interaction directe.",
        tags: ["interférence", "anticipation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous analysez les co-activités planifiées mais réagissez encore de façon insuffisante aux situations imprévues", desc: "Laisser deux équipes démarrer simultanément parce que le risque semble incertain, continuer son intervention quand une équipe démarre à côté sans prévenir, ne pas formaliser les informations transmises oralement : ces comportements laissent des risques d'interférence non traités. En co-activité, les accidents surviennent précisément dans les zones d'intersection non anticipées." },
          moyen: { label: "Pratiques en développement", titre: "Vous gérez bien les co-activités prévues mais les situations imprévues vous trouvent encore en réaction", desc: "Vous analysez les co-activités planifiées et vous documentez les risques d'interférence. Mais quand une situation imprévue survient en cours d'intervention — une équipe qui démarre sans prévenir, un changement de dernière minute — votre réaction peut encore être insuffisante. L'enjeu est d'appliquer le même réflexe de suspension et de réévaluation aux situations non planifiées." },
          haut: { label: "Réflexes installés", titre: "Vous anticipez les risques d'interférence et suspendez systématiquement face aux situations imprévues", desc: "Vous analysez les co-activités avant de les autoriser, même quand le risque semble incertain. Vous arrêtez votre intervention quand une équipe démarre à côté sans vous avoir informé. Vous suspendez et réévaluez avant d'autoriser un accès urgent non prévu. Cette posture préventive — sur les situations planifiées comme sur les imprévues — est ce qui évite les accidents dans les zones d'intersection." },
        },
      }, 
      {
        type: "choix",
        text: "En cours d'intervention, une équipe extérieure commence à travailler dans une zone adjacente sans vous en avoir informé. Votre propre intervention est en cours.",
        tags: ["interférence", "inattendue"],
        answers: [
          { text: "Je continue — si l'autre équipe est là, c'est qu'elle a les autorisations.", score: 0 },
          { text: "J'arrête mon intervention et je contacte le responsable de l'autre équipe avant de reprendre.", score: 2 },
          { text: "Je fais attention à la présence de l'autre équipe et je continue prudemment.", score: 0 },
          { text: "Je signale la situation à mon responsable pour qu'il gère.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous analysez les co-activités planifiées mais réagissez encore de façon insuffisante aux situations imprévues", desc: "Laisser deux équipes démarrer simultanément parce que le risque semble incertain, continuer son intervention quand une équipe démarre à côté sans prévenir, ne pas formaliser les informations transmises oralement : ces comportements laissent des risques d'interférence non traités. En co-activité, les accidents surviennent précisément dans les zones d'intersection non anticipées." },
          moyen: { label: "Pratiques en développement", titre: "Vous gérez bien les co-activités prévues mais les situations imprévues vous trouvent encore en réaction", desc: "Vous analysez les co-activités planifiées et vous documentez les risques d'interférence. Mais quand une situation imprévue survient en cours d'intervention — une équipe qui démarre sans prévenir, un changement de dernière minute — votre réaction peut encore être insuffisante. L'enjeu est d'appliquer le même réflexe de suspension et de réévaluation aux situations non planifiées." },
          haut: { label: "Réflexes installés", titre: "Vous anticipez les risques d'interférence et suspendez systématiquement face aux situations imprévues", desc: "Vous analysez les co-activités avant de les autoriser, même quand le risque semble incertain. Vous arrêtez votre intervention quand une équipe démarre à côté sans vous avoir informé. Vous suspendez et réévaluez avant d'autoriser un accès urgent non prévu. Cette posture préventive — sur les situations planifiées comme sur les imprévues — est ce qui évite les accidents dans les zones d'intersection." },
        },
      }, 
      {
        type: "choix",
        text: "Un sous-traitant demande à accéder à une zone pendant votre intervention pour une raison urgente non prévue dans l'analyse de co-activité initiale.",
        tags: ["interférence", "urgence"],
        answers: [
          { text: "J'autorise — c'est urgent et je vais surveiller sa présence.", score: 0 },
          { text: "Je suspends mon intervention ou nous établissons un accès séquencé après réévaluation.", score: 2 },
          { text: "J'évalue rapidement le risque d'interférence spécifique et je décide.", score: 1 },
          { text: "Je lui demande d'attendre la fin de mon intervention.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous analysez les co-activités planifiées mais réagissez encore de façon insuffisante aux situations imprévues", desc: "Laisser deux équipes démarrer simultanément parce que le risque semble incertain, continuer son intervention quand une équipe démarre à côté sans prévenir, ne pas formaliser les informations transmises oralement : ces comportements laissent des risques d'interférence non traités. En co-activité, les accidents surviennent précisément dans les zones d'intersection non anticipées." },
          moyen: { label: "Pratiques en développement", titre: "Vous gérez bien les co-activités prévues mais les situations imprévues vous trouvent encore en réaction", desc: "Vous analysez les co-activités planifiées et vous documentez les risques d'interférence. Mais quand une situation imprévue survient en cours d'intervention — une équipe qui démarre sans prévenir, un changement de dernière minute — votre réaction peut encore être insuffisante. L'enjeu est d'appliquer le même réflexe de suspension et de réévaluation aux situations non planifiées." },
          haut: { label: "Réflexes installés", titre: "Vous anticipez les risques d'interférence et suspendez systématiquement face aux situations imprévues", desc: "Vous analysez les co-activités avant de les autoriser, même quand le risque semble incertain. Vous arrêtez votre intervention quand une équipe démarre à côté sans vous avoir informé. Vous suspendez et réévaluez avant d'autoriser un accès urgent non prévu. Cette posture préventive — sur les situations planifiées comme sur les imprévues — est ce qui évite les accidents dans les zones d'intersection." },
        },
      }, 
      {
        type: "choix",
        text: "Un changement de dernière minute dans votre intervention peut créer un risque pour un sous-traitant qui travaille à proximité. Il est déjà en train d'intervenir.",
        tags: ["interférence", "communication"],
        answers: [
          { text: "Je continue en faisant très attention à ne pas interférer.", score: 0 },
          { text: "Je l'informe immédiatement du changement avant de poursuivre.", score: 2 },
          { text: "Je termine rapidement mon changement puis je l'informe.", score: 0.5 },
          { text: "Je lui envoie un message pour le prévenir.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous analysez les co-activités planifiées mais réagissez encore de façon insuffisante aux situations imprévues", desc: "Laisser deux équipes démarrer simultanément parce que le risque semble incertain, continuer son intervention quand une équipe démarre à côté sans prévenir, ne pas formaliser les informations transmises oralement : ces comportements laissent des risques d'interférence non traités. En co-activité, les accidents surviennent précisément dans les zones d'intersection non anticipées." },
          moyen: { label: "Pratiques en développement", titre: "Vous gérez bien les co-activités prévues mais les situations imprévues vous trouvent encore en réaction", desc: "Vous analysez les co-activités planifiées et vous documentez les risques d'interférence. Mais quand une situation imprévue survient en cours d'intervention — une équipe qui démarre sans prévenir, un changement de dernière minute — votre réaction peut encore être insuffisante. L'enjeu est d'appliquer le même réflexe de suspension et de réévaluation aux situations non planifiées." },
          haut: { label: "Réflexes installés", titre: "Vous anticipez les risques d'interférence et suspendez systématiquement face aux situations imprévues", desc: "Vous analysez les co-activités avant de les autoriser, même quand le risque semble incertain. Vous arrêtez votre intervention quand une équipe démarre à côté sans vous avoir informé. Vous suspendez et réévaluez avant d'autoriser un accès urgent non prévu. Cette posture préventive — sur les situations planifiées comme sur les imprévues — est ce qui évite les accidents dans les zones d'intersection." },
        },
      }, 
      {
        type: "likert",
        text: "Lorsqu'une situation de co-activité non prévue se présente en cours d'intervention, vous suspendez ou réévaluez avant de continuer, même sous pression de délai.",
        tags: ["interférence", "suspension"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous analysez les co-activités planifiées mais réagissez encore de façon insuffisante aux situations imprévues", desc: "Laisser deux équipes démarrer simultanément parce que le risque semble incertain, continuer son intervention quand une équipe démarre à côté sans prévenir, ne pas formaliser les informations transmises oralement : ces comportements laissent des risques d'interférence non traités. En co-activité, les accidents surviennent précisément dans les zones d'intersection non anticipées." },
          moyen: { label: "Pratiques en développement", titre: "Vous gérez bien les co-activités prévues mais les situations imprévues vous trouvent encore en réaction", desc: "Vous analysez les co-activités planifiées et vous documentez les risques d'interférence. Mais quand une situation imprévue survient en cours d'intervention — une équipe qui démarre sans prévenir, un changement de dernière minute — votre réaction peut encore être insuffisante. L'enjeu est d'appliquer le même réflexe de suspension et de réévaluation aux situations non planifiées." },
          haut: { label: "Réflexes installés", titre: "Vous anticipez les risques d'interférence et suspendez systématiquement face aux situations imprévues", desc: "Vous analysez les co-activités avant de les autoriser, même quand le risque semble incertain. Vous arrêtez votre intervention quand une équipe démarre à côté sans vous avoir informé. Vous suspendez et réévaluez avant d'autoriser un accès urgent non prévu. Cette posture préventive — sur les situations planifiées comme sur les imprévues — est ce qui évite les accidents dans les zones d'intersection." },
        },
      }, 
      {
        type: "choix",
        text: "En fin d'intervention, un prestataire vous donne oralement des informations importantes sur l'état du matériel qu'il a traité. Il est pressé de partir.",
        tags: ["interférence", "information"],
        answers: [
          { text: "Je note mentalement les points essentiels — je les consignerai plus tard.", score: 0 },
          { text: "Je lui demande de rester quelques minutes pour formaliser ces informations dans notre registre.", score: 2 },
          { text: "Je les note rapidement dans mon carnet et je les consigne dès que possible.", score: 1 },
          { text: "Je lui demande de me les envoyer par mail.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous analysez les co-activités planifiées mais réagissez encore de façon insuffisante aux situations imprévues", desc: "Laisser deux équipes démarrer simultanément parce que le risque semble incertain, continuer son intervention quand une équipe démarre à côté sans prévenir, ne pas formaliser les informations transmises oralement : ces comportements laissent des risques d'interférence non traités. En co-activité, les accidents surviennent précisément dans les zones d'intersection non anticipées." },
          moyen: { label: "Pratiques en développement", titre: "Vous gérez bien les co-activités prévues mais les situations imprévues vous trouvent encore en réaction", desc: "Vous analysez les co-activités planifiées et vous documentez les risques d'interférence. Mais quand une situation imprévue survient en cours d'intervention — une équipe qui démarre sans prévenir, un changement de dernière minute — votre réaction peut encore être insuffisante. L'enjeu est d'appliquer le même réflexe de suspension et de réévaluation aux situations non planifiées." },
          haut: { label: "Réflexes installés", titre: "Vous anticipez les risques d'interférence et suspendez systématiquement face aux situations imprévues", desc: "Vous analysez les co-activités avant de les autoriser, même quand le risque semble incertain. Vous arrêtez votre intervention quand une équipe démarre à côté sans vous avoir informé. Vous suspendez et réévaluez avant d'autoriser un accès urgent non prévu. Cette posture préventive — sur les situations planifiées comme sur les imprévues — est ce qui évite les accidents dans les zones d'intersection." },
        },
      }, 
      {
        type: "choix",
        text: "Une zone est partagée entre vos équipes et un prestataire. Des habitudes de circulation informelles se sont créées qui ne correspondent plus au plan de circulation officiel.",
        tags: ["interférence", "zones"],
        answers: [
          { text: "Je laisse — les habitudes se sont créées parce qu'elles sont plus pratiques.", score: 0 },
          { text: "Je revois le plan de circulation avec le prestataire pour l'actualiser ou rétablir les règles.", score: 2 },
          { text: "Je rappelle le plan de circulation officiel à mes équipes.", score: 1 },
          { text: "J'attends le prochain audit pour traiter le sujet formellement.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous analysez les co-activités planifiées mais réagissez encore de façon insuffisante aux situations imprévues", desc: "Laisser deux équipes démarrer simultanément parce que le risque semble incertain, continuer son intervention quand une équipe démarre à côté sans prévenir, ne pas formaliser les informations transmises oralement : ces comportements laissent des risques d'interférence non traités. En co-activité, les accidents surviennent précisément dans les zones d'intersection non anticipées." },
          moyen: { label: "Pratiques en développement", titre: "Vous gérez bien les co-activités prévues mais les situations imprévues vous trouvent encore en réaction", desc: "Vous analysez les co-activités planifiées et vous documentez les risques d'interférence. Mais quand une situation imprévue survient en cours d'intervention — une équipe qui démarre sans prévenir, un changement de dernière minute — votre réaction peut encore être insuffisante. L'enjeu est d'appliquer le même réflexe de suspension et de réévaluation aux situations non planifiées." },
          haut: { label: "Réflexes installés", titre: "Vous anticipez les risques d'interférence et suspendez systématiquement face aux situations imprévues", desc: "Vous analysez les co-activités avant de les autoriser, même quand le risque semble incertain. Vous arrêtez votre intervention quand une équipe démarre à côté sans vous avoir informé. Vous suspendez et réévaluez avant d'autoriser un accès urgent non prévu. Cette posture préventive — sur les situations planifiées comme sur les imprévues — est ce qui évite les accidents dans les zones d'intersection." },
        },
      }, 
      {
        type: "likert",
        text: "Vous formalisez les informations sécurité importantes transmises oralement par vos prestataires avant qu'ils quittent le site.",
        tags: ["interférence", "formalisation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous analysez les co-activités planifiées mais réagissez encore de façon insuffisante aux situations imprévues", desc: "Laisser deux équipes démarrer simultanément parce que le risque semble incertain, continuer son intervention quand une équipe démarre à côté sans prévenir, ne pas formaliser les informations transmises oralement : ces comportements laissent des risques d'interférence non traités. En co-activité, les accidents surviennent précisément dans les zones d'intersection non anticipées." },
          moyen: { label: "Pratiques en développement", titre: "Vous gérez bien les co-activités prévues mais les situations imprévues vous trouvent encore en réaction", desc: "Vous analysez les co-activités planifiées et vous documentez les risques d'interférence. Mais quand une situation imprévue survient en cours d'intervention — une équipe qui démarre sans prévenir, un changement de dernière minute — votre réaction peut encore être insuffisante. L'enjeu est d'appliquer le même réflexe de suspension et de réévaluation aux situations non planifiées." },
          haut: { label: "Réflexes installés", titre: "Vous anticipez les risques d'interférence et suspendez systématiquement face aux situations imprévues", desc: "Vous analysez les co-activités avant de les autoriser, même quand le risque semble incertain. Vous arrêtez votre intervention quand une équipe démarre à côté sans vous avoir informé. Vous suspendez et réévaluez avant d'autoriser un accès urgent non prévu. Cette posture préventive — sur les situations planifiées comme sur les imprévues — est ce qui évite les accidents dans les zones d'intersection." },
        },
      }, 
      {
        type: "choix",
        text: "Un incident de co-activité s'est produit entre votre équipe et un prestataire. Les deux parties ont tendance à se rejeter mutuellement la responsabilité.",
        tags: ["interférence", "REX"],
        answers: [
          { text: "Je défends la position de mon équipe — le prestataire n'a pas respecté les règles établies.", score: 0 },
          { text: "Je propose un REX conjoint pour analyser les faits sans position défensive.", score: 2 },
          { text: "Je réalise mon propre REX interne et je le partage avec le prestataire.", score: 1 },
          { text: "Je remonte la situation à ma hiérarchie pour qu'elle gère avec le donneur d'ordre du prestataire.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous analysez les co-activités planifiées mais réagissez encore de façon insuffisante aux situations imprévues", desc: "Laisser deux équipes démarrer simultanément parce que le risque semble incertain, continuer son intervention quand une équipe démarre à côté sans prévenir, ne pas formaliser les informations transmises oralement : ces comportements laissent des risques d'interférence non traités. En co-activité, les accidents surviennent précisément dans les zones d'intersection non anticipées." },
          moyen: { label: "Pratiques en développement", titre: "Vous gérez bien les co-activités prévues mais les situations imprévues vous trouvent encore en réaction", desc: "Vous analysez les co-activités planifiées et vous documentez les risques d'interférence. Mais quand une situation imprévue survient en cours d'intervention — une équipe qui démarre sans prévenir, un changement de dernière minute — votre réaction peut encore être insuffisante. L'enjeu est d'appliquer le même réflexe de suspension et de réévaluation aux situations non planifiées." },
          haut: { label: "Réflexes installés", titre: "Vous anticipez les risques d'interférence et suspendez systématiquement face aux situations imprévues", desc: "Vous analysez les co-activités avant de les autoriser, même quand le risque semble incertain. Vous arrêtez votre intervention quand une équipe démarre à côté sans vous avoir informé. Vous suspendez et réévaluez avant d'autoriser un accès urgent non prévu. Cette posture préventive — sur les situations planifiées comme sur les imprévues — est ce qui évite les accidents dans les zones d'intersection." },
        },
      }
    ],

    2: [
      {
        type: "choix",
        text: "Un prestataire régulier contourne régulièrement une procédure parce que 'ça va plus vite'. Aucun incident n'est survenu. La relation commerciale est importante.",
        tags: ["écarts prestataire", "intervention"],
        answers: [
          { text: "Je laisse — aucun incident ne justifie de créer des tensions sur une relation importante.", score: 0 },
          { text: "Je lui signale l'écart formellement et j'escalade à mon responsable si ça continue.", score: 2 },
          { text: "Je lui en parle informellement pour qu'il fasse attention, sans formaliser.", score: 1 },
          { text: "Je le signale au responsable du prestataire sans en parler directement à l'intervenant.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous signalez les écarts graves des prestataires mais laissez encore passer les accommodements habituels", desc: "Tolérer le contournement d'un prestataire parce que la relation commerciale est importante, valider une intervention dont le résultat est conforme malgré de mauvaises pratiques, ne pas escalader après deux signalements sans effet : cette tolérance envoie aux prestataires le message que vos règles sont négociables. Ce qui est toléré sur votre site devient la norme de fait." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les écarts significatifs des prestataires mais hésitez encore sur les accommodements récurrents", desc: "Vous signalez les écarts clairement problématiques et vous escaladez si nécessaire. Mais les accommodements récurrents qui n'ont pas encore causé d'incident, les résultats conformes obtenus par de mauvaises méthodes : votre traitement reste encore inconsistant. L'enjeu est de traiter tous les écarts avec la même rigueur, indépendamment de leurs conséquences immédiates." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les écarts des prestataires avec la même rigueur que ceux de vos équipes internes", desc: "Vous signalez le contournement récurrent du prestataire même sans incident et même si la relation est importante. Vous escaladez quand les signalements restent sans effet. Vous refusez un résultat conforme obtenu par de mauvaises méthodes. Cette rigueur constante envers tous les intervenants crée des standards crédibles et protège réellement votre site." },
        },
      }, 
      {
        type: "likert",
        text: "Vous signalez formellement les écarts de sécurité des prestataires, quelle que soit l'importance de la relation commerciale.",
        tags: ["écarts prestataire", "fermeté"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous signalez les écarts graves des prestataires mais laissez encore passer les accommodements habituels", desc: "Tolérer le contournement d'un prestataire parce que la relation commerciale est importante, valider une intervention dont le résultat est conforme malgré de mauvaises pratiques, ne pas escalader après deux signalements sans effet : cette tolérance envoie aux prestataires le message que vos règles sont négociables. Ce qui est toléré sur votre site devient la norme de fait." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les écarts significatifs des prestataires mais hésitez encore sur les accommodements récurrents", desc: "Vous signalez les écarts clairement problématiques et vous escaladez si nécessaire. Mais les accommodements récurrents qui n'ont pas encore causé d'incident, les résultats conformes obtenus par de mauvaises méthodes : votre traitement reste encore inconsistant. L'enjeu est de traiter tous les écarts avec la même rigueur, indépendamment de leurs conséquences immédiates." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les écarts des prestataires avec la même rigueur que ceux de vos équipes internes", desc: "Vous signalez le contournement récurrent du prestataire même sans incident et même si la relation est importante. Vous escaladez quand les signalements restent sans effet. Vous refusez un résultat conforme obtenu par de mauvaises méthodes. Cette rigueur constante envers tous les intervenants crée des standards crédibles et protège réellement votre site." },
        },
      }, 
      {
        type: "choix",
        text: "Un sous-traitant a réalisé une tâche correctement sur le plan technique mais en contournant les consignes de sécurité. Le résultat final est conforme.",
        tags: ["écarts prestataire", "résultat conforme"],
        answers: [
          { text: "Je ne dis rien — le résultat est conforme et mettre ça en avant va créer un conflit.", score: 0 },
          { text: "Je le signale formellement — la conformité du résultat ne valide pas les moyens utilisés.", score: 2 },
          { text: "J'en parle au responsable du prestataire pour éviter que ça se reproduise.", score: 1 },
          { text: "Je note l'écart sans le signaler officiellement.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous signalez les écarts graves des prestataires mais laissez encore passer les accommodements habituels", desc: "Tolérer le contournement d'un prestataire parce que la relation commerciale est importante, valider une intervention dont le résultat est conforme malgré de mauvaises pratiques, ne pas escalader après deux signalements sans effet : cette tolérance envoie aux prestataires le message que vos règles sont négociables. Ce qui est toléré sur votre site devient la norme de fait." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les écarts significatifs des prestataires mais hésitez encore sur les accommodements récurrents", desc: "Vous signalez les écarts clairement problématiques et vous escaladez si nécessaire. Mais les accommodements récurrents qui n'ont pas encore causé d'incident, les résultats conformes obtenus par de mauvaises méthodes : votre traitement reste encore inconsistant. L'enjeu est de traiter tous les écarts avec la même rigueur, indépendamment de leurs conséquences immédiates." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les écarts des prestataires avec la même rigueur que ceux de vos équipes internes", desc: "Vous signalez le contournement récurrent du prestataire même sans incident et même si la relation est importante. Vous escaladez quand les signalements restent sans effet. Vous refusez un résultat conforme obtenu par de mauvaises méthodes. Cette rigueur constante envers tous les intervenants crée des standards crédibles et protège réellement votre site." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez signalé deux fois en un mois des écarts de sécurité au responsable d'un prestataire. Les comportements n'ont pas changé.",
        tags: ["écarts prestataire", "escalade"],
        answers: [
          { text: "Je continues à signaler — la pression finira par porter ses fruits.", score: 0.5 },
          { text: "J'escalade à mon responsable et au donneur d'ordre pour que la situation soit traitée à un niveau supérieur.", score: 2 },
          { text: "Je renforce ma supervision directe de ce prestataire.", score: 1 },
          { text: "Je propose de ne plus faire appel à ce prestataire.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous signalez les écarts graves des prestataires mais laissez encore passer les accommodements habituels", desc: "Tolérer le contournement d'un prestataire parce que la relation commerciale est importante, valider une intervention dont le résultat est conforme malgré de mauvaises pratiques, ne pas escalader après deux signalements sans effet : cette tolérance envoie aux prestataires le message que vos règles sont négociables. Ce qui est toléré sur votre site devient la norme de fait." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les écarts significatifs des prestataires mais hésitez encore sur les accommodements récurrents", desc: "Vous signalez les écarts clairement problématiques et vous escaladez si nécessaire. Mais les accommodements récurrents qui n'ont pas encore causé d'incident, les résultats conformes obtenus par de mauvaises méthodes : votre traitement reste encore inconsistant. L'enjeu est de traiter tous les écarts avec la même rigueur, indépendamment de leurs conséquences immédiates." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les écarts des prestataires avec la même rigueur que ceux de vos équipes internes", desc: "Vous signalez le contournement récurrent du prestataire même sans incident et même si la relation est importante. Vous escaladez quand les signalements restent sans effet. Vous refusez un résultat conforme obtenu par de mauvaises méthodes. Cette rigueur constante envers tous les intervenants crée des standards crédibles et protège réellement votre site." },
        },
      }, 
      {
        type: "choix",
        text: "Vous devez refuser une intervention d'un prestataire parce qu'il ne respecte pas les conditions de sécurité requises. Votre responsable vous demande de trouver un arrangement.",
        tags: ["écarts prestataire", "pression"],
        answers: [
          { text: "Je cherche un arrangement — mon responsable a arbitré.", score: 0 },
          { text: "Je maintiens mon refus et je lui explique les risques concrets que ça crée.", score: 2 },
          { text: "Je lui demande de me confirmer par écrit qu'il assume la responsabilité.", score: 1.5 },
          { text: "Je cède partiellement en limitant le périmètre de l'intervention.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous signalez les écarts graves des prestataires mais laissez encore passer les accommodements habituels", desc: "Tolérer le contournement d'un prestataire parce que la relation commerciale est importante, valider une intervention dont le résultat est conforme malgré de mauvaises pratiques, ne pas escalader après deux signalements sans effet : cette tolérance envoie aux prestataires le message que vos règles sont négociables. Ce qui est toléré sur votre site devient la norme de fait." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les écarts significatifs des prestataires mais hésitez encore sur les accommodements récurrents", desc: "Vous signalez les écarts clairement problématiques et vous escaladez si nécessaire. Mais les accommodements récurrents qui n'ont pas encore causé d'incident, les résultats conformes obtenus par de mauvaises méthodes : votre traitement reste encore inconsistant. L'enjeu est de traiter tous les écarts avec la même rigueur, indépendamment de leurs conséquences immédiates." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les écarts des prestataires avec la même rigueur que ceux de vos équipes internes", desc: "Vous signalez le contournement récurrent du prestataire même sans incident et même si la relation est importante. Vous escaladez quand les signalements restent sans effet. Vous refusez un résultat conforme obtenu par de mauvaises méthodes. Cette rigueur constante envers tous les intervenants crée des standards crédibles et protège réellement votre site." },
        },
      }, 
      {
        type: "likert",
        text: "Vous refusez le démarrage d'une intervention si les conditions de sécurité requises ne sont pas remplies, quelle que soit la pression de planning.",
        tags: ["écarts prestataire", "démarrage"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous signalez les écarts graves des prestataires mais laissez encore passer les accommodements habituels", desc: "Tolérer le contournement d'un prestataire parce que la relation commerciale est importante, valider une intervention dont le résultat est conforme malgré de mauvaises pratiques, ne pas escalader après deux signalements sans effet : cette tolérance envoie aux prestataires le message que vos règles sont négociables. Ce qui est toléré sur votre site devient la norme de fait." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les écarts significatifs des prestataires mais hésitez encore sur les accommodements récurrents", desc: "Vous signalez les écarts clairement problématiques et vous escaladez si nécessaire. Mais les accommodements récurrents qui n'ont pas encore causé d'incident, les résultats conformes obtenus par de mauvaises méthodes : votre traitement reste encore inconsistant. L'enjeu est de traiter tous les écarts avec la même rigueur, indépendamment de leurs conséquences immédiates." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les écarts des prestataires avec la même rigueur que ceux de vos équipes internes", desc: "Vous signalez le contournement récurrent du prestataire même sans incident et même si la relation est importante. Vous escaladez quand les signalements restent sans effet. Vous refusez un résultat conforme obtenu par de mauvaises méthodes. Cette rigueur constante envers tous les intervenants crée des standards crédibles et protège réellement votre site." },
        },
      }, 
      {
        type: "choix",
        text: "Vous observez que les sous-traitants qui interviennent sur votre site ont des niveaux de culture sécurité très variables. Certains sont bien en dessous de vos standards.",
        tags: ["écarts prestataire", "culture"],
        answers: [
          { text: "Je m'adapte à chaque prestataire — je ne peux pas imposer mes standards à des entreprises extérieures.", score: 0 },
          { text: "J'applique les mêmes exigences à tous les intervenants sur mon site, et je les accompagne si nécessaire.", score: 2 },
          { text: "Je renforce la supervision des prestataires les moins rigoureux.", score: 1 },
          { text: "Je remonte la situation à mon donneur d'ordre pour qu'il sélectionne des prestataires plus qualifiés.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous signalez les écarts graves des prestataires mais laissez encore passer les accommodements habituels", desc: "Tolérer le contournement d'un prestataire parce que la relation commerciale est importante, valider une intervention dont le résultat est conforme malgré de mauvaises pratiques, ne pas escalader après deux signalements sans effet : cette tolérance envoie aux prestataires le message que vos règles sont négociables. Ce qui est toléré sur votre site devient la norme de fait." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les écarts significatifs des prestataires mais hésitez encore sur les accommodements récurrents", desc: "Vous signalez les écarts clairement problématiques et vous escaladez si nécessaire. Mais les accommodements récurrents qui n'ont pas encore causé d'incident, les résultats conformes obtenus par de mauvaises méthodes : votre traitement reste encore inconsistant. L'enjeu est de traiter tous les écarts avec la même rigueur, indépendamment de leurs conséquences immédiates." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les écarts des prestataires avec la même rigueur que ceux de vos équipes internes", desc: "Vous signalez le contournement récurrent du prestataire même sans incident et même si la relation est importante. Vous escaladez quand les signalements restent sans effet. Vous refusez un résultat conforme obtenu par de mauvaises méthodes. Cette rigueur constante envers tous les intervenants crée des standards crédibles et protège réellement votre site." },
        },
      }, 
      {
        type: "choix",
        text: "Un de vos collaborateurs, Baptiste, vous signale avoir vu un prestataire prendre un risque grave mais ne pas vouloir témoigner officiellement par peur des représailles.",
        tags: ["écarts prestataire", "témoignage"],
        answers: [
          { text: "Sans témoignage, je ne peux pas agir — je prends note en attendant.", score: 0 },
          { text: "Je prends les mesures conservatoires nécessaires sur la base de ce que Baptiste m'a rapporté.", score: 2 },
          { text: "Je réalise moi-même une vérification pour constater l'écart directement.", score: 1.5 },
          { text: "Je demande à Baptiste de reconsidérer son témoignage en lui expliquant les enjeux.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous signalez les écarts graves des prestataires mais laissez encore passer les accommodements habituels", desc: "Tolérer le contournement d'un prestataire parce que la relation commerciale est importante, valider une intervention dont le résultat est conforme malgré de mauvaises pratiques, ne pas escalader après deux signalements sans effet : cette tolérance envoie aux prestataires le message que vos règles sont négociables. Ce qui est toléré sur votre site devient la norme de fait." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les écarts significatifs des prestataires mais hésitez encore sur les accommodements récurrents", desc: "Vous signalez les écarts clairement problématiques et vous escaladez si nécessaire. Mais les accommodements récurrents qui n'ont pas encore causé d'incident, les résultats conformes obtenus par de mauvaises méthodes : votre traitement reste encore inconsistant. L'enjeu est de traiter tous les écarts avec la même rigueur, indépendamment de leurs conséquences immédiates." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les écarts des prestataires avec la même rigueur que ceux de vos équipes internes", desc: "Vous signalez le contournement récurrent du prestataire même sans incident et même si la relation est importante. Vous escaladez quand les signalements restent sans effet. Vous refusez un résultat conforme obtenu par de mauvaises méthodes. Cette rigueur constante envers tous les intervenants crée des standards crédibles et protège réellement votre site." },
        },
      }, 
      {
        type: "likert",
        text: "Vous appliquez les mêmes standards de sécurité à vos équipes internes et à vos prestataires — pas de tolérance supplémentaire pour les uns ou pour les autres.",
        tags: ["écarts prestataire", "équité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous signalez les écarts graves des prestataires mais laissez encore passer les accommodements habituels", desc: "Tolérer le contournement d'un prestataire parce que la relation commerciale est importante, valider une intervention dont le résultat est conforme malgré de mauvaises pratiques, ne pas escalader après deux signalements sans effet : cette tolérance envoie aux prestataires le message que vos règles sont négociables. Ce qui est toléré sur votre site devient la norme de fait." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les écarts significatifs des prestataires mais hésitez encore sur les accommodements récurrents", desc: "Vous signalez les écarts clairement problématiques et vous escaladez si nécessaire. Mais les accommodements récurrents qui n'ont pas encore causé d'incident, les résultats conformes obtenus par de mauvaises méthodes : votre traitement reste encore inconsistant. L'enjeu est de traiter tous les écarts avec la même rigueur, indépendamment de leurs conséquences immédiates." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les écarts des prestataires avec la même rigueur que ceux de vos équipes internes", desc: "Vous signalez le contournement récurrent du prestataire même sans incident et même si la relation est importante. Vous escaladez quand les signalements restent sans effet. Vous refusez un résultat conforme obtenu par de mauvaises méthodes. Cette rigueur constante envers tous les intervenants crée des standards crédibles et protège réellement votre site." },
        },
      }, 
      {
        type: "choix",
        text: "À la fin d'une intervention, vous réalisez que le prestataire a réalisé son travail correctement mais que plusieurs micro-écarts sécurité ont été observés. Rien de grave n'est survenu.",
        tags: ["écarts prestataire", "bilan"],
        answers: [
          { text: "Je valide l'intervention — tout s'est bien passé et les micro-écarts n'ont pas eu de conséquences.", score: 0 },
          { text: "Je consigne les écarts dans le bilan d'intervention et j'en informe le responsable du prestataire.", score: 2 },
          { text: "Je les mentionne verbalement au prestataire avant son départ.", score: 1 },
          { text: "Je les note pour les évoquer si les mêmes écarts se reproduisent.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous signalez les écarts graves des prestataires mais laissez encore passer les accommodements habituels", desc: "Tolérer le contournement d'un prestataire parce que la relation commerciale est importante, valider une intervention dont le résultat est conforme malgré de mauvaises pratiques, ne pas escalader après deux signalements sans effet : cette tolérance envoie aux prestataires le message que vos règles sont négociables. Ce qui est toléré sur votre site devient la norme de fait." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les écarts significatifs des prestataires mais hésitez encore sur les accommodements récurrents", desc: "Vous signalez les écarts clairement problématiques et vous escaladez si nécessaire. Mais les accommodements récurrents qui n'ont pas encore causé d'incident, les résultats conformes obtenus par de mauvaises méthodes : votre traitement reste encore inconsistant. L'enjeu est de traiter tous les écarts avec la même rigueur, indépendamment de leurs conséquences immédiates." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les écarts des prestataires avec la même rigueur que ceux de vos équipes internes", desc: "Vous signalez le contournement récurrent du prestataire même sans incident et même si la relation est importante. Vous escaladez quand les signalements restent sans effet. Vous refusez un résultat conforme obtenu par de mauvaises méthodes. Cette rigueur constante envers tous les intervenants crée des standards crédibles et protège réellement votre site." },
        },
      }
    ],

    3: [
      {
        type: "choix",
        text: "Vous avez connaissance d'un incident survenu récemment sur une installation similaire dans une autre entreprise. Votre prestataire habituel intervient la semaine prochaine sur un équipement identique.",
        tags: ["information", "partage"],
        answers: [
          { text: "Je garde l'information pour moi — c'est survenu ailleurs et les contextes sont différents.", score: 0 },
          { text: "Je transmets l'information à mon responsable en proposant de la partager avec le prestataire.", score: 2 },
          { text: "Je la partage directement avec le prestataire — l'information est utile.", score: 1.5 },
          { text: "J'attends que l'information soit diffusée officiellement par les canaux professionnels.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Le partage d'information avec vos prestataires est réactif plutôt que systématique", desc: "Ne pas mentionner une modification adjacente à la zone du prestataire, attendre que l'information soit demandée, formaliser en différé ce qui a été dit oralement : l'information de sécurité non partagée est de l'information perdue. En co-activité, ce que le prestataire ne sait pas est aussi dangereux que ce qu'il fait mal." },
          moyen: { label: "Pratiques en développement", titre: "Vous partagez les informations importantes mais pas de façon systématique et proactive", desc: "Vous transmettez les informations importantes quand la situation l'exige clairement. Mais l'information proactive — partager sans qu'on vous le demande, informer des modifications périphériques, vérifier la compréhension effective : ces comportements sont encore insuffisamment ancrés. L'enjeu est de passer d'un partage réactif à un partage systématique." },
          haut: { label: "Réflexes installés", titre: "Vous partagez proactivement les informations de sécurité avec vos prestataires et vérifiez leur compréhension", desc: "Vous informez le prestataire des modifications adjacentes à sa zone même s'il ne les a pas demandées. Vous formalisez les informations orales avant son départ. Vous vérifiez la compréhension effective des consignes, pas seulement la signature. Cette façon de traiter l'information comme un outil de sécurité actif — pas comme une formalité — est ce qui rend la co-activité réellement sûre." },
        },
      }, 
      {
        type: "likert",
        text: "Vous partagez proactivement avec vos prestataires les informations de sécurité utiles à leurs interventions, même quand ils ne les ont pas demandées.",
        tags: ["information", "proactivité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Le partage d'information avec vos prestataires est réactif plutôt que systématique", desc: "Ne pas mentionner une modification adjacente à la zone du prestataire, attendre que l'information soit demandée, formaliser en différé ce qui a été dit oralement : l'information de sécurité non partagée est de l'information perdue. En co-activité, ce que le prestataire ne sait pas est aussi dangereux que ce qu'il fait mal." },
          moyen: { label: "Pratiques en développement", titre: "Vous partagez les informations importantes mais pas de façon systématique et proactive", desc: "Vous transmettez les informations importantes quand la situation l'exige clairement. Mais l'information proactive — partager sans qu'on vous le demande, informer des modifications périphériques, vérifier la compréhension effective : ces comportements sont encore insuffisamment ancrés. L'enjeu est de passer d'un partage réactif à un partage systématique." },
          haut: { label: "Réflexes installés", titre: "Vous partagez proactivement les informations de sécurité avec vos prestataires et vérifiez leur compréhension", desc: "Vous informez le prestataire des modifications adjacentes à sa zone même s'il ne les a pas demandées. Vous formalisez les informations orales avant son départ. Vous vérifiez la compréhension effective des consignes, pas seulement la signature. Cette façon de traiter l'information comme un outil de sécurité actif — pas comme une formalité — est ce qui rend la co-activité réellement sûre." },
        },
      }, 
      {
        type: "choix",
        text: "Un prestataire arrive pour une intervention. Depuis sa dernière visite, une modification a été faite sur une installation adjacente à sa zone de travail. Il n'en est pas informé.",
        tags: ["information", "briefing"],
        answers: [
          { text: "Je ne mentionne pas la modification — elle n'est pas dans sa zone de travail directe.", score: 0 },
          { text: "Je l'inclus dans le briefing de démarrage même si elle est à la périphérie de son périmètre.", score: 2 },
          { text: "Je note que je devrais l'informer et je le fais si j'y pense en cours d'intervention.", score: 0 },
          { text: "Je lui dis de se renseigner auprès du responsable de l'installation modifiée.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Le partage d'information avec vos prestataires est réactif plutôt que systématique", desc: "Ne pas mentionner une modification adjacente à la zone du prestataire, attendre que l'information soit demandée, formaliser en différé ce qui a été dit oralement : l'information de sécurité non partagée est de l'information perdue. En co-activité, ce que le prestataire ne sait pas est aussi dangereux que ce qu'il fait mal." },
          moyen: { label: "Pratiques en développement", titre: "Vous partagez les informations importantes mais pas de façon systématique et proactive", desc: "Vous transmettez les informations importantes quand la situation l'exige clairement. Mais l'information proactive — partager sans qu'on vous le demande, informer des modifications périphériques, vérifier la compréhension effective : ces comportements sont encore insuffisamment ancrés. L'enjeu est de passer d'un partage réactif à un partage systématique." },
          haut: { label: "Réflexes installés", titre: "Vous partagez proactivement les informations de sécurité avec vos prestataires et vérifiez leur compréhension", desc: "Vous informez le prestataire des modifications adjacentes à sa zone même s'il ne les a pas demandées. Vous formalisez les informations orales avant son départ. Vous vérifiez la compréhension effective des consignes, pas seulement la signature. Cette façon de traiter l'information comme un outil de sécurité actif — pas comme une formalité — est ce qui rend la co-activité réellement sûre." },
        },
      }, 
      {
        type: "choix",
        text: "En fin d'intervention, votre prestataire vous informe que sa procédure habituelle ne fonctionnait pas sur cet équipement et qu'il a dû improviser. Il décrit brièvement ce qu'il a fait.",
        tags: ["information", "retour"],
        answers: [
          { text: "Je valide — il est l'expert de son métier et l'intervention s'est bien passée.", score: 0 },
          { text: "Je lui demande de détailler par écrit ce qu'il a fait pour que ça soit documenté et transmis.", score: 2 },
          { text: "Je note l'information pour moi mais je ne formalise pas.", score: 0 },
          { text: "J'en parle à mon responsable technique pour qu'il évalue les implications.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Le partage d'information avec vos prestataires est réactif plutôt que systématique", desc: "Ne pas mentionner une modification adjacente à la zone du prestataire, attendre que l'information soit demandée, formaliser en différé ce qui a été dit oralement : l'information de sécurité non partagée est de l'information perdue. En co-activité, ce que le prestataire ne sait pas est aussi dangereux que ce qu'il fait mal." },
          moyen: { label: "Pratiques en développement", titre: "Vous partagez les informations importantes mais pas de façon systématique et proactive", desc: "Vous transmettez les informations importantes quand la situation l'exige clairement. Mais l'information proactive — partager sans qu'on vous le demande, informer des modifications périphériques, vérifier la compréhension effective : ces comportements sont encore insuffisamment ancrés. L'enjeu est de passer d'un partage réactif à un partage systématique." },
          haut: { label: "Réflexes installés", titre: "Vous partagez proactivement les informations de sécurité avec vos prestataires et vérifiez leur compréhension", desc: "Vous informez le prestataire des modifications adjacentes à sa zone même s'il ne les a pas demandées. Vous formalisez les informations orales avant son départ. Vous vérifiez la compréhension effective des consignes, pas seulement la signature. Cette façon de traiter l'information comme un outil de sécurité actif — pas comme une formalité — est ce qui rend la co-activité réellement sûre." },
        },
      }, 
      {
        type: "choix",
        text: "En réalisant votre analyse de co-activité, vous identifiez un risque d'interférence que le prestataire n'a pas mentionné dans son plan de prévention.",
        tags: ["information", "risque identifié"],
        answers: [
          { text: "Je laisse — si le prestataire n'a pas identifié ce risque, c'est peut-être que je me trompe.", score: 0 },
          { text: "Je lui signale le risque identifié et je demande que le plan de prévention soit complété.", score: 2 },
          { text: "J'intègre ce risque dans ma propre gestion sans en informer le prestataire.", score: 0 },
          { text: "Je le mentionne lors du briefing de démarrage sans modifier le plan de prévention.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Le partage d'information avec vos prestataires est réactif plutôt que systématique", desc: "Ne pas mentionner une modification adjacente à la zone du prestataire, attendre que l'information soit demandée, formaliser en différé ce qui a été dit oralement : l'information de sécurité non partagée est de l'information perdue. En co-activité, ce que le prestataire ne sait pas est aussi dangereux que ce qu'il fait mal." },
          moyen: { label: "Pratiques en développement", titre: "Vous partagez les informations importantes mais pas de façon systématique et proactive", desc: "Vous transmettez les informations importantes quand la situation l'exige clairement. Mais l'information proactive — partager sans qu'on vous le demande, informer des modifications périphériques, vérifier la compréhension effective : ces comportements sont encore insuffisamment ancrés. L'enjeu est de passer d'un partage réactif à un partage systématique." },
          haut: { label: "Réflexes installés", titre: "Vous partagez proactivement les informations de sécurité avec vos prestataires et vérifiez leur compréhension", desc: "Vous informez le prestataire des modifications adjacentes à sa zone même s'il ne les a pas demandées. Vous formalisez les informations orales avant son départ. Vous vérifiez la compréhension effective des consignes, pas seulement la signature. Cette façon de traiter l'information comme un outil de sécurité actif — pas comme une formalité — est ce qui rend la co-activité réellement sûre." },
        },
      }, 
      {
        type: "likert",
        text: "Vous communiquez aux prestataires les retours sur leur performance sécurité — positifs et négatifs — pas seulement les écarts.",
        tags: ["information", "feedback"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Le partage d'information avec vos prestataires est réactif plutôt que systématique", desc: "Ne pas mentionner une modification adjacente à la zone du prestataire, attendre que l'information soit demandée, formaliser en différé ce qui a été dit oralement : l'information de sécurité non partagée est de l'information perdue. En co-activité, ce que le prestataire ne sait pas est aussi dangereux que ce qu'il fait mal." },
          moyen: { label: "Pratiques en développement", titre: "Vous partagez les informations importantes mais pas de façon systématique et proactive", desc: "Vous transmettez les informations importantes quand la situation l'exige clairement. Mais l'information proactive — partager sans qu'on vous le demande, informer des modifications périphériques, vérifier la compréhension effective : ces comportements sont encore insuffisamment ancrés. L'enjeu est de passer d'un partage réactif à un partage systématique." },
          haut: { label: "Réflexes installés", titre: "Vous partagez proactivement les informations de sécurité avec vos prestataires et vérifiez leur compréhension", desc: "Vous informez le prestataire des modifications adjacentes à sa zone même s'il ne les a pas demandées. Vous formalisez les informations orales avant son départ. Vous vérifiez la compréhension effective des consignes, pas seulement la signature. Cette façon de traiter l'information comme un outil de sécurité actif — pas comme une formalité — est ce qui rend la co-activité réellement sûre." },
        },
      }, 
      {
        type: "choix",
        text: "Un changement de planning va modifier les conditions d'intervention d'un prestataire qui travaille déjà sur site. Il va être affecté mais il n'en est pas encore informé.",
        tags: ["information", "changement"],
        answers: [
          { text: "J'informe le prestataire dès que possible, même si le changement n'est pas encore définitif.", score: 2 },
          { text: "J'attends que le changement soit confirmé avant d'informer le prestataire.", score: 0.5 },
          { text: "Je l'informe au moment où le changement s'applique.", score: 0 },
          { text: "Je demande à mon responsable de l'informer — c'est lui qui gère la relation contractuelle.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Le partage d'information avec vos prestataires est réactif plutôt que systématique", desc: "Ne pas mentionner une modification adjacente à la zone du prestataire, attendre que l'information soit demandée, formaliser en différé ce qui a été dit oralement : l'information de sécurité non partagée est de l'information perdue. En co-activité, ce que le prestataire ne sait pas est aussi dangereux que ce qu'il fait mal." },
          moyen: { label: "Pratiques en développement", titre: "Vous partagez les informations importantes mais pas de façon systématique et proactive", desc: "Vous transmettez les informations importantes quand la situation l'exige clairement. Mais l'information proactive — partager sans qu'on vous le demande, informer des modifications périphériques, vérifier la compréhension effective : ces comportements sont encore insuffisamment ancrés. L'enjeu est de passer d'un partage réactif à un partage systématique." },
          haut: { label: "Réflexes installés", titre: "Vous partagez proactivement les informations de sécurité avec vos prestataires et vérifiez leur compréhension", desc: "Vous informez le prestataire des modifications adjacentes à sa zone même s'il ne les a pas demandées. Vous formalisez les informations orales avant son départ. Vous vérifiez la compréhension effective des consignes, pas seulement la signature. Cette façon de traiter l'information comme un outil de sécurité actif — pas comme une formalité — est ce qui rend la co-activité réellement sûre." },
        },
      }, 
      {
        type: "choix",
        text: "Des intervenants étrangers travaillent sur votre site. Vous avez des doutes sur leur compréhension réelle des consignes de sécurité lors de l'accueil.",
        tags: ["information", "langue"],
        answers: [
          { text: "Je fais confiance — ils ont signé les documents, ils ont compris.", score: 0 },
          { text: "Je vérifie la compréhension effective et je m'assure que les consignes critiques sont accessibles dans leur langue.", score: 2 },
          { text: "Je leur associe un référent bilingue de leur entreprise.", score: 1.5 },
          { text: "Je simplifie les consignes en utilisant des supports visuels.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Le partage d'information avec vos prestataires est réactif plutôt que systématique", desc: "Ne pas mentionner une modification adjacente à la zone du prestataire, attendre que l'information soit demandée, formaliser en différé ce qui a été dit oralement : l'information de sécurité non partagée est de l'information perdue. En co-activité, ce que le prestataire ne sait pas est aussi dangereux que ce qu'il fait mal." },
          moyen: { label: "Pratiques en développement", titre: "Vous partagez les informations importantes mais pas de façon systématique et proactive", desc: "Vous transmettez les informations importantes quand la situation l'exige clairement. Mais l'information proactive — partager sans qu'on vous le demande, informer des modifications périphériques, vérifier la compréhension effective : ces comportements sont encore insuffisamment ancrés. L'enjeu est de passer d'un partage réactif à un partage systématique." },
          haut: { label: "Réflexes installés", titre: "Vous partagez proactivement les informations de sécurité avec vos prestataires et vérifiez leur compréhension", desc: "Vous informez le prestataire des modifications adjacentes à sa zone même s'il ne les a pas demandées. Vous formalisez les informations orales avant son départ. Vous vérifiez la compréhension effective des consignes, pas seulement la signature. Cette façon de traiter l'information comme un outil de sécurité actif — pas comme une formalité — est ce qui rend la co-activité réellement sûre." },
        },
      }, 
      {
        type: "likert",
        text: "Vous vérifiez la compréhension effective des consignes de sécurité par les intervenants extérieurs, pas seulement leur signature sur les documents.",
        tags: ["information", "compréhension"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Le partage d'information avec vos prestataires est réactif plutôt que systématique", desc: "Ne pas mentionner une modification adjacente à la zone du prestataire, attendre que l'information soit demandée, formaliser en différé ce qui a été dit oralement : l'information de sécurité non partagée est de l'information perdue. En co-activité, ce que le prestataire ne sait pas est aussi dangereux que ce qu'il fait mal." },
          moyen: { label: "Pratiques en développement", titre: "Vous partagez les informations importantes mais pas de façon systématique et proactive", desc: "Vous transmettez les informations importantes quand la situation l'exige clairement. Mais l'information proactive — partager sans qu'on vous le demande, informer des modifications périphériques, vérifier la compréhension effective : ces comportements sont encore insuffisamment ancrés. L'enjeu est de passer d'un partage réactif à un partage systématique." },
          haut: { label: "Réflexes installés", titre: "Vous partagez proactivement les informations de sécurité avec vos prestataires et vérifiez leur compréhension", desc: "Vous informez le prestataire des modifications adjacentes à sa zone même s'il ne les a pas demandées. Vous formalisez les informations orales avant son départ. Vous vérifiez la compréhension effective des consignes, pas seulement la signature. Cette façon de traiter l'information comme un outil de sécurité actif — pas comme une formalité — est ce qui rend la co-activité réellement sûre." },
        },
      }, 
      {
        type: "choix",
        text: "Un incident de co-activité a eu lieu sur votre site. Le REX produit contient des enseignements utiles pour vos prestataires habituels. La diffusion externe n'est pas prévue.",
        tags: ["information", "REX partagé"],
        answers: [
          { text: "Je ne le partage pas — le REX est interne et la diffusion externe n'est pas prévue.", score: 0 },
          { text: "Je propose à ma hiérarchie de partager les enseignements pertinents avec nos prestataires.", score: 2 },
          { text: "J'en parle informellement aux prestataires concernés lors de leur prochaine intervention.", score: 1 },
          { text: "Je leur transmets directement les conclusions sans attendre la validation hiérarchique.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Le partage d'information avec vos prestataires est réactif plutôt que systématique", desc: "Ne pas mentionner une modification adjacente à la zone du prestataire, attendre que l'information soit demandée, formaliser en différé ce qui a été dit oralement : l'information de sécurité non partagée est de l'information perdue. En co-activité, ce que le prestataire ne sait pas est aussi dangereux que ce qu'il fait mal." },
          moyen: { label: "Pratiques en développement", titre: "Vous partagez les informations importantes mais pas de façon systématique et proactive", desc: "Vous transmettez les informations importantes quand la situation l'exige clairement. Mais l'information proactive — partager sans qu'on vous le demande, informer des modifications périphériques, vérifier la compréhension effective : ces comportements sont encore insuffisamment ancrés. L'enjeu est de passer d'un partage réactif à un partage systématique." },
          haut: { label: "Réflexes installés", titre: "Vous partagez proactivement les informations de sécurité avec vos prestataires et vérifiez leur compréhension", desc: "Vous informez le prestataire des modifications adjacentes à sa zone même s'il ne les a pas demandées. Vous formalisez les informations orales avant son départ. Vous vérifiez la compréhension effective des consignes, pas seulement la signature. Cette façon de traiter l'information comme un outil de sécurité actif — pas comme une formalité — est ce qui rend la co-activité réellement sûre." },
        },
      }
    ],

  },
  // ─────────────────────────────────────────────────────────────────────

    "epi-gestes-securite": {
    0: [
      {
        type: "choix",
        text: "Vous entrez dans une zone où le port du casque est obligatoire. Votre intervention dure deux minutes et vous connaissez parfaitement cet endroit. Votre casque est à l'entrée.",
        tags: ["EPI", "port"],
        answers: [
          { text: "J'entre sans casque — deux minutes en zone connue, le risque est négligeable.", score: 0 },
          { text: "Je retourne le chercher avant d'entrer.", score: 2 },
          { text: "Je fais vite et je reste près de l'entrée pour minimiser le risque.", score: 0 },
          { text: "Je vérifie d'abord si quelqu'un me regarde avant de décider.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous portez vos EPI mais avec des exceptions selon la durée, la zone ou le regard de l'équipe", desc: "Deux minutes en zone connue sans casque, l'oubli du harnais qu'on ne va pas récupérer, l'EPI qu'on retire parce qu'il fait chaud : ces comportements semblent raisonnables situationnellement mais ils représentent précisément les contextes où les accidents surviennent. La durée courte et la familiarité avec la zone sont des facteurs aggravants en termes de baisse de vigilance, pas des facteurs protecteurs." },
          moyen: { label: "Pratiques en développement", titre: "Vous portez vos EPI correctement dans la plupart des situations mais quelques contextes créent encore des exceptions", desc: "Vous portez vos EPI de façon régulière. Mais certains contextes — l'urgence, la fin de journée, la visite d'un client, un EPI dégradé avec aucun remplacement disponible — peuvent encore créer des exceptions dans votre comportement. L'enjeu est d'éliminer ces exceptions en traitant chaque situation comme une situation normale." },
          haut: { label: "Réflexes installés", titre: "Vous portez tous vos EPI dans toutes les situations, sans exception ni adaptation selon le contexte", desc: "Vous retournez chercher votre harnais même pour 20 minutes d'intervention. Vous remplacez le casque après un choc même sans dommage visible. Vous ne démarrez pas avec un EPI dégradé même sans remplacement disponible. Cette constance absolue — qui suppose d'assumer des retards et des inconvénients — est ce qui rend le port des EPI réellement protecteur." },
        },
      }, 
      {
        type: "choix",
        text: "Il fait 35 degrés sur le chantier. Votre collègue Karim a retiré ses gants de protection pour la troisième fois de la matinée. Il dit que c'est insupportable et que personne ne va l'en empêcher.",
        tags: ["EPI", "chaleur"],
        answers: [
          { text: "Je le laisse — dans cette chaleur, sa décision est compréhensible.", score: 0 },
          { text: "Je lui rappelle que les gants sont obligatoires et je lui suggère de signaler le problème à notre responsable.", score: 2 },
          { text: "Je lui prête les miens plus respirants si j'en ai.", score: 1 },
          { text: "Je le signale à notre chef d'équipe pour qu'il gère.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous portez vos EPI mais avec des exceptions selon la durée, la zone ou le regard de l'équipe", desc: "Deux minutes en zone connue sans casque, l'oubli du harnais qu'on ne va pas récupérer, l'EPI qu'on retire parce qu'il fait chaud : ces comportements semblent raisonnables situationnellement mais ils représentent précisément les contextes où les accidents surviennent. La durée courte et la familiarité avec la zone sont des facteurs aggravants en termes de baisse de vigilance, pas des facteurs protecteurs." },
          moyen: { label: "Pratiques en développement", titre: "Vous portez vos EPI correctement dans la plupart des situations mais quelques contextes créent encore des exceptions", desc: "Vous portez vos EPI de façon régulière. Mais certains contextes — l'urgence, la fin de journée, la visite d'un client, un EPI dégradé avec aucun remplacement disponible — peuvent encore créer des exceptions dans votre comportement. L'enjeu est d'éliminer ces exceptions en traitant chaque situation comme une situation normale." },
          haut: { label: "Réflexes installés", titre: "Vous portez tous vos EPI dans toutes les situations, sans exception ni adaptation selon le contexte", desc: "Vous retournez chercher votre harnais même pour 20 minutes d'intervention. Vous remplacez le casque après un choc même sans dommage visible. Vous ne démarrez pas avec un EPI dégradé même sans remplacement disponible. Cette constance absolue — qui suppose d'assumer des retards et des inconvénients — est ce qui rend le port des EPI réellement protecteur." },
        },
      }, 
      {
        type: "likert",
        text: "Vous portez tous les EPI requis dans leur intégralité, quelle que soit la durée de l'intervention ou votre familiarité avec la zone.",
        tags: ["EPI", "systématisme"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous portez vos EPI mais avec des exceptions selon la durée, la zone ou le regard de l'équipe", desc: "Deux minutes en zone connue sans casque, l'oubli du harnais qu'on ne va pas récupérer, l'EPI qu'on retire parce qu'il fait chaud : ces comportements semblent raisonnables situationnellement mais ils représentent précisément les contextes où les accidents surviennent. La durée courte et la familiarité avec la zone sont des facteurs aggravants en termes de baisse de vigilance, pas des facteurs protecteurs." },
          moyen: { label: "Pratiques en développement", titre: "Vous portez vos EPI correctement dans la plupart des situations mais quelques contextes créent encore des exceptions", desc: "Vous portez vos EPI de façon régulière. Mais certains contextes — l'urgence, la fin de journée, la visite d'un client, un EPI dégradé avec aucun remplacement disponible — peuvent encore créer des exceptions dans votre comportement. L'enjeu est d'éliminer ces exceptions en traitant chaque situation comme une situation normale." },
          haut: { label: "Réflexes installés", titre: "Vous portez tous vos EPI dans toutes les situations, sans exception ni adaptation selon le contexte", desc: "Vous retournez chercher votre harnais même pour 20 minutes d'intervention. Vous remplacez le casque après un choc même sans dommage visible. Vous ne démarrez pas avec un EPI dégradé même sans remplacement disponible. Cette constance absolue — qui suppose d'assumer des retards et des inconvénients — est ce qui rend le port des EPI réellement protecteur." },
        },
      }, 
      {
        type: "choix",
        text: "Dans votre équipe, plusieurs anciens ne portent jamais leurs lunettes de protection sur certaines opérations. Quand vous les portez, vous vous sentez regardé·e différemment.",
        tags: ["EPI", "pression sociale"],
        answers: [
          { text: "Je m'aligne progressivement — le regard du groupe compte et ces anciens savent ce qu'ils font.", score: 0 },
          { text: "Je continue à les porter — ma sécurité ne dépend pas de l'avis de mes collègues.", score: 2 },
          { text: "Je les porte mais discrètement pour éviter les commentaires.", score: 1.5 },
          { text: "Je pose la question à notre responsable pour clarifier si c'est vraiment obligatoire.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous portez vos EPI mais avec des exceptions selon la durée, la zone ou le regard de l'équipe", desc: "Deux minutes en zone connue sans casque, l'oubli du harnais qu'on ne va pas récupérer, l'EPI qu'on retire parce qu'il fait chaud : ces comportements semblent raisonnables situationnellement mais ils représentent précisément les contextes où les accidents surviennent. La durée courte et la familiarité avec la zone sont des facteurs aggravants en termes de baisse de vigilance, pas des facteurs protecteurs." },
          moyen: { label: "Pratiques en développement", titre: "Vous portez vos EPI correctement dans la plupart des situations mais quelques contextes créent encore des exceptions", desc: "Vous portez vos EPI de façon régulière. Mais certains contextes — l'urgence, la fin de journée, la visite d'un client, un EPI dégradé avec aucun remplacement disponible — peuvent encore créer des exceptions dans votre comportement. L'enjeu est d'éliminer ces exceptions en traitant chaque situation comme une situation normale." },
          haut: { label: "Réflexes installés", titre: "Vous portez tous vos EPI dans toutes les situations, sans exception ni adaptation selon le contexte", desc: "Vous retournez chercher votre harnais même pour 20 minutes d'intervention. Vous remplacez le casque après un choc même sans dommage visible. Vous ne démarrez pas avec un EPI dégradé même sans remplacement disponible. Cette constance absolue — qui suppose d'assumer des retards et des inconvénients — est ce qui rend le port des EPI réellement protecteur." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez oublié votre harnais de sécurité au vestiaire. Votre intervention en hauteur dure 20 minutes et le vestiaire est à 10 minutes à pied.",
        tags: ["EPI", "oubli"],
        answers: [
          { text: "Je fais l'intervention sans harnais — 20 minutes en hauteur sur une zone connue, je maîtrise.", score: 0 },
          { text: "Je fais l'aller-retour pour récupérer mon harnais même si ça prend 20 minutes supplémentaires.", score: 2 },
          { text: "Je cherche un harnais disponible sur place avant de faire l'aller-retour.", score: 1.5 },
          { text: "Je demande à un collègue de me prêter le sien.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous portez vos EPI mais avec des exceptions selon la durée, la zone ou le regard de l'équipe", desc: "Deux minutes en zone connue sans casque, l'oubli du harnais qu'on ne va pas récupérer, l'EPI qu'on retire parce qu'il fait chaud : ces comportements semblent raisonnables situationnellement mais ils représentent précisément les contextes où les accidents surviennent. La durée courte et la familiarité avec la zone sont des facteurs aggravants en termes de baisse de vigilance, pas des facteurs protecteurs." },
          moyen: { label: "Pratiques en développement", titre: "Vous portez vos EPI correctement dans la plupart des situations mais quelques contextes créent encore des exceptions", desc: "Vous portez vos EPI de façon régulière. Mais certains contextes — l'urgence, la fin de journée, la visite d'un client, un EPI dégradé avec aucun remplacement disponible — peuvent encore créer des exceptions dans votre comportement. L'enjeu est d'éliminer ces exceptions en traitant chaque situation comme une situation normale." },
          haut: { label: "Réflexes installés", titre: "Vous portez tous vos EPI dans toutes les situations, sans exception ni adaptation selon le contexte", desc: "Vous retournez chercher votre harnais même pour 20 minutes d'intervention. Vous remplacez le casque après un choc même sans dommage visible. Vous ne démarrez pas avec un EPI dégradé même sans remplacement disponible. Cette constance absolue — qui suppose d'assumer des retards et des inconvénients — est ce qui rend le port des EPI réellement protecteur." },
        },
      }, 
      {
        type: "likert",
        text: "Vous portez vos EPI même quand vos collègues expérimentés ne le font pas et même quand ça crée un inconfort ou un commentaire.",
        tags: ["EPI", "résistance"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous portez vos EPI mais avec des exceptions selon la durée, la zone ou le regard de l'équipe", desc: "Deux minutes en zone connue sans casque, l'oubli du harnais qu'on ne va pas récupérer, l'EPI qu'on retire parce qu'il fait chaud : ces comportements semblent raisonnables situationnellement mais ils représentent précisément les contextes où les accidents surviennent. La durée courte et la familiarité avec la zone sont des facteurs aggravants en termes de baisse de vigilance, pas des facteurs protecteurs." },
          moyen: { label: "Pratiques en développement", titre: "Vous portez vos EPI correctement dans la plupart des situations mais quelques contextes créent encore des exceptions", desc: "Vous portez vos EPI de façon régulière. Mais certains contextes — l'urgence, la fin de journée, la visite d'un client, un EPI dégradé avec aucun remplacement disponible — peuvent encore créer des exceptions dans votre comportement. L'enjeu est d'éliminer ces exceptions en traitant chaque situation comme une situation normale." },
          haut: { label: "Réflexes installés", titre: "Vous portez tous vos EPI dans toutes les situations, sans exception ni adaptation selon le contexte", desc: "Vous retournez chercher votre harnais même pour 20 minutes d'intervention. Vous remplacez le casque après un choc même sans dommage visible. Vous ne démarrez pas avec un EPI dégradé même sans remplacement disponible. Cette constance absolue — qui suppose d'assumer des retards et des inconvénients — est ce qui rend le port des EPI réellement protecteur." },
        },
      }, 
      {
        type: "choix",
        text: "Un client fait une visite de votre site. Pour paraître plus à l'aise et professionnel, certains collègues retirent leurs équipements encombrants. Votre responsable ne dit rien.",
        tags: ["EPI", "visite"],
        answers: [
          { text: "Je fais pareil — l'image donnée au client compte et mon responsable valide tacitement.", score: 0 },
          { text: "Je garde tous mes EPI — les règles sont les mêmes visite ou pas.", score: 2 },
          { text: "Je garde l'essentiel et retire ce qui est vraiment gênant pour la communication.", score: 0 },
          { text: "Je demande discrètement à mon responsable ce qu'il attend de nous.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous portez vos EPI mais avec des exceptions selon la durée, la zone ou le regard de l'équipe", desc: "Deux minutes en zone connue sans casque, l'oubli du harnais qu'on ne va pas récupérer, l'EPI qu'on retire parce qu'il fait chaud : ces comportements semblent raisonnables situationnellement mais ils représentent précisément les contextes où les accidents surviennent. La durée courte et la familiarité avec la zone sont des facteurs aggravants en termes de baisse de vigilance, pas des facteurs protecteurs." },
          moyen: { label: "Pratiques en développement", titre: "Vous portez vos EPI correctement dans la plupart des situations mais quelques contextes créent encore des exceptions", desc: "Vous portez vos EPI de façon régulière. Mais certains contextes — l'urgence, la fin de journée, la visite d'un client, un EPI dégradé avec aucun remplacement disponible — peuvent encore créer des exceptions dans votre comportement. L'enjeu est d'éliminer ces exceptions en traitant chaque situation comme une situation normale." },
          haut: { label: "Réflexes installés", titre: "Vous portez tous vos EPI dans toutes les situations, sans exception ni adaptation selon le contexte", desc: "Vous retournez chercher votre harnais même pour 20 minutes d'intervention. Vous remplacez le casque après un choc même sans dommage visible. Vous ne démarrez pas avec un EPI dégradé même sans remplacement disponible. Cette constance absolue — qui suppose d'assumer des retards et des inconvénients — est ce qui rend le port des EPI réellement protecteur." },
        },
      }, 
      {
        type: "choix",
        text: "Votre EPI réglementaire est en mauvais état — une sangle usée sur votre harnais, une fissure sur votre casque. Il n'y a pas de remplacement disponible immédiatement.",
        tags: ["EPI", "conformité"],
        answers: [
          { text: "Je l'utilise quand même — c'est mieux qu'aucun EPI et l'usure est légère.", score: 0 },
          { text: "Je ne réalise pas l'intervention jusqu'à ce qu'un EPI conforme soit disponible.", score: 2 },
          { text: "Je fais une inspection rapide pour évaluer si c'est encore utilisable.", score: 0.5 },
          { text: "Je le signale à mon responsable et j'attends sa décision.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous portez vos EPI mais avec des exceptions selon la durée, la zone ou le regard de l'équipe", desc: "Deux minutes en zone connue sans casque, l'oubli du harnais qu'on ne va pas récupérer, l'EPI qu'on retire parce qu'il fait chaud : ces comportements semblent raisonnables situationnellement mais ils représentent précisément les contextes où les accidents surviennent. La durée courte et la familiarité avec la zone sont des facteurs aggravants en termes de baisse de vigilance, pas des facteurs protecteurs." },
          moyen: { label: "Pratiques en développement", titre: "Vous portez vos EPI correctement dans la plupart des situations mais quelques contextes créent encore des exceptions", desc: "Vous portez vos EPI de façon régulière. Mais certains contextes — l'urgence, la fin de journée, la visite d'un client, un EPI dégradé avec aucun remplacement disponible — peuvent encore créer des exceptions dans votre comportement. L'enjeu est d'éliminer ces exceptions en traitant chaque situation comme une situation normale." },
          haut: { label: "Réflexes installés", titre: "Vous portez tous vos EPI dans toutes les situations, sans exception ni adaptation selon le contexte", desc: "Vous retournez chercher votre harnais même pour 20 minutes d'intervention. Vous remplacez le casque après un choc même sans dommage visible. Vous ne démarrez pas avec un EPI dégradé même sans remplacement disponible. Cette constance absolue — qui suppose d'assumer des retards et des inconvénients — est ce qui rend le port des EPI réellement protecteur." },
        },
      }, 
      {
        type: "likert",
        text: "Vous vérifiez l'état de vos EPI avant chaque utilisation et vous les remplacez dès qu'ils présentent un défaut, sans attendre qu'on vous le demande.",
        tags: ["EPI", "état"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous portez vos EPI mais avec des exceptions selon la durée, la zone ou le regard de l'équipe", desc: "Deux minutes en zone connue sans casque, l'oubli du harnais qu'on ne va pas récupérer, l'EPI qu'on retire parce qu'il fait chaud : ces comportements semblent raisonnables situationnellement mais ils représentent précisément les contextes où les accidents surviennent. La durée courte et la familiarité avec la zone sont des facteurs aggravants en termes de baisse de vigilance, pas des facteurs protecteurs." },
          moyen: { label: "Pratiques en développement", titre: "Vous portez vos EPI correctement dans la plupart des situations mais quelques contextes créent encore des exceptions", desc: "Vous portez vos EPI de façon régulière. Mais certains contextes — l'urgence, la fin de journée, la visite d'un client, un EPI dégradé avec aucun remplacement disponible — peuvent encore créer des exceptions dans votre comportement. L'enjeu est d'éliminer ces exceptions en traitant chaque situation comme une situation normale." },
          haut: { label: "Réflexes installés", titre: "Vous portez tous vos EPI dans toutes les situations, sans exception ni adaptation selon le contexte", desc: "Vous retournez chercher votre harnais même pour 20 minutes d'intervention. Vous remplacez le casque après un choc même sans dommage visible. Vous ne démarrez pas avec un EPI dégradé même sans remplacement disponible. Cette constance absolue — qui suppose d'assumer des retards et des inconvénients — est ce qui rend le port des EPI réellement protecteur." },
        },
      }, 
      {
        type: "choix",
        text: "Les EPI de votre équipe sont mal adaptés à certaines opérations — encombrants, glissants, qui gênent la précision du geste. Tout le monde s'en plaint mais personne ne remonte l'information.",
        tags: ["EPI", "signalement"],
        answers: [
          { text: "Je fais avec — les EPI ont leurs contraintes et il faut s'y adapter.", score: 0 },
          { text: "Je remonte formellement le problème d'ergonomie pour qu'un EPI plus adapté soit étudié.", score: 2 },
          { text: "J'adapte moi-même l'EPI pour qu'il soit plus pratique.", score: 0 },
          { text: "J'en parle à mes collègues pour voir si on peut trouver une solution collective.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous portez vos EPI mais avec des exceptions selon la durée, la zone ou le regard de l'équipe", desc: "Deux minutes en zone connue sans casque, l'oubli du harnais qu'on ne va pas récupérer, l'EPI qu'on retire parce qu'il fait chaud : ces comportements semblent raisonnables situationnellement mais ils représentent précisément les contextes où les accidents surviennent. La durée courte et la familiarité avec la zone sont des facteurs aggravants en termes de baisse de vigilance, pas des facteurs protecteurs." },
          moyen: { label: "Pratiques en développement", titre: "Vous portez vos EPI correctement dans la plupart des situations mais quelques contextes créent encore des exceptions", desc: "Vous portez vos EPI de façon régulière. Mais certains contextes — l'urgence, la fin de journée, la visite d'un client, un EPI dégradé avec aucun remplacement disponible — peuvent encore créer des exceptions dans votre comportement. L'enjeu est d'éliminer ces exceptions en traitant chaque situation comme une situation normale." },
          haut: { label: "Réflexes installés", titre: "Vous portez tous vos EPI dans toutes les situations, sans exception ni adaptation selon le contexte", desc: "Vous retournez chercher votre harnais même pour 20 minutes d'intervention. Vous remplacez le casque après un choc même sans dommage visible. Vous ne démarrez pas avec un EPI dégradé même sans remplacement disponible. Cette constance absolue — qui suppose d'assumer des retards et des inconvénients — est ce qui rend le port des EPI réellement protecteur." },
        },
      }
    ],

    1: [
      {
        type: "choix",
        text: "Lors de votre première semaine sur un nouveau poste, vous observez que les gestes de sécurité que vous appliquez sont différents de ceux de l'équipe en place. Jonathan, l'ancien référent, vous dit avec bienveillance que 'dans la vraie vie, on fait différemment'.",
        tags: ["pression sociale", "anciens"],
        answers: [
          { text: "Je m'adapte progressivement aux pratiques de l'équipe — Jonathan connaît ce poste depuis des années.", score: 0 },
          { text: "Je continue à appliquer ce que j'ai appris et je pose des questions sur les raisons des différences.", score: 2 },
          { text: "Je fais comme l'équipe pendant la période d'intégration et je réévalue une fois bien installé·e.", score: 0 },
          { text: "J'en parle à notre responsable pour avoir sa position officielle.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La pression sociale de votre équipe influence encore vos comportements avec les EPI", desc: "S'aligner sur les anciens qui ne portent pas leurs lunettes, retirer ses protections parce qu'un collègue se moque, suivre le mouvement en fin de journée : ces ajustements sociaux érodent progressivement les comportements de sécurité. Les gestes de sécurité ne doivent pas dépendre de l'approbation du groupe pour être maintenus." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux pressions sociales ordinaires mais les plus fortes peuvent encore vous affecter", desc: "Vous résistez aux commentaires et aux comportements du groupe dans la plupart des situations. Mais quand la pression vient du chef d'équipe, dans une période d'intégration sur un nouveau poste, ou lors d'une urgence où tout le monde démarre sans vérifier : votre résistance peut encore fléchir. L'enjeu est de maintenir vos comportements précisément dans ces moments de pression forte." },
          haut: { label: "Réflexes installés", titre: "Vos gestes de sécurité ne varient pas selon la pression sociale, les anciens ou l'ambiance du groupe", desc: "Vous maintenez vos gestes de sécurité quand les anciens font autrement, quand un collègue se moque, quand l'urgence crée une pression collective à aller vite. Vous parlez à Sarah en privé quand vous la voyez s'aligner sur les mauvaises pratiques du groupe. Cette indépendance comportementale est ce qui distingue un opérateur fiable d'un opérateur dont les comportements de sécurité dépendent du contexte social." },
        },
      }, 
      {
        type: "likert",
        text: "Vos gestes de sécurité ne changent pas selon que vous êtes nouveau·elle, en période d'intégration, ou sous le regard d'anciens qui font autrement.",
        tags: ["pression sociale", "autonomie"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La pression sociale de votre équipe influence encore vos comportements avec les EPI", desc: "S'aligner sur les anciens qui ne portent pas leurs lunettes, retirer ses protections parce qu'un collègue se moque, suivre le mouvement en fin de journée : ces ajustements sociaux érodent progressivement les comportements de sécurité. Les gestes de sécurité ne doivent pas dépendre de l'approbation du groupe pour être maintenus." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux pressions sociales ordinaires mais les plus fortes peuvent encore vous affecter", desc: "Vous résistez aux commentaires et aux comportements du groupe dans la plupart des situations. Mais quand la pression vient du chef d'équipe, dans une période d'intégration sur un nouveau poste, ou lors d'une urgence où tout le monde démarre sans vérifier : votre résistance peut encore fléchir. L'enjeu est de maintenir vos comportements précisément dans ces moments de pression forte." },
          haut: { label: "Réflexes installés", titre: "Vos gestes de sécurité ne varient pas selon la pression sociale, les anciens ou l'ambiance du groupe", desc: "Vous maintenez vos gestes de sécurité quand les anciens font autrement, quand un collègue se moque, quand l'urgence crée une pression collective à aller vite. Vous parlez à Sarah en privé quand vous la voyez s'aligner sur les mauvaises pratiques du groupe. Cette indépendance comportementale est ce qui distingue un opérateur fiable d'un opérateur dont les comportements de sécurité dépendent du contexte social." },
        },
      }, 
      {
        type: "choix",
        text: "Vous portez vos protections auditives alors que vos collègues ne le font pas sur cette opération. L'un d'eux se moque gentiment de votre 'excès de précaution'.",
        tags: ["pression sociale", "moquerie"],
        answers: [
          { text: "Je les retire pour ne pas me distinguer — c'est une moquerie légère mais qui isole.", score: 0 },
          { text: "Je réponds calmement que je préfère prévenir et je garde mes protections.", score: 2 },
          { text: "Je les garde sans répondre — mieux vaut ignorer.", score: 1.5 },
          { text: "Je leur explique les risques liés au bruit pour qu'ils reconsidèrent.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La pression sociale de votre équipe influence encore vos comportements avec les EPI", desc: "S'aligner sur les anciens qui ne portent pas leurs lunettes, retirer ses protections parce qu'un collègue se moque, suivre le mouvement en fin de journée : ces ajustements sociaux érodent progressivement les comportements de sécurité. Les gestes de sécurité ne doivent pas dépendre de l'approbation du groupe pour être maintenus." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux pressions sociales ordinaires mais les plus fortes peuvent encore vous affecter", desc: "Vous résistez aux commentaires et aux comportements du groupe dans la plupart des situations. Mais quand la pression vient du chef d'équipe, dans une période d'intégration sur un nouveau poste, ou lors d'une urgence où tout le monde démarre sans vérifier : votre résistance peut encore fléchir. L'enjeu est de maintenir vos comportements précisément dans ces moments de pression forte." },
          haut: { label: "Réflexes installés", titre: "Vos gestes de sécurité ne varient pas selon la pression sociale, les anciens ou l'ambiance du groupe", desc: "Vous maintenez vos gestes de sécurité quand les anciens font autrement, quand un collègue se moque, quand l'urgence crée une pression collective à aller vite. Vous parlez à Sarah en privé quand vous la voyez s'aligner sur les mauvaises pratiques du groupe. Cette indépendance comportementale est ce qui distingue un opérateur fiable d'un opérateur dont les comportements de sécurité dépendent du contexte social." },
        },
      }, 
      {
        type: "choix",
        text: "Votre équipe est évaluée sur sa productivité. Certains collègues ont pris l'habitude de sauter la remise en état des EPI après utilisation pour gagner quelques minutes. L'ambiance est à la performance.",
        tags: ["pression sociale", "productivité"],
        answers: [
          { text: "Je fais pareil — la pression sur les résultats est réelle et quelques minutes comptent.", score: 0 },
          { text: "Je maintiens la remise en état systématique même si ça me distingue de l'équipe.", score: 2 },
          { text: "Je fais une remise en état rapide en gardant les étapes critiques.", score: 0.5 },
          { text: "Je soulève le sujet en réunion d'équipe pour qu'on trouve une solution collective.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La pression sociale de votre équipe influence encore vos comportements avec les EPI", desc: "S'aligner sur les anciens qui ne portent pas leurs lunettes, retirer ses protections parce qu'un collègue se moque, suivre le mouvement en fin de journée : ces ajustements sociaux érodent progressivement les comportements de sécurité. Les gestes de sécurité ne doivent pas dépendre de l'approbation du groupe pour être maintenus." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux pressions sociales ordinaires mais les plus fortes peuvent encore vous affecter", desc: "Vous résistez aux commentaires et aux comportements du groupe dans la plupart des situations. Mais quand la pression vient du chef d'équipe, dans une période d'intégration sur un nouveau poste, ou lors d'une urgence où tout le monde démarre sans vérifier : votre résistance peut encore fléchir. L'enjeu est de maintenir vos comportements précisément dans ces moments de pression forte." },
          haut: { label: "Réflexes installés", titre: "Vos gestes de sécurité ne varient pas selon la pression sociale, les anciens ou l'ambiance du groupe", desc: "Vous maintenez vos gestes de sécurité quand les anciens font autrement, quand un collègue se moque, quand l'urgence crée une pression collective à aller vite. Vous parlez à Sarah en privé quand vous la voyez s'aligner sur les mauvaises pratiques du groupe. Cette indépendance comportementale est ce qui distingue un opérateur fiable d'un opérateur dont les comportements de sécurité dépendent du contexte social." },
        },
      }, 
      {
        type: "likert",
        text: "Votre façon d'utiliser et d'entretenir vos EPI ne change pas selon la pression de l'équipe, l'ambiance du moment ou ce que font vos collègues.",
        tags: ["pression sociale", "constance"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La pression sociale de votre équipe influence encore vos comportements avec les EPI", desc: "S'aligner sur les anciens qui ne portent pas leurs lunettes, retirer ses protections parce qu'un collègue se moque, suivre le mouvement en fin de journée : ces ajustements sociaux érodent progressivement les comportements de sécurité. Les gestes de sécurité ne doivent pas dépendre de l'approbation du groupe pour être maintenus." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux pressions sociales ordinaires mais les plus fortes peuvent encore vous affecter", desc: "Vous résistez aux commentaires et aux comportements du groupe dans la plupart des situations. Mais quand la pression vient du chef d'équipe, dans une période d'intégration sur un nouveau poste, ou lors d'une urgence où tout le monde démarre sans vérifier : votre résistance peut encore fléchir. L'enjeu est de maintenir vos comportements précisément dans ces moments de pression forte." },
          haut: { label: "Réflexes installés", titre: "Vos gestes de sécurité ne varient pas selon la pression sociale, les anciens ou l'ambiance du groupe", desc: "Vous maintenez vos gestes de sécurité quand les anciens font autrement, quand un collègue se moque, quand l'urgence crée une pression collective à aller vite. Vous parlez à Sarah en privé quand vous la voyez s'aligner sur les mauvaises pratiques du groupe. Cette indépendance comportementale est ce qui distingue un opérateur fiable d'un opérateur dont les comportements de sécurité dépendent du contexte social." },
        },
      }, 
      {
        type: "choix",
        text: "Votre chef d'équipe ne porte pas toujours ses EPI et ne s'en cache pas. Certains collaborateurs le prennent comme un signal implicite qu'ils peuvent faire de même.",
        tags: ["pression sociale", "chef"],
        answers: [
          { text: "Je prends la même liberté — si le chef ne les porte pas, c'est que ce n'est pas vraiment obligatoire.", score: 0 },
          { text: "Je continue à porter les miens indépendamment de ce que fait le chef.", score: 2 },
          { text: "Je lui en parle discrètement pour qu'il mesure l'effet que ça a sur l'équipe.", score: 1.5 },
          { text: "J'en parle à son responsable hiérarchique.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La pression sociale de votre équipe influence encore vos comportements avec les EPI", desc: "S'aligner sur les anciens qui ne portent pas leurs lunettes, retirer ses protections parce qu'un collègue se moque, suivre le mouvement en fin de journée : ces ajustements sociaux érodent progressivement les comportements de sécurité. Les gestes de sécurité ne doivent pas dépendre de l'approbation du groupe pour être maintenus." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux pressions sociales ordinaires mais les plus fortes peuvent encore vous affecter", desc: "Vous résistez aux commentaires et aux comportements du groupe dans la plupart des situations. Mais quand la pression vient du chef d'équipe, dans une période d'intégration sur un nouveau poste, ou lors d'une urgence où tout le monde démarre sans vérifier : votre résistance peut encore fléchir. L'enjeu est de maintenir vos comportements précisément dans ces moments de pression forte." },
          haut: { label: "Réflexes installés", titre: "Vos gestes de sécurité ne varient pas selon la pression sociale, les anciens ou l'ambiance du groupe", desc: "Vous maintenez vos gestes de sécurité quand les anciens font autrement, quand un collègue se moque, quand l'urgence crée une pression collective à aller vite. Vous parlez à Sarah en privé quand vous la voyez s'aligner sur les mauvaises pratiques du groupe. Cette indépendance comportementale est ce qui distingue un opérateur fiable d'un opérateur dont les comportements de sécurité dépendent du contexte social." },
        },
      }, 
      {
        type: "choix",
        text: "C'est la fin de la journée. Tout le monde est fatigué et certains collègues commencent à bâcler les vérifications d'EPI avant les dernières opérations. L'ambiance est détendue.",
        tags: ["pression sociale", "fin de journée"],
        answers: [
          { text: "Je suis le mouvement — c'est la fin de journée et tout le monde est dans le même état.", score: 0 },
          { text: "Je maintiens mes vérifications habituelles même si je suis le dernier à le faire.", score: 2 },
          { text: "Je fais les vérifications essentielles plus rapidement.", score: 0.5 },
          { text: "Je propose qu'on se regroupe 5 minutes pour finir correctement.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La pression sociale de votre équipe influence encore vos comportements avec les EPI", desc: "S'aligner sur les anciens qui ne portent pas leurs lunettes, retirer ses protections parce qu'un collègue se moque, suivre le mouvement en fin de journée : ces ajustements sociaux érodent progressivement les comportements de sécurité. Les gestes de sécurité ne doivent pas dépendre de l'approbation du groupe pour être maintenus." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux pressions sociales ordinaires mais les plus fortes peuvent encore vous affecter", desc: "Vous résistez aux commentaires et aux comportements du groupe dans la plupart des situations. Mais quand la pression vient du chef d'équipe, dans une période d'intégration sur un nouveau poste, ou lors d'une urgence où tout le monde démarre sans vérifier : votre résistance peut encore fléchir. L'enjeu est de maintenir vos comportements précisément dans ces moments de pression forte." },
          haut: { label: "Réflexes installés", titre: "Vos gestes de sécurité ne varient pas selon la pression sociale, les anciens ou l'ambiance du groupe", desc: "Vous maintenez vos gestes de sécurité quand les anciens font autrement, quand un collègue se moque, quand l'urgence crée une pression collective à aller vite. Vous parlez à Sarah en privé quand vous la voyez s'aligner sur les mauvaises pratiques du groupe. Cette indépendance comportementale est ce qui distingue un opérateur fiable d'un opérateur dont les comportements de sécurité dépendent du contexte social." },
        },
      }, 
      {
        type: "choix",
        text: "Une situation urgente nécessite une intervention rapide. Dans l'agitation, plusieurs collègues démarrent sans avoir pris le temps de vérifier leurs EPI. La pression est forte.",
        tags: ["pression sociale", "urgence"],
        answers: [
          { text: "Je suis le mouvement — l'urgence prime et tout le monde fait pareil.", score: 0 },
          { text: "Je prends 30 secondes pour vérifier mes EPI avant d'intervenir, même dans l'urgence.", score: 2 },
          { text: "Je vérifie les EPI critiques et je laisse les secondaires.", score: 1 },
          { text: "Je crie à mes collègues de vérifier leurs EPI en me vérifiant moi-même.", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La pression sociale de votre équipe influence encore vos comportements avec les EPI", desc: "S'aligner sur les anciens qui ne portent pas leurs lunettes, retirer ses protections parce qu'un collègue se moque, suivre le mouvement en fin de journée : ces ajustements sociaux érodent progressivement les comportements de sécurité. Les gestes de sécurité ne doivent pas dépendre de l'approbation du groupe pour être maintenus." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux pressions sociales ordinaires mais les plus fortes peuvent encore vous affecter", desc: "Vous résistez aux commentaires et aux comportements du groupe dans la plupart des situations. Mais quand la pression vient du chef d'équipe, dans une période d'intégration sur un nouveau poste, ou lors d'une urgence où tout le monde démarre sans vérifier : votre résistance peut encore fléchir. L'enjeu est de maintenir vos comportements précisément dans ces moments de pression forte." },
          haut: { label: "Réflexes installés", titre: "Vos gestes de sécurité ne varient pas selon la pression sociale, les anciens ou l'ambiance du groupe", desc: "Vous maintenez vos gestes de sécurité quand les anciens font autrement, quand un collègue se moque, quand l'urgence crée une pression collective à aller vite. Vous parlez à Sarah en privé quand vous la voyez s'aligner sur les mauvaises pratiques du groupe. Cette indépendance comportementale est ce qui distingue un opérateur fiable d'un opérateur dont les comportements de sécurité dépendent du contexte social." },
        },
      }, 
      {
        type: "likert",
        text: "Même dans une situation d'urgence, vous prenez le temps de vérifier vos équipements de protection avant d'intervenir.",
        tags: ["pression sociale", "urgence"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La pression sociale de votre équipe influence encore vos comportements avec les EPI", desc: "S'aligner sur les anciens qui ne portent pas leurs lunettes, retirer ses protections parce qu'un collègue se moque, suivre le mouvement en fin de journée : ces ajustements sociaux érodent progressivement les comportements de sécurité. Les gestes de sécurité ne doivent pas dépendre de l'approbation du groupe pour être maintenus." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux pressions sociales ordinaires mais les plus fortes peuvent encore vous affecter", desc: "Vous résistez aux commentaires et aux comportements du groupe dans la plupart des situations. Mais quand la pression vient du chef d'équipe, dans une période d'intégration sur un nouveau poste, ou lors d'une urgence où tout le monde démarre sans vérifier : votre résistance peut encore fléchir. L'enjeu est de maintenir vos comportements précisément dans ces moments de pression forte." },
          haut: { label: "Réflexes installés", titre: "Vos gestes de sécurité ne varient pas selon la pression sociale, les anciens ou l'ambiance du groupe", desc: "Vous maintenez vos gestes de sécurité quand les anciens font autrement, quand un collègue se moque, quand l'urgence crée une pression collective à aller vite. Vous parlez à Sarah en privé quand vous la voyez s'aligner sur les mauvaises pratiques du groupe. Cette indépendance comportementale est ce qui distingue un opérateur fiable d'un opérateur dont les comportements de sécurité dépendent du contexte social." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez remarqué que Sarah, une nouvelle arrivante, a rapidement adopté les mauvaises habitudes de l'équipe sur les EPI pour s'intégrer plus vite.",
        tags: ["pression sociale", "intégration"],
        answers: [
          { text: "Je la laisse faire — c'est à elle de trouver son équilibre entre intégration et sécurité.", score: 0 },
          { text: "Je lui parle en privé pour lui expliquer les risques réels et lui dire comment je gère cette pression.", score: 2 },
          { text: "Je la laisse pour l'instant et j'en parle à notre responsable.", score: 0.5 },
          { text: "Je soulève le sujet en équipe sans la désigner.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La pression sociale de votre équipe influence encore vos comportements avec les EPI", desc: "S'aligner sur les anciens qui ne portent pas leurs lunettes, retirer ses protections parce qu'un collègue se moque, suivre le mouvement en fin de journée : ces ajustements sociaux érodent progressivement les comportements de sécurité. Les gestes de sécurité ne doivent pas dépendre de l'approbation du groupe pour être maintenus." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux pressions sociales ordinaires mais les plus fortes peuvent encore vous affecter", desc: "Vous résistez aux commentaires et aux comportements du groupe dans la plupart des situations. Mais quand la pression vient du chef d'équipe, dans une période d'intégration sur un nouveau poste, ou lors d'une urgence où tout le monde démarre sans vérifier : votre résistance peut encore fléchir. L'enjeu est de maintenir vos comportements précisément dans ces moments de pression forte." },
          haut: { label: "Réflexes installés", titre: "Vos gestes de sécurité ne varient pas selon la pression sociale, les anciens ou l'ambiance du groupe", desc: "Vous maintenez vos gestes de sécurité quand les anciens font autrement, quand un collègue se moque, quand l'urgence crée une pression collective à aller vite. Vous parlez à Sarah en privé quand vous la voyez s'aligner sur les mauvaises pratiques du groupe. Cette indépendance comportementale est ce qui distingue un opérateur fiable d'un opérateur dont les comportements de sécurité dépendent du contexte social." },
        },
      }
    ],

    2: [
      {
        type: "choix",
        text: "En début de poste, vous constatez que le harnais qui vous a été attribué présente une couture légèrement effilochée sur une sangle secondaire. Il n'y a pas d'autre harnais disponible ce matin.",
        tags: ["entretien", "vérification"],
        answers: [
          { text: "Je l'utilise — la couture est sur une sangle secondaire et le harnais est globalement en bon état.", score: 0 },
          { text: "Je refuse d'utiliser ce harnais et je signale l'anomalie avant d'intervenir.", score: 2 },
          { text: "Je fais une inspection complète pour évaluer si le défaut est vraiment problématique.", score: 0.5 },
          { text: "Je le signale à mon responsable en lui demandant s'il est utilisable.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous utilisez vos EPI sans vérification systématique préalable", desc: "Utiliser un harnais sans inspection préalable parce qu'un collègue dit qu'il est bon, ranger un masque sans vérification après trois mois, réutiliser un casque ayant subi un choc parce qu'il est visuellement intact : un EPI non inspecté est un EPI dont vous ne connaissez pas l'état réel. L'inspection avant utilisation est la seule façon de savoir ce que vous portez réellement." },
          moyen: { label: "Pratiques en développement", titre: "Vous vérifiez vos EPI dans la plupart des cas mais votre inspection n'est pas encore totalement systématique", desc: "Vous inspectez vos EPI régulièrement. Mais faire confiance à l'inspection d'un collègue, utiliser un EPI rangé depuis longtemps sans vérification, ou évaluer vous-même si un défaut est 'problématique' : ces comportements laissent des zones d'ombre dans votre pratique. L'enjeu est de rendre l'inspection personnelle et systématique, sans exception." },
          haut: { label: "Réflexes installés", titre: "Vous inspectez systématiquement vos EPI avant toute utilisation et vous retirez tout équipement douteux", desc: "Vous inspectez vos EPI avant chaque utilisation, même s'ils ont été validés par d'autres. Vous retirez du service tout EPI ayant subi un choc même sans dommage visible. Vous renseignez les registres de suivi même quand vos collègues ne le font pas. Cette rigueur d'inspection et de traçabilité est la condition de base pour que les EPI jouent vraiment leur rôle." },
        },
      }, 
      {
        type: "likert",
        text: "Vous inspectez systématiquement vos EPI avant chaque utilisation, même pour des équipements que vous n'avez pas utilisés depuis longtemps.",
        tags: ["entretien", "inspection"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous utilisez vos EPI sans vérification systématique préalable", desc: "Utiliser un harnais sans inspection préalable parce qu'un collègue dit qu'il est bon, ranger un masque sans vérification après trois mois, réutiliser un casque ayant subi un choc parce qu'il est visuellement intact : un EPI non inspecté est un EPI dont vous ne connaissez pas l'état réel. L'inspection avant utilisation est la seule façon de savoir ce que vous portez réellement." },
          moyen: { label: "Pratiques en développement", titre: "Vous vérifiez vos EPI dans la plupart des cas mais votre inspection n'est pas encore totalement systématique", desc: "Vous inspectez vos EPI régulièrement. Mais faire confiance à l'inspection d'un collègue, utiliser un EPI rangé depuis longtemps sans vérification, ou évaluer vous-même si un défaut est 'problématique' : ces comportements laissent des zones d'ombre dans votre pratique. L'enjeu est de rendre l'inspection personnelle et systématique, sans exception." },
          haut: { label: "Réflexes installés", titre: "Vous inspectez systématiquement vos EPI avant toute utilisation et vous retirez tout équipement douteux", desc: "Vous inspectez vos EPI avant chaque utilisation, même s'ils ont été validés par d'autres. Vous retirez du service tout EPI ayant subi un choc même sans dommage visible. Vous renseignez les registres de suivi même quand vos collègues ne le font pas. Cette rigueur d'inspection et de traçabilité est la condition de base pour que les EPI jouent vraiment leur rôle." },
        },
      }, 
      {
        type: "choix",
        text: "Votre masque respiratoire filtrant est rangé dans un tiroir depuis trois mois. Vous devez l'utiliser cet après-midi. Vous ne l'avez pas inspecté depuis son rangement.",
        tags: ["entretien", "stockage"],
        answers: [
          { text: "Je l'utilise directement — il était en bon état quand je l'ai rangé.", score: 0 },
          { text: "Je réalise une inspection complète avant de l'utiliser.", score: 2 },
          { text: "Je vérifie visuellement qu'il n'est pas endommagé.", score: 0.5 },
          { text: "Je demande à mon responsable s'il est encore valide.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous utilisez vos EPI sans vérification systématique préalable", desc: "Utiliser un harnais sans inspection préalable parce qu'un collègue dit qu'il est bon, ranger un masque sans vérification après trois mois, réutiliser un casque ayant subi un choc parce qu'il est visuellement intact : un EPI non inspecté est un EPI dont vous ne connaissez pas l'état réel. L'inspection avant utilisation est la seule façon de savoir ce que vous portez réellement." },
          moyen: { label: "Pratiques en développement", titre: "Vous vérifiez vos EPI dans la plupart des cas mais votre inspection n'est pas encore totalement systématique", desc: "Vous inspectez vos EPI régulièrement. Mais faire confiance à l'inspection d'un collègue, utiliser un EPI rangé depuis longtemps sans vérification, ou évaluer vous-même si un défaut est 'problématique' : ces comportements laissent des zones d'ombre dans votre pratique. L'enjeu est de rendre l'inspection personnelle et systématique, sans exception." },
          haut: { label: "Réflexes installés", titre: "Vous inspectez systématiquement vos EPI avant toute utilisation et vous retirez tout équipement douteux", desc: "Vous inspectez vos EPI avant chaque utilisation, même s'ils ont été validés par d'autres. Vous retirez du service tout EPI ayant subi un choc même sans dommage visible. Vous renseignez les registres de suivi même quand vos collègues ne le font pas. Cette rigueur d'inspection et de traçabilité est la condition de base pour que les EPI jouent vraiment leur rôle." },
        },
      }, 
      {
        type: "choix",
        text: "Vous remarquez qu'un EPI partagé — une cagoule anti-feu — a visiblement été utilisé sans être nettoyé et présente des traces de suie. Il est rangé dans le stock commun.",
        tags: ["entretien", "signalement"],
        answers: [
          { text: "Je le range comme je l'ai trouvé — ce n'est pas mon EPI et je ne suis pas responsable de son entretien.", score: 0 },
          { text: "Je le signale et je le retire du stock en attendant son nettoyage.", score: 2 },
          { text: "Je le nettoie moi-même avant de le ranger.", score: 1 },
          { text: "Je le laisse mais je préviens mon responsable.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous utilisez vos EPI sans vérification systématique préalable", desc: "Utiliser un harnais sans inspection préalable parce qu'un collègue dit qu'il est bon, ranger un masque sans vérification après trois mois, réutiliser un casque ayant subi un choc parce qu'il est visuellement intact : un EPI non inspecté est un EPI dont vous ne connaissez pas l'état réel. L'inspection avant utilisation est la seule façon de savoir ce que vous portez réellement." },
          moyen: { label: "Pratiques en développement", titre: "Vous vérifiez vos EPI dans la plupart des cas mais votre inspection n'est pas encore totalement systématique", desc: "Vous inspectez vos EPI régulièrement. Mais faire confiance à l'inspection d'un collègue, utiliser un EPI rangé depuis longtemps sans vérification, ou évaluer vous-même si un défaut est 'problématique' : ces comportements laissent des zones d'ombre dans votre pratique. L'enjeu est de rendre l'inspection personnelle et systématique, sans exception." },
          haut: { label: "Réflexes installés", titre: "Vous inspectez systématiquement vos EPI avant toute utilisation et vous retirez tout équipement douteux", desc: "Vous inspectez vos EPI avant chaque utilisation, même s'ils ont été validés par d'autres. Vous retirez du service tout EPI ayant subi un choc même sans dommage visible. Vous renseignez les registres de suivi même quand vos collègues ne le font pas. Cette rigueur d'inspection et de traçabilité est la condition de base pour que les EPI jouent vraiment leur rôle." },
        },
      }, 
      {
        type: "choix",
        text: "La date limite d'utilisation de vos cartouches filtrantes approche dans deux semaines. Vous en avez besoin pour une série d'interventions programmées ce mois-ci.",
        tags: ["entretien", "date"],
        answers: [
          { text: "Je les utilise jusqu'à la date limite — elles sont encore valides.", score: 1 },
          { text: "Je commande les remplacements maintenant pour ne pas me retrouver en rupture.", score: 2 },
          { text: "J'attends de voir si les interventions sont confirmées avant de commander.", score: 0 },
          { text: "Je signale la situation à mon responsable pour qu'il gère le réapprovisionnement.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous utilisez vos EPI sans vérification systématique préalable", desc: "Utiliser un harnais sans inspection préalable parce qu'un collègue dit qu'il est bon, ranger un masque sans vérification après trois mois, réutiliser un casque ayant subi un choc parce qu'il est visuellement intact : un EPI non inspecté est un EPI dont vous ne connaissez pas l'état réel. L'inspection avant utilisation est la seule façon de savoir ce que vous portez réellement." },
          moyen: { label: "Pratiques en développement", titre: "Vous vérifiez vos EPI dans la plupart des cas mais votre inspection n'est pas encore totalement systématique", desc: "Vous inspectez vos EPI régulièrement. Mais faire confiance à l'inspection d'un collègue, utiliser un EPI rangé depuis longtemps sans vérification, ou évaluer vous-même si un défaut est 'problématique' : ces comportements laissent des zones d'ombre dans votre pratique. L'enjeu est de rendre l'inspection personnelle et systématique, sans exception." },
          haut: { label: "Réflexes installés", titre: "Vous inspectez systématiquement vos EPI avant toute utilisation et vous retirez tout équipement douteux", desc: "Vous inspectez vos EPI avant chaque utilisation, même s'ils ont été validés par d'autres. Vous retirez du service tout EPI ayant subi un choc même sans dommage visible. Vous renseignez les registres de suivi même quand vos collègues ne le font pas. Cette rigueur d'inspection et de traçabilité est la condition de base pour que les EPI jouent vraiment leur rôle." },
        },
      }, 
      {
        type: "likert",
        text: "Vous anticipez les besoins de remplacement ou d'entretien de vos EPI sans attendre d'être en rupture ou de tomber en panne lors d'une intervention.",
        tags: ["entretien", "proactivité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous utilisez vos EPI sans vérification systématique préalable", desc: "Utiliser un harnais sans inspection préalable parce qu'un collègue dit qu'il est bon, ranger un masque sans vérification après trois mois, réutiliser un casque ayant subi un choc parce qu'il est visuellement intact : un EPI non inspecté est un EPI dont vous ne connaissez pas l'état réel. L'inspection avant utilisation est la seule façon de savoir ce que vous portez réellement." },
          moyen: { label: "Pratiques en développement", titre: "Vous vérifiez vos EPI dans la plupart des cas mais votre inspection n'est pas encore totalement systématique", desc: "Vous inspectez vos EPI régulièrement. Mais faire confiance à l'inspection d'un collègue, utiliser un EPI rangé depuis longtemps sans vérification, ou évaluer vous-même si un défaut est 'problématique' : ces comportements laissent des zones d'ombre dans votre pratique. L'enjeu est de rendre l'inspection personnelle et systématique, sans exception." },
          haut: { label: "Réflexes installés", titre: "Vous inspectez systématiquement vos EPI avant toute utilisation et vous retirez tout équipement douteux", desc: "Vous inspectez vos EPI avant chaque utilisation, même s'ils ont été validés par d'autres. Vous retirez du service tout EPI ayant subi un choc même sans dommage visible. Vous renseignez les registres de suivi même quand vos collègues ne le font pas. Cette rigueur d'inspection et de traçabilité est la condition de base pour que les EPI jouent vraiment leur rôle." },
        },
      }, 
      {
        type: "choix",
        text: "Votre casque a subi un choc significatif lors d'une chute d'objet. Aucun dommage visible n'est apparent. Vous avez encore trois heures de travail.",
        tags: ["entretien", "choc"],
        answers: [
          { text: "Je continue à l'utiliser — aucun dommage visible, il est toujours là.", score: 0 },
          { text: "Je le remplace immédiatement — un casque ayant subi un choc doit être retiré du service même sans dommage visible.", score: 2 },
          { text: "Je l'inspecte soigneusement et je le remplace s'il présente un défaut.", score: 0.5 },
          { text: "Je le signale à la fin de ma journée et je le remplace demain.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous utilisez vos EPI sans vérification systématique préalable", desc: "Utiliser un harnais sans inspection préalable parce qu'un collègue dit qu'il est bon, ranger un masque sans vérification après trois mois, réutiliser un casque ayant subi un choc parce qu'il est visuellement intact : un EPI non inspecté est un EPI dont vous ne connaissez pas l'état réel. L'inspection avant utilisation est la seule façon de savoir ce que vous portez réellement." },
          moyen: { label: "Pratiques en développement", titre: "Vous vérifiez vos EPI dans la plupart des cas mais votre inspection n'est pas encore totalement systématique", desc: "Vous inspectez vos EPI régulièrement. Mais faire confiance à l'inspection d'un collègue, utiliser un EPI rangé depuis longtemps sans vérification, ou évaluer vous-même si un défaut est 'problématique' : ces comportements laissent des zones d'ombre dans votre pratique. L'enjeu est de rendre l'inspection personnelle et systématique, sans exception." },
          haut: { label: "Réflexes installés", titre: "Vous inspectez systématiquement vos EPI avant toute utilisation et vous retirez tout équipement douteux", desc: "Vous inspectez vos EPI avant chaque utilisation, même s'ils ont été validés par d'autres. Vous retirez du service tout EPI ayant subi un choc même sans dommage visible. Vous renseignez les registres de suivi même quand vos collègues ne le font pas. Cette rigueur d'inspection et de traçabilité est la condition de base pour que les EPI jouent vraiment leur rôle." },
        },
      }, 
      {
        type: "choix",
        text: "Vous devez utiliser un EPI partagé que vous n'avez pas inspecté vous-même. Le collègue qui l'a utilisé en dernier dit qu'il est en bon état.",
        tags: ["entretien", "partage"],
        answers: [
          { text: "Je lui fais confiance — il l'a utilisé récemment et il n'aurait pas dit qu'il est bon s'il ne l'était pas.", score: 0 },
          { text: "Je réalise ma propre inspection avant de l'utiliser.", score: 2 },
          { text: "Je fais une vérification rapide des points les plus visibles.", score: 1 },
          { text: "Je lui demande de me montrer ce qu'il a vérifié.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous utilisez vos EPI sans vérification systématique préalable", desc: "Utiliser un harnais sans inspection préalable parce qu'un collègue dit qu'il est bon, ranger un masque sans vérification après trois mois, réutiliser un casque ayant subi un choc parce qu'il est visuellement intact : un EPI non inspecté est un EPI dont vous ne connaissez pas l'état réel. L'inspection avant utilisation est la seule façon de savoir ce que vous portez réellement." },
          moyen: { label: "Pratiques en développement", titre: "Vous vérifiez vos EPI dans la plupart des cas mais votre inspection n'est pas encore totalement systématique", desc: "Vous inspectez vos EPI régulièrement. Mais faire confiance à l'inspection d'un collègue, utiliser un EPI rangé depuis longtemps sans vérification, ou évaluer vous-même si un défaut est 'problématique' : ces comportements laissent des zones d'ombre dans votre pratique. L'enjeu est de rendre l'inspection personnelle et systématique, sans exception." },
          haut: { label: "Réflexes installés", titre: "Vous inspectez systématiquement vos EPI avant toute utilisation et vous retirez tout équipement douteux", desc: "Vous inspectez vos EPI avant chaque utilisation, même s'ils ont été validés par d'autres. Vous retirez du service tout EPI ayant subi un choc même sans dommage visible. Vous renseignez les registres de suivi même quand vos collègues ne le font pas. Cette rigueur d'inspection et de traçabilité est la condition de base pour que les EPI jouent vraiment leur rôle." },
        },
      }, 
      {
        type: "likert",
        text: "Vous inspectez personnellement tout EPI avant de l'utiliser, même s'il a été inspecté par quelqu'un d'autre ou certifié conforme.",
        tags: ["entretien", "responsabilité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous utilisez vos EPI sans vérification systématique préalable", desc: "Utiliser un harnais sans inspection préalable parce qu'un collègue dit qu'il est bon, ranger un masque sans vérification après trois mois, réutiliser un casque ayant subi un choc parce qu'il est visuellement intact : un EPI non inspecté est un EPI dont vous ne connaissez pas l'état réel. L'inspection avant utilisation est la seule façon de savoir ce que vous portez réellement." },
          moyen: { label: "Pratiques en développement", titre: "Vous vérifiez vos EPI dans la plupart des cas mais votre inspection n'est pas encore totalement systématique", desc: "Vous inspectez vos EPI régulièrement. Mais faire confiance à l'inspection d'un collègue, utiliser un EPI rangé depuis longtemps sans vérification, ou évaluer vous-même si un défaut est 'problématique' : ces comportements laissent des zones d'ombre dans votre pratique. L'enjeu est de rendre l'inspection personnelle et systématique, sans exception." },
          haut: { label: "Réflexes installés", titre: "Vous inspectez systématiquement vos EPI avant toute utilisation et vous retirez tout équipement douteux", desc: "Vous inspectez vos EPI avant chaque utilisation, même s'ils ont été validés par d'autres. Vous retirez du service tout EPI ayant subi un choc même sans dommage visible. Vous renseignez les registres de suivi même quand vos collègues ne le font pas. Cette rigueur d'inspection et de traçabilité est la condition de base pour que les EPI jouent vraiment leur rôle." },
        },
      }, 
      {
        type: "choix",
        text: "Votre organisation a mis en place un registre de suivi des EPI mais beaucoup de collègues ne le renseignent pas par manque de temps. Vous devez enregistrer une utilisation.",
        tags: ["entretien", "traçabilité"],
        answers: [
          { text: "Je ne renseigne pas non plus — si tout le monde évite, le registre ne sert de toute façon plus à rien.", score: 0 },
          { text: "Je renseigne le registre même si mes collègues ne le font pas.", score: 2 },
          { text: "Je renseigne les informations essentielles en simplifiant.", score: 1.5 },
          { text: "J'en parle à mon responsable pour qu'il rappelle l'obligation à l'équipe.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous utilisez vos EPI sans vérification systématique préalable", desc: "Utiliser un harnais sans inspection préalable parce qu'un collègue dit qu'il est bon, ranger un masque sans vérification après trois mois, réutiliser un casque ayant subi un choc parce qu'il est visuellement intact : un EPI non inspecté est un EPI dont vous ne connaissez pas l'état réel. L'inspection avant utilisation est la seule façon de savoir ce que vous portez réellement." },
          moyen: { label: "Pratiques en développement", titre: "Vous vérifiez vos EPI dans la plupart des cas mais votre inspection n'est pas encore totalement systématique", desc: "Vous inspectez vos EPI régulièrement. Mais faire confiance à l'inspection d'un collègue, utiliser un EPI rangé depuis longtemps sans vérification, ou évaluer vous-même si un défaut est 'problématique' : ces comportements laissent des zones d'ombre dans votre pratique. L'enjeu est de rendre l'inspection personnelle et systématique, sans exception." },
          haut: { label: "Réflexes installés", titre: "Vous inspectez systématiquement vos EPI avant toute utilisation et vous retirez tout équipement douteux", desc: "Vous inspectez vos EPI avant chaque utilisation, même s'ils ont été validés par d'autres. Vous retirez du service tout EPI ayant subi un choc même sans dommage visible. Vous renseignez les registres de suivi même quand vos collègues ne le font pas. Cette rigueur d'inspection et de traçabilité est la condition de base pour que les EPI jouent vraiment leur rôle." },
        },
      }
    ],

    3: [
      {
        type: "choix",
        text: "Les gants de protection fournis pour votre poste sont trop grands. Ils glissent lors des manipulations fines et vous gênent réellement. Tout le monde a la même taille.",
        tags: ["signalement EPI", "inadapté"],
        answers: [
          { text: "Je m'adapte — la différence de taille est mineure et les gants restent protecteurs.", score: 0 },
          { text: "Je signale le problème d'adaptation pour qu'une solution soit trouvée.", score: 2 },
          { text: "Je retire les gants pour les opérations les plus précises et je les reporte pour les autres.", score: 0 },
          { text: "Je cherche une autre paire dans les stocks qui me conviendrait mieux.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous signalez les problèmes d'EPI graves mais vous vous accommodez des problèmes récurrents", desc: "Accepter de travailler avec des EPI inadaptés parce que l'organisation dit de 'se débrouiller', ne pas remonter un problème d'ergonomie parce que tout le monde fait pareil, ne pas escalader après deux signalements sans effet : un problème d'EPI non résolu est un risque accepté collectivement. Escalader et refuser de démarrer sans EPI adapté sont des comportements légitimes et attendus." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les problèmes d'EPI mais vous hésitez encore à refuser de démarrer ou à escalader", desc: "Vous signalez les problèmes d'EPI quand ils sont évidents. Mais refuser formellement de démarrer sans EPI adapté, escalader après plusieurs signalements sans effet, remonter un besoin de protection non listée : ces comportements plus assertifs sont encore insuffisamment développés. L'enjeu est de passer du signalement à l'action si le signalement reste sans effet." },
          haut: { label: "Réflexes installés", titre: "Vous signalez et escaladez les problèmes d'EPI jusqu'à leur résolution, y compris en refusant de démarrer si nécessaire", desc: "Vous signalez les EPI inadaptés, vous refusez de démarrer sans EPI conformes, et vous escaladez si les signalements restent sans effet. Vous remontez les besoins de protection non couverts quand votre activité évolue. Cette façon de traiter les EPI comme un sujet à faire progresser — pas comme une contrainte à subir — contribue directement à l'amélioration des conditions de sécurité de votre équipe." },
        },
      }, 
      {
        type: "likert",
        text: "Vous signalez les problèmes d'inadaptation ou d'ergonomie de vos EPI pour que des solutions soient trouvées, plutôt que de vous en accommoder.",
        tags: ["signalement EPI", "expression"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous signalez les problèmes d'EPI graves mais vous vous accommodez des problèmes récurrents", desc: "Accepter de travailler avec des EPI inadaptés parce que l'organisation dit de 'se débrouiller', ne pas remonter un problème d'ergonomie parce que tout le monde fait pareil, ne pas escalader après deux signalements sans effet : un problème d'EPI non résolu est un risque accepté collectivement. Escalader et refuser de démarrer sans EPI adapté sont des comportements légitimes et attendus." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les problèmes d'EPI mais vous hésitez encore à refuser de démarrer ou à escalader", desc: "Vous signalez les problèmes d'EPI quand ils sont évidents. Mais refuser formellement de démarrer sans EPI adapté, escalader après plusieurs signalements sans effet, remonter un besoin de protection non listée : ces comportements plus assertifs sont encore insuffisamment développés. L'enjeu est de passer du signalement à l'action si le signalement reste sans effet." },
          haut: { label: "Réflexes installés", titre: "Vous signalez et escaladez les problèmes d'EPI jusqu'à leur résolution, y compris en refusant de démarrer si nécessaire", desc: "Vous signalez les EPI inadaptés, vous refusez de démarrer sans EPI conformes, et vous escaladez si les signalements restent sans effet. Vous remontez les besoins de protection non couverts quand votre activité évolue. Cette façon de traiter les EPI comme un sujet à faire progresser — pas comme une contrainte à subir — contribue directement à l'amélioration des conditions de sécurité de votre équipe." },
        },
      }, 
      {
        type: "choix",
        text: "Vous arrivez sur votre poste et les EPI requis ne sont pas disponibles — rupture de stock non anticipée. Le responsable de la zone dit de 'se débrouiller' pour l'instant.",
        tags: ["signalement EPI", "rupture"],
        answers: [
          { text: "Je me débrouille — l'organisation fait ce qu'elle peut et l'intervention est urgente.", score: 0 },
          { text: "Je refuse de démarrer sans les EPI requis et je le signale formellement.", score: 2 },
          { text: "Je cherche des EPI équivalents dans les autres zones.", score: 1 },
          { text: "Je contacte directement le responsable sécurité pour débloquer la situation.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous signalez les problèmes d'EPI graves mais vous vous accommodez des problèmes récurrents", desc: "Accepter de travailler avec des EPI inadaptés parce que l'organisation dit de 'se débrouiller', ne pas remonter un problème d'ergonomie parce que tout le monde fait pareil, ne pas escalader après deux signalements sans effet : un problème d'EPI non résolu est un risque accepté collectivement. Escalader et refuser de démarrer sans EPI adapté sont des comportements légitimes et attendus." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les problèmes d'EPI mais vous hésitez encore à refuser de démarrer ou à escalader", desc: "Vous signalez les problèmes d'EPI quand ils sont évidents. Mais refuser formellement de démarrer sans EPI adapté, escalader après plusieurs signalements sans effet, remonter un besoin de protection non listée : ces comportements plus assertifs sont encore insuffisamment développés. L'enjeu est de passer du signalement à l'action si le signalement reste sans effet." },
          haut: { label: "Réflexes installés", titre: "Vous signalez et escaladez les problèmes d'EPI jusqu'à leur résolution, y compris en refusant de démarrer si nécessaire", desc: "Vous signalez les EPI inadaptés, vous refusez de démarrer sans EPI conformes, et vous escaladez si les signalements restent sans effet. Vous remontez les besoins de protection non couverts quand votre activité évolue. Cette façon de traiter les EPI comme un sujet à faire progresser — pas comme une contrainte à subir — contribue directement à l'amélioration des conditions de sécurité de votre équipe." },
        },
      }, 
      {
        type: "choix",
        text: "Vous réalisez que les EPI de votre équipe sont régulièrement en mauvais état à cause d'une mauvaise organisation du stockage. Personne ne soulève le sujet.",
        tags: ["signalement EPI", "collectif"],
        answers: [
          { text: "Je gère mes propres EPI sans me préoccuper de ceux des autres.", score: 0 },
          { text: "Je remonte le problème organisationnel pour qu'une solution durable soit trouvée.", score: 2 },
          { text: "Je sensibilise mes collègues à l'entretien de leurs EPI.", score: 1 },
          { text: "J'en parle à mon responsable lors du prochain point d'équipe.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous signalez les problèmes d'EPI graves mais vous vous accommodez des problèmes récurrents", desc: "Accepter de travailler avec des EPI inadaptés parce que l'organisation dit de 'se débrouiller', ne pas remonter un problème d'ergonomie parce que tout le monde fait pareil, ne pas escalader après deux signalements sans effet : un problème d'EPI non résolu est un risque accepté collectivement. Escalader et refuser de démarrer sans EPI adapté sont des comportements légitimes et attendus." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les problèmes d'EPI mais vous hésitez encore à refuser de démarrer ou à escalader", desc: "Vous signalez les problèmes d'EPI quand ils sont évidents. Mais refuser formellement de démarrer sans EPI adapté, escalader après plusieurs signalements sans effet, remonter un besoin de protection non listée : ces comportements plus assertifs sont encore insuffisamment développés. L'enjeu est de passer du signalement à l'action si le signalement reste sans effet." },
          haut: { label: "Réflexes installés", titre: "Vous signalez et escaladez les problèmes d'EPI jusqu'à leur résolution, y compris en refusant de démarrer si nécessaire", desc: "Vous signalez les EPI inadaptés, vous refusez de démarrer sans EPI conformes, et vous escaladez si les signalements restent sans effet. Vous remontez les besoins de protection non couverts quand votre activité évolue. Cette façon de traiter les EPI comme un sujet à faire progresser — pas comme une contrainte à subir — contribue directement à l'amélioration des conditions de sécurité de votre équipe." },
        },
      }, 
      {
        type: "choix",
        text: "Votre poste a évolué et vous réalisez qu'une protection supplémentaire serait nécessaire pour une nouvelle opération. Elle n'est pas prévue dans la liste des EPI requis.",
        tags: ["signalement EPI", "nouveau risque"],
        answers: [
          { text: "Je réalise l'opération sans protection supplémentaire — si elle n'est pas listée, c'est qu'elle n'est pas jugée nécessaire.", score: 0 },
          { text: "Je signale le besoin identifié pour que la liste des EPI requis soit mise à jour.", score: 2 },
          { text: "Je me procure moi-même la protection sans passer par les canaux officiels.", score: 0.5 },
          { text: "Je demande à un collègue confirmé si c'est vraiment nécessaire.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous signalez les problèmes d'EPI graves mais vous vous accommodez des problèmes récurrents", desc: "Accepter de travailler avec des EPI inadaptés parce que l'organisation dit de 'se débrouiller', ne pas remonter un problème d'ergonomie parce que tout le monde fait pareil, ne pas escalader après deux signalements sans effet : un problème d'EPI non résolu est un risque accepté collectivement. Escalader et refuser de démarrer sans EPI adapté sont des comportements légitimes et attendus." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les problèmes d'EPI mais vous hésitez encore à refuser de démarrer ou à escalader", desc: "Vous signalez les problèmes d'EPI quand ils sont évidents. Mais refuser formellement de démarrer sans EPI adapté, escalader après plusieurs signalements sans effet, remonter un besoin de protection non listée : ces comportements plus assertifs sont encore insuffisamment développés. L'enjeu est de passer du signalement à l'action si le signalement reste sans effet." },
          haut: { label: "Réflexes installés", titre: "Vous signalez et escaladez les problèmes d'EPI jusqu'à leur résolution, y compris en refusant de démarrer si nécessaire", desc: "Vous signalez les EPI inadaptés, vous refusez de démarrer sans EPI conformes, et vous escaladez si les signalements restent sans effet. Vous remontez les besoins de protection non couverts quand votre activité évolue. Cette façon de traiter les EPI comme un sujet à faire progresser — pas comme une contrainte à subir — contribue directement à l'amélioration des conditions de sécurité de votre équipe." },
        },
      }, 
      {
        type: "likert",
        text: "Vous signalez les besoins de protection non couverts par les EPI actuellement fournis lorsque votre activité évolue ou qu'un nouveau risque apparaît.",
        tags: ["signalement EPI", "mise à jour"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous signalez les problèmes d'EPI graves mais vous vous accommodez des problèmes récurrents", desc: "Accepter de travailler avec des EPI inadaptés parce que l'organisation dit de 'se débrouiller', ne pas remonter un problème d'ergonomie parce que tout le monde fait pareil, ne pas escalader après deux signalements sans effet : un problème d'EPI non résolu est un risque accepté collectivement. Escalader et refuser de démarrer sans EPI adapté sont des comportements légitimes et attendus." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les problèmes d'EPI mais vous hésitez encore à refuser de démarrer ou à escalader", desc: "Vous signalez les problèmes d'EPI quand ils sont évidents. Mais refuser formellement de démarrer sans EPI adapté, escalader après plusieurs signalements sans effet, remonter un besoin de protection non listée : ces comportements plus assertifs sont encore insuffisamment développés. L'enjeu est de passer du signalement à l'action si le signalement reste sans effet." },
          haut: { label: "Réflexes installés", titre: "Vous signalez et escaladez les problèmes d'EPI jusqu'à leur résolution, y compris en refusant de démarrer si nécessaire", desc: "Vous signalez les EPI inadaptés, vous refusez de démarrer sans EPI conformes, et vous escaladez si les signalements restent sans effet. Vous remontez les besoins de protection non couverts quand votre activité évolue. Cette façon de traiter les EPI comme un sujet à faire progresser — pas comme une contrainte à subir — contribue directement à l'amélioration des conditions de sécurité de votre équipe." },
        },
      }, 
      {
        type: "choix",
        text: "Vous observez qu'un·e intérimaire nouvellement arrivé·e travaille sans certains EPI obligatoires. Il ou elle ne semble pas avoir été informé·e de l'obligation.",
        tags: ["signalement EPI", "tiers"],
        answers: [
          { text: "Je laisse — c'est à l'encadrement de vérifier l'équipement des intérimaires.", score: 0 },
          { text: "Je lui signale l'obligation et je m'assure qu'il ou elle dispose des EPI requis.", score: 2 },
          { text: "Je le signale à notre responsable pour qu'il gère.", score: 1 },
          { text: "Je lui prête les miens en attendant qu'il ou elle soit équipé·e.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous signalez les problèmes d'EPI graves mais vous vous accommodez des problèmes récurrents", desc: "Accepter de travailler avec des EPI inadaptés parce que l'organisation dit de 'se débrouiller', ne pas remonter un problème d'ergonomie parce que tout le monde fait pareil, ne pas escalader après deux signalements sans effet : un problème d'EPI non résolu est un risque accepté collectivement. Escalader et refuser de démarrer sans EPI adapté sont des comportements légitimes et attendus." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les problèmes d'EPI mais vous hésitez encore à refuser de démarrer ou à escalader", desc: "Vous signalez les problèmes d'EPI quand ils sont évidents. Mais refuser formellement de démarrer sans EPI adapté, escalader après plusieurs signalements sans effet, remonter un besoin de protection non listée : ces comportements plus assertifs sont encore insuffisamment développés. L'enjeu est de passer du signalement à l'action si le signalement reste sans effet." },
          haut: { label: "Réflexes installés", titre: "Vous signalez et escaladez les problèmes d'EPI jusqu'à leur résolution, y compris en refusant de démarrer si nécessaire", desc: "Vous signalez les EPI inadaptés, vous refusez de démarrer sans EPI conformes, et vous escaladez si les signalements restent sans effet. Vous remontez les besoins de protection non couverts quand votre activité évolue. Cette façon de traiter les EPI comme un sujet à faire progresser — pas comme une contrainte à subir — contribue directement à l'amélioration des conditions de sécurité de votre équipe." },
        },
      }, 
      {
        type: "choix",
        text: "Vous utilisez régulièrement un EPI qui protège bien mais dont l'ergonomie rend son port inconfortable au point que beaucoup de collègues l'enlèvent. Il existe un modèle plus adapté sur le marché.",
        tags: ["signalement EPI", "amélioration"],
        answers: [
          { text: "Je continue avec ce modèle — il remplit sa fonction de protection.", score: 0.5 },
          { text: "Je remonte l'information sur le modèle plus adapté avec des arguments concrets sur les bénéfices pour le port.", score: 2 },
          { text: "J'achète moi-même le modèle plus adapté.", score: 0 },
          { text: "J'en parle à mes collègues pour évaluer si le problème est partagé avant de remonter.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous signalez les problèmes d'EPI graves mais vous vous accommodez des problèmes récurrents", desc: "Accepter de travailler avec des EPI inadaptés parce que l'organisation dit de 'se débrouiller', ne pas remonter un problème d'ergonomie parce que tout le monde fait pareil, ne pas escalader après deux signalements sans effet : un problème d'EPI non résolu est un risque accepté collectivement. Escalader et refuser de démarrer sans EPI adapté sont des comportements légitimes et attendus." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les problèmes d'EPI mais vous hésitez encore à refuser de démarrer ou à escalader", desc: "Vous signalez les problèmes d'EPI quand ils sont évidents. Mais refuser formellement de démarrer sans EPI adapté, escalader après plusieurs signalements sans effet, remonter un besoin de protection non listée : ces comportements plus assertifs sont encore insuffisamment développés. L'enjeu est de passer du signalement à l'action si le signalement reste sans effet." },
          haut: { label: "Réflexes installés", titre: "Vous signalez et escaladez les problèmes d'EPI jusqu'à leur résolution, y compris en refusant de démarrer si nécessaire", desc: "Vous signalez les EPI inadaptés, vous refusez de démarrer sans EPI conformes, et vous escaladez si les signalements restent sans effet. Vous remontez les besoins de protection non couverts quand votre activité évolue. Cette façon de traiter les EPI comme un sujet à faire progresser — pas comme une contrainte à subir — contribue directement à l'amélioration des conditions de sécurité de votre équipe." },
        },
      }, 
      {
        type: "likert",
        text: "Vous contribuez à l'amélioration des EPI de votre équipe en remontant les problèmes d'ergonomie, de disponibilité et d'adaptation, sans attendre qu'on vous le demande.",
        tags: ["signalement EPI", "proactivité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous signalez les problèmes d'EPI graves mais vous vous accommodez des problèmes récurrents", desc: "Accepter de travailler avec des EPI inadaptés parce que l'organisation dit de 'se débrouiller', ne pas remonter un problème d'ergonomie parce que tout le monde fait pareil, ne pas escalader après deux signalements sans effet : un problème d'EPI non résolu est un risque accepté collectivement. Escalader et refuser de démarrer sans EPI adapté sont des comportements légitimes et attendus." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les problèmes d'EPI mais vous hésitez encore à refuser de démarrer ou à escalader", desc: "Vous signalez les problèmes d'EPI quand ils sont évidents. Mais refuser formellement de démarrer sans EPI adapté, escalader après plusieurs signalements sans effet, remonter un besoin de protection non listée : ces comportements plus assertifs sont encore insuffisamment développés. L'enjeu est de passer du signalement à l'action si le signalement reste sans effet." },
          haut: { label: "Réflexes installés", titre: "Vous signalez et escaladez les problèmes d'EPI jusqu'à leur résolution, y compris en refusant de démarrer si nécessaire", desc: "Vous signalez les EPI inadaptés, vous refusez de démarrer sans EPI conformes, et vous escaladez si les signalements restent sans effet. Vous remontez les besoins de protection non couverts quand votre activité évolue. Cette façon de traiter les EPI comme un sujet à faire progresser — pas comme une contrainte à subir — contribue directement à l'amélioration des conditions de sécurité de votre équipe." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez signalé deux fois que les EPI fournis sont inadaptés à une opération spécifique. Rien n'a changé. Vous devez réaliser à nouveau cette opération.",
        tags: ["signalement EPI", "hiérarchie"],
        answers: [
          { text: "Je réalise l'opération avec les EPI disponibles — j'ai fait mon signalement, la balle est dans leur camp.", score: 0 },
          { text: "Je refuse de réaliser l'opération sans EPI adapté et j'escalade le signalement.", score: 2 },
          { text: "Je réalise l'opération en prenant mes précautions et je resigne une troisième fois.", score: 0.5 },
          { text: "Je demande à mon responsable de me confirmer par écrit que je dois intervenir avec ces EPI.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous signalez les problèmes d'EPI graves mais vous vous accommodez des problèmes récurrents", desc: "Accepter de travailler avec des EPI inadaptés parce que l'organisation dit de 'se débrouiller', ne pas remonter un problème d'ergonomie parce que tout le monde fait pareil, ne pas escalader après deux signalements sans effet : un problème d'EPI non résolu est un risque accepté collectivement. Escalader et refuser de démarrer sans EPI adapté sont des comportements légitimes et attendus." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les problèmes d'EPI mais vous hésitez encore à refuser de démarrer ou à escalader", desc: "Vous signalez les problèmes d'EPI quand ils sont évidents. Mais refuser formellement de démarrer sans EPI adapté, escalader après plusieurs signalements sans effet, remonter un besoin de protection non listée : ces comportements plus assertifs sont encore insuffisamment développés. L'enjeu est de passer du signalement à l'action si le signalement reste sans effet." },
          haut: { label: "Réflexes installés", titre: "Vous signalez et escaladez les problèmes d'EPI jusqu'à leur résolution, y compris en refusant de démarrer si nécessaire", desc: "Vous signalez les EPI inadaptés, vous refusez de démarrer sans EPI conformes, et vous escaladez si les signalements restent sans effet. Vous remontez les besoins de protection non couverts quand votre activité évolue. Cette façon de traiter les EPI comme un sujet à faire progresser — pas comme une contrainte à subir — contribue directement à l'amélioration des conditions de sécurité de votre équipe." },
        },
      }
    ],

  },
  "securite-manager-arbitrage": {
    0: [
        {
          text: "Un délai client est avancé de deux jours et votre hiérarchie vous demande d'absorber cette contrainte. Une étape de vérification sécurité risque d'être sacrifiée. Que faites-vous ?",
          answers: [
          {text: "Je supprime la vérification — le client est prioritaire.", score: 0},
          {text: "Je la raccourcis pour gagner du temps.", score: 1},
          {text: "Je maintiens la vérification et signale à ma hiérarchie l'arbitrage qu'implique ce délai.", score: 2}
          ]
        },
        {
          text: "Votre équipe a pris du retard à cause d'aléas extérieurs. La pression est forte pour rattraper le temps perdu. Des opérations qui nécessitent normalement deux personnes sont réalisées seul pour aller plus vite. Quelle est votre position ?",
          answers: [
          {text: "J'accepte — c'est une situation exceptionnelle.", score: 0},
          {text: "Je tolère pour certaines tâches mais pas pour les plus risquées.", score: 1},
          {text: "Je maintiens les effectifs requis pour toute opération identifiée comme nécessitant deux personnes.", score: 2}
          ]
        },
        {
          text: "Un directeur de site vous dit que le niveau de vigilance de vos équipes est 'excessif' et ralentit la production. Que faites-vous ?",
          answers: [
          {text: "Je cherche comment alléger les procédures.", score: 0},
          {text: "J'écoute mais ne change rien sans avoir analysé ce qui est réellement excessif.", score: 1},
          {text: "Je défends la pertinence des pratiques actuelles et propose un échange factuel sur les arbitrages.", score: 2}
          ]
        },
        {
          text: "Vous êtes sollicité pour valider une opération qui respecte la lettre des procédures mais qui vous semble risquée dans les conditions du jour. Que faites-vous ?",
          answers: [
          {text: "Je valide — les procédures ont été respectées.", score: 0},
          {text: "Je valide avec des réserves orales.", score: 1},
          {text: "Je refuse de valider et explique pourquoi les conditions du jour changent le niveau de risque.", score: 2}
          ]
        },
        {
          text: "Un de vos collaborateurs vous propose une méthode plus rapide pour une opération. Elle ne viole pas les règles mais vous n'êtes pas sûr qu'elle ait été validée. Que faites-vous ?",
          answers: [
          {text: "Je l'autorise — si ce n'est pas interdit, c'est permis.", score: 0},
          {text: "Je l'autorise avec prudence en demandant qu'on reste attentifs.", score: 1},
          {text: "Je vérifie si cette méthode a été évaluée avant de l'autoriser.", score: 2}
          ]
        }
    ],
    1: [
        {
          text: "Votre équipe a eu un comportement à risque qui n'a pas causé d'incident. Comment traitez-vous le sujet ?",
          answers: [
          {text: "Je ne dis rien — il n'y a pas eu de conséquences.", score: 0},
          {text: "Je fais un rappel général lors d'une réunion.", score: 1},
          {text: "J'aborde le sujet directement avec les personnes concernées en cherchant à comprendre ce qui s'est passé.", score: 2}
          ]
        },
        {
          text: "Un collaborateur a réalisé une opération seul en dehors du cadre prévu. Il l'a bien gérée. Comment réagissez-vous ?",
          answers: [
          {text: "Je le félicite pour l'initiative.", score: 0},
          {text: "Je lui rappelle qu'il n'aurait pas dû faire seul.", score: 1},
          {text: "Je cherche d'abord à comprendre pourquoi il a pris cette décision avant de traiter l'écart.", score: 2}
          ]
        },
        {
          text: "Vous découvrez qu'une pratique courante dans votre équipe ne respecte pas strictement une procédure, sans que ça n'ait posé de problème jusqu'ici. Que faites-vous ?",
          answers: [
          {text: "Je laisse faire — l'expérience montre que ça marche.", score: 0},
          {text: "Je rappelle la procédure sans analyser pourquoi l'écart s'est installé.", score: 1},
          {text: "J'analyse pourquoi l'écart s'est installé et je remonte si la procédure doit être révisée.", score: 2}
          ]
        },
        {
          text: "Un collaborateur a fait une erreur qui a failli causer un accident. Il est très affecté. Comment gérez-vous le moment ?",
          answers: [
          {text: "Je lui explique clairement l'erreur commise pour que ce soit clair.", score: 0},
          {text: "Je gère la situation administrative d'abord et parle à la personne ensuite.", score: 1},
          {text: "Je m'assure d'abord qu'elle va bien, puis j'analyse la situation ensemble dans un cadre constructif.", score: 2}
          ]
        },
        {
          text: "Deux membres de votre équipe ont des interprétations différentes d'une procédure et se disputent sur le sujet. Que faites-vous ?",
          answers: [
          {text: "Je tranche en faveur de l'un des deux.", score: 0},
          {text: "Je leur demande de se mettre d'accord entre eux.", score: 1},
          {text: "Je clarifie la procédure officielle et, si elle est ambiguë, je remonte pour qu'elle soit précisée.", score: 2}
          ]
        }
    ],
    2: [
        {
          text: "Votre équipe est fatiguée après plusieurs semaines de forte activité. Les incidents n'ont pas augmenté mais vous ressentez une baisse d'attention. Que faites-vous ?",
          answers: [
          {text: "Je laisse passer — tout le monde est fatigué par moment.", score: 0},
          {text: "J'en parle informellement lors d'une réunion.", score: 1},
          {text: "Je nomme la situation à mon équipe et prends des mesures concrètes pour soulager la pression.", score: 2}
          ]
        },
        {
          text: "Sur les deux derniers mois, votre équipe n'a signalé aucun incident ni presqu'accident. Vous trouvez cela suspect. Que faites-vous ?",
          answers: [
          {text: "Je suis satisfait — les bons résultats parlent d'eux-mêmes.", score: 0},
          {text: "J'en parle lors d'une réunion pour rappeler l'importance du signalement.", score: 1},
          {text: "Je cherche activement à comprendre pourquoi les signalements ont diminué.", score: 2}
          ]
        },
        {
          text: "Votre site traverse une phase de grands travaux avec beaucoup de rotation d'intervenants. La vigilance collective baisse. Que faites-vous ?",
          answers: [
          {text: "Je renforce les contrôles sans changer les rituels.", score: 0},
          {text: "J'augmente la fréquence des rappels sécurité.", score: 1},
          {text: "Je renforce les rituels de coordination ET je crée des moments spécifiques pour maintenir l'attention dans ce contexte particulier.", score: 2}
          ]
        },
        {
          text: "Un collaborateur très expérimenté a commencé à s'épargner certaines vérifications. Il dit qu'avec son expérience, il sait quand c'est vraiment nécessaire. Que faites-vous ?",
          answers: [
          {text: "Je le laisse faire — son expérience est un argument valable.", score: 0},
          {text: "Je lui rappelle les règles sans approfondir.", score: 1},
          {text: "J'aborde le sujet directement : l'expérience ne remplace pas les procédures, elle aide à les appliquer mieux.", score: 2}
          ]
        },
        {
          text: "Vous revenez de congés et constatez que plusieurs petits glissements se sont produits pendant votre absence. Votre remplaçant n'en a pas parlé. Que faites-vous ?",
          answers: [
          {text: "Je reprends là où je suis et laisse passer — ce qui est fait est fait.", score: 0},
          {text: "Je recadre discrètement les comportements observés.", score: 1},
          {text: "Je fais un point équipe pour remettre les pratiques à niveau et comprendre pourquoi ces glissements ont eu lieu.", score: 2}
          ]
        }
    ],
    3: [
        {
          text: "Votre équipe réalise des opérations de façon légèrement différente de la procédure écrite depuis des mois. Le résultat est bon. Vous venez de vous en rendre compte. Que faites-vous ?",
          answers: [
          {text: "Je laisse faire — si la pratique fonctionne, c'est qu'elle est adaptée.", score: 0},
          {text: "Je remets la procédure officielle en application sans chercher à comprendre.", score: 1},
          {text: "Je documente la pratique réelle et remonte pour que la procédure soit révisée si elle est pertinente.", score: 2}
          ]
        },
        {
          text: "Un nouveau collaborateur pose des questions sur des pratiques que l'équipe a habituellement 'normalisées'. Il trouve certaines choses étranges. Quelle est votre réaction ?",
          answers: [
          {text: "Je lui explique que c'est comme ça que ça marche ici.", score: 0},
          {text: "Je prends note de ses questions sans y donner suite immédiatement.", score: 1},
          {text: "Je prends ses observations comme un point de vue extérieur précieux et examine s'il a raison.", score: 2}
          ]
        },
        {
          text: "Votre équipe a tendance à minimiser les presqu'accidents en disant que 'ça fait partie du métier'. Que faites-vous ?",
          answers: [
          {text: "Je partage cet état d'esprit — certains risques sont inhérents au métier.", score: 0},
          {text: "Je rappelle que tout doit être signalé mais sans aborder la culture sous-jacente.", score: 1},
          {text: "Je travaille sur la culture de signalement pour que les presqu'accidents soient vus comme des opportunités d'apprentissage.", score: 2}
          ]
        },
        {
          text: "Vous détectez qu'une personne de votre équipe dissimule des informations par peur de la sanction. Comment réagissez-vous ?",
          answers: [
          {text: "Je lui rappelle ses obligations sans aborder la question de la peur.", score: 0},
          {text: "Je lui explique qu'il n'y aura pas de sanction pour ce cas précis.", score: 1},
          {text: "Je travaille à créer un environnement où la transparence est valorisée et le signalement, sans conséquence pour l'erreur non intentionnelle.", score: 2}
          ]
        },
        {
          text: "Vous avez signalé à plusieurs reprises des situations à risque à votre hiérarchie sans retour. Que faites-vous ?",
          answers: [
          {text: "J'arrête de signaler — ça ne sert à rien.", score: 0},
          {text: "Je continue à signaler mais sans espérer de retour.", score: 1},
          {text: "Je demande formellement un retour sur mes signalements et escalade si nécessaire.", score: 2}
          ]
        }
    ],
  },

  "securite-nucleaire": {
    0: [
        {
          text: "Vous réalisez une opération que vous connaissez parfaitement depuis des années. La gamme indique une étape que vous avez toujours faite de façon légèrement différente sans conséquence. Que faites-vous ?",
          answers: [
          {text: "J'applique ma méthode habituelle — l'expérience prime.", score: 0},
          {text: "J'applique la gamme mais je note mentalement la différence.", score: 1},
          {text: "J'applique la gamme telle qu'elle est écrite et remonte l'écart si ma pratique semble meilleure.", score: 2}
          ]
        },
        {
          text: "Lors d'une opération, vous avez un doute sur l'interprétation d'un paramètre. Votre collègue, plus expérimenté, vous dit que c'est normal. Que faites-vous ?",
          answers: [
          {text: "Je lui fais confiance et continue.", score: 0},
          {text: "Je note le paramètre mais continue en restant attentif.", score: 1},
          {text: "Je stoppe et cherche une confirmation formelle avant de reprendre.", score: 2}
          ]
        },
        {
          text: "Une vérification de routine vous semble donner un résultat légèrement en dehors de la plage habituelle, mais toujours dans les limites admissibles. Que faites-vous ?",
          answers: [
          {text: "Je continue — c'est dans les limites.", score: 0},
          {text: "Je note l'écart dans mon calepin personnel.", score: 1},
          {text: "Je le documente formellement et le signale pour analyse de tendance.", score: 2}
          ]
        },
        {
          text: "En prenant votre poste, votre collègue vous dit qu'il y a eu une 'petite anomalie' qu'il a gérée mais pas signalée. Que faites-vous ?",
          answers: [
          {text: "Je prends note pour moi mais respecte sa décision.", score: 0},
          {text: "Je lui suggère de le signaler sans insister.", score: 1},
          {text: "Je lui explique pourquoi c'est important et l'aide à faire le signalement si nécessaire.", score: 2}
          ]
        },
        {
          text: "Vous réalisez que la gamme que vous utilisez n'a pas été mise à jour suite à une modification technique récente. L'opération vous semble maîtrisée quand même. Que faites-vous ?",
          answers: [
          {text: "Je réalise l'opération — je connais la modification.", score: 0},
          {text: "Je réalise l'opération en tenant compte de la modification mentalement.", score: 1},
          {text: "Je stoppe et remonte que la gamme doit être mise à jour avant toute utilisation.", score: 2}
          ]
        }
    ],
    1: [
        {
          text: "La pression de remise en service est forte. Une question technique reste ouverte mais tout le monde pense que c'est sans conséquence. Votre responsable vous demande de continuer. Que faites-vous ?",
          answers: [
          {text: "Je continue — la pression est légitime et la question est probablement mineure.", score: 0},
          {text: "Je continue mais je documente ma réserve.", score: 1},
          {text: "Je refuse de continuer tant que la question technique n'est pas formellement tranchée.", score: 2}
          ]
        },
        {
          text: "Une situation non prévue dans la gamme se présente. Vous pensez avoir la solution mais elle n'est pas documentée. Que faites-vous ?",
          answers: [
          {text: "J'applique ma solution — c'est ce pour quoi je suis formé.", score: 0},
          {text: "J'applique ma solution et le documente après.", score: 1},
          {text: "Je stoppe, documente la situation non prévue et attends une décision formelle avant de reprendre.", score: 2}
          ]
        },
        {
          text: "Vous réalisez qu'un équipement que vous venez de remettre en service a peut-être une configuration incertaine. L'essai de démarrage semblait normal. Que faites-vous ?",
          answers: [
          {text: "Je le laisse en service — le démarrage était normal.", score: 0},
          {text: "Je note l'incertitude et continue sous surveillance.", score: 1},
          {text: "Je remets l'équipement en arrêt et éclaircis la configuration avant de remettre en service.", score: 2}
          ]
        },
        {
          text: "Un chef d'équipe vous demande de commencer une étape avant la fin de la consignation pour gagner du temps. Il dit être sûr que c'est sécurisé. Que faites-vous ?",
          answers: [
          {text: "Je commence — il est responsable et il connaît le sujet.", score: 0},
          {text: "Je commence prudemment en restant attentif.", score: 1},
          {text: "Je refuse de commencer avant que la consignation soit complète et formellement validée.", score: 2}
          ]
        },
        {
          text: "Votre équipe a trouvé une façon plus rapide de réaliser une opération. Elle ne viole pas de règle explicite. Tout le monde l'utilise. Que faites-vous ?",
          answers: [
          {text: "J'utilise la méthode de l'équipe — elle a fait ses preuves.", score: 0},
          {text: "Je continue à utiliser la méthode officielle sans intervenir.", score: 1},
          {text: "J'utilise la méthode officielle et propose que la nouvelle méthode soit formellement évaluée et intégrée si elle est validée.", score: 2}
          ]
        }
    ],
    2: [
        {
          text: "Lors d'une opération, vous rencontrez une configuration qui n'est pas exactement celle décrite dans la gamme. La situation semble maîtrisable. Que faites-vous ?",
          answers: [
          {text: "Je m'adapte — je connais suffisamment bien le système.", score: 0},
          {text: "J'adapte et je le note pour en parler après.", score: 1},
          {text: "Je stoppe et traite la situation comme une dérive de gamme à remonter avant toute décision.", score: 2}
          ]
        },
        {
          text: "Une équipe extérieure intervient sur un équipement que vous supervisiez. Leur intervention modifie légèrement l'état du système. Ils disent que c'est prévu. Que faites-vous ?",
          answers: [
          {text: "Je les crois — ils sont compétents.", score: 0},
          {text: "Je vérifie que leur intervention était prévue.", score: 1},
          {text: "Je vérifie la traçabilité de l'autorisation avant de remettre le système dans son état nominal.", score: 2}
          ]
        },
        {
          text: "Vous constatez que deux gammes donnent des instructions contradictoires pour une même situation. Que faites-vous ?",
          answers: [
          {text: "J'applique celle qui me semble la plus logique.", score: 0},
          {text: "J'en parle à mon responsable avant de continuer.", score: 1},
          {text: "Je stoppe et remonte immédiatement l'incohérence pour qu'une décision formelle soit prise.", score: 2}
          ]
        },
        {
          text: "Lors d'une inspection, un point de contrôle donne un résultat à la limite de l'acceptable. Votre responsable dit que c'est OK. Que faites-vous ?",
          answers: [
          {text: "Je suis son avis — il a le niveau pour décider.", score: 0},
          {text: "Je note ma réserve mais je continue.", score: 1},
          {text: "Je documente formellement que le résultat est à la limite et demande une décision écrite.", score: 2}
          ]
        },
        {
          text: "Un prestataire suggère une modification sur un équipement pour simplifier une opération future. La proposition semble intéressante. Que faites-vous ?",
          answers: [
          {text: "J'autorise — si c'est pertinent, autant le faire maintenant.", score: 0},
          {text: "Je lui dis de soumettre ça à mon responsable.", score: 1},
          {text: "Je lui explique que toute modification doit suivre le processus de gestion des modifications, même si elle semble simple.", score: 2}
          ]
        }
    ],
    3: [
        {
          text: "Un événement significatif de sûreté vient de se produire dans votre équipe. Votre responsable pense que ça peut ne pas être déclaré. Que faites-vous ?",
          answers: [
          {text: "Je lui fais confiance — il a l'expérience pour juger.", score: 0},
          {text: "Je note ma réserve mais respecte sa décision.", score: 1},
          {text: "Je maintiens que la déclaration est nécessaire si les critères sont remplis, quelle que soit la pression.", score: 2}
          ]
        },
        {
          text: "Vous réalisez a posteriori qu'une opération réalisée la semaine dernière aurait dû être documentée comme écart. Personne ne s'en souvient clairement. Que faites-vous ?",
          answers: [
          {text: "Je laisse passer — c'est trop tard.", score: 0},
          {text: "J'en parle informellement à mon responsable.", score: 1},
          {text: "Je documente ce dont je me souviens et remonte l'information, même tardivement.", score: 2}
          ]
        },
        {
          text: "L'analyse d'un événement conclut à une 'erreur humaine' mais vous pensez que des facteurs organisationnels ont contribué. Que faites-vous ?",
          answers: [
          {text: "J'accepte la conclusion — les experts ont décidé.", score: 0},
          {text: "Je note ma réserve sans la formuler.", score: 1},
          {text: "Je formule ma perspective dans les échanges de REX pour que l'analyse soit complète.", score: 2}
          ]
        },
        {
          text: "Votre équipe a une culture où les questions sont mal vues. Vous constatez que les agents hésitent à formuler des doutes. Que faites-vous ?",
          answers: [
          {text: "Je m'adapte à la culture en place.", score: 0},
          {text: "Je continue à poser des questions moi-même sans intervenir sur la dynamique.", score: 1},
          {text: "Je nommer le problème auprès de mon responsable et cherche à créer un espace où la questioning attitude est valorisée.", score: 2}
          ]
        },
        {
          text: "Suite à un REX, des actions correctives ont été définies mais elles ne sont pas mises en œuvre. Que faites-vous ?",
          answers: [
          {text: "J'attends que la hiérarchie reprenne le sujet.", score: 0},
          {text: "Je relance informellement.", score: 1},
          {text: "Je demande formellement un état d'avancement et escalade si nécessaire.", score: 2}
          ]
        }
    ],
  },

  "securite-chantier-btp": {
    0: [
        {
          text: "Vous arrivez sur votre poste de travail le matin et le balisage installé la veille a été modifié ou déplacé. Que faites-vous avant de démarrer ?",
          answers: [
          {text: "Je démarre — le chantier évolue chaque jour.", score: 0},
          {text: "Je replace le balisage et commence.", score: 1},
          {text: "Je stoppe et vérifie qui a modifié le balisage et pour quelle raison avant de reprendre.", score: 2}
          ]
        },
        {
          text: "Vous devez travailler à une hauteur de 3 mètres. Le point d'ancrage prévu est difficilement accessible. Que faites-vous ?",
          answers: [
          {text: "Je m'accroche au point le plus proche disponible.", score: 0},
          {text: "Je travaille sans m'accrocher — c'est une intervention courte.", score: 1},
          {text: "Je stoppe et demande un ajustement de l'installation d'ancrage avant de démarrer.", score: 2}
          ]
        },
        {
          text: "Le sol de votre zone de travail est détrempé après une nuit de pluie. La tâche prévue nécessite de se déplacer. Que faites-vous ?",
          answers: [
          {text: "Je fais attention et commence.", score: 0},
          {text: "Je demande si des planches ou passages temporaires peuvent être posés.", score: 1},
          {text: "Je signale la situation et attends qu'une décision soit prise sur les conditions de travail avant de démarrer.", score: 2}
          ]
        },
        {
          text: "Votre chef d'équipe vous demande de démarrer des terrassements alors que le marquage de réseaux souterrains n'a pas encore été réalisé. Il dit que dans ce secteur il n'y a pas de réseau. Que faites-vous ?",
          answers: [
          {text: "Je démarre — il connaît le chantier.", score: 0},
          {text: "Je commence prudemment en restant attentif.", score: 1},
          {text: "Je refuse de démarrer les terrassements sans le marquage préalable.", score: 2}
          ]
        },
        {
          text: "Une livraison de matériaux est déposée dans votre zone de circulation. Le chauffeur est déjà reparti. Que faites-vous ?",
          answers: [
          {text: "Je travaille autour — on n'a pas le temps de déplacer ça maintenant.", score: 0},
          {text: "Je déplace moi-même la livraison.", score: 1},
          {text: "Je signale la situation et organise le déplacement de façon coordonnée avec les responsables.", score: 2}
          ]
        }
    ],
    1: [
        {
          text: "Un engin de chantier manœuvre dans votre zone sans signalement préalable. Le chauffeur vous voit. Que faites-vous ?",
          answers: [
          {text: "Je me déplace pour lui laisser de la place.", score: 0},
          {text: "Je l'arrête et lui demande de faire attention.", score: 1},
          {text: "Je le fais stopper et signale que la coordination des engins n'a pas été faite.", score: 2}
          ]
        },
        {
          text: "Deux corps de métier travaillent en parallèle dans une zone restreinte sans coordination visible. Des interférences commencent à apparaître. Que faites-vous ?",
          answers: [
          {text: "Je continue — les autres s'arrangeront.", score: 0},
          {text: "Je parle directement au responsable de l'autre équipe.", score: 1},
          {text: "Je remonte au coordinateur de chantier pour qu'une coordination formelle soit organisée.", score: 2}
          ]
        },
        {
          text: "Un autre intervenant abandonne un outil dans votre zone sans le sécuriser. Que faites-vous ?",
          answers: [
          {text: "Je le range à un endroit qui me convient.", score: 0},
          {text: "Je le signale à son propriétaire.", score: 1},
          {text: "Je le sécurise et signale la situation pour éviter que ça se reproduise.", score: 2}
          ]
        },
        {
          text: "Une fouille est ouverte dans votre zone et des personnes passent près du bord sans protection. Vous n'êtes pas responsable de cette fouille. Que faites-vous ?",
          answers: [
          {text: "Ce n'est pas ma fouille — c'est au responsable de gérer.", score: 0},
          {text: "Je dis aux personnes de faire attention.", score: 1},
          {text: "Je signale immédiatement au responsable de la fouille pour que la zone soit sécurisée.", score: 2}
          ]
        },
        {
          text: "Vous devez travailler sur une toiture pendant qu'une autre équipe travaille en dessous. Aucune protection contre la chute d'objets n'est en place. Que faites-vous ?",
          answers: [
          {text: "Je fais attention en travaillant.", score: 0},
          {text: "Je préviens l'équipe en dessous de se tenir à l'écart.", score: 1},
          {text: "Je stoppe et demande qu'une protection contre la chute d'objets soit mise en place avant de reprendre.", score: 2}
          ]
        }
    ],
    2: [
        {
          text: "Un intérimaire nouveau sur le chantier n'a pas reçu l'accueil sécurité. Il attend ses instructions de travail. Que faites-vous ?",
          answers: [
          {text: "Je lui donne ses instructions — on manque de temps.", score: 0},
          {text: "Je lui donne un accueil rapide sur les points essentiels.", score: 1},
          {text: "Je m'assure qu'il reçoit l'accueil sécurité complet avant de démarrer la moindre tâche.", score: 2}
          ]
        },
        {
          text: "Vous constatez qu'un permis de travail a expiré mais les travaux n'ont pas encore repris. L'équipe attend votre feu vert. Que faites-vous ?",
          answers: [
          {text: "Je les autorise à reprendre — le permis était valide et les conditions n'ont pas changé.", score: 0},
          {text: "Je leur demande d'attendre que le permis soit renouvelé.", score: 1},
          {text: "Je stoppe toute activité et m'assure que le permis est renouvelé avant toute reprise.", score: 2}
          ]
        },
        {
          text: "Le PPSPS prévoit un nombre minimum de personnes pour une opération. Ce matin, vous êtes en sous-effectif. Que faites-vous ?",
          answers: [
          {text: "Je commence avec l'équipe disponible — on fera attention.", score: 0},
          {text: "Je commence avec les tâches qui peuvent se faire seul.", score: 1},
          {text: "Je ne démarre pas l'opération qui nécessite un effectif minimum et remonte la situation.", score: 2}
          ]
        },
        {
          text: "Vous devez réaliser des travaux nécessitant une habilitation que vous n'avez pas. Le titulaire de l'habilitation est absent. Que faites-vous ?",
          answers: [
          {text: "Je réalise les travaux — j'en suis capable même sans habilitation formelle.", score: 0},
          {text: "Je commence la préparation et attends le titulaire pour la phase critique.", score: 1},
          {text: "Je ne réalise pas les travaux et remonte la situation pour qu'une solution soit trouvée.", score: 2}
          ]
        },
        {
          text: "Le plan de prévention prévoit des mesures pour des travaux par points chauds. Vous réalisez que les moyens de lutte contre l'incendie sont insuffisants par rapport au plan. Que faites-vous ?",
          answers: [
          {text: "Je commence avec ce que j'ai — les risques semblent limités.", score: 0},
          {text: "Je fais les travaux et compense par plus d'attention.", score: 1},
          {text: "Je stoppe et demande que les moyens prévus au plan de prévention soient mis en place avant de démarrer.", score: 2}
          ]
        }
    ],
    3: [
        {
          text: "Un accident survient sur votre zone. Plusieurs personnes regardent. Que faites-vous en premier ?",
          answers: [
          {text: "J'évalue la gravité avant d'appeler les secours.", score: 0},
          {text: "J'appelle les secours et préviens mon responsable.", score: 1},
          {text: "Je sécurise la zone, appelle les secours, ne déplace pas la victime sauf danger immédiat et préserve les éléments de l'incident.", score: 2}
          ]
        },
        {
          text: "Après un incident, votre chef de chantier vous demande de reprendre rapidement pour ne pas perdre davantage de temps. Que faites-vous ?",
          answers: [
          {text: "Je reprends — la situation est stabilisée.", score: 0},
          {text: "Je reprends mais en faisant très attention.", score: 1},
          {text: "Je refuse de reprendre tant qu'une analyse de la situation n'a pas été faite et que les conditions de reprise ne sont pas définies.", score: 2}
          ]
        },
        {
          text: "Votre chantier a eu un incident et vous devez témoigner auprès des enquêteurs. Que faites-vous ?",
          answers: [
          {text: "Je dis ce qui arrange le mieux la situation de l'équipe.", score: 0},
          {text: "Je dis les choses telles que je les ai vécues.", score: 1},
          {text: "Je témoigne avec précision sur les faits, en distinguant ce que j'ai observé de ce que j'interprète.", score: 2}
          ]
        },
        {
          text: "Suite à un incident, une procédure est modifiée. La nouvelle procédure est plus contraignante. Votre équipe se plaint. Que faites-vous ?",
          answers: [
          {text: "Je leur dis qu'ils ont raison — la procédure est peut-être excessive.", score: 0},
          {text: "Je leur dis que c'est obligatoire et qu'ils doivent s'adapter.", score: 1},
          {text: "Je leur explique le lien entre la procédure et l'incident, et je remonte si elle est vraiment inadaptée.", score: 2}
          ]
        },
        {
          text: "Un incident s'est produit sur un chantier voisin avec des conditions similaires au vôtre. Que faites-vous ?",
          answers: [
          {text: "Je m'en informe mais mon chantier est différent.", score: 0},
          {text: "Je prends note des informations disponibles.", score: 1},
          {text: "J'analyse si des mesures préventives doivent être prises sur mon chantier en lien avec cet incident.", score: 2}
          ]
        }
    ],
  },

  }); // fin Object.assign CUSTOM_QUESTIONS

  // ─────────────────────────────────────────────────────────────────────────
  //  ENREGISTREMENT DU DOMAINE
  // ─────────────────────────────────────────────────────────────────────────

  window.ITS_registerTheme("securite-surete", "Sécurité & sûreté au travail", "🦺", [
    ["culture-securite-terrain", "Sécurité & culture de sûreté au quotidien", "Équipes terrain",
  "Identifier les risques, respecter les consignes et signaler les situations sensibles.",
  { domain: "securite", chapters: [
    ["Respecter les consignes sans surveillance",     "Appliquer les procédures dans leur intégralité, indépendamment du contexte et de l'observation."],
    ["Résister à la normalisation des déviances",     "Identifier et traiter les pratiques qui se sont écartées des procédures sans avoir causé d'incident."],
    ["Surmonter le coût social du signalement",       "Signaler ce qu'on observe sans attendre la certitude, le consensus ou une demande explicite."],
    ["Contribuer à la culture sécurité de l'équipe", "Influencer les pratiques collectives par l'exemple, la parole et la transmission."]
  ]}
],
           
    
["presquaccidents-signalement", "Signaler les incidents et presqu'accidents", "Tous publics",
  "Transformer les signaux faibles en actions utiles, sans culpabiliser ni banaliser.",
  { domain: "securite", chapters: [
    ["Reconnaître ce qui mérite d'être signalé", "Abaisser son seuil de signalement aux anomalies, doutes et presqu'accidents."],
    ["Surmonter les freins au signalement",       "Résister à la peur des conséquences, à la pression collective et à la hiérarchie."],
    ["Qualifier et transmettre un signalement utile", "Décrire les faits et leur contexte complet, sans atténuer ni interpréter."],
    ["Utiliser les retours d'expérience",         "Contribuer activement aux REX et vérifier que leurs conclusions se traduisent en pratiques."]
  ]}
],   
         
["acces-sites-surete", "Sûreté des sites, accès et comportements inhabituels", "Tous publics",
  "Réagir face aux accès non autorisés, intrusions, objets suspects ou situations atypiques.",
  { domain: "securite", chapters: [
    ["Contrôler les accès entrants",              "Appliquer les procédures d'accès sans exception, quelle que soit la relation ou l'urgence."],
    ["Gérer les comportements inhabituels sur site","Repérer et signaler immédiatement ce qui interpelle, même en cas de doute."],
    ["Protéger les zones et informations sensibles","Adopter des réflexes de protection systématiques, pas sélectifs."],
    ["Réagir à une alerte sûreté",                "Appliquer les procédures d'urgence sans délai ni adaptation selon le contexte."]
  ]}
],    
      
["managers-securite", "Manager la sécurité sans créer de tension", "Managers",
  "Faire vivre les règles, traiter les écarts et soutenir les équipes dans les moments à risque.",
  { domain: "securite", chapters: [
    ["Donner l'exemple au quotidien",               "Aligner son propre comportement sur les exigences qu'on pose à son équipe, sans exception."],
    ["Traiter les remontées sécurité de l'équipe",  "Recevoir et valoriser les signalements pour construire une vraie culture de remontée."],
    ["Traiter les écarts sans créer de peur",       "Intervenir équitablement, comprendre les causes et expliquer le risque derrière la règle."],
    ["Maintenir le cap sécurité sous pression",     "Tenir les exigences face aux délais, aux clients et à la hiérarchie, et rendre les dilemmes visibles."]
  ]}
],    
    
["coactivite-sous-traitance", "Travailler en coactivité et gérer les prestataires", "Équipes terrain",
  "Coordonner les interventions simultanées, intégrer les sous-traitants et gérer les zones partagées.",
  { domain: "securite", chapters: [
    ["Intégrer les intervenants extérieurs",        "Appliquer les mêmes exigences d'intégration à tous, habitués ou non."],
    ["Coordonner les risques d'interférence",       "Anticiper et gérer les risques créés par la présence simultanée de plusieurs équipes."],
    ["Gérer les écarts des sous-traitants",         "Traiter les non-conformités des prestataires avec la même rigueur que celles des équipes internes."],
    ["Partager les informations de sécurité",       "Informer proactivement et vérifier la compréhension effective."]
  ]}
],    
        
["epi-gestes-securite", "EPI et gestes de sécurité au quotidien", "Collaborateurs",
  "Porter les bons équipements, maintenir ses réflexes sous contrainte et signaler les anomalies matérielles.",
  { domain: "securite", chapters: [
    ["Porter les EPI dans toutes les situations",    "Appliquer les obligations de port sans exception de durée, de zone ou de contexte."],
    ["Résister à la pression sociale sur les EPI",   "Maintenir ses gestes de sécurité indépendamment du groupe, des anciens et de l'ambiance."],
    ["Vérifier et entretenir ses équipements",       "Inspecter systématiquement avant usage et signaler tout défaut sans attendre."],
    ["Signaler les EPI inadaptés ou manquants",      "Remonter les problèmes d'adaptation et escalader jusqu'à leur résolution."]
  ]}
],    
    
    ["securite-manager-arbitrage", "Arbitrer entre sécurité et pression opérationnelle",   "Managers / Encadrants",    "Tenir les exigences de sécurité face aux délais, traiter les écarts et détecter les dérives silencieuses.",                                                    T.securiteManagerArbitrage],
    ["securite-nucleaire",         "Culture de sûreté en environnement nucléaire",         "Tous publics — Nucléaire", "Adopter la posture de questionnement, appliquer la rigueur procédurale et déclarer les événements précurseurs.",                                                T.securiteNucleaire],
    ["securite-chantier-btp",      "Sécurité sur chantier BTP",                            "Équipes terrain — BTP",    "Sécuriser son poste, gérer la coactivité chantier, respecter le PPSPS et réagir aux incidents.",                                                               T.securiteChantierBTP]
  ]);

})();
