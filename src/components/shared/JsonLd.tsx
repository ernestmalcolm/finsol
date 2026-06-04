interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[]
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function buildCommodityProductSchema(commodity: {
  name: string
  description: string
  origin: string
  slug: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: commodity.name,
    description: commodity.description,
    category: 'Agricultural Commodity',
    countryOfOrigin: commodity.origin,
    url: `https://finsoltz.com/commodities/${commodity.slug}`,
    ...(commodity.image && {
      image: `https://finsoltz.com${commodity.image}`,
    }),
    brand: {
      '@type': 'Organization',
      name: 'Finsol T Ltd',
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/PreOrder',
      seller: {
        '@type': 'Organization',
        name: 'Finsol T Ltd',
        url: 'https://finsoltz.com',
      },
    },
  }
}

export function buildCommodityListSchema(
  items: { name: string; slug: string; description: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'African Agricultural Commodities',
    description: 'Premium agricultural commodities brokered by Finsol T Ltd from Tanzania and East Africa.',
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      url: `https://finsoltz.com/commodities/${item.slug}`,
      description: item.description,
    })),
  }
}
