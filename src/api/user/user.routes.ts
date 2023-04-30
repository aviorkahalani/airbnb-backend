import { Router } from 'express'
import expressOpenidConnect from 'express-openid-connect'
const { requiresAuth } = expressOpenidConnect
import { getUser } from './user.controller.js'
const router = Router()

router.get('/', requiresAuth(), getUser)

export default router
