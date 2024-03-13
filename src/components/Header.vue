<script setup>
import Search from '@/components/Search.vue';
</script>

<template>
  <header class="header">
    <h1 class="header__title">Laura Richer</h1>
    <Search />
    <!-- TODO install and use vue router & create mock nav if I have time -->
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  background-color: var(--color-one);
  align-items: center;
  padding: var(--spacer-xs);
}
</style>