import mongoose from 'mongoose'

const eventSchema = new mongoose.Schema({
    venue: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
        minlength: 5,
        maxLength: 50,
      },
      startdate: {
        type: Date,
        required: true,
      },
      enddate: {
        type: Date,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      district: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      sponsor: {
        type: String,
        required: true,
      },
      organizer: {
        type: String,
        required: true,
      }
})

const EventSchema = mongoose.model('EventSchema', eventSchema)

export default EventSchema