<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="onSubmitted" />
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import AdminPostForm from "@/components/Admin/AdminPostForm.vue";

export default Vue.extend({
  layout: "admin",
  components: {
    AdminPostForm
  },
  async asyncData(context) {
    try {
      const res = await axios.get(
        `https://nuxt-blog-e2622-default-rtdb.firebaseio.com/posts/${context.params.postId}.json`
      );
      return {
        loadedPost: res.data
      };
    } catch (e) {
      context.error(e);
    }
  },
  methods: {
    async onSubmitted(editedPost) {
      try {
        const res = await axios.put(
          `https://nuxt-blog-e2622-default-rtdb.firebaseio.com/posts/${this.$route.params.postId}.json`,
          editedPost
        );
        this.$router.push("/admin");
      } catch (error) {
        console.log(error);
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
