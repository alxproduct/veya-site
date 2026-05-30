/**
 * Landing page copy. One export per section.
 *
 * Capitalisation convention:
 *   "Escorts" / "Clients"  → SEO-load-bearing, used sparingly and deliberately
 *   "Providers" / "Seekers" → brand voice, used everywhere else
 *
 * Italic emphasis convention:
 *   Headlines that contain <em>...</em> markup are rendered with the italic
 *   word in Signifier Medium Italic, against the surrounding Signifier Bold.
 */

// -----------------------------------------------------------------------------
// 02 — Hero
// -----------------------------------------------------------------------------

export const hero = {
  eyebrow: 'Early access · On your terms',
  headline: 'Adult connection. Without the <em>gatekeepers</em>.',
  subheadline:
    'Veya is a privacy-first app for adult Escorts and Clients designed around the person carrying the physical risk. No app store. No popularity ranking. No third parties taking the margin or the leverage.',
  ctas: [
    { label: 'Download app', href: '/install', variant: 'primary' as const, arrow: false },
    { label: 'Show pitch deck', href: 'https://drive.proton.me/urls/264B9YXRAW#eo25Wxb1rzV7', variant: 'secondary' as const, arrow: true },
  ],
  trustStrip: [
    { dash: '—', label: 'KYC-verified Escorts' },
    { dash: '—', label: 'Privacy-controlled panic' },
    { dash: '—', label: 'Free safety, forever' },
  ],
  imageCard: {
    src: '/images/hero-woman.webp',
    alt: 'Veya, early access',
    topLabel: 'A private network',
    bottomLeft: 'VEYA / V0.1',
    bottomRight: 'END-TO-END ENCRYPTED',
  },
} as const;

// -----------------------------------------------------------------------------
// 03 — Manifesto
// -----------------------------------------------------------------------------

export const manifesto = {
  eyebrow: '01 Why Veya exists',
  headline: 'The infrastructure is <em>broken</em>. Not the people.',
  body: 'Sex work has existed in every society in human history. What is new and broken is the digital infrastructure around it. Stigma, dependency on agencies and platforms, weak safety tools, and consumer apps that were designed for someone else. Veya is built around the person carrying the physical risk.',
} as const;

// -----------------------------------------------------------------------------
// 04 — Three commitments
// -----------------------------------------------------------------------------

export const commitments = {
  eyebrow: '02 What Veya is',
  headline: 'Independence. <em>Privacy</em>. Safety.',
  cards: [
    {
      label: '01 · RESPECT',
      title: 'Meet on your own <em>terms</em>.',
      body: 'You decide who sees what, when, and how. No app deciding for you, no popularity ranking taking the leverage.',
      image: { src: '/images/martini.webp', alt: 'Respect' },
      surfaceVar: '--pink-200',
    },
    {
      label: '02 · PRIVACY',
      title: 'Next-gen app without <em>App Store or Google Play</em>.',
      body: 'Veya is a PWA. No download history, no app-store record, no signature that data discloses. Built for privacy.',
      image: { src: '/images/phone.webp', alt: 'Privacy' },
      surfaceVar: '--teal-300',  /* semantic/surface/accent — teal */
    },
    {
      label: '03 · SAFETY',
      title: 'Looks like a dating app, <em>works like security</em>.',
      body: 'Pre-meet check-in, panic key, trusted contacts, real-time location share. Free, on every plan, forever.',
      image: { src: '/images/key.webp', alt: 'Safety' },
      surfaceVar: '--violet-500',  /* brand purple */
    },
  ],
} as const;

// -----------------------------------------------------------------------------
// 05 — How it works
// -----------------------------------------------------------------------------

