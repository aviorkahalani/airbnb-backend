import mongodb, { MongoClient } from 'mongodb'
import { config } from 'dotenv'
config()

const dbURLProd = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.dhseqoj.mongodb.net/?retryWrites=true&w=majority`

export const dbService = {
  getCollection,
}

// Database Name
const DB_NAME = 'airbnb_db'
let dbConn: mongodb.Db | null = null

async function getCollection(collectionName: string) {
  try {
    const db: mongodb.Db = await connect()
    const collection: mongodb.Collection = db.collection(collectionName)
    return collection
  } catch (err) {
    throw err
  }
}

async function connect() {
  if (dbConn) return dbConn
  try {
    const client = await MongoClient.connect(dbURLProd)
    const db = client.db(DB_NAME)
    dbConn = db
    return db
  } catch (err) {
    throw err
  }
}
