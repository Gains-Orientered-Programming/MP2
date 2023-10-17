import express from "express";
import controller from "../controllers/customerComplaint.controller";

const router = express.Router();

router.get("/customerComplaintRoute", controller.customerComplaintController);

export default router;