export const howItWorks = {
  eyebrow: '03 How it works',
  headline: "Built for what dating apps won't admit <em>they're for</em>.",
  lead: 'Dating-app patterns where they help. Harm-reduction patterns where they matter.',
  steps: [
    {
      number: '01',
      numberSvg: '/svg/01.svg',
      title: 'Verified onboarding',
      body: 'Role selection, KYC for Escorts, trusted-contact setup, safety briefing before discovery is unlocked.',
    },
    {
      number: '02',
      numberSvg: '/svg/02.svg',
      title: 'Discreet discovery',
      body: 'Photo grid, no obligation for explicit imagery at the profile layer. Filter by respect and verified status. Local, not loud.',
    },
    {
      number: '03',
      numberSvg: '/svg/03.svg',
      title: 'Chat with intent',
      body: 'Text-only in MVP. Read receipts off by default for Providers. Pre-meet checklist surfaces in the thread.',
    },
    {
      number: '04',
      numberSvg: '/svg/04.svg',
      title: 'Date mode',
      body: 'Live location to a trusted contact. Missed check-in handling. Two-second press-and-hold panic. In-flow safety prompts.',
    },
  ],
} as const;

// -----------------------------------------------------------------------------
// 06 — Male escort acknowledgement ("Good day, Sir")
// -----------------------------------------------------------------------------

export const maleEscort = {
  headline: 'Good day, Sir. Men can offer their service <em>too</em>.',
  body: "The market has spent decades pretending male sex workers don't exist. For gay clients, for straight clients, for couples. They do. Veya was built for them too, with the same verification, same safety tools, and the same priority.",
  tags: [
    '+ Same product',
    '+ Same safety',
    '+ Same price',
    '+ No gated mode',
  ],
  image: {
    src: '/images/hero-man.webp',
    alt: 'Veya. Same product, same safety, same priority.',
  },
} as const;

// -----------------------------------------------------------------------------
// 07 — Work the market has underserved
// -----------------------------------------------------------------------------

export const underserved = {
  eyebrow: '04 Work the market has underserved',
  headline: "Every kind of desire is <em>acceptable</em>.",
  cards: [
    {
      label: '01 · SENSUALITY & PHYSICALITY',
      title: 'Beauty is work, worth <em>paying for</em>.',
      body: 'People who wish to sell their physicality in addition to their artistry. There shouldn\'t be anything wrong with beautiful things, sexual or otherwise. It is up to us to promote a version of visual sexuality and charge for it.',
      image: { src: '/images/feet.webp', alt: 'Sensuality & physicality' },
      surfaceVar: '--pink-200',
    },
    {
      label: '02 · EVERY ORIENTATION',
      title: 'Queer. Straight. Trans. <em>Non-binary</em>.',
      body: 'No "alternative" tab. No second-class profile mode. Same product, built the right way from day one. Gay men matching gay men. Lesbians offering and looking. Trans and non-binary Providers and Seekers.',
      image: { src: '/images/kiss.webp', alt: 'Every orientation' },
      surfaceVar: '--violet-500',  /* brand purple */
    },
    {
      label: '03 · CURIOSITY & DISCOVERY',
      title: "Curious? <em>You're</em> allowed to be.",
      body: "Sexually curious. We're building plain-language guides and optional self-paced spaces, so first-time encounters happen when you want them. Without pressure, without a quiz to pass before you can use the app.",
      image: { src: '/images/door.webp', alt: 'Curiosity & discovery' },
      surfaceVar: '--teal-300',  /* semantic/surface/accent — teal */
    },
  ],
} as const;

// -----------------------------------------------------------------------------
// 08 — Our line in the sand (What we don't do)
// -----------------------------------------------------------------------------

export const lineInSand = {
  eyebrow: '05 Our line in the sand',
  headline: "Some things we <em>deliberately</em> don't do.",
  lead: "Because the easiest way to make an adult platform less safe is to copy the playbook of every other adult platform. We won't.",
  items: [
    {
      preStrike: 'No',
      strikeWord: 'paid visibility',
      strikeColorVar: '--teal-500',
      body: "Boosts don't exist for attention. Discovery is local, not auctioned.",
    },
    {
      preStrike: 'No',
      strikeWord: 'popularity ranking',
      strikeColorVar: '--pink-400',
      body: 'No public leaderboards, no boards, no good karma.',
    },
    {
      preStrike: 'No',
      strikeWord: 'rating of Escorts',
      strikeColorVar: '--violet-500',
      body: 'One-way ratings only. Providers rate Seekers on safety and respect.',
    },
  ],
} as const;

