<template>
  <div class="sidenav-container">
    <div v-if="show" class="sidenav-backdrop" @click="$emit('close')"></div>
    <transition name="slide-side">
      <nav v-if="show" class="sidenav">
        <ul class="sidenav-list" @click="$emit('close')">
          <li class="sidenav-item">
            <nuxt-link to="/posts">Blog</nuxt-link>
          </li>
          <li class="sidenav-item">
            <nuxt-link to="/about">About</nuxt-link>
          </li>
          <li class="sidenav-item">
            <nuxt-link to="/admin">Admin</nuxt-link>
          </li>
        </ul>
      </nav>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "SideNav",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss" scoped>
.sidenav {
  height: 100%;
  width: 300px;
  background-color: white;
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  padding: 30px;

  &-container {
    height: 100%;
    width: 100%;
  }

  &-backup {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
  }

  &-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &-item {
    margin: 20px 0;

    a {
      text-decoration: none;
      color: black;
      font-size: 1.5rem;

      &:hover,
      &:active {
        color: red;
      }
    }
  }
}
</style>
