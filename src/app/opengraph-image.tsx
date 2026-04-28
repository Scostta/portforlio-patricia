import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Patricia Bayona — Product Manager & UX Lead'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

async function loadFont(url: string): Promise<ArrayBuffer | null> {
  try {
    const res = await fetch(url)
    return res.arrayBuffer()
  } catch {
    return null
  }
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

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#F6F5F0',
          position: 'relative',
        }}
      >
        {/* Left accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 8,
            height: '100%',
            background: '#6667AB',
          }}
        />

        {/* Decorative large watermark */}
        <div
          style={{
            position: 'absolute',
            bottom: -20,
            right: 40,
            fontFamily: playfairBold ? 'Playfair' : 'serif',
            fontWeight: 700,
            fontSize: 280,
            color: '#131310',
            opacity: 0.04,
            lineHeight: 1,
            letterSpacing: '-0.04em',
            display: 'flex',
          }}
        >
          PM
        </div>

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '72px 80px 72px 96px',
            width: '100%',
          }}
        >
          {/* Top: label */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                fontFamily: interBold ? 'Inter' : 'sans-serif',
                fontWeight: 600,
                fontSize: 13,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#6667AB',
              }}
            >
              Portfolio
            </span>
          </div>

          {/* Center: name + role */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                fontFamily: playfairBold ? 'Playfair' : 'serif',
                fontWeight: 700,
                fontSize: 72,
                color: '#131310',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                marginBottom: 20,
                display: 'flex',
              }}
            >
              Patricia Bayona
            </div>
            <div
              style={{
                fontFamily: interBold ? 'Inter' : 'sans-serif',
                fontWeight: 600,
                fontSize: 28,
                color: '#6667AB',
                letterSpacing: '-0.01em',
                display: 'flex',
              }}
            >
              Product Manager & UX Lead
            </div>
            <div
              style={{
                fontFamily: interRegular ? 'Inter' : 'sans-serif',
                fontWeight: 400,
                fontSize: 20,
                color: '#7B7A72',
                marginTop: 16,
                display: 'flex',
              }}
            >
              10+ years building digital products from 0 to 1
            </div>
          </div>

          {/* Bottom: company badges */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                background: '#EDECEA',
                border: '1px solid #E0DFD7',
                borderRadius: 6,
                padding: '8px 16px',
                marginRight: 12,
              }}
            >
              <span
                style={{
                  fontFamily: interBold ? 'Inter' : 'sans-serif',
                  fontWeight: 600,
                  fontSize: 13,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: '#131310',
                  display: 'flex',
                }}
              >
                LINK Mobility
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                background: '#EDECEA',
                border: '1px solid #E0DFD7',
                borderRadius: 6,
                padding: '8px 16px',
              }}
            >
              <span
                style={{
                  fontFamily: interBold ? 'Inter' : 'sans-serif',
                  fontWeight: 600,
                  fontSize: 13,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: '#131310',
                  display: 'flex',
                }}
              >
                Alqua
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fonts.length ? fonts : undefined,
    }
  )
}
