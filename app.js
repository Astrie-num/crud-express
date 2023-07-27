const express = require('express')
const bodyParser = require('body-parser')


const port = 3000

const app = express()
app.use(express.json())

app.use(express.urlencoded({extended:false}))

app.use("api/usersRoutes", require("./routes/api/usersRoutes"))


app.get('/', (req,res) => {
    res.send("Hello Vinni!!")
})


app.post('/adding', (req,res) => {

})



app.listen(port, () => {
    console.log(`Server is running at https//:localhost:${port}`)
})