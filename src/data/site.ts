/**
 * Site-wide content. Edit copy here, not inside components.
 *
 * Dual-register reminder:
 *   - SEO surfaces (title, meta description, hero subheadline, one trust-strip
 *     item, section eyebrows): use "Escorts" / "Clients".
 *   - Brand voice (manifesto, commitments, founder, footer): use "Providers"
 *     / "Seekers".
 *   - When introducing the SEO terms, capitalise them as proper nouns the
 *     first time. This signals Veya is treating them deliberately rather than
 *     reaching for them.
 */

export const site = {
  name: 'Veya',
  domain: 'veya.fan',
  url: 'https://veya.fan',
  tagline: 'Safer connection. On your terms.',
  contactEmail: 'hello_veya@pm.me',
  version: 'v0.1',
  copyrightYear: 2026,

  // SEO surfaces — these are what search engines and link previews read.
  seo: {
    title: 'Veya · A safer escort platform built around the Provider · Germany',
    description:
      'Veya is a privacy-first PWA for adult Escorts and Clients in Germany. KYC-verified Providers, panic flow and trusted-contact check-ins free on every plan, no app-store record, no popularity ranking, no agency cut.',
    ogImage: '/og-default.png', // replace with real OG image asset
    keywords: [
      'escort app germany',
      'verified escort platform',
      'safe escort app',
      'independent escort',
      'sex worker safety app',
      'PWA escort directory',
      'discreet escort booking',
      'escort safety tools',
    ],
  },
} as const;

export const nav = {
  // Primary CTA on the desktop nav.
  primary: {
    label: 'Download app',
    href: '/install',
  },
} as const;

export const footer = {
  columns: [
    {
      heading: 'Product',
      links: [
        { label: 'Why Veya', href: '#manifesto' },
        { label: 'Safety architecture', href: '#how-it-works' },
        { label: 'How it works', href: '#how-it-works' },
        { label: 'Pricing', href: '#pricing' },
      ],
    },
    {
      heading: 'Company',
      links: [
        { label: 'About', href: '#about' },
        { label: 'From the founder', href: '#founder' },
        { label: 'Press', href: '/press' },
        { label: 'Contact', href: 'mailto:hello_veya@pm.me' },
      ],
    },
    {
      heading: 'Safety',
      links: [
        { label: 'Trusted contacts', href: '/safety/trusted-contacts' },
        { label: 'Reporting', href: '/safety/reporting' },
        { label: 'Crisis resources', href: '/safety/crisis' },
        { label: 'Harm-reduction partners', href: '/safety/partners' },
      ],
    },
    {
      heading: 'Legal',
      links: [
        { label: 'Terms', href: '/terms' },
        { label: 'Privacy', href: '/privacy' },
        { label: 'Imprint (Impressum)', href: '/impressum' },
        { label: '§ ProstSchG context', href: '/legal/prostschg' },
      ],
    },
  ],
  copyright: `© ${2026} · PWA-only, no app-store distribution.`,
} as const;
