import { Router } from "express";
import { AuthorizationController } from "../controller/auth-controller.js";

const router = new Router();
const AuthorizationInstance = new AuthorizationController();

router.post("/registration", AuthorizationInstance.registration);
router.post("/login", AuthorizationInstance.login);
router.post("/logout", AuthorizationInstance.logout);
router.post("/refresh", AuthorizationInstance.refresh);

export { router };
