import { PostData } from "@/types/post";

export default {
  setPosts(state: any, posts: string[]) {
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
