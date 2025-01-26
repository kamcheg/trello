<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="list">
    <div class="header">
      {{ title }}
    </div>

    <slot />
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
}

.ghost {
  opacity: 0.5;
  background: #69eaea;
}
</style>
