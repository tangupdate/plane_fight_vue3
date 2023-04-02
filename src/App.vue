<script setup lang="ts">
import { ref } from 'vue'
const isStart = ref(false)
</script>

<template>
  <rect x="250" y="250">{{ isStart ? '开始' : '暂停' }}游戏</rect>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
