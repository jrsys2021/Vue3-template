<script setup lang="ts">
defineProps({
  name: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: '#fff',
  },
  hight: {
    type: String,
    default: '16px',
  },
  width: {
    type: String,
    default: '16px',
  },
})
</script>

<template>
  <svg>
    <use
      :xlink:href="'#icon-' + name"
      :fill="color"
      :width="width"
      :height="hight"
    ></use>
  </svg>
</template>

<style scoped lang="scss"></style>
