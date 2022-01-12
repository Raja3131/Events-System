import { getCountries } from "../controllers/LocationController.js";
import express from "express";

const LocationRouter = express.Router();

LocationRouter.get("/", getCountries);

export default LocationRouter;
