import React from 'react';
import { Stack, Avatar, Typography, Box } from "@mui/material";

const Profile = () => {
  return (
    <Stack
      spacing={"2rem"}
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ height: "100%", width: "100%" }}
    >
      <Avatar
        src={"https://via.placeholder.com/200"}
        alt="Profile Picture"
        sx={{
          width: 200,
          height: 200,
          objectFit: "cover",
          marginBottom: "1rem",
          border: "5px solid white",
          mx: "auto",
          display: "block",
        }}
      />
      <ProfileCard
        heading="John Doe"
        text="john.doe@email.com"
        Icon={null}
      />
      <ProfileCard
        heading="About"
        text="Web developer, React enthusiast, and coffee lover."
        Icon={null}
      />
    </Stack>
  );
};

const ProfileCard = ({ text, Icon, heading }) => {
  return (
    <Box
      sx={{
        width: 250,
        bgcolor: "rgba(255,255,255,0.08)",
        color: "#fff",
        borderRadius: 2,
        boxShadow: 1,
        p: 2,
        display: "flex",
        alignItems: "center",
        gap: 2,
        flexDirection: "column",
      }}
    >
      {Icon && <Box sx={{ fontSize: 32 }}>{Icon}</Box>}
      <Typography variant="h6" fontWeight={600} align="center">
        {heading}
      </Typography>
      <Typography variant="body2" align="center">
        {text}
      </Typography>
    </Box>
  );
};

export default Profile;