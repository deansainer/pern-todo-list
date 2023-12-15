const express = require('express')
const app = express()
const cors = require('cors')
const TodoRouter = require('./routes/TodoRouter')


//middleware
app.use(cors());
app.use(express.json())
app.use('/api', TodoRouter)

app.get('/', (req, res) => {
    res.send('Home page')
})


app.listen(3000, () => console.log('server is running on port 3000'))