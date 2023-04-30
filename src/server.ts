import express, { Express, Request, Response, json } from 'express'
import expressOpenidConnect from 'express-openid-connect'
const { auth, requiresAuth } = expressOpenidConnect
import { config } from 'dotenv'

import { createServer } from 'http'
import cors from 'cors'
import stayRoutes from './api/stay/stay.routes.js'
import userRoutes from './api/user/user.routes.js'

config()

const app: Express = express()
const PORT = 3030

const authConfig = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET_TOKEN,
  baseURL: 'http://localhost:3030',
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: 'https://dev-qhe5uzjnl747o77n.eu.auth0.com',
}

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
app.use(auth(authConfig))
app.use(cors(corsOptions))

/** ROUTES */
app.use('/api/stay', stayRoutes)
app.use('/api/user', userRoutes)

app.get('/', (req: Request, res: Response) => {
  res.json(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out')
})

app.get('/profile', requiresAuth(), (req: Request, res: Response) => {
  const userInfo = req.oidc.user
  res.json(userInfo)
})

app.listen(PORT, () => {
  console.log(`[🔥SERVER]: App listening on http://localhost:${PORT}`)
})
