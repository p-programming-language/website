<script setup lang="ts">

</script>

<template>
  <header>
    <div class="wrapper">
      <navbar>
        <a>button</a>
      </navbar>
      <br/>
      <h1 id="title">Cosmo</h1>
      <br/>
      <p>Hello, world!</p>
    </div>
  </header>

  <main>

  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
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
