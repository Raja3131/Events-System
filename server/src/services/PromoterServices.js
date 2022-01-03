import PromoterSchema from '../models/PromoterModel.js';

export const PromoterServices = {
    getAllPromoters: async () => {
        const promoters = await PromoterSchema.find();
        return promoters;
    },
    createPromoter: async (promoter) => {
        const newPromoter = new PromoterSchema(promoter);
        const savedPromoter = await newPromoter.save();
        return savedPromoter;

    },
    getPromoterById: async (id) => {
        const promoter = await PromoterSchema.findById(id);
        return promoter;
    },
    updatePromoter: async (id, promoter) => {
        const updatedPromoter = await PromoterSchema.findByIdAndUpdate(id, promoter, { new: true });
        return updatedPromoter;
    },
    deletePromoter: async (id) => {
        const deletedPromoter = await PromoterSchema.findByIdAndDelete(id);
        return deletedPromoter;
    }
}