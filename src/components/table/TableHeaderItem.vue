<script setup>
import { ref, computed } from 'vue';

import { useStore } from '@/store';

const store = useStore();

const props = defineProps({
  title: {
    type: String,
    required: true
  },

  id: {
    type: String,
    required: true,
  },

  allowReorder: {
    type: Boolean,
  }
});

const columnOrder = ref(undefined);

const reorderTableByColumn = columnId => {
  columnOrder.value = !columnOrder.value || columnOrder.value === 'DESC' ? 'ASC' : 'DESC';
  store.setTableOrder(columnId, columnOrder.value);
}
</script>

<template>
  <th>
    <div class="table-header-item">
      <span>{{ title }}</span>
      <img
        v-if="allowReorder"
        class="table-header-item__icon"
        :class="{'table-header-item__icon--reverse':
        columnOrder === 'DESC' && store.tableOrder.orderBy === id}"
        src="/icons/up.svg"
        @click="reorderTableByColumn(id)"
      />
    </div>
  </th>
</template>

<style lang="scss" scoped>
.table-header-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: opacity 0.3s;

  &__icon {
    cursor: pointer;
    width: 1rem;

    &--reverse {
      transform: rotate(180deg);
    }

    &:hover,
    &:focus {
      opacity: 0.5;
    }
  }
}
</style>