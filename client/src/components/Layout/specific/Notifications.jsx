import React from 'react';
import {
  Dialog,
  DialogTitle,
  Stack
} from '@mui/material';

const Notifications = () => {
  return (
    <Dialog open={true}>
      <Stack
        p={{ xs: "1rem", md: "2rem" }}
        gap={2}
        minWidth={{ xs: "300px", md: "400px" }}
      >
        <DialogTitle>Notifications</DialogTitle>
      </Stack>
    </Dialog>
  );
};

export default Notifications;
