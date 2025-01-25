<script setup lang="ts">
import List from '@/components/List/List.vue'
import type { IBoard } from '@/types.ts'
import { useRoute } from 'vue-router'
import { useStore } from '@/store.ts'
import { computed } from 'vue'


const store = useStore()
const route = useRoute()

/* COMPUTED */
const boardId = computed<number>(() => {
  return +route.params.id
})
const currentBoard = computed<IBoard | undefined>(() => {
  return store.boards.find(b => b.id === boardId.value)
})
</script>

<template>
  <h1 v-if="!currentBoard">Error</h1>
  <div v-else class="board">
    <List
      v-for="list of currentBoard.lists"
      :key="list.id"
      :boardId="boardId"
      :listId="list.id"
      class="list"
    />
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
