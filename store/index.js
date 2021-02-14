export default {
  actions: {
    async nuxtServerInit(vuexContext, context) {
      try {
        const data = await context.app.$axios.$get("/posts.json");
        const postsArray = [];
        for (const key in data) {
          postsArray.push({ ...data[key], id: key });
        }
        return vuexContext.commit("post/setPosts", postsArray, { root: true });
      } catch (e) {
        context.error(e);
      }
    }
  }
};
