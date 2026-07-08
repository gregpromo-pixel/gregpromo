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
    hero: "assets/videos/hero-recap.mp4",
    birthday: "assets/videos/greg-birthday-film.mp4",
    eventRecap: "assets/videos/artistes-vs-influenceurs-recap.mp4",
    crowd: "assets/videos/crowd-energy.mp4",
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
  "Global football data can live beside Greg Promo’s own All-Star Game recaps. The board connects through Supabase and shows league tables, fixtures and scorers without exposing keys.": {fr:"Les classements, les matchs et les moments All-Star peuvent vivre sur une page sportive claire, sans afficher d’informations techniques au public.", en:"Global football tables, matches and Greg Promo’s All-Star moments can live on one clean sports page without exposing technical details to the public."},
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
