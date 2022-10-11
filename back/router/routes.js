import express from 'express'
import { createTask, updateTask, updateTaskId, deleteTaskId } from '../services/api.services.js'
import { listTask } from '../bd.js'

const router = express.Router()

// init task
router.get('/change-task/', (req, res) =>
{
  res.send(listTask)
})
// create  task
router.post('/create-task/', (req, res) =>
{
  req.body.id =  Math.random() * 10000
  req.body.date = new Date()
  req.body.price = req.body.amount
  delete req.body.amount

  res.send(createTask(listTask, req.body))
})

//================  update ===================
router.get('/update-task/', (req, res) =>
{
  console.log('update')
  updateTask(listTask,req)
  res.send(listTask)
})

//================  update id===================
router.get('/update-id-task/', (req, res) =>
{
  updateTaskId(listTask, req)
  res.send(listTask)
})

//================  delete id===================
router.get('/delete-id-task/', async (req, res) =>
{ 
  res.send(deleteTaskId(listTask, req.query.id))
})

export default router