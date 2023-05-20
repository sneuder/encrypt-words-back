import { Response, Request, NextFunction } from 'express'
import decrypt from '../services/decrypt'

function keywordsValidator(req: Request, _res: Response, next: NextFunction) {
  const { keywords } = req.body
  const [_textASCII, textASCIIkeywords, _positionASCII] =
    decrypt.separateComponets(keywords)

  if (decrypt.validateKeywords(keywords, textASCIIkeywords)) next()
}

export default keywordsValidator
