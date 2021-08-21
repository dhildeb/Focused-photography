import { Auth0Provider } from '@bcwdev/auth0provider'
import { commentService } from '../services/CommentService'
import BaseController from '../utils/BaseController'

export class CommentController extends BaseController {
  constructor() {
    super('api/comment')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:lesson', this.getCommentsByLesson)
      .post('/:lesson', this.createComment)
      .post('/:lesson', this.createPicComment)
      .delete('/:commentId', this.deleteComment)
  }

  async getCommentsByLesson(req, res, next) {
    try {
      const comments = await commentService.getCommentsByLesson(req.params.lesson)
      res.send(comments)
    } catch (error) {
      next(error)
    }
  }

  async createComment(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const comment = await commentService.createComment(req.body)
      res.send(comment)
    } catch (error) {
      next(error)
    }
  }

  async createPicComment(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const comment = await commentService.createPicComment(req.body, req.params.pictureId)
      res.send(comment)
    } catch (error) {
      next(error)
    }
  }

  async deleteComment(req, res, next) {
    try {
      const comment = await commentService.deleteComment(req.params.commentId, req.userId.id)
      res.send(comment)
    } catch (error) {
      next(error)
    }
  }
}
