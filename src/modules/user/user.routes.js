import { Router } from "express";
import * as userController from "./user.controller.js";
import { checkEmailExist } from "../../middelware/checkEmailExist.js";
import { hashPassword } from "../../middelware/hashPassword.js";
const router = Router();

router.post("/signUp", checkEmailExist,hashPassword, userController.signUp);
router.post("/signIn", userController.signIn);


export default router;
