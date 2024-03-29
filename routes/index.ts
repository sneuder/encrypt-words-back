import { Router } from 'express'
import { encryptController, decryptController } from '../controllers'
import bodyValidator from '../middlewares/bodyValidator'
import keywordsValidator from '../middlewares/keywordsValidator'

function routes(router: Router) {
  router.post('/encrypt', bodyValidator('encrypt'), encryptController)
  router.post(
    '/decrypt',
    bodyValidator('decrypt'),
    keywordsValidator,
    decryptController
  )
}

export default routes
