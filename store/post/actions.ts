import axios from "axios";

export default () => ({
  async addPost(vuexContext: any, post: any) {
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
});
