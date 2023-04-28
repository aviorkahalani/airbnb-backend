import { stayService } from './stay.service.js'
import { Request, Response } from 'express'

export const getStays = async (req: Request, res: Response) => {
  try {
    const filterBy = req.query
    const stays = await stayService.query(filterBy)
    res.json(stays)
  } catch (error) {
    res.status(500).send({ err: 'Failed to get stays' })
  }
}

export const getStay = async (req: Request, res: Response) => {
  try {
    const { stayId } = req.params
    const stay = await stayService.getStayById(stayId)
    res.json(stay)
  } catch (error) {
    res.status(500).send({ err: 'Failed to get stay' })
  }
}
