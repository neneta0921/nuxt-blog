<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <section class="featured-posts">
      <PostPreview
        id="1"
        thumbnail="https://www.digieffects.com/wp-content/uploads/2020/08/Tech-news.jpg"
        title="Hello there!"
        previewText="This is my first post!"
      />
      <PostPreview
        id="2"
        thumbnail="https://www.digieffects.com/wp-content/uploads/2020/08/Tech-news.jpg"
        title="Hello there! - the second -time"
        previewText="This is my second post!"
      />
      <PostPreview
        id="3"
        thumbnail="https://www.digieffects.com/wp-content/uploads/2020/08/Tech-news.jpg"
        title="Hello there! - the third time"
        previewText="This is my third post!"
      />
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PostPreview from "@/components/Posts/PostPreview";
export default Vue.extend({
  components: {
    PostPreview
  }
});
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2px;
  }
}

.featured-posts {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
