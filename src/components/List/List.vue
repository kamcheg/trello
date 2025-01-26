<script setup lang="ts">
import { Delete, Plus, EditPen } from '@element-plus/icons-vue'
import { ElButton } from 'element-plus'
import ModalTitle from '@/components/ModalTitle.vue'
import { useTemplateRef, ref, nextTick } from 'vue'
import ListWrapper from '@/components/ListWrapper.vue'

const props = defineProps<{
  title: string
}>()

const emit = defineEmits<{
  (name: 'createTask', title: string): void
  (name: 'changeTitle', title: string): void
  (name: 'delete'): void
}>()

/* REFS */
const input = useTemplateRef<HTMLInputElement>('my-input')

/* DATA */
const isModalVisible = ref(false)
const contenteditable = ref(false)
const titleLocal = ref(props.title)

function onCreate(title: string) {
  isModalVisible.value = false
  emit('createTask', title)
}

async function onEdit() {
  contenteditable.value = true
  await nextTick()
  input.value?.focus()
}

function onChangeTitle(title: string) {
  contenteditable.value = false
  if (title === '') { return }
  titleLocal.value = title
  emit('changeTitle', titleLocal.value)
}
</script>

<template>
  <ListWrapper class="list">
    <div class="header">
      <div class="title-block">
        <p
          :hidden="contenteditable"
          :contenteditable="contenteditable"
          @dblclick="contenteditable = true"
        >{{ titleLocal }}</p>

        <input
          ref="my-input"
          :hidden="!contenteditable"
          @blur="contenteditable = false"
          @keydown.enter="onChangeTitle(($event.target as HTMLInputElement).value)"
        />
      </div>

      <div class="buttons-block">
        <ElButton
          v-if="!contenteditable"
          size="small"
          :icon="EditPen"
          circle
          @click="onEdit"
        />
        <ElButton
          size="small"
          :icon="Delete"
          circle
          @click="emit('delete')"
        />
      </div>
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
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.footer {
  margin-top: 14px;
}
</style>
