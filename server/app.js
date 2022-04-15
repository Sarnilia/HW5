const express = require('express')
const cors = require('cors')
const { photosRouter } = require('./routes/photoRouter')
const { commentRouter } = require('./routes/commentRouter')


const PORT = 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/v1/photos', photosRouter)
app.use('/api/v1/photos/:id/comments', commentRouter)

app.listen(PORT, () => {
    console.log(`Started: `, PORT)
})