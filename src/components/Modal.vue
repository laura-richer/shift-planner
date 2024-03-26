<script setup>
import { computed } from 'vue';
import Shift from '@/components/Shift.vue';

import { useStore } from '@/store';

const store = useStore();

const activePersonName = computed(() => {
  return store.getActivePersonName();
})

const activePersonShifts = computed(() => {
  return store.getActivePersonShifts();
});

</script>

<template>
  <div class="modal">
    <div class="modal__inner">
      <div class="modal__header">
        <!-- using the active person ID to show or hide the modal -->
        <!-- setting to undefined on close therefore hides the modal -->
        <button class="modal__close" @click="store.setActivePersonId(undefined)">Close</button>
      </div>

      <div class="modal__body">
        <div>
          <h2>Upcoming shifts</h2>
          <h3>{{ activePersonName }}</h3>
        </div>

        <Shift v-for="shift in activePersonShifts" :key="shift.id" v-bind="shift" />
      </div>
    </div>
    <div class="modal-screen-overlay"></div>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #00000075;

  &__inner {
    position: relative;
    width: var(--container-compact-max-width);
    max-height: 75vh;
    margin: 0 auto;
    background-color: var(--color-white);
    overflow-y: scroll;
  }

  &__header {
    position: sticky;
    top: 0;
    width: 100%;
    margin-bottom: var(--spacer-sm);
    background-color: var(--color-white);
  }

  &__close {
    padding: 2rem;
  }

  &__body {
    display: flex;
    flex-direction: column;
    padding: 0 2rem 2rem;
    gap: var(--spacer-md);
  }
}
</style>
