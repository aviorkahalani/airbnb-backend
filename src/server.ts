import express, { Express, Request, Response, json } from 'express'
import { createServer } from 'http'
import stayRoutes from './api/stay/stay.routes.js'

const app: Express = express()
const PORT = 3030

createServer(app)

app.use(json())
app.use('/api/stay', stayRoutes)

app.get('/', (req: Request, res: Response) => {
  res.json('Hello world')
})

app.listen(PORT, () => {
  console.log(`[🔥SERVER]: App listening on http://localhost:${PORT}`)
})
