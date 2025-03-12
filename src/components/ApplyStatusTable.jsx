import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  TablePagination,
  Select,
  MenuItem,
} from "@mui/material";

const ApplyStatusTableData = () => {
  const rows = [
    {
      id: 1,
      uniqueID: "1241270010236",
      regNo: "11001-00236-24",
      appNo: "11001523876",
      candidateName: "MD MUSARAF ALAM",
      motherName: "GULZERA KHATUN",
      fatherName: "MUSTAFA ALAM",
      dob: "01/01/2010",
      caste: "BC",
      gender: "Male",
      phApplied: "No",
      examType: "R Special",
      subjects: "MURD SNLH CMAT, CSSC CSCI NA CENG",
      status: "Applied",
    },
    {
        id: 2,
        uniqueID: "1241270010237",
        regNo: "11001-00236-24",
        appNo: "11001523876",
        candidateName: "MD MUSARAF ALAM",
        motherName: "GULZERA KHATUN",
        fatherName: "MUSTAFA ALAM",
        dob: "01/01/2010",
        caste: "BC",
        gender: "Male",
        phApplied: "No",
        examType: "R Special",
        subjects: "MURD SNLH CMAT, CSSC CSCI NA CENG",
        status: "Applied",
      },
  ];

  return (
    <Paper sx={{ width: "100%", overflow: "hidden", padding: 2 }}>
      {/* Search Field */}
      <TextField
        label="Search"
        variant="outlined"
        size="small"
        sx={{ float: "right", mb: 1 }}
      />

      {/* Table */}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="card-title">#</TableCell>
              <TableCell className="card-title"><b>BSEB Unique ID<br />Reg. No<br />App No</b></TableCell>
              <TableCell className="card-title"> <b>Candidate's Name<br />Mother's Name<br />Father's Name</b></TableCell>
              <TableCell className="card-title"><b>D-O-B / Caste / Gender</b></TableCell>
              <TableCell className="card-title"><b>PH Applied ctg<br />Exam Type</b></TableCell>
              <TableCell className="card-title"><b>-: Subject(s) :-</b></TableCell>
              <TableCell className="card-title"><b>Applied Status</b></TableCell>
              <TableCell className="card-title"><b>Action</b></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="card-title">{row.id}</TableCell>
                <TableCell className="card-title">
                  <b>{row.uniqueID}</b> <br />
                  {row.regNo} <br />
                  {row.appNo}
                </TableCell >
                <TableCell className="card-title">
                  {row.candidateName} <br />
                  {row.motherName} <br />
                  {row.fatherName}
                </TableCell>
                <TableCell className="card-title">
                  {row.dob} / {row.caste} / {row.gender}
                </TableCell>
                <TableCell className="card-title">
                  {row.phApplied} <br />
                  {row.examType}
                </TableCell>
                <TableCell className="card-title">{row.subjects}</TableCell>
                <TableCell className="card-title" sx={{ color: "green", fontWeight: "bold" }}>
                  {row.status}
                </TableCell>
                <TableCell style={{width:"150px"}} className="card-title">
                  {/* <Button variant="outlined" size="small">Select Action</Button> */}
                  <Select fullWidth   style={{height:"40px"}}>
      <MenuItem value="">-Select-</MenuItem>
      <MenuItem value="indian_bank">Indian Bank</MenuItem>
      <MenuItem value="hdfc_bank">HDFC Bank</MenuItem>
    </Select>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <TablePagination
        rowsPerPageOptions={[5, 10]}
        component="div"
        count={rows.length}
        rowsPerPage={5}
        page={0}
        onPageChange={() => {}}
        onRowsPerPageChange={() => {}}
      />
    </Paper>
  );
};

export default ApplyStatusTableData;
