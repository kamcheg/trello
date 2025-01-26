<script setup lang="ts">
import List from '@/components/List/List.vue'
import { useRoute } from 'vue-router'
import { useStore } from '@/store.ts'
import { computed } from 'vue'
import Task from '@/components/Task/Task.vue'
import Draggable from 'vuedraggable'
import type { IList, ITask } from '@/types.ts'

/* HOOKS */
const store = useStore()
const route = useRoute()

/* COMPUTED */
const boardIndex = computed<number>(() => {
  const id = +route.params.id
  return store.boards.findIndex(b => b.id === id)
})

function onAddTask (listId: IList['id'], title: string) {
  console.log(listId, title)
  store.createTask(store.boards[boardIndex.value].id, listId, title)
}

function onRemoveTask(listId: IList['id'], taskId: ITask['id']) {
  store.removeTask(store.boards[boardIndex.value].id, listId, taskId)
}
</script>

<template>
  <h1 v-if="boardIndex === -1">Error</h1>
  <div v-else class="board">
    <List
      v-for="list of store.boards[boardIndex].lists"
      :key="list.id"
      :title="list.title"
      class="list"
      @createTask="onAddTask(list.id, $event)"
    >
      <Draggable
        v-model="list.tasks"
        item-key="id"
        :animation="300"
        ghost-class="ghost"
        group="tasks"
        class="body"
      >
        <template #item="{ element: task }">
          <Task
            class="body__task"
            @delete="onRemoveTask(list.id, task.id)"
          >
            {{ task.title }}
          </Task>
        </template>
      </Draggable>
    </List>
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

.body {
  padding-top: 12px;
  &__task {
    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }
}

.ghost {
  opacity: 0.5;
  background: #69eaea;
}
</style>
