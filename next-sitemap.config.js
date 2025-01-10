const fetchDynamicRoutes = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs`);
    const data = await response.json();
    const jobs = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/jobs`);
    const jobsdata = await jobs.json();
    if (jobsdata && jobsdata.data && data && data.data) {
      const blogRoutes = data.data.reverse().map((post) => `/blog/${post.slug}`);
      const jobRoutes = jobsdata.data.map((job) => `/careers/${job._id}`);
      return [...blogRoutes, ...jobRoutes];
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
  siteUrl: "https://www.decimalsolution.com",
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
  generateIndexSitemap: false,
  exclude: ["/LandingPage"],
  additionalPaths: async (config) => {
    const dynamicRoutes = await fetchDynamicRoutes();
    return dynamicRoutes.map((route) => ({
      loc: `${config.siteUrl}${route}`,
      changefreq: "daily",
      priority: 0.8,
    }));
  },
};
