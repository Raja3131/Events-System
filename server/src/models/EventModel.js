import mongoose from 'mongoose'

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
  
})

const EventSchema = mongoose.model('EventSchema', eventSchema)

export default EventSchema