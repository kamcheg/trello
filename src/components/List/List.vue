<script setup lang="ts">
import Task from '@/components/Task/Task.vue'
import { ref } from 'vue'
import Draggable from 'vuedraggable'

const todo = ref([
  { id: 1, title: 'This is TASK' },
  { id: 12, title: 'This is TASK' },
  { id: 31, title: 'This is TASK' },
  { id: 41, title: 'This is TASK' },
  { id: 51, title: 'This is TASK' }
])
</script>

<template>
  <div class="list">
    <div class="header">
      Название
    </div>

    <Draggable
      v-model="todo"
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

    <div class="footer">

    </div>
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
