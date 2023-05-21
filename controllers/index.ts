import { Request, Response } from 'express'
import encrypt from '../services/encrypt'
import decrypt from '../services/decrypt'

export function encryptController(req: Request, res: Response) {
  const { words, keywords } = req.body
  res.json(encrypt.process(words, keywords))
}

export function decryptController(req: Request, res: Response) {
  const { encrypted, keywords } = req.body
  res.json(decrypt.process(encrypted, keywords))
}
