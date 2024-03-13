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
  flex-direction: column;
  gap: var(--spacer-xs);
  background-color: var(--color-one);
  padding: var(--spacer-xs);

  @media screen and (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
