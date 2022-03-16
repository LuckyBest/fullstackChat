import ChatDataService from "../service/chatData-service.js";

export class ChatDataController {
  async getAllUsers(req, res, next) {
    try {
      const Users = await ChatDataService.getAllUsers();
      res.status(200).json(Users);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async createConversation(req, res, next) {
    try {
      const conversation = await ChatDataService.createConversation(
        req.body.senderId,
        req.body.receiverId,
        req.body.socketId
      );
      res.status(200).json(conversation);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getConversation(req, res, next) {
    const { userId } = req.params;
    try {
      const converSationMembers = {
        members: { $in: [userId] },
      };
      const conversation = await ChatDataService.getUserConversation(
        converSationMembers
      );
      res.status(200).json(conversation);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async sendMessage(req, res, next) {
    const { conversationId, sender, text } = req.body;
    try {
      const messageData = await ChatDataService.sendUserMessage(
        conversationId,
        sender,
        text
      );
      res.status(200).json(messageData);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getMessages(req, res, next) {
    const { conversationId } = req.params;  
    const { count, page } = req.query;
    const amountDataToSkip = count * (page - 1);

    try {
      const allMessagesData = await ChatDataService.getAllMessages(
        conversationId,
        count,
        amountDataToSkip
      );

      res.status(200).json(allMessagesData);
    } catch (e) {
      console.log(e);
      res.status(500).json(e);
    }
  }
}
