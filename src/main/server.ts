import 'module-alias/register'
import express from 'express'
import routes from './routes'
import mongoose from 'mongoose'

mongoose.connect("mongodb://mongoadmin:secret@localhost:27017/shopping-list?authSource=admin", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
})

const app = express()

app.use(express.json())
app.use('/api', routes)

app.listen(3000, () => console.log('Running at http://localhost:3000'))