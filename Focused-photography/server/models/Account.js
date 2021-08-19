import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const AccountSchema = new Schema(
  {
    subs: [{ type: String, unique: true }],
    email: { type: String, lowercase: true, unique: true },
    name: { type: String, required: true },
    picture: { type: String },
    lessons: { type: Number, default: 0 },
    admin: { type: Boolean, default: false }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
