import {Box, Typography, TextField, Button, Checkbox } from "@mui/material";
import Grid from "@mui/material/Grid2"
import { useNavigate } from "react-router-dom";

const PaymentStatus = () => {
    const navigate = useNavigate()
    const handleApplication = () => {
        navigate("/candidate-details")
    }
  return (
    <Box p={3} border="1px solid #ddd" borderRadius={2} bgcolor="#f9f9f9">
     <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: "#003366" }} className="card-title">
        Payment Status
      </Typography>

      <Grid container spacing={2}>
        {/* Box 1 */}
        <Grid item size={{ xs: 7,sm:12, md: 3 }}>
          <Typography className="card-title">BSEB Transaction Id:</Typography>
          <Typography className="card-title">Track Id:</Typography>
          <Typography className="card-title">Status:</Typography>
          <Typography className="card-title">Transaction Date:</Typography>
        </Grid>

        <Grid item size={{ xs: 7,sm:12, md: 3 }}>
          <Typography className="card-title">11001SP25lwpopb</Typography>
          <Typography className="card-title">---</Typography>
          <Typography color="error" fontWeight="bold" className="card-title">Failure</Typography>
          <Typography className="card-title">2025-03-07 14:19:34.0</Typography>
        </Grid>

        {/* Box 2 */}
        <Grid item size={{ xs: 7,sm:12, md: 3 }}>
          <Typography className="card-title">Bank Transaction Id:</Typography>
          <Typography className="card-title">Fees:</Typography>
          <Typography className="card-title">Pay Mode:</Typography>
        </Grid>

        <Grid item size={{ xs: 7,sm:12, md: 3 }}>
          <Typography className="card-title">698880703250231415</Typography>
          <Typography className="card-title">1785</Typography>
          <Typography className="card-title">Net Banking</Typography>
        </Grid>
      </Grid>

      
      <Typography variant="body2" sx={{ fontWeight: "bold", mt: 2 }} className="card-title">
        Disclaimer:-
      </Typography>
      <Box display="flex" alignItems="center">
        <Checkbox size="small" />
        <Typography variant="body2" className="card-title">
          Please make a note that any duplicate payment/any charge back will be processed post the entrance test
          application form filling activity is closed.
        </Typography>
      </Box>

      {/* Button */}
      <Box textAlign="center" mt={2}>
        <Button variant="contained" color="success" onClick={handleApplication} className="card-title">
          Click here to view application form
        </Button>
      </Box>
    </Box>
  );
};

export default PaymentStatus;
