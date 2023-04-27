import { Router } from 'express'
import { getStays } from './stay.controller.js'
const router = Router()

router.get('/', getStays)

export default router
