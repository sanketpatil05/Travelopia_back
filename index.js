const express=  require("express");
const { connection } =require("./config/db");
const cors= require('cors');
const Travel = require("./models/travel");
const app = express();
const PORT=process.env.PORT; 

app.use(express.json());
app.use(cors());
app.get("/", async(req, res) => {

   const data= await Travel.find();
  res.send(data);
});

 app.post("/post", async(req, res)=>{
   const {name, email, location,no_of_travellers, budget} =req.body;
   const data={
    name,
    email, 
    location, 
    no_of_travellers, 
    budget
   }
  
   const travel = await Travel.insertMany([data]);
    
      res.send(travel);

 })

 

app.listen(PORT, async() => {
    try {
        await connection;
        console.log("connection done");
      } catch (err) {
        console.log(err);
      }
      console.log("server started on 5000");
});