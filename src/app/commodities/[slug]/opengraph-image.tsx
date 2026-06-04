import { ImageResponse } from 'next/og'
import { getCommodity } from '@/lib/constants'

export const alt = 'Finsol T Ltd Commodity'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

type Props = { params: Promise<{ slug: string }> }

export default async function Image({ params }: Props) {
  const { slug } = await params
  const commodity = getCommodity(slug)
  const name = commodity?.name ?? 'Commodity'
  const subtitle = commodity?.shortDescription ?? 'African commodity brokerage by Finsol T Ltd'

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0f1623 0%, #1a2332 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 64,
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: '0.2em', color: '#c9a84c', textTransform: 'uppercase' }}>
          Finsol T Ltd · Commodity Brokerage
        </div>
        <div>
          <div style={{ fontSize: 80, fontWeight: 300, color: '#f5f0e8', lineHeight: 1.05, marginBottom: 20 }}>
            {name}
          </div>
          <div style={{ fontSize: 28, color: '#a8b0bc', lineHeight: 1.4, maxWidth: 900 }}>
            {subtitle}
          </div>
        </div>
        <div style={{ fontSize: 20, color: '#c9a84c' }}>finsoltz.com</div>
      </div>
    ),
    { ...size },
  )
}
