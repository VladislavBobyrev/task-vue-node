import { ref, computed } from 'vue'

const isOpen = ref(false)

export const isAsideOpen = computed(() => isOpen.value)
export const toggleAside = () => isOpen.value = !isOpen.value
export const openAside = () => isOpen.value = true
export const closeAside = () => isOpen.value = false