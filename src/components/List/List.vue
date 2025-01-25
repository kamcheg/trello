<script setup lang="ts">
import Task from '@/components/Task/Task.vue'
</script>

<template>
  <div class="list">
    <div class="header">
      Название
    </div>
    <div class="body">
      <Task class="body__task">This is TASK</Task>
      <Task class="body__task">This is TASK</Task>
      <Task class="body__task">This is TASK</Task>
      <Task class="body__task">This is TASK</Task>
    </div>
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
</style>
