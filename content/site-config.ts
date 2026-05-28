/**
 * AeroVista — site config (single source of truth for copy + structure).
 *
 * Generation fingerprint:
 *   archetype = G (Mixed-Media Hybrid) · gRenderMode = scrub-assemble
 *   style = S2 luxury-dark · voice = V1 (heritage understated)
 *   scene_variant = V2 (focal-object on dark plinth)
 *   motion_variant = M9 (explode → reassemble)
 *   header = pill-floating · footer = FT3 (giant wordmark aurora)
 *   hero_overlay = HO5 (big-stack — subject right-half, type top-left)
 *   hero_text = H5 · hero_entrance = E3 (two-tone fade)
 *   card_variant = CV6 (brutalist) · about = AB2 · contact = CT4
 *   cta = CTA4 (magnetic-button focus) · stats = ST1
 *   color = noir-gold (locked) · type = archivo-inter (locked)
 *   asset_mode = live-generate · buildMode = landing
 */

import manifest from "./asset-manifest.json";

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  longDescription: string;
  specs: { label: string; value: string }[];
  imageSlot: string;
};

export const siteConfig = {
  company: {
    name: "AeroVista",
    legalName: "AeroVista UAS Ltd.",
    tagline: "Precision aerial instruments.",
    description:
      "Modular carbon-fiber UAS, engineered for cinema, survey, and industrial inspection. Built-to-order, shipped worldwide.",
  },

  // Manifest fingerprint — embedded for re-roll / debugging
  manifest: {
    archetype: "G",
    gRenderMode: "scrub-assemble",
    style: "S2",
    voiceFamily: "V1",
    sceneVariant: "V2",
    motionVariant: "M9",
    cardVariant: "CV6",
    headerVariant: "pill-floating",
    footerVariant: "FT3",
    heroOverlayVariant: "HO5",
    heroTextPattern: "H5",
    heroEntrance: "E3",
    aboutVariant: "AB2",
    contactVariant: "CT4",
    benefitsVariant: "BN3",
    statsVariant: "ST1",
    ctaVariant: "CTA4",
    colorPalette: "noir-gold",
    typographyPair: "archivo-inter",
    assetMode: "live-generate",
    buildMode: "landing",
  },

  headerVariant: "pill-floating" as const,

  hero: {
    eyebrow: "AeroVista UAS · Built to Order",
    // H5 multi-line big-stack — line breaks are forced in JSX
    h1Lines: ["Precision", "aerial", "instruments."],
    subhead:
      "Modular carbon-fiber UAS for cinema, survey, and industrial inspection. Made to specification. Shipped worldwide.",
    primaryCta: { label: "Contact Sales", href: "/contact" },
    secondaryCta: { label: "See the lineup", href: "/services" },
    scrollHint: "Scroll to assemble",
  },

  scrollHero: {
    archetype: "G",
    styleId: "S2",
    assetMode: "live-generate" as const,
    imageUrl: "",
    frameCount: 0,
    scrollDistance: 3,
  },

  valueProp: {
    eyebrow: "What we build",
    headline:
      "Three flight platforms. One carbon-fiber chassis. Engineered for the work, not the spec sheet.",
    body:
      "Every AeroVista UAS starts as the same modular carbon-fiber frame. Payload, sensor, and flight stack are chosen at order — so the drone you fly is the one your job needs, with no compromise.",
  },

  services: [
    {
      slug: "cinema-vs9",
      name: "Cinema VS-9",
      shortName: "Cinema",
      description:
        "Anamorphic-rated gimbal, 8K RAW capture, 38-minute hover envelope. For cinematographers who need the shot, not the excuse.",
      longDescription:
        "The VS-9 carries cinema-grade lenses on a stabilised three-axis gimbal with sub-pixel jitter compensation. 8K RAW writes to dual NVMe, with redundant data egress over fibre downlink. Designed in collaboration with three working DPs.",
      specs: [
        { label: "Payload", value: "Anamorphic / Spherical · Up to 2.4 kg" },
        { label: "Capture", value: "8K RAW · 14-stop dynamic range" },
        { label: "Hover time", value: "38 min · ground-station tethered: indefinite" },
        { label: "Datalink", value: "5.8 GHz OFDM · 12 km range" },
      ],
      imageSlot: "service-cinema",
    },
    {
      slug: "survey-ls2",
      name: "Survey LS-2",
      shortName: "Survey",
      description:
        "RTK GPS, multispectral sensor, 14 km operational range. For mapping crews, agronomists, and asset auditors.",
      longDescription:
        "LS-2 ships with a NovAtel RTK base, dual-frequency multispectral imager, and post-processing pipeline that resolves 2 cm ground sampling distance. Mission planner is open API — pipelines into ArcGIS, QGIS, and Pix4D.",
      specs: [
        { label: "Accuracy", value: "RTK · ±2 cm horizontal / ±3 cm vertical" },
        { label: "Sensors", value: "Multispectral · LIDAR · Thermal optional" },
        { label: "Range", value: "14 km LOS · 6 km BVLOS-certified" },
        { label: "Endurance", value: "52 min · payload-dependent" },
      ],
      imageSlot: "service-survey",
    },
    {
      slug: "industrial-ix6",
      name: "Industrial IX-6",
      shortName: "Industrial",
      description:
        "IP54 chassis, thermal + LIDAR payload, autonomous inspection patterns. For utilities, refineries, and infrastructure.",
      longDescription:
        "Built for the work most drones can't show up for. The IX-6 holds station in 14 m/s gusts, carries a paired thermal/LIDAR payload, and runs autonomous inspection patterns from a single waypoint file. Used today by two transmission operators in the North Sea.",
      specs: [
        { label: "Environment", value: "IP54 · -20°C to +50°C operating" },
        { label: "Payload", value: "Thermal · LIDAR · Gas-sniffer optional" },
        { label: "Wind tolerance", value: "Hold station in 14 m/s sustained" },
        { label: "Autonomy", value: "Single-waypoint mission · onboard avoidance" },
      ],
      imageSlot: "service-industrial",
    },
  ] satisfies Service[],

  stats: {
    eyebrow: "Engineered specifics",
    items: [
      { value: 38, suffix: " min", label: "Maximum hover envelope" },
      { value: 14, suffix: " km", label: "Operational data range" },
      { value: 54, prefix: "IP", suffix: "", label: "Sealed-chassis rating" },
    ],
  },

  about: {
    eyebrow: "About AeroVista",
    headline:
      "We design UAS the same way watchmakers design movements — one part at a time, for one operator at a time.",
    body:
      "AeroVista was founded in 2019 by three aerospace engineers who got tired of consumer drones rebadged as professional kit. Every airframe is hand-finished in our Munich workshop and flight-tested against the customer's own mission profile before it ships. We do not warehouse. We do not white-label. We build to order.",
    pillars: [
      {
        title: "Carbon, not plastic.",
        body: "Unidirectional T700S carbon-fiber chassis, hand-laid. Every airframe is weighed and balanced before flight test.",
      },
      {
        title: "Mission-specific.",
        body: "Payload, sensor, datalink, and battery are picked per order. Nothing on your drone is there for someone else's job.",
      },
      {
        title: "Open service.",
        body: "We publish the maintenance schedule and ship the parts. Your drone is yours — not a subscription.",
      },
    ],
  },

  cta: {
    eyebrow: "Build to specification",
    headline: "Tell us what the job is. We will quote the airframe in 72 hours.",
    body:
      "No catalogue pricing. Every AeroVista UAS is configured against a single mission brief — payload mass, sensor stack, flight envelope, environment.",
    primary: { label: "Contact Sales", href: "/contact" },
    secondary: { label: "Browse the lineup", href: "/services" },
  },

  contact: {
    eyebrow: "Demo request",
    headline: "Brief us on the mission. We will respond within 72 hours.",
    body:
      "AeroVista UAS ship worldwide from our Munich workshop. Lead time is 6–10 weeks from confirmed brief, configuration-dependent.",
    email: "sales@aerovista.example",
    phone: "+49 89 0000 0000",
    addressLines: ["AeroVista UAS Ltd.", "Schellingstraße 109", "80798 München, Germany"],
    formFields: [
      { name: "name", label: "Your name", type: "text", required: true },
      { name: "company", label: "Company", type: "text", required: false },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "mission", label: "Tell us about the mission", type: "textarea", required: true },
    ],
  },

  footer: {
    variant: "FT3",
    wordmark: "AEROVISTA",
    brandStatement:
      "Built to order in Munich. Flown by cinematographers, surveyors, and inspection crews on four continents.",
    auroraBackground: true,
    columns: [
      {
        heading: "Lineup",
        items: [
          { label: "Cinema VS-9", href: "/services#cinema-vs9" },
          { label: "Survey LS-2", href: "/services#survey-ls2" },
          { label: "Industrial IX-6", href: "/services#industrial-ix6" },
        ],
      },
      {
        heading: "Company",
        items: [
          { label: "About", href: "/about" },
          { label: "Contact Sales", href: "/contact" },
        ],
      },
    ],
  },

  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],

  socials: {
    instagram: "https://instagram.com/aerovista",
    linkedin: "https://linkedin.com/company/aerovista",
    youtube: "https://youtube.com/@aerovista",
    x: "https://x.com/aerovista",
  },

  seo: {
    siteUrl: "https://aerovista.example",
    defaultTitle: "AeroVista UAS — Built to order. Shipped worldwide.",
    titleTemplate: "%s · AeroVista UAS",
    defaultDescription:
      "Modular carbon-fiber UAS for cinema, survey, and industrial inspection. Built-to-order in Munich, shipped worldwide.",
    locale: "en_DE",
    twitter: "@aerovista",
  },

  // Asset manifest (CDN URLs populated by gen:images / gen:videos / gen:unsplash)
  assets: manifest,
} as const;

export type SiteConfig = typeof siteConfig;
