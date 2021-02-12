<template>
  <section class="post-list">
    <PostPreview
      id="1"
      :is-admin="isAdmin"
      thumbnail="https://www.digieffects.com/wp-content/uploads/2020/08/Tech-news.jpg"
      title="Hello there!"
      previewText="This is my first post!"
    />
    <PostPreview
      id="2"
      :is-admin="isAdmin"
      thumbnail="https://www.digieffects.com/wp-content/uploads/2020/08/Tech-news.jpg"
      title="Hello there! - the second -time"
      previewText="This is my second post!"
    />
    <PostPreview
      id="3"
      :is-admin="isAdmin"
      thumbnail="https://www.digieffects.com/wp-content/uploads/2020/08/Tech-news.jpg"
      title="Hello there! - the third time"
      previewText="This is my third post!"
    />
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import PostPreview from "@/components/Posts/PostPreview.vue";

export default Vue.extend({
  components: {
    PostPreview,
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss" scoped>
.post-list {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>