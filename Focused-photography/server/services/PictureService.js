import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'
class PictureSercive {
  async getAll(query = {}) {
    const pics = await dbContext.Picture.find(query)
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
    return await dbContext.Picture.create(picData)
  }

  async editPic(picData, id) {
    const pic = await dbContext.Picture.findByIdAndUpdate(id, picData, { new: true, runValidators: true })
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
