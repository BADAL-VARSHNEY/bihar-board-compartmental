import React from "react";
import { Box, Typography, Select, MenuItem,  } from "@mui/material";
import Grid from "@mui/material/Grid2"

const PaymentGateway = () => {
  return (
    <Box sx={{ textAlign: "center",}}>
      {/* School Name */}
      <Typography variant="h6" color="error" fontWeight="bold">
        11001-ZILA SCHOOL PURNEA
      </Typography>

      {/* Fee Details */}
      <Typography variant="body1" fontWeight="bold" sx={{textAlign:"start"}}>
        Total Fees Collect from Applications:{" "}
        <Typography component="span" fontWeight="bold">
          1785.00
        </Typography>
      </Typography>
      <Typography variant="body1" sx={{textAlign:"start"}}>
        Final Fees To be Paid/Balance:
      </Typography>
      <Grid container style={{ justifyContent:"end" }}>
  <Grid item size={{xl:6,md:6,}}>
    <Typography variant="body2" sx={{ mt: 2, textAlign: "start" }}>
      Select Payment Gateway
    </Typography>

    <Select fullWidth  defaultValue="Select Bank">
      <MenuItem value="">-Select-</MenuItem>
      <MenuItem value="indian_bank">Indian Bank</MenuItem>
      <MenuItem value="hdfc_bank">HDFC Bank</MenuItem>
    </Select>
  </Grid>
</Grid>


      {/* Note Section */}
      <Typography variant="body2" color="primary" sx={{ mt: 2 ,textAlign:"center",fontSize:"24px"}}>
        <strong>Note:</strong> Please carefully make a payment, once you initiate
        the amount...
      </Typography>
    </Box>
  );
};

export default PaymentGateway;
