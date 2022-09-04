import axios from 'axios'

/**
 * Получение всех задачь из БД
 */
export const getData = async (src:string) =>
{
  const { data } = await axios.get(src)
  return data
}

// /**
//  * Обновлени в БД задач
//  */
// function updateData() { }

// /**
//  * Удаленик в БД всех задач
//  */
// function deleteData() { }

// /**
//  * Поиск задачи по ключу
//  */
// function getDataKey() { }

// /**
//  * Удаление в БД  задачи
//  */
// function deleteKeyData() { }

/**
 * Запись в БД новой задачи
 */
export function createKeyData(data: any, id: number)
{
  return false
}