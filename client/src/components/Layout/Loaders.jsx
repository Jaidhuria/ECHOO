import React from "react";
import { Box, Grid, Skeleton, Stack } from "@mui/material";

export const LayoutLoaders = () => {
  return (
    <Box
      sx={{
        height: "calc(100vh - 4rem)",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Grid container sx={{ height: "100%" }}>

        <Grid
          item
          xs={0}
          md={4}
          sx={{
            display: { xs: "none", md: "block" },
            bgcolor: "grey.300",
            p: 2,
          }}
        >
          <Skeleton variant="rectangular" height="100%" />
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
          sx={{
            bgcolor: "primary.main",
            p: 2,
            overflowY: "auto",
          }}
        >
          <Stack spacing={2}>
            {Array.from({ length: 10 }).map((_, index) => (
              <Skeleton
                key={index}
                variant="rectangular"
                height="5rem"
                width="100%"
              />
            ))}
          </Stack>
        </Grid>

        <Grid
          item
          xs={0}
          md={4}
          sx={{
            display: { xs: "none", md: "block" },
            bgcolor: "rgba(0,0,0,0.85)",
            color: "white",
            p: 2,
          }}
        >
          <Skeleton variant="rectangular" height="100%" />
        </Grid>
      </Grid>
    </Box>
  );
};