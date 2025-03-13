import React from "react";
import { Card, CardContent, Typography, TextField, Button, InputAdornment, Link } from "@mui/material";
import Grid from "@mui/material/Grid2"
import { useNavigate } from "react-router-dom";
const UserLogin = () => {
    const navigate = useNavigate()
    const handleOpen = () => {
        navigate("/fees-table")
    }
  return (
    <Grid container spacing={3} justifyContent="center" sx={{ mt: 4 }}>
      
      {/* Title */}
      <Grid item xs={12} textAlign="center">
        <Typography  sx={{ color: "green", fontWeight: "bold",fontSize:"20px" }} className="card-title">
          Online Application For Secondary Compartmental/Special Application for Exam 2025
        </Typography>
      </Grid>
      <Grid container spacing={2}>
        
        {/* Important Dates Card */}
        <Grid item size={{xl:6,md:6,sm:12}}>
          <Card sx={{ border: "1px solid #ddd", borderRadius: 2, backgroundColor: "#f8f9fa" }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#003366" }} className="card-title">
                Important Dates
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold", color: "green", mt: 1 }} className="card-title">
                Commencement of Online Submission of Application Form for Secondary 
                Compartmental/Special Application for Exam 2025 is from 28-04-2025 To 27-05-2025
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold", color: "green", mt: 1 }} className="card-title">
                Last Date of Application fee payment is till 27-05-2025. [/25]
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Login Card */}
        <Grid size={{xl:6,md:6,sm:12}}>
          <Card sx={{ border: "1px solid #ddd", borderRadius: 2 }}>
            <CardContent>
              <Typography sx={{ fontWeight: "bold", color: "#003366",fontSize:"16px" }} className="card-title">
                College/Institution Login
              </Typography>

              <TextField
                fullWidth
                label="User Id"
                variant="outlined"
                margin="normal"
              
              />

              <TextField
                fullWidth
                label="Enter OTP/Password"
                variant="outlined"
                margin="normal"
                type="password"
              />

              <Button
                
                variant="contained"
                sx={{ mt: 2, backgroundColor: "#007bff", color: "white" }}
                onClick={handleOpen}            
                 >
                Login
              </Button>
            </CardContent>
          </Card>
        </Grid>
</Grid>
    </Grid>
  );
};

export default UserLogin;
