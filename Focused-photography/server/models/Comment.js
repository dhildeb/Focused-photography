import mongoose from 'mongoose'
const Schema = mongoose.Schema
export const CommentSchema = new Schema(
  {
    lesson: { type: Number, required: true },
    body: { type: String, required: true },
    creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
    pictureId: { type: Schema.Types.ObjectId, ref: 'Picture' }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
CommentSchema.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})
CommentSchema.virtual('picture', {
  localField: 'pictureId',
  ref: 'Picture',
  foreignField: '_id',
  justOne: true
})
