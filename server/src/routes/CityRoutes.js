import express from "express";
import {getCountries} from "../controllers/CityController.js";

const CityRouter = express.Router();
CityRouter.get("/", getCountries);

export default CityRouter;