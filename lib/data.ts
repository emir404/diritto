/**
 * Real content for diritto&consulenza, sourced from
 * clients/dirittoeconsulenza.it/{WIKI,pages}.md. Facts, names, numbers and
 * Italian copy are verbatim — nothing invented.
 */

export const site = {
  name: "diritto&consulenza",
  tagline: "Network multidisciplinare",
  since: 2009,
  email: "info@dirittoeconsulenza.it",
  positioning:
    "Un network di professionisti che avvolge il tuo problema con una rete di specialisti — in tutta Italia, con empatia e competenza.",
  mission:
    "Accompagniamo il Cliente in ogni passo, sostenendolo con empatia, rassicurandolo con competenza e operando con esperienza.",
  values: ["empatia", "competenza", "esperienza"] as const,
  intro: [
    "Sorto nel 2009 diritto&consulenza rappresenta un network di professionisti costituito con l'obiettivo di garantire servizi legali approfonditi e trasversali, che possano assicurare agli assistiti una tutela completa.",
    "Gli ambiti di intervento dei professionisti spaziano nelle principali aree di interesse di soggetti privati e imprese, coprendo i settori del diritto di famiglia e delle successioni, sino alla tutela della proprietà intellettuale, il sovraindebitamento, il risarcimento danni da malpractice medica e il diritto penale.",
    "Con diverse sedi in Italia il network è in grado di prestare le proprie attività su tutto il territorio nazionale, forte di una rete professionale solida e con pluriennale esperienza.",
  ],
};

export const stats = [
  { value: 2009, label: "Dal", prefix: "", suffix: "" },
  { value: 3, label: "Sedi in Italia", prefix: "", suffix: "" },
  { value: 11, label: "Aree di attività", prefix: "", suffix: "" },
  { value: 5, label: "Professionisti", prefix: "", suffix: "" },
];

export type Segment = "persone" | "imprese";

export type Lawyer = {
  slug: string;
  name: string;
  role: string;
  cities: string;
  image: string;
  founder?: boolean;
  areas: string[];
  bio: string[];
  contact?: { phone?: string; email?: string; site?: string };
};

