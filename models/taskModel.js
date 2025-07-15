import mongoose from "mongoose";

const taskModel = new mongoose.Schema({
   task: {type: String, trim: true} ,
  completed: { type: Boolean, default: false }
},{timestamps: true})

export default mongoose.model('Task', taskModel)