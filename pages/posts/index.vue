<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PostList from "@/components/Posts/PostList.vue";

export default Vue.extend({
  components: {
    PostList,
  },
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPosts: [
          {
            id: "1",
            title: "First Post",
            previewText: "This is our first post!",
            thumbnail:
              "https://www.digieffects.com/wp-content/uploads/2020/08/Tech-news.jpg",
          },
          {
            id: "2",
            title: "Second Post",
            previewText: "This is our second post!",
            thumbnail:
              "https://www.digieffects.com/wp-content/uploads/2020/08/Tech-news.jpg",
          },
          {
            id: "3",
            title: "Third Post",
            previewText: "This is our third post!",
            thumbnail:
              "https://www.digieffects.com/wp-content/uploads/2020/08/Tech-news.jpg",
          },
        ],
      });
    }, 1000);
  },
});
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
