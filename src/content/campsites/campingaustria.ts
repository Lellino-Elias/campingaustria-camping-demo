import type { CampsiteConfig } from "../types";

const IMG = "/campsites/campingaustria";

const campingaustria: CampsiteConfig = {
  name: "Camping Austria in Au",
  shortName: "Austria",
  slug: "campingaustria",
  ort: "Au-Schoppernau",
  region: "Vorarlberg",
  brandKind: "Camping im Bregenzerwald",
  regionLong: "Bregenzerwald · Vorarlberg · Österreich",

  heroVariant: "center",

  claim: "Dein Basislager mitten im Bregenzerwald",
  claimEmphasis: "im Bregenzerwald",
  emailDetail: "der Diedamskopf nur acht Gehminuten von eurem Platz",
  intro:
    "Familie Köb empfängt dich im Talkessel von Au-Schoppernau — ebene Stellplätze, moderne Sanitäranlagen und das ganze Jahr geöffnet. Der Bregenzerwald liegt mit Wanderwegen, Pisten und Loipen direkt vor deinem Vorzelt.",

  statement: {
    text: "Bei uns stehst du in acht Gehminuten an der Talstation des Diedamskopf — und die Langlaufloipe beginnt direkt am Platz.",
    emphasis: "acht Gehminuten",
  },

  pillars: [
    {
      title: "Mitten im Bregenzerwald",
      text: "Der Talkessel von Au-Schoppernau umgibt dich mit Wiesen, Wäldern und den Gipfeln des Bregenzerwalds.",
      image: { src: `${IMG}/gallery-260aa0898d.webp`, alt: "Sommerliche Berglandschaft im Bregenzerwald rund um Au-Schoppernau" },
    },
    {
      title: "Berge & klare Luft",
      text: "Über 200 km markierte Wanderwege erschließen den Bregenzerwald — beim Paragleiten vom Diedamskopf reicht der Blick über 100 Gipfel bis zum Bodensee.",
      image: { src: `${IMG}/gallery-68815472f9.webp`, alt: "Glasklarer Bergsee in den Bergen des Bregenzerwalds" },
    },
    {
      title: "Sommer wie Winter",
      text: "Im Winter campst du zwischen verschneiten Gipfeln, das Skigebiet Diedamskopf liegt acht Gehminuten weg.",
      image: { src: `${IMG}/hero-b5bca6000e.webp`, alt: "Verschneiter Campingplatz von Camping Austria im Winter" },
    },
  ],

  usps: [
    "Gratis WLAN",
    "Ganzjährig geöffnet",
    "Skigebiet in 8 Gehminuten",
    "Moderne Sanitäranlagen",
    "Bregenzerwald Gäste-Card",
    "Langlaufloipe am Platz",
  ],

  trust: {
    heading: "Ein Platz für alle vier Jahreszeiten",
    headingEmphasis: "vier Jahreszeiten",
    intro:
      "Familie Köb führt den Platz im Bregenzerwald persönlich — ruhig gelegen, bewusst hundefrei und Sommer wie Winter geöffnet. Kurze Wege, faire Preise und die Berge ringsum.",
  },

  awards: [],

  saison: { von: "Januar", bis: "Dezember" },

  hero: {
    aerial: { src: `${IMG}/gallery-9d97fd9d4d.webp`, alt: "Abendstimmung über dem Campingplatz Camping Austria in Au-Schoppernau" },
  },

  camping: {
    heading: "Alles, was Camper brauchen",
    intro:
      "Verzichte auch im Urlaub nicht auf die kleinen Dinge: gepflegte Anlagen, gratis WLAN, Gasflaschentausch und Spiel & Spaß mit Go-Karts und Tischtennis.",
    features: [
      {
        title: "Gemütlicher Aufenthaltsraum",
        text: "Der holzverkleidete Aufenthaltsraum lädt mit TV und großem Tisch zum geselligen Beisammensein ein.",
        image: { src: `${IMG}/gallery-cdb0e0c8de.webp`, alt: "Holzverkleideter Aufenthaltsraum am Campingplatz" },
      },
      {
        title: "Sanitär wie zu Hause",
        text: "Moderne Waschkabinen mit Spiegeln, Einzelwaschplätzen und viel Komfort lassen nichts vermissen.",
        image: { src: `${IMG}/gallery-2c672e963a.webp`, alt: "Moderne Waschräume mit Spiegeln und Waschbecken" },
      },
      {
        title: "Moderne Duschkabinen",
        text: "Großzügige Duschen in ansprechendem Design sorgen für Körperpflege mit Genuss am Camping.",
        image: { src: `${IMG}/gallery-9a77a59aee.webp`, alt: "Moderne Duschkabine im Sanitärgebäude" },
      },
      {
        title: "Spülküche & Geschirr",
        text: "Industriespülmaschinen und drei Spülbecken nehmen dir im Urlaub den lästigen Abwasch ab.",
        image: { src: `${IMG}/gallery-7612cb369b.webp`, alt: "Spülküche mit Edelstahl-Spülbecken am Campingplatz" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Raus in den Bregenzerwald",
    intro:
      "Über 200 km Wanderwege, Bike-Routen und das Schwimmbad im Ort — und im Winter Pisten und Loipen direkt vor der Tür.",
    items: [
      {
        title: "Wandern & Bergtouren",
        text: "Auf über 200 km markierten Wegen und Bergtouren kommst du den Gipfeln Schritt für Schritt näher.",
        image: { src: `${IMG}/gallery-e9be4feedf.webp`, alt: "Bergtour an einem Felsgrat im Bregenzerwald" },
      },
      {
        title: "Mountainbike & Rad",
        text: "Idyllische Straßen und 30 km Radwegenetz abseits vom Verkehr — für Rennrad und Mountainbike.",
        image: { src: `${IMG}/gallery-1ffd2895d4.webp`, alt: "Mountainbiker auf einem Bergweg im Bregenzerwald" },
      },
      {
        title: "Schwimmbad im Ort",
        text: "Das Freibad in Au lädt an warmen Sommertagen zum Schwimmen und Sonnen mit Bergblick ein.",
        image: { src: `${IMG}/activity-de138a7d03.webp`, alt: "Freibad in Au-Schoppernau mit Bergpanorama" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg in den Bregenzerwald",
    modes: [
      { title: "Mit dem Auto", text: "Über die A14 (Rheintal) bis Dornbirn, dann auf der Bregenzerwaldstraße (L200) nach Au — gut beschildert." },
      { title: "Mit der Bahn", text: "Bahnhof Dornbirn oder Bregenz, weiter mit dem Landbus Bregenzerwald nach Au — rund eine Stunde." },
      { title: "Mit dem Flugzeug", text: "Flughafen Friedrichshafen oder Altenrhein in gut einer Stunde, Zürich in rund zwei Stunden." },
    ],
  },

  galerie: {
    heading: "Au-Schoppernau rund ums Jahr",
    headingEmphasis: "rund ums Jahr",
    intro:
      "Ob Schnee auf den Pisten oder goldener Herbst über dem Tal — der Bregenzerwald zeigt zu jeder Jahreszeit ein neues Gesicht.",
    tag: "Sommer wie Winter",
    images: [
      { src: `${IMG}/gallery-f066a826dd.webp`, alt: "Skitour in den verschneiten Bergen rund um Au" },
      { src: `${IMG}/gallery-481ee2cf63.webp`, alt: "Sonniger Wintertag über dem Bregenzerwald" },
      { src: `${IMG}/gallery-c6cccd5594.webp`, alt: "Herbstliche Bergkulisse im Bregenzerwald" },
      { src: `${IMG}/gallery-c3dabe46ca.webp`, alt: "Verschneiter Campingplatz mit Blick ins Tal" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz im Bregenzerwald",
    headingEmphasis: "im Bregenzerwald",
    intro: "Wähle Zeitraum und Personen — Familie Köb meldet sich persönlich mit deiner Verfügbarkeit zurück.",
    pricesArePlaceholder: false,
    priceNote:
      "ab-Preise Nebensaison (01.05.–30.06.) · Stellplatz inkl. 2 Personen, ab 5 Nächte · zzgl. Kurtaxe € 2,80 pro Person/Tag (ab 14 J.) · Stand Sommer 2025",
    highlight: { title: "Gäste-Card inklusive", text: "Ab drei Nächten (Mai–Okt) fährst du mit Bergbahnen und Bussen gratis." },
    categories: [
      { id: "stellplatz", label: "Stellplatz (2 Pers.)", perNight: 29, perExtraGuest: 9.5 },
      { id: "wohnmobil", label: "Wohnwagen / Wohnmobil", perNight: 39, perExtraGuest: 10 },
    ],
  },

  kontakt: {
    coords: { lat: 47.160965, lng: 15.755068, approx: true },
    tel: "+43 5515 2331",
    telHref: "tel:+4355152331",
    mail: "info@campingaustria.at",
    adresse: "Neudorf 356 · 6883 Au im Bregenzerwald · Vorarlberg",
  },

  languages: ["DE"],

  nav: [
    { label: "Camping", href: "#camping", children: [
      { label: "Ausstattung", href: "#camping" },
      { label: "Sanitär", href: "#camping" },
    ]},
    { label: "Aktiv", href: "#aktivitaeten" },
    { label: "Galerie", href: "#galerie" },
    { label: "Preise & Lage", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default campingaustria;
