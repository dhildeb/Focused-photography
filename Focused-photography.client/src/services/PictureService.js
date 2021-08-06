import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class PictureService {
  async getAll(query) {
    try {
      const res = await api.get('/api/pics', query)
      AppState.pictures = res.data
    } catch (error) {
      logger.log(error.message)
    }
  }

  async getOne(picId) {
    try {
      const res = await api.get('/api/pics/' + picId)
      AppState.activePic = res.data
    } catch (error) {
      logger.log(error.message)
    }
  }

  async getUserPics(id) {
    try {
      const res = await api.get('/api/pics/' + id)
      AppState.pictures = res.data
    } catch (error) {
      logger.log(error.message)
    }
  }

  async getPicComments(picId) {
    try {
      const res = await api.get('/api/pics/' + picId + '/comments')
      AppState.comments = res.datas
    } catch (error) {
      logger.log(error.message)
    }
  }

  async createPic(picData) {
    try {
      const res = await api.post('api/pics', picData)
      AppState.pictures = [...AppState.pictures, res.data]
    } catch (error) {
      logger.log(error.message)
    }
  }

  async editPic(picId, picData) {
    try {
      const res = await api.put('api/pics/' + picId, picData)
      AppState.activePic = res.data
    } catch (error) {
      logger.log(error.message)
    }
  }

  async deletePic(id) {
    try {
      await api.delete('api/pics/' + id)
      AppState.pictures = AppState.pictures.filter(p => p.id !== id)
    } catch (error) {
      logger.log(error.message)
    }
  }
}

export const pictureservice = new PictureService()
