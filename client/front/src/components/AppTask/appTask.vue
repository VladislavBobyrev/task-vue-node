<template>
  <li class="task" >
    <div class="flex">
          <label>
            <input type="checkbox">
          </label>
        <div class="tack-info" >
          <span class="task__text">{{task.name}}</span>
          <span class="task__date">{{task.date}}</span>
        </div>
    </div>

    <div class="flex">
      <div class="tack-info">
        <input class="price" name='price' type="text" placeholder="prise">
        <label for="price">{{task.price}}</label>
      </div>

      <div class="tack-info">
        <label for="count">count</label>
        <div>
          <button>+</button>
          {{task.count}}
          <input type="text" name="count" placeholder="">
          <button>-</button>
        </div>
      </div>
    </div>

    <div class="task__edit icon">
      <svg width="24" height="24"><g fill="none" fill-rule="evenodd"><path fill="currentColor" d="M9.5 19h10a.5.5 0 110 1h-10a.5.5 0 110-1z"></path><path stroke="currentColor" d="M4.42 16.03a1.5 1.5 0 00-.43.9l-.22 2.02a.5.5 0 00.55.55l2.02-.21a1.5 1.5 0 00.9-.44L18.7 7.4a1.5 1.5 0 000-2.12l-.7-.7a1.5 1.5 0 00-2.13 0L4.42 16.02z"></path></g></svg>
    </div>
  </li>
</template>

<script lang="ts" >
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['task'],
})
</script>