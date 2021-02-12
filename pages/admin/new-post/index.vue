<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <form @submit.prevent="onSave">
        <AppControlInput v-model="editedPost.author"
          >Author Name</AppControlInput
        >
        <AppControlInput v-model="editedPost.title">Title</AppControlInput>
        <AppControlInput v-model="editedPost.thumbnailLink"
          >Thumbnail Link</AppControlInput
        >
        <AppControlInput control-type="textarea" v-model="editedPost.content"
          >Content</AppControlInput
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
import AppButton from "@/components/UI/AppButton.vue";
import AppControlInput from "@/components/UI/AppControlInput.vue";

export default Vue.extend({
  components: {
    AppButton,
    AppControlInput,
  },
  data() {
    return {
      editedPost: {
        author: "",
        title: "",
        thumbnailLink: "",
        content: "",
      },
    };
  },
  methods: {
    onSave() {
      // Save the post
      console.log(this.editedPost);
    },
    onCancel() {
      // Navigation back
      this.$router.push("/admin");
    },
  },
});
</script>

<style lang="scss" scoped>
.cancel-btn {
  margin-left: 10px;
}
</style>