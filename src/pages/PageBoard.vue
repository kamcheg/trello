<script setup lang="ts">
import Board from '@/components/Board/Board.vue'
import PageBoardHeader from '@/components/PageBoardHeader.vue'
</script>

<template>
  <div class="page-board">
    <PageBoardHeader />
    <Board class="page-board__main" />
  </div>
</template>

<style scoped lang="scss">
.page-board {
  &__main {
    padding: 20px;
  }
}
</style>
