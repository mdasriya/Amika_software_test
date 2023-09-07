
 const express = require("express")
const { ClientModel } = require("../model/client.model")
const { auth } = require("../middleware/auth.middleware")

 const ClientRoutes = express()
  ClientRoutes.use(auth)

 // Client create code 
 ClientRoutes.post("/create", async(req,res)=> {
    const data = req.body
  try {
    const client = new ClientModel(data)
    await client.save()
    res.status(200).json({msg:"new client added successfully!!!"})
  } catch (error) {
    res.status(400).json({msg:error.message})
  }
 })




// Client get code
 ClientRoutes.get("/", async(req,res)=> {
    let UserId = req.body.UserId
    try {
        const client = await ClientModel.find({ UserId: UserId })
        res.send(client)
    } catch (error) {
        console.log(error);
    }
 })



 // Client update code
ClientRoutes.patch("/update/:clientId", async (req, res) => {
    const userIdinUserDoc = req.body.UserId
    const { clientId } = req.params

    try {
        const client = await ClientModel.findOne({ _id: clientId })
        const userIDinClientDoc = client.UserId

        if (userIdinUserDoc === userIDinClientDoc) {
            console.log("user id in user Doc",userIdinUserDoc ,"user id in client doc", userIDinClientDoc);
           await ClientModel.findByIdAndUpdate({_id:clientId}, req.body)
           res.json({msg:`${client.name} has been updated`})
        } else {
            res.json({ msg: "you are not Authorized" })
        }
    } catch (error) {
        console.log(error);
    }

})

 // Client delete code
 ClientRoutes.delete("/delete/:clientId", async(req,res)=> {
    const userIdinUserDoc = req.body.UserId
    const { clientId } = req.params
   console.log(clientId);
    try {
        const client = await ClientModel.findOne({ _id: clientId })
        const userIDinClientDoc = client.UserId

        if (userIdinUserDoc === userIDinClientDoc) {
            console.log("user id in user Doc",userIdinUserDoc ,"user id in client doc", userIDinClientDoc);
           await ClientModel.findByIdAndDelete({_id:clientId}, req.body)
           res.json({msg:`${client.name} has been deleted success`})
        } else {
            res.json({ msg: "you are not Authorized" })
        }
    } catch (error) {
        console.log(error);
    }
 })

 module.exports = {
    ClientRoutes
 }
