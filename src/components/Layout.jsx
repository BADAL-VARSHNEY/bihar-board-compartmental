import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mb={1}
        mt={2}
      >
        <Box textAlign="center">
          <img
            src="./full-logo.png"
            alt="Bihar Board Examination"
            title="Bihar Board Examination"
            style={{ maxWidth: "100%", height: "68px" }}
          />
        </Box>
      </Box>
      <div style={{ height: "54px", backgroundColor: "#8C0001" }}> BSEB</div>
      <Container maxWidth="lg" style={{ marginTop: "24px" }}>
        {/* <Box display="flex" justifyContent="center" alignItems="center" mb={3}>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "1.3rem", sm: "1.5rem", md: "1.8rem" },
            }}
          >
            Dashboard
          </Typography>
        </Box> */}

        <Outlet />
      </Container>
    </>
  );
}

export default Layout;