export const lawyers: Lawyer[] = [
  {
    slug: "giovanni-prearo",
    name: "Giovanni Prearo",
    role: "Avvocato civilista",
    cities: "Milano",
    image: "/images/Avv-Prearo.webp",
    areas: ["Diritto bancario", "Diritto societario", "Crisi d'impresa", "Diritto dei contratti"],
    bio: [
      "Laurea in Giurisprudenza presso l'Università Cattolica di Milano nel 1997; abilitato all'esercizio della professione forense nel 2000.",
      "Ha collaborato per oltre quindici anni con importanti studi legali italiani e internazionali prima di avviare il proprio studio nel 2017. La sua esperienza spazia nel diritto commerciale, bancario e della crisi d'impresa. Relatore in seminari e corsi in materia societaria e concorsuale. Parla inglese e francese.",
    ],
    contact: { phone: "+39 02 23177040", email: "giovanni.prearo@avvprearo.it" },
  },
  {
    slug: "valentina-stamerra",
    name: "Valentina Stamerra",
    role: "Proprietà intellettuale e industriale",
    cities: "Milano · Lecce",
    image: "/images/Avv-Stamerra.webp",
    founder: true,
    areas: ["Marchi, Brevetti e Diritto d'autore", "Proprietà industriale", "Diritto dei contratti", "Diritto societario"],
    bio: [
      "Consegue con lode la Laurea in Giurisprudenza presso l'Università Statale di Milano; nel 2000 si abilita all'esercizio della professione forense presso la Corte d'Appello di Milano.",
      "Dal 2005 si dedica prevalentemente alla Proprietà Intellettuale, supportando persone e imprese nel valorizzare la loro Proprietà Intellettuale e difendendole dalle violazioni. Lavora con uno staff interdisciplinare di ingegneri e commercialisti e con partner internazionali. Mandataria accreditata UIBM, EUIPO, EPO e WIPO. Socia fondatrice del network.",
    ],
    contact: {
      phone: "+39 349 2874987",
      email: "valentina.stamerra@dirittoeconsulenza.it",
      site: "https://www.valentinastamerra.it/",
    },
  },
  {
    slug: "valeria-esposito",
    name: "Valeria Esposito",
    role: "Diritto di famiglia e successioni",
    cities: "Network diritto&consulenza",
    image: "/images/Avv-Esposito.webp",
    areas: ["Diritto di famiglia e Successioni"],
    bio: [
      "Professionista del network diritto&consulenza, attiva nell'ambito del diritto di famiglia e delle successioni: separazioni e divorzi, affidamento dei figli, unioni civili e materia successoria.",
    ],
  },
  {
    slug: "beatrice-mannarini",
    name: "Beatrice Mannarini",
    role: "Diritto di famiglia",
    cities: "Network diritto&consulenza",
    image: "/images/AvvMannarini_new.webp",
    areas: ["Diritto di famiglia e Successioni"],
    bio: [
      "Professionista del network diritto&consulenza, si occupa di diritto di famiglia — dall'affido condiviso e la bi-genitorialità all'assegnazione della casa familiare — con una consolidata attività di divulgazione giuridica.",
    ],
  },
  {
    slug: "alberto-pisanello",
    name: "Alberto Pisanello",
    role: "Famiglia · Responsabilità medica · Proprietà intellettuale",
    cities: "Network diritto&consulenza",
    image: "/images/Avv-Pisanello.webp",
    areas: ["Diritto di famiglia e Successioni", "Malasanità e risarcimento danni", "Marchi, Brevetti e Diritto d'autore"],
    bio: [
      "Professionista del network diritto&consulenza, affianca gli assistiti su più fronti: diritto di famiglia e successioni, responsabilità medico-sanitaria e risarcimento danni, tutela di marchi, brevetti e diritto d'autore.",
    ],
  },
];

export type Area = {
  slug: string;
  title: string;
  segment: Segment;
  color: string; // css color for the honeycomb cell
  summary?: string; // verbatim-based description where captured
  services?: string[];
  lawyers?: string[]; // lawyer slugs
};

