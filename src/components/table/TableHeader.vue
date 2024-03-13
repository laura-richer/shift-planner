<script setup>
import TableHeaderItem from './TableHeaderItem.vue';
import { useStore } from '@/store';

const store = useStore();

const columns = store.tableColumns;
</script>

<template>
  <thead>
    <tr>
      <TableHeaderItem v-for="column in columns" :key="column.id" v-bind="column" />
    </tr>
  </thead>
</template>
