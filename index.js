import mongoose from "mongoose";
import app from './app.js';

(async ()=>{
    try{
       await mongoose.connect("mongodb://localhost:27017/gitcodespacetest");
       console.log("DB CONNECTED");

    }catch(error){
        console.error("error: ", error);
        throw error;
    }
})()