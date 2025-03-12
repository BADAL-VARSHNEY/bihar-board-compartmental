import React from "react";
import { Box, Container, Typography } from "@mui/material";

function HomePage() {
  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center" mb={3}>
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: "1.3rem", sm: "1.5rem", md: "1.8rem" },
          }}
        >
          Dashboard
        </Typography>
      </Box>
    </>
  );
}

export default HomePage;
