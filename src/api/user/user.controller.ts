import { Request, Response } from 'express'

export const getUser = async (req: Request, res: Response) => {
  try {
    res.json(req.oidc.user)
  } catch (error) {
    res.status(500).send({ err: 'Failed to get user' })
  }
}
