<template>
  <div class="admin-page">
    <section class="new-post">
      <AppButton @click="$router.push('/admin/new-post')"
        >Create Post</AppButton
      >
      <AppButton class="logout-btn" @click="onLogout">Logout</AppButton>
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <PostList :posts="loadedPosts" isAdmin />
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  layout: "admin",
  middleware: ["check-auth", "auth"],
  computed: {
    loadedPosts() {
      return this.$store.getters["post/loadedPosts"];
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch("post/logout");
      this.$router.push("/admin/auth");
    }
  }
});
</script>

<style lang="scss" scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-post h1 {
  text-align: center;
}

.logout-btn {
  margin-left: 10px;
}
</style>
