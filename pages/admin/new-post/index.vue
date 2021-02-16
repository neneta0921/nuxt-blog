<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submit="onSubmitted" />
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
  methods: {
    async onSubmitted(postData: PostData) {
      await this.$store.dispatch("post/addPost", postData);
      this.$router.push("/admin");
    },
  },
});
</script>

<style lang="scss" scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
