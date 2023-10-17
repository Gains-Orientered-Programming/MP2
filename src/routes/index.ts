import express from "express";
import test from "./customerComplaint";

const router = express.Router();

router.use("/test", test);

export default router;
