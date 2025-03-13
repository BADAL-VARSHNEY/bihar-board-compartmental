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
import Grid from "@mui/material/Grid2";
import { useNavigate } from "react-router-dom";
const FeesTable = () => {
  const navigate = useNavigate();
  const handleCheckOut = () => {
    navigate("/payment-gateway");
  };
  return (
    <Box>
      {/* Statistics Header */}
      <Typography
        variant="subtitle1"
        sx={{ textAlign: "center", color: "blue", fontWeight: "bold" }}
        className="card-title"
      >
        Statistics:: 11001-ZILA SCHOOL PURNEA
      </Typography>

      {/* Table Layout */}
      <TableContainer component={Paper} sx={{ border: "1px solid black" }}>
        <Table>
          {/* Top Row: Statistics */}
          <TableHead>
            {/* Table Header: Main Categories */}
            <TableRow>
              <TableCell
                colSpan={12}
                align="center"
                sx={{ background: "#fc0317", color: "white", fontWeight: "bold" }}
                className="card-title"
              >
                Gen/BC
              </TableCell>
              <TableCell
                colSpan={12}
                align="center"
                sx={{ background: "#fc0317", color: "white", fontWeight: "bold" }}
                className="card-title"
              >
                SC/ST/EBC
              </TableCell>
            </TableRow>

            {/* Subcategories */}
            <TableRow>
              <TableCell
                colSpan={5}
                align="center"
                sx={{ fontWeight: "bold", background: "#f8d7da" }}
                className="card-title"
              >
                To be Applied
              </TableCell>
              <TableCell
                colSpan={5}
                align="center"
                sx={{ fontWeight: "bold", background: "#d4edda" }}
                className="card-title"
              >
                Applied
              </TableCell>
              <TableCell
                colSpan={5}
                align="center"
                sx={{ fontWeight: "bold", background: "#f8d7da" }}
                className="card-title"
              >
                To be Applied
              </TableCell>
              <TableCell
                colSpan={5}
                align="center"
                sx={{ fontWeight: "bold", background: "#d4edda" }}
                className="card-title"
              >
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
                <TableCell
                  key={index}
                  align="center"
                  sx={{ fontWeight: "bold" }}
                >
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
        <Grid item size={{ xs: 12, md: 5, xl: 5, sm:4 }}>
          <Typography variant="body1" className="card-title">Select Exam Typ:</Typography>
          <Select fullWidth defaultValue="Special" className="card-title">
            <MenuItem value="Regular">Regular</MenuItem>
            <MenuItem value="Ex-Private">Ex-Private</MenuItem>
            <MenuItem value="Special">Special</MenuItem>
          </Select>
        </Grid>

        <Grid item size={{ xs: 12, md: 5, xl: 5,sm:4 }}>
          <Typography variant="body1" className="card-title">Select Student Category</Typography>
          <TextField fullWidth defaultValue="Reg/Pvt/Ex-Reg/Ex-Pvt" />
        </Grid>

        <Grid
          item
          size={{ xs: 12, md: 2, xl: 2,sm:3 }}
          sx={{ mt: 3, alignItems: "center" }}
        >
          <Button
            variant="contained"
            color="success"
            fullWidth
            style={{ padding: "12px" }}
            onClick={handleCheckOut}
            className="card-title"
          >
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
              <TableCell className="card-title">#</TableCell>
              <TableCell className="card-title">BSEB Unique ID</TableCell>
              <TableCell className="card-title">Reg.No</TableCell>
              <TableCell className="card-title">
                Candidate’s Name/Mother’s Name/Father’s Name / Gender / Exam
                Type
              </TableCell>
              <TableCell className="card-title">D-O-B / Caste / Applied Ctg</TableCell>
              <TableCell className="card-title">Select</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Example Row */}
            <TableRow>
              <TableCell className="card-title">1</TableCell>
              <TableCell className="card-title">123456</TableCell>
              <TableCell className="card-title">78910</TableCell>
              <TableCell className="card-title">
                John Doe / Jane Doe / Richard Doe / Male / Regular
              </TableCell>
              <TableCell className="card-title">12-05-2005 / General / Reg</TableCell>
              <TableCell className="card-title">
                <input type="checkbox" />
              </TableCell>
            </TableRow>
            {/* <TableRow>
              <TableCell>1</TableCell>
              <TableCell>123456</TableCell>
              <TableCell>78910</TableCell>
              <TableCell>
                John Doe / Jane Doe / Richard Doe / Male / Regular
              </TableCell>
              <TableCell>12-05-2005 / General / Reg</TableCell>
              <TableCell>
                <input type="checkbox" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>123456</TableCell>
              <TableCell>78910</TableCell>
              <TableCell>
                John Doe / Jane Doe / Richard Doe / Male / Regular
              </TableCell>
              <TableCell>12-05-2005 / General / Reg</TableCell>
              <TableCell>
                <input type="checkbox" />
              </TableCell>
            </TableRow> */}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default FeesTable;
