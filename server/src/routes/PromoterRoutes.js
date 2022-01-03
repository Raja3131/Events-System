import express from 'express'
import {getAllPromoters, createPromoter, getPromoterById, updatePromoter, deletePromoter} from "../controllers/PromoterController.js";


const PromoterRouter = express.Router();
PromoterRouter.get("/", getAllPromoters);
PromoterRouter.post("/", createPromoter);
PromoterRouter.get("/:id", getPromoterById);
PromoterRouter.put("/:id", updatePromoter);
PromoterRouter.delete("/:id", deletePromoter);

export default PromoterRouter
