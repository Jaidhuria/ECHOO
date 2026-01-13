import React, { memo } from "react";
import { Add, Remove } from "@mui/icons-material";
import { Avatar, IconButton, ListItem, Stack, Typography } from "@mui/material";

const UserItem = ({
  user,
  handler,
  handlerIsLoading,
  isAdded = false,
}) => {
  const { name, _id, avatar } = user;

  return (
    <ListItem disablePadding>
      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        width="100%"
        padding={1}
      >
        <Avatar src={avatar} />

        <Typography
          variant="body1"
          sx={{
            flexGrow: 1,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {name}
        </Typography>

        <IconButton
          size="small"
          onClick={() => handler(_id)}
          disabled={handlerIsLoading}
          sx={{
            bgcolor: isAdded ? "error.main" : "primary.main",
            color: "#fff",
            "&:hover": {
              bgcolor: isAdded ? "error.dark" : "primary.dark",
            },
          }}
        >
          {isAdded ? <Remove /> : <Add />}
        </IconButton>
      </Stack>
    </ListItem>
  );
};

export default memo(UserItem);
