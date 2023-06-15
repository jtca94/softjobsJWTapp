import { Router } from "express";
import { postControllers } from "../controllers/post.controller";
import { getControllers } from "../controllers/get.controller";
import { validUser } from "../middleware/newUserVerify";
import { checkCredentials } from "../middleware/loginVerify";
import { tokenVerify } from "../middleware/tokenVerify";
import { queryReport } from "../middleware/queryReport";

const router = Router();

router.post('/usuarios', queryReport, validUser, postControllers.createUser);
router.post('/login', queryReport, checkCredentials, postControllers.loginUser);
router.get('/usuarios', queryReport, tokenVerify, getControllers.userInfo)

export default router;