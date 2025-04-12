import { Router } from "express";
const router = Router()
import { contactMail } from "../controllers/contact.controller.js";

router.post("/contactMail", contactMail)

export default router