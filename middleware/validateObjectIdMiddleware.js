import mongoose from "mongoose"

const validateObjectIdMiddleware = (req, res, next) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "ID inválido" })
  }
  next()
}

export default validateObjectIdMiddleware
