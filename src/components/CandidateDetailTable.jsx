import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material"
import React from "react"


function CandidateTable () {
    return(
        <>
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
              <TableCell>#</TableCell>
              <TableCell>BSEB Unique ID</TableCell>
              <TableCell>Reg.No</TableCell>
              <TableCell>Candidate’s Name/Mother’s Name/Father’s Name / Gender / Exam Type</TableCell>
              <TableCell>D-O-B / Caste / Applied Ctg</TableCell>
              <TableCell>Action</TableCell>
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
               <Button  variant="contained"
                sx={{ mt: 2, backgroundColor: "#007bff", color: "white" }}>Apply</Button>
              </TableCell>
            </TableRow>
            <TableRow>
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
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      </Paper>
        </>
    )
}

export default CandidateTable