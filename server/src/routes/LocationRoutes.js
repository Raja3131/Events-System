import { getCountries,getStatesByCountry,getCityByState} from "../controllers/LocationController.js";
import express from "express";

const LocationRouter = express.Router();

LocationRouter.get("/", getCountries);
LocationRouter.get("/:country", getStatesByCountry);
LocationRouter.get("/:country/:state", getCityByState);

export default LocationRouter;
