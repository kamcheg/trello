<script setup lang="ts">
import List from '@/components/List/List.vue'
import { useRoute } from 'vue-router'
import { useStore } from '@/store.ts'
import { computed } from 'vue'
import Task from '@/components/Task/Task.vue'
import Draggable from 'vuedraggable'
import type { IList, ITask } from '@/types.ts'
import ListCreator from '@/components/ListCreator.vue'

/* HOOKS */
const store = useStore()
const route = useRoute()

/* COMPUTED */
const boardIndex = computed<number>(() => {
  const id = +route.params.id
  return store.boards.findIndex(b => b.id === id)
})

/* METHODS */
function onAddTask (listId: IList['id'], title: string) {
  store.createTask(store.boards[boardIndex.value].id, listId, title)
}

function onRemoveTask(listId: IList['id'], taskId: ITask['id']) {
  store.removeTask(store.boards[boardIndex.value].id, listId, taskId)
}

function onCreateList(title: string) {
  store.createList(store.boards[boardIndex.value].id, title)
}

function onChangeListTitle(listId: IList['id'], title: string) {
  store.changeListTitle(store.boards[boardIndex.value].id, listId, title)
}

function onRemoveList(listId: IList['id']) {
  store.removeList(store.boards[boardIndex.value].id, listId)
}
</script>

<template>
  <h1 v-if="boardIndex === -1">Error</h1>
  <div v-else class="board">
    <Draggable
      v-model="store.boards[boardIndex].lists"
      item-key="id"
      :animation="300"
      ghost-class="ghost"
      group="lists"
      class="lists"
    >
      <template #item="{ element: list }">
        <List
          :title="list.title"
          class="list"
          @createTask="onAddTask(list.id, $event)"
          @changeTitle="onChangeListTitle(list.id, $event)"
          @delete="onRemoveList(list.id)"
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
      </template>
    </Draggable>

    <ListCreator
      style="flex-shrink: 0;"
      @create="onCreateList($event)"
    />
  </div>
</template>

<style scoped lang="scss">
.board {
  display: flex;
  align-items: flex-start;
  max-width: 100%;
  overflow-x: auto;
}

.lists {
  display: flex;
  align-items: flex-start;

  .list {
    flex-shrink: 0;
    margin-right: 24px;
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
