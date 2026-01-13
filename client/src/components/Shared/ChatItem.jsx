import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Stack, Typography, Box, Avatar } from '@mui/material';

function ChatItem({
  name = "",
  _id,
  groupChat = false,
  SameSender,
  newMessageAlert,
  handleDeleteChatOpen,
  handleChatOpen,
}) {
  return (
    <Link
      style={{ textDecoration: "none" }}
      to={`/chat/${_id}`}
      onClick={() => handleChatOpen?.(_id)}
      onContextMenu={(e) => handleDeleteChatOpen?.(e, _id, groupChat)}
    >
      <div
        style={{
          display: "flex",
          gap: "1rem",
          position: "relative",
          alignItems: "center",
          padding: "1.1rem 1.5rem",
          justifyContent: "space-between",
          borderBottom: "1px solid #e0e0e0",
          cursor: "pointer",
          background: SameSender ? "#e3f2fd" : "#fff",
          color: SameSender ? "#0d47a1" : "#222",
          borderRadius: "0.75rem",
          margin: "0.5rem 0",
          boxShadow: SameSender ? "0 2px 8px 0 rgba(33, 150, 243, 0.08)" : "0 1px 4px 0 rgba(0,0,0,0.03)",
          transition: "background 0.2s, color 0.2s, box-shadow 0.2s",
        }}
        onMouseOver={e => e.currentTarget.style.background = '#f5faff'}
        onMouseOut={e => e.currentTarget.style.background = SameSender ? '#e3f2fd' : '#fff'}
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          <Avatar sx={{ bgcolor: SameSender ? '#1976d2' : '#90caf9', color: '#fff', fontWeight: 600, fontSize: 20 }}>
            {name && name.length > 0 ? name[0].toUpperCase() : "?"}
          </Avatar>
          <Box>
            <Typography fontWeight={600} fontSize={17} color={SameSender ? '#0d47a1' : '#222'}>
              {name}
            </Typography>
            {newMessageAlert && newMessageAlert.count > 0 && (
              <Typography fontSize={13} color="#d32f2f" fontWeight={500}>
                {newMessageAlert.count} New Message(s)
              </Typography>
            )}
          </Box>
        </Stack>
      </div>
    </Link>
  );
}

export default memo(ChatItem);