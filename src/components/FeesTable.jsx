import React from "react";
import {
  Box,
  Button,
  
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import Grid from "@mui/material/Grid2"
import { useNavigate } from "react-router-dom";
const FeesTable = () => {
    const navigate = useNavigate()
    const handleCheckOut = () => {
        navigate("/payment-gateway")
    }
  return (
    <Box>
      {/* Statistics Header */}
      <Typography variant="subtitle1" sx={{ textAlign: "center", color: "blue", fontWeight: "bold" }}>
        Statistics:: 11001-ZILA SCHOOL PURNEA
      </Typography>

      {/* Table Layout */}
      <TableContainer component={Paper} sx={{ border: "1px solid black" }}>
      <Table>
        {/* Top Row: Statistics */}
        <TableHead>
          

          {/* Table Header: Main Categories */}
          <TableRow>
            <TableCell colSpan={12} align="center" sx={{ background: "red", color: "white", fontWeight: "bold" }}>
              Gen/BC
            </TableCell>
            <TableCell colSpan={12} align="center" sx={{ background: "red", color: "white", fontWeight: "bold" }}>
              SC/ST/EBC
            </TableCell>
          </TableRow>

          {/* Subcategories */}
          <TableRow>
            <TableCell colSpan={5} align="center" sx={{ fontWeight: "bold", background: "#f8d7da" }}>
              To be Applied
            </TableCell>
            <TableCell colSpan={5} align="center" sx={{ fontWeight: "bold", background: "#d4edda" }}>
              Applied
            </TableCell>
            <TableCell colSpan={5} align="center" sx={{ fontWeight: "bold", background: "#f8d7da" }}>
              To be Applied
            </TableCell>
            <TableCell colSpan={5} align="center" sx={{ fontWeight: "bold", background: "#d4edda" }}>
              Applied
            </TableCell>
          </TableRow>

          {/* Column Headers with Correct Positioning */}
          <TableRow>
            {[
              "To be Paid",
              "Total",
              "Reg/Pvt",
              "Comp/Ex",
              "Bett/Sing", // To be Applied - Gen/BC
              "Total",
              "Reg/Pvt",
              "Comp/Ex",
              "Bett/Sing",
              "Opt. Prac", // Applied - Gen/BC
              "To be Paid",
              "Total",
              "Reg/Pvt",
              "Comp/Ex",
              "Bett/Sing", // To be Applied - SC/ST/EBC
              "Total",
              "Reg/Pvt",
              "Comp/Ex",
              "Bett/Sing",
              "Opt. Prac", // Applied - SC/ST/EBC
            ].map((header, index) => (
              <TableCell key={index} align="center" sx={{ fontWeight: "bold" }}>
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        {/* Empty Table Body (You can add rows here if needed) */}
        <TableBody></TableBody>
      </Table>
    </TableContainer>

      {/* Form Fields */}
      <Grid container spacing={2} sx={{ mt: 3, alignItems: "center" }}>
        <Grid item size={{xs:12,md:5,xl:6}}>
          <Typography variant="body1">Select Exam Type:</Typography>
          <Select fullWidth defaultValue="Special">
            <MenuItem value="Regular">Regular</MenuItem>
            <MenuItem value="Ex-Private">Ex-Private</MenuItem>
            <MenuItem value="Special">Special</MenuItem>
          </Select>
        </Grid>

        <Grid item size={{xs:12,md:5,xl:6}}>
          <Typography variant="body1">Select Student Category:</Typography>
          <TextField fullWidth defaultValue="Reg/Pvt/Ex-Reg/Ex-Pvt" />
        </Grid>

        <Grid item size={{xs:12,md:2,xl:2}}  sx={{ mt: 3, alignItems: "center" }}>
          <Button variant="contained" color="success" fullWidth style={{padding:"12px"}} onClick={handleCheckOut}>
            Check & Pay
          </Button>
        </Grid>
      </Grid>

      {/* Action Buttons */}
      {/* <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
        <Button variant="contained">Print</Button>
        <Button variant="contained">Copy</Button>
        <Button variant="contained">CSV</Button>
        <Button variant="contained">Excel</Button>
        <Button variant="contained">PDF</Button>
      </Box> */}

      {/* Table for Students */}
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>BSEB Unique ID</TableCell>
              <TableCell>Reg.No</TableCell>
              <TableCell>Candidate’s Name/Mother’s Name/Father’s Name / Gender / Exam Type</TableCell>
             <TableCell>D-O-B / Caste / Applied Ctg</TableCell>
              <TableCell>Select</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Example Row */}
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>123456</TableCell>
              <TableCell>78910</TableCell>
              <TableCell>John Doe / Jane Doe / Richard Doe / Male / Regular</TableCell>
             <TableCell>12-05-2005 / General / Reg</TableCell>
              <TableCell>
                <input type="checkbox" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>123456</TableCell>
              <TableCell>78910</TableCell>
              <TableCell>John Doe / Jane Doe / Richard Doe / Male / Regular</TableCell>
             <TableCell>12-05-2005 / General / Reg</TableCell>
              <TableCell>
                <input type="checkbox" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>123456</TableCell>
              <TableCell>78910</TableCell>
              <TableCell>John Doe / Jane Doe / Richard Doe / Male / Regular</TableCell>
             <TableCell>12-05-2005 / General / Reg</TableCell>
              <TableCell>
                <input type="checkbox" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default FeesTable;
