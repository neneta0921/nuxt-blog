<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">{{ loadedPost.title }}</h1>
      <div class="post-details">
        <div class="post-detail">
          Last updated on {{ loadedPost.updatedDate | date }}
        </div>
        <div class="post-detail">Written by {{ loadedPost.author }}</div>
      </div>
      <p class="post-content">{{ loadedPost.content }}</p>
    </section>
    <section class="post-feedback">
      <p>
        Let me know what you think about the post, send a mail to
        <a href="mailto:feedback@examaple.com">feedback@examaple.com</a>
      </p>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  async asyncData(context) {
    if (context.payload) {
      return {
        loadedPost: context.payload.postData
      };
    }

    try {
      const res = await axios.get(
        `${process.env.baseUrl}/posts/${context.params.id}.json`
      );
      return {
        loadedPost: res.data
      };
    } catch (e) {
      context.error(e);
    }
  },
  head: {
    title: "A Blog Post"
  }
});
</script>

<style lang="scss" scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;

  &-title {
    margin: 0;
  }

  &-details {
    padding: 10px;
    box-sizing: border-box;
    border-bottom: 3px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  &-detail {
    color: rgb(88, 88, 88);
    margin: 0 10px;
  }

  &-feedback a {
    color: red;
    text-decoration: none;

    &:hover,
    &:active {
      color: salmon;
    }
  }
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;

    &-details {
      flex-direction: row;
    }
  }
}
</style>
