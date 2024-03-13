<script setup>
defineProps({
  itemTitle: {
    type: String,
    required: true,
  },

  itemData: {
    type: [String, Number],
    required: true,
  }
})
</script>

<template>
  <div>
    <h4>{{ itemTitle }}</h4>
    <p>{{ itemData }}</p>
  </div>
</template>