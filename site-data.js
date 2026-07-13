window.GP_SITE = {
  mainInstagram: "https://www.instagram.com/gregpromo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  eventInstagram: "https://www.instagram.com/gregpromo_event?igsh=MWg0Z3lzOWxkanJ0OA==",
  bookingEmail: "booking@gregpromo.com",
  formspreeEndpoint: "",

  supabase: {
    url: "https://ukhlfcgodzlvgxkexylh.supabase.co",
    anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVraGxmY2dvZHpsdmd4a2V4eWxoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM1MDQwNTQsImV4cCI6MjA5OTA4MDA1NH0.0qu8LAt6tLUa8oT_gkA8eYuJh7PJCVvV9GjoCW8INGE",
    galleryBucket: "greg-promo-gallery",
    galleryTable: "gallery_submissions",
    requireApproval: true
  },

  soccerApi: {
    mode: "live",
    proxyUrl: "https://ukhlfcgodzlvgxkexylh.supabase.co/functions/v1/soccer",
    defaultCompetition: "laliga",
    defaultSeason: "2024",
    availableSeasons: ["2024", "2023", "2022"],
    lockedSeasons: ["2026", "2025"],
    competitions: [
      { key: "laliga", label: "La Liga", frLabel: "La Liga", country: "Spain", frCountry: "Espagne", accent: "#e1b12c" },
      { key: "premier", label: "Premier League", frLabel: "Premier League", country: "England", frCountry: "Angleterre", accent: "#2347ff" },
      { key: "champions", label: "Champions League", frLabel: "Ligue des Champions", country: "Europe", frCountry: "Europe", accent: "#173bba" },
      { key: "europa", label: "Europa League", frLabel: "Europa League", country: "Europe", frCountry: "Europe", accent: "#ff7a00" },
      { key: "ligue1", label: "Ligue 1", frLabel: "Ligue 1", country: "France", frCountry: "France", accent: "#d71920" },
      { key: "seriea", label: "Serie A", frLabel: "Serie A", country: "Italy", frCountry: "Italie", accent: "#0047ff" },
      { key: "bundesliga", label: "Bundesliga", frLabel: "Bundesliga", country: "Germany", frCountry: "Allemagne", accent: "#e1262f" },
      { key: "mls", label: "MLS", frLabel: "MLS", country: "USA", frCountry: "États-Unis", accent: "#1f2a44" },
      { key: "brasileirao", label: "Brasileirão", frLabel: "Brasileirão", country: "Brazil", frCountry: "Brésil", accent: "#14a64a" },
      { key: "ligamx", label: "Liga MX", frLabel: "Liga MX", country: "Mexico", frCountry: "Mexique", accent: "#009f5f" },
      { key: "saudi", label: "Saudi Pro League", frLabel: "Saudi Pro League", country: "Saudi Arabia", frCountry: "Arabie Saoudite", accent: "#0a8f4d" },
      { key: "worldcup", label: "World Cup", frLabel: "Coupe du Monde", country: "FIFA", frCountry: "FIFA", accent: "#d9a72b" }
    ]
  },

  videos: {
    hero: "assets/videos/heros-recap-2.mp4",
    birthday: "assets/videos/greg-birthday-film-2.mp4",
    eventRecap: "assets/videos/artists-vs-influencers-recap.mp4",
    crowd: "assets/videos/crowd-energys.mp4.mp4",
    behind: "assets/videos/behind-the-scenes.mp4",
    performance: "assets/videos/performance.mp4",
    walkout: "assets/videos/player-walkout.mp4",
    fans: "assets/videos/fan-reactions.mp4"
  },

  i18n: {
    fr: {
      navHome: "Accueil", navArticles: "Articles", navEvents: "Événements", navVideos: "Vidéos", navSports: "Sports", navGallery: "Galerie", navAdvertise: "Promotion", navCommunity: "Communauté", navContact: "Contact", navAbout: "À propos", menuLabel: "Menu", sportsKicker: "Bureau Sports", sportsHeroTitle: "Scores, classements et culture locale.", sportsHeroText: "Un tableau clair pour suivre les grandes ligues et garder les moments du Haitian All-Star Game au centre.", footballBoard: "Tableau football", tableMatches: "classement & matchs", seasonLabel: "Saison", refreshBoard: "Actualiser", leaguesLabel: "Ligues", leagueHelp: "Choisissez une ligue et une saison. Les données disponibles se chargent automatiquement.", officialTable: "Table officielle", standingsTitle: "Classement", recentFixtures: "Derniers résultats", matchesTitle: "Matchs", leadersLabel: "Leaders", scorersTitle: "Meilleurs buteurs", loadingStandings: "Chargement du classement...", loadingMatches: "Chargement des matchs...", loadingScorers: "Chargement des buteurs...", allStarLabel: "Haitian All-Star Game", localGameTitle: "Le match local reste au centre.", localGameText: "Les ligues mondiales donnent le rythme. Mais l’identité sportive de Greg Promo se construit aussi avec le terrain, les équipes, les drapeaux, les supporters, les DJ et les vraies histoires de communauté.", openRecap: "Voir le recap All-Star",
      heroKicker: "Greg Promo Media · Haïti · Miami · Culture",
      heroTitle: "La culture se raconte sur le terrain.",
      heroText: "Greg Promo documente les moments que les gens retiennent vraiment : le match, la foule, les artistes, la musique, les histoires et la communauté qui transforme chaque activité en souvenir.",
      ctaRecap: "Voir le recap", ctaVideo: "Voir les vidéos", ctaPromo: "Réserver une promo",
      modelTitle: "Un média, une présence, une communauté.",
      modelText: "Greg Promo réunit couverture média, sport, événements, vidéo, promotion et visibilité artistique autour d’une même plateforme.",
      proofTitle: "Le travail se voit.", latestTitle: "Dernières histoires", sportsTitle: "Sports Desk", loveTitle: "Messages de la communauté",
      uploadTitle: "Ajouter une photo d’activité", uploadText: "Partagez un moment de l’événement. Les photos peuvent être validées avant d’apparaître dans la galerie publique.", uploadName: "Votre nom", uploadActivity: "Nom de l’activité", uploadCity: "Ville", uploadCaption: "Légende", uploadFile: "Photo", uploadSubmit: "Envoyer la photo", uploadPending: "Photo envoyée. Elle apparaîtra après validation.", uploadReady: "Photo publiée dans la galerie.", uploadSetup: "Les envois publics seront bientôt disponibles.", galleryTitle: "Galerie publique", galleryText: "Photos officielles et moments partagés autour des activités Greg Promo.", sportsLocked: "Les saisons 2025/2026 demandent un plan API supérieur. La page reste propre et charge les saisons disponibles.", birthdayTitle: "Film d’anniversaire", birthdayText: "Ajoutez la vidéo d’anniversaire dans les assets pour afficher un moment plus personnel de Greg Promo.", aboutGregTitle: "Antoine Gregory, dit Greg Promo", aboutGregText: "Originaire de Pétion-Ville, Antoine Gregory a construit Greg Promo comme une vitrine pour la culture, les événements, les artistes et la jeunesse haïtienne. Sa plateforme avance avec une idée simple : montrer les moments réels avec discipline, rapidité et respect de la communauté."
    },
    en: {
      navHome: "Home", navArticles: "Articles", navEvents: "Events", navVideos: "Videos", navSports: "Sports", navGallery: "Gallery", navAdvertise: "Promotion", navCommunity: "Community", navContact: "Contact", navAbout: "About", menuLabel: "Menu", sportsKicker: "Sports Desk", sportsHeroTitle: "Scores, tables and local culture.", sportsHeroText: "A clean board for major leagues while keeping the Haitian All-Star Game at the center.", footballBoard: "Football board", tableMatches: "table & matches", seasonLabel: "Season", refreshBoard: "Refresh", leaguesLabel: "Leagues", leagueHelp: "Choose a league and season. Available data loads automatically.", officialTable: "Official table", standingsTitle: "Standings", recentFixtures: "Recent results", matchesTitle: "Matches", leadersLabel: "Leaders", scorersTitle: "Top scorers", loadingStandings: "Loading standings...", loadingMatches: "Loading matches...", loadingScorers: "Loading scorers...", allStarLabel: "Haitian All-Star Game", localGameTitle: "The local game stays at the center.", localGameText: "Global leagues set the rhythm. Greg Promo’s sports identity also lives through the field, teams, flags, supporters, DJs and real community stories.", openRecap: "Open All-Star recap",
      heroKicker: "Greg Promo Media · Haiti · Miami · Culture",
      heroTitle: "Culture lives on the field.",
      heroText: "Greg Promo documents the moments people remember: the match, the crowd, the artists, the music, the stories and the community that turns every activity into memory.",
      ctaRecap: "View recap", ctaVideo: "Watch videos", ctaPromo: "Book promotion",
      modelTitle: "A media voice, a presence, a community.", modelText: "Greg Promo brings media coverage, sports, events, video, promotion and artist visibility into one platform.",
      proofTitle: "The work is visible.", latestTitle: "Latest stories", sportsTitle: "Sports Desk", loveTitle: "Community messages",
      uploadTitle: "Add an activity photo", uploadText: "Share a moment from the event. Photos may be approved before appearing in the public gallery.", uploadName: "Your name", uploadActivity: "Activity name", uploadCity: "City", uploadCaption: "Caption", uploadFile: "Photo", uploadSubmit: "Submit photo", uploadPending: "Photo submitted. It will appear after approval.", uploadReady: "Photo published in the gallery.", uploadSetup: "Public submissions will be available soon.", galleryTitle: "Public gallery", galleryText: "Official photos and submitted moments around Greg Promo activities.", sportsLocked: "2025/2026 seasons require a higher API plan. This page stays clean and loads the seasons available to your account.", birthdayTitle: "Birthday Film", birthdayText: "Add the birthday video to assets to display a more personal Greg Promo moment.", aboutGregTitle: "Antoine Gregory, known as Greg Promo", aboutGregText: "Originally from Pétion-Ville, Antoine Gregory built Greg Promo as a window into Haitian culture, events, artists and youth energy. The platform moves with a simple idea: show real moments with discipline, speed and respect for the community."
    }
  },

  demoSports: {
    matches: [
      { home: "Barcelona", score: "2–1", away: "Real Madrid", status: "Sample board" },
      { home: "Atlético Madrid", score: "1–1", away: "Sevilla", status: "Sample board" },
      { home: "Artists", score: "vs", away: "Influencers", status: "All-Star Game" },
      { home: "Greg Promo All-Stars", score: "Culture", away: "Miami Crowd", status: "Local board" }
    ],
    standings: [
      { pos: 1, team: "Barcelona", pts: 88, gd: 63 },
      { pos: 2, team: "Real Madrid", pts: 84, gd: 58 },
      { pos: 3, team: "Atlético Madrid", pts: 76, gd: 34 },
      { pos: 4, team: "Athletic Club", pts: 70, gd: 24 },
      { pos: 5, team: "Villarreal", pts: 65, gd: 20 },
      { pos: 6, team: "Real Betis", pts: 60, gd: 9 }
    ],
    scorers: [
      { name: "Robert Lewandowski", team: "Barcelona", goals: 27 },
      { name: "Kylian Mbappé", team: "Real Madrid", goals: 31 },
      { name: "Featured All-Star", team: "Greg Promo Media", goals: 1 }
    ]
  },

  textMap: {

    "Scores, classements et culture locale.": { fr: "Scores, classements et culture locale.", en: "Scores, tables and local culture." },
    "Un tableau clair pour suivre les grandes ligues et garder les moments du Haitian All-Star Game au centre.": { fr: "Un tableau clair pour suivre les grandes ligues et garder les moments du Haitian All-Star Game au centre.", en: "A clean board for major leagues while keeping the Haitian All-Star Game at the center." },
    "Table officielle": { fr: "Table officielle", en: "Official table" },
    "Derniers résultats": { fr: "Derniers résultats", en: "Recent results" },
    "Leaders": { fr: "Leaders", en: "Leaders" },
    "Le match local reste au centre.": { fr: "Le match local reste au centre.", en: "The local game stays at the center." },
    "Voir le recap All-Star": { fr: "Voir le recap All-Star", en: "Open All-Star recap" },
    "Video Room": { fr: "Salle vidéo", en: "Video Room" },
    "Videos from the assets folder.": { fr: "Les moments vidéo de Greg Promo.", en: "Greg Promo video moments." },
    "No YouTube needed. Upload MP4 files to assets/videos/ using the file names below.": { fr: "Recaps, coulisses, performances et moments forts autour des activités Greg Promo.", en: "Recaps, behind-the-scenes, performances and highlight moments around Greg Promo activities." },
    "Artistes vs Influenceurs Recap": { fr: "Récap Artistes vs Influenceurs", en: "Artists vs Influencers Recap" },
    "Birthday Film": { fr: "Film d’anniversaire", en: "Birthday Film" },
    "Crowd Energy": { fr: "Énergie du public", en: "Crowd Energy" },
    "Behind the Scenes": { fr: "Coulisses", en: "Behind the Scenes" },
    "Player Walkout": { fr: "Entrée des joueurs", en: "Player Walkout" },
    "Photos officielles. Moments partagés.": { fr: "Photos officielles. Moments partagés.", en: "Official photos. Shared moments." },
    "Partagez un moment réel.": { fr: "Partagez un moment réel.", en: "Share a real moment." },
    "Gallery Feed": { fr: "Flux galerie", en: "Gallery Feed" },
    "Activity Wall": { fr: "Mur d’activités", en: "Activity Wall" },
    "Official visuals stay first. Community uploads appear here after Supabase is connected and approved.": { fr: "Les visuels officiels et les photos approuvées de la communauté apparaissent ici.", en: "Official visuals and approved community photos appear here." },
    "Sports Desk": { fr: "Bureau Sports", en: "Sports Desk" },
    "Live leagues. Local culture. One board.": { fr: "Ligues, classements et culture locale au même endroit.", en: "Leagues, tables and local culture in one place." },
    "Global football data, clean league tables, and local All-Star Game recaps in one sports desk.": { fr: "Classements, résultats et moments All-Star réunis dans une page claire.", en: "Standings, results and All-Star moments together in one clean page." },
    "Football board": { fr: "Tableau football", en: "Football board" },
    "table & matches": { fr: "classement et matchs", en: "table & matches" },
    "Leagues": { fr: "Ligues", en: "Leagues" },
    "Choose a league and season. When live data is available, the table updates automatically.": { fr: "Choisissez une ligue et une saison. Les données disponibles se chargent automatiquement.", en: "Choose a league and season. Available data loads automatically." },
    "Refresh board": { fr: "Actualiser", en: "Refresh board" },
    "Standings": { fr: "Classement", en: "Standings" },
    "Latest matches": { fr: "Derniers matchs", en: "Latest matches" },
    "Top scorers": { fr: "Meilleurs buteurs", en: "Top scorers" },
    "The local game still comes first.": { fr: "Le jeu local reste au centre.", en: "The local game still comes first." },
    "The live board is useful for global leagues. But the real Greg Promo sports identity is the All-Star Game: the walkouts, the women’s team, the flags, the crowd, the DJs and the people on the field.": { fr: "Les ligues mondiales ajoutent du contexte, mais l’identité sportive de Greg Promo reste l’All-Star Game : les entrées, l’équipe féminine, les drapeaux, la foule, les DJs et les gens sur le terrain.", en: "Global leagues add context, but Greg Promo’s sports identity stays rooted in the All-Star Game: walkouts, the women’s team, flags, crowds, DJs and the people on the field." },
    "Open All-Star recap": { fr: "Voir le recap All-Star", en: "Open All-Star recap" },
    "For sponsors, media and partners.": { fr: "Pour sponsors, médias et partenaires.", en: "For sponsors, media and partners." },
    "Brand story, official bios, audience notes, event photos and social handles.": { fr: "Histoire de marque, bio officielle, audience, photos d’événements et réseaux sociaux.", en: "Brand story, official bios, audience notes, event photos and social handles." }
  }

};


