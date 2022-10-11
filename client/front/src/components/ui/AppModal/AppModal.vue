<template>
  <div class="modal-backdrop" @click="toggleModal" @keydown="Escape"></div>
    <div class="modal">
      <h3 v-if="title">{{title}}</h3>
      <slot/>
    </div>
  </template>

<script lang="ts" setup>
import './_app-modal.scss'
import { defineProps } from 'vue'
import { toggleModal } from '@/hook/modal.hook'

defineProps<{title:string}>()
</script>