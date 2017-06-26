const mongoose = require('mongoose');

// schema
const guestSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    idType:{
        type: String,
        required: true
    },
    idNumber:{
        type: String,
        required: true
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});

const Guest = module.exports = mongoose.model('Guest', guestSchema);

module.exports.getGuests = (callback, limit) => {
    Guest.find(callback).limit(limit);
}