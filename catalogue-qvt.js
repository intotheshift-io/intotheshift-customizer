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

  "cooperation-climat": {
    0: [
        {
          text: "Vous ressentez une atmosphère moins agréable dans votre équipe depuis une décision récente que certains ont mal vécue. Que faites-vous ?",
          answers: [
          {text: "J'attends que ça passe.", score: 0},
          {text: "J'exprime ma propre opinion sur la décision.", score: 1},
          {text: "Je cherche à créer un espace où les ressentis peuvent être exprimés de façon constructive.", score: 2}
          ]
        },
        {
          text: "Deux collègues ne se parlent plus depuis un désaccord la semaine dernière. L'équipe fait comme si de rien n'était. Que faites-vous ?",
          answers: [
          {text: "Je m'aligne sur la norme collective : on n'en parle pas.", score: 0},
          {text: "Je parle à l'un d'eux discrètement.", score: 1},
          {text: "Je propose à l'équipe un moment pour clarifier la situation.", score: 2}
          ]
        },
        {
          text: "Lors d'une réunion, quelqu'un fait une remarque qui blesse visiblement un collègue mais tout le monde continue comme si rien ne s'était passé. Que faites-vous ?",
          answers: [
          {text: "Je continue aussi — ce n'est pas le moment de créer un incident.", score: 0},
          {text: "Je vérifie que mon collègue va bien après la réunion.", score: 1},
          {text: "Je nomme ce que j'ai observé dans le moment, de façon factuelle et calme.", score: 2}
          ]
        },
        {
          text: "Le ton des échanges dans votre équipe est devenu de plus en plus sec et formel depuis quelques semaines. Que faites-vous ?",
          answers: [
          {text: "Je m'adapte au ton du groupe.", score: 0},
          {text: "Je continue à être chaleureux dans mes propres échanges.", score: 1},
          {text: "Je propose un moment informel pour recréer du lien.", score: 2}
          ]
        },
        {
          text: "Vous constatez qu'une personne de votre équipe est régulièrement mise à l'écart des échanges informels. Que faites-vous ?",
          answers: [
          {text: "Ce n'est pas mon rôle de gérer ça.", score: 0},
          {text: "Je l'inclus dans mes propres échanges.", score: 1},
          {text: "J'essaie de comprendre ce qui crée cette mise à l'écart et agis en conséquence.", score: 2}
          ]
        }
    ],
    1: [
        {
          text: "Vous avez un désaccord professionnel avec un collègue qui devient un peu personnel. Que faites-vous ?",
          answers: [
          {text: "Je maintiens ma position sans me préoccuper du relationnel.", score: 0},
          {text: "Je recule pour préserver la relation.", score: 1},
          {text: "Je cherche à séparer le désaccord professionnel de la relation personnelle et à traiter les deux.", score: 2}
          ]
        },
        {
          text: "Un membre de l'équipe qui a du retard rejette la faute sur les autres en réunion. L'accusation est injuste. Que faites-vous ?",
          answers: [
          {text: "Je ne réagis pas — pas la peine de créer un conflit.", score: 0},
          {text: "Je rectifie les faits calmement.", score: 1},
          {text: "Je rectifie les faits et propose de traiter le problème de fond ensemble.", score: 2}
          ]
        },
        {
          text: "Vous réalisez que vous avez contribué à une tension avec un collègue par une réaction un peu sèche. Que faites-vous ?",
          answers: [
          {text: "J'attends que ça se passe tout seul.", score: 0},
          {text: "Je lui dis que je n'avais pas l'intention d'être sec.", score: 1},
          {text: "Je reviens vers lui pour reconnaître ma réaction et m'assurer que ça n'a pas affecté notre relation de travail.", score: 2}
          ]
        },
        {
          text: "Une décision collective a été prise mais vous n'y adhérez pas vraiment. Que faites-vous ?",
          answers: [
          {text: "Je fais semblant d'adhérer pour que ça avance.", score: 0},
          {text: "Je continue à défendre ma position après la décision.", score: 1},
          {text: "Je m'engage à appliquer la décision tout en gardant un espace pour faire remonter mon point de vue par les voies appropriées.", score: 2}
          ]
        },
        {
          text: "Votre équipe a du mal à prendre des décisions collectives : les réunions tournent en rond. Que faites-vous ?",
          answers: [
          {text: "Je laisse les choses se décanter naturellement.", score: 0},
          {text: "Je prends la main et impose une décision.", score: 1},
          {text: "Je propose une méthode pour structurer la prise de décision et avancer.", score: 2}
          ]
        }
    ],
    2: [
        {
          text: "Les échanges dans votre équipe restent très superficiels. Les vrais problèmes ne sont jamais nommés. Que faites-vous ?",
          answers: [
          {text: "Je m'accommode — c'est le style de l'équipe.", score: 0},
          {text: "Je pose les vrais sujets quand l'occasion se présente.", score: 1},
          {text: "Je propose un espace dédié pour que les sujets de fond puissent être abordés.", score: 2}
          ]
        },
        {
          text: "Une friction récurrente entre deux personnes de l'équipe nuit à la qualité du travail. Tout le monde le sait mais personne n'intervient. Que faites-vous ?",
          answers: [
          {text: "Je laisse les managers gérer.", score: 0},
          {text: "Je parle à chacun séparément pour les aider.", score: 1},
          {text: "Je nomme la situation à l'équipe ou au responsable selon le contexte et propose d'y travailler.", score: 2}
          ]
        },
        {
          text: "Un bon résultat collectif n'est pas reconnu. Les personnes qui ont contribué semblent déçues. Que faites-vous ?",
          answers: [
          {text: "C'est à la hiérarchie de reconnaître — pas à moi.", score: 0},
          {text: "Je félicite mes proches collaborateurs.", score: 1},
          {text: "Je cherche à rendre visible la contribution collective, à mon niveau.", score: 2}
          ]
        },
        {
          text: "Votre équipe a tendance à se plaindre collectivement mais sans jamais chercher à changer les choses. Que faites-vous ?",
          answers: [
          {text: "Je me plains avec eux — ça aide à évacuer.", score: 0},
          {text: "Je ne me plains pas mais je n'interviens pas non plus.", score: 1},
          {text: "Je cherche à transformer les plaintes en problèmes à résoudre.", score: 2}
          ]
        },
        {
          text: "Vous observez que certains membres de l'équipe font plus d'efforts que d'autres. L'inégalité crée des tensions silencieuses. Que faites-vous ?",
          answers: [
          {text: "Ce n'est pas mon problème à régler.", score: 0},
          {text: "J'en parle à mon responsable.", score: 1},
          {text: "J'essaie de comprendre les causes de cet écart et d'agir à mon niveau sur ce qui est de mon ressort.", score: 2}
          ]
        }
    ],
    3: [
        {
          text: "Un conflit dans l'équipe dépasse ce que vous pouvez gérer seul. Que faites-vous ?",
          answers: [
          {text: "Je tente encore de gérer de mon côté.", score: 0},
          {text: "J'en informe le responsable.", score: 1},
          {text: "Je remonte la situation clairement et demande un soutien approprié — RH, médiation, responsable.", score: 2}
          ]
        },
        {
          text: "Votre équipe traverse une crise et vous vous sentez seul à essayer de maintenir le cap. Que faites-vous ?",
          answers: [
          {text: "Je continue à porter le collectif de mon mieux.", score: 0},
          {text: "Je cherche du soutien auprès d'un collègue de confiance.", score: 1},
          {text: "Je cherche un appui adapté — responsable, RH — pour ne pas porter seul une situation qui dépasse mon périmètre.", score: 2}
          ]
        },
        {
          text: "Vous réalisez que le problème de coopération dans votre équipe est lié à un problème organisationnel plus profond (rôles flous, objectifs contradictoires). Que faites-vous ?",
          answers: [
          {text: "Je m'adapte — je ne peux pas changer l'organisation.", score: 0},
          {text: "J'en parle à mon responsable.", score: 1},
          {text: "Je formule clairement l'analyse et la remonte pour que les causes structurelles soient traitées.", score: 2}
          ]
        },
        {
          text: "Une personne de votre équipe vous confie être épuisée et penser à s'arrêter. Que faites-vous ?",
          answers: [
          {text: "Je l'écoute et lui dis que tout le monde traverse des phases difficiles.", score: 0},
          {text: "Je lui conseille de prendre des vacances.", score: 1},
          {text: "Je l'écoute vraiment, l'encourage à chercher un soutien professionnel et, avec son accord, en informe le responsable.", score: 2}
          ]
        },
        {
          text: "Vous avez été le relais d'un problème de l'équipe auprès de la hiérarchie et rien n'a changé. Votre crédibilité en souffre. Que faites-vous ?",
          answers: [
          {text: "Je cesse d'être le relais — c'est trop risqué.", score: 0},
          {text: "Je continue mais je préviens l'équipe que les changements prennent du temps.", score: 1},
          {text: "Je relance la hiérarchie avec des éléments plus précis et plus concrets sur les conséquences de l'inaction.", score: 2}
          ]
        }
    ],
  },

  "manager-qvt-rps": {
    0: [
        {
          text: "Un membre de votre équipe a un comportement inhabituel depuis quelques jours : moins disponible, plus irritable, travail moins soigné. Que faites-vous ?",
          answers: [
          {text: "J'attends de voir si c'est passager.", score: 0},
          {text: "Je lui demande directement si tout va bien.", score: 1},
          {text: "Je crée une occasion naturelle d'échange en dehors du flux habituel de travail.", score: 2}
          ]
        },
        {
          text: "Deux membres de votre équipe sont en tension ouverte. L'ambiance générale en pâtit. Que faites-vous ?",
          answers: [
          {text: "Je les laisse régler ça entre eux.", score: 0},
          {text: "Je parle à chacun séparément pour les calmer.", score: 1},
          {text: "Je rencontre chacun, comprends les enjeux et propose un cadre pour traiter le problème.", score: 2}
          ]
        },
        {
          text: "Lors d'une réunion d'équipe, le silence sur un sujet sensible est éloquent. Personne ne s'exprime. Que faites-vous ?",
          answers: [
          {text: "Je passe au point suivant — le silence signifie accord.", score: 0},
          {text: "Je pose une question ouverte pour relancer.", score: 1},
          {text: "Je nomme le silence et crée les conditions pour que les personnes puissent s'exprimer si elles le souhaitent.", score: 2}
          ]
        },
        {
          text: "Vous constatez qu'un collaborateur très impliqué ne délègue rien et accumule. Il dit que tout va bien. Que faites-vous ?",
          answers: [
          {text: "Je le laisse gérer — il est adulte.", score: 0},
          {text: "Je lui propose de l'aide ponctuellement.", score: 1},
          {text: "J'ouvre un échange sur sa charge réelle et l'aide à réfléchir à comment mieux répartir.", score: 2}
          ]
        },
        {
          text: "Un membre de l'équipe fait régulièrement des heures supplémentaires non demandées. Que faites-vous ?",
          answers: [
          {text: "Je ne dis rien — si c'est son choix, c'est son droit.", score: 0},
          {text: "Je lui dis que ce n'est pas nécessaire.", score: 1},
          {text: "Je comprends pourquoi il fait ces heures et j'agis sur les causes si elles sont organisationnelles.", score: 2}
          ]
        }
    ],
    1: [
        {
          text: "Votre équipe est en surcharge depuis trois semaines. Vous attendez une décision de la direction pour alléger. Elle n'arrive pas. Que faites-vous ?",
          answers: [
          {text: "J'attends la décision — je ne peux rien faire seul.", score: 0},
          {text: "Je protège mes collaborateurs des sollicitations les plus évitables.", score: 1},
          {text: "Je prends des mesures provisoires à mon niveau ET je remonte avec insistance le besoin de décision.", score: 2}
          ]
        },
        {
          text: "Vous devez donner une charge supplémentaire à quelqu'un de votre équipe déjà chargée. Que faites-vous ?",
          answers: [
          {text: "Je lui donne — c'est la meilleure personne pour cette tâche.", score: 0},
          {text: "Je lui explique que c'est temporaire et important.", score: 1},
          {text: "J'explique le contexte, je donne la tâche ET je retrace avec lui ce qui peut être décalé ou délégué pour compenser.", score: 2}
          ]
        },
        {
          text: "Un projet est en retard et vous devez demander un effort supplémentaire à votre équipe. Comment le faites-vous ?",
          answers: [
          {text: "Je leur dis simplement ce qui est attendu.", score: 0},
          {text: "Je leur explique pourquoi c'est important.", score: 1},
          {text: "J'explique pourquoi, je reconnais l'effort demandé et je cherche avec eux ce qui peut être allégé ailleurs.", score: 2}
          ]
        },
        {
          text: "Votre équipe travaille sous pression depuis longtemps sans reconnaissance visible. Que faites-vous ?",
          answers: [
          {text: "Ce n'est pas mon rôle de compenser les silences de la direction.", score: 0},
          {text: "Je les remercie personnellement.", score: 1},
          {text: "Je cherche à rendre visible leur travail auprès de la direction ET je leur témoigne ma reconnaissance directement.", score: 2}
          ]
        },
        {
          text: "Vous réalisez que certains membres de votre équipe portent une charge invisible (coordination, soutien aux autres) non reconnue. Que faites-vous ?",
          answers: [
          {text: "Je laisse passer — cette charge fait partie du travail en équipe.", score: 0},
          {text: "Je les remercie en privé.", score: 1},
          {text: "Je rends cette contribution visible, la nomme collectivement et cherche à équilibrer la charge si elle est excessive.", score: 2}
          ]
        }
    ],
    2: [
        {
          text: "Un collaborateur a un conflit avec un autre service. Il vous demande d'intervenir. Que faites-vous ?",
          answers: [
          {text: "Je l'envoie gérer seul — il est adulte.", score: 0},
          {text: "Je l'écoute et interviens à sa demande.", score: 1},
          {text: "Je comprends les enjeux, évalue si mon intervention est la bonne réponse et agis en conséquence.", score: 2}
          ]
        },
        {
          text: "Un collaborateur exprime ouvertement qu'il n'est plus motivé. Que faites-vous ?",
          answers: [
          {text: "Je lui rappelle ses obligations professionnelles.", score: 0},
          {text: "Je cherche à comprendre ce qui ne va pas.", score: 1},
          {text: "Je crée un vrai espace d'échange sur ses attentes, ses difficultés et les marges de manœuvre disponibles.", score: 2}
          ]
        },
        {
          text: "Lors d'un entretien individuel, un collaborateur évoque des tensions avec un collègue. Que faites-vous ?",
          answers: [
          {text: "Je note l'information et passe à autre chose.", score: 0},
          {text: "Je lui demande de gérer directement avec l'autre personne.", score: 1},
          {text: "J'explore le sujet pour comprendre si c'est une tension ponctuelle ou quelque chose qui doit être traité.", score: 2}
          ]
        },
        {
          text: "Vous êtes vous-même sous pression et ne vous sentez pas en état d'accompagner votre équipe comme vous le souhaiteriez. Que faites-vous ?",
          answers: [
          {text: "Je gère les deux en parallèle — c'est mon rôle.", score: 0},
          {text: "Je priorise l'équipe et je gère ma propre charge après.", score: 1},
          {text: "Je cherche du soutien pour ma propre situation ET j'adapte mon disponibilité à ce qui est réellement tenable.", score: 2}
          ]
        },
        {
          text: "Un collaborateur demande une mutation interne parce qu'il ne se sent plus bien dans l'équipe. Que faites-vous ?",
          answers: [
          {text: "Je l'aide dans sa démarche — s'il veut partir, c'est son choix.", score: 0},
          {text: "Je cherche à le retenir.", score: 1},
          {text: "Je comprends les raisons profondes, cherche si quelque chose est réparable ET respecte sa décision si ce n'est pas le cas.", score: 2}
          ]
        }
    ],
    3: [
        {
          text: "Un collaborateur en souffrance vous demande de garder la situation confidentielle. Vous êtes préoccupé. Que faites-vous ?",
          answers: [
          {text: "Je respecte sa demande — la confidentialité est sacrée.", score: 0},
          {text: "Je lui dis que je dois en parler à quelqu'un.", score: 1},
          {text: "J'évalue la gravité de la situation et agis en conséquence, en lui expliquant clairement ce que je peux et ne peux pas garder pour moi.", score: 2}
          ]
        },
        {
          text: "Vous pensez qu'un collaborateur a besoin d'un soutien psychologique mais il refuse toute aide. Que faites-vous ?",
          answers: [
          {text: "Je respecte son refus.", score: 0},
          {text: "Je continue à insister pour l'aider.", score: 1},
          {text: "Je reste disponible, lui laisse l'information sur ce qui existe et, si la situation se dégrade, je consulte les RH ou le médecin du travail.", score: 2}
          ]
        },
        {
          text: "Votre propre hiérarchie minimise les signaux de mal-être que vous remontez sur votre équipe. Que faites-vous ?",
          answers: [
          {text: "Je cesse de remonter — inutile d'insister.", score: 0},
          {text: "Je continue à remonter informellement.", score: 1},
          {text: "Je documente les signaux et les remonte formellement, en demandant une position claire.", score: 2}
          ]
        },
        {
          text: "Un membre de l'équipe est en arrêt depuis plusieurs semaines. L'équipe n'en parle pas mais c'est présent. Que faites-vous ?",
          answers: [
          {text: "Je laisse les choses se dérouler naturellement.", score: 0},
          {text: "Je prépare son retour quand il sera prêt.", score: 1},
          {text: "Je prépare les conditions du retour ET je gère l'absence de façon équitable et transparente avec le reste de l'équipe.", score: 2}
          ]
        },
        {
          text: "Votre équipe accumule des signaux de fatigue collective depuis des mois. Vous êtes convaincu qu'une décision organisationnelle est nécessaire. Que faites-vous ?",
          answers: [
          {text: "J'attends — les décisions organisationnelles ne dépendent pas de moi.", score: 0},
          {text: "Je remonte le problème.", score: 1},
          {text: "Je construis un argumentaire factuel et demande une décision formelle avec des délais clairs.", score: 2}
          ]
        }
    ],
  },

  "teletravail-hybridation": {
    0: [
        {
          text: "En télétravail, vous finissez régulièrement votre journée deux heures après l'horaire habituel sans que rien ne l'exige vraiment. Que faites-vous ?",
          answers: [
          {text: "Je profite de l'absence de transport pour travailler plus.", score: 0},
          {text: "Je remarque le phénomène mais ne change pas mes habitudes.", score: 1},
          {text: "Je pose des limites horaires claires et les tiens comme si j'étais au bureau.", score: 2}
          ]
        },
        {
          text: "Votre espace de télétravail n'est pas adapté (bruit, manque de lumière, espace insuffisant). Que faites-vous ?",
          answers: [
          {text: "Je m'adapte — c'est temporaire.", score: 0},
          {text: "Je signale le problème à mon responsable.", score: 1},
          {text: "Je cherche une solution concrète (autre lieu, équipement) et informe mon responsable des contraintes.", score: 2}
          ]
        },
        {
          text: "Vous avez du mal à démarrer la journée en télétravail — vous repoussez les tâches et perdez du temps le matin. Que faites-vous ?",
          answers: [
          {text: "J'attends d'être dans l'élan.", score: 0},
          {text: "Je commence par les tâches les plus faciles pour démarrer.", score: 1},
          {text: "Je mets en place un rituel de démarrage pour structurer ma journée à distance.", score: 2}
          ]
        },
        {
          text: "Les notifications de vos outils de travail vous distraient en permanence en télétravail. Que faites-vous ?",
          answers: [
          {text: "Je les laisse actives — je dois être disponible.", score: 0},
          {text: "Je les coupe pendant mes plages de travail focalisé.", score: 1},
          {text: "J'organise ma disponibilité de façon explicite et j'informe mon équipe de mes plages de concentration.", score: 2}
          ]
        },
        {
          text: "En fin de semaine de télétravail, vous réalisez que vous avez encore moins bien récupéré que lors des semaines au bureau. Que faites-vous ?",
          answers: [
          {text: "J'accepte — le télétravail est plus fatiguant pour moi.", score: 0},
          {text: "Je cherche à faire plus de pauses.", score: 1},
          {text: "J'analyse ce qui génère cette fatigue supplémentaire et cherche à modifier mes habitudes.", score: 2}
          ]
        }
    ],
    1: [
        {
          text: "En semaine entièrement à distance, vous n'avez eu aucun échange informel avec vos collègues. Que faites-vous ?",
          answers: [
          {text: "Je me concentre sur le travail — les échanges informels ne sont pas prioritaires.", score: 0},
          {text: "Je profite d'une réunion pour glisser un échange informel.", score: 1},
          {text: "Je crée délibérément des occasions d'échange informel avec mes collègues.", score: 2}
          ]
        },
        {
          text: "Vous avez l'impression de passer sous le radar en télétravail. Votre travail n'est pas visible. Que faites-vous ?",
          answers: [
          {text: "Je travaille plus pour compenser.", score: 0},
          {text: "J'en parle à mon responsable.", score: 1},
          {text: "Je prends des initiatives pour rendre mon travail visible sans avoir besoin de me sur-justifier.", score: 2}
          ]
        },
        {
          text: "Lors d'une réunion hybride, les participants à distance n'ont pas accès aux mêmes informations que ceux en présentiel (tableau, conversations de couloir). Que faites-vous ?",
          answers: [
          {text: "J'essaie de suivre du mieux que je peux.", score: 0},
          {text: "Je demande à quelqu'un de retranscrire les informations importantes.", score: 1},
          {text: "Je nomme le problème et propose une organisation qui équilibre la participation entre présents et distants.", score: 2}
          ]
        },
        {
          text: "Vous êtes à distance et votre équipe prend des décisions sans vous lors de réunions informelles au bureau. Que faites-vous ?",
          answers: [
          {text: "J'accepte — ce n'est pas évitable.", score: 0},
          {text: "Je demande à être tenu informé.", score: 1},
          {text: "Je propose un cadre de décision qui inclut explicitement les personnes à distance.", score: 2}
          ]
        },
        {
          text: "Vous sentez que votre engagement est moins perceptible depuis que vous êtes davantage à distance. Que faites-vous ?",
          answers: [
          {text: "J'envoie plus de messages pour montrer que je travaille.", score: 0},
          {text: "J'en parle à mon responsable.", score: 1},
          {text: "Je cherche à contribuer de façon visible sur les sujets importants sans surinvestir en quantité.", score: 2}
          ]
        }
    ],
    2: [
        {
          text: "En mode hybride, vous constatez que certains échanges se passent en français pour les présents et en anglais pour les distants — métaphoriquement : deux niveaux d'information. Que faites-vous ?",
          answers: [
          {text: "Je m'adapte — c'est inévitable.", score: 0},
          {text: "Je mets en place mes propres canaux d'information.", score: 1},
          {text: "Je propose que les canaux de communication soient uniformisés pour que tout le monde ait le même niveau d'accès.", score: 2}
          ]
        },
        {
          text: "Vous avez du mal à vous faire entendre lors des réunions hybrides. Votre temps de parole est réduit. Que faites-vous ?",
          answers: [
          {text: "Je fais des efforts pour m'imposer.", score: 0},
          {text: "Je compense en envoyant mes contributions par écrit.", score: 1},
          {text: "Je nomme le problème en réunion et propose des ajustements de format.", score: 2}
          ]
        },
        {
          text: "Les messages écrits dans vos outils collaboratifs sont souvent mal interprétés par rapport à ce que vous souhaitiez dire. Que faites-vous ?",
          answers: [
          {text: "Je fais plus attention à la formulation.", score: 0},
          {text: "Je passe au téléphone quand les sujets sont sensibles.", score: 1},
          {text: "Je réfléchis à quels sujets méritent un échange oral et lesquels peuvent rester à l'écrit, et j'adapte.", score: 2}
          ]
        },
        {
          text: "Un désaccord naît par message interposé et s'emballe. Que faites-vous ?",
          answers: [
          {text: "Je continue à argumenter par écrit pour clarifier ma position.", score: 0},
          {text: "Je propose de faire un point téléphonique.", score: 1},
          {text: "Je stoppe l'échange écrit et propose un appel rapide pour clarifier de vive voix.", score: 2}
          ]
        },
        {
          text: "Vous réalisez que vous passez votre journée à répondre à des messages en temps réel et n'avancez plus sur vos sujets de fond. Que faites-vous ?",
          answers: [
          {text: "Je réponds en temps réel — c'est ce qu'on attend de moi.", score: 0},
          {text: "Je coupe les notifications par moments.", score: 1},
          {text: "Je clarifie avec mon équipe mes temps de disponibilité et mes plages de travail focalisé.", score: 2}
          ]
        }
    ],
    3: [
        {
          text: "L'organisation hybride crée des tensions entre ceux qui viennent souvent et ceux qui viennent peu. Que faites-vous ?",
          answers: [
          {text: "Je ne dis rien — ce n'est pas mon rôle de gérer les frustrations des autres.", score: 0},
          {text: "Je pose la question à mon responsable.", score: 1},
          {text: "Je nomme le sujet et propose un échange collectif sur les attentes et les règles du jeu.", score: 2}
          ]
        },
        {
          text: "Vous n'arrivez pas à déconnecter le week-end à cause des outils collaboratifs accessibles en permanence. Que faites-vous ?",
          answers: [
          {text: "Je reste connecté — c'est la réalité du travail aujourd'hui.", score: 0},
          {text: "Je désactive les notifications le week-end.", score: 1},
          {text: "Je pose des règles claires de disponibilité et les communique à mon entourage professionnel.", score: 2}
          ]
        },
        {
          text: "Un collègue vous sollicite régulièrement en dehors des heures de travail via les outils collaboratifs. Que faites-vous ?",
          answers: [
          {text: "Je réponds — il a peut-être une bonne raison.", score: 0},
          {text: "Je réponds quand je le veux mais sans explication.", score: 1},
          {text: "Je lui explique mes règles de disponibilité et cherche à comprendre pourquoi il contacte en dehors des heures habituelles.", score: 2}
          ]
        },
        {
          text: "L'organisation hybride génère chez vous un sentiment de ne jamais être vraiment ni au bureau ni chez vous. Que faites-vous ?",
          answers: [
          {text: "J'accepte — c'est le prix du télétravail.", score: 0},
          {text: "Je cherche à mieux séparer les deux environnements.", score: 1},
          {text: "J'analyse ce qui crée ce flou et cherche à construire des rituels qui délimitent clairement les deux espaces.", score: 2}
          ]
        },
        {
          text: "Vous vous sentez moins bien dans l'équipe depuis que l'organisation hybride est en place. Le lien est moins fort. Que faites-vous ?",
          answers: [
          {text: "J'attends que les choses s'arrangent.", score: 0},
          {text: "J'en parle à quelqu'un de confiance.", score: 1},
          {text: "Je l'exprime à mon équipe ou à mon responsable et propose des pistes pour recréer du lien.", score: 2}
          ]
        }
    ],
  },

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
