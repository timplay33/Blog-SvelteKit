import { PRIVATE_GHOST_API_KEY, PRIVATE_GHOST_URL } from "$env/static/private";
import GhostContentAPI from "@tryghost/content-api";

// Create an instance of the GhostContentAPI
const api = new GhostContentAPI({
  url: PRIVATE_GHOST_URL,
  key: PRIVATE_GHOST_API_KEY , // replace this with your API key
  version: "v4",
});

export const getPosts = async () => {
    try {
      return await api.posts.browse({
        limit: "all",
      });
    } catch (error) {
      console.error(error);
    }
  };
  
export const getSinglePost = async (slug) => {
    try {
      return await api.posts.read({
        slug,
      });
    } catch (error) {
      console.error(error);
    }
};

export const getPages = async () => {
  try {
    return await api.pages.browse({
      limit: "all",
    });
  } catch (error) {
    console.error(error);
  }
};


  export const getSinglePage = async (slug) => {
    try {
      return await api.pages.read({
        slug,
      });
    } catch (error) {
      console.error(error);
    }
  }
  