// v19 complete public translation pass
window.GP_SITE.textMap = Object.assign(window.GP_SITE.textMap || {}, {
  "Media": {fr:"Média", en:"Media"},
  "Sports": {fr:"Sports", en:"Sports"},
  "Haitian All-Star Game": {fr:"Haitian All-Star Game", en:"Haitian All-Star Game"},
  "Miami": {fr:"Miami", en:"Miami"},
  "Greg Promo Event": {fr:"Greg Promo Event", en:"Greg Promo Event"},
  "Articles": {fr:"Articles", en:"Articles"},
  "Videos": {fr:"Vidéos", en:"Videos"},
  "Culture": {fr:"Culture", en:"Culture"},
  "Music": {fr:"Musique", en:"Music"},
  "Community": {fr:"Communauté", en:"Community"},
  "Our model": {fr:"Notre modèle", en:"Our model"},
  "Proof of work": {fr:"Preuves du terrain", en:"Proof of work"},
  "Pas besoin de trop expliquer. Les photos, les vidéos, les articles et les gens présents racontent l’impact.": {fr:"Pas besoin de trop expliquer. Les photos, les vidéos, les articles et les gens présents racontent l’impact.", en:"No need to over-explain. Photos, videos, articles and the people present show the impact."},
  "All articles →": {fr:"Tous les articles →", en:"All articles →"},
  "Feature": {fr:"À la une", en:"Feature"},
  "Artistes vs Influenceurs revient avec une ambition plus grande.": {fr:"Artistes vs Influenceurs revient avec une ambition plus grande.", en:"Artists vs Influencers returns with bigger ambition."},
  "Après une première édition saluée, Greg Promo ramène le terrain, la musique et la communauté au centre.": {fr:"Après une première édition saluée, Greg Promo ramène le terrain, la musique et la communauté au centre.", en:"After a praised first edition, Greg Promo brings the field, music and community back to the center."},
  "Lire →": {fr:"Lire →", en:"Read →"},
  "Profile": {fr:"Profil", en:"Profile"},
  "Antoine Gregory, la vision derrière Greg Promo.": {fr:"Antoine Gregory, la vision derrière Greg Promo.", en:"Antoine Gregory, the vision behind Greg Promo."},
  "Career": {fr:"Parcours", en:"Career"},
  "Un influenceur qui construit sa différence.": {fr:"Un influenceur qui construit sa différence.", en:"An influencer building his difference."},
  "Real clips. Real people. Real energy.": {fr:"De vraies vidéos. De vraies personnes. Une vraie énergie.", en:"Real clips. Real people. Real energy."},
  "Recaps, coulisses, anniversaires et moments forts peuvent être présentés directement sur le site avec un rendu propre et premium.": {fr:"Recaps, coulisses, anniversaires et moments forts peuvent être présentés directement sur le site avec un rendu propre et premium.", en:"Recaps, behind-the-scenes moments, birthdays and highlights can live directly on the site with a clean premium presentation."},
  "Voir les vidéos": {fr:"Voir les vidéos", en:"Watch videos"},
  "A personal piece for Greg Promo’s image — more private, more stylish, and built for the brand.": {fr:"Un moment personnel pour l’image de Greg Promo — plus intime, plus élégant, pensé pour la marque.", en:"A personal piece for Greg Promo’s image — more private, more stylish, and built for the brand."},
  "Sports Desk": {fr:"Bureau Sports", en:"Sports Desk"},
  "Follow league tables, match results and Greg Promo’s own All-Star Game recaps in one clean sports desk built for fans and culture moments.": {fr:"Les classements, les matchs et les moments All-Star peuvent vivre sur une page sportive claire, sans afficher d’informations techniques au public.", en:"League tables, match results and Greg Promo’s All-Star moments can live on one clean sports page for fans."},
  "Open sports board": {fr:"Ouvrir le tableau", en:"Open sports board"},
  "Loading board...": {fr:"Chargement...", en:"Loading board..."},
  "Loading standings...": {fr:"Chargement du classement...", en:"Loading standings..."},
  "Stay connected": {fr:"Restez connecté", en:"Stay connected"},
  "Public submissions": {fr:"Partages publics", en:"Public submissions"},
  "Invite people to send their activity photos. Approved submissions can appear inside the public gallery and keep the site alive after every event.": {fr:"Invitez le public à envoyer ses photos d’activité. Les photos validées peuvent apparaître dans la galerie publique et garder le site vivant après chaque événement.", en:"Invite people to submit activity photos. Approved submissions can appear in the public gallery and keep the site alive after every event."},
  "Share a photo": {fr:"Partager une photo", en:"Share a photo"},
  "Promotion packages": {fr:"Forfaits promotion", en:"Promotion packages"},
  "Story promo, event campaign, artist rollout, business spotlight and sponsor visibility can be organized from one clean contact flow.": {fr:"Story promo, campagne événementielle, lancement artiste, visibilité business et sponsoring peuvent être organisés depuis un parcours clair.", en:"Story promo, event campaign, artist rollout, business spotlight and sponsor visibility can all start from one clean contact flow."},
  "Book promotion": {fr:"Réserver une promo", en:"Book promotion"},
  "Pages": {fr:"Pages", en:"Pages"},
  "Business": {fr:"Business", en:"Business"},
  "Press kit": {fr:"Kit média", en:"Press kit"},
  "Contact": {fr:"Contact", en:"Contact"},
  "Social": {fr:"Réseaux", en:"Social"},
  "Greg Promo Media — culture, sports, events and diaspora energy.": {fr:"Greg Promo Media — culture, sport, événements et énergie diaspora.", en:"Greg Promo Media — culture, sports, events and diaspora energy."},
  "Built for real culture moments.": {fr:"Conçu pour les vrais moments culturels.", en:"Built for real culture moments."},
  "Videos from the assets folder.": {fr:"Vidéos des activités Greg Promo.", en:"Greg Promo activity videos."},
  "Video Room": {fr:"Salle vidéo", en:"Video Room"},
  "No YouTube needed. Upload MP4 files to assets/videos/ using the file names below.": {fr:"Recaps, coulisses, performances et moments forts autour des activités Greg Promo.", en:"Recaps, behind-the-scenes, performances and highlight moments around Greg Promo activities."},
  "Artistes vs Influenceurs Recap": {fr:"Récap Artistes vs Influenceurs", en:"Artists vs Influencers Recap"},
  "Birthday Film": {fr:"Film d’anniversaire", en:"Birthday Film"},
  "Crowd Energy": {fr:"Énergie du public", en:"Crowd Energy"},
  "Behind the Scenes": {fr:"Coulisses", en:"Behind the Scenes"},
  "Player Walkout": {fr:"Entrée des joueurs", en:"Player Walkout"},
  "Gallery Feed": {fr:"Flux galerie", en:"Gallery Feed"},
  "Activity Wall": {fr:"Mur d’activités", en:"Activity Wall"},
  "Official visuals and approved community photos appear here.": {fr:"Les visuels officiels et les photos approuvées de la communauté apparaissent ici.", en:"Official visuals and approved community photos appear here."},
  "Add activity photo": {fr:"Ajouter une photo", en:"Add activity photo"},
  "Football board": {fr:"Tableau football", en:"Football board"},
  "table & matches": {fr:"classement et matchs", en:"table & matches"},
  "Leagues": {fr:"Ligues", en:"Leagues"},
  "Choose a league and season. When live data is available, the table updates automatically.": {fr:"Choisissez une ligue et une saison. Les données disponibles se chargent automatiquement.", en:"Choose a league and season. Available data loads automatically."},
  "Refresh board": {fr:"Actualiser", en:"Refresh board"},
  "Standings": {fr:"Classement", en:"Standings"},
  "Latest matches": {fr:"Derniers matchs", en:"Latest matches"},
  "Top scorers": {fr:"Meilleurs buteurs", en:"Top scorers"},
  "The local game still comes first.": {fr:"Le jeu local reste au centre.", en:"The local game still comes first."},
  "Open All-Star recap": {fr:"Voir le recap All-Star", en:"Open All-Star recap"}
});


