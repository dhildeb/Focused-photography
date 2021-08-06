import { storage } from '../env'
import { logger } from '../utils/Logger'
class FireBaseLogic {
  async upload(imgName, data) {
    // NOTE creates a collection in firebase storage with the pathing images => imagename.png
    const collection = storage.ref('Images/' + imgName + '.png')

    // Take that pathing and put the data we have there
    const snapshot = await collection.put(data)

    // snapshot is that data so now we will take that data and get a downloadable url from it, this is a method from firebase
    const url = await snapshot.ref.getDownloadURL()

    // snapshot will have additional info about the image, where it came from, it's name we assigned it, etc. If you want this data return that as well
    logger.log(url, snapshot)
    return { url }
  }
}

export const fireBaseLogic = new FireBaseLogic()
