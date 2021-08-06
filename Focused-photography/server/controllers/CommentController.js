import { Auth0Provider } from '@bcwdev/auth0provider'
import { commentService } from '../services/CommentService'
import BaseController from '../utils/BaseController'

export class CommentController extends BaseController {
  constructor() {
    super('api/comments')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('/:pictureId', this.createComment)
      .put('/:commentId', this.editComment)
      .delete('/:commentId', this.deleteComment)
  }

  async createComment(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const comment = await commentService.createComment(req.body, req.params.pictureId)
      res.send(comment)
    } catch (error) {
      next(error)
    }
  }

  async editComment(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const comment = await commentService.editComment(req.body, req.params.commentId)
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
