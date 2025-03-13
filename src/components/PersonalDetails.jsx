import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  TextField,
  Divider,
  Typography,
  Checkbox,
  Button,
  Input,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useNavigate } from "react-router-dom";

function PersonalDetails() {
  const navigate = useNavigate();
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

  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleApplyClick = () => {
    if (checked) {
      navigate("/status-table");
    } else {
      alert("Please check the confirmation box before applying.");
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
                <Grid item size={{ xs: 12, md: 6 }}>
                  <Grid container spacing={1}>
                    <Grid item size={{ sm: 6 }}>
                      <Typography>
                        <b>School Code/Name:</b>
                      </Typography>
                    </Grid>
                    <Grid item size={{ sm: 6 }}>
                      <Typography
                        style={{ color: "green", fontWeight: "bold" }}
                      >
                        11001 - ZILA SCHOOL PURNEA
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item size={{ xs: 12, md: 6 }}>
                  <Grid container spacing={1}>
                    <Grid item size={{ sm: 6 }}>
                      <Typography>
                        <b>Registration No:</b>
                      </Typography>
                    </Grid>
                    <Grid item size={{ sm: 6 }}>
                      <Typography>11001-00236-24</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item size={{ xs: 12, md: 6 }}>
                  <Grid container spacing={1}>
                    <Grid item size={{ sm: 6 }}>
                      <Typography>
                        <b>BSEB Unique ID:</b>
                      </Typography>
                    </Grid>
                    <Grid item size={{ sm: 6 }}>
                      <Typography>1241270010236</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item size={{ xs: 12, md: 6 }}>
                  <Grid container spacing={1}>
                    <Grid item size={{ sm: 6 }}>
                      <Typography>
                        <b>Mother's Name:</b>
                      </Typography>
                    </Grid>
                    <Grid item size={{ sm: 6 }}>
                      <Typography>GULZERA KHATUN</Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item size={{ xs: 12, md: 6 }}>
                  <Grid container spacing={1}>
                    <Grid item size={{ sm: 6 }}>
                      <Typography>
                        <b>Student's Name:</b>
                      </Typography>
                    </Grid>
                    <Grid item size={{ sm: 6 }}>
                      <Typography style={{ fontWeight: "bold" }}>
                        MD MUSARAF ALAM
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item size={{ xs: 12, md: 6 }}>
                  <Grid container spacing={1}>
                    <Grid item size={{ sm: 6 }}>
                      <Typography>
                        <b>Date of Birth:</b>
                      </Typography>
                    </Grid>
                    <Grid item size={{ sm: 6 }}>
                      <Typography>01/01/2010</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item size={{ xs: 12, md: 6 }}>
                  <Grid container spacing={1}>
                    <Grid item size={{ sm: 6 }}>
                      <Typography>
                        <b>Father's Name:</b>
                      </Typography>
                    </Grid>
                    <Grid item size={{ sm: 6 }}>
                      <Typography>MUSTAFA ALAM</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item size={{ xs: 12, md: 6 }}>
                  <Grid container spacing={1}>
                    <Grid item size={{ sm: 6 }}>
                      <Typography>
                        <b>Caste Category:</b>
                      </Typography>
                    </Grid>
                    <Grid item size={{ sm: 6 }}>
                      <Typography>BC</Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item size={{ xs: 12, md: 6 }}>
                  <Grid container spacing={1}>
                    <Grid item size={{ sm: 6 }}>
                      <Typography>
                        <b>Gender:</b>
                      </Typography>
                    </Grid>
                    <Grid item size={{ sm: 6 }}>
                      <Typography>Male</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item size={{ xs: 12, md: 6 }}>
                  <Grid container spacing={1}>
                    <Grid item size={{ sm: 6, xs: 12 }}>
                      <Typography>
                        <b>Mobile No.:</b>
                      </Typography>
                    </Grid>
                    <Grid item size={{ sm: 6, xs: 12 }}>
                      <TextField fullWidth size="small" value="7250203137" />
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item size={{ xs: 12, md: 6 }}>
                  <Grid container spacing={1}>
                    <Grid item size={{ sm: 6, xs: 12 }}>
                      <Typography sx={{ fontWeight: "bold", mt: 1 }}>
                        <b style={{ color: "red" }}>*</b>Differently abled:
                      </Typography>
                    </Grid>
                    <Grid item size={{ sm: 6, xs: 12 }}>
                      <TextField fullWidth size="small" value="No" />
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item size={{ xs: 12, md: 6 }}>
                  <Grid container spacing={1}>
                    <Grid item size={{ sm: 6, xs: 12 }}>
                      <Typography>
                        <b>Email Address:</b>
                      </Typography>
                    </Grid>
                    <Grid item size={{ sm: 6, xs: 12 }}>
                      <TextField
                        fullWidth
                        size="small"
                        value="musaraf3137@gmail.com"
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Box
                sx={{
                  borderTop: "2px solid #ccc",
                  borderBottom: "2px solid #ccc",
                  paddingTop: 2,
                  paddingBottom: 2,
                }}
              >
                <Grid container spacing={2} alignItems="flex-start">
                  {/* Left Side Text */}
                  <Grid
                    item
                    size={{ xs: 12, md: 8 }}
                    sx={{ borderRight: "2px solid #ccc", paddingRight: 2 }}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: "red",
                        fontWeight: "bold",
                        textDecoration: "underline",
                      }}
                      className="card-title"
                    >
                      # PLEASE MENTION "AADHAR NUMBER" / कृपया "आधार नंबर" अंकित
                      करें:
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ fontSize: "0.9rem", marginTop: 1 }}
                      className="card-title"
                    >
                      (If candidate has not enrolled in Aadhar and doesn't have
                      "Aadhar number", then he/she is required to submit
                      declaration in below column that he/she has not been
                      enrolled in Aadhar and has not got "Aadhar number".) /
                      (यदि आवेदक को "आधार नंबर" आवंटित नहीं हुआ है, तो आवेदक को
                      यह घोषणा नीचे के कॉलम में करनी होगी कि "आधार नंबर" आवंटित
                      नहीं हुआ है।)
                    </Typography>
                  </Grid>

                  {/* Right Side Input Field */}
                  <Grid item size={{ xs: 12, md: 4 }}>
                    <TextField
                      label="Aadhar Number"
                      placeholder="e.g., 9999-9999-9999"
                      variant="outlined"
                      fullWidth
                      sx={{ marginBottom: 1 }}
                    />
                    <Typography
                      variant="caption"
                      sx={{
                        display: "block",
                        color: "gray",
                        textAlign: "right",
                      }}
                    >
                      e.g., 9999-9999-9999
                    </Typography>
                  </Grid>
                </Grid>
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
                  className="card-title"
                >
                  If candidate has not given "Aadhar number" in above column,
                  then following declaration should be given by candidate / यदि
                  आवेदक द्वारा उपरोक्त कॉलम में "आधार नंबर" अंकित नहीं किया गया
                  है, तो उनके द्वारा निम्नलिखित घोषणा दी जाएगी।
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "red", fontSize: "0.9rem", mb: 2 }}
                  className="card-title"
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
                    className="card-title"
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
                  borderTop: "2px solid #ccc",
                  paddingTop: 2,
                  margin: "20px auto",
                }}
              >
                {/* First Row */}
                <Grid container spacing={2}>
                  {/* Column 1: Labels */}
                  <Grid item size={{ xs: 12, md: 6 }}>
                    <Grid container spacing={1}>
                      <Grid item size={{ sm: 6, xs: 12 }}>
                        <Typography variant="body2" fontWeight="bold">
                          <b style={{ color: "red" }}>* </b>Area:
                        </Typography>
                      </Grid>
                      <Grid item size={{ sm: 6, xs: 12 }}>
                        <TextField
                          size="small"
                          fullWidth
                          defaultValue="Rural"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item size={{ xs: 12, md: 6 }}>
                    <Grid container spacing={1}>
                      <Grid item size={{ sm: 6, xs: 12 }}>
                        <Typography variant="body2" fontWeight="bold">
                          <b style={{ color: "red" }}>* </b>Nationality:
                        </Typography>
                      </Grid>
                      <Grid item size={{ sm: 6, xs: 12 }}>
                        <TextField
                          size="small"
                          fullWidth
                          defaultValue="Indian"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item size={{ xs: 12, md: 6 }}>
                    <Grid container spacing={1}>
                      <Grid item size={{ sm: 6, xs: 12 }}>
                        <Typography variant="body2" fontWeight="bold">
                          <b style={{ color: "red" }}>* </b>Religion:
                        </Typography>
                      </Grid>
                      <Grid item size={{ sm: 6, xs: 12 }}>
                        <TextField
                          size="small"
                          fullWidth
                          defaultValue="Islam"
                        />
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item size={{ xs: 12, md: 6 }}>
                    <Grid container spacing={1}>
                      <Grid item size={{ sm: 6, xs: 12 }}>
                        <Typography variant="body2" fontWeight="bold">
                          <b style={{ color: "red" }}>* </b>Marital Status:
                        </Typography>
                      </Grid>
                      <Grid item size={{ sm: 6, xs: 12 }}>
                        <TextField
                          size="small"
                          fullWidth
                          defaultValue="Unmarried"
                        />
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item size={{ xs: 12, md: 6 }}>
                    <Grid container spacing={1}>
                      <Grid item size={{ sm: 6, xs: 12 }}>
                        <Typography
                          variant="body2"
                          fontWeight="bold"
                          sx={{ mb: 3 }}
                        >
                          <b style={{ color: "red" }}>* </b>Medium of Exam:
                        </Typography>
                      </Grid>
                      <Grid item size={{ sm: 6, xs: 12 }}>
                        <TextField
                          size="small"
                          fullWidth
                          defaultValue="Hindi"
                        />
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item size={{ xs: 12, md: 6 }}>
                    <Grid container spacing={1}>
                      <Grid item size={{ sm: 6, xs: 12 }}>
                        <Typography variant="body2" fontWeight="bold">
                          <b style={{ color: "red" }}>* </b>Student Category:
                        </Typography>
                      </Grid>
                      <Grid item size={{ sm: 6, xs: 12 }}>
                        <TextField
                          size="small"
                          fullWidth
                          defaultValue="[R/P/B/C/E/S]"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Box sx={{ pt: 2, borderTop: "2px solid #ccc", mt: 2 }}>
                  <Typography fontSize="16px" fontWeight="bold" gutterBottom>
                    <b style={{ color: "red" }}>* </b>SUBJECT OFFERED:
                  </Typography>
                  <br />
                  <Grid container spacing={2}>
                    {/* MIL */}
                    <Grid item size={{ xs: 12, md: 2 }}>
                      <Typography align="center" fontWeight="bold">
                        MIL
                      </Typography>
                      <br />
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
                      <br />
                      <TextField
                        variant="outlined"
                        size="small"
                        fullWidth
                        defaultValue="NLH-HINDI"
                      />
                    </Grid>

                    {/* COMPULSORY SUBJECTS */}
                    <Grid
                      item
                      size={{
                        xs: 12,
                        md: 5,
                        borderTop: "2px solid #ccc",
                        mt: 2,
                      }}
                    >
                      <Typography align="center" fontWeight="bold">
                        COMPULSORY SUBJECTS
                      </Typography>
                      <br />
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
                      <br />
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
                <Divider sx={{ my: 3, borderTop: "2px solid #ccc", mt: 3 }} />
                <Typography
                  fontSize="16px"
                  marginBottom="16px"
                  fontWeight="bold"
                  gutterBottom
                >
                  <b style={{ color: "red" }}>* </b>ADDRESS DETAILS:
                </Typography>

                <Grid container spacing={2}>
                  <Grid item size={{ xs: 12, md: 6 }}>
                    <Grid container spacing={1}>
                      <Grid item size={{ sm: 6, xs: 12 }}>
                        <Typography variant="body2" fontWeight="bold">
                          <b style={{ color: "red" }}>* </b>Address:
                        </Typography>
                      </Grid>
                      <Grid item size={{ sm: 6, xs: 12 }}>
                        <TextField
                          size="small"
                          fullWidth
                          defaultValue="GHORA CHOWK PARARIA"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item size={{ xs: 12, md: 6 }}>
                    <Grid container spacing={1}>
                      <Grid item size={{ sm: 6, xs: 12 }}>
                        <Typography variant="body2" fontWeight="bold">
                          <b style={{ color: "red" }}>* </b>District Name:
                        </Typography>
                      </Grid>
                      <Grid item size={{ sm: 6, xs: 12 }}>
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
                      <Grid item size={{ sm: 6, xs: 12 }}>
                        <Typography variant="body2" fontWeight="bold">
                          <b style={{ color: "red" }}>* </b>Town / City Name:
                        </Typography>
                      </Grid>
                      <Grid item size={{ sm: 6, xs: 12 }}>
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
                      <Grid item size={{ sm: 6, xs: 12 }}>
                        <Typography variant="body2" fontWeight="bold">
                          <b style={{ color: "red" }}>* </b>Pincode:
                        </Typography>
                      </Grid>
                      <Grid item size={{ sm: 6, xs: 12 }}>
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

              <Box sx={{ pt: 2, borderTop: "2px solid #ccc", mt: 2 }}>
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
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                    className="card-title"
                  >
                    Note:{" "}
                    <b style={{ color: "red" }}>
                      Do not use any special character of image file name.
                    </b>
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "12px" }} className="card-title"> 
                    1. Upload recent colour photograph only in JPG format, size
                    of Photograph should be between 20 kb to 50 kb.
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "12px" }} className="card-title">
                    2. Upload signature only in JPG format, size of Signature
                    should be between 10 kb to 20 kb.
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "12px" }} className="card-title">
                    3.{" "}
                    <b style={{ color: "red" }}>
                      Please upload photograph in proper size and shape (Head
                      size/Face size: 20mm X 25 mm approx 60% to 70%).
                    </b>
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  pt: 2,
                  textAlign: "center",
                  borderTop: "2px solid #ccc",
                  mt: 2,
                }}
              >
                <Grid container alignItems="center" spacing={1}>
                  {/* Checkbox Section */}
                  <Grid item>
                    <Checkbox
                      checked={checked}
                      onChange={handleCheckboxChange}
                      color="primary"
                    />
                  </Grid>

                  {/* Confirmation Text */}
                  <Grid item>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "red",
                        fontSize: "14px",
                        textAlign: "justify",
                      }}
                      className="card-title"
                    >
                      I confirm that the information given in this form is true,
                      complete, and accurate to the best of my knowledge and
                      belief. In case any of the above information is found to
                      be false, untrue, or misleading, it may lead to the
                      cancellation of my candidature, and B.S.E.B. can take
                      legal action against me.
                    </Typography>
                  </Grid>
                </Grid>

                {/* Apply Button */}
                <Box sx={{ mt: 2 }}>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={handleApplyClick}
                    disabled={!checked} // Button is disabled until checkbox is checked
                    sx={{
                      px: 4,
                    }}
                  >
                    Apply
                  </Button>
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
