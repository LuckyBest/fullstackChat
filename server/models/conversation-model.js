import mongoose from "mongoose";

const ConversationModel = new mongoose.Schema(
  {
    members: {
      type: Array,
    },
    socketId: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Conversation", ConversationModel);
