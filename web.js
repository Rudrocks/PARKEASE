const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('public'));

app.route('/')
    .get((req,res)=>{
        res.sendFile(path.join(__dirname,'public','Home.html'));
    });
app.route('/l')
    .get((req,res)=>{
        res.sendFile(path.join(__dirname,'public','Login.html'));
    });
app.route('/d')
    .get((req,res)=>{
        res.sendFile(path.join(__dirname,'public','Details.html'));
    });
app.route('/s')
    .get((req,res)=>{
        res.sendFile(path.join(__dirname,'public','Services.html'));
    });
app.route('/av')
    .get((req,res)=>{
        res.sendFile(path.join(__dirname,'public','Availability.html'));
    });
app.route('/a')
    .get((req,res)=>{
        res.sendFile(path.join(__dirname,'public','About.html'));
    });
app.route('/c')
    .get((req,res)=>{
        res.sendFile(path.join(__dirname,'public','Contact.html'));
    });
app.route('/cd')
    .get((req,res)=>{
        res.sendFile(path.join(__dirname,'public','C.html'));
    });
app.route('/m')
    .get((req,res)=>{
        res.sendFile(path.join(__dirname,'public','map.html'));
    });
app.route('/p')
    .get((req,res)=>{
        res.sendFile(path.join(__dirname,'public','pay.html'));
    });
    app.route('/su')
    .get((req,res)=>{
        res.sendFile(path.join(__dirname,'public','signup.html'));
    });
app.listen(4000,()=>{
    console.log('Server running on localhost:4000');
});