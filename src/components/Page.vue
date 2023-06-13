<script setup lang="ts">
import { onMounted, ref } from "vue";

const pages = ["Home", "Community", "Install", "Docs", "GitHub"];
const selectedPage = ref("Home");

function selectPage(page: string) {
  selectedPage.value = page;
}

function getPageURL(page: string) {
  if (page === "Home")
    return "/";

  return `/${page.toLowerCase()}.html`
}

function includes<T>(arr: T[], value: T): boolean {
  for (const v of arr)
    if (v === value)
      return true;

  return false;
}

// Handle initial page selection based on URL
onMounted(() => {
  const currentPage = window.location.hash.slice(1).toLowerCase();
  if (includes(pages, currentPage))
    selectedPage.value = currentPage;
});

// Listen for hash changes and update page selection accordingly
window.addEventListener("hashchange", () => {
  const currentPage = window.location.hash.slice(1).toLowerCase();
  if (includes(pages, currentPage))
    selectedPage.value = currentPage;
});
</script>

<template>
  <header>
    <div class="wrapper">
      <nav id="navigation">
        <ul>
          <li class="nav-item" v-for="(page, i) in pages" :key="i" :class="{ active: selectedPage === page }">
            <router-link :to="getPageURL(page)" @click="selectPage(page)">{{ page }}</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <main>
    <div class="wrapper">
      <slot></slot>
    </div>
  </main>
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
