<template>
  <div class="header-container">
    <header class="header">
      <SideNavToggle @toggle="$emit('sidenavToggle')" />
      <div class="logo">
        <nuxt-link to="/">WD BLOG</nuxt-link>
      </div>
      <span class="spacer"></span>
      <nav class="nav">
        <ul class="nav-list">
          <li class="nav-item">
            <nuxt-link to="/posts">Blog</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/about">About</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/admin">Admin</nuxt-link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SideNavToggle from "@/components/Navigations/SideNavToggle";

export default Vue.extend({
  name: "Header",
  components: {
    SideNavToggle
  }
});
</script>

<style lang="scss" scoped>
.header-container {
  height: 60px;
}

.header {
  width: 100%;
  position: fixed;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  z-index: 100;
  padding: 0 20px;
}

.logo {
  margin: 0 10px;
  font-size: 1.3rem;

  a {
    text-decoration: none;
  }
}

.spacer {
  flex: 1;
}

.nav {
  display: none;

  &-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }

  &-item {
    margin: 0 10px;

    a {
      text-decoration: none;
      color: white;

      &:hover,
      &:active,
      &.nuxt-link-active {
        color: red;
      }
    }
  }
}

@media (min-width: 768px) {
  .navigation-items {
    display: block;
  }
}
</style>
