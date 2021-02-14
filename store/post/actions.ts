import axios from "axios";

export default {
  async nuxtServerInit(vuexContext: any, context: any) {
    try {
      const res = await axios.get(`${process.env.baseUrl}/posts.json`);
      const postsArray = [];
      for (const key in res.data) {
        postsArray.push({ ...res.data[key], id: key });
      }
      return vuexContext.commit("setPosts", postsArray);
    } catch (e) {
      context.error(e);
    }
  },
  async addPost(vuexContext: any, post: string[]) {
    try {
      const createdPost = { ...post, updatedDate: new Date() };
      const res = await axios.post(
        `${process.env.baseUrl}/posts.json`,
        createdPost
      );
      vuexContext.commit("addPost", {
        ...createdPost,
        id: res.data.name
      });
      return;
    } catch (error) {
      console.log(error);
    }
  },
  async editPost(vuexContext: any, editedPost: any) {
    try {
      const res = await axios.put(
        `${process.env.baseUrl}/posts/${editedPost.id}.json`,
        editedPost
      );
      vuexContext.commit("editPost", editedPost);
      return;
    } catch (error) {
      console.log(error);
    }
  },
  setPosts(vuexContext: any, posts: any) {
    vuexContext.commit("setPosts", posts);
  }
};
