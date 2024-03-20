import mongoose, { Schema } from "mongoose";
const todoSchema = new mongoose.Schema({
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    task: {
        type: String,
        required: true,
        trim: true
    },
    parentTodo: {
        type: Schema.Types.ObjectId,
        ref: "Todo"
    }
},{timestamps: true})

export const Todo = mongoose.model("Todo", todoSchema)