<script setup>
import ShiftItem from '@/components/ShiftItem.vue';

defineProps({
  id: {
    type: Number,
    required: true,
  },

  location: {
    type: String,
  },

  role: {
    type: String,
  },
  
  personId: {
    type: Number,
  },

  start: {
    type: String,
  },

  end: {
    type: String,
  }
});
</script>

<template>
  <div class="shift-item">
    <ShiftItem v-if="location" item-title="Location" :item-data="location" />
    <ShiftItem v-if="start" item-title="Start" :item-data="start" />
    <ShiftItem v-if="role" item-title="Role" :item-data="role" />
    <ShiftItem v-if="end" item-title="End" :item-data="end" />
    <ShiftItem v-if="personId" item-title="Person ID" :item-data="personId" />
  </div>
</template>

<style lang="scss" scoped>
.shift-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacer-xs);
  padding: var(--spacer-sm);
  border: 1px solid var(--color-one);
}
</style>