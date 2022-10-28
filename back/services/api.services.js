// create task 
export const createTask = (arr, task) =>
{
  arr.push(task)
  return arr
}
// update task 
export const updateTask =  (arr, tasks) =>  arr = tasks

// update task id
export const updateTaskId =  (arr, task) =>
{
  return JSON.stringify(arr.map(item =>
  {
    if(item.id == task.body.id) {
      item = task.body
      item.date = new Date()
    }
    return item
  }))
}

// delete task id
export const deleteTaskId =  (arr, id) =>
{
  const index = arr.findIndex(item => item.id == id)
  arr.splice(index, 1);
  return arr
}