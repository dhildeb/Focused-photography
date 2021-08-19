import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'
import { accountService } from './AccountService'
import { pictureService } from './PictureService'

class CommentService {
  async getCommentsByLesson(lesson) {
    const comments = await dbContext.Comment.find({ lesson: lesson })
    return comments
  }

  async getPicComments(id) {
    const comments = await dbContext.Comment.find({ pictureId: id })
    return comments
  }

  async createComment(commentData, pictureId) {
    const picture = await pictureService.getOne(pictureId)
    const creator = await accountService.getAccount(commentData.creatorId)
    if (picture.creatorId !== commentData.creatorId && !creator.admin) {
      throw new BadRequest('You do not have permission to make a comment')
    }
    const newComment = { commentData, pictureId }
    const comment = await dbContext.Comment.create(newComment)
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
