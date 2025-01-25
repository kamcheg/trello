<script setup lang="ts">
import List from '@/components/List/List.vue'
</script>

<template>
  <div class="board">
    <List class="list" />
    <List class="list" />
  </div>
</template>

<style scoped lang="scss">
.board {
  display: flex;
  align-items: flex-start;

  .list {
    &:not(:last-child) {
      margin-right: 24px;
    }
  }
}
</style>
