import express from 'express'
const router = express.Router()


const listTask = [
  {
  count: 1,
  date: new Date(),
  name: 'Колбаса',
  price: 115,
  },
  {
  count: 1,
  date: new Date(),
  name: 'Молоко',
  price: 54,
  }
]

router.get('/change-task/', (req, res) =>
{
  res.send(listTask)
})

export default router