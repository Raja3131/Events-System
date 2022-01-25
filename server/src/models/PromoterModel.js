import mongoose from 'mongoose'

const promoterSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    address: {
        type: String,
    },
    aadhar: {
        type: String,
    },
    photo: {
        type: String,
    },
})

const PromoterSchema = mongoose.model('PromoterSchema', promoterSchema)

export default PromoterSchema