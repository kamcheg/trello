<script setup lang="ts">
import { ElButton, ElPopover } from 'element-plus'
import { MoreFilled } from '@element-plus/icons-vue'

const emit = defineEmits<{
  (name: 'delete'): void
}>()
</script>

<template>
  <div class="task-card">
    <div>
      <slot />
    </div>

    <ElPopover
      placement="top-start"
      :width="200"
      trigger="click"
    >
      <template #reference>
        <ElButton size="small" :icon="MoreFilled" circle />
      </template>

      <div class="context-menu">
        <ElButton v-if="false" class="context-menu__btn">
          Редактировать
        </ElButton>

        <ElButton
          class="context-menu__btn"
          @click="emit('delete')"
        >
          Удалить
        </ElButton>
      </div>
    </ElPopover>
  </div>
</template>

<style scoped lang="scss">
.task-card {
  border-radius: 6px;
  padding: 8px 6px;
  box-shadow: 0 0 12px rgba(0, 0, 0, .12);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .context-menu {}
}

.context-menu__btn {
  width: 100%;
  margin-left: 0;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
}
</style>
