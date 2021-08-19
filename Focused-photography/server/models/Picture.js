import mongoose from 'mongoose'
const Schema = mongoose.Schema
export const PictureSchema = new Schema(
  {
    picture: { type: String, required: true },
    creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
    lesson: { type: Number, required: true },
    title: { type: String },
    description: { type: String }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

PictureSchema.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})
