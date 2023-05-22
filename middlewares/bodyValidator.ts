import Joi from 'joi'
import { Response, Request, NextFunction } from 'express'
import msg from '../services/msg'

const schemas = {
  encrypt: Joi.object({
    words: Joi.string().required(),
    keywords: Joi.string().required(),
  }),
  decrypt: Joi.object({
    decrypted: Joi.string().required(),
    keywords: Joi.string().required(),
  }),
}

function bodyValidator(schema: 'encrypt' | 'decrypt') {
  return (req: Request, res: Response, next: NextFunction) => {
    const validatation = schemas[schema].validate(req.body)
    if (!validatation.error) return next()
    res.status(400).json(msg.send(false, validatation.error.details[0].message))
  }
}

export default bodyValidator
