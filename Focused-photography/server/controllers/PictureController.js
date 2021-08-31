import { Auth0Provider } from '@bcwdev/auth0provider'
import { commentService } from '../services/CommentService'
import { pictureService } from '../services/PictureService'
import BaseController from '../utils/BaseController'

export class PictureController extends BaseController {
  constructor() {
    super('api/pics')
    this.router
      .get('', this.getAll)
      .get('/:accountId', this.getUserPics)
      .get('/:pictureId', this.getOne)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/lesson', this.getPicsByLesson)
      .get('/:pictureId/comments', this.getPicComments)
      .post('', this.createPic)
      .put('/:pictureId', this.editPic)
      .delete('/:pictureId', this.deletePic)
  }

  async getPicsByLesson(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const pics = await pictureService.getPicsByLesson(req.body)
      res.send(pics)
    } catch (error) {
      next(error)
    }
  }

  async getAll(req, res, next) {
    try {
      const pics = await pictureService.getAll(req.body)
      res.send(pics)
    } catch (error) {
      next(error)
    }
  }

  async getOne(req, res, next) {
    try {
      const pic = await pictureService.getOne(req.params.pictureId)
      res.send(pic)
    } catch (error) {
      next(error)
    }
  }

  async getUserPics(req, res, next) {
    try {
      const pics = await pictureService.getUserPics(req.params.accountId)
      res.send(pics)
    } catch (error) {
      next(error)
    }
  }

  async getPicComments(req, res, next) {
    try {
      const comments = await commentService.getPicComments(req.params.pictureId)
      res.send(comments)
    } catch (error) {
      next(error)
    }
  }

  async createPic(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const pic = await pictureService.createPic(req.body)
      res.send(pic)
    } catch (error) {
      next(error)
    }
  }

  async editPic(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const pic = await pictureService.editPic(req.body, req.params.pictureId)
      res.send(pic)
    } catch (error) {
      next(error)
    }
  }

  async deletePic(req, res, next) {
    try {
      const pic = await pictureService.deletePic(req.params.pictureId, req.userInfo.id)
      res.send(pic)
    } catch (error) {
      next(error)
    }
  }
}
