import React from "react";
import { Stack } from "@mui/material";
import ChatItem from "../../Shared/ChatItem";

const ChatList = ({
  w = "100%",
  chats = [],
  chatId,
  onlineUsers = [],
  newMessagesAlert = [],
  handleChatOpen,
  handleDeleteChatOpen,
}) => {
  return (
    <Stack width={w} direction="column">
      {chats?.map((data, index) => {
        const { avatar, _id, name, groupChat, members } = data;

        // Find alert for this chat
        const alert = newMessagesAlert.find((a) => a.chatId === _id);

        // Check if anyone is online
        const isOnline = members?.some((m) => onlineUsers.includes(m._id));

        return (
          <ChatItem
            key={_id}
            index={index}
            newMessageAlert={alert}
            isOnline={isOnline}
            avatar={avatar}
            name={name}
            _id={_id}
            groupChat={groupChat}
            sameSender={chatId === _id}
            handleChatOpen={handleChatOpen}
            handleDeleteChatOpen={handleDeleteChatOpen}
          />
        );
      })}
    </Stack>
  );
};

export default ChatList;
