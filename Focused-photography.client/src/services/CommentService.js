import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class CommentService {
  async createComment(commentData, pictureId) {
    try {
      const res = await api.post('api/comment/' + pictureId, commentData)
      AppState.comments.push(res.data)
    } catch (error) {
      logger.log(error.message)
    }
  }

  async editComment(commentData, id) {
    try {
      const index = AppState.comments.findIndex(c => c.id === id)
      const res = await api.put('api/comment/' + id, commentData)
      AppState.comments.splice(index, 1, res.data)
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
