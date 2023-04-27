import { dbService } from '../../services/dbService.js'

export const stayService = {
  query,
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
