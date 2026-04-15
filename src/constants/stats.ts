export type Stat = {
  target: number
  suffix: string
  useLocale: boolean
  label: string
  sub: string
}

export const STATS: Stat[] = [
  { target: 12900, suffix: '+', useLocale: true,  label: 'Portal users',     sub: 'across 6 European markets' },
  { target: 10,    suffix: '+', useLocale: false, label: 'Legacy products',  sub: 'migrated or sunset' },
  { target: 80,    suffix: '%', useLocale: false, label: 'Customer retention', sub: 'at Alqua over 4 years' },
  { target: 300,   suffix: '+', useLocale: false, label: 'User interviews',  sub: 'conducted across both roles' },
]
