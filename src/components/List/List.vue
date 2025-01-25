<script setup lang="ts">
import Task from '@/components/Task/Task.vue'
import { computed } from 'vue'
import Draggable from 'vuedraggable'
import { useStore } from '@/store.ts'

const props = defineProps<{
  boardId: number
  listId: number
}>()

const store = useStore()

const boardIndex = computed(() => {
  return store.boards.findIndex(b => b.id === props.boardId)
})
const listIndex = computed(() => {
  return store.boards[boardIndex.value].lists.findIndex(l => l.id === props.listId)
})
</script>

<template>
  <div v-if="boardIndex === -1 || listIndex === -1" class="list">
    <div class="header">
      Не удалось загрузить список!
    </div>
  </div>

  <div v-else class="list">
    <div class="header">
      {{ store.boards[boardIndex].lists[listIndex].title }}
    </div>

    <Draggable
      v-model="store.boards[boardIndex].lists[listIndex].tasks"
      item-key="id"
      :animation="300"
      ghostClass="ghost"
      group="tasks"
      class="body"
    >
      <template #item="{ element: task }">
        <Task class="body__task">
          {{ task.title }}
        </Task>
      </template>
    </Draggable>
  </div>
</template>

<style scoped lang="scss">
.list {
  width: 272px;
  border-radius: 12px;
  background-color: #f1f2f4;
  padding: 12px;

  .header {
    font-weight: 700;
  }

  .body {
    padding-top: 12px;
    &__task {
      &:not(:last-child) {
        margin-bottom: 8px;
      }
    }
  }
}

.ghost {
  opacity: 0.5;
  background: #69eaea;
}
</style>
