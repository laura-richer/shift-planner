<script setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useStore } from '@/store';

import TableRow from './TableRow.vue';

const store = useStore();

const people = computed(() => {
  return store.getPeople();
});
</script>

<template>
  <tbody v-if="people">
    <TableRow v-for="person in people" :key="person.id" :person="person" />
  </tbody>
</template>