// -----------------------------------------------------------------------------
// 09 — Why PWA
// -----------------------------------------------------------------------------

export const whyPwa = {
  eyebrow: '06 The architecture',
  headline: 'Next-gen app, without the App Store. <em>Private by design</em>.',
  bodyTop:
    "Apple and Google ban adult-service apps. We don't fight that, we route around it. Veya is a PWA: a website that installs to your home screen in three taps and behaves like any native app. Same icon, same speed, same notifications. The only difference: no App Store record of you installing it.",
  bodyBottom:
    "Escort sites and OnlyFans are desktop-bound, or stuck in a mobile browser tab nobody returns to. Veya lives on the home screen next to the apps you actually open. That's not a workaround. That's a category we get to ourselves.",
  installStripLabel: 'Installs in three taps',
  steps: [
    { number: '1', title: 'Open veya.fan', body: 'In Safari or Chrome on your phone.' },
    { number: '2', title: 'Tap Share → Add to Home Screen', body: 'iOS and Android both support this.' },
    { number: '3', title: 'Open the Veya icon', body: "Like any other app. That's it." },
  ],
} as const;

// -----------------------------------------------------------------------------
// 11 — For Seekers
// -----------------------------------------------------------------------------

export const forSeekers = {
  eyebrow: 'FOR SEEKERS · CLIENTS',
  headline: "<em>You're not a creep here.</em> You're a member.",
  lead: "Veya isn't a catalogue and it isn't a dating app pretending to be something else. It's a place where wanting paid, mutual, honest company is a normal thing to want. You're treated as a member here, not a risk to be managed.",
  image: {
    src: '/images/for-seekers.webp',
    alt: 'For Seekers',
  },
  surfaceVar: '--violet-700',
  textColorVar: '--paper-50',
  points: [
    {
      title: 'No games. No decoding.',
      body: 'Everyone here already knows what this is. No mixed signals, no performance, no ghosting baked into the design.',
    },
    {
      title: "You're welcome here.",
      body: "Paying for real connection isn't something to hide. Students, professionals, the curious. All choosing clarity over pretense.",
    },
    {
      title: 'Your privacy, not just theirs.',
      body: "No app-store record, no trail on your phone, no data sold. Discretion runs both ways. You're protected too.",
    },
  ],
  cta: { label: 'Join as a Seeker', href: '/install' },
} as const;

// -----------------------------------------------------------------------------
// 12 — For Providers
// -----------------------------------------------------------------------------

export const forProviders = {
  eyebrow: 'FOR PROVIDERS · ESCORTS',
  headline: 'Meet on your own <em>terms</em>.',
  lead: "Providers are the people taking the real-world risk, so the whole product is built around them. Safety that's free on every plan, verification that doesn't expose you, and no agency, platform, or ranking taking a cut of your work.",
  image: {
    src: '/images/for-providers.webp',
    alt: 'For Providers',
  },
  surfaceVar: '--teal-300',
  textColorVar: '--ink-950',
  points: [
    {
      title: 'You set every term.',
      body: 'When, where, and with whom. No paid visibility, no popularity ranking, no third party deciding who sees you.',
    },
    {
      title: 'Verified, never exposed.',
      body: "KYC confirms you're a verified adult. No public catalogue, no explicit profile layer, no ID left lying around.",
    },
    {
      title: 'Safety is free, forever.',
      body: 'Panic key, trusted-contact check-ins, live location when you want it. Never behind a paywall, never gated.',
    },
  ],
  cta: { label: 'Join as a Provider', href: '/install' },
} as const;

// -----------------------------------------------------------------------------
// 10 — Founder
// -----------------------------------------------------------------------------

