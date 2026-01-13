import React from "react";
import Title from "../Shared/Title";
import { Box, Stack } from "@mui/material";   // ✅ Correct import
import Header from "../Layout/Header";
import ChatList from "./specific/ChatList";
import { useParams } from "react-router-dom";
import Profile from "./specific/Profile";

// Temporary sample data (replace with backend later)
const sampleChats = [
  {
    _id: "1",
    name: "John Doe",
    avatar: ["https://via.placeholder.com/40"],
    groupChat: false,
    members: [{ _id: "u1" }, { _id: "u2" }],
  },
  {
    _id: "2",
    name: "aina",
    avatar: [],
    groupChat: true,
    members: [{ _id: "u1" }, { _id: "u3" }],
  },
  {
    _id: "3",
    name: "Abhisekh",
    avatar: [],
    groupChat: true,
    members: [{ _id: "u1" }, { _id: "u3" }],
  },
];

const AppLayout = (WrappedComponent) => {
  return function LayoutWrapper(props) {
    const { chatId } = useParams();

    const handleDeleteChat = (e, _id, groupChat) => {
      e.preventDefault();
      console.log("delete Chat", _id, groupChat);
    };

    return (
      <>
        <Title />
        <Header />
        <Box
          sx={{
            display: "flex",
            height: "calc(100vh - 4rem)",
            width: "100%",
            flexWrap: "nowrap",
            backgroundImage: "url('/images/background.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Left sidebar */}
          <Box
            sx={{
              flex: "1 1 33.33%",
              maxWidth: "33.33%",
              height: "100%",
              bgcolor: "rgba(200,200,200,0.85)", // semi-transparent over bg
              p: 2,
              display: { xs: "none", md: "block" },
            }}
          >
            <ChatList
              chats={sampleChats}
              handleDeleteChat={handleDeleteChat}
              chatId={chatId || "1"}
              onlineUsers={["u2"]}
              newMessagesAlert={[
                { chatId, count: 2 },
                { chatId: "2", count: 0 },
              ]}
              handleChatOpen={(id) => console.log("Open chat:", id)}
              handleDeleteChatOpen={(e, id, group) => {
                e.preventDefault();
                console.log("Delete chat:", id, "Group:", group);
              }}
            />
          </Box>

          {/* Center content */}
          <Box
            sx={{
              flex: "1 1 33.33%",
              maxWidth: "33.33%",
              height: "100%",
              bgcolor: "rgba(25,118,210,0.85)", // semi-transparent primary color
              p: 2,
            }}
          >
            <WrappedComponent {...props} />
          </Box>

          {/* Right sidebar */}
          <Box
            sx={{
              flex: "1 1 33.33%",
              maxWidth: "33.33%",
              height: "100%",
              bgcolor: "rgba(0,0,0,0.85)",
              color: "white",
              p: 2,
              display: { xs: "none", md: "block" },
            }}
          >
            <Stack>
              <Profile />
            </Stack>
          </Box>
        </Box>
      </>
    );
  };
};

export default AppLayout;
