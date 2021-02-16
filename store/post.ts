import axios from "axios";
import Cookie from "js-cookie";

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

      const token = res.data.idToken;
      const expiresTime = res.data.expiresIn * 1000;
      const expirationDate = new Date().getTime() + String(expiresTime);

      vuexContext.commit("setToken", token);

      // Store to Local Storage
      localStorage.setItem("token", token);
      localStorage.setItem("tokenExpiration", expirationDate);

      // Store to Cookie
      Cookie.set("jwt", token);
      Cookie.set("expirationDate", expirationDate);

      vuexContext.dispatch("setLogoutTimer", expiresTime);
      return;
    } catch (error) {
      console.log(error);
    }
  },

  setLogoutTimer(vuexContext: any, duration: number) {
    setTimeout(() => {
      vuexContext.commit("clearToken");
    }, duration);
  },

  initAuth(vuexContext: any, req: any) {
    let token;
    let expirationDate;

    if (req) {
      if (!req.headers.cookie) {
        return;
      }
      const jwtCookie = req.headers.cookie
        .split(";")
        .find((c: string) => c.trim().startsWith("jwt="));
      if (!jwtCookie) {
        return;
      }
      token = jwtCookie.split("=")[1];

      expirationDate = req.headers.cookie
        .split(";")
        .find((c: string) => c.trim().startsWith("expirationDate="))
        .split("=")[1];
    } else {
      token = localStorage.getItem("token");
      expirationDate = Number(localStorage.getItem("tokenExpiration"));

      if (new Date().getTime() > expirationDate || !token) {
        return;
      }
    }

    vuexContext.dispatch(
      "setLogoutTimer",
      expirationDate - new Date().getTime()
    );
    vuexContext.commit("setToken", token);
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