export const founder = {
  eyebrow: '07 About',
  headline: 'Your body. Your work. Your terms. Our job is to <em>keep it that way</em>.',
  paragraphs: [
    "Everyone deserves tools that respect their agency. Not erode it. The founder spent years building privacy tools at Proton, end-to-end encrypted email, drive, and calendar, and the last few in Web3, where financial agency isn't a feature, it's the whole point. The thread connecting both: nobody on this planet should feel trapped, and nobody should feel powerless over the parts of their life that systems try to control.",
    "Veya applies that same instinct to adult intimacy. Bodily autonomy is a kind of agency, too, and the digital infrastructure around it has been failing the people who carry the most risk. So we built a tool where the person at the most risk comes first. Privacy that's real, not marketed. Safety that's free, not gated. Independence from the gatekeepers: agencies, classifieds, app stores, popularity rankings.",
    'The founder is a designer, a privacy ninja, and a woman building this for an industry that needs an outsider who actually listens. Veya is the result.',
  ],
  card: {
    label: 'From the founder',
    role: 'CEO, Veya',
    bio: 'Previously: design lead on Proton Mail, Proton Drive, Proton Calendar. Web3 product since 2021.',
    image: { src: '/images/founder.webp', alt: 'Founder, Veya' },
  },
} as const;

// -----------------------------------------------------------------------------
// 09b — Install CTA
// -----------------------------------------------------------------------------

export const installCta = {
  eyebrow: '07 · Get started',
  headline: 'Install <em>Veya</em>. In <em>three taps</em>.',
  body: 'Open this page on your phone. Add Veya to your home screen. Open it from there, never from a browser tab. Done.',
  ctas: [
    { label: 'Download app', href: '/install', variant: 'primary' as const, arrow: true },
  ],
  image: {
    src: '/images/install-cta.webp',
    alt: 'Install Veya',
  },
  surfaceVar: '--teal-300',
  textColorVar: '--ink-950',
} as const;

// -----------------------------------------------------------------------------
// SEO — hidden FAQ block for structured data
// -----------------------------------------------------------------------------

export const faq = [
  {
    question: 'Is Veya legal in Germany?',
    answer:
      'Veya operates within German law. Sex work is legal in Germany and regulated under the Prostitutionsschutzgesetz (ProstSchG). Veya is a connection platform, not an agency: it does not broker contracts, accept booking payments, or take a cut of services arranged through it. Verified Providers operate independently.',
  },
  {
    question: 'Why is Veya not on the App Store or Google Play?',
    answer:
      'Apple and Google ban adult-service apps from their stores. Veya is a Progressive Web App (PWA): a website that installs to your phone home screen in three taps and behaves like a native app. There is no app-store record of you installing it.',
  },
  {
    question: 'How is Veya different from an escort directory or classified site?',
    answer:
      "Veya is built around the safety of the person carrying the physical risk: KYC verification for Providers, panic flow, trusted-contact check-ins, live location sharing during a meeting, missed check-in handling, and one-way ratings (Providers rate Seekers, not the other way around). There are no paid boosts, no popularity rankings, and no third party taking a cut of the Provider's work.",
  },
  {
    question: 'Does Veya cost anything?',
    answer:
      'Providers are always free. Seekers can browse for free and send up to 2 introductions per month at no cost; the optional Veya Plus tier (€19/month or €149/year) lifts the cap and adds priority signal, extended discovery radius, and optional read receipts. Safety features are never tiered.',
  },
  {
    question: 'What data does Veya store about me?',
    answer:
      'The minimum required to run the platform. Identity verification confirms a Provider is a verified adult; once confirmed, the document is discarded. The PWA model means no app-store record of installation. Veya never sells data and is built end-to-end with privacy-first defaults.',
  },
  {
    question: 'Is Veya only for women Providers?',
    answer:
      'No. Veya was built from day one for Providers of every gender (women, men, trans, and non-binary) and for Seekers of every orientation. There is no "alternative" tab and no second-class profile mode.',
  },
] as const;
