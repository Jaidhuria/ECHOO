import { Avatar, Box, Stack } from "@mui/material";
import React from "react";

const AvatarCard = ({ avatar = [], max = 4 }) => {
  return (
    <Stack direction="row" spacing={0.5}>
      <Box sx={{ position: "relative", width: "10rem", height: "3rem" }}>
        {avatar.slice(0, max).map((i, index) => (
          <Avatar
            key={index}
            src={i}
            alt={`Avatar ${index}`}
            sx={{
              width: "3rem",
              height: "3rem",
              position: "absolute",
              left: `${index * 2}rem`, // controls overlap
            }}
          />
        ))}
      </Box>
    </Stack>
  );
};

export default AvatarCard;
