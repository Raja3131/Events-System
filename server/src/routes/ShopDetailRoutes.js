import { ShopDetailsController } from "../controllers/ShopDetailsController.js";
import express from "express";

const ShopDetailRoutes = express.Router();

ShopDetailRoutes.get("/", ShopDetailsController.getAllShopDetails);
ShopDetailRoutes.get("/:id", ShopDetailsController.getShopDetailsById);
ShopDetailRoutes.post("/", ShopDetailsController.createShopDetails);
ShopDetailRoutes.put("/:id", ShopDetailsController.updateShopDetails);
ShopDetailRoutes.delete("/:id", ShopDetailsController.deleteShopDetails);

export default ShopDetailRoutes;
