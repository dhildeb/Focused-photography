import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'
import Notification from '../utils/Notification'

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
}

export const accountService = new AccountService()
