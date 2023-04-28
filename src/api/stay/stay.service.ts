import { ObjectId, WithId } from 'mongodb'
import { dbService } from '../../services/dbService.js'
import { FilterBy, Stay } from '../../types/index.js'

export const stayService = {
  query,
  getStayById,
}

/**
 * fetches list of stays from DB
 * @param filterBy return partial list of stays according to filter options
 * @returns Stays[]
 */
async function query(filterBy: FilterBy = {}) {
  try {
    const collection = await dbService.getCollection('stay')
    const stays = (await collection.find().toArray()) as Stay[]
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
    const stay = (await collection.findOne({ _id: new ObjectId(stayId) })) as Stay
    return stay
  } catch (error) {
    console.error(error)
  }
}
