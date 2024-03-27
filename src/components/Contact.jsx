import React, { useState } from "react";
import Container from "@mui/material/Container";
import { Box, Typography, Grid, Card, Button } from "@mui/material";
import TextField from "@mui/material/TextField";

const Contact = () => {
  
  return (
    <Container>
      <div id="Contact Me">
        <React.Fragment>
          <Typography
            sx={{
              color: "white",
              textAlign: "center",
              fontSize: "1.9rem",
              mt:15
             
            }}
          >
            Contact📲  <span style={{color:"#00abf0"}}>Me</span>
          </Typography>

          <Box
            sx={{
              width: {lg:"600px",xs:"345px",md:"600px"},
              height: {lg:"450px",sx:"600px"},
              ml: { lg: 35 ,md:25},
              bgcolor: "white",
              borderRadius: "35px",
              mt: 4,
            }}
          >
            {" "}
            <Box sx={{ padding: "50px 60px 20px" }}>
              {" "}
              <Grid container spacing={2}>
                <Grid item lg={6} xs={12} md={6}>
                  <TextField
                    id="outlined-basic"
                    label="Full Name"
                    variant="outlined"
                  />
                </Grid>
                <Grid item lg={6} xs={12} md={6}>
                  <TextField
                    id="outlined-basic"
                    label="Email Adress"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2} sx={{ mt:{lg:2,xs:0}}}>
                <Grid item lg={6} xs={12} md={6}>
                  <TextField
                    id="outlined-basic"
                    label="Mobile Number"
                    variant="outlined"
                  />
                </Grid>
                <Grid item lg={6} xs={12} md={6}>
                  <TextField
                    sx={{ color: "white" }}
                    id="outlined-basic"
                    label="Email Subject"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Grid>
                <Grid item lg={12}>
                  <TextField
                    sx={{ mt:{lg:3,xs:2} }}
                    label="Your Message"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Box>
            <Button
              sx={{
                mt: {lg:"20px"},
                backgroundColor: "#078ae8",
                fontSize: "1.2rem",
                borderRadius: "15px",
                border: "2px solid gray",
                color: "white",
                cursor: "pointer",
                marginLeft: "10px",
                padding: "5px 15px 5px",
                "&:hover": {
                  backgroundColor: "white",
                  color: "black",
                  opacity: [0.9, 0.8, 1.7],
                  transform: "scale(1.05)",
                  transition: "0.3s",
                },
                ml: { lg: 25 ,xs:11.5,md:25},
                mb: 4,
              }}
            >
              Send Message
            </Button>
          </Box>
        </React.Fragment>
      </div>
    </Container>
  );
};

export default Contact;
