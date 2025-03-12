import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  TextField,
  Divider,
  Typography,
  Paper,
  Checkbox,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextareaAutosize,
  Input,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

function PersonalDetails() {
  const [photo, setPhoto] = useState(null);
  const [signature, setSignature] = useState(null);

  // Handle file selection for photo
  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };

  // Handle file selection for signature
  const handleSignatureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSignature(URL.createObjectURL(file));
    }
  };
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={2}>
        {/* Full width Card */}
        <Grid item xs={12}>
          <Card sx={{ border: "2px solid #122e5b" }}>
            {/* Header Section */}
            <Typography
              variant="h6"
              sx={{
                backgroundColor: "#122e5b",
                color: "white",
                padding: "10px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              PERSONAL DETAILS:- [ Not Applied ]
            </Typography>
            <Divider />

            {/* Card Content with 4 Box Grid Layout */}
            <CardContent>
              <Grid container spacing={2}>
                {/* Box 1 */}
                <Grid item size={{ xs: 5, md: 3 }}>
                  <Box>
                    <Typography>
                      <b>School Code/Name:</b>
                    </Typography>
                    <Typography>
                      <b>BSEB Unique ID:</b>
                    </Typography>
                    <Typography>
                      <b>Student's Name:</b>
                    </Typography>
                    <Typography>
                      <b>Father's Name:</b>
                    </Typography>
                    <Typography>
                      <b>Gender:</b>
                    </Typography>
                    <Typography>
                      <b>Mobile No.:</b>
                    </Typography>
                    <Typography sx={{ fontWeight: "bold", mt: 1 }}>
                      <b style={{ color: "red" }}>*</b>Differently abled:
                    </Typography>
                  </Box>
                </Grid>

                <Grid item size={{ xs: 7, md: 3 }}>
                  <Box>
                    <Typography style={{ color: "green", fontWeight: "bold" }}>
                      11001 - ZILA SCHOOL PURNEA
                    </Typography>
                    <Typography>1241270010236</Typography>
                    <Typography style={{ fontWeight: "bold" }}>
                      MD MUSARAF ALAM
                    </Typography>
                    <Typography>MUSTAFA ALAM</Typography>
                    <Typography>Male</Typography>
                    <TextField fullWidth size="small" value="7250203137" />
                    <TextField fullWidth size="small" value="No" />
                  </Box>
                </Grid>

                {/* Box 2 */}
                <Grid item size={{ xs: 5, md: 3 }}>
                  <Box>
                    <Typography>
                      <b>Registration No:</b>
                    </Typography>
                    <Typography>
                      <b>Mother's Name:</b>
                    </Typography>
                    <Typography>
                      <b>Date of Birth:</b>
                    </Typography>
                    <Typography>
                      <b>Caste Category:</b>
                    </Typography>
                    <Typography>
                      <b>Email Address:</b>
                    </Typography>
                  </Box>
                </Grid>

                <Grid item size={{ xs: 7, md: 3 }}>
                  <Box>
                    <Typography>11001-00236-24</Typography>
                    <Typography>GULZERA KHATUN</Typography>
                    <Typography>01/01/2010</Typography>
                    <Typography>BC</Typography>
                    <TextField
                      fullWidth
                      size="small"
                      value="musaraf3137@gmail.com"
                    />
                  </Box>
                </Grid>
              </Grid>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 2,
                  borderTop: "2px solid #ccc",
                  borderBottom: "2px solid #ccc",
                  paddingTop: 2,
                }}
              >
                {/* Left Side Text */}
                <Box
                  sx={{
                    flex: 2,
                    borderRight: "2px solid #ccc",
                    paddingRight: 1,
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "red",
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                  >
                    # PLEASE MENTION "AADHAR NUMBER" / कृपया "आधार नंबर" अंकित
                    करें:
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "0.9rem", mt: 1 }}
                  >
                    (If candidate has not enrolled in Aadhar and doesn't have
                    "Aadhar number", then he/she is required to submit
                    declaration in below column that he/she has not been
                    enrolled in Aadhar and has not got "Aadhar number".) / (यदि
                    आवेदक को "आधार नंबर" आवंटित नहीं हुआ है, तो आवेदक को यह
                    घोषणा नीचे के कॉलम में करनी होगी कि "आधार नंबर" आवंटित नहीं
                    हुआ है।)
                  </Typography>
                </Box>

                {/* Right Side Input Field */}
                <Box sx={{ flex: 1 }}>
                  <TextField
                    label="Aadhar Number"
                    placeholder="e.g., 9999-9999-9999"
                    variant="outlined"
                    fullWidth
                    sx={{
                      mb: 1,
                    }}
                  />
                  <Typography
                    variant="caption"
                    sx={{ display: "block", color: "gray", textAlign: "right" }}
                  >
                    e.g., 9999-9999-9999
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  paddingTop: 2,
                }}
              >
                {/* Instruction Text */}
                <Typography
                  variant="body2"
                  sx={{ color: "red", fontSize: "0.9rem", mb: 1 }}
                >
                  If candidate has not given "Aadhar number" in above column,
                  then following declaration should be given by candidate / यदि
                  आवेदक द्वारा उपरोक्त कॉलम में "आधार नंबर" अंकित नहीं किया गया
                  है, तो उनके द्वारा निम्नलिखित घोषणा दी जाएगी।
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "red", fontSize: "0.9rem", mb: 2 }}
                >
                  (Please note that any WRONG DECLARATION made here, may invite
                  action against the candidate and his/her candidature may be
                  cancelled due to making false declaration about non-allotment
                  of "Aadhar number" / कृपया ध्यान दें कि यहाँ की गई किसी भी गलत
                  घोषणा के लिए आवेदक के विरुद्ध कार्रवाई की जा सकती है तथा आधार
                  नंबर नहीं होने के संबंध में इस झूठी/गलत घोषणा के कारण उनका
                  अभ्यर्थिता रद्द किया जा सकता है।)
                </Typography>

                {/* Declaration Text with Checkbox */}
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                  <Checkbox color="primary" />
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "0.9rem",
                      lineHeight: 1.5,
                      fontWeight: 600,
                      textDecoration: "underline",
                    }}
                  >
                    <strong sx={{ fontSize: "1rem", lineHeight: 1.5 }}>
                      DECLARATION / घोषणा:
                    </strong>{" "}
                    I, hereby declare that I have not enrolled in Aadhar and
                    have not got any "Aadhar number". I also understand that any
                    false declaration made by me in this regard may have
                    consequence of cancellation of my candidature / मैं, एतद
                    द्वारा पुष्टि करता हूं कि मैंने "आधार नंबर" आवंटित करने के
                    लिए आवेदन नहीं किया। तथा मुझे "आधार नंबर" आवंटित नहीं हुआ।
                    मैं यह भी समझता हूं कि मेरे द्वारा की गई झूठी/गलत घोषणा के
                    आधार पर मेरा अभ्यर्थिता रद्द किया जा सकता है।
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  borderTop: "1px solid #ccc",
                  paddingTop: 2,
                  margin: "20px auto",
                }}
              >
                {/* First Row */}
                <Grid container spacing={2} alignItems="center">
                  {/* Column 1: Labels */}
                  <Grid item size={{ xs: 5, md: 3 }}>
                    <Typography
                      variant="body2"
                      fontWeight="bold"
                      sx={{ mb: 3 }}
                    >
                      *Area:
                    </Typography>
                    <Typography
                      variant="body2"
                      fontWeight="bold"
                      sx={{ mb: 3 }}
                    >
                      *Nationality:
                    </Typography>
                    <Typography
                      variant="body2"
                      fontWeight="bold"
                      sx={{ mt: 4 }}
                    >
                      *Religion:
                    </Typography>
                  </Grid>

                  {/* Column 2: Values */}
                  <Grid item size={{ xs: 7, md: 3 }}>
                    <TextField
                      size="small"
                      fullWidth
                      defaultValue="Rural"
                      sx={{ mb: 1 }}
                    />
                    <TextField
                      size="small"
                      fullWidth
                      defaultValue="Indian"
                      sx={{ mb: 1 }}
                    />
                    <TextField size="small" fullWidth defaultValue="Islam" />
                  </Grid>

                  {/* Column 3: Labels */}
                  <Grid item size={{ xs: 5, md: 3 }}>
                    <Typography
                      variant="body2"
                      fontWeight="bold"
                      sx={{ mb: 3 }}
                    >
                      *Marital Status:
                    </Typography>
                    <Typography
                      variant="body2"
                      fontWeight="bold"
                      sx={{ mb: 3 }}
                    >
                      *Medium of Exam:
                    </Typography>
                    <Typography
                      variant="body2"
                      fontWeight="bold"
                      sx={{ mt: 4 }}
                    >
                      *Student Category:
                    </Typography>
                  </Grid>

                  {/* Column 4: Values */}
                  <Grid item size={{ xs: 7, md: 3 }}>
                    <TextField
                      size="small"
                      fullWidth
                      defaultValue="Unmarried"
                      sx={{ mb: 1 }}
                    />
                    <TextField
                      size="small"
                      fullWidth
                      defaultValue="Hindi"
                      sx={{ mb: 1 }}
                    />
                    <TextField
                      size="small"
                      fullWidth
                      defaultValue="[R/P/B/C/E/S]"
                    />
                  </Grid>
                </Grid>

                {/* Subject Section */}
                {/* <Divider sx={{ my: 3 }} />
                <Typography variant="h6" textAlign="center" gutterBottom>
                  SUBJECT OFFERED:
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="body2" fontWeight="bold">
                      MIL:
                    </Typography>
                    <TextField size="small" fullWidth defaultValue="URD-URDU" />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="body2" fontWeight="bold">
                      SIL:
                    </Typography>
                    <TextField
                      size="small"
                      fullWidth
                      defaultValue="NLH-HINDI"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="body2" fontWeight="bold">
                      COMPULSORY SUBJECTS:
                    </Typography>
                    <TextField
                      size="small"
                      fullWidth
                      defaultValue="MAT-MATHEMATICS"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="body2" fontWeight="bold">
                      SSC-SOCIAL SCIENCE:
                    </Typography>
                    <TextField
                      size="small"
                      fullWidth
                      defaultValue="SSC-SOCIAL SCIENCE"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="body2" fontWeight="bold">
                      SCIENCE:
                    </Typography>
                    <TextField
                      size="small"
                      fullWidth
                      defaultValue="SCI-SCIENCE"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="body2" fontWeight="bold">
                      ENGLISH:
                    </Typography>
                    <TextField
                      size="small"
                      fullWidth
                      defaultValue="ENG-ENGLISH"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="body2" fontWeight="bold">
                      OPTIONAL SUBJECT:
                    </Typography>
                    <TextField
                      size="small"
                      fullWidth
                      defaultValue="NA-NOT APPLICABLE"
                    />
                  </Grid>
                </Grid> */}
                <Box sx={{ pt: 2 }}>
                  <Typography fontSize="16px" fontWeight="bold" gutterBottom>
                    <b style={{ color: "red" }}>* </b>SUBJECT OFFERED:
                  </Typography>
                  <Grid container spacing={2}>
                    {/* MIL */}
                    <Grid item size={{ xs: 12, md: 2 }}>
                      <Typography align="center" fontWeight="bold">
                        MIL
                      </Typography>
                      <TextField
                        variant="outlined"
                        size="small"
                        fullWidth
                        defaultValue="URD-URDU"
                      />
                    </Grid>

                    {/* SIL */}
                    <Grid item size={{ xs: 12, md: 2 }}>
                      <Typography align="center" fontWeight="bold">
                        SIL
                      </Typography>
                      <TextField
                        variant="outlined"
                        size="small"
                        fullWidth
                        defaultValue="NLH-HINDI"
                      />
                    </Grid>

                    {/* COMPULSORY SUBJECTS */}
                    <Grid item size={{ xs: 12, md: 5 }}>
                      <Typography align="center" fontWeight="bold">
                        COMPULSORY SUBJECTS
                      </Typography>
                      <Grid
                        container
                        spacing={2}
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Grid item size={{ xs: 12, md: 4 }}>
                          <TextField
                            variant="outlined"
                            size="small"
                            fullWidth
                            defaultValue="MAT-MATHEMATICS"
                          />
                        </Grid>
                        <Grid item size={{ xs: 12, md: 4 }}>
                          <TextField
                            variant="outlined"
                            size="small"
                            fullWidth
                            defaultValue="SSC-SOCIAL SCIENCE"
                          />
                        </Grid>
                        <Grid item size={{ xs: 12, md: 4 }}>
                          <TextField
                            variant="outlined"
                            size="small"
                            fullWidth
                            defaultValue="SCI-SCIENCE"
                          />
                        </Grid>
                      </Grid>
                    </Grid>

                    {/* OPTIONAL SUBJECT */}
                    <Grid item size={{ xs: 12, md: 3 }}>
                      <Typography align="center" fontWeight="bold">
                        OPTIONAL SUBJECT
                      </Typography>

                      <TextField
                        variant="outlined"
                        size="small"
                        fullWidth
                        defaultValue="NA-NOT APPLICABLE"
                      />
                    </Grid>
                  </Grid>
                </Box>

                {/* Address Details */}
                <Divider sx={{ my: 3 }} />
                <Typography fontSize="16px" fontWeight="bold" gutterBottom>
                  <b style={{ color: "red" }}>* </b>ADDRESS DETAILS:
                </Typography>

                <Grid container spacing={2}>
                  <Grid item size={{ xs: 12, md: 6 }}>
                    <Grid container spacing={1}>
                      <Grid item size={6}>
                        <Typography variant="body2" fontWeight="bold">
                          *Address:
                        </Typography>
                      </Grid>
                      <Grid item size={6}>
                        <TextareaAutosize
                          size="small"
                          fullWidth
                          defaultValue="GHORA CHOWK PARARIA"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item size={{ xs: 12, md: 6 }}>
                    <Grid container spacing={1}>
                      <Grid item size={6}>
                        <Typography variant="body2" fontWeight="bold">
                          *District Name:
                        </Typography>
                      </Grid>
                      <Grid item size={6}>
                        <TextField
                          size="small"
                          fullWidth
                          defaultValue="ARARIA"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item size={{ xs: 12, md: 6 }}>
                    <Grid container spacing={1}>
                      <Grid item size={6}>
                        <Typography variant="body2" fontWeight="bold">
                          *Town / City Name:
                        </Typography>
                      </Grid>
                      <Grid item size={6}>
                        <TextField
                          size="small"
                          fullWidth
                          defaultValue="ARARIA"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item size={{ xs: 12, md: 6 }}>
                    <Grid container spacing={1}>
                      <Grid item size={6}>
                        <Typography variant="body2" fontWeight="bold">
                          *Pincode:
                        </Typography>
                      </Grid>
                      <Grid item size={6}>
                        <TextField
                          size="small"
                          fullWidth
                          defaultValue="854333"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>

              <Box sx={{ pt: 2 }}>
                <Typography fontWeight="bold" gutterBottom>
                  <b style={{ color: "red" }}>* </b>PHOTO & SIGNATURE:
                </Typography>
                <Grid container spacing={2}>
                  {/* Photo Section */}
                  <Grid item size={{ xs: 12, md: 6 }}>
                    <Box
                      sx={{
                        padding: "8px",
                      }}
                    >
                      {photo ? (
                        <img
                          src={photo}
                          alt="Uploaded Photo"
                          style={{
                            width: "100px",
                            height: "100px",
                            objectFit: "cover",
                            borderRadius: "8px",
                          }}
                        />
                      ) : (
                        <Typography
                          sx={{
                            color: "#999",
                            fontSize: "14px",
                            fontStyle: "italic",
                          }}
                        >
                          No photo uploaded
                        </Typography>
                      )}
                      <Input
                        type="file"
                        inputProps={{ accept: "image/jpeg, image/png" }}
                        onChange={handlePhotoChange}
                        sx={{ mt: 1, display: "block" }}
                      />
                      <Button
                        variant="contained"
                        color="error"
                        sx={{ mt: 1, fontWeight: "bold" }}
                        size="small"
                      >
                        Upload Photo
                      </Button>
                    </Box>
                  </Grid>

                  {/* Signature Section */}
                  <Grid item size={{ xs: 12, md: 6 }}>
                    <Box
                      sx={{
                        padding: "8px",
                      }}
                    >
                      {signature ? (
                        <img
                          src={signature}
                          alt="Uploaded Signature"
                          style={{
                            width: "100px",
                            height: "50px",
                            objectFit: "cover",
                            borderRadius: "8px",
                          }}
                        />
                      ) : (
                        <Typography
                          sx={{
                            color: "#999",
                            fontSize: "14px",
                            fontStyle: "italic",
                          }}
                        >
                          No signature uploaded
                        </Typography>
                      )}
                      <Input
                        type="file"
                        inputProps={{ accept: "image/jpeg, image/png" }}
                        onChange={handleSignatureChange}
                        sx={{ mt: 1, display: "block" }}
                      />
                      <Button
                        variant="contained"
                        color="error"
                        sx={{ mt: 1, fontWeight: "bold" }}
                        size="small"
                      >
                        Upload Signature
                      </Button>
                    </Box>
                  </Grid>
                </Grid>

                {/* Notes Section */}
                <Box sx={{ mt: 2 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "red",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    Note:
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "12px" }}>
                    1. Upload recent colour photograph only in JPG format, size
                    of Photograph should be between 20 kb to 50 kb.
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "12px" }}>
                    2. Upload signature only in JPG format, size of Signature
                    should be between 10 kb to 20 kb.
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "12px" }}>
                    3. Please upload photograph in proper size and shape (Head
                    size/Face size: 20mm X 25 mm approx 60% to 70%).
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default PersonalDetails;
