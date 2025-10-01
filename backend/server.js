import { configDotenv } from 'dotenv'
import express from 'express'
import cors from 'cors'
import webhookRoutes from './routes/webhooks.js'
import bodyParser from 'body-parser'


configDotenv()
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())
const PORT = 8080 || process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/webhooks',  webhookRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})