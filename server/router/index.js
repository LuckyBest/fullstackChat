import { Router } from "express";
import { AuthorizationController } from "../controller/auth-controller.js";
import { ChatDataController } from "../controller/chatData-controller.js";

const router = new Router();
const AuthorizationInstance = new AuthorizationController();
const ChatDataInstance = new ChatDataController();

router.post("/registration", AuthorizationInstance.registration);
router.post("/login", AuthorizationInstance.login);
router.post("/logout", AuthorizationInstance.logout);
router.post("/refresh", AuthorizationInstance.refresh);

router.get("/chats", ChatDataInstance.getAllUsers);

router.post("/conversation", ChatDataInstance.createConversation);
router.get("/conversation/:userId", ChatDataInstance.getConversation);

router.post("/sendMessage", ChatDataInstance.sendMessage);
router.get("/:conversationId", ChatDataInstance.getMessages);

export { router };
