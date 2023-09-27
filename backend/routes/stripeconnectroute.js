
import express from "express"
import { getordercontroller, mastercardsessionid } from "../controller/stripeconnectcontroller.js";


const router=express.Router();
router.route("/mastercard/session").post(mastercardsessionid);
router.route("/mastercard/order").post(getordercontroller)





export default router  ;
