import mongoose, { Schema } from "mongoose";
const memberSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    todo: {
        type: Schema.Types.ObjectId,
        ref: "Todo"
    }
})

export const Member = mongoose.model("Member", memberSchema)