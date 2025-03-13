import React from "react";
import { Box, Typography, Select, MenuItem } from "@mui/material";
import Grid from "@mui/material/Grid";

const PaymentGateway = () => {
  return (
    <Box sx={{ textAlign: "center", p: 2 }}>
      {/* School Name */}
      <Typography variant="h6" color="error" fontWeight="bold" className="card-title">
        11001-ZILA SCHOOL PURNEA
      </Typography>

      {/* Fee Details */}
      <Typography variant="body1" fontWeight="bold" sx={{ textAlign: "start" }} className="card-title">
        Total Fees Collect from Applications:{" "}
        <Typography component="span" fontWeight="bold" className="card-title">
          1785.00
        </Typography>
      </Typography>

      <Typography variant="body1" sx={{ textAlign: "start" }} className="card-title">
        Final Fees To be Paid/Balance:
      </Typography>

      {/* Select Payment Gateway */}
      <Grid 
        container 
        justifyContent={{ xs: "start", sm: "end" }} // Align start below 500px
        sx={{ mt: 2 }}
      >
        <Grid item xs={12} sm={6} md={6} className="card-title">
          <Typography variant="body2" sx={{ textAlign: "start", mb: 1 }}>
            Select Payment Gateway
          </Typography>

          <Select fullWidth defaultValue="Select Bank">
            <MenuItem value="">-Select-</MenuItem>
            <MenuItem value="indian_bank">Indian Bank</MenuItem>
            <MenuItem value="hdfc_bank">HDFC Bank</MenuItem>
          </Select>
        </Grid>
      </Grid>

      {/* Note Section */}
      <Typography 
        variant="body2" 
        className="card-title" 
        color="primary" 
        sx={{ 
          mt: 2, 
          textAlign: "center", 
          fontSize: { xs: "16px", sm: "20px", md: "24px" } 
        }}
      >
        <strong>Note:</strong> Please carefully make a payment, once you initiate the amount...
      </Typography>
    </Box>
  );
};

export default PaymentGateway;
