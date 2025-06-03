import express from "express";
const app = express();
app.listen(8080, ()=>{
    console.log("Server Started");
});

app.get("/",(req,res)=>{
    return res.send("Hello World");
});

app.get("/greet",(req,res)=>{
    res.send("Greetings")
});

app.get("/name",(req,res)=>{
    res.send("Sarah Amrutha")
});

app.get("/weather",(req,res)=>{
    res.send("32 degree celcius today")
});