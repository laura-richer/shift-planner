<script setup>
import TableHeader from './TableHeader.vue';
import TableBody from './TableBody.vue';
import TablePagination from './TablePagination.vue';
</script>

<template>
  <table>
    <TableHeader />
    <TableBody />
  </table>

  <TablePagination />
</template>
