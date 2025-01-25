<script setup lang="ts">

</script>

<template>
  <div class="task-card">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.task-card {
  border-radius: 6px;
  padding: 8px 6px;
  box-shadow: 0 0 12px rgba(0, 0, 0, .12);;
}
</style>
