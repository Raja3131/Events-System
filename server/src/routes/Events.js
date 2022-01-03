import express from "express";
import {getAllEvents,createEvent,getEventById,updateEvent,deleteEvent} from "../controllers/EventController.js";
const Router = express.Router();
Router.get("/", getAllEvents);
Router.post("/events", createEvent);
Router.get("/events/:id", getEventById);
Router.put("/events/:id", updateEvent);
Router.delete("/events/:id", deleteEvent);


export default Router;