import express from "express";
import {
  cancelServiceAppointment,
  confirmServicePayment,
  createserviceAppointment,
  getServiceAppointmentById,
  getServiceAppointments,
  getServiceAppointmentsByPatient,
  getServiceAppointmentStats,
  updateServiceAppointment,
} from "../controllers/serviceAppointmentController.js";
import { clerkMiddleware, requireAuth } from "@clerk/express";

const serviceAppointmentRouter = express.Router();
serviceAppointmentRouter.get("/", getServiceAppointments);
serviceAppointmentRouter.get("/confirm", confirmServicePayment);
serviceAppointmentRouter.get("/stats/summary", getServiceAppointmentStats);

serviceAppointmentRouter.post(
  "/",
  clerkMiddleware(),
  requireAuth(),
  createserviceAppointment,
);

serviceAppointmentRouter.get(
  "/me",
  clerkMiddleware(),
  requireAuth(),
  getServiceAppointmentsByPatient,
);

serviceAppointmentRouter.get("/:id", getServiceAppointmentById);
serviceAppointmentRouter.put("/:id", updateServiceAppointment);
serviceAppointmentRouter.post("/:id/cancel", cancelServiceAppointment);

export default serviceAppointmentRouter;
