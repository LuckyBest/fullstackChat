import UserModel from "../models/user-model.js";
import ConversationModel from "../models/conversation-model.js";
import MessageModel from "../models/message-model.js";

class ChatDataService {
  async getAllUsers() {
    const users = await UserModel.find();
    return users;
  }

  async createConversation(senderId, receiverId) {
    const conversation = await ConversationModel.create({
      members: [senderId, receiverId],
    });
    return conversation;
  }

  async getUserConversation(membersObj) {
    const conversation = await ConversationModel.find(membersObj);
    return conversation;
  }

  async sendUserMessage(conversationId, sender, text) {
    const message = await MessageModel.create({
      conversationId,
      sender,
      text,
    });
    return message;
  }

  async getAllMessages(conversationId) {
    const messages = await MessageModel.find({ conversationId });
    return messages;
  }
}

export default new ChatDataService();
