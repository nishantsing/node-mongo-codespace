import express from "express";

const app = express();

app.get('/',(req,res)=>{
    res.json("Hello").status(200);
})

const onListening = ()=>{
    console.log("Listening on PORT 5000");
}

app.listen(5000, onListening)

export default app;