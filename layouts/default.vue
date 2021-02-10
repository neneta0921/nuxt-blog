<template>
  <div>
    <Header @sidenavToggle="displaySidenav = !displaySidenav" />
    <SideNav :show="displaySidenav" @close="displaySidenav = false" />
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "@/components/Navigation/Header.vue";
import SideNav from "@/components/Navigation/SideNav.vue";

export default Vue.extend({
  components: {
    Header,
    SideNav,
  },
  data() {
    return {
      displaySidenav: false,
    };
  },
});
</script>

<style>
html {
  font-family: "Open Sans", sans-serif;
  box-sizing: border-box;
}

body {
  margin: 0;
}
</style>
