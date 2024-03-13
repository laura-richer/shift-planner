<script setup>
import { useStore } from '@/store';

const store = useStore();

const props = defineProps({
  person: {
    type: Object,
    required: true
  }
});

const columns = store.tableColumns;

const handleTableRowClick = () => {
  store.setActivePersonId(props.person.id);
}
</script>

<template>
  <tr class="table-row" @click="handleTableRowClick">
    <td
      v-for="column in columns"
      :key="column.id"
      class="table-row__item"
      :class="{'table-row__item--active':
      person[column.id] === 'Active' }">
        {{ person[column.id] }}
    </td>
  </tr>
</template>

<style lang="scss" scoped>
.table-row {
  cursor: pointer;

  &__item {
    &--active {
      color: var(--color-four);
    }
  }
}
</style>