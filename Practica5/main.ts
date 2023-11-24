import mongoose from "mongoose";
import express from "express";

try{
  const MONGO_URL = Deno.env.get("MONGO_URL")

  if(!MONGO_URL) {
    console.log("MONGO_URL is requiered")
    Deno.exit(1)
  }

  await mongoose.connect(MONGO_URL)
  const app = express()
  app.use(express.json())
  
  app
  .get("/client/id",)
  .get("/restaurant/id",)
  .delete("/restaurant/id",)
  .delete("restaurant",)
  .post("/client",) 
  .post("/restaurant",) 
  .post("/booking",) 
  .get("/ booking/id",)
  .delete("/booking/id",)


  app.listen(3000, () => {
    console.log("Server is listening on port 3000")
  })

}catch(e){
  console.log(e);
}