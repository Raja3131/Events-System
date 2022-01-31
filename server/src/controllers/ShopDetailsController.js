import { ShopDetailServices } from "../services/ShopDetailServices.js";

export const ShopDetailsController = {
    getAllShopDetails: async (req, res) => {
            try{
                const shopDetails = await ShopDetailServices.getAllShopDetails();
                res.json(shopDetails);

            }
            catch(err){
                res.json(err);
            }
    },
    getShopDetailsById: async (req, res) => {
            try{
                const shopDetail = await ShopDetailServices.getShopDetailsById(req.params.id);
                res.json(shopDetail);

            }
            catch(err){
                res.json(err);
            }
    },
    createShopDetails: async (req, res) => {
            try{
                const newShopDetail = await ShopDetailServices.createShopDetails(req.body);
                res.json(newShopDetail);

            }
            catch(err){
                res.json(err);
            }
    },
    updateShopDetails: async (req, res) => {
            try{
                const result = await ShopDetailServices.updateShopDetails(req.params.id, req.body);
                res.json(result);

            }
            catch(err){
                res.json(err);
            }
    },
    deleteShopDetails: async (req, res) => {
            try{
                const result = await ShopDetailServices.deleteShopDetails(req.params.id);
                res.json(result);

            }
            catch(err){
                res.json(err);
            }
    }
};
