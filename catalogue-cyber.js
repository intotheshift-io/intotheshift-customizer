/**
 * catalogue-cyber.js — INTO THE SHIFT
 * Domaine : Cybersécurité
 *
 * Dépend de : catalogue-core.js
 */

(function () {
  var T = window._ITS_CORE.templates;

  // ─────────────────────────────────────────────────────────────────────────
  //  QUESTIONS RÉDIGÉES — CYBERSÉCURITÉ
  // ─────────────────────────────────────────────────────────────────────────

  Object.assign(window.CUSTOM_QUESTIONS, {

  "phishing-manipulation": {
    0: [
      {
        type: "choix",
        text: "Vous recevez un mail de votre banque professionnelle vous demandant de confirmer vos identifiants de connexion suite à une 'mise à jour de sécurité'. L'adresse expéditrice ressemble à celle de votre banque mais avec une lettre en plus dans le domaine.",
        tags: ["phishing", "détection"],
        answers: [
          { text: "Je clique sur le lien et je vérifie mes identifiants pour être sûr que mon compte est sécurisé.", score: 0 },
          { text: "Je contacte directement ma banque par le numéro officiel pour signaler ce mail.", score: 2 },
          { text: "Je transfère le mail à mon équipe informatique avant de faire quoi que ce soit.", score: 2 },
          { text: "Je supprime le mail — une banque ne demande jamais ça, ce n'est pas la peine de signaler.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous reconnaissez les tentatives grossières mais les plus élaborées passent encore", desc: "Le phishing évident avec fautes d'orthographe et domaine bizarre, vous le repérez. Mais le mail avec le logo correct, l'adresse presque identique et une demande urgente plausible — celui-là passe encore. Les attaques modernes sont construites avec des informations réelles sur vous et votre entreprise. Le signe le plus fiable reste la demande d'action urgente combinée à une pression de ne pas en parler." },
          moyen: { label: "Pratiques en développement", titre: "Vous détectez la plupart des tentatives mais les scénarios sophistiqués avec contexte réel vous mettent encore en difficulté", desc: "Vous vérifiez les liens avant de cliquer, vous utilisez les canaux officiels pour les demandes sensibles. Mais quand l'adresse est presque correcte, quand la pièce jointe vient d'un contact habituel avec un nom de fichier plausible, quand la demande s'inscrit dans une activité normale : le doute peut encore ne pas s'activer. L'enjeu est de traiter chaque message inattendu qui demande une action comme potentiellement suspect, quelle que soit son apparence." },
          haut: { label: "Réflexes installés", titre: "Vous détectez les tentatives y compris les plus élaborées et vous vérifiez systématiquement par un canal indépendant", desc: "Vous ne cliquez pas sur les liens des mails mais vous reconnectez directement sur le site. Vous rappelez sur le numéro officiel connu, pas sur le numéro fourni dans le message. Vous vérifiez auprès du collègue par un autre canal avant d'ouvrir la pièce jointe qu'il vous a soi-disant envoyée. Cette discipline de vérification systématique par canal indépendant — qui peut sembler excessive dans les situations bénignes — est exactement ce qui rend les attaques sophistiquées inefficaces." },
        },
      }, 
      {
        type: "choix",
        text: "Un mail signé par votre directeur général vous demande de transférer urgemment une somme sur un compte fournisseur 'pour débloquer un contrat avant ce soir'. Il précise de ne pas en parler aux autres pour l'instant.",
        tags: ["phishing", "urgence"],
        answers: [
          { text: "Je fais le transfert — le DG demande, c'est urgent et il dit de ne pas en parler.", score: 0 },
          { text: "J'appelle directement le DG sur son numéro habituel pour vérifier avant toute action.", score: 2 },
          { text: "Je réponds au mail en demandant plus de détails sur le contrat.", score: 0 },
          { text: "Je transmets à la comptabilité pour qu'elle valide le virement.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous reconnaissez les tentatives grossières mais les plus élaborées passent encore", desc: "Le phishing évident avec fautes d'orthographe et domaine bizarre, vous le repérez. Mais le mail avec le logo correct, l'adresse presque identique et une demande urgente plausible — celui-là passe encore. Les attaques modernes sont construites avec des informations réelles sur vous et votre entreprise. Le signe le plus fiable reste la demande d'action urgente combinée à une pression de ne pas en parler." },
          moyen: { label: "Pratiques en développement", titre: "Vous détectez la plupart des tentatives mais les scénarios sophistiqués avec contexte réel vous mettent encore en difficulté", desc: "Vous vérifiez les liens avant de cliquer, vous utilisez les canaux officiels pour les demandes sensibles. Mais quand l'adresse est presque correcte, quand la pièce jointe vient d'un contact habituel avec un nom de fichier plausible, quand la demande s'inscrit dans une activité normale : le doute peut encore ne pas s'activer. L'enjeu est de traiter chaque message inattendu qui demande une action comme potentiellement suspect, quelle que soit son apparence." },
          haut: { label: "Réflexes installés", titre: "Vous détectez les tentatives y compris les plus élaborées et vous vérifiez systématiquement par un canal indépendant", desc: "Vous ne cliquez pas sur les liens des mails mais vous reconnectez directement sur le site. Vous rappelez sur le numéro officiel connu, pas sur le numéro fourni dans le message. Vous vérifiez auprès du collègue par un autre canal avant d'ouvrir la pièce jointe qu'il vous a soi-disant envoyée. Cette discipline de vérification systématique par canal indépendant — qui peut sembler excessive dans les situations bénignes — est exactement ce qui rend les attaques sophistiquées inefficaces." },
        },
      }, 
      {
        type: "likert",
        text: "Quand vous recevez un message qui crée une urgence et vous demande d'agir vite, vous prenez un temps de recul avant d'agir.",
        tags: ["phishing", "vigilance"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous reconnaissez les tentatives grossières mais les plus élaborées passent encore", desc: "Le phishing évident avec fautes d'orthographe et domaine bizarre, vous le repérez. Mais le mail avec le logo correct, l'adresse presque identique et une demande urgente plausible — celui-là passe encore. Les attaques modernes sont construites avec des informations réelles sur vous et votre entreprise. Le signe le plus fiable reste la demande d'action urgente combinée à une pression de ne pas en parler." },
          moyen: { label: "Pratiques en développement", titre: "Vous détectez la plupart des tentatives mais les scénarios sophistiqués avec contexte réel vous mettent encore en difficulté", desc: "Vous vérifiez les liens avant de cliquer, vous utilisez les canaux officiels pour les demandes sensibles. Mais quand l'adresse est presque correcte, quand la pièce jointe vient d'un contact habituel avec un nom de fichier plausible, quand la demande s'inscrit dans une activité normale : le doute peut encore ne pas s'activer. L'enjeu est de traiter chaque message inattendu qui demande une action comme potentiellement suspect, quelle que soit son apparence." },
          haut: { label: "Réflexes installés", titre: "Vous détectez les tentatives y compris les plus élaborées et vous vérifiez systématiquement par un canal indépendant", desc: "Vous ne cliquez pas sur les liens des mails mais vous reconnectez directement sur le site. Vous rappelez sur le numéro officiel connu, pas sur le numéro fourni dans le message. Vous vérifiez auprès du collègue par un autre canal avant d'ouvrir la pièce jointe qu'il vous a soi-disant envoyée. Cette discipline de vérification systématique par canal indépendant — qui peut sembler excessive dans les situations bénignes — est exactement ce qui rend les attaques sophistiquées inefficaces." },
        },
      }, 
      {
        type: "choix",
        text: "Vous recevez un mail d'un collègue, Thomas, qui vous demande de valider un document partagé en cliquant sur un lien. Thomas vous envoie souvent des fichiers. Le lien pointe vers une URL qui ressemble à OneDrive mais avec un domaine différent.",
        tags: ["phishing", "lien"],
        answers: [
          { text: "Je clique — Thomas m'envoie souvent des fichiers et c'est ressemble à OneDrive.", score: 0 },
          { text: "Je lui envoie un message séparé pour lui demander s'il m'a bien envoyé ce lien.", score: 2 },
          { text: "Je passe la souris sur le lien pour voir l'URL complète avant de décider.", score: 1.5 },
          { text: "Je lui téléphone pour confirmer avant de cliquer.", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous reconnaissez les tentatives grossières mais les plus élaborées passent encore", desc: "Le phishing évident avec fautes d'orthographe et domaine bizarre, vous le repérez. Mais le mail avec le logo correct, l'adresse presque identique et une demande urgente plausible — celui-là passe encore. Les attaques modernes sont construites avec des informations réelles sur vous et votre entreprise. Le signe le plus fiable reste la demande d'action urgente combinée à une pression de ne pas en parler." },
          moyen: { label: "Pratiques en développement", titre: "Vous détectez la plupart des tentatives mais les scénarios sophistiqués avec contexte réel vous mettent encore en difficulté", desc: "Vous vérifiez les liens avant de cliquer, vous utilisez les canaux officiels pour les demandes sensibles. Mais quand l'adresse est presque correcte, quand la pièce jointe vient d'un contact habituel avec un nom de fichier plausible, quand la demande s'inscrit dans une activité normale : le doute peut encore ne pas s'activer. L'enjeu est de traiter chaque message inattendu qui demande une action comme potentiellement suspect, quelle que soit son apparence." },
          haut: { label: "Réflexes installés", titre: "Vous détectez les tentatives y compris les plus élaborées et vous vérifiez systématiquement par un canal indépendant", desc: "Vous ne cliquez pas sur les liens des mails mais vous reconnectez directement sur le site. Vous rappelez sur le numéro officiel connu, pas sur le numéro fourni dans le message. Vous vérifiez auprès du collègue par un autre canal avant d'ouvrir la pièce jointe qu'il vous a soi-disant envoyée. Cette discipline de vérification systématique par canal indépendant — qui peut sembler excessive dans les situations bénignes — est exactement ce qui rend les attaques sophistiquées inefficaces." },
        },
      }, 
      {
        type: "choix",
        text: "Vous recevez une facture en pièce jointe d'un fournisseur avec qui vous travaillez. Le nom du fournisseur est correct mais l'adresse mail de l'expéditeur est légèrement différente de celle habituelle.",
        tags: ["phishing", "pièce jointe"],
        answers: [
          { text: "J'ouvre la pièce jointe — le nom du fournisseur est le bon et ça ressemble à une facture normale.", score: 0 },
          { text: "Je contacte le fournisseur par son numéro habituel pour vérifier avant d'ouvrir.", score: 2 },
          { text: "Je compare avec les mails précédents du même fournisseur pour m'assurer que c'est bien lui.", score: 1 },
          { text: "J'ouvre la pièce jointe en mode protégé pour limiter les risques.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous reconnaissez les tentatives grossières mais les plus élaborées passent encore", desc: "Le phishing évident avec fautes d'orthographe et domaine bizarre, vous le repérez. Mais le mail avec le logo correct, l'adresse presque identique et une demande urgente plausible — celui-là passe encore. Les attaques modernes sont construites avec des informations réelles sur vous et votre entreprise. Le signe le plus fiable reste la demande d'action urgente combinée à une pression de ne pas en parler." },
          moyen: { label: "Pratiques en développement", titre: "Vous détectez la plupart des tentatives mais les scénarios sophistiqués avec contexte réel vous mettent encore en difficulté", desc: "Vous vérifiez les liens avant de cliquer, vous utilisez les canaux officiels pour les demandes sensibles. Mais quand l'adresse est presque correcte, quand la pièce jointe vient d'un contact habituel avec un nom de fichier plausible, quand la demande s'inscrit dans une activité normale : le doute peut encore ne pas s'activer. L'enjeu est de traiter chaque message inattendu qui demande une action comme potentiellement suspect, quelle que soit son apparence." },
          haut: { label: "Réflexes installés", titre: "Vous détectez les tentatives y compris les plus élaborées et vous vérifiez systématiquement par un canal indépendant", desc: "Vous ne cliquez pas sur les liens des mails mais vous reconnectez directement sur le site. Vous rappelez sur le numéro officiel connu, pas sur le numéro fourni dans le message. Vous vérifiez auprès du collègue par un autre canal avant d'ouvrir la pièce jointe qu'il vous a soi-disant envoyée. Cette discipline de vérification systématique par canal indépendant — qui peut sembler excessive dans les situations bénignes — est exactement ce qui rend les attaques sophistiquées inefficaces." },
        },
      }, 
      {
        type: "likert",
        text: "Quand une communication semble venir d'un contact connu mais que quelque chose vous interpelle, vous vérifiez par un canal différent avant d'agir.",
        tags: ["phishing", "vérification"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous reconnaissez les tentatives grossières mais les plus élaborées passent encore", desc: "Le phishing évident avec fautes d'orthographe et domaine bizarre, vous le repérez. Mais le mail avec le logo correct, l'adresse presque identique et une demande urgente plausible — celui-là passe encore. Les attaques modernes sont construites avec des informations réelles sur vous et votre entreprise. Le signe le plus fiable reste la demande d'action urgente combinée à une pression de ne pas en parler." },
          moyen: { label: "Pratiques en développement", titre: "Vous détectez la plupart des tentatives mais les scénarios sophistiqués avec contexte réel vous mettent encore en difficulté", desc: "Vous vérifiez les liens avant de cliquer, vous utilisez les canaux officiels pour les demandes sensibles. Mais quand l'adresse est presque correcte, quand la pièce jointe vient d'un contact habituel avec un nom de fichier plausible, quand la demande s'inscrit dans une activité normale : le doute peut encore ne pas s'activer. L'enjeu est de traiter chaque message inattendu qui demande une action comme potentiellement suspect, quelle que soit son apparence." },
          haut: { label: "Réflexes installés", titre: "Vous détectez les tentatives y compris les plus élaborées et vous vérifiez systématiquement par un canal indépendant", desc: "Vous ne cliquez pas sur les liens des mails mais vous reconnectez directement sur le site. Vous rappelez sur le numéro officiel connu, pas sur le numéro fourni dans le message. Vous vérifiez auprès du collègue par un autre canal avant d'ouvrir la pièce jointe qu'il vous a soi-disant envoyée. Cette discipline de vérification systématique par canal indépendant — qui peut sembler excessive dans les situations bénignes — est exactement ce qui rend les attaques sophistiquées inefficaces." },
        },
      }, 
      {
        type: "choix",
        text: "Vous recevez un appel d'un homme qui se présente comme technicien du support informatique de votre entreprise. Il dit que votre poste a été infecté et qu'il a besoin de votre mot de passe pour intervenir à distance.",
        tags: ["phishing", "appel"],
        answers: [
          { text: "Je lui donne mon mot de passe — le support IT en a besoin pour travailler.", score: 0 },
          { text: "Je lui dis de rappeler dans 5 minutes et je contacte directement le support IT pour confirmer.", score: 2 },
          { text: "Je lui demande son nom et son matricule et je les note avant de donner quoi que ce soit.", score: 0.5 },
          { text: "Je refuse de lui donner mon mot de passe et je lui propose de me rappeler via le ticket officiel.", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous reconnaissez les tentatives grossières mais les plus élaborées passent encore", desc: "Le phishing évident avec fautes d'orthographe et domaine bizarre, vous le repérez. Mais le mail avec le logo correct, l'adresse presque identique et une demande urgente plausible — celui-là passe encore. Les attaques modernes sont construites avec des informations réelles sur vous et votre entreprise. Le signe le plus fiable reste la demande d'action urgente combinée à une pression de ne pas en parler." },
          moyen: { label: "Pratiques en développement", titre: "Vous détectez la plupart des tentatives mais les scénarios sophistiqués avec contexte réel vous mettent encore en difficulté", desc: "Vous vérifiez les liens avant de cliquer, vous utilisez les canaux officiels pour les demandes sensibles. Mais quand l'adresse est presque correcte, quand la pièce jointe vient d'un contact habituel avec un nom de fichier plausible, quand la demande s'inscrit dans une activité normale : le doute peut encore ne pas s'activer. L'enjeu est de traiter chaque message inattendu qui demande une action comme potentiellement suspect, quelle que soit son apparence." },
          haut: { label: "Réflexes installés", titre: "Vous détectez les tentatives y compris les plus élaborées et vous vérifiez systématiquement par un canal indépendant", desc: "Vous ne cliquez pas sur les liens des mails mais vous reconnectez directement sur le site. Vous rappelez sur le numéro officiel connu, pas sur le numéro fourni dans le message. Vous vérifiez auprès du collègue par un autre canal avant d'ouvrir la pièce jointe qu'il vous a soi-disant envoyée. Cette discipline de vérification systématique par canal indépendant — qui peut sembler excessive dans les situations bénignes — est exactement ce qui rend les attaques sophistiquées inefficaces." },
        },
      }, 
      {
        type: "choix",
        text: "Vous recevez un SMS vous informant qu'un colis est bloqué en douane et qu'il faut payer 2,50€ via un lien pour le libérer. Vous attendez effectivement une livraison.",
        tags: ["phishing", "SMS"],
        answers: [
          { text: "Je clique et je paie — c'est une somme modique et j'attends bien une livraison.", score: 0 },
          { text: "Je vérifie directement sur le site officiel du transporteur avec le numéro de suivi.", score: 2 },
          { text: "Je contacte l'expéditeur du colis pour qu'il vérifie avec le transporteur.", score: 1.5 },
          { text: "Je supprime le SMS — les services de douane ne contactent pas par SMS.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous reconnaissez les tentatives grossières mais les plus élaborées passent encore", desc: "Le phishing évident avec fautes d'orthographe et domaine bizarre, vous le repérez. Mais le mail avec le logo correct, l'adresse presque identique et une demande urgente plausible — celui-là passe encore. Les attaques modernes sont construites avec des informations réelles sur vous et votre entreprise. Le signe le plus fiable reste la demande d'action urgente combinée à une pression de ne pas en parler." },
          moyen: { label: "Pratiques en développement", titre: "Vous détectez la plupart des tentatives mais les scénarios sophistiqués avec contexte réel vous mettent encore en difficulté", desc: "Vous vérifiez les liens avant de cliquer, vous utilisez les canaux officiels pour les demandes sensibles. Mais quand l'adresse est presque correcte, quand la pièce jointe vient d'un contact habituel avec un nom de fichier plausible, quand la demande s'inscrit dans une activité normale : le doute peut encore ne pas s'activer. L'enjeu est de traiter chaque message inattendu qui demande une action comme potentiellement suspect, quelle que soit son apparence." },
          haut: { label: "Réflexes installés", titre: "Vous détectez les tentatives y compris les plus élaborées et vous vérifiez systématiquement par un canal indépendant", desc: "Vous ne cliquez pas sur les liens des mails mais vous reconnectez directement sur le site. Vous rappelez sur le numéro officiel connu, pas sur le numéro fourni dans le message. Vous vérifiez auprès du collègue par un autre canal avant d'ouvrir la pièce jointe qu'il vous a soi-disant envoyée. Cette discipline de vérification systématique par canal indépendant — qui peut sembler excessive dans les situations bénignes — est exactement ce qui rend les attaques sophistiquées inefficaces." },
        },
      }, 
      {
        type: "likert",
        text: "Quand vous devez vérifier une information urgente, vous passez par les canaux officiels connus (numéro de téléphone habituel, site officiel) plutôt que par les liens ou numéros fournis dans le message suspect.",
        tags: ["phishing", "canal officiel"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous reconnaissez les tentatives grossières mais les plus élaborées passent encore", desc: "Le phishing évident avec fautes d'orthographe et domaine bizarre, vous le repérez. Mais le mail avec le logo correct, l'adresse presque identique et une demande urgente plausible — celui-là passe encore. Les attaques modernes sont construites avec des informations réelles sur vous et votre entreprise. Le signe le plus fiable reste la demande d'action urgente combinée à une pression de ne pas en parler." },
          moyen: { label: "Pratiques en développement", titre: "Vous détectez la plupart des tentatives mais les scénarios sophistiqués avec contexte réel vous mettent encore en difficulté", desc: "Vous vérifiez les liens avant de cliquer, vous utilisez les canaux officiels pour les demandes sensibles. Mais quand l'adresse est presque correcte, quand la pièce jointe vient d'un contact habituel avec un nom de fichier plausible, quand la demande s'inscrit dans une activité normale : le doute peut encore ne pas s'activer. L'enjeu est de traiter chaque message inattendu qui demande une action comme potentiellement suspect, quelle que soit son apparence." },
          haut: { label: "Réflexes installés", titre: "Vous détectez les tentatives y compris les plus élaborées et vous vérifiez systématiquement par un canal indépendant", desc: "Vous ne cliquez pas sur les liens des mails mais vous reconnectez directement sur le site. Vous rappelez sur le numéro officiel connu, pas sur le numéro fourni dans le message. Vous vérifiez auprès du collègue par un autre canal avant d'ouvrir la pièce jointe qu'il vous a soi-disant envoyée. Cette discipline de vérification systématique par canal indépendant — qui peut sembler excessive dans les situations bénignes — est exactement ce qui rend les attaques sophistiquées inefficaces." },
        },
      }, 
      {
        type: "choix",
        text: "Vous recevez un mail de votre service RH vous demandant de remettre à jour vos coordonnées bancaires pour le versement de votre salaire via un formulaire en ligne. Le mail a le logo de l'entreprise.",
        tags: ["phishing", "formulaire"],
        answers: [
          { text: "Je remplis le formulaire — ça vient des RH et le logo de l'entreprise est présent.", score: 0 },
          { text: "J'appelle directement les RH pour vérifier avant de renseigner quoi que ce soit.", score: 2 },
          { text: "Je vais directement dans l'espace RH de l'intranet pour faire la mise à jour.", score: 1.5 },
          { text: "Je réponds au mail pour leur demander confirmation.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous reconnaissez les tentatives grossières mais les plus élaborées passent encore", desc: "Le phishing évident avec fautes d'orthographe et domaine bizarre, vous le repérez. Mais le mail avec le logo correct, l'adresse presque identique et une demande urgente plausible — celui-là passe encore. Les attaques modernes sont construites avec des informations réelles sur vous et votre entreprise. Le signe le plus fiable reste la demande d'action urgente combinée à une pression de ne pas en parler." },
          moyen: { label: "Pratiques en développement", titre: "Vous détectez la plupart des tentatives mais les scénarios sophistiqués avec contexte réel vous mettent encore en difficulté", desc: "Vous vérifiez les liens avant de cliquer, vous utilisez les canaux officiels pour les demandes sensibles. Mais quand l'adresse est presque correcte, quand la pièce jointe vient d'un contact habituel avec un nom de fichier plausible, quand la demande s'inscrit dans une activité normale : le doute peut encore ne pas s'activer. L'enjeu est de traiter chaque message inattendu qui demande une action comme potentiellement suspect, quelle que soit son apparence." },
          haut: { label: "Réflexes installés", titre: "Vous détectez les tentatives y compris les plus élaborées et vous vérifiez systématiquement par un canal indépendant", desc: "Vous ne cliquez pas sur les liens des mails mais vous reconnectez directement sur le site. Vous rappelez sur le numéro officiel connu, pas sur le numéro fourni dans le message. Vous vérifiez auprès du collègue par un autre canal avant d'ouvrir la pièce jointe qu'il vous a soi-disant envoyée. Cette discipline de vérification systématique par canal indépendant — qui peut sembler excessive dans les situations bénignes — est exactement ce qui rend les attaques sophistiquées inefficaces." },
        },
      }
    ],

    1: [
      {
        type: "choix",
        text: "Vous venez de cliquer sur un lien dans un mail avant de réaliser qu'il était suspect. Une page s'est ouverte mais vous l'avez fermée immédiatement sans saisir d'information.",
        tags: ["réaction", "clic accidentel"],
        answers: [
          { text: "Je ne fais rien — j'ai fermé la page rapidement et je n'ai rien saisi.", score: 0 },
          { text: "Je déconnecte mon poste du réseau et je contacte immédiatement l'équipe informatique.", score: 2 },
          { text: "Je lance une analyse antivirus et j'attends le résultat avant de signaler.", score: 0.5 },
          { text: "Je surveille mon poste pendant quelques heures pour voir si quelque chose d'anormal se produit.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous hésitez encore à signaler après avoir cliqué, par peur des conséquences", desc: "Fermer la page rapidement et espérer que ça n'a rien fait, attendre de voir si quelque chose se passe, ne pas signaler par crainte d'être jugé·e : chaque heure de retard après une compromission donne plus de temps à l'attaquant pour agir. Signaler immédiatement n'est pas avouer une faute — c'est permettre à l'équipe informatique d'agir avant que les dommages soient étendus." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les incidents graves mais l'hésitation persiste sur les situations ambiguës ou sans conséquence visible", desc: "Vous signalez quand vous avez cliqué sur quelque chose de clairement suspect. Mais quand la page s'est fermée rapidement, quand vous n'avez rien saisi, quand le doute est là mais que la situation semble ambiguë : votre réflexe de signalement peut encore hésiter. L'enjeu est de signaler le doute lui-même, pas seulement la certitude." },
          haut: { label: "Réflexes installés", titre: "Vous signalez immédiatement, même pour un clic sans saisie, même pour un doute sans action", desc: "Vous signalez immédiatement après un clic accidentel, même si la page s'est fermée rapidement. Vous signalez le doute lui-même, pas seulement la certitude d'une compromission. Vous encouragez Ibrahim à signaler même s'il n'a pas cliqué. Cette culture du signalement précoce — qui suppose d'accepter d'avoir fait une erreur — est ce qui permet à l'équipe informatique de détecter et de contenir les attaques avant qu'elles ne s'étendent." },
        },
      }, 
      {
        type: "likert",
        text: "Quand vous avez cliqué sur quelque chose de suspect, vous le signalez immédiatement à l'équipe informatique, même si vous pensez n'avoir rien saisi.",
        tags: ["réaction", "signalement"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous hésitez encore à signaler après avoir cliqué, par peur des conséquences", desc: "Fermer la page rapidement et espérer que ça n'a rien fait, attendre de voir si quelque chose se passe, ne pas signaler par crainte d'être jugé·e : chaque heure de retard après une compromission donne plus de temps à l'attaquant pour agir. Signaler immédiatement n'est pas avouer une faute — c'est permettre à l'équipe informatique d'agir avant que les dommages soient étendus." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les incidents graves mais l'hésitation persiste sur les situations ambiguës ou sans conséquence visible", desc: "Vous signalez quand vous avez cliqué sur quelque chose de clairement suspect. Mais quand la page s'est fermée rapidement, quand vous n'avez rien saisi, quand le doute est là mais que la situation semble ambiguë : votre réflexe de signalement peut encore hésiter. L'enjeu est de signaler le doute lui-même, pas seulement la certitude." },
          haut: { label: "Réflexes installés", titre: "Vous signalez immédiatement, même pour un clic sans saisie, même pour un doute sans action", desc: "Vous signalez immédiatement après un clic accidentel, même si la page s'est fermée rapidement. Vous signalez le doute lui-même, pas seulement la certitude d'une compromission. Vous encouragez Ibrahim à signaler même s'il n'a pas cliqué. Cette culture du signalement précoce — qui suppose d'accepter d'avoir fait une erreur — est ce qui permet à l'équipe informatique de détecter et de contenir les attaques avant qu'elles ne s'étendent." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez ouvert une pièce jointe suspecte il y a deux heures. Votre poste fonctionne normalement. Vous hésitez à le signaler par crainte d'être jugé·e pour avoir fait une erreur.",
        tags: ["réaction", "peur conséquences"],
        answers: [
          { text: "Je ne dis rien — le poste fonctionne normalement et ça évitera les questions gênantes.", score: 0 },
          { text: "Je le signale maintenant — le délai a déjà peut-être permis une compromission silencieuse.", score: 2 },
          { text: "J'attends la fin de journée pour voir si quelque chose se passe et je signalerai si nécessaire.", score: 0 },
          { text: "J'en parle à un collègue de confiance pour avoir son avis avant de contacter l'informatique.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous hésitez encore à signaler après avoir cliqué, par peur des conséquences", desc: "Fermer la page rapidement et espérer que ça n'a rien fait, attendre de voir si quelque chose se passe, ne pas signaler par crainte d'être jugé·e : chaque heure de retard après une compromission donne plus de temps à l'attaquant pour agir. Signaler immédiatement n'est pas avouer une faute — c'est permettre à l'équipe informatique d'agir avant que les dommages soient étendus." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les incidents graves mais l'hésitation persiste sur les situations ambiguës ou sans conséquence visible", desc: "Vous signalez quand vous avez cliqué sur quelque chose de clairement suspect. Mais quand la page s'est fermée rapidement, quand vous n'avez rien saisi, quand le doute est là mais que la situation semble ambiguë : votre réflexe de signalement peut encore hésiter. L'enjeu est de signaler le doute lui-même, pas seulement la certitude." },
          haut: { label: "Réflexes installés", titre: "Vous signalez immédiatement, même pour un clic sans saisie, même pour un doute sans action", desc: "Vous signalez immédiatement après un clic accidentel, même si la page s'est fermée rapidement. Vous signalez le doute lui-même, pas seulement la certitude d'une compromission. Vous encouragez Ibrahim à signaler même s'il n'a pas cliqué. Cette culture du signalement précoce — qui suppose d'accepter d'avoir fait une erreur — est ce qui permet à l'équipe informatique de détecter et de contenir les attaques avant qu'elles ne s'étendent." },
        },
      }, 
      {
        type: "choix",
        text: "Vous réalisez que vous venez de saisir votre mot de passe professionnel sur un site qui ressemblait à votre intranet mais qui n'en était pas un.",
        tags: ["réaction", "mot de passe saisi"],
        answers: [
          { text: "Je change mon mot de passe dans les prochains jours et je surveille mon compte.", score: 0 },
          { text: "Je change mon mot de passe immédiatement et je contacte l'équipe informatique.", score: 2 },
          { text: "Je change mon mot de passe immédiatement sans signaler — j'ai corrigé le problème.", score: 0.5 },
          { text: "Je contacte l'équipe informatique en leur demandant de changer mon mot de passe.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous hésitez encore à signaler après avoir cliqué, par peur des conséquences", desc: "Fermer la page rapidement et espérer que ça n'a rien fait, attendre de voir si quelque chose se passe, ne pas signaler par crainte d'être jugé·e : chaque heure de retard après une compromission donne plus de temps à l'attaquant pour agir. Signaler immédiatement n'est pas avouer une faute — c'est permettre à l'équipe informatique d'agir avant que les dommages soient étendus." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les incidents graves mais l'hésitation persiste sur les situations ambiguës ou sans conséquence visible", desc: "Vous signalez quand vous avez cliqué sur quelque chose de clairement suspect. Mais quand la page s'est fermée rapidement, quand vous n'avez rien saisi, quand le doute est là mais que la situation semble ambiguë : votre réflexe de signalement peut encore hésiter. L'enjeu est de signaler le doute lui-même, pas seulement la certitude." },
          haut: { label: "Réflexes installés", titre: "Vous signalez immédiatement, même pour un clic sans saisie, même pour un doute sans action", desc: "Vous signalez immédiatement après un clic accidentel, même si la page s'est fermée rapidement. Vous signalez le doute lui-même, pas seulement la certitude d'une compromission. Vous encouragez Ibrahim à signaler même s'il n'a pas cliqué. Cette culture du signalement précoce — qui suppose d'accepter d'avoir fait une erreur — est ce qui permet à l'équipe informatique de détecter et de contenir les attaques avant qu'elles ne s'étendent." },
        },
      }, 
      {
        type: "choix",
        text: "Votre collègue Nathalie vous dit qu'elle a répondu à un mail suspect en donnant ses identifiants mais qu'elle préfère ne pas le signaler pour ne pas avoir d'ennuis.",
        tags: ["réaction", "collègue victime"],
        answers: [
          { text: "Je respecte son choix — c'est elle qui décide et peut-être que ça ne donnera rien.", score: 0 },
          { text: "Je lui explique que le délai de signalement aggrave le risque pour toute l'entreprise et je l'encourage fermement à agir maintenant.", score: 2 },
          { text: "Je lui propose de l'accompagner pour le signaler ensemble.", score: 2 },
          { text: "Je lui dis d'en parler au moins à son responsable direct.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous hésitez encore à signaler après avoir cliqué, par peur des conséquences", desc: "Fermer la page rapidement et espérer que ça n'a rien fait, attendre de voir si quelque chose se passe, ne pas signaler par crainte d'être jugé·e : chaque heure de retard après une compromission donne plus de temps à l'attaquant pour agir. Signaler immédiatement n'est pas avouer une faute — c'est permettre à l'équipe informatique d'agir avant que les dommages soient étendus." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les incidents graves mais l'hésitation persiste sur les situations ambiguës ou sans conséquence visible", desc: "Vous signalez quand vous avez cliqué sur quelque chose de clairement suspect. Mais quand la page s'est fermée rapidement, quand vous n'avez rien saisi, quand le doute est là mais que la situation semble ambiguë : votre réflexe de signalement peut encore hésiter. L'enjeu est de signaler le doute lui-même, pas seulement la certitude." },
          haut: { label: "Réflexes installés", titre: "Vous signalez immédiatement, même pour un clic sans saisie, même pour un doute sans action", desc: "Vous signalez immédiatement après un clic accidentel, même si la page s'est fermée rapidement. Vous signalez le doute lui-même, pas seulement la certitude d'une compromission. Vous encouragez Ibrahim à signaler même s'il n'a pas cliqué. Cette culture du signalement précoce — qui suppose d'accepter d'avoir fait une erreur — est ce qui permet à l'équipe informatique de détecter et de contenir les attaques avant qu'elles ne s'étendent." },
        },
      }, 
      {
        type: "likert",
        text: "En cas de doute sur une compromission, vous signalez dans la journée plutôt que d'attendre de voir si quelque chose se passe.",
        tags: ["réaction", "délai"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous hésitez encore à signaler après avoir cliqué, par peur des conséquences", desc: "Fermer la page rapidement et espérer que ça n'a rien fait, attendre de voir si quelque chose se passe, ne pas signaler par crainte d'être jugé·e : chaque heure de retard après une compromission donne plus de temps à l'attaquant pour agir. Signaler immédiatement n'est pas avouer une faute — c'est permettre à l'équipe informatique d'agir avant que les dommages soient étendus." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les incidents graves mais l'hésitation persiste sur les situations ambiguës ou sans conséquence visible", desc: "Vous signalez quand vous avez cliqué sur quelque chose de clairement suspect. Mais quand la page s'est fermée rapidement, quand vous n'avez rien saisi, quand le doute est là mais que la situation semble ambiguë : votre réflexe de signalement peut encore hésiter. L'enjeu est de signaler le doute lui-même, pas seulement la certitude." },
          haut: { label: "Réflexes installés", titre: "Vous signalez immédiatement, même pour un clic sans saisie, même pour un doute sans action", desc: "Vous signalez immédiatement après un clic accidentel, même si la page s'est fermée rapidement. Vous signalez le doute lui-même, pas seulement la certitude d'une compromission. Vous encouragez Ibrahim à signaler même s'il n'a pas cliqué. Cette culture du signalement précoce — qui suppose d'accepter d'avoir fait une erreur — est ce qui permet à l'équipe informatique de détecter et de contenir les attaques avant qu'elles ne s'étendent." },
        },
      }, 
      {
        type: "choix",
        text: "En arrivant le matin, votre écran affiche un message en anglais indiquant que vos fichiers sont chiffrés et qu'il faut payer pour les récupérer.",
        tags: ["réaction", "ransomware"],
        answers: [
          { text: "Je cherche comment payer — c'est peut-être le moyen le plus rapide de récupérer mes fichiers.", score: 0 },
          { text: "Je déconnecte immédiatement mon poste du réseau et j'appelle l'équipe informatique.", score: 2 },
          { text: "J'éteins mon poste et j'appelle l'équipe informatique.", score: 1.5 },
          { text: "Je redémarre mon poste pour voir si le message disparaît.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous hésitez encore à signaler après avoir cliqué, par peur des conséquences", desc: "Fermer la page rapidement et espérer que ça n'a rien fait, attendre de voir si quelque chose se passe, ne pas signaler par crainte d'être jugé·e : chaque heure de retard après une compromission donne plus de temps à l'attaquant pour agir. Signaler immédiatement n'est pas avouer une faute — c'est permettre à l'équipe informatique d'agir avant que les dommages soient étendus." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les incidents graves mais l'hésitation persiste sur les situations ambiguës ou sans conséquence visible", desc: "Vous signalez quand vous avez cliqué sur quelque chose de clairement suspect. Mais quand la page s'est fermée rapidement, quand vous n'avez rien saisi, quand le doute est là mais que la situation semble ambiguë : votre réflexe de signalement peut encore hésiter. L'enjeu est de signaler le doute lui-même, pas seulement la certitude." },
          haut: { label: "Réflexes installés", titre: "Vous signalez immédiatement, même pour un clic sans saisie, même pour un doute sans action", desc: "Vous signalez immédiatement après un clic accidentel, même si la page s'est fermée rapidement. Vous signalez le doute lui-même, pas seulement la certitude d'une compromission. Vous encouragez Ibrahim à signaler même s'il n'a pas cliqué. Cette culture du signalement précoce — qui suppose d'accepter d'avoir fait une erreur — est ce qui permet à l'équipe informatique de détecter et de contenir les attaques avant qu'elles ne s'étendent." },
        },
      }, 
      {
        type: "choix",
        text: "Vous vous rendez compte que vous avez transféré un mail de phishing à trois collègues avant de réaliser que c'était suspect.",
        tags: ["réaction", "transfert"],
        answers: [
          { text: "J'envoie un nouveau mail à mes collègues pour leur dire d'ignorer le précédent.", score: 0.5 },
          { text: "Je contacte l'équipe informatique en leur listant les trois collègues concernés.", score: 2 },
          { text: "Je préviens mes collègues directement et je signale l'incident à l'informatique.", score: 2 },
          { text: "Je leur envoie un message pour qu'ils suppriment le mail sans cliquer.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous hésitez encore à signaler après avoir cliqué, par peur des conséquences", desc: "Fermer la page rapidement et espérer que ça n'a rien fait, attendre de voir si quelque chose se passe, ne pas signaler par crainte d'être jugé·e : chaque heure de retard après une compromission donne plus de temps à l'attaquant pour agir. Signaler immédiatement n'est pas avouer une faute — c'est permettre à l'équipe informatique d'agir avant que les dommages soient étendus." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les incidents graves mais l'hésitation persiste sur les situations ambiguës ou sans conséquence visible", desc: "Vous signalez quand vous avez cliqué sur quelque chose de clairement suspect. Mais quand la page s'est fermée rapidement, quand vous n'avez rien saisi, quand le doute est là mais que la situation semble ambiguë : votre réflexe de signalement peut encore hésiter. L'enjeu est de signaler le doute lui-même, pas seulement la certitude." },
          haut: { label: "Réflexes installés", titre: "Vous signalez immédiatement, même pour un clic sans saisie, même pour un doute sans action", desc: "Vous signalez immédiatement après un clic accidentel, même si la page s'est fermée rapidement. Vous signalez le doute lui-même, pas seulement la certitude d'une compromission. Vous encouragez Ibrahim à signaler même s'il n'a pas cliqué. Cette culture du signalement précoce — qui suppose d'accepter d'avoir fait une erreur — est ce qui permet à l'équipe informatique de détecter et de contenir les attaques avant qu'elles ne s'étendent." },
        },
      }, 
      {
        type: "likert",
        text: "Sur tout comportement anormal de votre poste après une action suspecte, votre premier réflexe est de le déconnecter du réseau avant toute autre action.",
        tags: ["réaction", "isolation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous hésitez encore à signaler après avoir cliqué, par peur des conséquences", desc: "Fermer la page rapidement et espérer que ça n'a rien fait, attendre de voir si quelque chose se passe, ne pas signaler par crainte d'être jugé·e : chaque heure de retard après une compromission donne plus de temps à l'attaquant pour agir. Signaler immédiatement n'est pas avouer une faute — c'est permettre à l'équipe informatique d'agir avant que les dommages soient étendus." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les incidents graves mais l'hésitation persiste sur les situations ambiguës ou sans conséquence visible", desc: "Vous signalez quand vous avez cliqué sur quelque chose de clairement suspect. Mais quand la page s'est fermée rapidement, quand vous n'avez rien saisi, quand le doute est là mais que la situation semble ambiguë : votre réflexe de signalement peut encore hésiter. L'enjeu est de signaler le doute lui-même, pas seulement la certitude." },
          haut: { label: "Réflexes installés", titre: "Vous signalez immédiatement, même pour un clic sans saisie, même pour un doute sans action", desc: "Vous signalez immédiatement après un clic accidentel, même si la page s'est fermée rapidement. Vous signalez le doute lui-même, pas seulement la certitude d'une compromission. Vous encouragez Ibrahim à signaler même s'il n'a pas cliqué. Cette culture du signalement précoce — qui suppose d'accepter d'avoir fait une erreur — est ce qui permet à l'équipe informatique de détecter et de contenir les attaques avant qu'elles ne s'étendent." },
        },
      }, 
      {
        type: "choix",
        text: "Vous avez rempli un formulaire qui ressemblait à une mise à jour RH mais vous n'êtes plus sûr·e de son authenticité. Vous avez renseigné votre nom, prénom, adresse et numéro de sécurité sociale.",
        tags: ["réaction", "données saisies"],
        answers: [
          { text: "J'attends de voir — les informations administratives sont moins critiques que les mots de passe.", score: 0 },
          { text: "Je signale immédiatement à l'équipe informatique et aux RH les données que j'ai saisies.", score: 2 },
          { text: "Je contacte les RH pour vérifier si elles avaient bien envoyé ce formulaire.", score: 1.5 },
          { text: "Je surveille mon espace personnel en ligne pendant quelques jours.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Vous hésitez encore à signaler après avoir cliqué, par peur des conséquences", desc: "Fermer la page rapidement et espérer que ça n'a rien fait, attendre de voir si quelque chose se passe, ne pas signaler par crainte d'être jugé·e : chaque heure de retard après une compromission donne plus de temps à l'attaquant pour agir. Signaler immédiatement n'est pas avouer une faute — c'est permettre à l'équipe informatique d'agir avant que les dommages soient étendus." },
          moyen: { label: "Pratiques en développement", titre: "Vous signalez les incidents graves mais l'hésitation persiste sur les situations ambiguës ou sans conséquence visible", desc: "Vous signalez quand vous avez cliqué sur quelque chose de clairement suspect. Mais quand la page s'est fermée rapidement, quand vous n'avez rien saisi, quand le doute est là mais que la situation semble ambiguë : votre réflexe de signalement peut encore hésiter. L'enjeu est de signaler le doute lui-même, pas seulement la certitude." },
          haut: { label: "Réflexes installés", titre: "Vous signalez immédiatement, même pour un clic sans saisie, même pour un doute sans action", desc: "Vous signalez immédiatement après un clic accidentel, même si la page s'est fermée rapidement. Vous signalez le doute lui-même, pas seulement la certitude d'une compromission. Vous encouragez Ibrahim à signaler même s'il n'a pas cliqué. Cette culture du signalement précoce — qui suppose d'accepter d'avoir fait une erreur — est ce qui permet à l'équipe informatique de détecter et de contenir les attaques avant qu'elles ne s'étendent." },
        },
      }
    ],

    2: [
      {
        type: "choix",
        text: "Quelqu'un vous appelle en se présentant comme l'auditeur externe mandaté par votre direction pour une mission de conformité urgente. Il demande la liste des accès aux systèmes sensibles. Il a le nom de votre DRH.",
        tags: ["manipulation", "autorité"],
        answers: [
          { text: "Je lui fournis les informations — il a l'air d'être mandaté et connaît le nom de notre DRH.", score: 0 },
          { text: "Je lui dis que je dois rappeler après avoir vérifié sa mission auprès de notre DRH directement.", score: 2 },
          { text: "Je lui demande un document officiel de mission avant de lui donner quoi que ce soit.", score: 1.5 },
          { text: "Je transmets sa demande à mon responsable pour qu'il gère.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Une demande bien construite avec une autorité apparente suffit encore à vous faire agir", desc: "Un interlocuteur qui connaît le nom de votre DRH, un numéro de commande, le bon logo de l'entreprise : ces informations sont accessibles publiquement ou récupérées sur d'autres systèmes compromis. La légitimité apparente d'une demande n'est pas une preuve de son authenticité. Vérifier par un canal indépendant — appel sur le numéro habituel, connexion directe au site officiel — reste le seul moyen fiable." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux tentatives simples mais une pression forte ou un prétexte bien construit peut encore faire céder votre vigilance", desc: "Vous maintenez votre vigilance face aux demandes inhabituelles sans justification particulière. Mais quand un interlocuteur a les bonnes informations, une autorité apparente, et une urgence crédible : la pression peut encore faire céder la vérification indépendante. L'enjeu est de maintenir le réflexe de vérification précisément dans ces situations, qui sont exactement les plus dangereuses." },
          haut: { label: "Réflexes installés", titre: "Vous résistez aux prétextes élaborés et aux autorités apparentes en maintenant toujours la vérification indépendante", desc: "L'interlocuteur qui connaît le nom de votre DRH et le numéro de commande ne vous convainc pas d'agir sans vérifier. L'urgence présentée ne compresse pas votre délai de vérification. Vous ne laissez pas un collègue inconnu utiliser votre session ouverte. Cette résistance aux prétextes bien construits — qui suppose de tenir sa position même face à quelqu'un qui semble légitimement pressé — est ce qui arrête les attaques par ingénierie sociale." },
        },
      }, 
      {
        type: "likert",
        text: "Quand quelqu'un vous sollicite avec une demande inhabituelle en invoquant une autorité interne, vous vérifiez auprès de cette autorité directement avant d'agir.",
        tags: ["manipulation", "vérification"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Une demande bien construite avec une autorité apparente suffit encore à vous faire agir", desc: "Un interlocuteur qui connaît le nom de votre DRH, un numéro de commande, le bon logo de l'entreprise : ces informations sont accessibles publiquement ou récupérées sur d'autres systèmes compromis. La légitimité apparente d'une demande n'est pas une preuve de son authenticité. Vérifier par un canal indépendant — appel sur le numéro habituel, connexion directe au site officiel — reste le seul moyen fiable." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux tentatives simples mais une pression forte ou un prétexte bien construit peut encore faire céder votre vigilance", desc: "Vous maintenez votre vigilance face aux demandes inhabituelles sans justification particulière. Mais quand un interlocuteur a les bonnes informations, une autorité apparente, et une urgence crédible : la pression peut encore faire céder la vérification indépendante. L'enjeu est de maintenir le réflexe de vérification précisément dans ces situations, qui sont exactement les plus dangereuses." },
          haut: { label: "Réflexes installés", titre: "Vous résistez aux prétextes élaborés et aux autorités apparentes en maintenant toujours la vérification indépendante", desc: "L'interlocuteur qui connaît le nom de votre DRH et le numéro de commande ne vous convainc pas d'agir sans vérifier. L'urgence présentée ne compresse pas votre délai de vérification. Vous ne laissez pas un collègue inconnu utiliser votre session ouverte. Cette résistance aux prétextes bien construits — qui suppose de tenir sa position même face à quelqu'un qui semble légitimement pressé — est ce qui arrête les attaques par ingénierie sociale." },
        },
      }, 
      {
        type: "choix",
        text: "Un interlocuteur au téléphone vous dit qu'un compte fournisseur doit être mis à jour dans l'heure sinon la livraison sera bloquée. Il connaît le nom du fournisseur et le numéro de commande.",
        tags: ["manipulation", "pression temps"],
        answers: [
          { text: "Je fais la mise à jour — il a les bonnes informations et la livraison est urgente.", score: 0 },
          { text: "Je lui dis que je rappellerai via le numéro officiel du fournisseur pour confirmer.", score: 2 },
          { text: "Je lui demande un email officiel avec les nouvelles coordonnées avant toute modification.", score: 1 },
          { text: "Je préviens mon responsable de la demande avant de faire quoi que ce soit.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Une demande bien construite avec une autorité apparente suffit encore à vous faire agir", desc: "Un interlocuteur qui connaît le nom de votre DRH, un numéro de commande, le bon logo de l'entreprise : ces informations sont accessibles publiquement ou récupérées sur d'autres systèmes compromis. La légitimité apparente d'une demande n'est pas une preuve de son authenticité. Vérifier par un canal indépendant — appel sur le numéro habituel, connexion directe au site officiel — reste le seul moyen fiable." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux tentatives simples mais une pression forte ou un prétexte bien construit peut encore faire céder votre vigilance", desc: "Vous maintenez votre vigilance face aux demandes inhabituelles sans justification particulière. Mais quand un interlocuteur a les bonnes informations, une autorité apparente, et une urgence crédible : la pression peut encore faire céder la vérification indépendante. L'enjeu est de maintenir le réflexe de vérification précisément dans ces situations, qui sont exactement les plus dangereuses." },
          haut: { label: "Réflexes installés", titre: "Vous résistez aux prétextes élaborés et aux autorités apparentes en maintenant toujours la vérification indépendante", desc: "L'interlocuteur qui connaît le nom de votre DRH et le numéro de commande ne vous convainc pas d'agir sans vérifier. L'urgence présentée ne compresse pas votre délai de vérification. Vous ne laissez pas un collègue inconnu utiliser votre session ouverte. Cette résistance aux prétextes bien construits — qui suppose de tenir sa position même face à quelqu'un qui semble légitimement pressé — est ce qui arrête les attaques par ingénierie sociale." },
        },
      }, 
      {
        type: "choix",
        text: "Une personne chaleureuse vous contacte sur LinkedIn en se présentant comme une ancienne collègue. Après quelques échanges, elle vous demande des informations sur l'organisation de votre équipe et les outils que vous utilisez.",
        tags: ["manipulation", "sympathie"],
        answers: [
          { text: "Je lui réponds naturellement — on a travaillé ensemble et ces informations ne sont pas confidentielles.", score: 0 },
          { text: "Je reste évasif·ve sur les informations organisationnelles et techniques, même avec quelqu'un que je crois connaître.", score: 2 },
          { text: "Je vérifie d'abord que nous avons bien des contacts communs sur LinkedIn avant de répondre.", score: 1 },
          { text: "Je lui donne des informations générales sans entrer dans les détails techniques.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Une demande bien construite avec une autorité apparente suffit encore à vous faire agir", desc: "Un interlocuteur qui connaît le nom de votre DRH, un numéro de commande, le bon logo de l'entreprise : ces informations sont accessibles publiquement ou récupérées sur d'autres systèmes compromis. La légitimité apparente d'une demande n'est pas une preuve de son authenticité. Vérifier par un canal indépendant — appel sur le numéro habituel, connexion directe au site officiel — reste le seul moyen fiable." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux tentatives simples mais une pression forte ou un prétexte bien construit peut encore faire céder votre vigilance", desc: "Vous maintenez votre vigilance face aux demandes inhabituelles sans justification particulière. Mais quand un interlocuteur a les bonnes informations, une autorité apparente, et une urgence crédible : la pression peut encore faire céder la vérification indépendante. L'enjeu est de maintenir le réflexe de vérification précisément dans ces situations, qui sont exactement les plus dangereuses." },
          haut: { label: "Réflexes installés", titre: "Vous résistez aux prétextes élaborés et aux autorités apparentes en maintenant toujours la vérification indépendante", desc: "L'interlocuteur qui connaît le nom de votre DRH et le numéro de commande ne vous convainc pas d'agir sans vérifier. L'urgence présentée ne compresse pas votre délai de vérification. Vous ne laissez pas un collègue inconnu utiliser votre session ouverte. Cette résistance aux prétextes bien construits — qui suppose de tenir sa position même face à quelqu'un qui semble légitimement pressé — est ce qui arrête les attaques par ingénierie sociale." },
        },
      }, 
      {
        type: "choix",
        text: "Une alerte s'affiche sur votre écran vous indiquant que votre ordinateur est infecté et qu'il faut appeler immédiatement un numéro de support Microsoft. Votre écran est figé.",
        tags: ["manipulation", "faux support"],
        answers: [
          { text: "J'appelle le numéro — Microsoft a détecté une infection et mon écran est bloqué.", score: 0 },
          { text: "J'éteins mon ordinateur et je contacte uniquement mon équipe informatique interne.", score: 2 },
          { text: "Je prends en photo l'écran et j'appelle mon équipe informatique.", score: 2 },
          { text: "J'appelle le numéro pour comprendre ce qui se passe avant de contacter mon équipe IT.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Une demande bien construite avec une autorité apparente suffit encore à vous faire agir", desc: "Un interlocuteur qui connaît le nom de votre DRH, un numéro de commande, le bon logo de l'entreprise : ces informations sont accessibles publiquement ou récupérées sur d'autres systèmes compromis. La légitimité apparente d'une demande n'est pas une preuve de son authenticité. Vérifier par un canal indépendant — appel sur le numéro habituel, connexion directe au site officiel — reste le seul moyen fiable." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux tentatives simples mais une pression forte ou un prétexte bien construit peut encore faire céder votre vigilance", desc: "Vous maintenez votre vigilance face aux demandes inhabituelles sans justification particulière. Mais quand un interlocuteur a les bonnes informations, une autorité apparente, et une urgence crédible : la pression peut encore faire céder la vérification indépendante. L'enjeu est de maintenir le réflexe de vérification précisément dans ces situations, qui sont exactement les plus dangereuses." },
          haut: { label: "Réflexes installés", titre: "Vous résistez aux prétextes élaborés et aux autorités apparentes en maintenant toujours la vérification indépendante", desc: "L'interlocuteur qui connaît le nom de votre DRH et le numéro de commande ne vous convainc pas d'agir sans vérifier. L'urgence présentée ne compresse pas votre délai de vérification. Vous ne laissez pas un collègue inconnu utiliser votre session ouverte. Cette résistance aux prétextes bien construits — qui suppose de tenir sa position même face à quelqu'un qui semble légitimement pressé — est ce qui arrête les attaques par ingénierie sociale." },
        },
      }, 
      {
        type: "likert",
        text: "Face à une demande inhabituelle accompagnée d'une justification convaincante, vous prenez le temps de vérifier indépendamment avant d'agir, même si cela risque de décevoir ou de ralentir.",
        tags: ["manipulation", "résistance"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Une demande bien construite avec une autorité apparente suffit encore à vous faire agir", desc: "Un interlocuteur qui connaît le nom de votre DRH, un numéro de commande, le bon logo de l'entreprise : ces informations sont accessibles publiquement ou récupérées sur d'autres systèmes compromis. La légitimité apparente d'une demande n'est pas une preuve de son authenticité. Vérifier par un canal indépendant — appel sur le numéro habituel, connexion directe au site officiel — reste le seul moyen fiable." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux tentatives simples mais une pression forte ou un prétexte bien construit peut encore faire céder votre vigilance", desc: "Vous maintenez votre vigilance face aux demandes inhabituelles sans justification particulière. Mais quand un interlocuteur a les bonnes informations, une autorité apparente, et une urgence crédible : la pression peut encore faire céder la vérification indépendante. L'enjeu est de maintenir le réflexe de vérification précisément dans ces situations, qui sont exactement les plus dangereuses." },
          haut: { label: "Réflexes installés", titre: "Vous résistez aux prétextes élaborés et aux autorités apparentes en maintenant toujours la vérification indépendante", desc: "L'interlocuteur qui connaît le nom de votre DRH et le numéro de commande ne vous convainc pas d'agir sans vérifier. L'urgence présentée ne compresse pas votre délai de vérification. Vous ne laissez pas un collègue inconnu utiliser votre session ouverte. Cette résistance aux prétextes bien construits — qui suppose de tenir sa position même face à quelqu'un qui semble légitimement pressé — est ce qui arrête les attaques par ingénierie sociale." },
        },
      }, 
      {
        type: "choix",
        text: "Devant l'entrée sécurisée de vos locaux, une personne en costume chargée de bagages vous demande de la laisser entrer — elle dit qu'elle vient pour une réunion et a oublié son badge visiteur.",
        tags: ["manipulation", "tailgating"],
        answers: [
          { text: "Je lui ouvre — elle a l'air professionnelle et dit venir pour une réunion.", score: 0 },
          { text: "Je lui indique l'accueil où elle pourra se faire enregistrer comme visiteur.", score: 2 },
          { text: "Je lui demande le nom de la personne qu'elle vient voir avant de décider.", score: 1 },
          { text: "Je la laisse entrer et je préviens la personne qu'elle vient voir.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Une demande bien construite avec une autorité apparente suffit encore à vous faire agir", desc: "Un interlocuteur qui connaît le nom de votre DRH, un numéro de commande, le bon logo de l'entreprise : ces informations sont accessibles publiquement ou récupérées sur d'autres systèmes compromis. La légitimité apparente d'une demande n'est pas une preuve de son authenticité. Vérifier par un canal indépendant — appel sur le numéro habituel, connexion directe au site officiel — reste le seul moyen fiable." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux tentatives simples mais une pression forte ou un prétexte bien construit peut encore faire céder votre vigilance", desc: "Vous maintenez votre vigilance face aux demandes inhabituelles sans justification particulière. Mais quand un interlocuteur a les bonnes informations, une autorité apparente, et une urgence crédible : la pression peut encore faire céder la vérification indépendante. L'enjeu est de maintenir le réflexe de vérification précisément dans ces situations, qui sont exactement les plus dangereuses." },
          haut: { label: "Réflexes installés", titre: "Vous résistez aux prétextes élaborés et aux autorités apparentes en maintenant toujours la vérification indépendante", desc: "L'interlocuteur qui connaît le nom de votre DRH et le numéro de commande ne vous convainc pas d'agir sans vérifier. L'urgence présentée ne compresse pas votre délai de vérification. Vous ne laissez pas un collègue inconnu utiliser votre session ouverte. Cette résistance aux prétextes bien construits — qui suppose de tenir sa position même face à quelqu'un qui semble légitimement pressé — est ce qui arrête les attaques par ingénierie sociale." },
        },
      }, 
      {
        type: "choix",
        text: "Votre entreprise organise un webinaire public. Dans le chat, un participant pose des questions techniques précises sur vos systèmes d'information et vos outils internes. Il se présente comme un journaliste spécialisé.",
        tags: ["manipulation", "informations publiques"],
        answers: [
          { text: "Je réponds — c'est un webinaire public et un journaliste peut poser des questions.", score: 0 },
          { text: "Je réponds de façon générale sur les grandes orientations sans détailler les systèmes ni les outils.", score: 2 },
          { text: "Je lui demande de me contacter par mail pour une interview dédiée.", score: 1.5 },
          { text: "Je ne réponds pas et je signale les questions à l'équipe communication.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Une demande bien construite avec une autorité apparente suffit encore à vous faire agir", desc: "Un interlocuteur qui connaît le nom de votre DRH, un numéro de commande, le bon logo de l'entreprise : ces informations sont accessibles publiquement ou récupérées sur d'autres systèmes compromis. La légitimité apparente d'une demande n'est pas une preuve de son authenticité. Vérifier par un canal indépendant — appel sur le numéro habituel, connexion directe au site officiel — reste le seul moyen fiable." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux tentatives simples mais une pression forte ou un prétexte bien construit peut encore faire céder votre vigilance", desc: "Vous maintenez votre vigilance face aux demandes inhabituelles sans justification particulière. Mais quand un interlocuteur a les bonnes informations, une autorité apparente, et une urgence crédible : la pression peut encore faire céder la vérification indépendante. L'enjeu est de maintenir le réflexe de vérification précisément dans ces situations, qui sont exactement les plus dangereuses." },
          haut: { label: "Réflexes installés", titre: "Vous résistez aux prétextes élaborés et aux autorités apparentes en maintenant toujours la vérification indépendante", desc: "L'interlocuteur qui connaît le nom de votre DRH et le numéro de commande ne vous convainc pas d'agir sans vérifier. L'urgence présentée ne compresse pas votre délai de vérification. Vous ne laissez pas un collègue inconnu utiliser votre session ouverte. Cette résistance aux prétextes bien construits — qui suppose de tenir sa position même face à quelqu'un qui semble légitimement pressé — est ce qui arrête les attaques par ingénierie sociale." },
        },
      }, 
      {
        type: "likert",
        text: "Vous ne communiquez pas d'informations sur vos systèmes, outils ou organisation interne à des interlocuteurs externes non identifiés, quelle que soit la légitimité apparente de leur demande.",
        tags: ["manipulation", "informations techniques"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Une demande bien construite avec une autorité apparente suffit encore à vous faire agir", desc: "Un interlocuteur qui connaît le nom de votre DRH, un numéro de commande, le bon logo de l'entreprise : ces informations sont accessibles publiquement ou récupérées sur d'autres systèmes compromis. La légitimité apparente d'une demande n'est pas une preuve de son authenticité. Vérifier par un canal indépendant — appel sur le numéro habituel, connexion directe au site officiel — reste le seul moyen fiable." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux tentatives simples mais une pression forte ou un prétexte bien construit peut encore faire céder votre vigilance", desc: "Vous maintenez votre vigilance face aux demandes inhabituelles sans justification particulière. Mais quand un interlocuteur a les bonnes informations, une autorité apparente, et une urgence crédible : la pression peut encore faire céder la vérification indépendante. L'enjeu est de maintenir le réflexe de vérification précisément dans ces situations, qui sont exactement les plus dangereuses." },
          haut: { label: "Réflexes installés", titre: "Vous résistez aux prétextes élaborés et aux autorités apparentes en maintenant toujours la vérification indépendante", desc: "L'interlocuteur qui connaît le nom de votre DRH et le numéro de commande ne vous convainc pas d'agir sans vérifier. L'urgence présentée ne compresse pas votre délai de vérification. Vous ne laissez pas un collègue inconnu utiliser votre session ouverte. Cette résistance aux prétextes bien construits — qui suppose de tenir sa position même face à quelqu'un qui semble légitimement pressé — est ce qui arrête les attaques par ingénierie sociale." },
        },
      }, 
      {
        type: "choix",
        text: "Un collègue que vous ne connaissez pas bien vous demande votre session ouverte pendant cinq minutes 'pour accéder rapidement à un fichier partagé' pendant que vous êtes en pause.",
        tags: ["manipulation", "collègue"],
        answers: [
          { text: "J'accepte — il est collègue et a l'air d'avoir un besoin légitime.", score: 0 },
          { text: "Je refuse et je lui propose de s'authentifier avec sa propre session.", score: 2 },
          { text: "Je lui montre comment accéder au fichier partagé depuis sa propre session.", score: 2 },
          { text: "J'accepte mais je reste présent·e pendant qu'il utilise ma session.", score: 0 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Une demande bien construite avec une autorité apparente suffit encore à vous faire agir", desc: "Un interlocuteur qui connaît le nom de votre DRH, un numéro de commande, le bon logo de l'entreprise : ces informations sont accessibles publiquement ou récupérées sur d'autres systèmes compromis. La légitimité apparente d'une demande n'est pas une preuve de son authenticité. Vérifier par un canal indépendant — appel sur le numéro habituel, connexion directe au site officiel — reste le seul moyen fiable." },
          moyen: { label: "Pratiques en développement", titre: "Vous résistez aux tentatives simples mais une pression forte ou un prétexte bien construit peut encore faire céder votre vigilance", desc: "Vous maintenez votre vigilance face aux demandes inhabituelles sans justification particulière. Mais quand un interlocuteur a les bonnes informations, une autorité apparente, et une urgence crédible : la pression peut encore faire céder la vérification indépendante. L'enjeu est de maintenir le réflexe de vérification précisément dans ces situations, qui sont exactement les plus dangereuses." },
          haut: { label: "Réflexes installés", titre: "Vous résistez aux prétextes élaborés et aux autorités apparentes en maintenant toujours la vérification indépendante", desc: "L'interlocuteur qui connaît le nom de votre DRH et le numéro de commande ne vous convainc pas d'agir sans vérifier. L'urgence présentée ne compresse pas votre délai de vérification. Vous ne laissez pas un collègue inconnu utiliser votre session ouverte. Cette résistance aux prétextes bien construits — qui suppose de tenir sa position même face à quelqu'un qui semble légitimement pressé — est ce qui arrête les attaques par ingénierie sociale." },
        },
      }
    ],

    3: [
      {
        type: "choix",
        text: "Un recruteur vous contacte sur LinkedIn et vous demande de décrire l'environnement technique de votre poste actuel pour évaluer votre profil. Vous cherchez à changer de travail.",
        tags: ["réflexes", "partage d'information"],
        answers: [
          { text: "Je lui décris en détail — c'est pour un recrutement et ça montre mon expertise.", score: 0 },
          { text: "Je décris les technologies de façon générique sans mentionner les spécificités de l'infrastructure de mon employeur.", score: 2 },
          { text: "Je lui demande le nom de l'entreprise et le poste avant de décider quoi partager.", score: 1 },
          { text: "Je partage ce qui est visible sur le site public de mon entreprise.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre vigilance au quotidien s'applique aux situations évidentes mais pas aux informations qui semblent anodines", desc: "Décrire en détail son infrastructure à un recruteur, publier une photo avec un document visible en arrière-plan, répondre librement aux questions d'un journaliste sur les outils internes : ces informations servent à construire les attaques suivantes. Ce qui semble public et anodin peut être exactement ce dont un attaquant a besoin pour rendre son prochain message convaincant." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez de bons réflexes sur les situations évidentes mais votre vigilance sur les informations s'étend moins bien aux situations indirectes", desc: "Vous faites attention à vos mots de passe et à vos clics. Mais protéger les informations sur l'organisation interne lors d'un recrutement, recadrer une photo avant de la publier, répondre de façon générique aux questions techniques d'un interlocuteur externe : ces réflexes de discrétion sur les informations indirectes sont encore insuffisamment automatiques." },
          haut: { label: "Réflexes installés", titre: "Votre vigilance s'étend aux informations indirectes — photos, réseaux sociaux, conversations avec des tiers", desc: "Vous recadrez vos photos avant de les publier. Vous décrivez votre expertise sans détailler l'infrastructure de votre employeur. Vous répondez aux questions techniques externes de façon générique. Vous lisez sérieusement les alertes de phishing même quand elles arrivent au mauvais moment. Cette extension de la vigilance aux informations indirectes est ce qui empêche votre environnement professionnel de devenir une source de renseignement pour les attaques futures." },
        },
      }, 
      {
        type: "likert",
        text: "Vous distinguez les informations que vous pouvez partager librement des informations qui concernent l'infrastructure, l'organisation ou les systèmes de votre entreprise.",
        tags: ["réflexes", "discrétion"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre vigilance au quotidien s'applique aux situations évidentes mais pas aux informations qui semblent anodines", desc: "Décrire en détail son infrastructure à un recruteur, publier une photo avec un document visible en arrière-plan, répondre librement aux questions d'un journaliste sur les outils internes : ces informations servent à construire les attaques suivantes. Ce qui semble public et anodin peut être exactement ce dont un attaquant a besoin pour rendre son prochain message convaincant." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez de bons réflexes sur les situations évidentes mais votre vigilance sur les informations s'étend moins bien aux situations indirectes", desc: "Vous faites attention à vos mots de passe et à vos clics. Mais protéger les informations sur l'organisation interne lors d'un recrutement, recadrer une photo avant de la publier, répondre de façon générique aux questions techniques d'un interlocuteur externe : ces réflexes de discrétion sur les informations indirectes sont encore insuffisamment automatiques." },
          haut: { label: "Réflexes installés", titre: "Votre vigilance s'étend aux informations indirectes — photos, réseaux sociaux, conversations avec des tiers", desc: "Vous recadrez vos photos avant de les publier. Vous décrivez votre expertise sans détailler l'infrastructure de votre employeur. Vous répondez aux questions techniques externes de façon générique. Vous lisez sérieusement les alertes de phishing même quand elles arrivent au mauvais moment. Cette extension de la vigilance aux informations indirectes est ce qui empêche votre environnement professionnel de devenir une source de renseignement pour les attaques futures." },
        },
      }, 
      {
        type: "choix",
        text: "Vous recevez un mail interne d'un compte @votreentreprise.com vous demandant de voter pour un sondage interne en cliquant sur un lien. Le lien pointe vers un service externe.",
        tags: ["réflexes", "mail interne"],
        answers: [
          { text: "Je clique — le mail vient d'une adresse interne, c'est forcément légitime.", score: 0 },
          { text: "Je vérifie sur l'intranet si un sondage interne est annoncé avant de cliquer.", score: 2 },
          { text: "Je survole le lien pour vérifier l'URL de destination avant de cliquer.", score: 1.5 },
          { text: "Je signale le mail à l'équipe informatique avant de faire quoi que ce soit.", score: 1.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre vigilance au quotidien s'applique aux situations évidentes mais pas aux informations qui semblent anodines", desc: "Décrire en détail son infrastructure à un recruteur, publier une photo avec un document visible en arrière-plan, répondre librement aux questions d'un journaliste sur les outils internes : ces informations servent à construire les attaques suivantes. Ce qui semble public et anodin peut être exactement ce dont un attaquant a besoin pour rendre son prochain message convaincant." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez de bons réflexes sur les situations évidentes mais votre vigilance sur les informations s'étend moins bien aux situations indirectes", desc: "Vous faites attention à vos mots de passe et à vos clics. Mais protéger les informations sur l'organisation interne lors d'un recrutement, recadrer une photo avant de la publier, répondre de façon générique aux questions techniques d'un interlocuteur externe : ces réflexes de discrétion sur les informations indirectes sont encore insuffisamment automatiques." },
          haut: { label: "Réflexes installés", titre: "Votre vigilance s'étend aux informations indirectes — photos, réseaux sociaux, conversations avec des tiers", desc: "Vous recadrez vos photos avant de les publier. Vous décrivez votre expertise sans détailler l'infrastructure de votre employeur. Vous répondez aux questions techniques externes de façon générique. Vous lisez sérieusement les alertes de phishing même quand elles arrivent au mauvais moment. Cette extension de la vigilance aux informations indirectes est ce qui empêche votre environnement professionnel de devenir une source de renseignement pour les attaques futures." },
        },
      }, 
      {
        type: "choix",
        text: "Vous publiez une photo de votre bureau sur Instagram pour montrer votre nouveau poste de travail. En arrière-plan, on distingue un tableau blanc avec un schéma de l'architecture réseau.",
        tags: ["réflexes", "réseau social"],
        answers: [
          { text: "Je publie — un schéma de réseau en arrière-plan ne présente pas de risque réel.", score: 0 },
          { text: "Je recadre la photo pour exclure le tableau blanc avant de publier.", score: 2 },
          { text: "Je floute l'arrière-plan avant de publier.", score: 2 },
          { text: "Je publie en rendant la photo visible uniquement pour mes amis.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre vigilance au quotidien s'applique aux situations évidentes mais pas aux informations qui semblent anodines", desc: "Décrire en détail son infrastructure à un recruteur, publier une photo avec un document visible en arrière-plan, répondre librement aux questions d'un journaliste sur les outils internes : ces informations servent à construire les attaques suivantes. Ce qui semble public et anodin peut être exactement ce dont un attaquant a besoin pour rendre son prochain message convaincant." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez de bons réflexes sur les situations évidentes mais votre vigilance sur les informations s'étend moins bien aux situations indirectes", desc: "Vous faites attention à vos mots de passe et à vos clics. Mais protéger les informations sur l'organisation interne lors d'un recrutement, recadrer une photo avant de la publier, répondre de façon générique aux questions techniques d'un interlocuteur externe : ces réflexes de discrétion sur les informations indirectes sont encore insuffisamment automatiques." },
          haut: { label: "Réflexes installés", titre: "Votre vigilance s'étend aux informations indirectes — photos, réseaux sociaux, conversations avec des tiers", desc: "Vous recadrez vos photos avant de les publier. Vous décrivez votre expertise sans détailler l'infrastructure de votre employeur. Vous répondez aux questions techniques externes de façon générique. Vous lisez sérieusement les alertes de phishing même quand elles arrivent au mauvais moment. Cette extension de la vigilance aux informations indirectes est ce qui empêche votre environnement professionnel de devenir une source de renseignement pour les attaques futures." },
        },
      }, 
      {
        type: "choix",
        text: "Votre entreprise organise une simulation de phishing. Vous êtes tombé·e dans le piège et avez cliqué. On vous redirige vers une page de sensibilisation. Vous trouvez ça intrusif.",
        tags: ["réflexes", "sensibilisation"],
        answers: [
          { text: "Je me plains auprès de mon responsable — ce type de test n'est pas acceptable.", score: 0 },
          { text: "Je lis attentivement la page de sensibilisation pour comprendre ce que j'aurais dû détecter.", score: 2 },
          { text: "Je ferme la page rapidement — j'ai compris le message.", score: 0.5 },
          { text: "Je note mentalement d'être plus vigilant·e à l'avenir.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre vigilance au quotidien s'applique aux situations évidentes mais pas aux informations qui semblent anodines", desc: "Décrire en détail son infrastructure à un recruteur, publier une photo avec un document visible en arrière-plan, répondre librement aux questions d'un journaliste sur les outils internes : ces informations servent à construire les attaques suivantes. Ce qui semble public et anodin peut être exactement ce dont un attaquant a besoin pour rendre son prochain message convaincant." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez de bons réflexes sur les situations évidentes mais votre vigilance sur les informations s'étend moins bien aux situations indirectes", desc: "Vous faites attention à vos mots de passe et à vos clics. Mais protéger les informations sur l'organisation interne lors d'un recrutement, recadrer une photo avant de la publier, répondre de façon générique aux questions techniques d'un interlocuteur externe : ces réflexes de discrétion sur les informations indirectes sont encore insuffisamment automatiques." },
          haut: { label: "Réflexes installés", titre: "Votre vigilance s'étend aux informations indirectes — photos, réseaux sociaux, conversations avec des tiers", desc: "Vous recadrez vos photos avant de les publier. Vous décrivez votre expertise sans détailler l'infrastructure de votre employeur. Vous répondez aux questions techniques externes de façon générique. Vous lisez sérieusement les alertes de phishing même quand elles arrivent au mauvais moment. Cette extension de la vigilance aux informations indirectes est ce qui empêche votre environnement professionnel de devenir une source de renseignement pour les attaques futures." },
        },
      }, 
      {
        type: "likert",
        text: "Vous participez sérieusement aux exercices et formations de sensibilisation au phishing organisés par votre entreprise, sans les traiter comme une perte de temps.",
        tags: ["réflexes", "formation"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre vigilance au quotidien s'applique aux situations évidentes mais pas aux informations qui semblent anodines", desc: "Décrire en détail son infrastructure à un recruteur, publier une photo avec un document visible en arrière-plan, répondre librement aux questions d'un journaliste sur les outils internes : ces informations servent à construire les attaques suivantes. Ce qui semble public et anodin peut être exactement ce dont un attaquant a besoin pour rendre son prochain message convaincant." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez de bons réflexes sur les situations évidentes mais votre vigilance sur les informations s'étend moins bien aux situations indirectes", desc: "Vous faites attention à vos mots de passe et à vos clics. Mais protéger les informations sur l'organisation interne lors d'un recrutement, recadrer une photo avant de la publier, répondre de façon générique aux questions techniques d'un interlocuteur externe : ces réflexes de discrétion sur les informations indirectes sont encore insuffisamment automatiques." },
          haut: { label: "Réflexes installés", titre: "Votre vigilance s'étend aux informations indirectes — photos, réseaux sociaux, conversations avec des tiers", desc: "Vous recadrez vos photos avant de les publier. Vous décrivez votre expertise sans détailler l'infrastructure de votre employeur. Vous répondez aux questions techniques externes de façon générique. Vous lisez sérieusement les alertes de phishing même quand elles arrivent au mauvais moment. Cette extension de la vigilance aux informations indirectes est ce qui empêche votre environnement professionnel de devenir une source de renseignement pour les attaques futures." },
        },
      }, 
      {
        type: "choix",
        text: "Un mail de votre fournisseur d'énergie vous informe d'un avoir à récupérer. Le mail est bien présenté, le logo est correct et le lien semble aller vers le bon site. Mais vous n'attendiez pas ce mail.",
        tags: ["réflexes", "suspicion saine"],
        answers: [
          { text: "Je clique — tout semble correct et il y a un avoir à récupérer.", score: 0 },
          { text: "Je me connecte directement sur le site du fournisseur sans passer par le lien du mail.", score: 2 },
          { text: "Je passe la souris sur le lien pour vérifier l'URL avant de cliquer.", score: 1.5 },
          { text: "Je contacte le service client du fournisseur pour vérifier l'avoir.", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre vigilance au quotidien s'applique aux situations évidentes mais pas aux informations qui semblent anodines", desc: "Décrire en détail son infrastructure à un recruteur, publier une photo avec un document visible en arrière-plan, répondre librement aux questions d'un journaliste sur les outils internes : ces informations servent à construire les attaques suivantes. Ce qui semble public et anodin peut être exactement ce dont un attaquant a besoin pour rendre son prochain message convaincant." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez de bons réflexes sur les situations évidentes mais votre vigilance sur les informations s'étend moins bien aux situations indirectes", desc: "Vous faites attention à vos mots de passe et à vos clics. Mais protéger les informations sur l'organisation interne lors d'un recrutement, recadrer une photo avant de la publier, répondre de façon générique aux questions techniques d'un interlocuteur externe : ces réflexes de discrétion sur les informations indirectes sont encore insuffisamment automatiques." },
          haut: { label: "Réflexes installés", titre: "Votre vigilance s'étend aux informations indirectes — photos, réseaux sociaux, conversations avec des tiers", desc: "Vous recadrez vos photos avant de les publier. Vous décrivez votre expertise sans détailler l'infrastructure de votre employeur. Vous répondez aux questions techniques externes de façon générique. Vous lisez sérieusement les alertes de phishing même quand elles arrivent au mauvais moment. Cette extension de la vigilance aux informations indirectes est ce qui empêche votre environnement professionnel de devenir une source de renseignement pour les attaques futures." },
        },
      }, 
      {
        type: "choix",
        text: "Un nouveau collègue, Ibrahim, vous dit qu'il a failli cliquer sur un mail de phishing ce matin mais qu'il a eu un doute. Il hésite à le signaler pour ne pas 'faire compliqué'.",
        tags: ["réflexes", "culture équipe"],
        answers: [
          { text: "Je lui dis que ça n'est peut-être pas nécessaire s'il n'a pas cliqué.", score: 0 },
          { text: "Je l'encourage à signaler — même un doute sans clic est utile pour la détection.", score: 2 },
          { text: "Je lui propose de signaler avec lui pour que ce soit moins intimidant.", score: 2 },
          { text: "Je lui dis de noter les caractéristiques du mail pour s'en souvenir.", score: 0.5 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre vigilance au quotidien s'applique aux situations évidentes mais pas aux informations qui semblent anodines", desc: "Décrire en détail son infrastructure à un recruteur, publier une photo avec un document visible en arrière-plan, répondre librement aux questions d'un journaliste sur les outils internes : ces informations servent à construire les attaques suivantes. Ce qui semble public et anodin peut être exactement ce dont un attaquant a besoin pour rendre son prochain message convaincant." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez de bons réflexes sur les situations évidentes mais votre vigilance sur les informations s'étend moins bien aux situations indirectes", desc: "Vous faites attention à vos mots de passe et à vos clics. Mais protéger les informations sur l'organisation interne lors d'un recrutement, recadrer une photo avant de la publier, répondre de façon générique aux questions techniques d'un interlocuteur externe : ces réflexes de discrétion sur les informations indirectes sont encore insuffisamment automatiques." },
          haut: { label: "Réflexes installés", titre: "Votre vigilance s'étend aux informations indirectes — photos, réseaux sociaux, conversations avec des tiers", desc: "Vous recadrez vos photos avant de les publier. Vous décrivez votre expertise sans détailler l'infrastructure de votre employeur. Vous répondez aux questions techniques externes de façon générique. Vous lisez sérieusement les alertes de phishing même quand elles arrivent au mauvais moment. Cette extension de la vigilance aux informations indirectes est ce qui empêche votre environnement professionnel de devenir une source de renseignement pour les attaques futures." },
        },
      }, 
      {
        type: "likert",
        text: "Quand vous avez un doute sur un mail ou une demande, vous le signalez même si vous n'avez rien fait de suspect — le doute seul est une information utile.",
        tags: ["réflexes", "doute"],
        answers: [
          { text: "Jamais", score: 0 },
          { text: "Rarement", score: 0.5 },
          { text: "Parfois", score: 1 },
          { text: "Souvent", score: 1.5 },
          { text: "Toujours", score: 2 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre vigilance au quotidien s'applique aux situations évidentes mais pas aux informations qui semblent anodines", desc: "Décrire en détail son infrastructure à un recruteur, publier une photo avec un document visible en arrière-plan, répondre librement aux questions d'un journaliste sur les outils internes : ces informations servent à construire les attaques suivantes. Ce qui semble public et anodin peut être exactement ce dont un attaquant a besoin pour rendre son prochain message convaincant." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez de bons réflexes sur les situations évidentes mais votre vigilance sur les informations s'étend moins bien aux situations indirectes", desc: "Vous faites attention à vos mots de passe et à vos clics. Mais protéger les informations sur l'organisation interne lors d'un recrutement, recadrer une photo avant de la publier, répondre de façon générique aux questions techniques d'un interlocuteur externe : ces réflexes de discrétion sur les informations indirectes sont encore insuffisamment automatiques." },
          haut: { label: "Réflexes installés", titre: "Votre vigilance s'étend aux informations indirectes — photos, réseaux sociaux, conversations avec des tiers", desc: "Vous recadrez vos photos avant de les publier. Vous décrivez votre expertise sans détailler l'infrastructure de votre employeur. Vous répondez aux questions techniques externes de façon générique. Vous lisez sérieusement les alertes de phishing même quand elles arrivent au mauvais moment. Cette extension de la vigilance aux informations indirectes est ce qui empêche votre environnement professionnel de devenir une source de renseignement pour les attaques futures." },
        },
      }, 
      {
        type: "choix",
        text: "Votre entreprise envoie régulièrement des alertes sur les nouvelles techniques de phishing en circulation. Ces mails arrivent souvent au mauvais moment.",
        tags: ["réflexes", "veille"],
        answers: [
          { text: "Je les lis en diagonale — je connais déjà les principes du phishing.", score: 0 },
          { text: "Je les lis sérieusement — les techniques évoluent et les nouvelles alertes décrivent ce qui est actif en ce moment.", score: 2 },
          { text: "Je les archive pour les lire quand j'aurai plus de temps.", score: 0.5 },
          { text: "Je les lis uniquement si l'objet me semble concerner mon périmètre.", score: 1 },
        ],
        profiles: {
          bas: { label: "Repères à consolider", titre: "Votre vigilance au quotidien s'applique aux situations évidentes mais pas aux informations qui semblent anodines", desc: "Décrire en détail son infrastructure à un recruteur, publier une photo avec un document visible en arrière-plan, répondre librement aux questions d'un journaliste sur les outils internes : ces informations servent à construire les attaques suivantes. Ce qui semble public et anodin peut être exactement ce dont un attaquant a besoin pour rendre son prochain message convaincant." },
          moyen: { label: "Pratiques en développement", titre: "Vous avez de bons réflexes sur les situations évidentes mais votre vigilance sur les informations s'étend moins bien aux situations indirectes", desc: "Vous faites attention à vos mots de passe et à vos clics. Mais protéger les informations sur l'organisation interne lors d'un recrutement, recadrer une photo avant de la publier, répondre de façon générique aux questions techniques d'un interlocuteur externe : ces réflexes de discrétion sur les informations indirectes sont encore insuffisamment automatiques." },
          haut: { label: "Réflexes installés", titre: "Votre vigilance s'étend aux informations indirectes — photos, réseaux sociaux, conversations avec des tiers", desc: "Vous recadrez vos photos avant de les publier. Vous décrivez votre expertise sans détailler l'infrastructure de votre employeur. Vous répondez aux questions techniques externes de façon générique. Vous lisez sérieusement les alertes de phishing même quand elles arrivent au mauvais moment. Cette extension de la vigilance aux informations indirectes est ce qui empêche votre environnement professionnel de devenir une source de renseignement pour les attaques futures." },
        },
      }
    ],

  },

  }); // fin Object.assign CUSTOM_QUESTIONS

  // ─────────────────────────────────────────────────────────────────────────
  //  ENREGISTREMENT DU DOMAINE
  // ─────────────────────────────────────────────────────────────────────────

  window.ITS_registerTheme("cybersecurite", "Cybersécurité", "🔐", [

    ["phishing-manipulation", "Phishing, arnaques et tentatives de manipulation", "Tous publics",
      "Reconnaître les tentatives, réagir correctement et résister aux prétextes élaborés.",
      { domain: "cyber", chapters: [
        ["Reconnaître les tentatives de manipulation",  "Détecter les signaux d'alerte même dans les messages bien construits."],
        ["Réagir correctement face à une tentative",    "Signaler immédiatement, déconnecter, changer ses identifiants — sans attendre."],
        ["Résister à la pression et aux prétextes",     "Maintenir la vérification indépendante même face à une autorité apparente ou une urgence."],
        ["Adopter les bons réflexes au quotidien",      "Discrétion sur les informations indirectes, signalement du doute, participation aux exercices."]
      ]}
    ],

  ]);

})();