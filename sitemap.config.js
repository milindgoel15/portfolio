/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://milindgoel.vercel.app',
  exclude: [
    '/cv.pdf',
  ],
  generateRobotsTxt: true,
}