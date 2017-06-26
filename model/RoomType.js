const mongoose = require('mongoose');

// schema
const roomTypeSchema = mongoose.Schema({
    roomType:{
        type: String,
        required: true
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});

const RoomType = module.exports = mongoose.model('RoomType', roomTypeSchema);

// Get RoomType
module.exports.getRoomTypes = (callback, limit) => {
    RoomType.find(callback).limit(limit);
}

// Add RoomType
module.exports.addRoomType = (roomType, callback) => {
    RoomType.create(roomType, callback);
}