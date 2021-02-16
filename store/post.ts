import axios from "axios";
import { PostData } from "@/types/post";

export const state = () => ({
  loadedPosts: [],
  token: null
});

export const getters = {
  loadedPosts(state: any) {
    return state.loadedPosts;
  },

  isAuthenticated(state: any) {
    return state.token != null;
  }
};

export const actions = {
  async addPost(vuexContext: any, post: any) {
    try {
      const createdPost = { ...post, updatedDate: new Date() };
      const res = await axios.post(
        `${process.env.baseUrl}/posts.json?auth=${vuexContext.state.token}`,
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
        `${process.env.baseUrl}/posts/${editedPost.id}.json?auth=${vuexContext.state.token}`,
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
  },

  async authenticateUser(vuexContext: any, authData: any) {
    // Change Endpoint URL, depend on Login or not
    let authUrl = "";
    authData.isLogin
      ? (authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.fbAPIKey}`)
      : (authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.fbAPIKey}`);

    // Try Login or Signup
    try {
      const res = await axios.post(authUrl, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      });
      vuexContext.commit("setToken", res.data.idToken);
      vuexContext.dispatch("setLogoutTimer", res.data.expiresIn * 1000);
      return;
    } catch (error) {
      console.log(error);
    }
  },

  setLogoutTimer(vuexContext: any, duration: number) {
    setTimeout(() => {
      vuexContext.commit("clearToken");
    }, duration);
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
  },

  setToken(state: any, token: string) {
    state.token = token;
  },

  clearToken(state: any) {
    state.token = null;
  }
};
