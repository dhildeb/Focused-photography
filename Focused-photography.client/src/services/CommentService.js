import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class CommentService {
  async getCommentsByLesson(lesson) {
    try {
      const res = await api.get('api/comment/' + lesson)
      AppState.comments = res.data
    } catch (error) {
      logger.log(error.message)
    }
  }

  async createPicComment(commentData, pictureId) {
    try {
      const res = await api.post('api/comment/' + pictureId, commentData)
      console.log(res.data)
      // FIXME vv line 20 should not be needed, fix populate on backend
      res.data.creator = { picture: 'https://source.unsplash.com/random' }
      AppState.comments.push(res.data)
    } catch (error) {
      logger.log(error.message)
    }
  }

  async createComment(commentData) {
    try {
      const res = await api.post('api/comment/' + commentData.lesson, commentData)
      AppState.comments.push(res.data)
    } catch (error) {
      logger.log(error)
    }
  }

  async deleteComment(commentId) {
    try {
      await api.delete('api/comment/' + commentId)
      AppState.comments = AppState.comments.filter(c => c.id !== commentId)
    } catch (error) {
      logger.log(error)
    }
  }
}

export const commentService = new CommentService()
