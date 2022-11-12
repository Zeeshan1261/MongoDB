const carsRouter = require("express").Router();
const { response } = require("express");
let Cars = require("../model/cars");

// carsRouter.get("/get", async (request, response) => {
//   response.send("hello");
// });
carsRouter.get("/get",async (request,response)=> {
  const cars = await Cars.find({})
  response.send(cars)
})
carsRouter.post("/add",async (request,response)=> {
  const newCar = new Cars(request.body)
  const cars = await newCar.save()
  response.send(cars)
})
carsRouter.put("/update/:id",async(request,response)=> {
const id = request.params.id
const {name,model} = request.body 
const car = await Cars.findByIdAndUpdate(id,{name,model})
response.send(car)
})
carsRouter.delete("/delete/:id",async(request,response)=> {
  const id = request.params.id
  const car = await Cars.findByIdAndRemove(id)
  response.send(car)
  })

module.exports = carsRouter;