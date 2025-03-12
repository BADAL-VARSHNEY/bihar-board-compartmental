import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import "./Layout.css"

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
      <div style={{ height: "54px", backgroundColor: "#8C0001" }}> 
        <div className="main-container">
        <p className="main-containers">BSEB</p>
<p>Secondary Annual/Compartmental/Special Exam</p>

<ul>
  <li>Home</li>
  {/* <li>Contact</li> */}
</ul>
        </div>
        
        </div>
      <Container maxWidth="lg" style={{ marginTop: "24px" }}>
        <Outlet />
      </Container>
    </>
  );
}

export default Layout;
