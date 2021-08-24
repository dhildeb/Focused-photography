import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'
import { accountService } from './AccountService'
import { pictureService } from './PictureService'

class CommentService {
  async getCommentsByLesson(lesson) {
    const comments = await dbContext.Comment.find({ lesson: lesson }).populate('creator')
    return comments
  }

  async getPicComments(id) {
    const comments = await dbContext.Comment.find({ pictureId: id })
    return comments
  }

  async createComment(commentData) {
    const comment = await dbContext.Comment.create(commentData)
    return comment
  }

  async createPicComment(commentData, pictureId) {
    const picture = await pictureService.getOne(pictureId)
    const creator = await accountService.getAccount(commentData.creatorId)
    if (picture.creatorId !== commentData.creatorId && !creator.admin) {
      throw new BadRequest('You do not have permission to make a comment')
    }
    const comment = await dbContext.Comment.create({ body: commentData, pictureId: pictureId })
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
