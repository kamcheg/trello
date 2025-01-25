<script setup lang="ts">
import { useStore } from '@/store.ts'

const store = useStore()
</script>

<template>
  <main>
    <h1>{{ store.value }}</h1>
  </main>
</template>

<style lang="scss" scoped>
h1 {
  color: red;
}
</style>
