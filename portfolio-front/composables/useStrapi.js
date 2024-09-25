import { useRuntimeConfig } from "nuxt/app";

export const getStrapiGraph = () => {
  const baseUrl = useRuntimeConfig().public.strapiUrl;

  const getRawData = async () => {
    const data = await GqlGetStrapiData();
    const sortedData = data.works.sort((a, b) => a.orderId - b.orderId);
    return sortedData;
  };

  const getProjectList = async () => {
    const data = await getRawData();

    // Map to return companyTitle and slug
    return data.map((work) => ({
      companyTitle: work.companyTitle,
      slug: work.slug,
    }));
  };

  const getProjectContent = async (slug) => {
    try {
      const data = await getRawData(); // Fetch all the data

      // Find the project by slug
      const project = data.find((work) => work.slug === slug);

      if (!project) {
        console.error("No project found for slug:", slug);
        throw new Error(`Project with slug ${slug} not found`);
      }

      return project; // Return the project data
    } catch (error) {
      console.error("Error fetching project content:", error);
      throw error; // Rethrow the error for further handling
    }
  };

  return {
    getRawData,
    getProjectList,
    getProjectContent,
    baseUrl
  };
};
