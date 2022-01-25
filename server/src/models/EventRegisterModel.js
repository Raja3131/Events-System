import mongoose from 'mongoose'

const eventRegister = new mongoose.Schema({
      description: {
        type: String,
        required: true,
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
      sponsor: {
        type: String,
        required: true,
      },
      organizer: {
        type: String,
        required: true,
      }
})

const EventRegister = mongoose.model('EventRegister', eventRegister)

export default EventRegister