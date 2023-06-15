<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<template>
  <h2 class="title list-header">{{ title }}</h2>
  <hr class="separator">
  <div class="description-body">
    <p><slot></slot></p>
  </div>
</template>