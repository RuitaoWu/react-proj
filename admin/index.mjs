import express from "express"

const app = express();
const port = 8000;

app.get("/",(req,res)=>{
    res.send("test message")
})

app.listen(port,()=>{
    console.log(`exmple from ${port}`)
})