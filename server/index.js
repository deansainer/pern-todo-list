const express = require('express')
const app = express()
const cors = require('cors')
const TodoRouter = require('./routes/TodoRouter')


//middleware
app.use(cors());
app.use(express.json())
app.use('/api', TodoRouter)


app.listen(3001, () => console.log('server is running on port 3001'))