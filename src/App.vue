<!-- TODO: add epic http server example in a code block -->
<script setup lang="ts">
import NavBar from './components/NavBar.vue';
</script>

<template>
  <NavBar/>
  <router-view/>
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>