import axios from "axios";
import { PostData } from "@/types/post";

export const state = () => ({
  // loadedPosts: Array()
  loadedPosts: []
});

export const getters = {
  loadedPosts(state: any) {
    return state.loadedPosts;
  }
};

export const actions = {
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
};

export const mutations = {
  setPosts(state: any, posts: any) {
    state.loadedPosts = posts;
  },

  addPost(state: any, post: PostData) {
    state.loadedPosts.push(post);
  },

  editPost(state: any, editedPost: any) {
    const postIndex = state.loadedPosts.findIndex(
      (post: any) => post.id === editedPost.id
    );

    // update post
    state.loadedPosts[postIndex] = editedPost;
  }
};
