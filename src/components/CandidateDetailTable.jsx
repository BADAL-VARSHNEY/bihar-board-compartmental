import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material"
import React from "react"
import { useNavigate } from "react-router-dom"
import Grid from "@mui/material/Grid2"


function CandidateTable () {
    const navigate = useNavigate()
    const handleOpen = () => {
       
        navigate("/personal-details")
    }
    return(
        <>
          <Box sx={{ textAlign: "center",}}>
         <Typography variant="h6" color="error" fontWeight="400" className="card-title">
        11001-ZILA SCHOOL PURNEA [Compartmental/Special Exam]
      </Typography>
      <Grid container spacing={2} sx={{ mt: 3, alignItems: "start" }}  className="card-title">
      <Grid item size={{ xs: 12, md: 5, xl: 5 }}>
          <Typography variant="body1" sx={{textAlign:"start"}} className="card-title">Select Student Category</Typography>
          <TextField fullWidth defaultValue="Reg/Pvt/Ex-Reg/Ex-Pvt"/>
        </Grid>
      </Grid>
         <Paper sx={{ width: "100%", overflow: "hidden", padding: 2 }}>
        
      {/* Search Field */}
      <TextField
        label="Search"
        variant="outlined"
        size="small"
        sx={{ float: "right", mb: 1 }}
      />
          <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="card-title" >#</TableCell>
              <TableCell className="card-title">BSEB Unique ID</TableCell>
              <TableCell className="card-title">Reg.No</TableCell>
              <TableCell className="card-title">Candidate’s Name/Mother’s Name/Father’s Name / Gender / Exam Type</TableCell>
              <TableCell className="card-title">D-O-B / Caste / Applied Ctg</TableCell>
              <TableCell className="card-title">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Example Row */}
            <TableRow>
              <TableCell className="card-title">1</TableCell>
              <TableCell className="card-title">123456</TableCell>
              <TableCell className="card-title">78910</TableCell>
              <TableCell className="card-title">John Doe / Jane Doe / Richard Doe / Male / Regular</TableCell>
              <TableCell className="card-title">12-05-2005 / General / Reg</TableCell>
             
              <TableCell>
               <Button  variant="contained"
                sx={{ mt: 2, backgroundColor: "#007bff", color: "white" }} onClick={handleOpen}>Apply</Button>
              </TableCell>
            </TableRow>
            {/* <TableRow>
              <TableCell>2</TableCell>
              <TableCell>123456</TableCell>
              <TableCell>78910</TableCell>
              <TableCell>John Doe / Jane Doe / Richard Doe / Male / Regular</TableCell>
              <TableCell>12-05-2005 / General / Reg</TableCell>
              
              <TableCell>
              <Button  variant="contained"
                sx={{ mt: 2, backgroundColor: "#007bff", color: "white" }}>Apply</Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>123456</TableCell>
              <TableCell>78910</TableCell>
              <TableCell>John Doe / Jane Doe / Richard Doe / Male / Regular</TableCell>
              <TableCell>12-05-2005 / General / Reg</TableCell>
             
             
              <TableCell>
              <Button  variant="contained"
                sx={{ mt: 2, backgroundColor: "#007bff", color: "white" }}>Apply</Button>
              </TableCell>
            </TableRow> */}
          </TableBody>
        </Table>
      </TableContainer>
      </Paper>
      </Box>
        </>
    )
}

export default CandidateTable