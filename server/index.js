const express=require("express")
const app=express();



app.get("/home",(req,res)=>{
    console.log("hai this home page");
    
})

app.listen(8000,()=>{
    console.log("Server running");
    
})