import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'
import { accountService } from './AccountService'
class PictureSercive {
  async getPicsByLesson(lessonNum) {
    const pics = await dbContext.Picture.find({ lesson: lessonNum }).populate('creator')
    return pics
  }

  async getAll(query = {}) {
    const pics = await dbContext.Picture.find(query).populate('creator')
    return pics
  }

  async getOne(id) {
    const pic = await dbContext.Picture.findById(id)
    return pic
  }

  async getUserPics(id) {
    const pics = await dbContext.Picture.find({ creatorId: id })
    // await pics.populate('creator')
    return pics
  }

  async createPic(picData) {
    const user = { id: picData.creatorId }
    const creator = await accountService.getAccount(user)
    if (creator.lessons < picData.lesson) {
      throw new BadRequest('You don\'t have access to that lesson')
    }
    const pic = await dbContext.Picture.create(picData)
    return pic
  }

  async editPic(picData, id) {
    delete picData.picture
    delete picData.creatorId
    const pic = await dbContext.Picture.findByIdAndUpdate(id, picData, { new: true, runValidators: true })
    if (!pic) {
      throw new BadRequest('invalid ID')
    }
    // await pic.populate('creator')
    return pic
  }

  async deletePic(pictureId, userId) {
    const pic = await dbContext.Picture.findByIdAndRemove({ creatorId: userId, _id: pictureId })
    if (!pic) {
      throw new BadRequest('invalid ID')
    }
    return pic
  }
}

export const pictureService = new PictureSercive()
