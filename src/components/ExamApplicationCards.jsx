import React from "react";
import { Card, CardContent, Typography, Link, Box } from "@mui/material";
import Grid from "@mui/material/Grid2"
import { useNavigate } from "react-router-dom";

const ExamApplicationCard = () => {
    const navigate = useNavigate()
    const handleOpen = () => {
        navigate("/user-login")
    }
  return (
    <Box>
    <Grid container spacing={2}>
      {/* Left Card */}
      <Grid item size={{xl:6,md:6,sm:12}} >
        <Card sx={{ border: "1px solid #ddd", borderRadius: 2,height:"100%" }}>
          <CardContent>
            <Typography sx={{ color: "red", fontWeight: "bold",fontSize:"16px",cursor:"pointer" }} className="card-title">
              Secondary Annual Application for Exam 2025
            </Typography>
            <Typography variant="body2" className="card-title">
              ➠ <Link href="#" underline="hover">Click here..</Link> to View/Apply for Exam 2025
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }} className="card-title">
              ➠ <Link href="#" underline="hover">Download</Link> Application Form of Ex-Regular, 
              Compartmental, Betterment & Single Subject (English) for Exam 2025
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Right Card */}
      <Grid item size={{xl:6,md:6,sm:12}} >
        <Card sx={{ border: "1px solid #ddd", borderRadius: 2,height:"100%" }}>
          <CardContent>
            <Typography  sx={{ color: "green", fontWeight: "bold" ,fontSize:"16px",cursor:"pointer"}} className="card-title" onClick={handleOpen}>
              Secondary Compartmental/Special Application for Exam 2025
            </Typography>
            <Typography variant="body2" className="card-title">
              ➠ <Link href="#" underline="hover">Click here..</Link> to View/Apply for 
              Compartmental And Special Exam 2025 
              <span style={{ color: "green", fontWeight: "bold", marginLeft: 5 }}>NEW</span>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    </Box>
  );
};

export default ExamApplicationCard;
