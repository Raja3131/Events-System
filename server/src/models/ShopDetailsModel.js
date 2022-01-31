import mongoose from 'mongoose';

const shopSchema = new mongoose.Schema({
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
    photo: {
        type: String,
    },

})

const ShopSchema = mongoose.model('ShopSchema', shopSchema);
export default ShopSchema;