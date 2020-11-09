const express = require('express')
require('./db/mongoose') //Just call it to make sure it runs the script, as it esablishes the connection with the mongodb
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT /* Port assigned in heroku */

app.use(express.json()) //automatically parse incomming json to javascript objects
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () =>{
    console.log('Server is up on port ', port)
})