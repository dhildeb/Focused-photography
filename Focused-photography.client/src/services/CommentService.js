import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class CommentService {
  async getCommentsByLesson(lesson) {
    try {
      const res = await api.get('api/comment/' + lesson)
      console.log(res.data)
      AppState.comments = res.data
    } catch (error) {
      logger.log(error.message)
    }
  }

  async createPicComment(commentData, pictureId) {
    try {
      const res = await api.post('api/comment/' + pictureId, commentData)
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
      logger.log(error.message)
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

export const commentService = new CommentService()