// v22 broader FR/EN public translation map
window.GP_SITE.textMap = Object.assign(window.GP_SITE.textMap || {}, {
  "Greg Promo Media — Culture, Sports & Events": {
    "fr": "Greg Promo Media — Culture, Sports et Événements",
    "en": "Greg Promo Media — Culture, Sports & Events"
  },
  "Media": {
    "fr": "Média",
    "en": "Media"
  },
  "Accueil": {
    "fr": "Accueil",
    "en": "Home"
  },
  "Home": {
    "fr": "Accueil",
    "en": "Home"
  },
  "Articles": {
    "fr": "Articles",
    "en": "Articles"
  },
  "Événements": {
    "fr": "Événements",
    "en": "Events"
  },
  "Events": {
    "fr": "Événements",
    "en": "Events"
  },
  "Vidéos": {
    "fr": "Vidéos",
    "en": "Videos"
  },
  "Videos": {
    "fr": "Vidéos",
    "en": "Videos"
  },
  "Sports": {
    "fr": "Sports",
    "en": "Sports"
  },
  "Galerie": {
    "fr": "Galerie",
    "en": "Gallery"
  },
  "Gallery": {
    "fr": "Galerie",
    "en": "Gallery"
  },
  "Promotion": {
    "fr": "Promotion",
    "en": "Promotion"
  },
  "Contact": {
    "fr": "Contact",
    "en": "Contact"
  },
  "Menu": {
    "fr": "Menu",
    "en": "Menu"
  },
  "Haitian All-Star Game": {
    "fr": "Haitian All-Star Game",
    "en": "Haitian All-Star Game"
  },
  "Miami": {
    "fr": "Miami",
    "en": "Miami"
  },
  "Greg Promo Event": {
    "fr": "Greg Promo Event",
    "en": "Greg Promo Event"
  },
  "Sports Desk": {
    "fr": "Bureau Sports",
    "en": "Sports Desk"
  },
  "Culture": {
    "fr": "Culture",
    "en": "Culture"
  },
  "Music": {
    "fr": "Musique",
    "en": "Music"
  },
  "Community": {
    "fr": "Communauté",
    "en": "Community"
  },
  "Greg Promo Media · Haïti · Miami · Culture": {
    "fr": "Greg Promo Media · Haïti · Miami · Culture",
    "en": "Greg Promo Media · Haiti · Miami · Culture"
  },
  "Une plateforme construite autour des moments réels.": {
    "fr": "Une plateforme construite autour des moments réels.",
    "en": "A platform built around real moments."
  },
  "Greg Promo documente la foule, les artistes, le terrain, les vidéos, les annonces et les histoires qui donnent du mouvement à la communauté haïtienne et caribéenne.": {
    "fr": "Greg Promo documente la foule, les artistes, le terrain, les vidéos, les annonces et les histoires qui donnent du mouvement à la communauté haïtienne et caribéenne.",
    "en": "Greg Promo documents the crowd, artists, field moments, videos, announcements and stories that move the Haitian and Caribbean community."
  },
  "Voir le recap": {
    "fr": "Voir le recap",
    "en": "View recap"
  },
  "Voir les vidéos": {
    "fr": "Voir les vidéos",
    "en": "Watch videos"
  },
  "Réserver une promo": {
    "fr": "Réserver une promo",
    "en": "Book promotion"
  },
  "Instagram reach": {
    "fr": "Portée Instagram",
    "en": "Instagram reach"
  },
  "Posts published": {
    "fr": "Posts publiés",
    "en": "Posts published"
  },
  "All-Star editions": {
    "fr": "Éditions All-Star",
    "en": "All-Star editions"
  },
  "Culture board": {
    "fr": "Tableau culture",
    "en": "Culture board"
  },
  "Latest recap": {
    "fr": "Dernier recap",
    "en": "Latest recap"
  },
  "North Miami Stadium became a Haitian culture scene: football, DJs, creators, fans and flags.": {
    "fr": "Le North Miami Stadium est devenu une scène culturelle haïtienne : football, DJs, créateurs, fans et drapeaux.",
    "en": "North Miami Stadium became a Haitian culture scene: football, DJs, creators, fans and flags."
  },
  "Our model": {
    "fr": "Notre modèle",
    "en": "Our model"
  },
  "Une présence. Plusieurs fonctions.": {
    "fr": "Une présence. Plusieurs fonctions.",
    "en": "One presence. Several functions."
  },
  "Greg Promo n’est pas seulement une page de blog. C’est une vitrine culturelle, un média d’événements, un espace sport et un canal de visibilité.": {
    "fr": "Greg Promo n’est pas seulement une page de blog. C’est une vitrine culturelle, un média d’événements, un espace sport et un canal de visibilité.",
    "en": "Greg Promo is not only a blog page. It is a culture showcase, event media platform, sports space and visibility channel."
  },
  "Media Platform": {
    "fr": "Plateforme média",
    "en": "Media Platform"
  },
  "Daily visibility, alerts, reposts, coverage and audience conversation around Haitian culture.": {
    "fr": "Visibilité quotidienne, alertes, reposts, couvertures et échanges autour de la culture haïtienne.",
    "en": "Daily visibility, alerts, reposts, coverage and audience conversation around Haitian culture."
  },
  "Event Engine": {
    "fr": "Moteur événementiel",
    "en": "Event Engine"
  },
  "Real events with crowd energy, sponsors, DJs, artists, content capture and post-event momentum.": {
    "fr": "Des événements réels avec public, sponsors, DJs, artistes, contenus et visibilité après l’événement.",
    "en": "Real events with crowd energy, sponsors, DJs, artists, content capture and post-event momentum."
  },
  "Sports Culture": {
    "fr": "Culture sportive",
    "en": "Sports Culture"
  },
  "The All-Star Game, match recaps, local players, fans and league tables in one clean sports desk.": {
    "fr": "All-Star Game, recaps, joueurs locaux, fans et classements dans un bureau sport clair.",
    "en": "The All-Star Game, match recaps, local players, fans and league tables in one clean sports desk."
  },
  "Video Room": {
    "fr": "Salle vidéo",
    "en": "Video Room"
  },
  "Birthday films, recaps, walkouts, crowd clips and behind-the-scenes content from local MP4 assets.": {
    "fr": "Films d’anniversaire, recaps, entrées, public et coulisses à partir de vidéos locales.",
    "en": "Birthday films, recaps, walkouts, crowd clips and behind-the-scenes content from local video assets."
  },
  "Artist rollouts, event campaigns, business spotlights and sponsor visibility with clear packages.": {
    "fr": "Lancements artistes, campagnes événementielles, visibilité business et sponsors avec des offres claires.",
    "en": "Artist rollouts, event campaigns, business spotlights and sponsor visibility with clear packages."
  },
  "Proof of work": {
    "fr": "Preuves du terrain",
    "en": "Proof of work"
  },
  "Le travail se montre.": {
    "fr": "Le travail se montre.",
    "en": "The work speaks for itself."
  },
  "Pas besoin de trop expliquer. Les photos, les vidéos, les articles et les gens présents racontent l’impact.": {
    "fr": "Pas besoin de trop expliquer. Les photos, les vidéos, les articles et les gens présents racontent l’impact.",
    "en": "No need to over-explain. The photos, videos, articles and people present show the impact."
  },
  "All-Star Game": {
    "fr": "All-Star Game",
    "en": "All-Star Game"
  },
  "Women’s team energy": {
    "fr": "Énergie de l’équipe féminine",
    "en": "Women’s team energy"
  },
  "The game expands the stage: men, women, fans, creators and sponsors all become part of the culture.": {
    "fr": "Le match élargit la scène : hommes, femmes, fans, créateurs et sponsors font partie de la culture.",
    "en": "The game expands the stage: men, women, fans, creators and sponsors all become part of the culture."
  },
  "Flags in the crowd": {
    "fr": "Drapeaux dans la foule",
    "en": "Flags in the crowd"
  },
  "Haitian pride showed up in the stands, on the track, and across social media after the event.": {
    "fr": "La fierté haïtienne s’est vue dans les gradins, sur la piste et sur les réseaux après l’événement.",
    "en": "Haitian pride showed up in the stands, on the track, and across social media after the event."
  },
  "After dark": {
    "fr": "Après la nuit",
    "en": "After dark"
  },
  "Night crew moments": {
    "fr": "Moments de nuit",
    "en": "Night crew moments"
  },
  "When the match ends, the culture continues through music, video, friendships and content drops.": {
    "fr": "Quand le match se termine, la culture continue avec la musique, les vidéos, les rencontres et les contenus.",
    "en": "When the match ends, the culture continues through music, video, friendships and content drops."
  },
  "Dernières histoires": {
    "fr": "Dernières histoires",
    "en": "Latest stories"
  },
  "Latest stories": {
    "fr": "Dernières histoires",
    "en": "Latest stories"
  },
  "All articles →": {
    "fr": "Tous les articles →",
    "en": "All articles →"
  },
  "Feature": {
    "fr": "À la une",
    "en": "Feature"
  },
  "Artistes vs Influenceurs revient avec une ambition plus grande.": {
    "fr": "Artistes vs Influenceurs revient avec une ambition plus grande.",
    "en": "Artists vs Influencers returns with bigger ambition."
  },
  "Après une première édition saluée, Greg Promo ramène le terrain, la musique et la communauté au centre.": {
    "fr": "Après une première édition saluée, Greg Promo ramène le terrain, la musique et la communauté au centre.",
    "en": "After a praised first edition, Greg Promo brings the field, music and community back to the center."
  },
  "Lire →": {
    "fr": "Lire →",
    "en": "Read →"
  },
  "Read →": {
    "fr": "Lire →",
    "en": "Read →"
  },
  "Profile": {
    "fr": "Profil",
    "en": "Profile"
  },
  "Antoine Gregory, la vision derrière Greg Promo.": {
    "fr": "Antoine Gregory, la vision derrière Greg Promo.",
    "en": "Antoine Gregory, the vision behind Greg Promo."
  },
  "Career": {
    "fr": "Parcours",
    "en": "Career"
  },
  "Un influenceur qui construit sa différence.": {
    "fr": "Un influenceur qui construit sa différence.",
    "en": "An influencer building his difference."
  },
  "Video room": {
    "fr": "Salle vidéo",
    "en": "Video room"
  },
  "Real clips. Real people. Real energy.": {
    "fr": "Vraies vidéos. Vraies personnes. Vraie énergie.",
    "en": "Real clips. Real people. Real energy."
  },
  "Recaps, coulisses, anniversaires et moments forts peuvent être présentés directement sur le site avec un rendu propre et premium.": {
    "fr": "Recaps, coulisses, anniversaires et moments forts peuvent être présentés directement sur le site avec un rendu propre et premium.",
    "en": "Recaps, behind-the-scenes moments, birthdays and highlights can live directly on the site with a clean premium presentation."
  },
  "Birthday Film": {
    "fr": "Film d’anniversaire",
    "en": "Birthday Film"
  },
  "A personal piece that can sit beside the event recaps and show Greg Promo as a real brand personality.": {
    "fr": "Un contenu plus personnel qui accompagne les recaps et montre Greg Promo comme une vraie personnalité de marque.",
    "en": "A personal piece that can sit beside the event recaps and show Greg Promo as a real brand personality."
  },
  "Follow league tables, match results and Greg Promo’s own All-Star Game recaps in one clean sports desk built for fans and culture moments.": {
    "fr": "Suivez les classements, résultats et recaps All-Star de Greg Promo dans un bureau sport clair, pensé pour les fans et les moments culturels.",
    "en": "Follow league tables, match results and Greg Promo’s own All-Star Game recaps in one clean sports desk built for fans and culture moments."
  },
  "Global football data can live beside Greg Promo’s own All-Star Game recaps. The board keeps league tables, fixtures and scorers in one clean public view.": {
    "fr": "Les données football peuvent accompagner les recaps All-Star de Greg Promo. Le tableau présente classements, matchs et buteurs dans une vue claire.",
    "en": "Global football data can live beside Greg Promo’s own All-Star Game recaps. The board keeps league tables, fixtures and scorers in one clean public view."
  },
  "Open sports board": {
    "fr": "Ouvrir le tableau sport",
    "en": "Open sports board"
  },
  "Loading board...": {
    "fr": "Chargement du tableau...",
    "en": "Loading board..."
  },
  "Loading standings...": {
    "fr": "Chargement du classement...",
    "en": "Loading standings..."
  },
  "Work with Greg Promo": {
    "fr": "Travailler avec Greg Promo",
    "en": "Work with Greg Promo"
  },
  "This is not just a contact form.": {
    "fr": "Ce n’est pas seulement un formulaire de contact.",
    "en": "This is not just a contact form."
  },
  "It is an entry point for serious promotion requests: artists, events, brands, sponsors and community projects with a real budget and a clear objective.": {
    "fr": "C’est une porte d’entrée pour les demandes sérieuses : artistes, événements, marques, sponsors et projets communautaires avec objectif clair.",
    "en": "It is an entry point for serious promotion requests: artists, events, brands, sponsors and community projects with a real budget and a clear objective."
  },
  "Promotion inquiry": {
    "fr": "Demande de promotion",
    "en": "Promotion inquiry"
  },
  "Event coverage": {
    "fr": "Couverture événementielle",
    "en": "Event coverage"
  },
  "Sponsor package": {
    "fr": "Forfait sponsor",
    "en": "Sponsor package"
  },
  "Artist rollout": {
    "fr": "Lancement artiste",
    "en": "Artist rollout"
  },
  "Submit inquiry": {
    "fr": "Envoyer la demande",
    "en": "Submit inquiry"
  },
  "Greg Promo Media — culture, sports, events and diaspora energy.": {
    "fr": "Greg Promo Media — culture, sport, événements et énergie diaspora.",
    "en": "Greg Promo Media — culture, sports, events and diaspora energy."
  },
  "Pages": {
    "fr": "Pages",
    "en": "Pages"
  },
  "Business": {
    "fr": "Business",
    "en": "Business"
  },
  "Book promotion": {
    "fr": "Réserver une promo",
    "en": "Book promotion"
  },
  "Press kit": {
    "fr": "Kit média",
    "en": "Press kit"
  },
  "Social": {
    "fr": "Réseaux",
    "en": "Social"
  },
  "Greg Promo Media. Built for real culture moments.": {
    "fr": "Greg Promo Media. Conçu pour les vrais moments culturels.",
    "en": "Greg Promo Media. Built for real culture moments."
  },
  "Editorial": {
    "fr": "Éditorial",
    "en": "Editorial"
  },
  "Articles with structure, not noise.": {
    "fr": "Des articles structurés, pas du bruit.",
    "en": "Articles with structure, not noise."
  },
  "Three stronger pieces for the website: the event announcement, the personal profile, and the deeper story of Antoine Gregory behind Greg Promo.": {
    "fr": "Trois textes solides pour le site : l’annonce de l’événement, le profil personnel et l’histoire d’Antoine Gregory derrière Greg Promo.",
    "en": "Three stronger pieces for the website: the event announcement, the personal profile, and the deeper story of Antoine Gregory behind Greg Promo."
  },
  "Article index": {
    "fr": "Index des articles",
    "en": "Article index"
  },
  "Greg Promo stories": {
    "fr": "Histoires Greg Promo",
    "en": "Greg Promo stories"
  },
  "Use these as the official editorial base for the website. They can be shortened for homepage cards and kept long on this page.": {
    "fr": "Utilisez ces textes comme base éditoriale officielle. Ils peuvent être raccourcis sur l’accueil et gardés en version longue ici.",
    "en": "Use these as the official editorial base for the website. They can be shortened for homepage cards and kept long on this page."
  },
  "Event": {
    "fr": "Événement",
    "en": "Event"
  },
  "Biography": {
    "fr": "Biographie",
    "en": "Biography"
  },
  "Bureau Sports": {
    "fr": "Bureau Sports",
    "en": "Sports Desk"
  },
  "Scores, classements et culture locale.": {
    "fr": "Scores, classements et culture locale.",
    "en": "Scores, standings and local culture."
  },
  "Un tableau clair pour suivre les grandes ligues et garder les moments du Haitian All-Star Game au centre.": {
    "fr": "Un tableau clair pour suivre les grandes ligues et garder les moments du Haitian All-Star Game au centre.",
    "en": "A clean board for major leagues while keeping Haitian All-Star Game moments at the center."
  },
  "Tableau football": {
    "fr": "Tableau football",
    "en": "Football board"
  },
  "classement & matchs": {
    "fr": "classement & matchs",
    "en": "standings & matches"
  },
  "Saison": {
    "fr": "Saison",
    "en": "Season"
  },
  "Actualiser": {
    "fr": "Actualiser",
    "en": "Refresh"
  },
  "Ligues": {
    "fr": "Ligues",
    "en": "Leagues"
  },
  "Choisissez une ligue et une saison. Les données disponibles se chargent automatiquement.": {
    "fr": "Choisissez une ligue et une saison. Les données disponibles se chargent automatiquement.",
    "en": "Choose a league and season. Available data loads automatically."
  },
  "Chargement...": {
    "fr": "Chargement...",
    "en": "Loading..."
  },
  "Table officielle": {
    "fr": "Table officielle",
    "en": "Official table"
  },
  "Classement": {
    "fr": "Classement",
    "en": "Standings"
  },
  "Chargement du classement...": {
    "fr": "Chargement du classement...",
    "en": "Loading standings..."
  },
  "Derniers résultats": {
    "fr": "Derniers résultats",
    "en": "Latest results"
  },
  "Matchs": {
    "fr": "Matchs",
    "en": "Matches"
  },
  "Chargement des matchs...": {
    "fr": "Chargement des matchs...",
    "en": "Loading matches..."
  },
  "Leaders": {
    "fr": "Leaders",
    "en": "Leaders"
  },
  "Meilleurs buteurs": {
    "fr": "Meilleurs buteurs",
    "en": "Top scorers"
  },
  "Chargement des buteurs...": {
    "fr": "Chargement des buteurs...",
    "en": "Loading scorers..."
  },
  "Le match local reste au centre.": {
    "fr": "Le match local reste au centre.",
    "en": "The local game stays at the center."
  },
  "Les ligues mondiales donnent le rythme. Mais l’identité sportive de Greg Promo se construit aussi avec le terrain, les équipes, les drapeaux, les supporters, les DJ et les vraies histoires de communauté.": {
    "fr": "Les ligues mondiales donnent le rythme. Mais l’identité sportive de Greg Promo se construit aussi avec le terrain, les équipes, les drapeaux, les supporters, les DJ et les vraies histoires de communauté.",
    "en": "Global leagues set the rhythm. But Greg Promo’s sports identity is also built through the field, teams, flags, supporters, DJs and real community stories."
  },
  "Voir le recap All-Star": {
    "fr": "Voir le recap All-Star",
    "en": "View All-Star recap"
  },
  "Moments vidéo. Énergie réelle.": {
    "fr": "Moments vidéo. Énergie réelle.",
    "en": "Video moments. Real energy."
  },
  "Recaps, coulisses, anniversaires, performances et moments forts capturés autour de Greg Promo Media.": {
    "fr": "Recaps, coulisses, anniversaires, performances et moments forts capturés autour de Greg Promo Media.",
    "en": "Recaps, behind-the-scenes moments, birthdays, performances and highlights captured around Greg Promo Media."
  },
  "Vidéo bientôt disponible.": {
    "fr": "Vidéo bientôt disponible.",
    "en": "Video coming soon."
  },
  "Artistes vs Influenceurs Recap": {
    "fr": "Récap Artistes vs Influenceurs",
    "en": "Artists vs Influencers Recap"
  },
  "Le match, la foule, les artistes, les créateurs et l’énergie du stade.": {
    "fr": "Le match, la foule, les artistes, les créateurs et l’énergie du stade.",
    "en": "The match, the crowd, artists, creators and stadium energy."
  },
  "Un moment plus personnel autour d’Antoine Gregory, dit Greg Promo.": {
    "fr": "Un moment plus personnel autour d’Antoine Gregory, dit Greg Promo.",
    "en": "A more personal moment around Antoine Gregory, known as Greg Promo."
  },
  "Crowd Energy": {
    "fr": "Énergie du public",
    "en": "Crowd Energy"
  },
  "Fans, drapeaux, ambiance et public autour du terrain.": {
    "fr": "Fans, drapeaux, ambiance et public autour du terrain.",
    "en": "Fans, flags, atmosphere and crowd around the field."
  },
  "Behind the Scenes": {
    "fr": "Coulisses",
    "en": "Behind the Scenes"
  },
  "Entrées, préparation, coulisses et moments avant le match.": {
    "fr": "Entrées, préparation, coulisses et moments avant le match.",
    "en": "Walkouts, preparation, behind-the-scenes moments and pre-match energy."
  },
  "Player Walkout": {
    "fr": "Entrée des joueurs",
    "en": "Player Walkout"
  },
  "Les joueurs, les équipes et les moments de terrain.": {
    "fr": "Les joueurs, les équipes et les moments de terrain.",
    "en": "Players, teams and field moments."
  },
  "Galerie publique": {
    "fr": "Galerie publique",
    "en": "Public gallery"
  },
  "Photos officielles. Moments partagés.": {
    "fr": "Photos officielles. Moments partagés.",
    "en": "Official photos. Shared moments."
  },
  "Photos officielles et moments partagés autour des activités Greg Promo.": {
    "fr": "Photos officielles et moments partagés autour des activités Greg Promo.",
    "en": "Official photos and shared moments around Greg Promo activities."
  },
  "Antoine Gregory": {
    "fr": "Antoine Gregory",
    "en": "Antoine Gregory"
  },
  "dit Greg Promo": {
    "fr": "dit Greg Promo",
    "en": "known as Greg Promo"
  },
  "Ajouter une photo d’activité": {
    "fr": "Ajouter une photo d’activité",
    "en": "Add activity photo"
  },
  "Partagez un moment réel.": {
    "fr": "Partagez un moment réel.",
    "en": "Share a real moment."
  },
  "Partagez un moment de l’événement. Les photos peuvent être validées avant d’apparaître dans la galerie publique.": {
    "fr": "Partagez un moment de l’événement. Les photos peuvent être validées avant d’apparaître dans la galerie publique.",
    "en": "Share a moment from the event. Photos can be approved before appearing in the public gallery."
  },
  "Les meilleures photos validées rejoignent la galerie publique.": {
    "fr": "Les meilleures photos validées rejoignent la galerie publique.",
    "en": "The best approved photos join the public gallery."
  },
  "Photo": {
    "fr": "Photo",
    "en": "Photo"
  },
  "Envoyer la photo": {
    "fr": "Envoyer la photo",
    "en": "Submit photo"
  },
  "Gallery Feed": {
    "fr": "Flux galerie",
    "en": "Gallery Feed"
  },
  "Activity Wall": {
    "fr": "Mur d’activités",
    "en": "Activity Wall"
  },
  "Official visuals and approved community photos appear here.": {
    "fr": "Les visuels officiels et les photos approuvées de la communauté apparaissent ici.",
    "en": "Official visuals and approved community photos appear here."
  },
  "Loading gallery...": {
    "fr": "Chargement de la galerie...",
    "en": "Loading gallery..."
  },
  "Events that create proof.": {
    "fr": "Des événements qui créent des preuves.",
    "en": "Events that create proof."
  },
  "Greg Promo events should have a page before, during and after: announcement, tickets, recap, sponsors, photos and video.": {
    "fr": "Les événements Greg Promo doivent avoir une page avant, pendant et après : annonce, billets, recap, sponsors, photos et vidéos.",
    "en": "Greg Promo events should have a page before, during and after: announcement, tickets, recap, sponsors, photos and video."
  },
  "Passed event": {
    "fr": "Événement passé",
    "en": "Passed event"
  },
  "Haitian All-Star Soccer Game": {
    "fr": "Haitian All-Star Soccer Game",
    "en": "Haitian All-Star Soccer Game"
  },
  "North Miami Stadium · July 5 · soccer, music, DJs and community pride.": {
    "fr": "North Miami Stadium · 5 juillet · football, musique, DJs et fierté communautaire.",
    "en": "North Miami Stadium · July 5 · soccer, music, DJs and community pride."
  },
  "Open recap": {
    "fr": "Voir le recap",
    "en": "Open recap"
  },
  "Format": {
    "fr": "Format",
    "en": "Format"
  },
  "Artists vs Influencers": {
    "fr": "Artistes vs Influenceurs",
    "en": "Artists vs Influencers"
  },
  "A recurring format with creators, athletes, DJs and sponsors.": {
    "fr": "Un format récurrent avec créateurs, athlètes, DJs et sponsors.",
    "en": "A recurring format with creators, athletes, DJs and sponsors."
  },
  "Next drop": {
    "fr": "Prochaine annonce",
    "en": "Next drop"
  },
  "Next event system": {
    "fr": "Système du prochain événement",
    "en": "Next event system"
  },
  "Use this website for announcements, sponsor decks and ticket pages.": {
    "fr": "Utilisez ce site pour les annonces, dossiers sponsors et pages de billets.",
    "en": "Use this website for announcements, sponsor decks and ticket pages."
  },
  "The match became a culture scene.": {
    "fr": "Le match est devenu une scène culturelle.",
    "en": "The match became a culture scene."
  },
  "Hosted by Greg Promo, the event brought the community together for a day of soccer, music, Haitian pride, DJs, artists, influencers and fans.": {
    "fr": "Porté par Greg Promo, l’événement a rassemblé la communauté autour du football, de la musique, de la fierté haïtienne, des DJs, artistes, influenceurs et supporters.",
    "en": "Hosted by Greg Promo, the event brought the community together for a day of soccer, music, Haitian pride, DJs, artists, influencers and fans."
  },
  "View photos": {
    "fr": "Voir les photos",
    "en": "View photos"
  },
  "Watch videos": {
    "fr": "Voir les vidéos",
    "en": "Watch videos"
  },
  "Event info": {
    "fr": "Infos événement",
    "en": "Event info"
  },
  "North Miami Stadium showed up.": {
    "fr": "North Miami Stadium a répondu présent.",
    "en": "North Miami Stadium showed up."
  },
  "The event started at 5:00 PM at 2555 NE 151 Street, North Miami, FL 33160. The day mixed football, music and Haitian pride with DJs including DJ K9, Tonymix, DJ LC, DJ Bullet x P-Dous, Colmix, Andybeatz, Ted Bounce and DJ Touch.": {
    "fr": "L’événement a commencé à 17h au 2555 NE 151 Street, North Miami, FL 33160. La journée a mélangé football, musique et fierté haïtienne avec DJ K9, Tonymix, DJ LC, DJ Bullet x P-Dous, Colmix, Andybeatz, Ted Bounce et DJ Touch.",
    "en": "The event started at 5:00 PM at 2555 NE 151 Street, North Miami, FL 33160. The day mixed football, music and Haitian pride with DJs including DJ K9, Tonymix, DJ LC, DJ Bullet x P-Dous, Colmix, Andybeatz, Ted Bounce and DJ Touch."
  },
  "Defined packages. Clear deliverables.": {
    "fr": "Forfaits définis. Livrables clairs.",
    "en": "Defined packages. Clear deliverables."
  },
  "Artist rollouts, event campaigns, business visibility and sponsor packages with real scope.": {
    "fr": "Lancements artistes, campagnes événementielles, visibilité business et forfaits sponsors avec un cadre clair.",
    "en": "Artist rollouts, event campaigns, business visibility and sponsor packages with real scope."
  },
  "Artist": {
    "fr": "Artiste",
    "en": "Artist"
  },
  "Sponsors": {
    "fr": "Sponsors",
    "en": "Sponsors"
  },
  "Story Promo": {
    "fr": "Promo Story",
    "en": "Story Promo"
  },
  "Request quote": {
    "fr": "Demander un devis",
    "en": "Request quote"
  },
  "Story sequence, link sticker, repost and timed push.": {
    "fr": "Séquence story, lien, repost et diffusion programmée.",
    "en": "Story sequence, link sticker, repost and timed push."
  },
  "Artist Rollout": {
    "fr": "Lancement artiste",
    "en": "Artist Rollout"
  },
  "Video/song announcement, post support, story rhythm and audience push.": {
    "fr": "Annonce vidéo/musique, support post, rythme story et push audience.",
    "en": "Video/song announcement, post support, story rhythm and audience push."
  },
  "Event Campaign": {
    "fr": "Campagne événementielle",
    "en": "Event Campaign"
  },
  "Countdown, flyer, recap, story coverage, website feature and partner visibility.": {
    "fr": "Compte à rebours, flyer, recap, couverture story, mise en avant site et visibilité partenaires.",
    "en": "Countdown, flyer, recap, story coverage, website feature and partner visibility."
  },
  "Antoine Gregory, dit Greg Promo": {
    "fr": "Antoine Gregory, dit Greg Promo",
    "en": "Antoine Gregory, known as Greg Promo"
  },
  "Originaire de Pétion-Ville, Antoine Gregory a construit Greg Promo comme une vitrine pour la culture, les événements, les artistes et la jeunesse haïtienne. Sa plateforme avance avec une idée simple : montrer les moments réels avec discipline, rapidité et respect de la communauté.": {
    "fr": "Originaire de Pétion-Ville, Antoine Gregory a construit Greg Promo comme une vitrine pour la culture, les événements, les artistes et la jeunesse haïtienne. Sa plateforme avance avec une idée simple : montrer les moments réels avec discipline, rapidité et respect de la communauté.",
    "en": "Originally from Pétion-Ville, Antoine Gregory built Greg Promo as a showcase for Haitian culture, events, artists and youth. His platform follows a simple idea: show real moments with discipline, speed and respect for the community."
  },
  "From social curiosity to media presence.": {
    "fr": "De la curiosité digitale à une présence média.",
    "en": "From social curiosity to media presence."
  },
  "Très tôt, il s’intéresse aux réseaux sociaux. Facebook d’abord, puis Instagram à partir de 2019. Ce qui commence comme une passion devient une marque suivie, un média communautaire et un moteur d’événements.": {
    "fr": "Très tôt, il s’intéresse aux réseaux sociaux. Facebook d’abord, puis Instagram à partir de 2019. Ce qui commence comme une passion devient une marque suivie, un média communautaire et un moteur d’événements.",
    "en": "Early on, he became interested in social media: first Facebook, then Instagram from 2019. What began as a passion became a followed brand, community media platform and event engine."
  },
  "Son message aux jeunes reste clair : étudier, travailler sur des projets positifs, utiliser Internet avec intelligence et transformer la visibilité en opportunité.": {
    "fr": "Son message aux jeunes reste clair : étudier, travailler sur des projets positifs, utiliser Internet avec intelligence et transformer la visibilité en opportunité.",
    "en": "His message to young people remains clear: study, work on positive projects, use the internet intelligently and turn visibility into opportunity."
  },
  "Show love to Greg Promo.": {
    "fr": "Montrez de l’amour à Greg Promo.",
    "en": "Show love to Greg Promo."
  },
  "No public photo uploads. Only selected messages and curated community notes.": {
    "fr": "Pas d’envois photo publics. Seulement des messages sélectionnés et des notes communautaires validées.",
    "en": "No public photo uploads. Only selected messages and curated community notes."
  },
  "Leave a message.": {
    "fr": "Laisser un message.",
    "en": "Leave a message."
  },
  "Fans, artists, sponsors and event guests can send a note. Greg Promo’s team chooses what to publish.": {
    "fr": "Fans, artistes, sponsors et invités peuvent envoyer un mot. L’équipe Greg Promo choisit ce qui sera publié.",
    "en": "Fans, artists, sponsors and event guests can send a note. Greg Promo’s team chooses what to publish."
  },
  "5 stars": {
    "fr": "5 étoiles",
    "en": "5 stars"
  },
  "4 stars": {
    "fr": "4 étoiles",
    "en": "4 stars"
  },
  "3 stars": {
    "fr": "3 étoiles",
    "en": "3 stars"
  },
  "Send love": {
    "fr": "Envoyer de l’amour",
    "en": "Send love"
  },
  "This is an entry point.": {
    "fr": "C’est une porte d’entrée.",
    "en": "This is an entry point."
  },
  "For promotion, partnership, sponsorship, event coverage or booking.": {
    "fr": "Pour promotion, partenariat, sponsoring, couverture événementielle ou réservation.",
    "en": "For promotion, partnership, sponsorship, event coverage or booking."
  },
  "Sponsorship": {
    "fr": "Sponsoring",
    "en": "Sponsorship"
  },
  "General": {
    "fr": "Général",
    "en": "General"
  },
  "News": {
    "fr": "Actualités",
    "en": "News"
  },
  "Latest drops and culture notes.": {
    "fr": "Dernières annonces et notes culturelles.",
    "en": "Latest drops and culture notes."
  },
  "Use this page for event announcements, music drops, community stories and sports headlines.": {
    "fr": "Utilisez cette page pour les annonces d’événements, sorties musicales, histoires communautaires et titres sportifs.",
    "en": "Use this page for event announcements, music drops, community stories and sports headlines."
  },
  "Artist visibility lives here.": {
    "fr": "La visibilité artiste vit ici.",
    "en": "Artist visibility lives here."
  },
  "DJs, releases, performances, videos and rollouts connected to Greg Promo’s platform.": {
    "fr": "DJs, sorties, performances, vidéos et lancements connectés à la plateforme Greg Promo.",
    "en": "DJs, releases, performances, videos and rollouts connected to Greg Promo’s platform."
  },
  "For sponsors, media and partners.": {
    "fr": "Pour sponsors, médias et partenaires.",
    "en": "For sponsors, media and partners."
  },
  "Brand story, official bios, audience notes, event photos and social handles.": {
    "fr": "Histoire de marque, biographies officielles, audience, photos d’événements et réseaux sociaux.",
    "en": "Brand story, official bios, audience notes, event photos and social handles."
  },
  "Page not found.": {
    "fr": "Page introuvable.",
    "en": "Page not found."
  },
  "Go back to the Greg Promo Media homepage.": {
    "fr": "Retournez à la page d’accueil de Greg Promo Media.",
    "en": "Go back to the Greg Promo Media homepage."
  },
  "Page not found — Greg Promo Media": {
    "fr": "Page introuvable — Greg Promo Media",
    "en": "Page not found — Greg Promo Media"
  }
});
