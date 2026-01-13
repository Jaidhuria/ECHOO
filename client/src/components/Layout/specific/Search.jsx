import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Stack,
  TextField,
  List,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useInputValidation } from "6pp";
import { sampleUsers } from "../../../constants/sampleData";
import UserItem from "../../Shared/UserItem";

const Search = () => {
  const search = useInputValidation("");
  const [users] = useState(sampleUsers);

  const isLoadingSendFriendRequest = false;

  const addFriendHandler = (id) => {
    console.log("Add Friend:", id);
  };

  return (
    <Dialog open maxWidth="xs" fullWidth>
      <DialogTitle textAlign="center">
        Find People
      </DialogTitle>

      <DialogContent>
        <Stack spacing={2}>
          {/* 🔥 FIXED SEARCH FIELD */}
          <TextField
            label="Search"
            value={search.value}
            onChange={search.changeHandler}
            size="small"
            fullWidth
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              sx: {
                color: "text.primary", // ✅ text visible
              },
            }}
            InputLabelProps={{
              sx: {
                color: "text.secondary",
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "background.paper",
              },
            }}
          />

          <List sx={{ maxHeight: 300, overflowY: "auto" }}>
            {users.map((user, idx) => (
              <UserItem
                key={user._id || user.id || idx}
                user={user}
                handler={addFriendHandler}
                handlerIsLoading={isLoadingSendFriendRequest}
              />
            ))}
          </List>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default Search;
