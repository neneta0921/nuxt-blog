import Vuex from "vuex";
import axios from "axios";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: Array()
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },
      addPost(state, post) {
        state.loadedPosts.push(post);
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(
          post => post.id === editedPost.id
        );

        // update post
        state.loadedPosts[postIndex] = editedPost;
      }
    },
    actions: {
      async nuxtServerInit(vuexContext, context) {
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
      async addPost(vuexContext, post) {
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
      async editPost(vuexContext, editedPost) {
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
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    }
  });
};

export default createStore;
