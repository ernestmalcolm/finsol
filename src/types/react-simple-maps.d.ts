declare module 'react-simple-maps' {
  import { ComponentType, SVGAttributes } from 'react'

  export interface ComposableMapProps {
    projection?: string
    projectionConfig?: Record<string, unknown>
    style?: React.CSSProperties
    className?: string
    children?: React.ReactNode
  }

  export interface GeographiesProps {
    geography: string | Record<string, unknown>
    children: (props: { geographies: Geography[] }) => React.ReactNode
  }

  export interface Geography {
    rsmKey: string
    id: string | number
    properties: Record<string, unknown>
    [key: string]: unknown
  }

  export interface GeographyProps {
    geography: Geography
    style?: {
      default?: React.CSSProperties & Record<string, unknown>
      hover?: React.CSSProperties & Record<string, unknown>
      pressed?: React.CSSProperties & Record<string, unknown>
    }
    onClick?: () => void
    className?: string
    [key: string]: unknown
  }

  export interface MarkerProps {
    coordinates: [number, number]
    onClick?: () => void
    children?: React.ReactNode
    className?: string
  }

  export const ComposableMap: ComponentType<ComposableMapProps>
  export const Geographies: ComponentType<GeographiesProps>
  export const Geography: ComponentType<GeographyProps>
  export const Marker: ComponentType<MarkerProps>
}
