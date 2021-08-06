import mongoose from 'mongoose'
const Schema = mongoose.Schema
export const CommentSchema = new Schema(
  {
    body: { type: String, required: true },
    creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
    pictureId: { type: Schema.Types.ObjectId, ref: 'Picture', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
CommentSchema.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})
