<template>
  <div class="admin-post-page">
    <section class="update-form">
      <form @submit.prevent="onSave">
        <AppControlInput v-model="editedPost.author"
          >Author Name</AppControlInput
        >
        <AppControlInput v-model="editedPost.title">Title</AppControlInput>
        <AppControlInput v-model="editedPost.thumbnail"
          >Thumbnail Link</AppControlInput
        >
        <AppControlInput control-type="textarea" v-model="editedPost.content"
          >Content</AppControlInput
        >
        <AppControlInput
          control-type="textarea"
          v-model="editedPost.previewText"
          >Preview Text</AppControlInput
        >
        <AppButton type="submit">Save</AppButton>
        <AppButton
          type="button"
          btn-style="cancel"
          @click="onCancel"
          class="cancel-btn"
          >Cancel</AppButton
        >
      </form>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    post: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
            author: "",
            title: "",
            thumbnail: "",
            content: "",
            previewText: ""
          }
    };
  },
  methods: {
    onSave() {
      // Save the post
      this.$emit("submit", this.editedPost);
    },
    onCancel() {
      // Navigation back
      this.$router.push("/admin");
    }
  }
});
</script>

<style lang="scss" scoped>
.cancel-btn {
  margin-left: 10px;
}
</style>
