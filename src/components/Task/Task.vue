<script setup lang="ts">
import { ElButton, ElPopover } from 'element-plus'
import { MoreFilled } from '@element-plus/icons-vue'
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
        <ElButton class="context-menu__btn">
          Редактировать
        </ElButton>

        <ElButton class="context-menu__btn">
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
