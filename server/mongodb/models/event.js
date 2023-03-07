import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    eventType: {type: String, required: true}, 
    location: {type: String, required: true}, 
    price: {type: Number, required: true},
    photo: {type: String, required: true},
    creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
})

const eventModel = mongoose.model('Event', EventSchema);

export default eventModel;