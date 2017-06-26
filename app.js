const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 8080;

// body parse middleware
app.use(bodyParser.json());

RoomType = require('./model/RoomType');
Room = require('./model/Room');
Guest = require('./model/Guest');

// connect to mongoose
mongoose.connect('mongodb://localhost/welcomehotel');
const db = mongoose.connection;

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('/api/getRoomType',(req,res)=>{
    RoomType.getRoomTypes((err, roomTypes) =>{
        if(err){
            throw err;
        }
        res.json(roomTypes);
    });
});

app.post('/api/addRoomType',(req,res)=>{
    var roomType = req.body;
    RoomType.addRoomType(roomType,(err, roomTypes) =>{
        if(err){
            throw err;
        }
        res.json(roomTypes);
    });
    //res.json(roomType);
});


app.get('/api/getRoom',(req,res)=>{
    Room.getRooms((err, room) =>{
        if(err){
            throw err;
        }
        res.json(room);
    });
});

app.get('/api/getGuest',(req,res)=>{
    Guest.getGuests((err, guest) =>{
        if(err){
            throw err;
        }
        res.json(guest);
    });
});

app.listen(port);
console.log(`Server running on port :${port}`);