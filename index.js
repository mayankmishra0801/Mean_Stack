/*const express = require('express'); //require express module
const app = express();   //create new express application object


app.get('/home',(req,res) => {  //respond with "Welcome to Home Page" when a GET request is made to the homepage
    res.send("Welcome to Home Page");
})

app.get('/about',(req,res) => {//respond with "Welcome to About Page" when a GET request is made to the homepage
    res.send("Welcome to About Page");
})

app.get('/contact',(req,res) => {//respond with "Welcome to Contact Page" when a GET request is made to the homepage
    res.send("Welcome to Contact Page");
})



app.listen(200,(req,res) => {  //tells the express application to listen to port 3000
    console.log('Server Started');
}) 





*/






const express = require('express');
const app = express();

const path = require('path');//default library for path specification
const router = express.Router();// router library being called

app.get('/',(req,res) => {//root
    res.sendFile(path.join(__dirname+'/views/home.html'));//render
})

app.get('/about',(req,res) => {
    res.sendFile(path.join(__dirname+'/views/about.html')); //render
    
})

app.get('/contact',(req,res) => {

    res.sendFile(path.join(__dirname+'/views/contact.html')); //render
    
    
})









app.listen(200,(req,res)=>{
    console.log('Server Started');
})
