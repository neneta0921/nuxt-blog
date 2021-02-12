<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AdminPostForm from "@/components/Admin/AdminPostForm.vue";

export default Vue.extend({
  layout: "admin",
  components: {
    AdminPostForm,
  },
  data() {
    return {
      loadedPost: {
        author: "neneta",
        title: "My post",
        content: "It's a blog post.",
        thumbnailLink:
          "https://www.digieffects.com/wp-content/uploads/2020/08/Tech-news.jpg",
      },
    };
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