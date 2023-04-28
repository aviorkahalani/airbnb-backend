import { Router } from 'express'
import { getStays, getStay } from './stay.controller.js'
const router = Router()

router.get('/', getStays)
router.get('/:stayId', getStay)

export default router
