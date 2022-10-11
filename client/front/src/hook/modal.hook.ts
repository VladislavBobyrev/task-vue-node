import { ref, computed } from 'vue'

const isOpen = ref(false)

export const isModalOpen = computed(() => isOpen.value)
export const toggleModal = () => isOpen.value = !isOpen.value
export const closeModal = () => isOpen.value = false
export const openModal = () => isOpen.value = true