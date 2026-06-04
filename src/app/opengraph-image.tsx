import { ImageResponse } from 'next/og'

export const alt = 'Finsol T Ltd — Bridging Capital. Unlocking Africa.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0f1623 0%, #1a2332 50%, #0f1623 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 64,
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)',
          }}
        />
        <div
          style={{
            fontSize: 28,
            letterSpacing: '0.25em',
            color: '#c9a84c',
            textTransform: 'uppercase',
            marginBottom: 24,
          }}
        >
          Finsol T Ltd
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 300,
            color: '#f5f0e8',
            textAlign: 'center',
            lineHeight: 1.1,
            marginBottom: 16,
          }}
        >
          Bridging Capital.
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 300,
            color: '#c9a84c',
            textAlign: 'center',
            lineHeight: 1.1,
            marginBottom: 40,
          }}
        >
          Unlocking Africa.
        </div>
        <div
          style={{
            fontSize: 26,
            color: '#a8b0bc',
            textAlign: 'center',
            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          Strategic Advisory · Commodity Brokerage · Trade Finance · Dar es Salaam, Tanzania
        </div>
      </div>
    ),
    { ...size },
  )
}
