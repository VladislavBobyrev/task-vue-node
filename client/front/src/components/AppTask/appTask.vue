<template>
  <li class="task" >
    <div class="flex">
      <label class="task__label checkbox__label">
        <input class="checkbox__input" type="checkbox" @click="deleteList(task.id)">
        <div class="tack-info checkbox__mark" >
          <span class="task__text">{{task.name}}</span>
          <span class="task__date">{{task.date}}</span>
        </div>
      </label>
    </div>
    <div class="flex">
      <div class="tack-info">
        <label for="price">Цeна</label>
        <input class="price" name='price' type="text" :placeholder="task.price">
      </div>

      <div class="tack-info">
        <label for="count">Кол-во</label>
        <div>
          <!-- <button>+</button> -->
          <input type="text" name="count" :placeholder="task.count">
          <!-- <button>-</button> -->
        </div>
      </div>
    </div>
    <div class="task__edit icon" @click="editTask(task)" @keypress="del">
      <svg width="24" height="24"><g fill="none" fill-rule="evenodd"><path fill="currentColor" d="M9.5 19h10a.5.5 0 110 1h-10a.5.5 0 110-1z"></path><path stroke="currentColor" d="M4.42 16.03a1.5 1.5 0 00-.43.9l-.22 2.02a.5.5 0 00.55.55l2.02-.21a1.5 1.5 0 00.9-.44L18.7 7.4a1.5 1.5 0 000-2.12l-.7-.7a1.5 1.5 0 00-2.13 0L4.42 16.02z"></path></g></svg>
    </div>
  </li>
</template>

<script setup lang="ts" >
import { defineProps } from 'vue'
import { useStore } from 'vuex'

import { isModalOpen, openModal } from '../../hook/modal.hook'
import {
  count, amount, name, id,
  isEdit,
} from '../Requests/hook/modal.hook'
import { playTrash } from '../../hook/sound.hook'

defineProps<{task:any}>()

const store = useStore()

let idSetTimeout:number
const deleteList = (id:number) =>
{
  if (idSetTimeout)
  {
    clearTimeout(idSetTimeout)
    idSetTimeout = 0
    return
  }
  playTrash()
  idSetTimeout = setTimeout(() =>
  {
    store.dispatch('lists/asyncDeleteList', id)
  }, 3000)
}


const editTask = (task) =>
{
  isEdit.value = false
  id.value = task.id
  count.value = task.count
  amount.value = task.price
  name.value = task.name

  openModal()
}
</script>