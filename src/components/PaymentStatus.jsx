import {Box, Typography, TextField, Button, Checkbox } from "@mui/material";
import Grid from "@mui/material/Grid2"
import { useNavigate } from "react-router-dom";

const PaymentStatus = () => {
    const navigate = useNavigate()
    const handleApplication = () => {
        navigate("/personal-details")
    }
  return (
    <Box p={3} border="1px solid #ddd" borderRadius={2} bgcolor="#f9f9f9">
     <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: "#003366" }}>
        Payment Status
      </Typography>

      <Grid container spacing={2}>
        {/* Box 1 */}
        <Grid item size={{ xs: 7, md: 3 }}>
          <Typography>BSEB Transaction Id:</Typography>
          <Typography>Track Id:</Typography>
          <Typography>Status:</Typography>
          <Typography>Transaction Date:</Typography>
        </Grid>

        <Grid item size={{ xs: 7, md: 3 }}>
          <Typography>11001SP25lwpopb</Typography>
          <Typography>---</Typography>
          <Typography color="error" fontWeight="bold">Failure</Typography>
          <Typography>2025-03-07 14:19:34.0</Typography>
        </Grid>

        {/* Box 2 */}
        <Grid item size={{ xs: 7, md: 3 }}>
          <Typography>Bank Transaction Id:</Typography>
          <Typography>Fees:</Typography>
          <Typography>Pay Mode:</Typography>
        </Grid>

        <Grid item size={{ xs: 7, md: 3 }}>
          <Typography>698880703250231415</Typography>
          <Typography>1785</Typography>
          <Typography>Net Banking</Typography>
        </Grid>
      </Grid>

      
      <Typography variant="body2" sx={{ fontWeight: "bold", mt: 2 }}>
        Disclaimer:-
      </Typography>
      <Box display="flex" alignItems="center">
        <Checkbox size="small" />
        <Typography variant="body2">
          Please make a note that any duplicate payment/any charge back will be processed post the entrance test
          application form filling activity is closed.
        </Typography>
      </Box>

      {/* Button */}
      <Box textAlign="center" mt={2}>
        <Button variant="contained" color="success" onClick={handleApplication}>
          Click here to view application form
        </Button>
      </Box>
    </Box>
  );
};

export default PaymentStatus;
