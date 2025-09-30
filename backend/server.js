import { configDotenv } from 'dotenv'
import express from 'express'
import cors from 'cors'


configDotenv()
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
const PORT = 8080 || process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})