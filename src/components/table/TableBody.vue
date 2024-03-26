<script setup>
import { computed } from 'vue';
import { useStore } from '@/store';

import TableRow from './TableRow.vue';

const store = useStore();

// Get unfiltered or filtered list of people
// Reactive so when you interact with the filter this variable will automatically update
const people = computed(() => {
  return store.getPeople();
});
</script>

<template>
  <tbody v-if="people">
    <TableRow v-for="person in people" :key="person.id" :person="person" />
  </tbody>
</template>
