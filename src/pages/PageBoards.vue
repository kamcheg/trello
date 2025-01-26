<script setup lang="ts">

import BoardCard from '@/components/BoardCard.vue'
import { useStore } from '@/store.ts'
import BoardCreator from '@/components/BoardCreator.vue'
import type { IBoard } from '@/types.ts'

const store = useStore()

function onDelete(id: IBoard['id']) {
  store.onDeleteBoard(id)
}
</script>

<template>
  <div class="page-boards">
    <div class="page-boards-content">
      <BoardCard
        v-for="board of store.boards"
        :key="board.id"
        :name="board.title"
        :link="'/boards/' + board.id"
        class="page-boards-content__item"
        @delete="onDelete(board.id)"
      />
      <BoardCreator class="page-boards-content__item" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-boards {
  display: flex;
  justify-content: center;
  align-items: center;

  &-content {
    width: 700px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }
}
</style>
