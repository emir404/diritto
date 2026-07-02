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
  /** short, consistent one-line specialty for the team grid (fuller `role` shown on the detail page) */
  roleShort?: string;
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
    roleShort: "Diritto civile e d'impresa",
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
    roleShort: "Proprietà intellettuale",
    cities: "Lecce · Milano",
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
    roleShort: "Famiglia e successioni",
    cities: "Milano",
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
    roleShort: "Diritto di famiglia",
    cities: "Lecce",
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
    roleShort: "Famiglia e responsabilità medica",
    cities: "Bologna",
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
    summary:
      "Consulenza e assistenza in materia di diritto penale, con particolare riferimento ai reati commessi in ambito familiare — dalla querela alla costituzione di parte civile e alla difesa nel procedimento penale.",
    services: [
      "Atti persecutori (stalking), molestie e minacce",
      "Maltrattamenti in famiglia",
      "Violazione degli obblighi di mantenimento e di assistenza familiare",
      "Assistenza alla persona offesa: denuncia/querela e costituzione di parte civile",
      "Difesa della persona indagata, dalle indagini preliminari al processo",
    ],
    lawyers: ["alberto-pisanello", "beatrice-mannarini"],
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
    summary:
      "Analisi della situazione debitoria e individuazione dello strumento idoneo a superare la crisi d'impresa o il sovraindebitamento, con assistenza sino all'omologa e nell'esecuzione.",
    services: [
      "Analisi della situazione debitoria e scelta dello strumento idoneo",
      "Concordato preventivo, accordo o piano di risanamento attestato",
      "Concordato minore e ristrutturazione dei debiti del consumatore",
      "Assistenza sino all'omologa e nell'esecuzione degli accordi",
    ],
    lawyers: ["giovanni-prearo"],
  },
  {
    slug: "tutela-della-proprieta-industriale-e-intellettuale",
    title: "Tutela della Proprietà industriale e intellettuale",
    segment: "imprese",
    color: "var(--color-brand-blue-deep)",
    summary:
      "Tutela di Marchi, Brevetti, Disegni industriali e Diritto d'autore per le imprese che investono in innovazione — in Italia, in Europa e all'estero.",
    services: [
      "Deposito di marchi, brevetti e opere a livello nazionale, europeo e internazionale",
      "Ricerche di anteriorità",
      "Contratti di licenza, cessione, edizione e produzione",
      "Opposizione, nullità e decadenza presso UIBM, EPO, EUIPO e WIPO",
      "Cause di contraffazione e plagio; domiciliazioni a Milano, Bari e Bologna",
    ],
    lawyers: ["valentina-stamerra", "alberto-pisanello"],
  },
  {
    slug: "diritto-societario",
    title: "Diritto societario",
    segment: "imprese",
    color: "var(--color-brand-taupe)",
    summary:
      "Consulenza nella compravendita di partecipazioni, aziende e rami d'azienda, nella redazione dei patti parasociali e nelle controversie societarie.",
    services: [
      "Compravendita di partecipazioni sociali, aziende o rami d'azienda",
      "Lettere d'intenti, term sheet e contratti di acquisizione",
      "Redazione di patti parasociali",
      "Controversie tra soci, impugnazione di delibere e azioni di responsabilità (art. 2409 c.c.)",
    ],
    lawyers: ["giovanni-prearo", "valentina-stamerra"],
  },
  {
    slug: "gestione-e-tutela-del-credito",
    title: "Gestione e tutela del credito",
    segment: "imprese",
    color: "var(--color-brand-sage-deep)",
    summary:
      "Recupero del credito per le imprese in fase stragiudiziale, giudiziale ed esecutiva, con puntuale rendicontazione, su tutto il territorio nazionale.",
    services: [
      "Recupero stragiudiziale: diffide, solleciti e piani di rientro",
      "Recupero giudiziale e gestione del contenzioso",
      "Iniziative esecutive e ricerca dei beni pignorabili (art. 492 bis c.p.c.)",
      "Gestione dell'eventuale fase concorsuale e rendicontazione",
    ],
    lawyers: ["giovanni-prearo"],
  },
  {
    slug: "diritto-dei-contratti",
    title: "Diritto dei contratti",
    segment: "imprese",
    color: "var(--color-brand-aubergine)",
    summary:
      "Redazione, negoziazione e interpretazione dei contratti d'impresa, con assistenza nelle controversie su inadempimento, risoluzione, annullamento o rescissione.",
    services: [
      "Redazione e negoziazione di contratti d'impresa",
      "Accordi modificativi di patti già conclusi",
      "Pareri su esecuzione, interpretazione e risoluzione",
      "Controversie su inadempimento, annullamento o rescissione",
    ],
    lawyers: ["giovanni-prearo", "valentina-stamerra"],
  },
  {
    slug: "locazioni-e-diritto-immobiliare",
    title: "Locazioni e diritto immobiliare",
    segment: "imprese",
    color: "var(--color-brand-terracotta)",
    summary:
      "Consulenza e contenzioso in materia di locazioni e diritto immobiliare, inclusi i contratti di appalto di facility e property management, gli sfratti e le esecuzioni per rilascio.",
    services: [
      "Contratti di locazione e diritto immobiliare",
      "Contratti di appalto di servizi di facility e property management",
      "Contenzioso ordinario, sfratti ed esecuzioni per rilascio",
      "Recupero dei crediti connesso",
    ],
    lawyers: ["giovanni-prearo"],
  },
];

export type Office = {
  city: string;
  image: string;
  addresses: string[];
  phones: string[];
};

