const express = require("express")
const cors = require("cors")
const apirouter = require("./routes/api")


const port = 3000


const app = express()
app.use(cors())
app.use(express.json())

app.use('/api', apirouter)
 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})