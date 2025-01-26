<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue'
import { ElButton } from 'element-plus'
import ModalTitle from '@/components/ModalTitle.vue'
import { ref } from 'vue'
import ListWrapper from '@/components/ListWrapper.vue'

defineProps<{
  title: string
}>()

const emit = defineEmits<{
  (name: 'createTask', title: string): void
}>()

const isModalVisible = ref(false)

function onCreate(title: string) {
  isModalVisible.value = false
  emit('createTask', title)
}
</script>

<template>
  <ListWrapper class="list">
    <div class="header">
      {{ title }}
    </div>

    <slot />

    <div class="footer">
      <ElButton
        type="primary"
        :icon="Plus"
        style="width: 100%;"
        @click="isModalVisible = true"
      >
        Добавить
      </ElButton>
    </div>

    <ModalTitle
      :visible="isModalVisible"
      placeholder="Введите название задачи"
      btnText="Создать задачу"
      @create="onCreate"
      @close="isModalVisible = false"
    />
  </ListWrapper>
</template>

<style scoped lang="scss">
.list {
  .header {
    font-weight: 700;
  }
}

.footer {
  margin-top: 14px;
}
</style>
