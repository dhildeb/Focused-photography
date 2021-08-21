import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import BaseController from '../utils/BaseController'

export class AccountController extends BaseController {
  constructor() {
    super('account')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserAccount)
      .put('/:id', this.editUserAccount)
      .put('/:id/lesson/1', this.purchaseNextLesson)
      .put('/:id/lesson/all', this.purchaseAllLessons)
  }

  async purchaseAllLessons(req, res, next) {
    try {
      const account = await accountService.purchaseAllLessons(req.userInfo.id)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }

  async purchaseNextLesson(req, res, next) {
    try {
      const account = await accountService.purchaseNextLesson(req.userInfo.id)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }

  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }

  async editUserAccount(req, res, next) {
    try {
      const account = await accountService.updateAccount(req.userInfo.id, req.body)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }
}
