import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'
import Notification from '../utils/Notification'
import { router } from '../router'

class AccountService {
  async getAccount() {
    try {
      const res = await api.get('/account')
      AppState.account = res.data
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

  async buyNextLesson(id) {
    try {
      const res = await api.put(`/account/${id}/lesson/1`)
      AppState.account = res.data
      Notification.toast('Purchase Successful', 'success')
    } catch (error) {
      logger.log(error.message)
    }
  }

  async checkLessonsAccess(lesson) {
    try {
      const res = await api.get('/account')
      if (res.data.lessons < lesson) {
        Notification.toast('You dont have access to that lesson, Please Purchase a plan.')
        return true
      }
      return false
    } catch (error) {
      Notification.toast('You dont have access to that lesson, Please Purchase a plan.')
      return true
    }
  }

  register(info) {
    AppState.registerInfo = info
    console.log(info)
    router.push('enroll')
  }
}
export const accountService = new AccountService()
