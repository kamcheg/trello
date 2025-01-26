<script setup lang="ts">
import { ElButton, ElInput, ElDialog } from 'element-plus'
import { ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'

const title = ref('')

withDefaults(
  defineProps<{
    visible: boolean
    placeholder?: string
    btnText?: string
  }>(),
  {
    btnText: 'Создать',
    placeholder: ''
  }
)

const emit = defineEmits<{
  (name: 'close'): void
  (name: 'create', title: string): void
}>()

function onCreate() {
  emit('create', title.value)
  title.value = ''
}
</script>

<template>
  <ElDialog
    :modelValue="visible"
    width="500"
    class="modal-create-task"
    @close="emit('close')"
  >
    <div class="modal-create-task__wrapper">
      <ElInput v-model="title" :placeholder />

      <ElButton
        type="primary"
        :icon="Plus"
        class="modal-create-task__btn"
        @click="onCreate"
      >
        {{btnText}}
      </ElButton>
    </div>
  </ElDialog>
</template>

<style scoped lang="scss">
.modal-create-task {
  &__wrapper {
    padding: 16px 0;
  }
  &__btn {
    margin-top: 12px;
    width: 100%;
  }
}
</style>
