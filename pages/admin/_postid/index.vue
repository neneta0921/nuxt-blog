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
import { PostData } from "@/types/post";

export default Vue.extend({
  layout: "admin",
  middleware: ["check-auth", "auth"],
  components: {
    AdminPostForm,
  },

  async asyncData(context) {
    try {
      const res = await axios.get(
        `${process.env.baseUrl}/posts/${context.params.postId}.json`
      );
      return {
        loadedPost: { ...res.data, id: context.params.postId },
      };
    } catch (e) {
      context.error(e);
    }
  },

  methods: {
    async onSubmitted(editedPost: PostData) {
      await this.$store.dispatch("post/editPost", editedPost);
      this.$router.push("/admin");
    },
  },
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
