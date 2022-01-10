import mongoose from 'mongoose';

const promoterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      gst: {
        type: String,
        required: true,
      },
      aadhar: {
        type: String,
        required: true,
      },
      pan: {
        type: String,
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
      country2: {
        type: String,
      },
      district2: {
        type: String,
      },
      state2: {
        type: String,
      },
      city2: {
        type: String,
      }
})

const PromoterSchema= mongoose.model('PromoterSchema',promoterSchema);

export default PromoterSchema;