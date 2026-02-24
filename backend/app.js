const express=require("express");
const app=express();

app.get("/api",(req,res)=>{
 res.json({message:"Backend Running"});
});

app.listen(5000);
