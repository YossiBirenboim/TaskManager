import { Router } from "express";
import Task from '../models/taskModel.js'

const router = Router()

// router.get('/', async (req, res) => {
//     const allTasks = await Task.find()
//     res.status(200).send(allTasks)
// })

router.get('/', async (req, res) => {
  const tasks = await Task.find().sort({ createdAt: -1 }) // 🔽 newest first
  res.json(tasks)
})
router.get('/x', async (req, res) => {
 
  res.send('<h1>welcome</h1>')
})


router.post('/', async(req, res) =>{
    const content = req.body
    const newTask = await Task.create(content)
    res.status(201).send(newTask)
})
router.put('/:id', async (req, res) => {
  const { task, completed } = req.body
  const updatedTask = await Task.findByIdAndUpdate(
    req.params.id,
    { task, completed },
    { new: true }
  )
  res.json(updatedTask)
})
router.delete('/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id)
    res.json({ message: 'Task deleted' })
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete task' })
  }
})

export default router