const express=require("express")
const Guitar = require("../model/guitar")
const router=express.Router()

router.post("/addguitar", async (req, res) => {
    const { Type, Color, Material,Brand,Price } = req.body
    const obj = {
      Type: Type,
      Color: Color,
      Material: Material,
      Brand: Brand,
      Price: Price,
      guitarId: uuidv4()
    }
  
    await Guitar.create(obj)
  
    res.redirect('/getguitar')
  })
  
  
  
  router.get("/getguitar", async (req, res) => {
    let guitar = await Guitar.find()
    res.render("guitarpage", {
      guitar: guitar
    })
  })
  
  router.get("/delete/:guitarId", async (req, res) => {
    let guitarId = req.params.guitarId
    await Guitar.deleteOne({ guitarId })
    res.redirect("/getdetails")
  })
  router.post("/updateguitar",async (req, res) => {
    const { Type, Color, Material, Brand, Price, guitarId } = req.body
    const newObj = {
      Type,
      Color,
      Material,
      Brand,
      Price,
      guitarId
    }
  
    await Guitar.updateOne({guitarId},newObj)
    res.redirect("/getguitar")
  })

  module.exports=router