<template>
  <header>
    <div class="manage">
      <button class="burger icon" @click="toggleNav">
        <svg class="" width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor" fill-rule="evenodd" d="M4.5 5h15a.5.5 0 1 1 0 1h-15a.5.5 0 0 1 0-1zm0 6h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1zm0 6h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1z"></path>
        </svg>
      </button>
      <!-- <input class="search" type="text" name="search" placeholder="Ананас"/> -->
      <label for="search"></label>
    </div>
  </header>
</template>


<script lang="ts" setup>
import { toggleAside } from '../../hook/aside.hook'

const toggleNav = () => toggleAside()
</script>