const fetchDynamicRoutes = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs`);
    const data = await response.json();
    if (data && data.data) {
      return data.data.reverse().map((post) => `/blog/${post.slug}`);
    } else {
      console.error("No data found in response");
      return [];
    }
  } catch (error) {
    console.error("Error fetching dynamic routes:", error);
    return [];
  }
};
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.decimalsolution.com',
  changefreq: 'monthly',
    priority: 0.7,
    sitemapSize: 5000,
    generateIndexSitemap: false,
    exclude: ['/LandingPage'],
    additionalPaths: async (config) => {
      const dynamicRoutes = await fetchDynamicRoutes();
      return dynamicRoutes.map((route) => ({
        loc: `${config.siteUrl}${route}`,
        changefreq: 'weekly',
        priority: 0.8,
      }));
    },
  }