export const areas: Area[] = [
  {
    slug: "diritto-di-famiglia-e-successioni",
    title: "Diritto di famiglia e Successioni",
    segment: "persone",
    color: "var(--color-brand-terracotta)",
    summary:
      "Il network garantisce la propria attività nell'ambito del diritto di famiglia e delle successioni, assicurando consulenza in ogni fase — dalla negoziazione al giudizio.",
    services: [
      "Separazione consensuale e divorzio congiunto, anche con negoziazione assistita",
      "Affido consensuale di figlio naturale",
      "Nomina di un Amministratore di Sostegno",
      "Unioni civili e rapporti economici tra conviventi",
      "Materia successoria: testamenti, divisioni, azioni di riduzione",
    ],
    lawyers: ["valeria-esposito", "beatrice-mannarini", "alberto-pisanello"],
  },
  {
    slug: "reati-contro-la-persona-e-la-famiglia",
    title: "Reati contro la persona e la famiglia",
    segment: "persone",
    color: "var(--color-brand-aubergine)",
  },
  {
    slug: "malasanita-e-risarcimento-danni",
    title: "Malasanità e risarcimento danni",
    segment: "persone",
    color: "var(--color-brand-sage-deep)",
    summary:
      "I professionisti prestano consulenza ed assistenza, sia in fase stragiudiziale che giudiziale, in materia di responsabilità medico-sanitaria — dalla valutazione di fattibilità con un medico legale di fiducia sino alla causa civile.",
    services: [
      "Errata, omessa o tardiva diagnosi (patologie tumorali, ictus)",
      "Lesioni al feto o alla gestante durante il parto",
      "Errori chirurgici, estetici e protesici",
      "Infezioni ospedaliere e mancate cure palliative",
    ],
    lawyers: ["valentina-stamerra", "alberto-pisanello"],
  },
  {
    slug: "diritto-bancario",
    title: "Diritto bancario",
    segment: "persone",
    color: "var(--color-brand-blue)",
    summary:
      "Consulenza in materia di diritto bancario, con particolare riferimento all'individuazione di profili di invalidità dei contratti bancari e alle controversie con banche e intermediari finanziari.",
    services: [
      "Superamento del tasso soglia (usura)",
      "Nullità di fideiussioni conformi al modello ABI",
      "Contratti di compravendita di strumenti finanziari",
    ],
    lawyers: ["giovanni-prearo"],
  },
  {
    slug: "marchi-brevetti-e-diritto-dautore",
    title: "Marchi, Brevetti e Diritto d'autore",
    segment: "persone",
    color: "var(--color-brand-blush)",
    summary:
      "Assistenza in materia di Marchi, Brevetti, Disegni Industriali e Diritto d'autore — in Italia, in Europa e all'estero — con ricerche di anteriorità e deposito presso gli enti competenti.",
    services: [
      "Ricerche di anteriorità e deposito (Nazionale, Europeo, Internazionale)",
      "Contratti di licenza, cessione, edizione e produzione",
      "Opposizioni e nullità presso UIBM, EPO, EUIPO, WIPO",
      "Cause di contraffazione e plagio; domiciliazioni a Milano, Bari e Bologna",
    ],
    lawyers: ["valentina-stamerra", "alberto-pisanello"],
  },
  {
    slug: "crisi-dimpresa-e-sovraindebitamento",
    title: "Crisi d'impresa e sovraindebitamento",
    segment: "imprese",
    color: "var(--color-brand-blue)",
  },
  {
    slug: "tutela-della-proprieta-industriale-e-intellettuale",
    title: "Tutela della Proprietà industriale e intellettuale",
    segment: "imprese",
    color: "var(--color-brand-blue-deep)",
  },
  {
    slug: "diritto-societario",
    title: "Diritto societario",
    segment: "imprese",
    color: "var(--color-brand-taupe)",
  },
  {
    slug: "gestione-e-tutela-del-credito",
    title: "Gestione e tutela del credito",
    segment: "imprese",
    color: "var(--color-brand-sage-deep)",
  },
  {
    slug: "diritto-dei-contratti",
    title: "Diritto dei contratti",
    segment: "imprese",
    color: "var(--color-brand-aubergine)",
  },
  {
    slug: "locazioni-e-diritto-immobiliare",
    title: "Locazioni e diritto immobiliare",
    segment: "imprese",
    color: "var(--color-brand-terracotta)",
  },
];

export type Office = {
  city: string;
  image: string;
  landmark: string;
  era: string;
  addresses: string[];
  phones: string[];
};

export const offices: Office[] = [
  {
    city: "Bologna",
    image: "/images/Bologna.webp",
    landmark: "Le Due Torri",
    era: "la città medievale",
    addresses: ["Via San Felice, 123"],
    phones: ["+39 051 0037674"],
  },
  {
    city: "Lecce",
    image: "/images/Lecce.webp",
    landmark: "Il barocco leccese",
    era: "il Sud",
    addresses: ["Viale Giovanni Paolo II, 11", "Via Giovanni Stano, 23"],
    phones: ["+39 0832 1827747", "+39 347 5076342"],
  },
  {
    city: "Milano",
    image: "/images/TreTorri-Prearo.jpg",
    landmark: "CityLife, le Tre Torri",
    era: "la città contemporanea",
    addresses: ["Via Domenichino, 11"],
    phones: ["+39 02 23177040"],
  },
];

export const nav = [
  { href: "/", label: "Home" },
  { href: "/professionisti", label: "Professionisti" },
  { href: "/aree-attivita", label: "Aree di attività" },
  { href: "/contatti", label: "Contatti" },
];
