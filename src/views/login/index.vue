<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  console.log(3333)
})
onUnmounted(() => {
  console.log(8888)
})
</script>

<template>
  <div>
    <h1>登录</h1>
  </div>
</template>

<style scoped lang="scss"></style>
