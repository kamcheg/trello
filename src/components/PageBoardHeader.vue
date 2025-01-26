<script setup lang="ts">
import {Back} from '@element-plus/icons-vue'
import {ElButton} from 'element-plus'
import { computed } from 'vue'
import { useStore } from '@/store.ts'
import { useRoute } from 'vue-router'


/* HOOKS */
const store = useStore()
const route = useRoute()

const title = computed<string>(() => {
  const id = +route.params.id
  return store.boards.find(b => b.id === id)?.title || ''
})
</script>

<template>
  <header class="header">
    <RouterLink to="/">
      <ElButton :icon="Back" circle />
    </RouterLink>

    <p v-if="title" class="title">
      Доска: {{ title }}
    </p>
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  padding: 10px;
  background: #fff;

  .title {
    font-size: 20px;
    font-weight: 700;
    margin-left: 20px;
  }
}
</style>
