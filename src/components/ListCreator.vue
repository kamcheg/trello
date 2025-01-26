<script setup lang="ts">
import ListWrapper from '@/components/ListWrapper.vue'
import { ElButton, ElInput } from 'element-plus'
import { ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'

const emit = defineEmits<{
  (name: 'create', title: string): void
}>()

const title = ref('')

function onCreate() {
  emit('create', title.value)
  title.value = ''
}
</script>

<template>
  <ListWrapper class="list-creator">
    <ElInput v-model="title" placeholder="Введите название списка" />
    <ElButton
      type="primary"
      :icon="Plus"
      class="list-creator__btn"
      @click="onCreate"
    >
      Создать
    </ElButton>
  </ListWrapper>
</template>

<style scoped lang="scss">
.list-creator {
  &__btn {
    margin-top: 12px;
    width: 100%;
  }
}
</style>
