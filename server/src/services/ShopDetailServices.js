import ShopSchema from "../models/ShopDetailsModel.js";

export const ShopDetailServices = {
    getAllShopDetails: async () => {
        const shopDetails = await ShopSchema.find();
        return shopDetails;
    },
    getShopDetailsById: async (id) => {
        const shopDetail = await ShopSchema.findById(id);
        return shopDetail;
    },
    createShopDetails: async (shopDetail) => {
        const newShopDetail = new ShopSchema(shopDetail);
        const result = await newShopDetail.save();
        return result;
    },
    updateShopDetails: async (id, shopDetail) => {
        const result = await ShopSchema.findByIdAndUpdate(id, shopDetail);
        return result;
    },
    deleteShopDetails: async (id) => {
        const result = await ShopSchema.findByIdAndRemove(id);
        return result;
    }



};