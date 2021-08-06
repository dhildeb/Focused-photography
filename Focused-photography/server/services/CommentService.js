import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class CommentService {
  async getPicComments(id) {
    const comments = await dbContext.Comment.find({ pictureId: id })
    return comments
  }

  async createComment(commentData, pictureId) {
    const newComment = { commentData, pictureId }
    const comment = await dbContext.Comment.create(newComment)
    return comment
  }

  async editComment(commentData, commentId) {
    const comment = await dbContext.Comment.findByIdAndUpdate({ creatorId: commentData.creatorId }, commentData, commentId)
    return comment
  }

  async deleteComment(commentId, id) {
    const comment = await dbContext.Comment.findByIdAndRemove({ _id: id }, commentId)
    if (!comment) {
      throw new BadRequest('Invalid ID')
    }
    return comment
  }
}

export const commentService = new CommentService()
