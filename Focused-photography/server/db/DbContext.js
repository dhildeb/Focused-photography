import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { PictureSchema } from '../models/Picture'
import { CommentSchema } from '../models/Comment'

class DbContext {
  Account = mongoose.model('Account', AccountSchema);
  Picture = mongoose.model('Picture', PictureSchema);
  Comment = mongoose.model('Comment', CommentSchema);
}

export const dbContext = new DbContext()
