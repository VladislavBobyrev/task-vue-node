import axios from 'axios'

/**
 * Получение всех задачь из БД
 */
export const getData = async (src:string) =>
{
  const { data } = await axios.get(src)
  return data
}

export const postData = async (src:string, options:any) =>
{
  const data = await fetch(src, {
    method: 'POST',
    body: JSON.stringify(options),
    headers: {
      'Content-Type': 'application/json',
    },
  })
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
// export function createKeyData(data: any, id: number)
// {
//   return false
// }