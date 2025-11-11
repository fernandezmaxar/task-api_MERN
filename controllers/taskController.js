import Task from "../models/TaskModel.js"

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.userId })
    res.json(tasks)
  } catch (error) {
    console.error("Error al obtener tareas:", error)
    res.status(500).json({ message: "Error al obtener las tareas" })
  }
}

export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body

    if (!title) {
      return res.status(400).json({ message: "El título es obligatorio" })
    }

    const task = new Task({
      title,
      description,
      userId: req.userId,
    })

    await task.save()
    res.status(201).json(task)
  } catch (error) {
    console.error("Error al crear tarea:", error)
    res.status(500).json({ message: "Error al crear la tarea" })
  }
}

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params
    const updatedTask = await Task.findOneAndUpdate(
      { _id: id, userId: req.userId },
      req.body,
      { new: true }
    )

    if (!updatedTask) {
      return res.status(404).json({ message: "Tarea no encontrada" })
    }

    res.json(updatedTask)
  } catch (error) {
    console.error("Error al actualizar tarea:", error)
    res.status(500).json({ message: "Error al actualizar la tarea" })
  }
}

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params
    const deletedTask = await Task.findOneAndDelete({ _id: id, userId: req.userId })

    if (!deletedTask) {
      return res.status(404).json({ message: "Tarea no encontrada" })
    }

    res.json({ message: "Tarea eliminada correctamente" })
  } catch (error) {
    console.error("Error al eliminar tarea:", error)
    res.status(500).json({ message: "Error al eliminar la tarea" })
  }
}
