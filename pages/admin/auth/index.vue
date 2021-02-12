<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form>
        <AppControlInput type="email">E-Mail Address</AppControlInput>
        <AppControlInput type="password">Password</AppControlInput>
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
import AppButton from "@/components/UI/AppButton.vue";
import AppControlInput from "@/components/UI/AppControlInput.vue";

export default Vue.extend({
  name: "AdminAuthPage",
  layout: "admin",
  components: {
    AppButton,
    AppControlInput,
  },
  data() {
    return {
      isLogin: true,
    };
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