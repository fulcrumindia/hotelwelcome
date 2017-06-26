const mongoose = require('mongoose');

// schema
const roomSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    Description: String,
    roomTypeId:{
        type: String,
        required: true
    },
    guestId:{
        type: String,
        required: true
    },
    price: Number,
    chekin_date:{
        type: Date
    },
    checkout_date:{
        type: Date
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});

// Getter
roomSchema.path('price').get(function(num) {
  return (num / 100).toFixed(2);
});

// Setter
roomSchema.path('price').set(function(num) {
  return num * 100;
});

const Room = module.exports = mongoose.model('Room', roomSchema);

// Get Rooms
module.exports.getRooms = (callback, limit) => {
    Room.find(callback).limit(limit);
}

// Add Room
module.exports.addRoom = (room, callback) => {
    Room.create(room);
}