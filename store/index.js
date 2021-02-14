// import Vuex from "vuex";
import axios from "axios";

export default {
  actions: {
    async nuxtServerInit(vuexContext, context) {
      try {
        const res = await axios.get(`${process.env.baseUrl}/posts.json`);
        const postsArray = [];
        for (const key in res.data) {
          postsArray.push({ ...res.data[key], id: key });
        }
        console.log(vuexContext.commit);
        return vuexContext.commit("post/setPosts", postsArray, { root: true });
      } catch (e) {
        context.error(e);
      }
    }
  }
};
