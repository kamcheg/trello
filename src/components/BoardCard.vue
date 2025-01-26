<script setup lang="ts">
import { ElButton } from 'element-plus'
import { Delete } from '@element-plus/icons-vue'
defineProps<{
  link: string
  name: string
}>()

const emit = defineEmits<{
  (name: 'delete'): void
}>()
</script>

<template>
  <RouterLink :to="link" class="board-card">
    <ElButton
      type="danger"
      size="small"
      :icon="Delete"
      circle
      class="board-card__close"
      @click.prevent="emit('delete')"
    />
    {{ name }}
  </RouterLink>
</template>

<style scoped lang="scss">
.board-card {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  height: 70px;
  position: relative;

  &:hover {
    .board-card__close {
      visibility: initial;
    }
  }

  &__close {
    position: absolute;
    top: 10px;
    right: 10px;
    visibility: hidden;
  }
}
</style>
