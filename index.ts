import express from 'express'
import routes from './routes'

const app = express()
const router = express.Router()

const PORT = 8080

// middleware for CORS
app.use((req, res, next): void => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    res.status(200).json({})
    return
  }
  next()
})

// middlewares
app.use(express.json())
app.use('/api', router)

// initializing routes
routes(router)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
