/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://finsoltz.com',
  generateRobotsTxt: true,
  changefreq: 'monthly',
  priority: 0.7,
  exclude: ['/api/*'],
  additionalPaths: async (config) => {
    const staticPaths = [
      '/',
      '/about',
      '/services',
      '/services/strategic-advisory',
      '/services/financial-structuring',
      '/services/commodity-brokerage',
      '/services/due-diligence',
      '/commodities',
      '/regions',
      '/contact',
    ]

    const commoditySlugs = [
      'coffee', 'cashewnuts', 'sisal', 'sesame', 'vanilla',
      'maize', 'sorghum', 'sunflower', 'tea', 'cotton', 'cloves',
      'minerals', 'precious-minerals',
    ]
    const commodityPaths = commoditySlugs.map((slug) => `/commodities/${slug}`)

    const allPaths = [...staticPaths, ...commodityPaths]
    return Promise.all(allPaths.map((path) => config.transform(config, path)))
  },
}
