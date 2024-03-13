<script setup>
import { computed, ref } from 'vue';
import { useStore } from '@/store';

const store = useStore();

const activePage = ref(1);

const paginationCount = computed(() => {
  return store.totalPages;
});

const setActivePage = page => {
  activePage.value = page;
  store.setActivePage(page);
}
</script>

<template>
  <div v-if="paginationCount > 1" class="pagination">
      <nav class="pagination__items">
        <span
        v-for="page in paginationCount"
        :key="page"
        class="pagination__item"
        :class="{'pagination__item--active': page === activePage}"
        @click="setActivePage(page)"
      >
        {{ page }}
      </span>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: center;
  width: 100%;
  
  &__items {
    padding: 1rem;
  }

  &__item {
    padding: 0.5rem;
    cursor: pointer;

    &--active {
      color: var(--color-four);
    }

    &:hover,
    &:focus {
      color: var(--color-two);
    }
  }
}
</style>