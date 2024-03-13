<script setup>
import { ref, watch } from 'vue';
import debounce from 'lodash/debounce';

import { useStore } from '@/store';

const store = useStore();

const searchInput = ref('');

const debouncedHandleInput = debounce((value) => {
  store.setSearchInput(value);
}, 200); // Debounce to avoid spamming

watch(searchInput, (newValue, oldValue) => {
  debouncedHandleInput(newValue);
});
</script>

<template>
  <div class="search">
    <span>Search by name:</span>
    <input v-model="searchInput" />
  </div>
</template>

<style lang="scss" scoped>
.search {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>