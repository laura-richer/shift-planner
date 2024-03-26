<script setup>
import { defineAsyncComponent } from 'vue'

import Header from '@/components/Header.vue';
import TableView from '@/components/table/TableView.vue';

import { useStore } from '@/store';

const store = useStore();

const Modal = defineAsyncComponent(() => import('@/components/Modal.vue'))

store.fetchPeople();
store.fetchShifts();

</script>

<template>
  <Header />

  <div class="container">
    <TableView />
  </div>

  <!-- Using the clicked person id to show or not show the modal -->
  <Modal v-if="store.activePersonId" />
</template>

<style lang="scss" scoped>
.container {
  max-width: var(--container-max-width);
  margin: 0 auto;
}
</style>

