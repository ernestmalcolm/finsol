'use client'
import { useState } from 'react'
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'
import { REGIONS } from '@/lib/constants'

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

const ACTIVE_COUNTRIES: Record<string, string> = {
  TZ: '834',
  KE: '404',
  UG: '800',
  MW: '454',
  ZM: '894',
  CD: '180',
  NG: '566',
}

export function AfricaMap() {
  const [activeRegion, setActiveRegion] = useState<string | null>(null)

  const activeData = REGIONS.find((r) => r.id === activeRegion)

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="relative">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 400, center: [20, 0] }}
          style={{ width: '100%', height: 'auto' }}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const numericId = geo.id
                const regionEntry = Object.entries(ACTIVE_COUNTRIES).find(
                  ([, v]) => v === String(numericId)
                )
                const regionId = regionEntry?.[0]
                const isActive = !!regionId
                const isSelected = regionId === activeRegion

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={() => regionId && setActiveRegion(regionId === activeRegion ? null : regionId)}
                    style={{
                      default: {
                        fill: isSelected ? '#C9A84C' : isActive ? '#1C2438' : '#0F1623',
                        stroke: '#1F2937',
                        strokeWidth: 0.5,
                        outline: 'none',
                        cursor: isActive ? 'pointer' : 'default',
                        transition: 'fill 0.2s ease',
                      },
                      hover: {
                        fill: isActive ? '#C9A84C40' : '#0F1623',
                        stroke: isActive ? '#C9A84C' : '#1F2937',
                        strokeWidth: isActive ? 1 : 0.5,
                        outline: 'none',
                        cursor: isActive ? 'pointer' : 'default',
                      },
                      pressed: { outline: 'none' },
                    }}
                  />
                )
              })
            }
          </Geographies>
          {REGIONS.map((region) => (
            <Marker
              key={region.id}
              coordinates={[region.coords[1], region.coords[0]]}
              onClick={() => setActiveRegion(region.id === activeRegion ? null : region.id)}
            >
              <circle
                r={activeRegion === region.id ? 6 : 4}
                fill={activeRegion === region.id ? '#C9A84C' : '#E8C56A'}
                stroke="#080C14"
                strokeWidth={1.5}
                style={{ cursor: 'pointer', transition: 'r 0.2s ease' }}
              />
              {region.badge && (
                <text
                  textAnchor="middle"
                  y={-10}
                  style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '8px', fill: '#C9A84C' }}
                >
                  {region.badge}
                </text>
              )}
            </Marker>
          ))}
        </ComposableMap>
      </div>

      <div className="space-y-4">
        {REGIONS.map((region) => (
          <button
            key={region.id}
            onClick={() => setActiveRegion(region.id === activeRegion ? null : region.id)}
            className={`w-full text-left px-5 py-4 rounded-card border transition-all duration-300 ${
              activeRegion === region.id
                ? 'border-gold bg-[rgba(201,168,76,0.08)]'
                : 'border-border hover:border-border-gold bg-surface-card'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-3">
                <span className="font-display text-lg font-medium text-text-primary">{region.name}</span>
                {region.badge && (
                  <span className="font-mono text-[10px] tracking-widest text-gold border border-gold px-1.5 py-0.5">
                    {region.badge}
                  </span>
                )}
              </div>
              <span className="text-text-muted text-sm">{region.city}</span>
            </div>
            {activeRegion === region.id && (
              <div className="mt-3 pt-3 border-t border-border">
                <p className="text-text-secondary text-sm leading-relaxed mb-3">{region.context}</p>
                <div className="flex flex-wrap gap-2">
                  {region.sectors.map((s) => (
                    <span key={s} className="font-mono text-[10px] tracking-wider text-gold-dark bg-[rgba(201,168,76,0.1)] px-2 py-1">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
