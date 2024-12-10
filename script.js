const express = require("express");
//import necessary modules that we need to implement express JS

const app = express();
// This sets up the express application

// Get request
app.get("/", (req, res)=>{
    console.log("Home page is called")
    res.send("Hello World");
})

//middleware
app.use((req, res, next)=>{
    // verify if the user is logged in 
    console.log("Middleware function is running");
    next();
})






app.get("/about", (req, res)=>{
    res.send("About Page");
})

app.get("/contact", (req, res)=>{
    res.send("Welcome to the contact page");
})


// PORT Listeners
app.listen(3000, 
    // Handler function
    ()=>{
    console.log("Server is running on port 3000")
})