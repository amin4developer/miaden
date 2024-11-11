import React from "react";
import {
  Box,
  Grid,
  Checkbox,
  Typography,
  Stack,
  TextField,
  FormControl,
  FormControlLabel,
  Link,
  Button,
  Divider,
} from "@mui/material";

const Login = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(90deg, #b6d2e3 20%, #5157f0 90%)",
              height: { xs: 250, sm: 600, md: 650 },
              color: "white",
            }}
          >
            <Box sx={{ maxWidth: 300, textAlign: "left" }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "600",
                  fontFamily: "Poppins",
                  fontSize: { xs: 15, md:25 },
                }}
              >
                MaidenCube
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "600",
                  fontFamily: "Poppins",
                  mt: 1,
                  fontSize: { xs: 25, md:35 },
                }}
              >
                Your gateway
                <br /> to progress.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around", 
              backgroundColor: "white",
              height: { xs: 550, sm: 600, md: 620 },
            }}
          >
            <Box sx={{ textAlign: "left" }}>
              <Typography
                variant="h5"
                gutterBottum
                sx={{
                  color: "primary.main",
                  fontWeight: "900",
                  fontFamily: "Poppins",
                }}
              >
                MaidenCube
              </Typography>
              <br />
              <Typography
                variant="p"
                sx={{ fontWeight: "600", fontFamily: "Poppins", mt: 1 }}
              >
                Welcome Back
              </Typography>
              <Stack>
                <Typography variant="p" sx={{ fontSize: "13px" }}>
                  It is a long established fact that a reader will be distracted
                  by the
                </Typography>
                <Typography
                  variant="p"
                  sx={{ marginBottom: "40px", fontSize: "13px" }}
                >
                  readable content of a page when looking at its layout.
                </Typography>
                <FormControl>
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    sx={{ paddingBottom: "10px" }}
                  />
                  <TextField
                    label="Password"
                    variant="outlined"
                    sx={{ paddingBottom: "10px" }}
                    fullWidth
                  />

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingBottom: "20px",
                    }}
                  >
                    <FormControlLabel
                      value="yes"
                      control={<Checkbox />}
                      label="Keep Me Logged In"
                    />
                    <Link
                      href="#"
                      variant="body2"
                      color="primary.main"
                      sx={{
                        textDecoration: "none",
                      }}
                    >
                      Forgott Password
                    </Link>
                  </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{
                      height: 35,
                      borderRadius: 2,
                      textTransform: "none",
                      fontWeight: "bold",
                      fontFamily: "Poppins",
                    }}
                  >
                    LOG IN
                  </Button>
                </FormControl>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    paddingTop: "10px",
                    marginBottom: "50px",
                  }}
                >
                  <Typography variant="body2">
                    Don't have an account?
                  </Typography>
                  <Link
                    sx={{
                      textDecoration: "none",
                    }}
                    variant="body2"
                  >
                    Create Account
                  </Link>
                </Box>
              </Stack>
            </Box>
          </Box>
          <Divider/>
          <Box
                sx={{
                  display: "flex",
                  justifyContent:'space-between',
                  alignItems: "center",
                  flexDirection: "row",
                  padding:'10px 20px 0 20px '
                }}
              >
                <Typography variant="body2" sx={{fontSize:'10px'}}>
                  Copyright @ 2024 Maiden Cube Pvt Ltd.All rights reserved.
                </Typography>
                <Box sx={{
                  display: "flex",
                  justifyContent:'space-between',
                  alignItems: "center",
                  flexDirection: "row",
                  gap:'20px'
                }} >
                  <Typography variant="body2" sx={{fontSize:'10px'}}>
                    Privacy Policy
                  </Typography>
                  <Typography variant="body2" sx={{fontSize:'10px'}}>
                    Terms & Conditions
                  </Typography>
                </Box>
              </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
