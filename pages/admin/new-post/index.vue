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
  components: {
    AdminPostForm
  },
  methods: {
    async onSubmitted(postData: PostData) {
      try {
        const result = await axios.post(
          "https://nuxt-blog-e2622-default-rtdb.firebaseio.com/posts.json",
          { ...postData, updatedDate: new Date() }
        );
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  }
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
