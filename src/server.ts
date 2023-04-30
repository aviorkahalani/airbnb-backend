import express, { Express, Request, Response, json } from 'express'
import { createServer } from 'http'
import cors from 'cors'
import stayRoutes from './api/stay/stay.routes.js'

const app: Express = express()
const PORT = 3030

const corsOptions = {
  // Make sure origin contains the url your frontend is running on
  origin: [
    'http://127.0.0.1:3000',
    'http://localhost:3000',
    'http://127.0.0.1:5417',
    'http://localhost:5417',
  ],
  credentials: true,
}

createServer(app)

app.use(json())
app.use(cors(corsOptions))
app.use('/api/stay', stayRoutes)

app.get('/', (req: Request, res: Response) => {
  res.json('Welcome to airbnb backend')
})

app.listen(PORT, () => {
  console.log(`[🔥SERVER]: App listening on http://localhost:${PORT}`)
})
