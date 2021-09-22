import { Router } from "express";
import { deleteAppointment, getAppointment, getAppointments, postAppointment, putAppointment } from "../controllers/appointments.js";
import restrict from "../helpers/restrict.js";

// import some type of restricted access?

const router = Router();

router.get("/appointment", getAppointments);
router.get("/appointment/:id", getAppointment)
router.post("/appointment", postAppointment);
router.put("/appointment/:id", restrict, putAppointment);
router.delete("/appointment/:id", restrict, deleteAppointment);

export default router