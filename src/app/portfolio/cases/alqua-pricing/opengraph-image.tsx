import { ImageResponse } from 'next/og'
import { CASES_META } from '~/constants/cases'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const c = CASES_META.find((x) => x.slug === 'alqua-pricing')!

async function loadFont(url: string): Promise<ArrayBuffer | null> {
  try { return (await fetch(url)).arrayBuffer() } catch { return null }
}

export default async function Image() {
  const [interRegular, interBold, playfairBold] = await Promise.all([
    loadFont('https://cdn.jsdelivr.net/npm/@fontsource/inter/files/inter-latin-400-normal.woff'),
    loadFont('https://cdn.jsdelivr.net/npm/@fontsource/inter/files/inter-latin-600-normal.woff'),
    loadFont('https://cdn.jsdelivr.net/npm/@fontsource/playfair-display/files/playfair-display-latin-700-normal.woff'),
  ])

  type FontEntry = { name: string; data: ArrayBuffer; weight: 400 | 600 | 700; style: 'normal' }
  const fonts: FontEntry[] = []
  if (interRegular) fonts.push({ name: 'Inter', data: interRegular, weight: 400, style: 'normal' })
  if (interBold) fonts.push({ name: 'Inter', data: interBold, weight: 600, style: 'normal' })
  if (playfairBold) fonts.push({ name: 'Playfair', data: playfairBold, weight: 700, style: 'normal' })

  const tags = c.tags.slice(0, 3)

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', background: '#F6F5F0', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: 8, height: '100%', background: '#6667AB' }} />
        <div style={{ position: 'absolute', bottom: -20, right: 40, fontFamily: playfairBold ? 'Playfair' : 'serif', fontWeight: 700, fontSize: 280, color: '#131310', opacity: 0.04, lineHeight: 1, letterSpacing: '-0.04em', display: 'flex' }}>
          {c.number}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '64px 80px 64px 96px', width: '100%' }}>
          <span style={{ fontFamily: interBold ? 'Inter' : 'sans-serif', fontWeight: 600, fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6667AB', display: 'flex' }}>
            Case Study · {c.number} · {c.company}
          </span>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontFamily: playfairBold ? 'Playfair' : 'serif', fontWeight: 700, fontSize: c.title.length > 40 ? 52 : 64, color: '#131310', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 20, maxWidth: 820, display: 'flex', flexWrap: 'wrap' }}>
              {c.title}
            </div>
            <div style={{ fontFamily: interRegular ? 'Inter' : 'sans-serif', fontWeight: 400, fontSize: 22, color: '#7B7A72', lineHeight: 1.4, maxWidth: 700, display: 'flex', flexWrap: 'wrap' }}>
              {c.subtitle}
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {tags.map((tag) => (
                <div key={tag} style={{ display: 'flex', alignItems: 'center', background: '#EDECEA', border: '1px solid #E0DFD7', borderRadius: 6, padding: '7px 14px', marginRight: 10 }}>
                  <span style={{ fontFamily: interBold ? 'Inter' : 'sans-serif', fontWeight: 600, fontSize: 12, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#131310', display: 'flex' }}>{tag}</span>
                </div>
              ))}
            </div>
            <span style={{ fontFamily: interBold ? 'Inter' : 'sans-serif', fontWeight: 600, fontSize: 14, color: '#7B7A72', letterSpacing: '0.02em', display: 'flex' }}>Patricia Bayona</span>
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: fonts.length ? fonts : undefined }
  )
}
