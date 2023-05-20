import Joi from 'joi'
import { Response, Request, NextFunction } from 'express'
import msg from '../services/msg'

const schema = Joi.object({
  words: Joi.string().required(),
  keywords: Joi.string().required(),
})

function bodyValidator(req: Request, res: Response, next: NextFunction) {
  const validatation = schema.validate(req.body)
  if (!validatation.error) return next()
  res.status(400).json(msg.send(false, validatation.error.details[0].message))
}

export default bodyValidator
