<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">{{ loadedPost.title }}</h1>
      <div class="post-details">
        <div class="post-detail">
          Last updated on {{ loadedPost.updatedDate }}
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

export default Vue.extend({
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPost: {
          id: "1",
          title: "First Post (ID: " + context.route.params.id + ")",
          previewText: "This is our first post!",
          author: "neneta",
          updatedDate: new Date(),
          content: "Some dummy text which is definitely not the preview.",
          thumbnail:
            "https://www.digieffects.com/wp-content/uploads/2020/08/Tech-news.jpg",
        },
      });
    }, 1000);
  },
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
