<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form @submit.prevent="onSubmit">
        <AppControlInput type="email" v-model="email"
          >E-Mail Address</AppControlInput
        >
        <AppControlInput type="password" v-model="password"
          >Password</AppControlInput
        >
        <AppButton type="submit">{{ isLogin ? "Login" : "Sign Up" }}</AppButton>
        <AppButton
          type="button"
          btn-style="inverted"
          class="switch-btn"
          @click="isLogin = !isLogin"
          >Switch to {{ isLogin ? "Sing Up" : "Login" }}</AppButton
        >
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  name: "AdminAuthPage",
  layout: "admin",
  data() {
    return {
      isLogin: true,
      email: "",
      password: "",
    };
  },
  methods: {
    async onSubmit() {
      await this.$store.dispatch("post/authenticateUser", {
        isLogin: this.isLogin,
        email: this.email,
        password: this.password,
      });

      this.$router.push("/admin");
    },
  },
});
</script>

<style lang="scss" scoped>
.admin-auth-page {
  padding: 20px;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  margin: auto;
  padding: 10px;
}

.switch-btn {
  margin-left: 10px;
}
</style>
