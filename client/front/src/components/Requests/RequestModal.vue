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
import { useStore } from 'vuex'
import { closeModal } from '@/hook/modal.hook'
import {
  count, amount, name, isEdit, id,
} from './hook/modal.hook'
import { playVision } from '../../hook/sound.hook'

const store = useStore()

const onSubmit = () =>
{
  playVision()
  const newTask = {
    name: name.value,
    amount: amount.value,
    count: count.value,
  }
  if (isEdit.value)
  {
    store.dispatch('lists/asyncCreateList', newTask)
  }
  else
  {
    console.log('upd')
    newTask.id = id.value
    store.dispatch('lists/asyncUpdateListId', newTask)
    name.value = ''
    amount.value = ''
    count.value = ''
  }
  closeModal()
}
</script>