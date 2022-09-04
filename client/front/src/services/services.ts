import { getData } from '@/api/api'

/**
 * Создаине новой задачи
 */
const createTask = (arr:any, dataTask:any) =>
{
  arr.push(dataTask)
}

/**
 * Удаление задачи
 */
const deletTask = () => { }

/**
 * Обновление задачи
 */
const updateTask = () => { }

export default {
  createTask, deletTask, updateTask,
}