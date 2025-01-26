<script setup lang="ts">
import ModalTitle from '@/components/ModalTitle.vue'
import { ref } from 'vue'
import { useStore } from '@/store.ts'

defineOptions({
  inheritAttrs: false
})

const store = useStore()

const modalVisible = ref(false)

function onCreateBoard(title: string) {
  store.createBoard(title)
  modalVisible.value = false
}
</script>

<template>
  <div
    class="board-creator"
    v-bind="$attrs"
    @click="modalVisible = true"
  >
    Добавить доску
  </div>

  <ModalTitle
    :visible="modalVisible"
    @close="modalVisible = false"
    @create="onCreateBoard"
  />
</template>

<style scoped lang="scss">
.board-creator {
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  cursor: pointer;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.20);
}
</style>
