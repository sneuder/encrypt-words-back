import { Router } from 'express'
import { encryptController, decryptController } from '../controllers'
import bodyValidator from '../middlewares/bodyValidator'

function routes(router: Router) {
  router.post('/encrypt', bodyValidator, encryptController)
  router.post('/decrypt', decryptController)
}

export default routes
