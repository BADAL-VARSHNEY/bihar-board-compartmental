import { Box, Typography, Container } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation()
  return (
    <Box
      sx={{
      
         // Adjust height for mobile & desktop
        // display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2, md: 5 },
        padding:"16px"
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap", 
        }}
      >
        {/* Logo */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "white",
            letterSpacing: "2px",
            fontSize: { xs: "18px", md: "24px" },
          }}
        >
          B S E B
        </Typography>

    

        {/* Navigation */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
         
            textAlign: "right",
          }}
        >
         {location?.pathname == "/" && (
  <>
    <Typography
      sx={{
        color: "#fff",
        fontWeight: "bold",
        cursor: "pointer",
        fontSize: { xs: "12px", md: "16px" },
      }}
    >
      Home
    </Typography>
    <Typography
      sx={{
        color: "#fff",
        fontWeight: "bold",
        cursor: "pointer",
        fontSize: { xs: "12px", md: "16px" },
      }}
    >
      Contact
    </Typography>
  </>
)}

          <Typography sx={{ color: "#fff",  fontWeight: "bold",cursor: "pointer", fontSize: { xs: "12px", md: "16px" } }}>
            Fees
          </Typography>
          <Typography sx={{ color: "#fff", fontWeight: "bold", cursor: "pointer", fontSize: { xs: "12px", md: "16px" } }}>
            Apply
          </Typography>
          <Typography sx={{ color: "#fff", fontWeight: "bold", cursor: "pointer", fontSize: { xs: "12px", md: "16px" } }}>
            Lagout
          </Typography>
        </Box>
      </Container>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        
        }}
      >
    

        {/* Heading */}
      { location?.pathname !== "/user-login" && location?.pathname !== "/fees-table" && location?.pathname !== "/payment-gateway" && location?.pathname !== "/payment-status" && location?.pathname !== "/candidate-details" && location?.pathname !== "/personal-details" && location?.pathname !== "/status-table" && ( <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "#ffd54f",
            fontSize: { xs: "14px", md: "20px" },
            textAlign: "center",
          }}
        >
          SECONDARY ANNUAL/COMPARTMENTAL/SPECIAL EXAM
        </Typography>)}

    
      </Container>
    </Box>
  );
}

export default Navbar;
