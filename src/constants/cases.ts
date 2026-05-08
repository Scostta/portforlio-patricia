export type ApproachSection = {
  title: string
  content: string[]
  quote?: string
  images?: { src: string; alt: string; caption?: string }[]
}

export type Result = {
  value: string
  label: string
  context: string
}

export type SituationBlock =
  | { type: 'paragraph'; content: string }
  | { type: 'subsection'; heading: string; col1: string[]; col2: string[] }
  | { type: 'callout'; content: string }

export type Case = {
  slug: string
  number: string
  title: string
  subtitle: string
  tags: string[]
  company: string
  role: string
  timeline: string
  intro: string
  roleScopeIntro?: string
  roleScope?: string[]
  situationBlocks?: SituationBlock[]
  situation: string[]
  approach: ApproachSection[]
  results: Result[]
  learned: string[]
  learnedQuote?: string
  documents?: { href: string; label: string }[]
}

export type CaseMeta = Pick<Case, 'slug' | 'number' | 'title' | 'subtitle' | 'tags' | 'company' | 'role' | 'timeline'>

export const CASES_META: CaseMeta[] = [
  {
    slug: 'mylink-portal',
    number: '01',
    title: 'MyLINK Portal',
    subtitle: 'Unifying 50+ legacy products into one platform — from the inside out',
    tags: ['Product Strategy', 'UX Leadership', 'Organisational Change', 'Go-to-Market', 'Platform Design'],
    company: 'LINK Mobility',
    role: 'VP of UX & Product Manager',
    timeline: '2021 – Present',
  },
  {
    slug: 'ux-system',
    number: '02',
    title: 'Building the UX System',
    subtitle: 'Designing the process, methodology and feedback loops that made research-led product development real at LINK',
    tags: ['UX Process Design', 'Research Methodology', 'Team Building', 'Customer Program', 'AI Integration'],
    company: 'LINK Mobility',
    role: 'VP of UX & Product Manager',
    timeline: '2021 – Present',
  },
  {
    slug: 'roadmap',
    number: '03',
    title: 'Building the Roadmap',
    subtitle: 'From a technical Jira timeline nobody could read to a system that serves engineers, product teams and stakeholders — simultaneously',
    tags: ['Roadmap Strategy', 'Stakeholder Management', 'Cross-team Coordination', 'Tooling', 'Process Design'],
    company: 'LINK Mobility',
    role: 'VP of UX & Product Manager',
    timeline: '2021 – Present',
  },
  {
    slug: 'engage-gtm',
    number: '04',
    title: 'MyLINK Engage — Global GTM',
    subtitle: 'Taking a German product global — provisioning, politics, and the collaboration that made it work',
    tags: ['Go-to-Market', 'Cross-market Coordination', 'Product Internationalisation', 'Stakeholder Management', 'Operational Readiness'],
    company: 'LINK Mobility',
    role: 'Group PM — Global GTM Lead',
    timeline: '2024 – Present',
  },
  {
    slug: 'alqua-pricing',
    number: '05',
    title: 'Reinventing the Business Model',
    subtitle: 'How changing how we charged — not what we built — unlocked a new growth curve at Alqua',
    tags: ['Business Model Innovation', 'Pricing Strategy', 'Revenue Growth', 'Market Entry', 'Upselling'],
    company: 'Alqua',
    role: 'Co-Founder & COO / Product Lead',
    timeline: '2018 – 2021',
  },
  {
    slug: 'alqua-digital-index',
    number: '06',
    title: 'Alqua Digital Index',
    subtitle: 'Turning internal data into a public ranking — and a public ranking into a lead generation engine',
    tags: ['Product-Led Growth', 'Lead Generation', 'Data Product', 'Algorithm Design', 'Conversion Architecture'],
    company: 'Alqua',
    role: 'Co-Founder & Product Lead',
    timeline: '2019 – 2021',
  },
]
