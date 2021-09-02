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
    const account = await dbContext.Account.findOne({
      _id: commentData.creatorId
    })
    if (account.lessons < commentData.lesson) {
      throw new BadRequest('You dont have access to this lesson, please purchase a plan')
    }
    const comment = await dbContext.Comment.create(commentData)
    return comment
  }

  async createPicComment(commentData, pictureId) {
    // FIXME populate doesnt work nor does conditional
    const picture = await pictureService.getOne(pictureId)
    // const creator = await dbContext.Account.findOne({
    //   _id: commentData.creatorId
    // })
    if (picture.creatorId !== commentData.creatorId) {
      throw new BadRequest('You do not have access to this lesson, please purchase a plan')
    }
    const comment = await dbContext.Comment.create({ body: commentData, pictureId: pictureId })
    await comment.populate('creator')
    return comment
  }

  async deleteComment(commentId, id) {
    const comment = await dbContext.Comment.findByIdAndRemove({ _id: commentId, creatorId: id })
    if (!comment) {
      throw new BadRequest('Invalid ID')
    }
    return comment
  }
}

export const commentService = new CommentService()
