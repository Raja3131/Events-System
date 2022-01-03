import express from "express";
import { getAllManagers,createManager,getManagerById,updateManager,deleteManager  } from './../controllers/ManagerController.js';

const ManagerRouter = express.Router();

ManagerRouter.get("/", getAllManagers);
ManagerRouter.post("/", createManager);
ManagerRouter.get("/:id", getManagerById);
ManagerRouter.put("/:id", updateManager);
ManagerRouter.delete("/:id", deleteManager);
export default ManagerRouter
