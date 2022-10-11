<template>
  <form @submit.prevent="onSubmit" class="form-task">
    <div class="form-control">
      <label for="">Название</label>
      <input type="text" id="name" v-model="name">
    </div>

    <div class="form-control">
      <label for="">Ценна</label>
      <input type="text" id="amount" v-model="amount">
    </div>

    <div class="form-control">
      <label for="">Количество</label>
      <input type="tet" id="count" v-model="count">
    </div>
    <button class="btn primary" :disabled="false">Создать</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex'
import { closeModal } from '@/hook/modal.hook'

const store = useStore()
const count = ref(1)
const amount = ref(0)
const name = ref('')

const onSubmit = () =>
{
  const newTask = {
    name: name.value,
    amount: amount.value,
    count: count.value,
  }
  store.dispatch('lists/asyncCreateList', newTask)
  closeModal()
}
</script>