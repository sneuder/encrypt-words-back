import { Response, Request, NextFunction } from 'express'
import decrypt from '../services/decrypt'
import msg from '../services/msg'

function keywordsValidator(req: Request, res: Response, next: NextFunction) {
  const { encrypted, keywords } = req.body
  const [_textASCII, textASCIIkeywords, _positionASCII] =
    decrypt.separateEncryptText(encrypted)

  if (decrypt.getTextKeywords(keywords) === textASCIIkeywords) return next()
  res.json(msg.send(false, 'not working'))
}

export default keywordsValidator
