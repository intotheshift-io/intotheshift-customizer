/**
 * catalogue-qvt.js — INTO THE SHIFT
 * Domaine : QVT & RPS (8 ADs)
 *
 * Dépend de : catalogue-core.js
 */

(function () {
  var T = window._ITS_CORE.templates;

  // ─────────────────────────────────────────────────────────────────────────
  //  QUESTIONS RÉDIGÉES — QVT & RPS
  // ─────────────────────────────────────────────────────────────────────────

  Object.assign(window.CUSTOM_QUESTIONS, {
  "rps-signaux-faibles": {
    0: [
        {
          text: "Vous êtes habituellement quelqu'un d'impliqué. Depuis quelques semaines, vous avez du mal à vous concentrer et les tâches simples vous prennent deux fois plus de temps. Que faites-vous ?",
          answers: [
          {text: "Je pousse encore un peu — c'est probablement temporaire.", score: 0},
          {text: "J'en parle à un proche mais pas dans le contexte professionnel.", score: 1},
          {text: "Je prends cela comme un signal sérieux et cherche à en comprendre la cause.", score: 2}
          ]
        },
        {
          text: "Vous observez qu'un collègue habituellement positif fait des remarques de plus en plus acerbes en réunion depuis plusieurs semaines. Que faites-vous ?",
          answers: [
          {text: "Je lui dis de se calmer.", score: 0},
          {text: "Je note le changement mais n'interviens pas.", score: 1},
          {text: "Je prends un moment pour lui demander comment il va, en dehors des réunions.", score: 2}
          ]
        },
        {
          text: "Vous sentez une tension latente dans votre équipe depuis quelques semaines. Les échanges sont cordiaux en surface mais les non-dits s'accumulent. Que faites-vous ?",
          answers: [
          {text: "J'attends que ça se désamorce seul.", score: 0},
          {text: "J'en parle à mon responsable.", score: 1},
          {text: "Je cherche à créer un espace où les vrais sujets peuvent être mis sur la table.", score: 2}
          ]
        },
        {
          text: "Un collègue que vous voyez tous les jours s'est isolé progressivement. Il mange seul et répond de façon courte. Que faites-vous ?",
          answers: [
          {text: "Je respecte son besoin d'espace.", score: 0},
          {text: "Je lui demande rapidement si tout va bien.", score: 1},
          {text: "Je crée une occasion d'échange non forcée et reste disponible sur la durée.", score: 2}
          ]
        },
        {
          text: "Vous avez du mal à récupérer le week-end. Le dimanche soir, vous êtes déjà épuisé à l'idée du lundi. Que faites-vous ?",
          answers: [
          {text: "C'est la période — ça va passer.", score: 0},
          {text: "Je cherche à mieux gérer mon temps le week-end.", score: 1},
          {text: "Je prends cela comme un signal de surcharge durable et cherche à en parler.", score: 2}
          ]
        }
    ],
    1: [
        {
          text: "Vos priorités changent deux fois par semaine et vous ne savez plus quoi traiter en premier. Que faites-vous ?",
          answers: [
          {text: "Je jongle avec tout et m'adapte.", score: 0},
          {text: "Je reviens vers mon responsable pour qu'il tranche.", score: 1},
          {text: "Je clarifie avec mon responsable les critères de priorisation pour les semaines à venir.", score: 2}
          ]
        },
        {
          text: "Vous avez dit oui à trop de demandes cette semaine. Vous êtes saturé. Que faites-vous ?",
          answers: [
          {text: "Je travaille plus longtemps pour tout tenir.", score: 0},
          {text: "Je préviens les personnes concernées que j'aurai du retard.", score: 1},
          {text: "Je priorise avec mon responsable et reviens vers les demandeurs pour redéfinir les délais.", score: 2}
          ]
        },
        {
          text: "Une urgence imprévue tombe alors que vous avez déjà une journée chargée. Votre manager vous demande d'absorber. Que faites-vous ?",
          answers: [
          {text: "J'absorbe — c'est mon rôle d'être flexible.", score: 0},
          {text: "Je demande ce qui peut être décalé pour intégrer l'urgence.", score: 1},
          {text: "Je lui expose l'impact sur les autres engagements et demande qu'un arbitrage soit fait.", score: 2}
          ]
        },
        {
          text: "Vous réalisez que vous avez beaucoup de tâches qui durent depuis longtemps sans avancer vraiment, faute de temps pour les traiter. Que faites-vous ?",
          answers: [
          {text: "Je les garde dans ma liste en espérant trouver du temps.", score: 0},
          {text: "Je les délègue à quelqu'un de disponible.", score: 1},
          {text: "Je les remets sur la table avec mon responsable pour décider lesquelles sont encore pertinentes.", score: 2}
          ]
        },
        {
          text: "Votre charge de travail a augmenté progressivement sans que les ressources évoluent. Vous tenez mais à la limite. Que faites-vous ?",
          answers: [
          {text: "Je continue — si ça tenait jusqu'ici, ça peut durer.", score: 0},
          {text: "J'en parle à mon responsable en passant.", score: 1},
          {text: "Je formalise la situation et demande un échange dédié pour trouver une solution durable.", score: 2}
          ]
        }
    ],
    2: [
        {
          text: "Deux collègues ont une tension ouverte depuis une semaine et ça affecte le travail de toute l'équipe. Que faites-vous ?",
          answers: [
          {text: "Je les laisse gérer entre eux.", score: 0},
          {text: "Je parle à l'un des deux pour l'aider.", score: 1},
          {text: "Je leur propose un espace de discussion factuel sur les points qui bloquent leur coopération.", score: 2}
          ]
        },
        {
          text: "Lors d'une réunion, un collègue vous coupe la parole systématiquement. Ça arrive régulièrement. Que faites-vous ?",
          answers: [
          {text: "Je m'adapte et attends qu'il ait fini.", score: 0},
          {text: "Je lui en parle discrètement après la réunion.", score: 1},
          {text: "Je lui en parle directement avec des faits précis et en cherchant à comprendre sa perspective.", score: 2}
          ]
        },
        {
          text: "Une décision vient d'être prise sans que votre équipe soit consultée. Les réactions sont vives. Que faites-vous ?",
          answers: [
          {text: "J'attends que l'agitation se calme.", score: 0},
          {text: "J'exprime ma frustration à mes collègues.", score: 1},
          {text: "Je cherche à comprendre le contexte de la décision et crée un espace pour que l'équipe puisse s'exprimer de façon constructive.", score: 2}
          ]
        },
        {
          text: "Votre équipe traverse une période difficile et le climat est tendu. Vous avez vous-même du mal à rester positif. Que faites-vous ?",
          answers: [
          {text: "Je mets de côté mes propres émotions pour être disponible pour les autres.", score: 0},
          {text: "Je me concentre sur ce que je peux contrôler directement.", score: 1},
          {text: "Je cherche à la fois un appui pour moi et des façons de soutenir le collectif sans porter seul le poids de l'ambiance.", score: 2}
          ]
        },
        {
          text: "Vous constatez qu'une personne de l'équipe est souvent la cible de remarques ironiques lors des réunions. Personne ne réagit. Que faites-vous ?",
          answers: [
          {text: "Je n'interviens pas — c'est entre eux.", score: 0},
          {text: "Je lui exprime mon soutien en privé.", score: 1},
          {text: "Je nomme les comportements que j'observe et recadre dans le moment si c'est possible.", score: 2}
          ]
        }
    ],
    3: [
        {
          text: "Vous traversez une période difficile et avez besoin d'aide mais vous ne savez pas à qui vous adresser. Que faites-vous ?",
          answers: [
          {text: "Je gère seul — ce sont des affaires personnelles.", score: 0},
          {text: "Je cherche quelqu'un de confiance dans mon entourage proche.", score: 1},
          {text: "Je me renseigne sur les dispositifs d'écoute disponibles dans mon organisation.", score: 2}
          ]
        },
        {
          text: "Un collègue vous confie qu'il pense à démissionner à cause du stress. Vous le trouvez vraiment épuisé. Que faites-vous ?",
          answers: [
          {text: "Je l'écoute et lui dis que ça va passer.", score: 0},
          {text: "Je lui conseille de prendre des congés.", score: 1},
          {text: "Je l'écoute vraiment et l'oriente vers les ressources adaptées tout en lui laissant la décision.", score: 2}
          ]
        },
        {
          text: "Votre responsable est disponible mais vous avez peur que signaler votre charge soit perçu comme un manque de compétence. Que faites-vous ?",
          answers: [
          {text: "Je ne dis rien pour éviter d'être jugé.", score: 0},
          {text: "Je laisse entendre que c'est chargé sans formaliser.", score: 1},
          {text: "Je me prépare à formuler clairement la situation en termes factuels et je demande un échange dédié.", score: 2}
          ]
        },
        {
          text: "Vous avez alerté votre responsable il y a deux semaines sur une situation difficile. Rien n'a changé. Que faites-vous ?",
          answers: [
          {text: "Je lâche l'affaire — il n'y a rien à faire.", score: 0},
          {text: "J'en reparle informellement.", score: 1},
          {text: "Je relance formellement et clarifie ce dont j'ai besoin.", score: 2}
          ]
        },
        {
          text: "Vous sentez que vous avez besoin de soutien psychologique mais vous ne savez pas si votre organisation le propose. Que faites-vous ?",
          answers: [
          {text: "Je ne cherche pas — c'est une démarche personnelle qui n'a pas à passer par l'entreprise.", score: 0},
          {text: "J'en parle à mon responsable.", score: 1},
          {text: "Je me renseigne auprès des RH sur ce qui existe sans forcément exposer ma situation.", score: 2}
          ]
        }
    ],
  },

// ─── À coller dans catalogue-qvt.js ───────────────────────────────────
  // Clé : "charge-priorites" dans Object.assign(window.CUSTOM_QUESTIONS, {

  "charge-priorites": {
    // ── Chapitre 1 : Réguler les urgences
    0: [
      {
        type: "choix",
        text: "Trois demandes arrivent en même matinée, toutes présentées comme urgentes — de David, de Sarah et de votre responsable. Vous ne pouvez pas tout traiter avant midi.",
        tags: ["urgence", "priorisation"],
        answers: [
          { text: "Je commence par la demande de mon responsable, c'est la plus risquée à laisser attendre.", score: 0 },
          { text: "Je contacte chacun pour comprendre ce qui est vraiment bloquant avant de m'organiser.", score: 2 },
          { text: "Je travaille dans l'ordre d'arrivée — c'est la seule façon d'être équitable.", score: 0.5 },
          { text: "Je préviens les trois que je ferai ce que je peux dans la journée.", score: 1 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous gérez les urgences au fur et à mesure sans vraiment les hiérarchiser", desc: "Traiter dans l'ordre d'arrivée, rester plus longtemps, absorber les demandes sans questionner leur urgence réelle : ce sont des réflexes courants qui donnent une impression de dynamisme mais épuisent progressivement. Prioriser, c'est aussi décider ce qu'on ne fera pas — ou pas maintenant — et l'assumer." },
          moyen: { label: "Pratiques en développement", titre: "Vous priorisez dans les situations simples, vous êtes encore rattrapé·e par les urgences dans les situations complexes", desc: "Vous faites la différence entre l'urgent et l'important dans la plupart des cas. Mais quand plusieurs sources de pression convergent au même moment, la hiérarchie des demandes peut prendre le dessus sur votre propre organisation. L'enjeu est de tenir vos priorités même dans ces moments-là." },
          haut:  { label: "Réflexes installés", titre: "Vous hiérarchisez activement votre charge et vous protégez votre organisation des urgences non qualifiées", desc: "Vous qualifiez les urgences avant de les traiter, vous signalez les charges insoutenables avant d'être à bout, et vous créez les conditions pour que votre entourage puisse faire de même. Cette posture préventive — qui suppose d'accepter d'être parfois celui ou celle qui dit 'ça ne peut pas se faire comme ça' — est ce qui permet de tenir dans la durée." },
        },
      }, 
      {
        type: "likert",
        text: "Vous faites la différence entre ce qui est urgent pour les autres et ce qui l'est vraiment pour l'avancement de votre travail.",
        tags: ["urgence", "discernement"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous gérez les urgences au fur et à mesure sans vraiment les hiérarchiser", desc: "Traiter dans l'ordre d'arrivée, rester plus longtemps, absorber les demandes sans questionner leur urgence réelle : ce sont des réflexes courants qui donnent une impression de dynamisme mais épuisent progressivement. Prioriser, c'est aussi décider ce qu'on ne fera pas — ou pas maintenant — et l'assumer." },
          moyen: { label: "Pratiques en développement", titre: "Vous priorisez dans les situations simples, vous êtes encore rattrapé·e par les urgences dans les situations complexes", desc: "Vous faites la différence entre l'urgent et l'important dans la plupart des cas. Mais quand plusieurs sources de pression convergent au même moment, la hiérarchie des demandes peut prendre le dessus sur votre propre organisation. L'enjeu est de tenir vos priorités même dans ces moments-là." },
          haut:  { label: "Réflexes installés", titre: "Vous hiérarchisez activement votre charge et vous protégez votre organisation des urgences non qualifiées", desc: "Vous qualifiez les urgences avant de les traiter, vous signalez les charges insoutenables avant d'être à bout, et vous créez les conditions pour que votre entourage puisse faire de même. Cette posture préventive — qui suppose d'accepter d'être parfois celui ou celle qui dit 'ça ne peut pas se faire comme ça' — est ce qui permet de tenir dans la durée." },
        },
      }, 
      {
        type: "choix",
        text: "Il est 18h30. Vous n'avez pas terminé ce que vous aviez prévu pour aujourd'hui, et votre agenda de demain est déjà plein. Élodie du service communication vous relance sur un dossier.",
        tags: ["charge", "limites"],
        answers: [
          { text: "Je reste pour finir — un dossier en retard crée toujours plus de problèmes qu'une soirée longue.", score: 0 },
          { text: "Je lui réponds que je traiterai ça demain matin en premier, et je pars.", score: 2 },
          { text: "Je traite rapidement sa demande avant de partir — ça prend dix minutes.", score: 0.5 },
          { text: "Je lui dis que je suis débordé sans préciser quand je pourrai m'en occuper.", score: 1 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous gérez les urgences au fur et à mesure sans vraiment les hiérarchiser", desc: "Traiter dans l'ordre d'arrivée, rester plus longtemps, absorber les demandes sans questionner leur urgence réelle : ce sont des réflexes courants qui donnent une impression de dynamisme mais épuisent progressivement. Prioriser, c'est aussi décider ce qu'on ne fera pas — ou pas maintenant — et l'assumer." },
          moyen: { label: "Pratiques en développement", titre: "Vous priorisez dans les situations simples, vous êtes encore rattrapé·e par les urgences dans les situations complexes", desc: "Vous faites la différence entre l'urgent et l'important dans la plupart des cas. Mais quand plusieurs sources de pression convergent au même moment, la hiérarchie des demandes peut prendre le dessus sur votre propre organisation. L'enjeu est de tenir vos priorités même dans ces moments-là." },
          haut:  { label: "Réflexes installés", titre: "Vous hiérarchisez activement votre charge et vous protégez votre organisation des urgences non qualifiées", desc: "Vous qualifiez les urgences avant de les traiter, vous signalez les charges insoutenables avant d'être à bout, et vous créez les conditions pour que votre entourage puisse faire de même. Cette posture préventive — qui suppose d'accepter d'être parfois celui ou celle qui dit 'ça ne peut pas se faire comme ça' — est ce qui permet de tenir dans la durée." },
        },
      }, 
      {
        type: "choix",
        text: "Votre équipe a pris l'habitude de traiter toutes les demandes entrantes dans la journée, quelle que soit la charge. Baptiste vient de rejoindre l'équipe et s'étonne que personne ne priorise.",
        tags: ["urgence", "normes de groupe"],
        answers: [
          { text: "Je lui explique que c'est comme ça que ça fonctionne ici — il s'y fera.", score: 0 },
          { text: "Je lui donne raison en privé mais je ne change rien — ce n'est pas à moi de remettre en cause le fonctionnement de l'équipe.", score: 0 },
          { text: "Je profite de sa question pour soulever le sujet en réunion d'équipe.", score: 2 },
          { text: "Je lui explique comment je gère personnellement ma propre charge sans promettre que l'équipe va changer.", score: 1 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous gérez les urgences au fur et à mesure sans vraiment les hiérarchiser", desc: "Traiter dans l'ordre d'arrivée, rester plus longtemps, absorber les demandes sans questionner leur urgence réelle : ce sont des réflexes courants qui donnent une impression de dynamisme mais épuisent progressivement. Prioriser, c'est aussi décider ce qu'on ne fera pas — ou pas maintenant — et l'assumer." },
          moyen: { label: "Pratiques en développement", titre: "Vous priorisez dans les situations simples, vous êtes encore rattrapé·e par les urgences dans les situations complexes", desc: "Vous faites la différence entre l'urgent et l'important dans la plupart des cas. Mais quand plusieurs sources de pression convergent au même moment, la hiérarchie des demandes peut prendre le dessus sur votre propre organisation. L'enjeu est de tenir vos priorités même dans ces moments-là." },
          haut:  { label: "Réflexes installés", titre: "Vous hiérarchisez activement votre charge et vous protégez votre organisation des urgences non qualifiées", desc: "Vous qualifiez les urgences avant de les traiter, vous signalez les charges insoutenables avant d'être à bout, et vous créez les conditions pour que votre entourage puisse faire de même. Cette posture préventive — qui suppose d'accepter d'être parfois celui ou celle qui dit 'ça ne peut pas se faire comme ça' — est ce qui permet de tenir dans la durée." },
        },
      }, 
      {
        type: "likert",
        text: "Quand votre charge devient difficile à absorber, vous le signalez avant d'être à bout plutôt qu'après.",
        tags: ["charge", "signalement"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous gérez les urgences au fur et à mesure sans vraiment les hiérarchiser", desc: "Traiter dans l'ordre d'arrivée, rester plus longtemps, absorber les demandes sans questionner leur urgence réelle : ce sont des réflexes courants qui donnent une impression de dynamisme mais épuisent progressivement. Prioriser, c'est aussi décider ce qu'on ne fera pas — ou pas maintenant — et l'assumer." },
          moyen: { label: "Pratiques en développement", titre: "Vous priorisez dans les situations simples, vous êtes encore rattrapé·e par les urgences dans les situations complexes", desc: "Vous faites la différence entre l'urgent et l'important dans la plupart des cas. Mais quand plusieurs sources de pression convergent au même moment, la hiérarchie des demandes peut prendre le dessus sur votre propre organisation. L'enjeu est de tenir vos priorités même dans ces moments-là." },
          haut:  { label: "Réflexes installés", titre: "Vous hiérarchisez activement votre charge et vous protégez votre organisation des urgences non qualifiées", desc: "Vous qualifiez les urgences avant de les traiter, vous signalez les charges insoutenables avant d'être à bout, et vous créez les conditions pour que votre entourage puisse faire de même. Cette posture préventive — qui suppose d'accepter d'être parfois celui ou celle qui dit 'ça ne peut pas se faire comme ça' — est ce qui permet de tenir dans la durée." },
        },
      }, 
      {
        type: "choix",
        text: "Un projet que vous avez lancé il y a un mois est devenu moins pertinent. L'abandonner permettrait de dégager du temps, mais ça se verrait.",
        tags: ["urgence", "visibilité"],
        answers: [
          { text: "Je le termine quand même — changer de cap en cours de route serait mal perçu.", score: 0 },
          { text: "Je le mets en pause discrètement et je le reprends si quelqu'un me le réclame.", score: 0.5 },
          { text: "J'en parle à mon responsable pour décider ensemble si ça vaut encore la peine de continuer.", score: 2 },
          { text: "Je le délègue à quelqu'un qui a plus de temps — ça ne se perdra pas.", score: 1 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous gérez les urgences au fur et à mesure sans vraiment les hiérarchiser", desc: "Traiter dans l'ordre d'arrivée, rester plus longtemps, absorber les demandes sans questionner leur urgence réelle : ce sont des réflexes courants qui donnent une impression de dynamisme mais épuisent progressivement. Prioriser, c'est aussi décider ce qu'on ne fera pas — ou pas maintenant — et l'assumer." },
          moyen: { label: "Pratiques en développement", titre: "Vous priorisez dans les situations simples, vous êtes encore rattrapé·e par les urgences dans les situations complexes", desc: "Vous faites la différence entre l'urgent et l'important dans la plupart des cas. Mais quand plusieurs sources de pression convergent au même moment, la hiérarchie des demandes peut prendre le dessus sur votre propre organisation. L'enjeu est de tenir vos priorités même dans ces moments-là." },
          haut:  { label: "Réflexes installés", titre: "Vous hiérarchisez activement votre charge et vous protégez votre organisation des urgences non qualifiées", desc: "Vous qualifiez les urgences avant de les traiter, vous signalez les charges insoutenables avant d'être à bout, et vous créez les conditions pour que votre entourage puisse faire de même. Cette posture préventive — qui suppose d'accepter d'être parfois celui ou celle qui dit 'ça ne peut pas se faire comme ça' — est ce qui permet de tenir dans la durée." },
        },
      }, 
      {
        type: "choix",
        text: "Nathalie, une collègue, absorbe régulièrement plus de travail que les autres parce qu'elle ne sait pas refuser. L'équipe apprécie sa disponibilité mais personne ne le soulève.",
        tags: ["urgence", "charge collective"],
        answers: [
          { text: "C'est à elle de mettre ses propres limites — si elle voulait en parler, elle le ferait.", score: 0 },
          { text: "Je lui propose mon aide ponctuellement sur ce qui touche directement notre collaboration.", score: 1 },
          { text: "Je lui en parle en tête-à-tête pour voir si elle vit ça comme un problème.", score: 2 },
          { text: "J'en parle à notre responsable pour qu'il rééquilibre la distribution.", score: 1 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous gérez les urgences au fur et à mesure sans vraiment les hiérarchiser", desc: "Traiter dans l'ordre d'arrivée, rester plus longtemps, absorber les demandes sans questionner leur urgence réelle : ce sont des réflexes courants qui donnent une impression de dynamisme mais épuisent progressivement. Prioriser, c'est aussi décider ce qu'on ne fera pas — ou pas maintenant — et l'assumer." },
          moyen: { label: "Pratiques en développement", titre: "Vous priorisez dans les situations simples, vous êtes encore rattrapé·e par les urgences dans les situations complexes", desc: "Vous faites la différence entre l'urgent et l'important dans la plupart des cas. Mais quand plusieurs sources de pression convergent au même moment, la hiérarchie des demandes peut prendre le dessus sur votre propre organisation. L'enjeu est de tenir vos priorités même dans ces moments-là." },
          haut:  { label: "Réflexes installés", titre: "Vous hiérarchisez activement votre charge et vous protégez votre organisation des urgences non qualifiées", desc: "Vous qualifiez les urgences avant de les traiter, vous signalez les charges insoutenables avant d'être à bout, et vous créez les conditions pour que votre entourage puisse faire de même. Cette posture préventive — qui suppose d'accepter d'être parfois celui ou celle qui dit 'ça ne peut pas se faire comme ça' — est ce qui permet de tenir dans la durée." },
        },
      }, 
      {
        type: "likert",
        text: "Vous vérifiez régulièrement si la charge de vos collègues proches est tenable, pas seulement la vôtre.",
        tags: ["priorisation", "équipe"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous gérez les urgences au fur et à mesure sans vraiment les hiérarchiser", desc: "Traiter dans l'ordre d'arrivée, rester plus longtemps, absorber les demandes sans questionner leur urgence réelle : ce sont des réflexes courants qui donnent une impression de dynamisme mais épuisent progressivement. Prioriser, c'est aussi décider ce qu'on ne fera pas — ou pas maintenant — et l'assumer." },
          moyen: { label: "Pratiques en développement", titre: "Vous priorisez dans les situations simples, vous êtes encore rattrapé·e par les urgences dans les situations complexes", desc: "Vous faites la différence entre l'urgent et l'important dans la plupart des cas. Mais quand plusieurs sources de pression convergent au même moment, la hiérarchie des demandes peut prendre le dessus sur votre propre organisation. L'enjeu est de tenir vos priorités même dans ces moments-là." },
          haut:  { label: "Réflexes installés", titre: "Vous hiérarchisez activement votre charge et vous protégez votre organisation des urgences non qualifiées", desc: "Vous qualifiez les urgences avant de les traiter, vous signalez les charges insoutenables avant d'être à bout, et vous créez les conditions pour que votre entourage puisse faire de même. Cette posture préventive — qui suppose d'accepter d'être parfois celui ou celle qui dit 'ça ne peut pas se faire comme ça' — est ce qui permet de tenir dans la durée." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez deux tâches importantes pour aujourd'hui. Un imprévu surgit en milieu de matinée et consomme une heure que vous n'aviez pas prévue. Jonathan, qui travaille avec vous, attend une réponse sur un point bloquant.",
        tags: ["urgence", "décision"],
        answers: [
          { text: "Je réponds à Jonathan rapidement puis je récupère l'heure perdue ce soir.", score: 0 },
          { text: "Je regarde ce qui peut glisser à demain parmi mes deux tâches et je réponds à Jonathan.", score: 2 },
          { text: "Je finis mes deux tâches d'abord — Jonathan peut attendre jusqu'en fin d'après-midi.", score: 1 },
          { text: "Je demande à Jonathan si quelqu'un d'autre peut débloquer son point en attendant.", score: 1.5 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous gérez les urgences au fur et à mesure sans vraiment les hiérarchiser", desc: "Traiter dans l'ordre d'arrivée, rester plus longtemps, absorber les demandes sans questionner leur urgence réelle : ce sont des réflexes courants qui donnent une impression de dynamisme mais épuisent progressivement. Prioriser, c'est aussi décider ce qu'on ne fera pas — ou pas maintenant — et l'assumer." },
          moyen: { label: "Pratiques en développement", titre: "Vous priorisez dans les situations simples, vous êtes encore rattrapé·e par les urgences dans les situations complexes", desc: "Vous faites la différence entre l'urgent et l'important dans la plupart des cas. Mais quand plusieurs sources de pression convergent au même moment, la hiérarchie des demandes peut prendre le dessus sur votre propre organisation. L'enjeu est de tenir vos priorités même dans ces moments-là." },
          haut:  { label: "Réflexes installés", titre: "Vous hiérarchisez activement votre charge et vous protégez votre organisation des urgences non qualifiées", desc: "Vous qualifiez les urgences avant de les traiter, vous signalez les charges insoutenables avant d'être à bout, et vous créez les conditions pour que votre entourage puisse faire de même. Cette posture préventive — qui suppose d'accepter d'être parfois celui ou celle qui dit 'ça ne peut pas se faire comme ça' — est ce qui permet de tenir dans la durée." },
        },
      }, 
      {
        type: "likert",
        text: "Vous anticipez les pics de charge plutôt que de les subir au moment où ils arrivent.",
        tags: ["urgence", "anticipation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous gérez les urgences au fur et à mesure sans vraiment les hiérarchiser", desc: "Traiter dans l'ordre d'arrivée, rester plus longtemps, absorber les demandes sans questionner leur urgence réelle : ce sont des réflexes courants qui donnent une impression de dynamisme mais épuisent progressivement. Prioriser, c'est aussi décider ce qu'on ne fera pas — ou pas maintenant — et l'assumer." },
          moyen: { label: "Pratiques en développement", titre: "Vous priorisez dans les situations simples, vous êtes encore rattrapé·e par les urgences dans les situations complexes", desc: "Vous faites la différence entre l'urgent et l'important dans la plupart des cas. Mais quand plusieurs sources de pression convergent au même moment, la hiérarchie des demandes peut prendre le dessus sur votre propre organisation. L'enjeu est de tenir vos priorités même dans ces moments-là." },
          haut:  { label: "Réflexes installés", titre: "Vous hiérarchisez activement votre charge et vous protégez votre organisation des urgences non qualifiées", desc: "Vous qualifiez les urgences avant de les traiter, vous signalez les charges insoutenables avant d'être à bout, et vous créez les conditions pour que votre entourage puisse faire de même. Cette posture préventive — qui suppose d'accepter d'être parfois celui ou celle qui dit 'ça ne peut pas se faire comme ça' — est ce qui permet de tenir dans la durée." },
        },
      }
    ],

    // ── Chapitre 2 : Dire non et négocier les délais
    1: [
      {
        type: "choix",
        text: "Votre responsable vous confie un nouveau dossier urgent alors que votre agenda est déjà plein pour les deux prochaines semaines. Elle insiste sur son importance stratégique.",
        tags: ["limites", "hiérarchie"],
        answers: [
          { text: "J'accepte sans rien dire — elle sait mieux que moi ce qui est vraiment prioritaire.", score: 0 },
          { text: "Je lui dis que je ferai au mieux en réorganisant mes priorités.", score: 0.5 },
          { text: "Je lui expose ce que j'ai déjà en cours et je lui demande ce qui peut être décalé.", score: 2 },
          { text: "Je lui dis que c'est impossible — ma charge actuelle ne le permet pas.", score: 1 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous acceptez plus que vous ne pouvez tenir, par crainte de décevoir ou de paraître peu impliqué·e", desc: "Dire oui quand votre charge est déjà pleine, annoncer des délais que vous savez irréalistes pour ne pas décevoir, rattraper le soir ce que la journée n'a pas permis : ces comportements protègent la relation à court terme mais créent une pression structurelle difficile à tenir. Négocier un délai est toujours plus solide que le rater." },
          moyen: { label: "Pratiques en développement", titre: "Vous négociez les délais quand c'est évident, vous acceptez encore quand la pression est forte", desc: "Vous savez demander un délai supplémentaire quand c'est raisonnable. Mais sous pression hiérarchique forte ou dans une culture où tout le monde dit oui, vous pouvez encore vous retrouver à accepter ce que vous ne pouvez pas assumer. L'enjeu est de maintenir ce cap précisément dans ces situations." },
          haut:  { label: "Réflexes installés", titre: "Vous négociez les délais sur les faits, pas sur votre envie de tenir ou de décevoir", desc: "Vous annoncez des délais réalistes, vous les renégociez quand les conditions changent, et vous maintenez cette posture même sous pression hiérarchique. Ce n'est pas du confort — c'est de la fiabilité. Les gens qui travaillent avec vous savent ce qu'ils peuvent attendre de vous, et c'est bien plus précieux qu'un oui qui ne tient pas." },
        },
      }, 
      {
        type: "likert",
        text: "Vous exprimez vos contraintes de charge à votre responsable sans attendre d'être en situation de crise.",
        tags: ["limites", "expression"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous acceptez plus que vous ne pouvez tenir, par crainte de décevoir ou de paraître peu impliqué·e", desc: "Dire oui quand votre charge est déjà pleine, annoncer des délais que vous savez irréalistes pour ne pas décevoir, rattraper le soir ce que la journée n'a pas permis : ces comportements protègent la relation à court terme mais créent une pression structurelle difficile à tenir. Négocier un délai est toujours plus solide que le rater." },
          moyen: { label: "Pratiques en développement", titre: "Vous négociez les délais quand c'est évident, vous acceptez encore quand la pression est forte", desc: "Vous savez demander un délai supplémentaire quand c'est raisonnable. Mais sous pression hiérarchique forte ou dans une culture où tout le monde dit oui, vous pouvez encore vous retrouver à accepter ce que vous ne pouvez pas assumer. L'enjeu est de maintenir ce cap précisément dans ces situations." },
          haut:  { label: "Réflexes installés", titre: "Vous négociez les délais sur les faits, pas sur votre envie de tenir ou de décevoir", desc: "Vous annoncez des délais réalistes, vous les renégociez quand les conditions changent, et vous maintenez cette posture même sous pression hiérarchique. Ce n'est pas du confort — c'est de la fiabilité. Les gens qui travaillent avec vous savent ce qu'ils peuvent attendre de vous, et c'est bien plus précieux qu'un oui qui ne tient pas." },
        },
      }, 
      {
        type: "choix",
        text: "Pierre vous demande un livrable pour vendredi. Vous savez que vous pouvez le faire sérieusement pour lundi, ou le bâcler pour vendredi. Il n'a pas précisé pourquoi vendredi.",
        tags: ["délai", "négociation"],
        answers: [
          { text: "Je livre quelque chose vendredi — un délai, c'est un délai.", score: 0 },
          { text: "Je lui demande si lundi matin lui convient en lui expliquant ce que ça change en termes de qualité.", score: 2 },
          { text: "Je travaille le week-end pour lui livrer quelque chose de correct vendredi.", score: 0 },
          { text: "Je lui envoie une version provisoire vendredi et je complète lundi.", score: 1 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous acceptez plus que vous ne pouvez tenir, par crainte de décevoir ou de paraître peu impliqué·e", desc: "Dire oui quand votre charge est déjà pleine, annoncer des délais que vous savez irréalistes pour ne pas décevoir, rattraper le soir ce que la journée n'a pas permis : ces comportements protègent la relation à court terme mais créent une pression structurelle difficile à tenir. Négocier un délai est toujours plus solide que le rater." },
          moyen: { label: "Pratiques en développement", titre: "Vous négociez les délais quand c'est évident, vous acceptez encore quand la pression est forte", desc: "Vous savez demander un délai supplémentaire quand c'est raisonnable. Mais sous pression hiérarchique forte ou dans une culture où tout le monde dit oui, vous pouvez encore vous retrouver à accepter ce que vous ne pouvez pas assumer. L'enjeu est de maintenir ce cap précisément dans ces situations." },
          haut:  { label: "Réflexes installés", titre: "Vous négociez les délais sur les faits, pas sur votre envie de tenir ou de décevoir", desc: "Vous annoncez des délais réalistes, vous les renégociez quand les conditions changent, et vous maintenez cette posture même sous pression hiérarchique. Ce n'est pas du confort — c'est de la fiabilité. Les gens qui travaillent avec vous savent ce qu'ils peuvent attendre de vous, et c'est bien plus précieux qu'un oui qui ne tient pas." },
        },
      }, 
      {
        type: "choix",
        text: "Un collègue d'une autre équipe vous sollicite régulièrement en dehors de vos missions officielles. Ses demandes sont légitimes, mais elles empiètent sérieusement sur votre propre charge.",
        tags: ["limites", "pression"],
        answers: [
          { text: "Je continue de l'aider — refuser serait perçu comme un manque d'esprit d'équipe.", score: 0 },
          { text: "J'en parle à mon responsable pour qu'il arbitre officiellement.", score: 1 },
          { text: "Je lui dis que je ne peux plus répondre à ses demandes dans les délais qu'il attend, et je lui propose une alternative.", score: 2 },
          { text: "Je réponds en prenant plus de temps, pour décourager progressivement sans avoir à refuser.", score: 0 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous acceptez plus que vous ne pouvez tenir, par crainte de décevoir ou de paraître peu impliqué·e", desc: "Dire oui quand votre charge est déjà pleine, annoncer des délais que vous savez irréalistes pour ne pas décevoir, rattraper le soir ce que la journée n'a pas permis : ces comportements protègent la relation à court terme mais créent une pression structurelle difficile à tenir. Négocier un délai est toujours plus solide que le rater." },
          moyen: { label: "Pratiques en développement", titre: "Vous négociez les délais quand c'est évident, vous acceptez encore quand la pression est forte", desc: "Vous savez demander un délai supplémentaire quand c'est raisonnable. Mais sous pression hiérarchique forte ou dans une culture où tout le monde dit oui, vous pouvez encore vous retrouver à accepter ce que vous ne pouvez pas assumer. L'enjeu est de maintenir ce cap précisément dans ces situations." },
          haut:  { label: "Réflexes installés", titre: "Vous négociez les délais sur les faits, pas sur votre envie de tenir ou de décevoir", desc: "Vous annoncez des délais réalistes, vous les renégociez quand les conditions changent, et vous maintenez cette posture même sous pression hiérarchique. Ce n'est pas du confort — c'est de la fiabilité. Les gens qui travaillent avec vous savent ce qu'ils peuvent attendre de vous, et c'est bien plus précieux qu'un oui qui ne tient pas." },
        },
      }, 
      {
        type: "likert",
        text: "Quand vous annoncez un délai, il reflète ce que vous pouvez réellement faire plutôt que ce que vous pensez que l'autre veut entendre.",
        tags: ["délai", "réalisme"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous acceptez plus que vous ne pouvez tenir, par crainte de décevoir ou de paraître peu impliqué·e", desc: "Dire oui quand votre charge est déjà pleine, annoncer des délais que vous savez irréalistes pour ne pas décevoir, rattraper le soir ce que la journée n'a pas permis : ces comportements protègent la relation à court terme mais créent une pression structurelle difficile à tenir. Négocier un délai est toujours plus solide que le rater." },
          moyen: { label: "Pratiques en développement", titre: "Vous négociez les délais quand c'est évident, vous acceptez encore quand la pression est forte", desc: "Vous savez demander un délai supplémentaire quand c'est raisonnable. Mais sous pression hiérarchique forte ou dans une culture où tout le monde dit oui, vous pouvez encore vous retrouver à accepter ce que vous ne pouvez pas assumer. L'enjeu est de maintenir ce cap précisément dans ces situations." },
          haut:  { label: "Réflexes installés", titre: "Vous négociez les délais sur les faits, pas sur votre envie de tenir ou de décevoir", desc: "Vous annoncez des délais réalistes, vous les renégociez quand les conditions changent, et vous maintenez cette posture même sous pression hiérarchique. Ce n'est pas du confort — c'est de la fiabilité. Les gens qui travaillent avec vous savent ce qu'ils peuvent attendre de vous, et c'est bien plus précieux qu'un oui qui ne tient pas." },
        },
      }, 
      {
        type: "choix",
        text: "Dans votre équipe, tout le monde dit oui à tout — c'est la culture. Quand Claire a essayé de refuser une mission il y a six mois, ça a mal été perçu. On vous demande quelque chose que vous ne pouvez pas assumer.",
        tags: ["refus", "normes de groupe"],
        answers: [
          { text: "J'accepte — la culture de l'équipe compte et je ne veux pas être celui qui fait des vagues.", score: 0 },
          { text: "J'accepte mais je demande qu'on retire une autre tâche de mon périmètre en échange.", score: 2 },
          { text: "J'accepte en me disant que je gérerai — les autres y arrivent bien.", score: 0 },
          { text: "Je refuse en expliquant ma charge actuelle, même si ça crée un inconfort.", score: 1.5 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous acceptez plus que vous ne pouvez tenir, par crainte de décevoir ou de paraître peu impliqué·e", desc: "Dire oui quand votre charge est déjà pleine, annoncer des délais que vous savez irréalistes pour ne pas décevoir, rattraper le soir ce que la journée n'a pas permis : ces comportements protègent la relation à court terme mais créent une pression structurelle difficile à tenir. Négocier un délai est toujours plus solide que le rater." },
          moyen: { label: "Pratiques en développement", titre: "Vous négociez les délais quand c'est évident, vous acceptez encore quand la pression est forte", desc: "Vous savez demander un délai supplémentaire quand c'est raisonnable. Mais sous pression hiérarchique forte ou dans une culture où tout le monde dit oui, vous pouvez encore vous retrouver à accepter ce que vous ne pouvez pas assumer. L'enjeu est de maintenir ce cap précisément dans ces situations." },
          haut:  { label: "Réflexes installés", titre: "Vous négociez les délais sur les faits, pas sur votre envie de tenir ou de décevoir", desc: "Vous annoncez des délais réalistes, vous les renégociez quand les conditions changent, et vous maintenez cette posture même sous pression hiérarchique. Ce n'est pas du confort — c'est de la fiabilité. Les gens qui travaillent avec vous savent ce qu'ils peuvent attendre de vous, et c'est bien plus précieux qu'un oui qui ne tient pas." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez accepté un délai serré il y a deux semaines. Aujourd'hui, vous réalisez que vous ne pouvez pas tenir. Il reste quatre jours.",
        tags: ["délai", "charge"],
        answers: [
          { text: "Je travaille jour et nuit pour tenir — j'ai donné ma parole.", score: 0 },
          { text: "J'attends le dernier moment pour prévenir — peut-être que je trouverai une solution d'ici là.", score: 0 },
          { text: "Je préviens maintenant en expliquant la situation et en proposant un nouveau délai réaliste.", score: 2 },
          { text: "Je livre ce que j'ai dans les délais, même incomplet, et je complète ensuite.", score: 1 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous acceptez plus que vous ne pouvez tenir, par crainte de décevoir ou de paraître peu impliqué·e", desc: "Dire oui quand votre charge est déjà pleine, annoncer des délais que vous savez irréalistes pour ne pas décevoir, rattraper le soir ce que la journée n'a pas permis : ces comportements protègent la relation à court terme mais créent une pression structurelle difficile à tenir. Négocier un délai est toujours plus solide que le rater." },
          moyen: { label: "Pratiques en développement", titre: "Vous négociez les délais quand c'est évident, vous acceptez encore quand la pression est forte", desc: "Vous savez demander un délai supplémentaire quand c'est raisonnable. Mais sous pression hiérarchique forte ou dans une culture où tout le monde dit oui, vous pouvez encore vous retrouver à accepter ce que vous ne pouvez pas assumer. L'enjeu est de maintenir ce cap précisément dans ces situations." },
          haut:  { label: "Réflexes installés", titre: "Vous négociez les délais sur les faits, pas sur votre envie de tenir ou de décevoir", desc: "Vous annoncez des délais réalistes, vous les renégociez quand les conditions changent, et vous maintenez cette posture même sous pression hiérarchique. Ce n'est pas du confort — c'est de la fiabilité. Les gens qui travaillent avec vous savent ce qu'ils peuvent attendre de vous, et c'est bien plus précieux qu'un oui qui ne tient pas." },
        },
      }, 
      {
        type: "likert",
        text: "Vous osez dire non à votre responsable quand une demande est incompatible avec votre charge, en le formulant sur les faits et non sur votre volonté.",
        tags: ["refus", "hiérarchie"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous acceptez plus que vous ne pouvez tenir, par crainte de décevoir ou de paraître peu impliqué·e", desc: "Dire oui quand votre charge est déjà pleine, annoncer des délais que vous savez irréalistes pour ne pas décevoir, rattraper le soir ce que la journée n'a pas permis : ces comportements protègent la relation à court terme mais créent une pression structurelle difficile à tenir. Négocier un délai est toujours plus solide que le rater." },
          moyen: { label: "Pratiques en développement", titre: "Vous négociez les délais quand c'est évident, vous acceptez encore quand la pression est forte", desc: "Vous savez demander un délai supplémentaire quand c'est raisonnable. Mais sous pression hiérarchique forte ou dans une culture où tout le monde dit oui, vous pouvez encore vous retrouver à accepter ce que vous ne pouvez pas assumer. L'enjeu est de maintenir ce cap précisément dans ces situations." },
          haut:  { label: "Réflexes installés", titre: "Vous négociez les délais sur les faits, pas sur votre envie de tenir ou de décevoir", desc: "Vous annoncez des délais réalistes, vous les renégociez quand les conditions changent, et vous maintenez cette posture même sous pression hiérarchique. Ce n'est pas du confort — c'est de la fiabilité. Les gens qui travaillent avec vous savent ce qu'ils peuvent attendre de vous, et c'est bien plus précieux qu'un oui qui ne tient pas." },
        },
      }, 
      {
        type: "choix",
        text: "Marc vous contacte un vendredi soir à 19h sur votre téléphone personnel pour une question professionnelle non urgente. Ce n'est pas la première fois.",
        tags: ["limites", "relations"],
        answers: [
          { text: "Je réponds — être disponible fait partie de ma relation de travail avec lui.", score: 0 },
          { text: "Je réponds ce soir et je lui dis demain matin que je préfère qu'on garde les échanges pro dans les horaires de travail.", score: 2 },
          { text: "Je lis le message et je réponds lundi — il saura que j'ai vu.", score: 1 },
          { text: "Je ne réponds pas et je fais comme si je n'avais pas vu.", score: 1 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous acceptez plus que vous ne pouvez tenir, par crainte de décevoir ou de paraître peu impliqué·e", desc: "Dire oui quand votre charge est déjà pleine, annoncer des délais que vous savez irréalistes pour ne pas décevoir, rattraper le soir ce que la journée n'a pas permis : ces comportements protègent la relation à court terme mais créent une pression structurelle difficile à tenir. Négocier un délai est toujours plus solide que le rater." },
          moyen: { label: "Pratiques en développement", titre: "Vous négociez les délais quand c'est évident, vous acceptez encore quand la pression est forte", desc: "Vous savez demander un délai supplémentaire quand c'est raisonnable. Mais sous pression hiérarchique forte ou dans une culture où tout le monde dit oui, vous pouvez encore vous retrouver à accepter ce que vous ne pouvez pas assumer. L'enjeu est de maintenir ce cap précisément dans ces situations." },
          haut:  { label: "Réflexes installés", titre: "Vous négociez les délais sur les faits, pas sur votre envie de tenir ou de décevoir", desc: "Vous annoncez des délais réalistes, vous les renégociez quand les conditions changent, et vous maintenez cette posture même sous pression hiérarchique. Ce n'est pas du confort — c'est de la fiabilité. Les gens qui travaillent avec vous savent ce qu'ils peuvent attendre de vous, et c'est bien plus précieux qu'un oui qui ne tient pas." },
        },
      }, 
      {
        type: "likert",
        text: "Vous vérifiez votre charge réelle avant d'accepter une nouvelle mission plutôt que d'accepter d'abord et d'évaluer ensuite.",
        tags: ["délai", "cohérence"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous acceptez plus que vous ne pouvez tenir, par crainte de décevoir ou de paraître peu impliqué·e", desc: "Dire oui quand votre charge est déjà pleine, annoncer des délais que vous savez irréalistes pour ne pas décevoir, rattraper le soir ce que la journée n'a pas permis : ces comportements protègent la relation à court terme mais créent une pression structurelle difficile à tenir. Négocier un délai est toujours plus solide que le rater." },
          moyen: { label: "Pratiques en développement", titre: "Vous négociez les délais quand c'est évident, vous acceptez encore quand la pression est forte", desc: "Vous savez demander un délai supplémentaire quand c'est raisonnable. Mais sous pression hiérarchique forte ou dans une culture où tout le monde dit oui, vous pouvez encore vous retrouver à accepter ce que vous ne pouvez pas assumer. L'enjeu est de maintenir ce cap précisément dans ces situations." },
          haut:  { label: "Réflexes installés", titre: "Vous négociez les délais sur les faits, pas sur votre envie de tenir ou de décevoir", desc: "Vous annoncez des délais réalistes, vous les renégociez quand les conditions changent, et vous maintenez cette posture même sous pression hiérarchique. Ce n'est pas du confort — c'est de la fiabilité. Les gens qui travaillent avec vous savent ce qu'ils peuvent attendre de vous, et c'est bien plus précieux qu'un oui qui ne tient pas." },
        },
      }
    ],

    // ── Chapitre 3 : Déléguer et faire confiance
    2: [
      {
        type: "choix",
        text: "Vous déléguez un dossier à Inès, une collaboratrice compétente. Trois jours plus tard, elle ne vous a pas rendu compte spontanément. L'échéance est dans une semaine.",
        tags: ["délégation", "contrôle"],
        answers: [
          { text: "Je reprends le dossier discrètement — mieux vaut ne pas risquer un retard.", score: 0 },
          { text: "Je lui envoie un message pour reprendre le contrôle sur les points clés.", score: 0.5 },
          { text: "Je lui demande où elle en est et ce dont elle a besoin pour avancer.", score: 2 },
          { text: "J'attends qu'elle revienne vers moi — si elle ne le fait pas, c'est qu'elle gère.", score: 1 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous gardez la main sur ce que vous pourriez déléguer, souvent pour de bonnes raisons", desc: "Reprendre un dossier délégué parce que l'autre n'a pas rendu compte, corriger discrètement sans expliquer, garder les missions importantes pour ne pas risquer la qualité : la délégation demande un vrai lâcher-prise. L'investissement initial paie toujours sur la durée." },
          moyen: { label: "Pratiques en développement", titre: "Vous déléguez, mais vous reprenez la main dès que le résultat s'éloigne de ce que vous auriez fait", desc: "Vous déléguez régulièrement. Mais le suivi peut virer au contrôle quand le résultat s'éloigne de votre façon de faire. L'enjeu est de distinguer les corrections vraiment nécessaires des préférences personnelles, et de laisser les gens apprendre en faisant." },
          haut:  { label: "Réflexes installés", titre: "Vous déléguez en faisant confiance au résultat attendu, pas à la méthode", desc: "Vous déléguez en confiant un résultat à atteindre plutôt qu'une façon de faire à reproduire. Vous faites des points sans reprendre la main, et vous utilisez les erreurs comme des occasions d'apprentissage plutôt que des preuves qu'il vaut mieux tout faire soi-même. C'est ce qui développe réellement les personnes autour de vous." },
        },
      }, 
      {
        type: "likert",
        text: "Quand vous déléguez une tâche, vous laissez à l'autre la liberté de la faire à sa façon sans intervenir dès que vous auriez fait différemment.",
        tags: ["délégation", "lâcher-prise"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous gardez la main sur ce que vous pourriez déléguer, souvent pour de bonnes raisons", desc: "Reprendre un dossier délégué parce que l'autre n'a pas rendu compte, corriger discrètement sans expliquer, garder les missions importantes pour ne pas risquer la qualité : la délégation demande un vrai lâcher-prise. L'investissement initial paie toujours sur la durée." },
          moyen: { label: "Pratiques en développement", titre: "Vous déléguez, mais vous reprenez la main dès que le résultat s'éloigne de ce que vous auriez fait", desc: "Vous déléguez régulièrement. Mais le suivi peut virer au contrôle quand le résultat s'éloigne de votre façon de faire. L'enjeu est de distinguer les corrections vraiment nécessaires des préférences personnelles, et de laisser les gens apprendre en faisant." },
          haut:  { label: "Réflexes installés", titre: "Vous déléguez en faisant confiance au résultat attendu, pas à la méthode", desc: "Vous déléguez en confiant un résultat à atteindre plutôt qu'une façon de faire à reproduire. Vous faites des points sans reprendre la main, et vous utilisez les erreurs comme des occasions d'apprentissage plutôt que des preuves qu'il vaut mieux tout faire soi-même. C'est ce qui développe réellement les personnes autour de vous." },
        },
      }, 
      {
        type: "choix",
        text: "Kevin vous rend un travail correct mais que vous auriez fait différemment sur plusieurs points. Le résultat atteint l'objectif fixé.",
        tags: ["délégation", "perfectionnisme"],
        answers: [
          { text: "Je le refais moi-même — si je dois expliquer chaque correction, autant le faire directement.", score: 0 },
          { text: "Je corrige les points essentiels avant de le transmettre, sans lui dire.", score: 0 },
          { text: "Je lui donne un retour précis sur ce qui fonctionne et ce qui pourrait être amélioré la prochaine fois.", score: 2 },
          { text: "Je valide sans commentaire — le résultat est là, c'est l'essentiel.", score: 1 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous gardez la main sur ce que vous pourriez déléguer, souvent pour de bonnes raisons", desc: "Reprendre un dossier délégué parce que l'autre n'a pas rendu compte, corriger discrètement sans expliquer, garder les missions importantes pour ne pas risquer la qualité : la délégation demande un vrai lâcher-prise. L'investissement initial paie toujours sur la durée." },
          moyen: { label: "Pratiques en développement", titre: "Vous déléguez, mais vous reprenez la main dès que le résultat s'éloigne de ce que vous auriez fait", desc: "Vous déléguez régulièrement. Mais le suivi peut virer au contrôle quand le résultat s'éloigne de votre façon de faire. L'enjeu est de distinguer les corrections vraiment nécessaires des préférences personnelles, et de laisser les gens apprendre en faisant." },
          haut:  { label: "Réflexes installés", titre: "Vous déléguez en faisant confiance au résultat attendu, pas à la méthode", desc: "Vous déléguez en confiant un résultat à atteindre plutôt qu'une façon de faire à reproduire. Vous faites des points sans reprendre la main, et vous utilisez les erreurs comme des occasions d'apprentissage plutôt que des preuves qu'il vaut mieux tout faire soi-même. C'est ce qui développe réellement les personnes autour de vous." },
        },
      }, 
      {
        type: "choix",
        text: "Votre responsable vous dit qu'il préfère que vous gériez vous-même les dossiers importants plutôt que de les passer à votre équipe. Votre charge ne le permet plus.",
        tags: ["délégation", "hiérarchie"],
        answers: [
          { text: "J'obéis — c'est lui qui voit ce qui est important et je ne vais pas contester.", score: 0 },
          { text: "Je délègue quand même discrètement en gardant la main visible sur les livrables.", score: 1 },
          { text: "Je lui explique que ma charge actuelle m'impose de déléguer et je lui propose comment sécuriser la qualité.", score: 2 },
          { text: "Je lui demande quels dossiers précisément il veut que je garde et je délègue le reste.", score: 1.5 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous gardez la main sur ce que vous pourriez déléguer, souvent pour de bonnes raisons", desc: "Reprendre un dossier délégué parce que l'autre n'a pas rendu compte, corriger discrètement sans expliquer, garder les missions importantes pour ne pas risquer la qualité : la délégation demande un vrai lâcher-prise. L'investissement initial paie toujours sur la durée." },
          moyen: { label: "Pratiques en développement", titre: "Vous déléguez, mais vous reprenez la main dès que le résultat s'éloigne de ce que vous auriez fait", desc: "Vous déléguez régulièrement. Mais le suivi peut virer au contrôle quand le résultat s'éloigne de votre façon de faire. L'enjeu est de distinguer les corrections vraiment nécessaires des préférences personnelles, et de laisser les gens apprendre en faisant." },
          haut:  { label: "Réflexes installés", titre: "Vous déléguez en faisant confiance au résultat attendu, pas à la méthode", desc: "Vous déléguez en confiant un résultat à atteindre plutôt qu'une façon de faire à reproduire. Vous faites des points sans reprendre la main, et vous utilisez les erreurs comme des occasions d'apprentissage plutôt que des preuves qu'il vaut mieux tout faire soi-même. C'est ce qui développe réellement les personnes autour de vous." },
        },
      }, 
      {
        type: "likert",
        text: "Vous déléguez aussi pour développer les compétences de vos collègues, pas seulement pour vous décharger.",
        tags: ["délégation", "développement"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous gardez la main sur ce que vous pourriez déléguer, souvent pour de bonnes raisons", desc: "Reprendre un dossier délégué parce que l'autre n'a pas rendu compte, corriger discrètement sans expliquer, garder les missions importantes pour ne pas risquer la qualité : la délégation demande un vrai lâcher-prise. L'investissement initial paie toujours sur la durée." },
          moyen: { label: "Pratiques en développement", titre: "Vous déléguez, mais vous reprenez la main dès que le résultat s'éloigne de ce que vous auriez fait", desc: "Vous déléguez régulièrement. Mais le suivi peut virer au contrôle quand le résultat s'éloigne de votre façon de faire. L'enjeu est de distinguer les corrections vraiment nécessaires des préférences personnelles, et de laisser les gens apprendre en faisant." },
          haut:  { label: "Réflexes installés", titre: "Vous déléguez en faisant confiance au résultat attendu, pas à la méthode", desc: "Vous déléguez en confiant un résultat à atteindre plutôt qu'une façon de faire à reproduire. Vous faites des points sans reprendre la main, et vous utilisez les erreurs comme des occasions d'apprentissage plutôt que des preuves qu'il vaut mieux tout faire soi-même. C'est ce qui développe réellement les personnes autour de vous." },
        },
      }, 
      {
        type: "choix",
        text: "Rachel, à qui vous avez délégué une mission, a fait une erreur qui va vous coûter du temps à corriger. C'est la première fois que ça arrive.",
        tags: ["délégation", "erreur"],
        answers: [
          { text: "Je récupère toutes ses missions importantes — la confiance se mérite.", score: 0 },
          { text: "Je corrige l'erreur moi-même sans lui en parler pour ne pas la déstabiliser.", score: 0 },
          { text: "Je corrige avec elle en lui expliquant ce qui s'est passé — c'est le meilleur moyen d'éviter que ça se reproduise.", score: 2 },
          { text: "Je lui signale l'erreur et je lui demande de corriger elle-même.", score: 1.5 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous gardez la main sur ce que vous pourriez déléguer, souvent pour de bonnes raisons", desc: "Reprendre un dossier délégué parce que l'autre n'a pas rendu compte, corriger discrètement sans expliquer, garder les missions importantes pour ne pas risquer la qualité : la délégation demande un vrai lâcher-prise. L'investissement initial paie toujours sur la durée." },
          moyen: { label: "Pratiques en développement", titre: "Vous déléguez, mais vous reprenez la main dès que le résultat s'éloigne de ce que vous auriez fait", desc: "Vous déléguez régulièrement. Mais le suivi peut virer au contrôle quand le résultat s'éloigne de votre façon de faire. L'enjeu est de distinguer les corrections vraiment nécessaires des préférences personnelles, et de laisser les gens apprendre en faisant." },
          haut:  { label: "Réflexes installés", titre: "Vous déléguez en faisant confiance au résultat attendu, pas à la méthode", desc: "Vous déléguez en confiant un résultat à atteindre plutôt qu'une façon de faire à reproduire. Vous faites des points sans reprendre la main, et vous utilisez les erreurs comme des occasions d'apprentissage plutôt que des preuves qu'il vaut mieux tout faire soi-même. C'est ce qui développe réellement les personnes autour de vous." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez un dossier complexe à traiter. Quelqu'un dans votre équipe pourrait le prendre, mais lui expliquer ce qu'il faut faire prendrait presque autant de temps que de le faire vous-même.",
        tags: ["délégation", "perfectionnisme"],
        answers: [
          { text: "Je le fais moi-même — la délégation n'est rentable que sur des tâches simples.", score: 0 },
          { text: "Je le délègue quand même — l'investissement initial paie sur les prochaines fois.", score: 2 },
          { text: "Je découpe le dossier et je délègue la partie la plus simple.", score: 1 },
          { text: "Je le fais cette fois, mais je note de former cette personne à ce type de dossier.", score: 1.5 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous gardez la main sur ce que vous pourriez déléguer, souvent pour de bonnes raisons", desc: "Reprendre un dossier délégué parce que l'autre n'a pas rendu compte, corriger discrètement sans expliquer, garder les missions importantes pour ne pas risquer la qualité : la délégation demande un vrai lâcher-prise. L'investissement initial paie toujours sur la durée." },
          moyen: { label: "Pratiques en développement", titre: "Vous déléguez, mais vous reprenez la main dès que le résultat s'éloigne de ce que vous auriez fait", desc: "Vous déléguez régulièrement. Mais le suivi peut virer au contrôle quand le résultat s'éloigne de votre façon de faire. L'enjeu est de distinguer les corrections vraiment nécessaires des préférences personnelles, et de laisser les gens apprendre en faisant." },
          haut:  { label: "Réflexes installés", titre: "Vous déléguez en faisant confiance au résultat attendu, pas à la méthode", desc: "Vous déléguez en confiant un résultat à atteindre plutôt qu'une façon de faire à reproduire. Vous faites des points sans reprendre la main, et vous utilisez les erreurs comme des occasions d'apprentissage plutôt que des preuves qu'il vaut mieux tout faire soi-même. C'est ce qui développe réellement les personnes autour de vous." },
        },
      }, 
      {
        type: "likert",
        text: "Quand vous déléguez, vous précisez le résultat attendu et la latitude laissée plutôt que de décrire comment faire.",
        tags: ["délégation", "clarté"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous gardez la main sur ce que vous pourriez déléguer, souvent pour de bonnes raisons", desc: "Reprendre un dossier délégué parce que l'autre n'a pas rendu compte, corriger discrètement sans expliquer, garder les missions importantes pour ne pas risquer la qualité : la délégation demande un vrai lâcher-prise. L'investissement initial paie toujours sur la durée." },
          moyen: { label: "Pratiques en développement", titre: "Vous déléguez, mais vous reprenez la main dès que le résultat s'éloigne de ce que vous auriez fait", desc: "Vous déléguez régulièrement. Mais le suivi peut virer au contrôle quand le résultat s'éloigne de votre façon de faire. L'enjeu est de distinguer les corrections vraiment nécessaires des préférences personnelles, et de laisser les gens apprendre en faisant." },
          haut:  { label: "Réflexes installés", titre: "Vous déléguez en faisant confiance au résultat attendu, pas à la méthode", desc: "Vous déléguez en confiant un résultat à atteindre plutôt qu'une façon de faire à reproduire. Vous faites des points sans reprendre la main, et vous utilisez les erreurs comme des occasions d'apprentissage plutôt que des preuves qu'il vaut mieux tout faire soi-même. C'est ce qui développe réellement les personnes autour de vous." },
        },
      }, 
      {
        type: "choix",
        text: "Sophie a déjà beaucoup de travail, mais c'est la personne la plus compétente pour une mission que vous devez lui déléguer. Les autres membres de l'équipe pourraient s'en charger avec un peu d'accompagnement.",
        tags: ["délégation", "charge"],
        answers: [
          { text: "Je la donne à Sophie — la qualité prime, et elle saura gérer sa charge.", score: 0 },
          { text: "Je la donne à Sophie en lui demandant si elle peut l'absorber.", score: 1 },
          { text: "Je la confie à quelqu'un de moins expérimenté en prévoyant un accompagnement.", score: 2 },
          { text: "Je la garde moi-même pour ne pas créer de déséquilibre dans l'équipe.", score: 0.5 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous gardez la main sur ce que vous pourriez déléguer, souvent pour de bonnes raisons", desc: "Reprendre un dossier délégué parce que l'autre n'a pas rendu compte, corriger discrètement sans expliquer, garder les missions importantes pour ne pas risquer la qualité : la délégation demande un vrai lâcher-prise. L'investissement initial paie toujours sur la durée." },
          moyen: { label: "Pratiques en développement", titre: "Vous déléguez, mais vous reprenez la main dès que le résultat s'éloigne de ce que vous auriez fait", desc: "Vous déléguez régulièrement. Mais le suivi peut virer au contrôle quand le résultat s'éloigne de votre façon de faire. L'enjeu est de distinguer les corrections vraiment nécessaires des préférences personnelles, et de laisser les gens apprendre en faisant." },
          haut:  { label: "Réflexes installés", titre: "Vous déléguez en faisant confiance au résultat attendu, pas à la méthode", desc: "Vous déléguez en confiant un résultat à atteindre plutôt qu'une façon de faire à reproduire. Vous faites des points sans reprendre la main, et vous utilisez les erreurs comme des occasions d'apprentissage plutôt que des preuves qu'il vaut mieux tout faire soi-même. C'est ce qui développe réellement les personnes autour de vous." },
        },
      }, 
      {
        type: "likert",
        text: "Vous faites des points de suivi sur les missions déléguées sans reprendre la main sur la façon dont elles sont menées.",
        tags: ["délégation", "suivi"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous gardez la main sur ce que vous pourriez déléguer, souvent pour de bonnes raisons", desc: "Reprendre un dossier délégué parce que l'autre n'a pas rendu compte, corriger discrètement sans expliquer, garder les missions importantes pour ne pas risquer la qualité : la délégation demande un vrai lâcher-prise. L'investissement initial paie toujours sur la durée." },
          moyen: { label: "Pratiques en développement", titre: "Vous déléguez, mais vous reprenez la main dès que le résultat s'éloigne de ce que vous auriez fait", desc: "Vous déléguez régulièrement. Mais le suivi peut virer au contrôle quand le résultat s'éloigne de votre façon de faire. L'enjeu est de distinguer les corrections vraiment nécessaires des préférences personnelles, et de laisser les gens apprendre en faisant." },
          haut:  { label: "Réflexes installés", titre: "Vous déléguez en faisant confiance au résultat attendu, pas à la méthode", desc: "Vous déléguez en confiant un résultat à atteindre plutôt qu'une façon de faire à reproduire. Vous faites des points sans reprendre la main, et vous utilisez les erreurs comme des occasions d'apprentissage plutôt que des preuves qu'il vaut mieux tout faire soi-même. C'est ce qui développe réellement les personnes autour de vous." },
        },
      }
    ],

    // ── Chapitre 4 : Prioriser sous pression hiérarchique
    3: [
      {
        type: "choix",
        text: "Votre responsable et le directeur commercial vous demandent chacun quelque chose de prioritaire le même jour. Les deux sont convaincus que leur demande est la plus urgente.",
        tags: ["priorisation", "hiérarchie"],
        answers: [
          { text: "Je commence par la demande du directeur commercial — il est plus haut dans la hiérarchie.", score: 0 },
          { text: "Je traite les deux en parallèle en faisant la moitié de chaque — au moins j'avance sur les deux.", score: 0.5 },
          { text: "Je les préviens tous les deux et je leur demande de s'aligner sur la priorité entre eux.", score: 2 },
          { text: "Je choisis selon ce qui me semble le plus urgent et je préviens l'autre que je le traite ensuite.", score: 1 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous absorbez les contradictions de priorité sans les rendre visibles à ceux qui pourraient les arbitrer", desc: "Choisir seul entre deux demandes contradictoires, s'exécuter sans dire que c'est incompatible avec la charge existante, gérer silencieusement des arbitrages qui devraient être visibles : ce sont vos responsables qui doivent arbitrer, pas vous absorber. Rendre ces tensions visibles, c'est leur permettre de décider." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les surcharges ponctuelles, les tensions structurelles restent encore silencieuses", desc: "Vous nommez les problèmes de charge quand ils sont aigus. Mais les tensions plus lentes et structurelles — une charge globalement trop élevée, des injonctions contradictoires qui durent — restent encore dans le registre de l'adaptation personnelle. L'enjeu est de les rendre visibles avant qu'elles pèsent sur les personnes." },
          haut:  { label: "Réflexes installés", titre: "Vous rendez visibles les contradictions de priorité pour que ceux qui peuvent arbitrer le fassent", desc: "Vous ne choisissez pas seul entre des priorités contradictoires quand ce n'est pas votre rôle de le faire. Vous signalez les tensions structurelles avec des faits concrets plutôt que de les absorber. Et vous protégez du temps pour ce qui est important avant que les urgences du moment ne l'évincent complètement." },
        },
      }, 
      {
        type: "likert",
        text: "Face à des injonctions contradictoires de plusieurs responsables, vous cherchez à les faire arbitrer entre eux plutôt qu'à absorber la contradiction seul.",
        tags: ["priorisation", "injonctions contradictoires"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous absorbez les contradictions de priorité sans les rendre visibles à ceux qui pourraient les arbitrer", desc: "Choisir seul entre deux demandes contradictoires, s'exécuter sans dire que c'est incompatible avec la charge existante, gérer silencieusement des arbitrages qui devraient être visibles : ce sont vos responsables qui doivent arbitrer, pas vous absorber. Rendre ces tensions visibles, c'est leur permettre de décider." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les surcharges ponctuelles, les tensions structurelles restent encore silencieuses", desc: "Vous nommez les problèmes de charge quand ils sont aigus. Mais les tensions plus lentes et structurelles — une charge globalement trop élevée, des injonctions contradictoires qui durent — restent encore dans le registre de l'adaptation personnelle. L'enjeu est de les rendre visibles avant qu'elles pèsent sur les personnes." },
          haut:  { label: "Réflexes installés", titre: "Vous rendez visibles les contradictions de priorité pour que ceux qui peuvent arbitrer le fassent", desc: "Vous ne choisissez pas seul entre des priorités contradictoires quand ce n'est pas votre rôle de le faire. Vous signalez les tensions structurelles avec des faits concrets plutôt que de les absorber. Et vous protégez du temps pour ce qui est important avant que les urgences du moment ne l'évincent complètement." },
        },
      }, 
      {
        type: "choix",
        text: "Votre équipe a accumulé du retard. Votre responsable vous demande de 'rattraper' d'ici vendredi en travaillant sur tout simultanément. Vous savez que ça va produire un travail bâclé sur tout.",
        tags: ["priorisation", "pression"],
        answers: [
          { text: "Je m'exécute — c'est lui qui répond de la situation vis-à-vis de la direction.", score: 0 },
          { text: "Je fais de mon mieux sur tout sans le contredire — il verra bien le résultat.", score: 0 },
          { text: "Je lui propose de sélectionner les deux ou trois points les plus critiques et de reporter le reste officiellement.", score: 2 },
          { text: "Je priorise moi-même sans lui en parler et je lui présente le résultat vendredi.", score: 1 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous absorbez les contradictions de priorité sans les rendre visibles à ceux qui pourraient les arbitrer", desc: "Choisir seul entre deux demandes contradictoires, s'exécuter sans dire que c'est incompatible avec la charge existante, gérer silencieusement des arbitrages qui devraient être visibles : ce sont vos responsables qui doivent arbitrer, pas vous absorber. Rendre ces tensions visibles, c'est leur permettre de décider." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les surcharges ponctuelles, les tensions structurelles restent encore silencieuses", desc: "Vous nommez les problèmes de charge quand ils sont aigus. Mais les tensions plus lentes et structurelles — une charge globalement trop élevée, des injonctions contradictoires qui durent — restent encore dans le registre de l'adaptation personnelle. L'enjeu est de les rendre visibles avant qu'elles pèsent sur les personnes." },
          haut:  { label: "Réflexes installés", titre: "Vous rendez visibles les contradictions de priorité pour que ceux qui peuvent arbitrer le fassent", desc: "Vous ne choisissez pas seul entre des priorités contradictoires quand ce n'est pas votre rôle de le faire. Vous signalez les tensions structurelles avec des faits concrets plutôt que de les absorber. Et vous protégez du temps pour ce qui est important avant que les urgences du moment ne l'évincent complètement." },
        },
      }, 
      {
        type: "choix",
        text: "Une réunion de direction est prévue dans deux jours. Tout le monde se concentre sur la présentation à préparer. Un problème client important qui couve depuis une semaine risque de se dégrader si personne ne s'en occupe aujourd'hui.",
        tags: ["priorisation", "court terme"],
        answers: [
          { text: "Je me concentre sur la présentation comme tout le monde — la réunion est prioritaire pour la hiérarchie.", score: 0 },
          { text: "Je m'occupe du problème client en espérant que personne ne remarquera que je n'ai pas avancé sur la présentation.", score: 0.5 },
          { text: "Je signale le problème client à mon responsable et je lui demande comment arbitrer entre les deux.", score: 2 },
          { text: "Je partage le problème client avec un collègue pour qu'il le prenne pendant que je prépare la présentation.", score: 1.5 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous absorbez les contradictions de priorité sans les rendre visibles à ceux qui pourraient les arbitrer", desc: "Choisir seul entre deux demandes contradictoires, s'exécuter sans dire que c'est incompatible avec la charge existante, gérer silencieusement des arbitrages qui devraient être visibles : ce sont vos responsables qui doivent arbitrer, pas vous absorber. Rendre ces tensions visibles, c'est leur permettre de décider." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les surcharges ponctuelles, les tensions structurelles restent encore silencieuses", desc: "Vous nommez les problèmes de charge quand ils sont aigus. Mais les tensions plus lentes et structurelles — une charge globalement trop élevée, des injonctions contradictoires qui durent — restent encore dans le registre de l'adaptation personnelle. L'enjeu est de les rendre visibles avant qu'elles pèsent sur les personnes." },
          haut:  { label: "Réflexes installés", titre: "Vous rendez visibles les contradictions de priorité pour que ceux qui peuvent arbitrer le fassent", desc: "Vous ne choisissez pas seul entre des priorités contradictoires quand ce n'est pas votre rôle de le faire. Vous signalez les tensions structurelles avec des faits concrets plutôt que de les absorber. Et vous protégez du temps pour ce qui est important avant que les urgences du moment ne l'évincent complètement." },
        },
      }, 
      {
        type: "likert",
        text: "Vous rendez visibles vos arbitrages de priorité auprès de votre responsable plutôt que de les gérer silencieusement.",
        tags: ["priorisation", "visibilité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous absorbez les contradictions de priorité sans les rendre visibles à ceux qui pourraient les arbitrer", desc: "Choisir seul entre deux demandes contradictoires, s'exécuter sans dire que c'est incompatible avec la charge existante, gérer silencieusement des arbitrages qui devraient être visibles : ce sont vos responsables qui doivent arbitrer, pas vous absorber. Rendre ces tensions visibles, c'est leur permettre de décider." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les surcharges ponctuelles, les tensions structurelles restent encore silencieuses", desc: "Vous nommez les problèmes de charge quand ils sont aigus. Mais les tensions plus lentes et structurelles — une charge globalement trop élevée, des injonctions contradictoires qui durent — restent encore dans le registre de l'adaptation personnelle. L'enjeu est de les rendre visibles avant qu'elles pèsent sur les personnes." },
          haut:  { label: "Réflexes installés", titre: "Vous rendez visibles les contradictions de priorité pour que ceux qui peuvent arbitrer le fassent", desc: "Vous ne choisissez pas seul entre des priorités contradictoires quand ce n'est pas votre rôle de le faire. Vous signalez les tensions structurelles avec des faits concrets plutôt que de les absorber. Et vous protégez du temps pour ce qui est important avant que les urgences du moment ne l'évincent complètement." },
        },
      }, 
      {
        type: "choix",
        text: "Depuis trois mois, la charge de votre équipe est structurellement trop élevée. Tout le monde s'en accommode et votre responsable ne semble pas s'en rendre compte.",
        tags: ["priorisation", "charge durable"],
        answers: [
          { text: "On tient — si ça devenait vraiment insoutenable, quelqu'un d'autre le dirait.", score: 0 },
          { text: "Je le signale à mon responsable avec des données concrètes sur la charge réelle de l'équipe.", score: 2 },
          { text: "J'en parle à mes collègues pour voir si eux aussi perçoivent la situation comme moi.", score: 1 },
          { text: "Je cherche des gains d'efficacité pour que l'équipe absorbe mieux la charge.", score: 0.5 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous absorbez les contradictions de priorité sans les rendre visibles à ceux qui pourraient les arbitrer", desc: "Choisir seul entre deux demandes contradictoires, s'exécuter sans dire que c'est incompatible avec la charge existante, gérer silencieusement des arbitrages qui devraient être visibles : ce sont vos responsables qui doivent arbitrer, pas vous absorber. Rendre ces tensions visibles, c'est leur permettre de décider." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les surcharges ponctuelles, les tensions structurelles restent encore silencieuses", desc: "Vous nommez les problèmes de charge quand ils sont aigus. Mais les tensions plus lentes et structurelles — une charge globalement trop élevée, des injonctions contradictoires qui durent — restent encore dans le registre de l'adaptation personnelle. L'enjeu est de les rendre visibles avant qu'elles pèsent sur les personnes." },
          haut:  { label: "Réflexes installés", titre: "Vous rendez visibles les contradictions de priorité pour que ceux qui peuvent arbitrer le fassent", desc: "Vous ne choisissez pas seul entre des priorités contradictoires quand ce n'est pas votre rôle de le faire. Vous signalez les tensions structurelles avec des faits concrets plutôt que de les absorber. Et vous protégez du temps pour ce qui est important avant que les urgences du moment ne l'évincent complètement." },
        },
      }, 
      {
        type: "choix",
        text: "Vous devez choisir entre finir un travail important à 80% correctement ou en commencer deux nouveaux demandés en urgence. Votre responsable ne sait pas que vous avez ce dilemme.",
        tags: ["priorisation", "décision"],
        answers: [
          { text: "Je commence les deux nouveaux — les urgences passent avant les travaux en cours.", score: 0 },
          { text: "Je lui soumets le dilemme avant de décider — c'est lui qui doit arbitrer.", score: 2 },
          { text: "Je finis le premier à 80% puis je commence les deux nouveaux.", score: 1 },
          { text: "Je jongle entre les trois en avançant un peu sur chaque.", score: 0.5 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous absorbez les contradictions de priorité sans les rendre visibles à ceux qui pourraient les arbitrer", desc: "Choisir seul entre deux demandes contradictoires, s'exécuter sans dire que c'est incompatible avec la charge existante, gérer silencieusement des arbitrages qui devraient être visibles : ce sont vos responsables qui doivent arbitrer, pas vous absorber. Rendre ces tensions visibles, c'est leur permettre de décider." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les surcharges ponctuelles, les tensions structurelles restent encore silencieuses", desc: "Vous nommez les problèmes de charge quand ils sont aigus. Mais les tensions plus lentes et structurelles — une charge globalement trop élevée, des injonctions contradictoires qui durent — restent encore dans le registre de l'adaptation personnelle. L'enjeu est de les rendre visibles avant qu'elles pèsent sur les personnes." },
          haut:  { label: "Réflexes installés", titre: "Vous rendez visibles les contradictions de priorité pour que ceux qui peuvent arbitrer le fassent", desc: "Vous ne choisissez pas seul entre des priorités contradictoires quand ce n'est pas votre rôle de le faire. Vous signalez les tensions structurelles avec des faits concrets plutôt que de les absorber. Et vous protégez du temps pour ce qui est important avant que les urgences du moment ne l'évincent complètement." },
        },
      }, 
      {
        type: "likert",
        text: "Vous protégez du temps pour les tâches de fond importantes même quand les urgences du moment pourraient les évincer.",
        tags: ["priorisation", "long terme"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous absorbez les contradictions de priorité sans les rendre visibles à ceux qui pourraient les arbitrer", desc: "Choisir seul entre deux demandes contradictoires, s'exécuter sans dire que c'est incompatible avec la charge existante, gérer silencieusement des arbitrages qui devraient être visibles : ce sont vos responsables qui doivent arbitrer, pas vous absorber. Rendre ces tensions visibles, c'est leur permettre de décider." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les surcharges ponctuelles, les tensions structurelles restent encore silencieuses", desc: "Vous nommez les problèmes de charge quand ils sont aigus. Mais les tensions plus lentes et structurelles — une charge globalement trop élevée, des injonctions contradictoires qui durent — restent encore dans le registre de l'adaptation personnelle. L'enjeu est de les rendre visibles avant qu'elles pèsent sur les personnes." },
          haut:  { label: "Réflexes installés", titre: "Vous rendez visibles les contradictions de priorité pour que ceux qui peuvent arbitrer le fassent", desc: "Vous ne choisissez pas seul entre des priorités contradictoires quand ce n'est pas votre rôle de le faire. Vous signalez les tensions structurelles avec des faits concrets plutôt que de les absorber. Et vous protégez du temps pour ce qui est important avant que les urgences du moment ne l'évincent complètement." },
        },
      }, 
      {
        type: "choix",
        text: "Un client important insiste pour que son dossier soit traité en priorité. Votre responsable vous dit d'en tenir compte. Deux autres dossiers moins visibles sont pourtant plus urgents objectivement.",
        tags: ["priorisation", "pression client"],
        answers: [
          { text: "Je traite le dossier du client important en premier — mon responsable a tranché.", score: 0 },
          { text: "Je traite les dossiers dans l'ordre objectif sans mentionner à mon responsable ce que j'ai décidé.", score: 0.5 },
          { text: "Je lui explique l'ordre de priorité réel et je lui demande de confirmer ou d'assumer l'arbitrage.", score: 2 },
          { text: "Je traite les trois en parallèle pour que personne ne soit lésé.", score: 1 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous absorbez les contradictions de priorité sans les rendre visibles à ceux qui pourraient les arbitrer", desc: "Choisir seul entre deux demandes contradictoires, s'exécuter sans dire que c'est incompatible avec la charge existante, gérer silencieusement des arbitrages qui devraient être visibles : ce sont vos responsables qui doivent arbitrer, pas vous absorber. Rendre ces tensions visibles, c'est leur permettre de décider." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les surcharges ponctuelles, les tensions structurelles restent encore silencieuses", desc: "Vous nommez les problèmes de charge quand ils sont aigus. Mais les tensions plus lentes et structurelles — une charge globalement trop élevée, des injonctions contradictoires qui durent — restent encore dans le registre de l'adaptation personnelle. L'enjeu est de les rendre visibles avant qu'elles pèsent sur les personnes." },
          haut:  { label: "Réflexes installés", titre: "Vous rendez visibles les contradictions de priorité pour que ceux qui peuvent arbitrer le fassent", desc: "Vous ne choisissez pas seul entre des priorités contradictoires quand ce n'est pas votre rôle de le faire. Vous signalez les tensions structurelles avec des faits concrets plutôt que de les absorber. Et vous protégez du temps pour ce qui est important avant que les urgences du moment ne l'évincent complètement." },
        },
      }, 
      {
        type: "likert",
        text: "Vos priorités du jour correspondent à ce que vous avez annoncé à votre responsable, pas à ce que les demandes du moment ont fini par imposer.",
        tags: ["priorisation", "cohérence"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas:   { label: "Repères à consolider", titre: "Vous absorbez les contradictions de priorité sans les rendre visibles à ceux qui pourraient les arbitrer", desc: "Choisir seul entre deux demandes contradictoires, s'exécuter sans dire que c'est incompatible avec la charge existante, gérer silencieusement des arbitrages qui devraient être visibles : ce sont vos responsables qui doivent arbitrer, pas vous absorber. Rendre ces tensions visibles, c'est leur permettre de décider." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les surcharges ponctuelles, les tensions structurelles restent encore silencieuses", desc: "Vous nommez les problèmes de charge quand ils sont aigus. Mais les tensions plus lentes et structurelles — une charge globalement trop élevée, des injonctions contradictoires qui durent — restent encore dans le registre de l'adaptation personnelle. L'enjeu est de les rendre visibles avant qu'elles pèsent sur les personnes." },
          haut:  { label: "Réflexes installés", titre: "Vous rendez visibles les contradictions de priorité pour que ceux qui peuvent arbitrer le fassent", desc: "Vous ne choisissez pas seul entre des priorités contradictoires quand ce n'est pas votre rôle de le faire. Vous signalez les tensions structurelles avec des faits concrets plutôt que de les absorber. Et vous protégez du temps pour ce qui est important avant que les urgences du moment ne l'évincent complètement." },
        },
      }
    ],

  },
  // ─────────────────────────────────────────────────────────────────────

  // ─── À coller dans catalogue-qvt.js ───────────────────────────────────
  // Clé : "cooperation-climat" dans Object.assign(window.CUSTOM_QUESTIONS,

  "cooperation-climat": {
    // ── Chapitre 1 : Désamorcer les irritants du quotidien
    0: [
      {
        type: "choix",
        text: "Depuis plusieurs semaines, Julien envoie systématiquement ses comptes rendus de réunion avec deux jours de retard. Ça vous bloque à chaque fois pour avancer. Vous en avez parlé à un collègue qui vous a dit 'c'est comme ça, Julien a toujours été comme ça.'",
        tags: ["irritant", "quotidien"],
        answers: [
          { text: "Je m'organise différemment pour ne plus dépendre de ses comptes rendus — inutile d'en faire un sujet.", score: 0 },
          { text: "Je l'en informe par mail pour garder une trace, sans attendre de réponse.", score: 0.5 },
          { text: "Je lui en parle directement, en lui montrant concrètement en quoi ça me bloque.", score: 2 },
          { text: "J'en parle à notre responsable pour qu'il recadre.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les irritants s'accumulent parce que vous préférez contourner plutôt qu'aborder", desc: "Contourner un irritant, adapter son organisation pour ne plus en dépendre, attendre que ça se tasse : c'est souvent la voie de la moindre résistance. Le problème, c'est qu'un irritant non traité ne disparaît pas — il s'installe, s'épaissit, et devient de plus en plus difficile à aborder. Parler tôt, sur un fait précis, demande moins de courage qu'on ne le croit." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les irritants visibles, les plus discrets s'accumulent encore sans être abordés", desc: "Vous abordez les irritants quand ils sont clairement problématiques. Mais les petits agacements récurrents, les malaises discrets, les tensions qui ne se sont pas encore déclarées — vous les laissez encore traîner en espérant qu'ils se résorbent. L'enjeu est d'intervenir plus tôt, sur des situations moins visibles, là où l'effort est encore faible." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les irritants tôt et directement, sans attendre qu'ils deviennent des conflits", desc: "Vous abordez ce qui vous dérange avec la personne concernée, directement, avec des exemples précis et sans mise en cause. Vous ne laissez pas les petits agacements s'accumuler jusqu'à ce qu'ils deviennent des sujets lourds. Cette façon de faire préserve les relations bien mieux que le silence — et elle demande souvent moins de courage qu'on ne le croit avant de commencer." },
        },
      },
      {
        type: "choix",
        text: "En réunion d'équipe, les échanges dérivent régulièrement sur des discussions de couloir qui n'avancent à rien. Tout le monde s'en plaint après, mais personne ne dit rien pendant. Vous êtes en réunion et ça repart.",
        tags: ["irritant", "normes de groupe"],
        answers: [
          { text: "Je laisse — si l'animateur ne recadre pas, ce n'est pas à moi de le faire.", score: 0 },
          { text: "Je sors mon téléphone en attendant que ça revienne sur le sujet.", score: 0 },
          { text: "Je ramène la réunion au sujet en posant une question sur l'ordre du jour.", score: 2 },
          { text: "J'en parle après la réunion à l'animateur pour qu'il gère mieux la prochaine fois.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les irritants s'accumulent parce que vous préférez contourner plutôt qu'aborder", desc: "Contourner un irritant, adapter son organisation pour ne plus en dépendre, attendre que ça se tasse : c'est souvent la voie de la moindre résistance. Le problème, c'est qu'un irritant non traité ne disparaît pas — il s'installe, s'épaissit, et devient de plus en plus difficile à aborder. Parler tôt, sur un fait précis, demande moins de courage qu'on ne le croit." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les irritants visibles, les plus discrets s'accumulent encore sans être abordés", desc: "Vous abordez les irritants quand ils sont clairement problématiques. Mais les petits agacements récurrents, les malaises discrets, les tensions qui ne se sont pas encore déclarées — vous les laissez encore traîner en espérant qu'ils se résorbent. L'enjeu est d'intervenir plus tôt, sur des situations moins visibles, là où l'effort est encore faible." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les irritants tôt et directement, sans attendre qu'ils deviennent des conflits", desc: "Vous abordez ce qui vous dérange avec la personne concernée, directement, avec des exemples précis et sans mise en cause. Vous ne laissez pas les petits agacements s'accumuler jusqu'à ce qu'ils deviennent des sujets lourds. Cette façon de faire préserve les relations bien mieux que le silence — et elle demande souvent moins de courage qu'on ne le croit avant de commencer." },
        },
      },
      {
        type: "likert",
        text: "Vous abordez les irritants du quotidien avec les personnes concernées plutôt que d'en parler autour de vous sans jamais aller à la source.",
        tags: ["irritant", "dialogue"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les irritants s'accumulent parce que vous préférez contourner plutôt qu'aborder", desc: "Contourner un irritant, adapter son organisation pour ne plus en dépendre, attendre que ça se tasse : c'est souvent la voie de la moindre résistance. Le problème, c'est qu'un irritant non traité ne disparaît pas — il s'installe, s'épaissit, et devient de plus en plus difficile à aborder. Parler tôt, sur un fait précis, demande moins de courage qu'on ne le croit." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les irritants visibles, les plus discrets s'accumulent encore sans être abordés", desc: "Vous abordez les irritants quand ils sont clairement problématiques. Mais les petits agacements récurrents, les malaises discrets, les tensions qui ne se sont pas encore déclarées — vous les laissez encore traîner en espérant qu'ils se résorbent. L'enjeu est d'intervenir plus tôt, sur des situations moins visibles, là où l'effort est encore faible." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les irritants tôt et directement, sans attendre qu'ils deviennent des conflits", desc: "Vous abordez ce qui vous dérange avec la personne concernée, directement, avec des exemples précis et sans mise en cause. Vous ne laissez pas les petits agacements s'accumuler jusqu'à ce qu'ils deviennent des sujets lourds. Cette façon de faire préserve les relations bien mieux que le silence — et elle demande souvent moins de courage qu'on ne le croit avant de commencer." },
        },
      },
      {
        type: "choix",
        text: "Marie et vous avez eu un désaccord assez vif en réunion la semaine dernière. Depuis, les échanges sont devenus formels et distants. Personne n'a repris le sujet.",
        tags: ["tension", "relations"],
        answers: [
          { text: "Je laisse le temps faire son travail — ça finira par se normaliser.", score: 0 },
          { text: "Je lui envoie un message neutre sur un sujet de travail pour relancer le contact.", score: 1 },
          { text: "Je lui propose un moment informel pour reprendre l'échange, sans agenda précis.", score: 2 },
          { text: "Je me comporte normalement en réunion — si elle veut reprendre le dialogue, elle le fera.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les irritants s'accumulent parce que vous préférez contourner plutôt qu'aborder", desc: "Contourner un irritant, adapter son organisation pour ne plus en dépendre, attendre que ça se tasse : c'est souvent la voie de la moindre résistance. Le problème, c'est qu'un irritant non traité ne disparaît pas — il s'installe, s'épaissit, et devient de plus en plus difficile à aborder. Parler tôt, sur un fait précis, demande moins de courage qu'on ne le croit." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les irritants visibles, les plus discrets s'accumulent encore sans être abordés", desc: "Vous abordez les irritants quand ils sont clairement problématiques. Mais les petits agacements récurrents, les malaises discrets, les tensions qui ne se sont pas encore déclarées — vous les laissez encore traîner en espérant qu'ils se résorbent. L'enjeu est d'intervenir plus tôt, sur des situations moins visibles, là où l'effort est encore faible." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les irritants tôt et directement, sans attendre qu'ils deviennent des conflits", desc: "Vous abordez ce qui vous dérange avec la personne concernée, directement, avec des exemples précis et sans mise en cause. Vous ne laissez pas les petits agacements s'accumuler jusqu'à ce qu'ils deviennent des sujets lourds. Cette façon de faire préserve les relations bien mieux que le silence — et elle demande souvent moins de courage qu'on ne le croit avant de commencer." },
        },
      },
      {
        type: "choix",
        text: "Pierre monopolise systématiquement la parole lors des points d'équipe. Les autres s'impatientent visiblement mais ne disent rien. Vous trouvez ça contre-productif.",
        tags: ["irritant", "peur du conflit"],
        answers: [
          { text: "Je laisse — ce serait humiliant pour lui de lui faire remarquer devant tout le monde.", score: 0.5 },
          { text: "Je prends la parole dès qu'il s'arrête pour empêcher qu'il reprenne.", score: 0 },
          { text: "Je lui en parle après la réunion, en privé, avec un exemple précis.", score: 2 },
          { text: "J'en parle à l'animateur pour qu'il gère mieux la distribution de la parole.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les irritants s'accumulent parce que vous préférez contourner plutôt qu'aborder", desc: "Contourner un irritant, adapter son organisation pour ne plus en dépendre, attendre que ça se tasse : c'est souvent la voie de la moindre résistance. Le problème, c'est qu'un irritant non traité ne disparaît pas — il s'installe, s'épaissit, et devient de plus en plus difficile à aborder. Parler tôt, sur un fait précis, demande moins de courage qu'on ne le croit." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les irritants visibles, les plus discrets s'accumulent encore sans être abordés", desc: "Vous abordez les irritants quand ils sont clairement problématiques. Mais les petits agacements récurrents, les malaises discrets, les tensions qui ne se sont pas encore déclarées — vous les laissez encore traîner en espérant qu'ils se résorbent. L'enjeu est d'intervenir plus tôt, sur des situations moins visibles, là où l'effort est encore faible." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les irritants tôt et directement, sans attendre qu'ils deviennent des conflits", desc: "Vous abordez ce qui vous dérange avec la personne concernée, directement, avec des exemples précis et sans mise en cause. Vous ne laissez pas les petits agacements s'accumuler jusqu'à ce qu'ils deviennent des sujets lourds. Cette façon de faire préserve les relations bien mieux que le silence — et elle demande souvent moins de courage qu'on ne le croit avant de commencer." },
        },
      },
      {
        type: "likert",
        text: "Vous traitez les petits irritants relationnels tôt, avant qu'ils ne s'accumulent et ne deviennent plus difficiles à aborder.",
        tags: ["irritant", "précocité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les irritants s'accumulent parce que vous préférez contourner plutôt qu'aborder", desc: "Contourner un irritant, adapter son organisation pour ne plus en dépendre, attendre que ça se tasse : c'est souvent la voie de la moindre résistance. Le problème, c'est qu'un irritant non traité ne disparaît pas — il s'installe, s'épaissit, et devient de plus en plus difficile à aborder. Parler tôt, sur un fait précis, demande moins de courage qu'on ne le croit." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les irritants visibles, les plus discrets s'accumulent encore sans être abordés", desc: "Vous abordez les irritants quand ils sont clairement problématiques. Mais les petits agacements récurrents, les malaises discrets, les tensions qui ne se sont pas encore déclarées — vous les laissez encore traîner en espérant qu'ils se résorbent. L'enjeu est d'intervenir plus tôt, sur des situations moins visibles, là où l'effort est encore faible." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les irritants tôt et directement, sans attendre qu'ils deviennent des conflits", desc: "Vous abordez ce qui vous dérange avec la personne concernée, directement, avec des exemples précis et sans mise en cause. Vous ne laissez pas les petits agacements s'accumuler jusqu'à ce qu'ils deviennent des sujets lourds. Cette façon de faire préserve les relations bien mieux que le silence — et elle demande souvent moins de courage qu'on ne le croit avant de commencer." },
        },
      },
      {
        type: "choix",
        text: "L'ambiance dans votre équipe s'est dégradée progressivement. Tout le monde s'en accommode sans en parler. Votre responsable ne semble pas le percevoir.",
        tags: ["ambiance", "normes de groupe"],
        answers: [
          { text: "Si mon responsable ne voit rien, c'est peut-être que je suis trop sensible à l'atmosphère.", score: 0 },
          { text: "Je compense par ma propre bonne humeur — ça aide toujours un peu.", score: 0.5 },
          { text: "J'en parle à mon responsable en lui donnant des observations concrètes.", score: 2 },
          { text: "J'attends qu'un collègue lève le sujet — je ne veux pas être le seul à faire des vagues.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les irritants s'accumulent parce que vous préférez contourner plutôt qu'aborder", desc: "Contourner un irritant, adapter son organisation pour ne plus en dépendre, attendre que ça se tasse : c'est souvent la voie de la moindre résistance. Le problème, c'est qu'un irritant non traité ne disparaît pas — il s'installe, s'épaissit, et devient de plus en plus difficile à aborder. Parler tôt, sur un fait précis, demande moins de courage qu'on ne le croit." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les irritants visibles, les plus discrets s'accumulent encore sans être abordés", desc: "Vous abordez les irritants quand ils sont clairement problématiques. Mais les petits agacements récurrents, les malaises discrets, les tensions qui ne se sont pas encore déclarées — vous les laissez encore traîner en espérant qu'ils se résorbent. L'enjeu est d'intervenir plus tôt, sur des situations moins visibles, là où l'effort est encore faible." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les irritants tôt et directement, sans attendre qu'ils deviennent des conflits", desc: "Vous abordez ce qui vous dérange avec la personne concernée, directement, avec des exemples précis et sans mise en cause. Vous ne laissez pas les petits agacements s'accumuler jusqu'à ce qu'ils deviennent des sujets lourds. Cette façon de faire préserve les relations bien mieux que le silence — et elle demande souvent moins de courage qu'on ne le croit avant de commencer." },
        },
      },
      {
        type: "choix",
        text: "Sarah vous fait un retour assez sec sur un livrable devant trois collègues. Le fond est juste, mais le ton vous a heurté·e.",
        tags: ["feedback", "relations"],
        answers: [
          { text: "Je prends le fond et j'ignore le ton — ce serait mesquin d'en faire un sujet.", score: 1 },
          { text: "Je lui réponds sur le fond, factuellement, sans réagir au ton en public.", score: 2 },
          { text: "Je lui dis après la réunion, calmement, que la forme ne m'avait pas convenu.", score: 1.5 },
          { text: "J'encaisse sans rien dire — répondre en public ne ferait qu'aggraver.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les irritants s'accumulent parce que vous préférez contourner plutôt qu'aborder", desc: "Contourner un irritant, adapter son organisation pour ne plus en dépendre, attendre que ça se tasse : c'est souvent la voie de la moindre résistance. Le problème, c'est qu'un irritant non traité ne disparaît pas — il s'installe, s'épaissit, et devient de plus en plus difficile à aborder. Parler tôt, sur un fait précis, demande moins de courage qu'on ne le croit." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les irritants visibles, les plus discrets s'accumulent encore sans être abordés", desc: "Vous abordez les irritants quand ils sont clairement problématiques. Mais les petits agacements récurrents, les malaises discrets, les tensions qui ne se sont pas encore déclarées — vous les laissez encore traîner en espérant qu'ils se résorbent. L'enjeu est d'intervenir plus tôt, sur des situations moins visibles, là où l'effort est encore faible." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les irritants tôt et directement, sans attendre qu'ils deviennent des conflits", desc: "Vous abordez ce qui vous dérange avec la personne concernée, directement, avec des exemples précis et sans mise en cause. Vous ne laissez pas les petits agacements s'accumuler jusqu'à ce qu'ils deviennent des sujets lourds. Cette façon de faire préserve les relations bien mieux que le silence — et elle demande souvent moins de courage qu'on ne le croit avant de commencer." },
        },
      },
      {
        type: "likert",
        text: "Quand quelque chose vous dérange dans une relation de travail, vous le dites à la personne concernée plutôt qu'à ses voisins de bureau.",
        tags: ["irritant", "courage"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les irritants s'accumulent parce que vous préférez contourner plutôt qu'aborder", desc: "Contourner un irritant, adapter son organisation pour ne plus en dépendre, attendre que ça se tasse : c'est souvent la voie de la moindre résistance. Le problème, c'est qu'un irritant non traité ne disparaît pas — il s'installe, s'épaissit, et devient de plus en plus difficile à aborder. Parler tôt, sur un fait précis, demande moins de courage qu'on ne le croit." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les irritants visibles, les plus discrets s'accumulent encore sans être abordés", desc: "Vous abordez les irritants quand ils sont clairement problématiques. Mais les petits agacements récurrents, les malaises discrets, les tensions qui ne se sont pas encore déclarées — vous les laissez encore traîner en espérant qu'ils se résorbent. L'enjeu est d'intervenir plus tôt, sur des situations moins visibles, là où l'effort est encore faible." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les irritants tôt et directement, sans attendre qu'ils deviennent des conflits", desc: "Vous abordez ce qui vous dérange avec la personne concernée, directement, avec des exemples précis et sans mise en cause. Vous ne laissez pas les petits agacements s'accumuler jusqu'à ce qu'ils deviennent des sujets lourds. Cette façon de faire préserve les relations bien mieux que le silence — et elle demande souvent moins de courage qu'on ne le croit avant de commencer." },
        },
      },
      {
        type: "choix",
        text: "Karim oublie régulièrement de vous inclure dans les mails de synthèse alors que vous êtes directement concerné·e. Vous le lui avez déjà signalé une fois, il y a trois semaines. Ça recommence.",
        tags: ["irritant", "répétition"],
        answers: [
          { text: "Je l'ajoute moi-même en copie à chaque fois — c'est plus simple que de recommencer la conversation.", score: 0.5 },
          { text: "Je le lui signale à nouveau en lui rappelant l'accord qu'on avait trouvé.", score: 2 },
          { text: "Je lâche — il le fait probablement sans mauvaise intention et ça ne vaut pas la peine d'insister.", score: 0 },
          { text: "J'en parle à notre responsable pour qu'il soit recadré plus formellement.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Les irritants s'accumulent parce que vous préférez contourner plutôt qu'aborder", desc: "Contourner un irritant, adapter son organisation pour ne plus en dépendre, attendre que ça se tasse : c'est souvent la voie de la moindre résistance. Le problème, c'est qu'un irritant non traité ne disparaît pas — il s'installe, s'épaissit, et devient de plus en plus difficile à aborder. Parler tôt, sur un fait précis, demande moins de courage qu'on ne le croit." },
          moyen: { label: "Pratiques en développement", titre: "Vous traitez les irritants visibles, les plus discrets s'accumulent encore sans être abordés", desc: "Vous abordez les irritants quand ils sont clairement problématiques. Mais les petits agacements récurrents, les malaises discrets, les tensions qui ne se sont pas encore déclarées — vous les laissez encore traîner en espérant qu'ils se résorbent. L'enjeu est d'intervenir plus tôt, sur des situations moins visibles, là où l'effort est encore faible." },
          haut: { label: "Réflexes installés", titre: "Vous traitez les irritants tôt et directement, sans attendre qu'ils deviennent des conflits", desc: "Vous abordez ce qui vous dérange avec la personne concernée, directement, avec des exemples précis et sans mise en cause. Vous ne laissez pas les petits agacements s'accumuler jusqu'à ce qu'ils deviennent des sujets lourds. Cette façon de faire préserve les relations bien mieux que le silence — et elle demande souvent moins de courage qu'on ne le croit avant de commencer." },
        },
      }
    ],

    // ── Chapitre 2 : Coopérer sans se défausser
    1: [
      {
        type: "choix",
        text: "Un projet commun prend du retard à cause d'un blocage dans votre périmètre. Votre interlocuteur principal sur ce projet, Élodie, commence à s'impatienter.",
        tags: ["coopération", "responsabilité"],
        answers: [
          { text: "Je lui explique que le blocage vient de contraintes qui ne dépendent pas de moi.", score: 0 },
          { text: "Je lui présente la situation telle qu'elle est et ce que je fais concrètement pour la débloquer.", score: 2 },
          { text: "Je lui demande de patienter encore un peu — ça devrait se résoudre rapidement.", score: 0.5 },
          { text: "Je lui propose de reprendre le sujet une fois le blocage levé.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous coopérez quand c'est dans votre périmètre, vous vous défaussez dès que ça dépasse", desc: "Se défausser sur les contraintes, attendre la demande officielle avant d'aider, rester dans son périmètre quand l'autre en a besoin : ce sont des comportements défendables individuellement mais qui détériorent progressivement la qualité de la coopération. La fiabilité et la disponibilité se construisent sur les petits gestes, pas sur les grandes déclarations." },
          moyen: { label: "Pratiques en développement", titre: "Vous coopérez bien dans votre périmètre, vous hésitez encore au-delà", desc: "Vous êtes fiable dans votre périmètre et vous coopérez bien avec vos interlocuteurs directs. Mais dès que la coopération implique de dépasser votre zone de confort — une équipe voisine, un sujet hors attributions officielles — vous hésitez. L'enjeu est d'étendre cette fiabilité au-delà des frontières formelles." },
          haut: { label: "Réflexes installés", titre: "Votre coopération ne s'arrête pas aux frontières de votre périmètre officiel", desc: "Vous tenez vos engagements, vous signalez vos blocages avant qu'ils n'impactent les autres, vous partagez les informations utiles sans attendre qu'on vous les demande, et vous proposez votre aide au-delà de votre périmètre quand c'est utile. C'est cette disponibilité quotidienne, discrète, qui constitue le socle de la coopération réelle dans une équipe." },
        },
      },
      {
        type: "likert",
        text: "Quand vous prenez un engagement envers un·e collègue, vous le tenez ou vous le renégociez avant l'échéance — jamais en retard sans prévenir.",
        tags: ["coopération", "fiabilité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous coopérez quand c'est dans votre périmètre, vous vous défaussez dès que ça dépasse", desc: "Se défausser sur les contraintes, attendre la demande officielle avant d'aider, rester dans son périmètre quand l'autre en a besoin : ce sont des comportements défendables individuellement mais qui détériorent progressivement la qualité de la coopération. La fiabilité et la disponibilité se construisent sur les petits gestes, pas sur les grandes déclarations." },
          moyen: { label: "Pratiques en développement", titre: "Vous coopérez bien dans votre périmètre, vous hésitez encore au-delà", desc: "Vous êtes fiable dans votre périmètre et vous coopérez bien avec vos interlocuteurs directs. Mais dès que la coopération implique de dépasser votre zone de confort — une équipe voisine, un sujet hors attributions officielles — vous hésitez. L'enjeu est d'étendre cette fiabilité au-delà des frontières formelles." },
          haut: { label: "Réflexes installés", titre: "Votre coopération ne s'arrête pas aux frontières de votre périmètre officiel", desc: "Vous tenez vos engagements, vous signalez vos blocages avant qu'ils n'impactent les autres, vous partagez les informations utiles sans attendre qu'on vous les demande, et vous proposez votre aide au-delà de votre périmètre quand c'est utile. C'est cette disponibilité quotidienne, discrète, qui constitue le socle de la coopération réelle dans une équipe." },
        },
      },
      {
        type: "choix",
        text: "Une autre équipe vous demande de l'aide sur un sujet qui n'est pas dans votre périmètre officiel. Vous avez la compétence mais pas le temps. Votre responsable ne vous a pas explicitement dit de le faire.",
        tags: ["coopération", "silo"],
        answers: [
          { text: "Je décline — si c'était dans mes attributions, on me l'aurait demandé officiellement.", score: 0 },
          { text: "J'aide sans en parler à mon responsable — ça n'a pas besoin d'être officiel.", score: 1 },
          { text: "Je leur dis ce que je peux faire dans le temps dont je dispose et je leur propose ça.", score: 2 },
          { text: "Je leur conseille de passer par les voies officielles pour que ça soit formalisé.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous coopérez quand c'est dans votre périmètre, vous vous défaussez dès que ça dépasse", desc: "Se défausser sur les contraintes, attendre la demande officielle avant d'aider, rester dans son périmètre quand l'autre en a besoin : ce sont des comportements défendables individuellement mais qui détériorent progressivement la qualité de la coopération. La fiabilité et la disponibilité se construisent sur les petits gestes, pas sur les grandes déclarations." },
          moyen: { label: "Pratiques en développement", titre: "Vous coopérez bien dans votre périmètre, vous hésitez encore au-delà", desc: "Vous êtes fiable dans votre périmètre et vous coopérez bien avec vos interlocuteurs directs. Mais dès que la coopération implique de dépasser votre zone de confort — une équipe voisine, un sujet hors attributions officielles — vous hésitez. L'enjeu est d'étendre cette fiabilité au-delà des frontières formelles." },
          haut: { label: "Réflexes installés", titre: "Votre coopération ne s'arrête pas aux frontières de votre périmètre officiel", desc: "Vous tenez vos engagements, vous signalez vos blocages avant qu'ils n'impactent les autres, vous partagez les informations utiles sans attendre qu'on vous les demande, et vous proposez votre aide au-delà de votre périmètre quand c'est utile. C'est cette disponibilité quotidienne, discrète, qui constitue le socle de la coopération réelle dans une équipe." },
        },
      },
      {
        type: "choix",
        text: "Vous avez contribué significativement à un livrable présenté en réunion de direction. Votre responsable présente le résultat sans mentionner votre contribution.",
        tags: ["coopération", "reconnaissance"],
        answers: [
          { text: "Je ne dis rien — ce serait malvenu de me mettre en avant devant la direction.", score: 0 },
          { text: "J'en parle à mon responsable après la réunion pour qu'il sache que j'ai besoin que ma contribution soit visible.", score: 2 },
          { text: "Je le mentionne moi-même en réunion au bon moment.", score: 1.5 },
          { text: "Je l'accepte — la reconnaissance passe rarement par les grandes réunions de toute façon.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous coopérez quand c'est dans votre périmètre, vous vous défaussez dès que ça dépasse", desc: "Se défausser sur les contraintes, attendre la demande officielle avant d'aider, rester dans son périmètre quand l'autre en a besoin : ce sont des comportements défendables individuellement mais qui détériorent progressivement la qualité de la coopération. La fiabilité et la disponibilité se construisent sur les petits gestes, pas sur les grandes déclarations." },
          moyen: { label: "Pratiques en développement", titre: "Vous coopérez bien dans votre périmètre, vous hésitez encore au-delà", desc: "Vous êtes fiable dans votre périmètre et vous coopérez bien avec vos interlocuteurs directs. Mais dès que la coopération implique de dépasser votre zone de confort — une équipe voisine, un sujet hors attributions officielles — vous hésitez. L'enjeu est d'étendre cette fiabilité au-delà des frontières formelles." },
          haut: { label: "Réflexes installés", titre: "Votre coopération ne s'arrête pas aux frontières de votre périmètre officiel", desc: "Vous tenez vos engagements, vous signalez vos blocages avant qu'ils n'impactent les autres, vous partagez les informations utiles sans attendre qu'on vous les demande, et vous proposez votre aide au-delà de votre périmètre quand c'est utile. C'est cette disponibilité quotidienne, discrète, qui constitue le socle de la coopération réelle dans une équipe." },
        },
      },
      {
        type: "likert",
        text: "Vous anticipez les besoins de vos collègues proches et vous leur proposez votre aide avant qu'ils aient à la demander.",
        tags: ["coopération", "proactivité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous coopérez quand c'est dans votre périmètre, vous vous défaussez dès que ça dépasse", desc: "Se défausser sur les contraintes, attendre la demande officielle avant d'aider, rester dans son périmètre quand l'autre en a besoin : ce sont des comportements défendables individuellement mais qui détériorent progressivement la qualité de la coopération. La fiabilité et la disponibilité se construisent sur les petits gestes, pas sur les grandes déclarations." },
          moyen: { label: "Pratiques en développement", titre: "Vous coopérez bien dans votre périmètre, vous hésitez encore au-delà", desc: "Vous êtes fiable dans votre périmètre et vous coopérez bien avec vos interlocuteurs directs. Mais dès que la coopération implique de dépasser votre zone de confort — une équipe voisine, un sujet hors attributions officielles — vous hésitez. L'enjeu est d'étendre cette fiabilité au-delà des frontières formelles." },
          haut: { label: "Réflexes installés", titre: "Votre coopération ne s'arrête pas aux frontières de votre périmètre officiel", desc: "Vous tenez vos engagements, vous signalez vos blocages avant qu'ils n'impactent les autres, vous partagez les informations utiles sans attendre qu'on vous les demande, et vous proposez votre aide au-delà de votre périmètre quand c'est utile. C'est cette disponibilité quotidienne, discrète, qui constitue le socle de la coopération réelle dans une équipe." },
        },
      },
      {
        type: "choix",
        text: "David et vous travaillez sur des objectifs qui se recoupent partiellement. Dans un contexte de ressources limitées, avancer l'un peut bloquer l'autre. Vous avez une réunion de planification demain.",
        tags: ["coopération", "conflit d'intérêt"],
        answers: [
          { text: "Je défends mes propres objectifs en réunion — c'est à la hiérarchie d'arbitrer ensuite.", score: 0.5 },
          { text: "Je lui propose qu'on se parle avant la réunion pour voir si on peut s'organiser.", score: 2 },
          { text: "J'attends de voir ce qu'il propose en réunion avant de me positionner.", score: 0 },
          { text: "Je lui envoie un mail avant la réunion pour lui signaler que nos objectifs se chevauchent.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous coopérez quand c'est dans votre périmètre, vous vous défaussez dès que ça dépasse", desc: "Se défausser sur les contraintes, attendre la demande officielle avant d'aider, rester dans son périmètre quand l'autre en a besoin : ce sont des comportements défendables individuellement mais qui détériorent progressivement la qualité de la coopération. La fiabilité et la disponibilité se construisent sur les petits gestes, pas sur les grandes déclarations." },
          moyen: { label: "Pratiques en développement", titre: "Vous coopérez bien dans votre périmètre, vous hésitez encore au-delà", desc: "Vous êtes fiable dans votre périmètre et vous coopérez bien avec vos interlocuteurs directs. Mais dès que la coopération implique de dépasser votre zone de confort — une équipe voisine, un sujet hors attributions officielles — vous hésitez. L'enjeu est d'étendre cette fiabilité au-delà des frontières formelles." },
          haut: { label: "Réflexes installés", titre: "Votre coopération ne s'arrête pas aux frontières de votre périmètre officiel", desc: "Vous tenez vos engagements, vous signalez vos blocages avant qu'ils n'impactent les autres, vous partagez les informations utiles sans attendre qu'on vous les demande, et vous proposez votre aide au-delà de votre périmètre quand c'est utile. C'est cette disponibilité quotidienne, discrète, qui constitue le socle de la coopération réelle dans une équipe." },
        },
      },
      {
        type: "choix",
        text: "Vous avez connaissance d'une information utile pour Baptiste, qui travaille sur un dossier connexe au vôtre. La partager lui faciliterait la tâche mais ne vous apporte rien directement.",
        tags: ["coopération", "information"],
        answers: [
          { text: "Je la garde pour l'instant — je la partagerai si la question vient naturellement.", score: 0 },
          { text: "Je lui transmets directement — l'information utile ne doit pas attendre.", score: 2 },
          { text: "Je lui envoie un message pour lui signaler que j'ai peut-être quelque chose d'utile.", score: 1.5 },
          { text: "Je la mentionne en réunion pour que tout le monde en profite.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous coopérez quand c'est dans votre périmètre, vous vous défaussez dès que ça dépasse", desc: "Se défausser sur les contraintes, attendre la demande officielle avant d'aider, rester dans son périmètre quand l'autre en a besoin : ce sont des comportements défendables individuellement mais qui détériorent progressivement la qualité de la coopération. La fiabilité et la disponibilité se construisent sur les petits gestes, pas sur les grandes déclarations." },
          moyen: { label: "Pratiques en développement", titre: "Vous coopérez bien dans votre périmètre, vous hésitez encore au-delà", desc: "Vous êtes fiable dans votre périmètre et vous coopérez bien avec vos interlocuteurs directs. Mais dès que la coopération implique de dépasser votre zone de confort — une équipe voisine, un sujet hors attributions officielles — vous hésitez. L'enjeu est d'étendre cette fiabilité au-delà des frontières formelles." },
          haut: { label: "Réflexes installés", titre: "Votre coopération ne s'arrête pas aux frontières de votre périmètre officiel", desc: "Vous tenez vos engagements, vous signalez vos blocages avant qu'ils n'impactent les autres, vous partagez les informations utiles sans attendre qu'on vous les demande, et vous proposez votre aide au-delà de votre périmètre quand c'est utile. C'est cette disponibilité quotidienne, discrète, qui constitue le socle de la coopération réelle dans une équipe." },
        },
      },
      {
        type: "likert",
        text: "Vous signalez proactivement à vos collègues les blocages de votre côté qui risquent d'impacter leur travail, sans attendre qu'ils vous le demandent.",
        tags: ["coopération", "transparence"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous coopérez quand c'est dans votre périmètre, vous vous défaussez dès que ça dépasse", desc: "Se défausser sur les contraintes, attendre la demande officielle avant d'aider, rester dans son périmètre quand l'autre en a besoin : ce sont des comportements défendables individuellement mais qui détériorent progressivement la qualité de la coopération. La fiabilité et la disponibilité se construisent sur les petits gestes, pas sur les grandes déclarations." },
          moyen: { label: "Pratiques en développement", titre: "Vous coopérez bien dans votre périmètre, vous hésitez encore au-delà", desc: "Vous êtes fiable dans votre périmètre et vous coopérez bien avec vos interlocuteurs directs. Mais dès que la coopération implique de dépasser votre zone de confort — une équipe voisine, un sujet hors attributions officielles — vous hésitez. L'enjeu est d'étendre cette fiabilité au-delà des frontières formelles." },
          haut: { label: "Réflexes installés", titre: "Votre coopération ne s'arrête pas aux frontières de votre périmètre officiel", desc: "Vous tenez vos engagements, vous signalez vos blocages avant qu'ils n'impactent les autres, vous partagez les informations utiles sans attendre qu'on vous les demande, et vous proposez votre aide au-delà de votre périmètre quand c'est utile. C'est cette disponibilité quotidienne, discrète, qui constitue le socle de la coopération réelle dans une équipe." },
        },
      },
      {
        type: "choix",
        text: "Votre équipe traverse une période intense. Laura, une collègue, est visiblement plus en difficulté que les autres face à la charge. Elle n'a rien demandé.",
        tags: ["coopération", "charge partagée"],
        answers: [
          { text: "Chacun gère sa propre charge — si elle avait besoin d'aide, elle le dirait.", score: 0 },
          { text: "Je lui propose spontanément de prendre une de ses tâches si j'ai de la marge.", score: 2 },
          { text: "J'en parle à notre responsable pour qu'il rééquilibre la distribution.", score: 1 },
          { text: "Je lui dis que je la vois débordée, au cas où elle voudrait en parler.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous coopérez quand c'est dans votre périmètre, vous vous défaussez dès que ça dépasse", desc: "Se défausser sur les contraintes, attendre la demande officielle avant d'aider, rester dans son périmètre quand l'autre en a besoin : ce sont des comportements défendables individuellement mais qui détériorent progressivement la qualité de la coopération. La fiabilité et la disponibilité se construisent sur les petits gestes, pas sur les grandes déclarations." },
          moyen: { label: "Pratiques en développement", titre: "Vous coopérez bien dans votre périmètre, vous hésitez encore au-delà", desc: "Vous êtes fiable dans votre périmètre et vous coopérez bien avec vos interlocuteurs directs. Mais dès que la coopération implique de dépasser votre zone de confort — une équipe voisine, un sujet hors attributions officielles — vous hésitez. L'enjeu est d'étendre cette fiabilité au-delà des frontières formelles." },
          haut: { label: "Réflexes installés", titre: "Votre coopération ne s'arrête pas aux frontières de votre périmètre officiel", desc: "Vous tenez vos engagements, vous signalez vos blocages avant qu'ils n'impactent les autres, vous partagez les informations utiles sans attendre qu'on vous les demande, et vous proposez votre aide au-delà de votre périmètre quand c'est utile. C'est cette disponibilité quotidienne, discrète, qui constitue le socle de la coopération réelle dans une équipe." },
        },
      },
      {
        type: "likert",
        text: "Vous rendez les services qu'on vous a rendus, spontanément, sans attendre qu'on vous le rappelle.",
        tags: ["coopération", "réciprocité"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous coopérez quand c'est dans votre périmètre, vous vous défaussez dès que ça dépasse", desc: "Se défausser sur les contraintes, attendre la demande officielle avant d'aider, rester dans son périmètre quand l'autre en a besoin : ce sont des comportements défendables individuellement mais qui détériorent progressivement la qualité de la coopération. La fiabilité et la disponibilité se construisent sur les petits gestes, pas sur les grandes déclarations." },
          moyen: { label: "Pratiques en développement", titre: "Vous coopérez bien dans votre périmètre, vous hésitez encore au-delà", desc: "Vous êtes fiable dans votre périmètre et vous coopérez bien avec vos interlocuteurs directs. Mais dès que la coopération implique de dépasser votre zone de confort — une équipe voisine, un sujet hors attributions officielles — vous hésitez. L'enjeu est d'étendre cette fiabilité au-delà des frontières formelles." },
          haut: { label: "Réflexes installés", titre: "Votre coopération ne s'arrête pas aux frontières de votre périmètre officiel", desc: "Vous tenez vos engagements, vous signalez vos blocages avant qu'ils n'impactent les autres, vous partagez les informations utiles sans attendre qu'on vous les demande, et vous proposez votre aide au-delà de votre périmètre quand c'est utile. C'est cette disponibilité quotidienne, discrète, qui constitue le socle de la coopération réelle dans une équipe." },
        },
      }
    ],

    // ── Chapitre 3 : Gérer les désaccords sans les laisser traîner
    2: [
      {
        type: "choix",
        text: "En réunion, vous n'êtes pas d'accord avec la décision qui vient d'être prise mais vous êtes le seul. Tout le monde semble s'aligner.",
        tags: ["désaccord", "dialogue"],
        answers: [
          { text: "Je m'aligne — si tout le monde est d'accord, c'est que j'ai peut-être raté quelque chose.", score: 0 },
          { text: "Je dis ce que j'en pense, brièvement, en restant factuel.", score: 2 },
          { text: "Je laisse passer en réunion et j'en parle à mon responsable après.", score: 1 },
          { text: "Je pose une question pour faire apparaître mon doute sans prendre de position.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous évitez les désaccords en public et les laissez traîner en privé", desc: "Se taire en réunion pour éviter d'être le seul à ne pas être d'accord, parler en coulisses plutôt qu'en face, laisser un désaccord traîner deux semaines : ce sont des façons de gérer le malaise à court terme qui créent des nœuds à moyen terme. Exprimer un désaccord directement, sur les faits, est presque toujours moins coûteux que de le laisser pourrir." },
          moyen: { label: "Pratiques en développement", titre: "Vous exprimez vos désaccords dans les situations simples, vous reculez encore sous pression forte", desc: "Vous dites ce que vous pensez quand l'enjeu est limité. Mais quand vous êtes le seul à ne pas être d'accord face à la direction, ou que le désaccord risque de créer un inconfort durable, votre parole se raréfie. L'enjeu est de tenir cette posture précisément dans les moments où elle coûte quelque chose." },
          haut: { label: "Réflexes installés", titre: "Vous exprimez vos désaccords en face, au bon moment, sur les faits", desc: "Vous dites ce que vous pensez en réunion même quand vous êtes seul·e à le penser, vous revenez vers votre responsable quand une décision vous pose problème, et votre position en public est la même qu'en privé. Cette constance donne aux gens autour de vous un interlocuteur fiable — quelqu'un dont ils savent ce qu'il pense vraiment." },
        },
      },
      {
        type: "likert",
        text: "Vous exprimez vos désaccords en réunion, même quand vous êtes seul·e à ne pas être d'accord.",
        tags: ["désaccord", "courage"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous évitez les désaccords en public et les laissez traîner en privé", desc: "Se taire en réunion pour éviter d'être le seul à ne pas être d'accord, parler en coulisses plutôt qu'en face, laisser un désaccord traîner deux semaines : ce sont des façons de gérer le malaise à court terme qui créent des nœuds à moyen terme. Exprimer un désaccord directement, sur les faits, est presque toujours moins coûteux que de le laisser pourrir." },
          moyen: { label: "Pratiques en développement", titre: "Vous exprimez vos désaccords dans les situations simples, vous reculez encore sous pression forte", desc: "Vous dites ce que vous pensez quand l'enjeu est limité. Mais quand vous êtes le seul à ne pas être d'accord face à la direction, ou que le désaccord risque de créer un inconfort durable, votre parole se raréfie. L'enjeu est de tenir cette posture précisément dans les moments où elle coûte quelque chose." },
          haut: { label: "Réflexes installés", titre: "Vous exprimez vos désaccords en face, au bon moment, sur les faits", desc: "Vous dites ce que vous pensez en réunion même quand vous êtes seul·e à le penser, vous revenez vers votre responsable quand une décision vous pose problème, et votre position en public est la même qu'en privé. Cette constance donne aux gens autour de vous un interlocuteur fiable — quelqu'un dont ils savent ce qu'il pense vraiment." },
        },
      },
      {
        type: "choix",
        text: "Votre responsable a pris une décision avec laquelle vous n'êtes pas d'accord. Elle a été annoncée à l'équipe. Vous pensez qu'elle va créer des problèmes opérationnels concrets.",
        tags: ["désaccord", "hiérarchie"],
        answers: [
          { text: "Je l'applique sans rien dire — une fois la décision prise et annoncée, c'est trop tard.", score: 0 },
          { text: "Je lui en parle en privé en lui exposant les problèmes opérationnels que j'anticipe.", score: 2 },
          { text: "J'en parle à mes collègues pour savoir s'ils partagent mon analyse.", score: 0.5 },
          { text: "J'attends que les problèmes apparaissent et je lui en parle à ce moment-là.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous évitez les désaccords en public et les laissez traîner en privé", desc: "Se taire en réunion pour éviter d'être le seul à ne pas être d'accord, parler en coulisses plutôt qu'en face, laisser un désaccord traîner deux semaines : ce sont des façons de gérer le malaise à court terme qui créent des nœuds à moyen terme. Exprimer un désaccord directement, sur les faits, est presque toujours moins coûteux que de le laisser pourrir." },
          moyen: { label: "Pratiques en développement", titre: "Vous exprimez vos désaccords dans les situations simples, vous reculez encore sous pression forte", desc: "Vous dites ce que vous pensez quand l'enjeu est limité. Mais quand vous êtes le seul à ne pas être d'accord face à la direction, ou que le désaccord risque de créer un inconfort durable, votre parole se raréfie. L'enjeu est de tenir cette posture précisément dans les moments où elle coûte quelque chose." },
          haut: { label: "Réflexes installés", titre: "Vous exprimez vos désaccords en face, au bon moment, sur les faits", desc: "Vous dites ce que vous pensez en réunion même quand vous êtes seul·e à le penser, vous revenez vers votre responsable quand une décision vous pose problème, et votre position en public est la même qu'en privé. Cette constance donne aux gens autour de vous un interlocuteur fiable — quelqu'un dont ils savent ce qu'il pense vraiment." },
        },
      },
      {
        type: "choix",
        text: "Vous et Jonathan avez un désaccord de fond sur la façon d'aborder un dossier commun. Chacun reste sur sa position depuis deux semaines. Ça bloque l'avancement.",
        tags: ["désaccord", "tension"],
        answers: [
          { text: "Je lui présente à nouveau mes arguments — il finira par comprendre.", score: 0 },
          { text: "Je propose qu'on tranche en impliquant notre responsable commun.", score: 1 },
          { text: "Je lui propose un échange structuré pour comprendre sa logique avant de reprendre la mienne.", score: 2 },
          { text: "J'avance de mon côté — le temps montrera qui avait raison.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous évitez les désaccords en public et les laissez traîner en privé", desc: "Se taire en réunion pour éviter d'être le seul à ne pas être d'accord, parler en coulisses plutôt qu'en face, laisser un désaccord traîner deux semaines : ce sont des façons de gérer le malaise à court terme qui créent des nœuds à moyen terme. Exprimer un désaccord directement, sur les faits, est presque toujours moins coûteux que de le laisser pourrir." },
          moyen: { label: "Pratiques en développement", titre: "Vous exprimez vos désaccords dans les situations simples, vous reculez encore sous pression forte", desc: "Vous dites ce que vous pensez quand l'enjeu est limité. Mais quand vous êtes le seul à ne pas être d'accord face à la direction, ou que le désaccord risque de créer un inconfort durable, votre parole se raréfie. L'enjeu est de tenir cette posture précisément dans les moments où elle coûte quelque chose." },
          haut: { label: "Réflexes installés", titre: "Vous exprimez vos désaccords en face, au bon moment, sur les faits", desc: "Vous dites ce que vous pensez en réunion même quand vous êtes seul·e à le penser, vous revenez vers votre responsable quand une décision vous pose problème, et votre position en public est la même qu'en privé. Cette constance donne aux gens autour de vous un interlocuteur fiable — quelqu'un dont ils savent ce qu'il pense vraiment." },
        },
      },
      {
        type: "likert",
        text: "Face à un désaccord, vous cherchez à comprendre la logique de l'autre avant de reposer la vôtre.",
        tags: ["désaccord", "écoute"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous évitez les désaccords en public et les laissez traîner en privé", desc: "Se taire en réunion pour éviter d'être le seul à ne pas être d'accord, parler en coulisses plutôt qu'en face, laisser un désaccord traîner deux semaines : ce sont des façons de gérer le malaise à court terme qui créent des nœuds à moyen terme. Exprimer un désaccord directement, sur les faits, est presque toujours moins coûteux que de le laisser pourrir." },
          moyen: { label: "Pratiques en développement", titre: "Vous exprimez vos désaccords dans les situations simples, vous reculez encore sous pression forte", desc: "Vous dites ce que vous pensez quand l'enjeu est limité. Mais quand vous êtes le seul à ne pas être d'accord face à la direction, ou que le désaccord risque de créer un inconfort durable, votre parole se raréfie. L'enjeu est de tenir cette posture précisément dans les moments où elle coûte quelque chose." },
          haut: { label: "Réflexes installés", titre: "Vous exprimez vos désaccords en face, au bon moment, sur les faits", desc: "Vous dites ce que vous pensez en réunion même quand vous êtes seul·e à le penser, vous revenez vers votre responsable quand une décision vous pose problème, et votre position en public est la même qu'en privé. Cette constance donne aux gens autour de vous un interlocuteur fiable — quelqu'un dont ils savent ce qu'il pense vraiment." },
        },
      },
      {
        type: "choix",
        text: "Deux membres de votre équipe sont en désaccord ouvert depuis une semaine sur un sujet de méthode. Personne ne tranche. Le reste de l'équipe commence à prendre parti.",
        tags: ["désaccord", "passivité"],
        answers: [
          { text: "Je laisse — les désaccords de méthode se règlent généralement d'eux-mêmes.", score: 0 },
          { text: "Je prends parti pour la position qui me semble la plus solide.", score: 0.5 },
          { text: "Je crée un moment pour qu'ils exposent leurs positions et cherchent un terrain commun.", score: 2 },
          { text: "J'en parle à notre responsable pour qu'il tranche.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous évitez les désaccords en public et les laissez traîner en privé", desc: "Se taire en réunion pour éviter d'être le seul à ne pas être d'accord, parler en coulisses plutôt qu'en face, laisser un désaccord traîner deux semaines : ce sont des façons de gérer le malaise à court terme qui créent des nœuds à moyen terme. Exprimer un désaccord directement, sur les faits, est presque toujours moins coûteux que de le laisser pourrir." },
          moyen: { label: "Pratiques en développement", titre: "Vous exprimez vos désaccords dans les situations simples, vous reculez encore sous pression forte", desc: "Vous dites ce que vous pensez quand l'enjeu est limité. Mais quand vous êtes le seul à ne pas être d'accord face à la direction, ou que le désaccord risque de créer un inconfort durable, votre parole se raréfie. L'enjeu est de tenir cette posture précisément dans les moments où elle coûte quelque chose." },
          haut: { label: "Réflexes installés", titre: "Vous exprimez vos désaccords en face, au bon moment, sur les faits", desc: "Vous dites ce que vous pensez en réunion même quand vous êtes seul·e à le penser, vous revenez vers votre responsable quand une décision vous pose problème, et votre position en public est la même qu'en privé. Cette constance donne aux gens autour de vous un interlocuteur fiable — quelqu'un dont ils savent ce qu'il pense vraiment." },
        },
      },
      {
        type: "choix",
        text: "Vous recevez un mail de Rayan qui remet en cause votre travail sur un point, avec des collègues en copie. Le ton est neutre mais vous trouvez la démarche déplacée.",
        tags: ["désaccord", "mail"],
        answers: [
          { text: "Je lui réponds en détaillant mes arguments — en copie des mêmes collègues.", score: 0.5 },
          { text: "Je lui réponds factuellement sur le fond, sans commenter la forme.", score: 1 },
          { text: "Je lui propose de s'appeler pour traiter le fond, et je lui dis que je préfère ce mode d'échange.", score: 2 },
          { text: "Je l'appelle directement sans répondre au mail.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous évitez les désaccords en public et les laissez traîner en privé", desc: "Se taire en réunion pour éviter d'être le seul à ne pas être d'accord, parler en coulisses plutôt qu'en face, laisser un désaccord traîner deux semaines : ce sont des façons de gérer le malaise à court terme qui créent des nœuds à moyen terme. Exprimer un désaccord directement, sur les faits, est presque toujours moins coûteux que de le laisser pourrir." },
          moyen: { label: "Pratiques en développement", titre: "Vous exprimez vos désaccords dans les situations simples, vous reculez encore sous pression forte", desc: "Vous dites ce que vous pensez quand l'enjeu est limité. Mais quand vous êtes le seul à ne pas être d'accord face à la direction, ou que le désaccord risque de créer un inconfort durable, votre parole se raréfie. L'enjeu est de tenir cette posture précisément dans les moments où elle coûte quelque chose." },
          haut: { label: "Réflexes installés", titre: "Vous exprimez vos désaccords en face, au bon moment, sur les faits", desc: "Vous dites ce que vous pensez en réunion même quand vous êtes seul·e à le penser, vous revenez vers votre responsable quand une décision vous pose problème, et votre position en public est la même qu'en privé. Cette constance donne aux gens autour de vous un interlocuteur fiable — quelqu'un dont ils savent ce qu'il pense vraiment." },
        },
      },
      {
        type: "likert",
        text: "Vous cherchez à résoudre les désaccords avec les personnes concernées directement, sans passer par des intermédiaires sauf si c'est vraiment nécessaire.",
        tags: ["désaccord", "résolution"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous évitez les désaccords en public et les laissez traîner en privé", desc: "Se taire en réunion pour éviter d'être le seul à ne pas être d'accord, parler en coulisses plutôt qu'en face, laisser un désaccord traîner deux semaines : ce sont des façons de gérer le malaise à court terme qui créent des nœuds à moyen terme. Exprimer un désaccord directement, sur les faits, est presque toujours moins coûteux que de le laisser pourrir." },
          moyen: { label: "Pratiques en développement", titre: "Vous exprimez vos désaccords dans les situations simples, vous reculez encore sous pression forte", desc: "Vous dites ce que vous pensez quand l'enjeu est limité. Mais quand vous êtes le seul à ne pas être d'accord face à la direction, ou que le désaccord risque de créer un inconfort durable, votre parole se raréfie. L'enjeu est de tenir cette posture précisément dans les moments où elle coûte quelque chose." },
          haut: { label: "Réflexes installés", titre: "Vous exprimez vos désaccords en face, au bon moment, sur les faits", desc: "Vous dites ce que vous pensez en réunion même quand vous êtes seul·e à le penser, vous revenez vers votre responsable quand une décision vous pose problème, et votre position en public est la même qu'en privé. Cette constance donne aux gens autour de vous un interlocuteur fiable — quelqu'un dont ils savent ce qu'il pense vraiment." },
        },
      },
      {
        type: "choix",
        text: "Une décision a été prise en réunion et vous l'avez publiquement soutenue. Hors réunion, vous continuez à en douter et à en parler négativement avec certains collègues.",
        tags: ["désaccord", "après décision"],
        answers: [
          { text: "C'est normal d'avoir des doutes — je ne mens pas en les exprimant.", score: 0 },
          { text: "Je me tais sur le sujet hors réunion — j'ai donné mon accord, je l'assume.", score: 1 },
          { text: "Je reviens vers mon responsable pour lui signaler que mes doutes persistent.", score: 2 },
          { text: "Je cherche des appuis parmi mes collègues pour que la décision soit réexaminée.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous évitez les désaccords en public et les laissez traîner en privé", desc: "Se taire en réunion pour éviter d'être le seul à ne pas être d'accord, parler en coulisses plutôt qu'en face, laisser un désaccord traîner deux semaines : ce sont des façons de gérer le malaise à court terme qui créent des nœuds à moyen terme. Exprimer un désaccord directement, sur les faits, est presque toujours moins coûteux que de le laisser pourrir." },
          moyen: { label: "Pratiques en développement", titre: "Vous exprimez vos désaccords dans les situations simples, vous reculez encore sous pression forte", desc: "Vous dites ce que vous pensez quand l'enjeu est limité. Mais quand vous êtes le seul à ne pas être d'accord face à la direction, ou que le désaccord risque de créer un inconfort durable, votre parole se raréfie. L'enjeu est de tenir cette posture précisément dans les moments où elle coûte quelque chose." },
          haut: { label: "Réflexes installés", titre: "Vous exprimez vos désaccords en face, au bon moment, sur les faits", desc: "Vous dites ce que vous pensez en réunion même quand vous êtes seul·e à le penser, vous revenez vers votre responsable quand une décision vous pose problème, et votre position en public est la même qu'en privé. Cette constance donne aux gens autour de vous un interlocuteur fiable — quelqu'un dont ils savent ce qu'il pense vraiment." },
        },
      },
      {
        type: "likert",
        text: "Votre position en réunion est la même que votre position hors réunion — vous ne dites pas une chose en public et une autre en privé.",
        tags: ["désaccord", "constance"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous évitez les désaccords en public et les laissez traîner en privé", desc: "Se taire en réunion pour éviter d'être le seul à ne pas être d'accord, parler en coulisses plutôt qu'en face, laisser un désaccord traîner deux semaines : ce sont des façons de gérer le malaise à court terme qui créent des nœuds à moyen terme. Exprimer un désaccord directement, sur les faits, est presque toujours moins coûteux que de le laisser pourrir." },
          moyen: { label: "Pratiques en développement", titre: "Vous exprimez vos désaccords dans les situations simples, vous reculez encore sous pression forte", desc: "Vous dites ce que vous pensez quand l'enjeu est limité. Mais quand vous êtes le seul à ne pas être d'accord face à la direction, ou que le désaccord risque de créer un inconfort durable, votre parole se raréfie. L'enjeu est de tenir cette posture précisément dans les moments où elle coûte quelque chose." },
          haut: { label: "Réflexes installés", titre: "Vous exprimez vos désaccords en face, au bon moment, sur les faits", desc: "Vous dites ce que vous pensez en réunion même quand vous êtes seul·e à le penser, vous revenez vers votre responsable quand une décision vous pose problème, et votre position en public est la même qu'en privé. Cette constance donne aux gens autour de vous un interlocuteur fiable — quelqu'un dont ils savent ce qu'il pense vraiment." },
        },
      }
    ],

    // ── Chapitre 4 : Maintenir la qualité relationnelle sous pression
    3: [
      {
        type: "choix",
        text: "Votre équipe est en période de rush depuis trois semaines. Les échanges sont devenus plus secs, les remerciements ont disparu, chacun est dans son tunnel. Vous le ressentez.",
        tags: ["pression", "relations"],
        answers: [
          { text: "C'est inévitable en période de charge — les relations reprendront leur cours quand la pression retombera.", score: 0 },
          { text: "Je maintiens mes propres habitudes relationnelles même si ce n'est pas réciproque.", score: 2 },
          { text: "Je le soulève en réunion pour qu'on prenne conscience de la dégradation collective.", score: 1 },
          { text: "Je compense par plus d'énergie dans les interactions pour remonter l'ambiance.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La pression détériore rapidement la qualité de vos échanges sans que vous le réguliiez", desc: "Des réponses plus sèches, des remerciements qui disparaissent, une humeur difficile qui déborde sur les interactions : la pression révèle les habitudes relationnelles. Ce n'est pas une question de bonne volonté — c'est une question de régulation. Maintenir la qualité de ses échanges sous pression demande un effort délibéré, pas juste de la bienveillance." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez la qualité relationnelle dans les pressions modérées, les pics vous déstabilisent encore", desc: "Vous gérez correctement la plupart des situations. Mais lors des pics intenses, la qualité de vos interactions peut se dégrader — réponses plus sèches, remerciements oubliés, irritabilité — sans que vous ne le réguliiez vraiment. L'enjeu est de mettre en place des mécanismes de régulation délibérés pour ces moments." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez la qualité de vos échanges même sous pression, et vous réparez quand vous avez mal géré", desc: "Vous maintenez la qualité de vos échanges même sous forte pression, et quand vous avez mal géré une interaction, vous y revenez pour le reconnaître. Cette régulation n'est pas naturelle — elle demande un effort délibéré — mais elle fait une différence visible sur le climat d'équipe, particulièrement dans les périodes difficiles." },
        },
      },
      {
        type: "likert",
        text: "Vous maintenez la qualité de vos relations de travail en période de charge intense, sans vous retrancher dans votre périmètre.",
        tags: ["pression", "présence"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La pression détériore rapidement la qualité de vos échanges sans que vous le réguliiez", desc: "Des réponses plus sèches, des remerciements qui disparaissent, une humeur difficile qui déborde sur les interactions : la pression révèle les habitudes relationnelles. Ce n'est pas une question de bonne volonté — c'est une question de régulation. Maintenir la qualité de ses échanges sous pression demande un effort délibéré, pas juste de la bienveillance." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez la qualité relationnelle dans les pressions modérées, les pics vous déstabilisent encore", desc: "Vous gérez correctement la plupart des situations. Mais lors des pics intenses, la qualité de vos interactions peut se dégrader — réponses plus sèches, remerciements oubliés, irritabilité — sans que vous ne le réguliiez vraiment. L'enjeu est de mettre en place des mécanismes de régulation délibérés pour ces moments." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez la qualité de vos échanges même sous pression, et vous réparez quand vous avez mal géré", desc: "Vous maintenez la qualité de vos échanges même sous forte pression, et quand vous avez mal géré une interaction, vous y revenez pour le reconnaître. Cette régulation n'est pas naturelle — elle demande un effort délibéré — mais elle fait une différence visible sur le climat d'équipe, particulièrement dans les périodes difficiles." },
        },
      },
      {
        type: "choix",
        text: "Vous êtes agacé·e par quelque chose qu'a fait Céline et vous lui répondez sèchement dans un échange par messagerie. Vous vous en rendez compte juste après l'envoi.",
        tags: ["pression", "frustration"],
        answers: [
          { text: "Je laisse — elle comprendra que je suis sous pression en ce moment.", score: 0 },
          { text: "Je lui envoie un message pour corriger le ton de ma réponse précédente.", score: 2 },
          { text: "Je l'appelle pour m'expliquer et m'excuser.", score: 2 },
          { text: "Je fais comme si de rien n'était — trop insister attirerait l'attention sur l'incident.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La pression détériore rapidement la qualité de vos échanges sans que vous le réguliiez", desc: "Des réponses plus sèches, des remerciements qui disparaissent, une humeur difficile qui déborde sur les interactions : la pression révèle les habitudes relationnelles. Ce n'est pas une question de bonne volonté — c'est une question de régulation. Maintenir la qualité de ses échanges sous pression demande un effort délibéré, pas juste de la bienveillance." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez la qualité relationnelle dans les pressions modérées, les pics vous déstabilisent encore", desc: "Vous gérez correctement la plupart des situations. Mais lors des pics intenses, la qualité de vos interactions peut se dégrader — réponses plus sèches, remerciements oubliés, irritabilité — sans que vous ne le réguliiez vraiment. L'enjeu est de mettre en place des mécanismes de régulation délibérés pour ces moments." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez la qualité de vos échanges même sous pression, et vous réparez quand vous avez mal géré", desc: "Vous maintenez la qualité de vos échanges même sous forte pression, et quand vous avez mal géré une interaction, vous y revenez pour le reconnaître. Cette régulation n'est pas naturelle — elle demande un effort délibéré — mais elle fait une différence visible sur le climat d'équipe, particulièrement dans les périodes difficiles." },
        },
      },
      {
        type: "choix",
        text: "En période de rush, votre collègue Théo a fait un effort particulier pour vous aider sur un point bloquant. Vous êtes vous-même très pris·e.",
        tags: ["pression", "reconnaissance"],
        answers: [
          { text: "Je le remercie quand les choses se calmeront — il comprend que ce n'est pas le moment.", score: 0 },
          { text: "Je lui envoie un message court pour lui signifier que j'ai remarqué et que j'apprécie.", score: 2 },
          { text: "Je garde ça en tête pour lui rendre la pareille quand l'occasion se présentera.", score: 1 },
          { text: "Je le remercie rapidement de vive voix au prochain croisement.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La pression détériore rapidement la qualité de vos échanges sans que vous le réguliiez", desc: "Des réponses plus sèches, des remerciements qui disparaissent, une humeur difficile qui déborde sur les interactions : la pression révèle les habitudes relationnelles. Ce n'est pas une question de bonne volonté — c'est une question de régulation. Maintenir la qualité de ses échanges sous pression demande un effort délibéré, pas juste de la bienveillance." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez la qualité relationnelle dans les pressions modérées, les pics vous déstabilisent encore", desc: "Vous gérez correctement la plupart des situations. Mais lors des pics intenses, la qualité de vos interactions peut se dégrader — réponses plus sèches, remerciements oubliés, irritabilité — sans que vous ne le réguliiez vraiment. L'enjeu est de mettre en place des mécanismes de régulation délibérés pour ces moments." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez la qualité de vos échanges même sous pression, et vous réparez quand vous avez mal géré", desc: "Vous maintenez la qualité de vos échanges même sous forte pression, et quand vous avez mal géré une interaction, vous y revenez pour le reconnaître. Cette régulation n'est pas naturelle — elle demande un effort délibéré — mais elle fait une différence visible sur le climat d'équipe, particulièrement dans les périodes difficiles." },
        },
      },
      {
        type: "likert",
        text: "Votre façon de traiter vos collègues ne change pas significativement selon que vous êtes sous pression ou non.",
        tags: ["pression", "cohérence"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La pression détériore rapidement la qualité de vos échanges sans que vous le réguliiez", desc: "Des réponses plus sèches, des remerciements qui disparaissent, une humeur difficile qui déborde sur les interactions : la pression révèle les habitudes relationnelles. Ce n'est pas une question de bonne volonté — c'est une question de régulation. Maintenir la qualité de ses échanges sous pression demande un effort délibéré, pas juste de la bienveillance." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez la qualité relationnelle dans les pressions modérées, les pics vous déstabilisent encore", desc: "Vous gérez correctement la plupart des situations. Mais lors des pics intenses, la qualité de vos interactions peut se dégrader — réponses plus sèches, remerciements oubliés, irritabilité — sans que vous ne le réguliiez vraiment. L'enjeu est de mettre en place des mécanismes de régulation délibérés pour ces moments." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez la qualité de vos échanges même sous pression, et vous réparez quand vous avez mal géré", desc: "Vous maintenez la qualité de vos échanges même sous forte pression, et quand vous avez mal géré une interaction, vous y revenez pour le reconnaître. Cette régulation n'est pas naturelle — elle demande un effort délibéré — mais elle fait une différence visible sur le climat d'équipe, particulièrement dans les périodes difficiles." },
        },
      },
      {
        type: "choix",
        text: "Vous avez eu une matinée particulièrement difficile. L'après-midi, vous avez deux réunions avec des collègues qui ne sont pas impliqués dans ce qui vous a mis sous tension.",
        tags: ["pression", "humeur"],
        answers: [
          { text: "Mon humeur du moment transparaît forcément — ce serait artificiel de faire semblant.", score: 0 },
          { text: "Je préviens mes collègues en début de réunion que j'ai eu une matinée compliquée.", score: 1 },
          { text: "Je fais l'effort de mettre de côté ma matinée pour ces réunions.", score: 2 },
          { text: "Je reporte les réunions si je sens que je ne suis pas en état.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La pression détériore rapidement la qualité de vos échanges sans que vous le réguliiez", desc: "Des réponses plus sèches, des remerciements qui disparaissent, une humeur difficile qui déborde sur les interactions : la pression révèle les habitudes relationnelles. Ce n'est pas une question de bonne volonté — c'est une question de régulation. Maintenir la qualité de ses échanges sous pression demande un effort délibéré, pas juste de la bienveillance." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez la qualité relationnelle dans les pressions modérées, les pics vous déstabilisent encore", desc: "Vous gérez correctement la plupart des situations. Mais lors des pics intenses, la qualité de vos interactions peut se dégrader — réponses plus sèches, remerciements oubliés, irritabilité — sans que vous ne le réguliiez vraiment. L'enjeu est de mettre en place des mécanismes de régulation délibérés pour ces moments." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez la qualité de vos échanges même sous pression, et vous réparez quand vous avez mal géré", desc: "Vous maintenez la qualité de vos échanges même sous forte pression, et quand vous avez mal géré une interaction, vous y revenez pour le reconnaître. Cette régulation n'est pas naturelle — elle demande un effort délibéré — mais elle fait une différence visible sur le climat d'équipe, particulièrement dans les périodes difficiles." },
        },
      },
      {
        type: "choix",
        text: "Votre équipe traverse une période difficile. Vous, vous vous en sortez mieux que les autres. Personne ne vous demande rien.",
        tags: ["pression", "solidarité"],
        answers: [
          { text: "Je me concentre sur mon propre travail — en période difficile, chacun doit gérer le sien.", score: 0 },
          { text: "Je propose spontanément un coup de main à ceux qui semblent le plus en difficulté.", score: 2 },
          { text: "Je reste disponible si quelqu'un me sollicite, sans m'imposer.", score: 1 },
          { text: "J'en parle à notre responsable pour qu'il rééquilibre la charge.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La pression détériore rapidement la qualité de vos échanges sans que vous le réguliiez", desc: "Des réponses plus sèches, des remerciements qui disparaissent, une humeur difficile qui déborde sur les interactions : la pression révèle les habitudes relationnelles. Ce n'est pas une question de bonne volonté — c'est une question de régulation. Maintenir la qualité de ses échanges sous pression demande un effort délibéré, pas juste de la bienveillance." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez la qualité relationnelle dans les pressions modérées, les pics vous déstabilisent encore", desc: "Vous gérez correctement la plupart des situations. Mais lors des pics intenses, la qualité de vos interactions peut se dégrader — réponses plus sèches, remerciements oubliés, irritabilité — sans que vous ne le réguliiez vraiment. L'enjeu est de mettre en place des mécanismes de régulation délibérés pour ces moments." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez la qualité de vos échanges même sous pression, et vous réparez quand vous avez mal géré", desc: "Vous maintenez la qualité de vos échanges même sous forte pression, et quand vous avez mal géré une interaction, vous y revenez pour le reconnaître. Cette régulation n'est pas naturelle — elle demande un effort délibéré — mais elle fait une différence visible sur le climat d'équipe, particulièrement dans les périodes difficiles." },
        },
      },
      {
        type: "likert",
        text: "Quand vous avez mal géré une interaction sous pression, vous revenez vers la personne concernée pour le reconnaître.",
        tags: ["pression", "réparation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La pression détériore rapidement la qualité de vos échanges sans que vous le réguliiez", desc: "Des réponses plus sèches, des remerciements qui disparaissent, une humeur difficile qui déborde sur les interactions : la pression révèle les habitudes relationnelles. Ce n'est pas une question de bonne volonté — c'est une question de régulation. Maintenir la qualité de ses échanges sous pression demande un effort délibéré, pas juste de la bienveillance." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez la qualité relationnelle dans les pressions modérées, les pics vous déstabilisent encore", desc: "Vous gérez correctement la plupart des situations. Mais lors des pics intenses, la qualité de vos interactions peut se dégrader — réponses plus sèches, remerciements oubliés, irritabilité — sans que vous ne le réguliiez vraiment. L'enjeu est de mettre en place des mécanismes de régulation délibérés pour ces moments." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez la qualité de vos échanges même sous pression, et vous réparez quand vous avez mal géré", desc: "Vous maintenez la qualité de vos échanges même sous forte pression, et quand vous avez mal géré une interaction, vous y revenez pour le reconnaître. Cette régulation n'est pas naturelle — elle demande un effort délibéré — mais elle fait une différence visible sur le climat d'équipe, particulièrement dans les périodes difficiles." },
        },
      },
      {
        type: "choix",
        text: "Un·e collègue vous dit qu'il ou elle ne supporte plus l'ambiance de l'équipe en ce moment. Vous partagez ce ressenti mais vous gérez. Vous êtes en plein rush.",
        tags: ["pression", "limites"],
        answers: [
          { text: "Je lui dis que c'est temporaire et que ça ira mieux quand la pression retombera.", score: 0 },
          { text: "Je l'écoute sans chercher à minimiser ce qu'il ou elle ressent.", score: 2 },
          { text: "Je lui conseille d'en parler à notre responsable si c'est vraiment difficile.", score: 1 },
          { text: "Je lui dis que moi aussi je trouve ça difficile — au moins il ou elle ne se sent pas seul·e.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La pression détériore rapidement la qualité de vos échanges sans que vous le réguliiez", desc: "Des réponses plus sèches, des remerciements qui disparaissent, une humeur difficile qui déborde sur les interactions : la pression révèle les habitudes relationnelles. Ce n'est pas une question de bonne volonté — c'est une question de régulation. Maintenir la qualité de ses échanges sous pression demande un effort délibéré, pas juste de la bienveillance." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez la qualité relationnelle dans les pressions modérées, les pics vous déstabilisent encore", desc: "Vous gérez correctement la plupart des situations. Mais lors des pics intenses, la qualité de vos interactions peut se dégrader — réponses plus sèches, remerciements oubliés, irritabilité — sans que vous ne le réguliiez vraiment. L'enjeu est de mettre en place des mécanismes de régulation délibérés pour ces moments." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez la qualité de vos échanges même sous pression, et vous réparez quand vous avez mal géré", desc: "Vous maintenez la qualité de vos échanges même sous forte pression, et quand vous avez mal géré une interaction, vous y revenez pour le reconnaître. Cette régulation n'est pas naturelle — elle demande un effort délibéré — mais elle fait une différence visible sur le climat d'équipe, particulièrement dans les périodes difficiles." },
        },
      },
      {
        type: "likert",
        text: "Vous réglez vos propres états émotionnels avant d'entrer dans une interaction difficile plutôt que de les laisser déborder sur vos collègues.",
        tags: ["pression", "régulation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "La pression détériore rapidement la qualité de vos échanges sans que vous le réguliiez", desc: "Des réponses plus sèches, des remerciements qui disparaissent, une humeur difficile qui déborde sur les interactions : la pression révèle les habitudes relationnelles. Ce n'est pas une question de bonne volonté — c'est une question de régulation. Maintenir la qualité de ses échanges sous pression demande un effort délibéré, pas juste de la bienveillance." },
          moyen: { label: "Pratiques en développement", titre: "Vous maintenez la qualité relationnelle dans les pressions modérées, les pics vous déstabilisent encore", desc: "Vous gérez correctement la plupart des situations. Mais lors des pics intenses, la qualité de vos interactions peut se dégrader — réponses plus sèches, remerciements oubliés, irritabilité — sans que vous ne le réguliiez vraiment. L'enjeu est de mettre en place des mécanismes de régulation délibérés pour ces moments." },
          haut: { label: "Réflexes installés", titre: "Vous maintenez la qualité de vos échanges même sous pression, et vous réparez quand vous avez mal géré", desc: "Vous maintenez la qualité de vos échanges même sous forte pression, et quand vous avez mal géré une interaction, vous y revenez pour le reconnaître. Cette régulation n'est pas naturelle — elle demande un effort délibéré — mais elle fait une différence visible sur le climat d'équipe, particulièrement dans les périodes difficiles." },
        },
      }
    ],

  },
  // ─────────────────────────────────────────────────────────────────────

  "epuisement-prevention": {
    0: [
        {
          text: "Depuis plusieurs semaines, vous êtes épuisé dès le matin et les journées vous semblent interminables. Vous vous dites que c'est la période. Que faites-vous ?",
          answers: [
          {text: "Je pousse encore — ça va passer.", score: 0},
          {text: "Je cherche à me ménager un peu plus.", score: 1},
          {text: "Je prends ce signal au sérieux et cherche à en comprendre les causes réelles.", score: 2}
          ]
        },
        {
          text: "Vous avez du mal à vous souvenir de la dernière fois où vous vous êtes senti vraiment récupéré. Que faites-vous ?",
          answers: [
          {text: "Je note que je suis fatigué et continue.", score: 0},
          {text: "Je cherche à mieux dormir.", score: 1},
          {text: "Je vois cela comme un signe d'épuisement cumulatif et cherche à agir sur les causes.", score: 2}
          ]
        },
        {
          text: "Les tâches que vous trouviez stimulantes il y a quelques mois vous semblent maintenant sans intérêt. Que faites-vous ?",
          answers: [
          {text: "Je fais le minimum pour avancer.", score: 0},
          {text: "Je cherche à retrouver de la motivation.", score: 1},
          {text: "Je prends cela comme un signal de burnout possible et cherche à en parler.", score: 2}
          ]
        },
        {
          text: "Votre irritabilité augmente au travail. Des situations habituellement neutres vous agacent fortement. Que faites-vous ?",
          answers: [
          {text: "Je m'excuse après coup et continue.", score: 0},
          {text: "Je cherche à mieux gérer mes réactions.", score: 1},
          {text: "J'interprète cela comme un signe de surcharge et cherche à agir en amont.", score: 2}
          ]
        },
        {
          text: "Vous faites des erreurs inhabituelles dans votre travail depuis quelques semaines. Que faites-vous ?",
          answers: [
          {text: "Je redouble d'attention.", score: 0},
          {text: "Je prends note et cherche à m'organiser différemment.", score: 1},
          {text: "Je prends ce signal au sérieux : des erreurs inhabituelles peuvent indiquer un épuisement cognitif.", score: 2}
          ]
        }
    ],
    1: [
        {
          text: "Vous avez du mal à dire non à de nouvelles demandes même quand vous êtes déjà saturé. Que faites-vous ?",
          answers: [
          {text: "Je continue à dire oui — refuser m'est difficile.", score: 0},
          {text: "Je dis oui mais en précisant que ce sera pour plus tard.", score: 1},
          {text: "Je cherche à formuler un refus respectueux et à en comprendre les raisons qui me retiennent.", score: 2}
          ]
        },
        {
          text: "Vous réalisez que vous ne prenez jamais de pause dans la journée. Que faites-vous ?",
          answers: [
          {text: "Les pauses me font perdre du temps.", score: 0},
          {text: "Je prends une pause quand j'ai fini une tâche.", score: 1},
          {text: "Je planifie des pauses dans ma journée comme des engagements non négociables.", score: 2}
          ]
        },
        {
          text: "Votre charge a augmenté mais vous n'avez pas revu vos priorités ni demandé un arbitrage. Que faites-vous ?",
          answers: [
          {text: "J'absorbe — c'est mon rôle de m'adapter.", score: 0},
          {text: "Je signale que c'est beaucoup.", score: 1},
          {text: "Je demande explicitement un arbitrage avec des éléments concrets sur ce qui n'est plus tenable.", score: 2}
          ]
        },
        {
          text: "Vous travaillez souvent le soir et le week-end pour tenir votre charge. Que faites-vous ?",
          answers: [
          {text: "C'est nécessaire pour livrer ce qui est attendu.", score: 0},
          {text: "Je cherche à être plus efficace pendant les heures de travail.", score: 1},
          {text: "Je prends cela comme un signal que ma charge dépasse ma capacité normale et j'en parle à mon responsable.", score: 2}
          ]
        },
        {
          text: "Vous n'avez pas pris de congés depuis plusieurs mois et vous ne savez pas quand vous pourrez en prendre. Que faites-vous ?",
          answers: [
          {text: "Quand la charge baisse, je prendrai des congés.", score: 0},
          {text: "Je pose quelques jours quand c'est possible.", score: 1},
          {text: "Je pose des congés comme une nécessité, pas comme une récompense, et j'anticipe l'organisation.", score: 2}
          ]
        }
    ],
    2: [
        {
          text: "Vous savez que vous devriez récupérer mais dès que vous avez un moment libre, vous pensez au travail. Que faites-vous ?",
          answers: [
          {text: "Je laisse aller — c'est difficile à contrôler.", score: 0},
          {text: "Je cherche des activités pour m'occuper l'esprit.", score: 1},
          {text: "Je travaille à créer des espaces de déconnexion réels — activité physique, limites numériques.", score: 2}
          ]
        },
        {
          text: "Votre sommeil est perturbé par des pensées liées au travail depuis plusieurs semaines. Que faites-vous ?",
          answers: [
          {text: "Je m'y habitue — c'est une période tendue.", score: 0},
          {text: "Je prends des médicaments pour dormir.", score: 1},
          {text: "Je vois cela comme un signal sérieux et cherche un appui : médecin, psychologue, employeur.", score: 2}
          ]
        },
        {
          text: "Vous continuez à aller travailler alors que vous vous sentez vraiment au bout du rouleau. Que faites-vous ?",
          answers: [
          {text: "Je tiens — les congés arrivent bientôt.", score: 0},
          {text: "Je travaille à mi-régime sans le dire.", score: 1},
          {text: "Je prends le problème au sérieux et consulte un médecin pour évaluer ma situation.", score: 2}
          ]
        },
        {
          text: "Vous avez l'habitude de ne jamais demander d'aide même quand vous en avez besoin. Que faites-vous face à une surcharge importante ?",
          answers: [
          {text: "Je gère seul — c'est ma façon de fonctionner.", score: 0},
          {text: "Je cherche à me débrouiller avec les ressources disponibles.", score: 1},
          {text: "Je travaille à dépasser cet automatisme et à formuler une demande d'aide explicite.", score: 2}
          ]
        },
        {
          text: "Des activités qui vous ressourçaient habituellement ne vous font plus d'effet. Que faites-vous ?",
          answers: [
          {text: "J'attends que ça revienne.", score: 0},
          {text: "Je cherche de nouvelles activités.", score: 1},
          {text: "Je vois cela comme un signe d'épuisement avancé et cherche un soutien professionnel.", score: 2}
          ]
        }
    ],
    3: [
        {
          text: "Vous savez que vous avez besoin d'aide mais vous avez honte de l'admettre. Que faites-vous ?",
          answers: [
          {text: "Je gère seul et personne ne sait.", score: 0},
          {text: "J'en parle à un proche hors travail.", score: 1},
          {text: "Je cherche à mettre de côté la honte et à accéder à un soutien adapté, professionnel ou médical.", score: 2}
          ]
        },
        {
          text: "Vous pensez à consulter un médecin ou un psychologue mais vous vous demandez si votre situation est vraiment assez grave. Que faites-vous ?",
          answers: [
          {text: "J'attends que ça empire pour être sûr.", score: 0},
          {text: "J'en parle à un proche pour avoir son avis.", score: 1},
          {text: "Je consulte — l'anticipation est toujours plus efficace que l'attente.", score: 2}
          ]
        },
        {
          text: "Vous n'êtes pas sûr que votre organisation dispose de ressources d'accompagnement psychologique. Que faites-vous ?",
          answers: [
          {text: "Je suppose qu'il n'y a rien et je ne cherche pas.", score: 0},
          {text: "J'en parle à un collègue.", score: 1},
          {text: "Je me renseigne directement auprès des RH ou du service de santé au travail.", score: 2}
          ]
        },
        {
          text: "Vous traversez un épuisement sérieux et votre responsable ne l'a pas remarqué. Que faites-vous ?",
          answers: [
          {text: "J'attends qu'il le voie.", score: 0},
          {text: "Je lui laisse entendre que ça va mieux de toute façon.", score: 1},
          {text: "Je prends l'initiative d'en parler directement à mon responsable ou aux RH.", score: 2}
          ]
        },
        {
          text: "Vous êtes revenu d'un arrêt maladie lié à l'épuisement mais vous ne sentez pas les conditions changer. Que faites-vous ?",
          answers: [
          {text: "Je reprends comme avant — ça s'est passé, je passe à autre chose.", score: 0},
          {text: "Je signale que les conditions n'ont pas changé.", score: 1},
          {text: "Je prends le temps de redéfinir avec mon responsable les conditions de reprise pour éviter une rechute.", score: 2}
          ]
        }
    ],
  },

  "retour-apres-absence": {
    0: [
        {
          text: "Vous revenez d'un arrêt de plusieurs semaines. Votre boîte mail contient des centaines de messages. Que faites-vous ?",
          answers: [
          {text: "Je traite tout du premier jour pour être à jour rapidement.", score: 0},
          {text: "Je trie les messages les plus importants et traite le reste au fil de l'eau.", score: 1},
          {text: "Je commence par demander à mon responsable quelles sont les priorités avant de plonger dans ma messagerie.", score: 2}
          ]
        },
        {
          text: "Vous revenez d'une longue absence et réalisez que certains de vos projets ont évolué sans vous. Que faites-vous ?",
          answers: [
          {text: "Je reprends le pilotage comme avant.", score: 0},
          {text: "Je me tiens informé de ce qui a changé.", score: 1},
          {text: "Je prends le temps de comprendre les évolutions avant de prendre des décisions.", score: 2}
          ]
        },
        {
          text: "À votre retour, votre périmètre a légèrement changé sans que vous en ayez été informé. Que faites-vous ?",
          answers: [
          {text: "Je m'adapte sans poser de questions.", score: 0},
          {text: "J'en prends note et attends de voir comment ça se passe.", score: 1},
          {text: "Je demande un point clair sur les nouvelles attentes avant de reprendre pleinement.", score: 2}
          ]
        },
        {
          text: "À votre retour, vos collègues vous traitent comme si vous n'aviez jamais été absent. Ça vous met mal à l'aise. Que faites-vous ?",
          answers: [
          {text: "Je fais pareil et reprends le rythme.", score: 0},
          {text: "Je leur signale discrètement que j'ai besoin d'un peu de temps.", score: 1},
          {text: "Je m'accorde le droit de reprendre progressivement et je le communique clairement.", score: 2}
          ]
        },
        {
          text: "Au retour de votre absence, votre responsable vous charge dès le premier jour. Il semble ne pas réaliser l'impact. Que faites-vous ?",
          answers: [
          {text: "Je prends tout — je veux montrer que je suis de retour.", score: 0},
          {text: "Je fais ce que je peux sans le dire.", score: 1},
          {text: "J'expose clairement ce que je peux absorber dans un premier temps.", score: 2}
          ]
        }
    ],
    1: [
        {
          text: "Vous revenez d'une longue absence et vous n'êtes plus tout à fait sûr de vos compétences sur certains sujets qui ont évolué. Que faites-vous ?",
          answers: [
          {text: "Je fais comme si j'étais à jour.", score: 0},
          {text: "Je me mets à niveau discrètement.", score: 1},
          {text: "Je reconnais clairement ce dont j'ai besoin pour être opérationnel et demande un accompagnement.", score: 2}
          ]
        },
        {
          text: "Des décisions ont été prises pendant votre absence que vous n'auriez peut-être pas prises de la même façon. Que faites-vous ?",
          answers: [
          {text: "Je les remets en question.", score: 0},
          {text: "Je les accepte sans en parler.", score: 1},
          {text: "Je les accepte et, si elles ont un impact important, j'ouvre une discussion constructive sur les adaptations possibles.", score: 2}
          ]
        },
        {
          text: "Au retour, vous réalisez que certaines relations de travail ont changé pendant votre absence. Que faites-vous ?",
          answers: [
          {text: "Je reprends là où j'étais — les relations se reconstruisent d'elles-mêmes.", score: 0},
          {text: "Je m'y adapte au fil du temps.", score: 1},
          {text: "Je prends des initiatives pour reconstruire les liens importants.", score: 2}
          ]
        },
        {
          text: "Vous devez rattraper un retard professionnel mais vous sentez que votre capacité de travail n'est pas encore à 100%. Que faites-vous ?",
          answers: [
          {text: "Je compense par du volume horaire.", score: 0},
          {text: "Je priorise l'essentiel.", score: 1},
          {text: "Je suis honnête avec mon responsable sur mon état réel et je propose un plan de reprise réaliste.", score: 2}
          ]
        },
        {
          text: "Votre équipe vous sollicite beaucoup à votre retour. C'est valorisant mais épuisant. Que faites-vous ?",
          answers: [
          {text: "Je réponds à tout — je suis de retour.", score: 0},
          {text: "Je gère au cas par cas selon mon énergie.", score: 1},
          {text: "Je pose des limites claires sur ma disponibilité dans les premiers jours.", score: 2}
          ]
        }
    ],
    2: [
        {
          text: "Vous avez du mal à retrouver votre rythme de travail après votre absence. Que faites-vous ?",
          answers: [
          {text: "Je force et ça finit par venir.", score: 0},
          {text: "Je me fixe des objectifs simples pour les premiers jours.", score: 1},
          {text: "Je construis une reprise progressive et en parle ouvertement à mon responsable.", score: 2}
          ]
        },
        {
          text: "À votre retour, vous avez l'impression de ne plus être dans la boucle et d'avoir raté des choses importantes. Que faites-vous ?",
          answers: [
          {text: "Je remonte aux derniers emails importants.", score: 0},
          {text: "Je demande à un collègue de me mettre à jour.", score: 1},
          {text: "Je demande un point structuré à mon responsable sur les évolutions importantes et les priorités actuelles.", score: 2}
          ]
        },
        {
          text: "Vous vous surcompensez pour montrer que vous êtes pleinement opérationnel, mais vous vous épuisez à nouveau. Que faites-vous ?",
          answers: [
          {text: "Je continue — il faut que je sois à la hauteur.", score: 0},
          {text: "Je lève le pied discrètement.", score: 1},
          {text: "Je reconnais cette dynamique et agis pour casser le cercle vicieux.", score: 2}
          ]
        },
        {
          text: "Au retour, un collègue vous pose des questions sur les raisons de votre absence. Vous ne souhaitez pas en parler. Que faites-vous ?",
          answers: [
          {text: "Je lui donne une réponse vague et change de sujet.", score: 0},
          {text: "Je lui dis que c'était personnel sans aller plus loin.", score: 1},
          {text: "Je pose clairement une limite, de façon calme : il n'est pas nécessaire que je m'en explique.", score: 2}
          ]
        },
        {
          text: "Vous êtes revenu mais vous ne vous sentez pas vraiment prêt. Que faites-vous ?",
          answers: [
          {text: "Je fais bonne figure — ça reviendra.", score: 0},
          {text: "Je travaille à mi-régime sans le dire.", score: 1},
          {text: "J'en parle à mon médecin et à mon responsable pour définir des conditions de reprise adaptées.", score: 2}
          ]
        }
    ],
    3: [
        {
          text: "Plusieurs semaines après votre retour, vous sentez que votre énergie ne remonte pas vraiment. Que faites-vous ?",
          answers: [
          {text: "J'attends encore — le retour prend du temps.", score: 0},
          {text: "Je prends des congés supplémentaires.", score: 1},
          {text: "Je consulte à nouveau un médecin : ce signal n'est pas à ignorer.", score: 2}
          ]
        },
        {
          text: "Vous réalisez que les conditions qui ont causé votre absence n'ont pas changé. Que faites-vous ?",
          answers: [
          {text: "Je reprends en espérant que ça se passe mieux.", score: 0},
          {text: "J'en parle à mon responsable.", score: 1},
          {text: "Je formalise clairement les conditions nécessaires à un retour durable et demande un engagement concret.", score: 2}
          ]
        },
        {
          text: "À votre retour, votre responsable vous charge progressivement plus vite que vous ne le souhaiteriez. Que faites-vous ?",
          answers: [
          {text: "Je tiens — il faut montrer que je suis capable.", score: 0},
          {text: "Je lui dis que c'est un peu tôt.", score: 1},
          {text: "J'exprime clairement mon rythme de reprise et les limites que je dois respecter pour ne pas rechuter.", score: 2}
          ]
        },
        {
          text: "Vous avez encore des moments difficiles ponctuels depuis votre retour. Vous ne savez pas si vous devez en parler. Que faites-vous ?",
          answers: [
          {text: "Je garde ça pour moi — ça peut faire peur aux autres.", score: 0},
          {text: "J'en parle à quelqu'un de confiance hors travail.", score: 1},
          {text: "J'en parle à la personne la plus adaptée selon la nature du problème : médecin, RH, ou responsable.", score: 2}
          ]
        },
        {
          text: "Une situation similaire à celle qui vous a causé votre absence se reproduit. Que faites-vous ?",
          answers: [
          {text: "J'essaie de la gérer autrement cette fois.", score: 0},
          {text: "J'en parle à mon responsable.", score: 1},
          {text: "J'agis rapidement pour ne pas laisser la situation s'installer : signalement, ajustement de charge, demande d'aide.", score: 2}
          ]
        }
    ],
  },

  "manager-signaux-rps": {
    0: [
        {
          text: "Un collaborateur qui était toujours à l'heure commence à arriver en retard régulièrement. Il ne donne pas d'explication. Que faites-vous ?",
          answers: [
          {text: "Je note le retard et lui rappelle les règles.", score: 0},
          {text: "Je lui demande si tout va bien.", score: 1},
          {text: "Je crée un espace pour échanger sur sa situation sans le mettre en difficulté.", score: 2}
          ]
        },
        {
          text: "Un collaborateur habitué à contribuer activement en réunion ne dit plus rien depuis deux semaines. Que faites-vous ?",
          answers: [
          {text: "J'attends de voir si ça change.", score: 0},
          {text: "Je lui pose la question en réunion pour le faire participer.", score: 1},
          {text: "Je crée un moment en dehors des réunions pour lui demander comment il se sent.", score: 2}
          ]
        },
        {
          text: "Vous constatez que la qualité du travail d'un collaborateur a baissé sans raison apparente. Que faites-vous ?",
          answers: [
          {text: "Je lui fais un retour sur la qualité de son travail.", score: 0},
          {text: "Je lui demande si quelque chose le perturbe.", score: 1},
          {text: "Je crée un espace d'échange sur sa charge et son vécu avant d'aborder la performance.", score: 2}
          ]
        },
        {
          text: "Un collaborateur est de plus en plus absent pour des arrêts courts et répétitifs. Que faites-vous ?",
          answers: [
          {text: "Je note les absences et les suis administrativement.", score: 0},
          {text: "Je lui demande si quelque chose ne va pas.", score: 1},
          {text: "Je crée un espace d'échange bienveillant et, si nécessaire, je l'oriente vers le médecin du travail.", score: 2}
          ]
        },
        {
          text: "Un collaborateur est de plus en plus irritable avec ses collègues. Ça commence à affecter l'ambiance. Que faites-vous ?",
          answers: [
          {text: "Je lui rappelle l'importance du respect dans l'équipe.", score: 0},
          {text: "Je l'aborde sur l'impact de son comportement.", score: 1},
          {text: "Je l'aborde d'abord sur comment il va lui, avant de parler de l'impact sur l'équipe.", score: 2}
          ]
        }
    ],
    1: [
        {
          text: "Un collaborateur vous dit que tout va bien mais son comportement dit le contraire. Que faites-vous ?",
          answers: [
          {text: "Je le crois sur parole.", score: 0},
          {text: "Je continue à observer sans intervenir.", score: 1},
          {text: "Je lui reflète ce que j'observe de façon factuelle et lui laisse l'espace de s'exprimer.", score: 2}
          ]
        },
        {
          text: "Vous avez la conviction qu'un collaborateur est en souffrance mais il nie toute difficulté. Que faites-vous ?",
          answers: [
          {text: "Je respecte sa version.", score: 0},
          {text: "J'insiste pour qu'il reconnaisse la situation.", score: 1},
          {text: "Je reste disponible, lui fais savoir que la porte est ouverte et reste attentif à la situation.", score: 2}
          ]
        },
        {
          text: "Un collaborateur partage avec vous une difficulté personnelle qui affecte son travail. Que faites-vous ?",
          answers: [
          {text: "Je l'écoute et lui dis d'essayer de séparer vie personnelle et vie professionnelle.", score: 0},
          {text: "Je l'écoute et lui propose de prendre des congés.", score: 1},
          {text: "Je l'écoute vraiment, j'évalue avec lui ce que l'organisation peut faire et je l'oriente vers les bons relais si nécessaire.", score: 2}
          ]
        },
        {
          text: "Un collaborateur vous demande de ne rien dire à personne d'une situation difficile qu'il traverse. Que faites-vous ?",
          answers: [
          {text: "Je respecte sa demande totalement.", score: 0},
          {text: "Je lui promets la confidentialité et respecte cela.", score: 1},
          {text: "Je l'écoute, lui explique ce que je peux et ne peux pas garder pour moi selon la gravité, et je prends une décision responsable.", score: 2}
          ]
        },
        {
          text: "Vous intervenez sur la situation d'un collaborateur et vous réalisez que ça dépasse vos compétences. Que faites-vous ?",
          answers: [
          {text: "Je continue à gérer — c'est mon rôle de manager.", score: 0},
          {text: "Je lui suggère de consulter un médecin.", score: 1},
          {text: "Je passe clairement la main au bon interlocuteur (médecin du travail, RH) en lui expliquant pourquoi.", score: 2}
          ]
        }
    ],
    2: [
        {
          text: "Vous voulez orienter un collaborateur vers le médecin du travail mais il vit cela comme une mise à l'écart. Que faites-vous ?",
          answers: [
          {text: "Je renonce — il n'est pas prêt.", score: 0},
          {text: "Je lui explique que c'est obligatoire.", score: 1},
          {text: "Je lui explique le rôle du médecin du travail et en quoi c'est une ressource pour lui, pas une sanction.", score: 2}
          ]
        },
        {
          text: "Vous avez des doutes sur un collaborateur mais vous ne voulez pas le stigmatiser en intervenant trop tôt. Que faites-vous ?",
          answers: [
          {text: "J'attends d'être certain.", score: 0},
          {text: "J'observe plus attentivement.", score: 1},
          {text: "Je trouve une façon d'ouvrir la discussion sans poser de diagnostic, de façon naturelle et factuelle.", score: 2}
          ]
        },
        {
          text: "Le service RH que vous devriez solliciter n'est pas facilement accessible. Que faites-vous ?",
          answers: [
          {text: "Je gère seul.", score: 0},
          {text: "Je cherche une autre personne de confiance.", score: 1},
          {text: "Je cherche le bon canal formel et j'insiste pour accéder aux ressources nécessaires.", score: 2}
          ]
        },
        {
          text: "Votre propre hiérarchie vous dit de ne pas trop chercher à comprendre les difficultés personnelles des collaborateurs. Que faites-vous ?",
          answers: [
          {text: "Je suis la consigne — je ne veux pas créer de conflit.", score: 0},
          {text: "Je continue discrètement à être attentif.", score: 1},
          {text: "Je défends ma vision de ce qu'implique mon rôle et j'explique en quoi ignorer ces signaux a des conséquences.", score: 2}
          ]
        },
        {
          text: "Vous avez orienté un collaborateur vers un soutien externe mais il ne s'y est pas rendu. Que faites-vous ?",
          answers: [
          {text: "Je laisse — c'est son choix.", score: 0},
          {text: "Je lui redemande d'y aller.", score: 1},
          {text: "Je comprends ce qui l'a empêché d'y aller et je cherche à lever les obstacles avec lui.", score: 2}
          ]
        }
    ],
    3: [
        {
          text: "L'organisation de votre équipe génère structurellement de la surcharge. Que faites-vous au-delà de gérer les symptômes individuels ?",
          answers: [
          {text: "Je gère les cas au fil de l'eau.", score: 0},
          {text: "Je remonte la situation à ma hiérarchie.", score: 1},
          {text: "Je construis une analyse factuelle des causes organisationnelles et demande une décision sur la structure.", score: 2}
          ]
        },
        {
          text: "Votre équipe a des objectifs qui conduisent mécaniquement à des situations de surcharge. Que faites-vous ?",
          answers: [
          {text: "J'aide chacun à s'organiser mieux.", score: 0},
          {text: "J'en parle à ma hiérarchie.", score: 1},
          {text: "Je formalise le lien entre objectifs et surcharge et demande un arbitrage sur les objectifs eux-mêmes.", score: 2}
          ]
        },
        {
          text: "Vous vous rendez compte que vous n'avez pas les connaissances suffisantes pour détecter les signaux de RPS correctement. Que faites-vous ?",
          answers: [
          {text: "Je fais de mon mieux avec ce que je sais.", score: 0},
          {text: "Je cherche des informations en ligne.", score: 1},
          {text: "Je demande une formation ou un appui à ma hiérarchie ou aux RH.", score: 2}
          ]
        },
        {
          text: "Vous constatez que les alertes RPS dans votre équipe se multiplient et que les ressources disponibles sont insuffisantes. Que faites-vous ?",
          answers: [
          {text: "Je gère avec ce que j'ai.", score: 0},
          {text: "J'en informe les RH.", score: 1},
          {text: "Je construis un argumentaire factuel pour demander des ressources supplémentaires adaptées.", score: 2}
          ]
        },
        {
          text: "Vous avez géré plusieurs situations difficiles de RPS en peu de temps. Vous êtes vous-même épuisé. Que faites-vous ?",
          answers: [
          {text: "Je continue — les collaborateurs ont besoin de moi.", score: 0},
          {text: "Je cherche à déléguer certaines responsabilités.", score: 1},
          {text: "Je cherche un soutien pour moi-même : ma hiérarchie, les RH, ou un professionnel.", score: 2}
          ]
        }
    ],
  },

  }); // fin Object.assign CUSTOM_QUESTIONS

  // ─────────────────────────────────────────────────────────────────────────
  //  ENREGISTREMENT DU DOMAINE
  // ─────────────────────────────────────────────────────────────────────────

  window.ITS_registerTheme("qvt-rps", "QVT & RPS", "🌿", [
    ["rps-signaux-faibles",    "Repérer les signaux faibles de RPS",          "Tous publics",          "Identifier les tensions, alertes et situations d'isolement dans le quotidien professionnel.",                                                                     T.qvtRps],
    ["charge-priorites",       "Charge de travail et priorisation",           "Tous publics",          "Prendre du recul sur l'urgence, les arbitrages et les limites soutenables.",                                                                                      T.qvtRps],
    ["cooperation-climat",     "Coopération et climat de travail",            "Collaborateurs",        "Agir dans les irritants du quotidien, désamorcer et préserver la qualité relationnelle.",                                                                         T.qvtRps],
    ["manager-qvt-rps",        "Manager la charge et les tensions d'équipe",  "Managers",              "Identifier, réguler et orienter sans porter seul les situations sensibles.",                                                                                       T.qvtRps],
    ["teletravail-hybridation","Télétravail et travail hybride",              "Collaborateurs",        "Organiser sa présence à distance, maintenir le lien collectif et gérer les irritants de l'hybridation.",                                                          T.qvtTeletravail],
    ["epuisement-prevention",  "Prévenir l'épuisement professionnel",        "Collaborateurs",        "Reconnaître ses signaux d'alerte, réguler sa charge dans la durée et oser chercher un appui.",                                                                    T.qvtEpuisement],
    ["retour-apres-absence",   "Reprendre le travail après une absence",      "Tous publics",          "Préparer son retour, réintégrer son collectif et calibrer la reprise en charge sans surcompenser.",                                                               T.qvtRetourAbsence],
    ["manager-signaux-rps",    "Détecter et orienter sans psychologiser",     "Managers / Encadrants", "Repérer les signaux faibles, intervenir sur le travail et orienter vers les bons relais sans se substituer aux spécialistes.",                                    T.qvtManagerSignaux]
  ]);

})();
