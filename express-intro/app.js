/* import express from "express";*/
const express = require('express');

/* import json */
const data = require("./utils/data/data.json");

/* Created an Express Application - a server */
const app = express();

/* Configure Express Server to Handle JSON Files */
app.use(express.json());

/* Create our GET route */
app.get("/users", (req, res)=>{
    res.status(200).json(data);
}); 

/* Make Sure the Express Server is Listening on PORT 3000 */
app.listen(3000, ()=> console.log("Express now running on PORT 3000"));

