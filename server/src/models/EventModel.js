import mongoose from 'mongoose'

const eventSchema = new mongoose.Schema({
    venue: {
        type: String,
      },
      description: {
        type: String,
       
      },
      startdate: {
        type: Date,
      },
      enddate: {
        type: Date,
      },
      country: {
        type: String,
      },
      district: {
        type: String,
      },
      state: {
        type: String,
      },
      city: {
        type: String,
      },
      sponsor: {
        type: String,
      },
      organizer: {
        type: String,
      }
})

const EventSchema = mongoose.model('EventSchema', eventSchema)

export default EventSchema