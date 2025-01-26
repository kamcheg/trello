<script setup lang="ts">
import {Back} from '@element-plus/icons-vue'
import {ElButton} from 'element-plus'

const title = 'title'
</script>

<template>
  <header class="header">
    <RouterLink to="/">
      <ElButton :icon="Back" circle />
    </RouterLink>

    <p class="title">
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
