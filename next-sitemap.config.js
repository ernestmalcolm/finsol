/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://finsoltz.com',
  generateRobotsTxt: true,
  changefreq: 'monthly',
  priority: 0.7,
  exclude: ['/api/*'],
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/about'),
    await config.transform(config, '/services'),
    await config.transform(config, '/commodities'),
    await config.transform(config, '/regions'),
    await config.transform(config, '/contact'),
  ],
}
