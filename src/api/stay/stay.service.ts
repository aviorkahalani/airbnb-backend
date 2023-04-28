import { ObjectId, WithId } from 'mongodb'
import { dbService } from '../../services/dbService.js'

export const stayService = {
  query,
  getStayById,
}

async function query(filterBy: Object = {}) {
  try {
    const collection = await dbService.getCollection('stay')
    const stays = await collection.find().toArray()
    return stays
  } catch (error) {
    console.error(error)
  }
}

/**
 * gets the relevant stay by its id
 * @param stayId
 * @returns stay
 */
async function getStayById(stayId: string) {
  try {
    const collection = await dbService.getCollection('stay')
    const stay = await collection.findOne({ _id: new ObjectId(stayId) })
    return stay
  } catch (error) {
    console.error(error)
  }
}
