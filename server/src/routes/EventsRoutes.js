import express from "express";
import {getAllEvents,createEvent,getEventById,updateEvent,deleteEvent,} from "../controllers/EventController.js";
const EventsRouter = express.Router();

EventsRouter.get("/", getAllEvents);
EventsRouter.post("/", createEvent);
EventsRouter.get("/:id", getEventById);
EventsRouter.put("/:id", updateEvent);
EventsRouter.delete("/:id", deleteEvent);


export default EventsRouter;