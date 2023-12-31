const express = require("express")
const { connection } = require("./config/db")
const { UserRouter } = require("./routes/user.router")
const { ClientRoutes } = require("./routes/client.router")
const cors = require("cors")
require("dotenv").config()


const port = process.env.PORT
const app = express()
app.use(express.json())
app.use(cors())

app.use("/user", UserRouter)
app.use("/client",ClientRoutes)
app.get("/", (req,res)=>{
    res.send("welcome to my server")
})

app.listen(port, async(req,res)=> {

    try {
     await connection  
     console.log('data base is connected'); 
        console.log(`server is running at http://localhost:${port}`);
    } catch (error) {
        
    }
})

// {
//     "name":"rahul",
//     "Number": 7030,
//     "email":"rahul@gmail.com",
//     "address":"sankar nagar",
//     "company": "Amika",
//     "AadharId":234567890 
//     }