export const offices: Office[] = [
  {
    city: "Bologna",
    image: "/images/Bologna.webp",
    addresses: ["Via San Felice, 123"],
    phones: ["+39 051 0037674"],
  },
  {
    city: "Lecce",
    image: "/images/Lecce.webp",
    addresses: ["Viale Giovanni Paolo II, 11", "Via Giovanni Stano, 23"],
    phones: ["+39 0832 1827747", "+39 347 5076342"],
  },
  {
    city: "Milano",
    image: "/images/TreTorri-Prearo.jpg",
    addresses: ["Via Domenichino, 11"],
    phones: ["+39 02 23177040"],
  },
];

/** Primary line per office city (first phone listed). */
export const officePhone: Record<string, string> = Object.fromEntries(
  offices.map((o) => [o.city, o.phones[0]]),
);

/**
 * A professional's callable number: their own direct line if present, otherwise
 * the primary line of their assigned office (per the network's office assignments).
 */
export function lawyerPhone(l: Lawyer): string | undefined {
  if (l.contact?.phone) return l.contact.phone;
  const city = l.cities.split(/[·,]/)[0].trim();
  return officePhone[city];
}

export type Article = {
  title: string;
  date: string; // display date, verbatim from their news index
  author?: string;
  href: string; // the article on the live site, or the news hub as a fallback
};

const NEWS_HUB = "https://dirittoeconsulenza.it/news";

/**
 * News — real, bylined legal-insight articles from the network (2024–2026),
 * verbatim from clients/dirittoeconsulenza.it/pages/news.md. Display dates are
 * theirs; `href` links to the live article where the URL is known, else the hub.
 * (Article bodies are not rebuilt here — links open the existing site.)
 */
export const news: Article[] = [
  {
    title: "Google Ads e uso di marchi altrui come parole chiave",
    date: "13.4.2026",
    author: "Valentina Stamerra",
    href: "https://dirittoeconsulenza.it/2026/2/18/google-ads-e-uso-di-marchi-altrui-come-parole-chiave-di-avv-valentina-stamerra",
  },
  {
    title: "Il marchio della Licenziataria dopo la scadenza del contratto",
    date: "18.2.2026",
    href: NEWS_HUB,
  },
  {
    title: "Spese condominiali: come vanno suddivise tra nudo proprietario e usufruttuario",
    date: "12.2.2026",
    href: "https://dirittoeconsulenza.it/2026/2/18/spese-condominiali-come-vanno-suddivise-tra-nudo-proprietario-e-usufruttuario",
  },
  {
    title:
      "Approvata la riforma della disciplina dei trasferimenti degli immobili oggetto di donazione",
    date: "18.12.2025",
    href: NEWS_HUB,
  },
  {
    title:
      "Successioni: al via l'iter per la modifica della disciplina relativa alla restituzione dei beni oggetto di donazione",
    date: "11.11.2025",
    href: NEWS_HUB,
  },
  {
    title: "Anche i single possono adottare all'estero",
    date: "31.3.2025",
    href: "https://dirittoeconsulenza.it/2025/11/11/anche-i-single-possono-adottare-allestero1",
  },
  {
    title: "Le rivendicazioni ben scritte blindano un brevetto?",
    date: "26.2.2025",
    href: NEWS_HUB,
  },
  {
    title: "Contratto di locazione privo di forma scritta e non registrato",
    date: "22.1.2025",
    href: NEWS_HUB,
  },
  { title: "In cosa consiste la riforma europea del design?", date: "20.11.2024", href: NEWS_HUB },
  {
    title: "Voucher I3 Brevetti finanziati 100% a fondo perduto",
    date: "2.10.2024",
    href: NEWS_HUB,
  },
  {
    title: "Revoca dell'assegnazione della casa familiare: casistica",
    date: "19.9.2024",
    author: "Beatrice Mannarini",
    href: NEWS_HUB,
  },
  { title: "La revoca dell'assegnazione della casa familiare", date: "1.6.2024", href: NEWS_HUB },
  { title: "Illiceità del marchio: il caso Coca Pola", date: "23.4.2024", href: NEWS_HUB },
  {
    title: "Separazione e divorzio insieme: cosa sapere",
    date: "22.4.2024",
    author: "Beatrice Mannarini",
    href: NEWS_HUB,
  },
  {
    title: "Registrazione marchio: una guida completa",
    date: "13.3.2024",
    href: "https://dirittoeconsulenza.it/2024/3/29/registrazione-marchio-una-guida-completa",
  },
  {
    title: "Assegno divorzile: quando è dovuto?",
    date: "4.3.2024",
    href: "https://dirittoeconsulenza.it/2024/3/13/assegno-divorzile-quando-e-dovuto",
  },
  {
    title: "Intelligenza Artificiale (AI) e proprietà intellettuale",
    date: "26.2.2024",
    author: "Valentina Stamerra",
    href: NEWS_HUB,
  },
  {
    title: "L'affido condiviso e il diritto del minore alla bi-genitorialità",
    date: "12.2.2024",
    author: "Beatrice Mannarini",
    href: NEWS_HUB,
  },
  { title: "Finanziamenti e manipolazione dell'euribor", date: "29.1.2024", href: NEWS_HUB },
];

export const nav = [
  { href: "/", label: "Home" },
  { href: "/professionisti", label: "Professionisti" },
  { href: "/aree-attivita", label: "Aree di attività" },
  { href: "/news", label: "News" },
  { href: "/contatti", label: "Contatti" },
];
