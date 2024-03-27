import React from "react";
import styled from "@emotion/styled";
import {
  Grid,
  Typography,
  Paper,
  Box,
  Button,
  IconButton,
  Link,
} from "@mui/material";
import Container from "@mui/material/Container";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { motion } from "framer-motion"
export default function Aboutus() {
  const downloadFile = () => {
    const cvFileName = 'cv.pdf'; // Specify the name of your CV file.
    const cvFileUrl = process.env.PUBLIC_URL + '/' + cvFileName;

    // Create an anchor element to trigger the download.
    const anchor = document.createElement('a');
    anchor.href = cvFileUrl;
    anchor.download = cvFileUrl;

    // Trigger a click event on the anchor element to initiate the download.
    anchor.click();
  };


  return (
    <div id="Home">
      <React.Fragment>
        <Container>
        
          <Box sx={{ display: "flex", marginTop: "100px" }}>
            <Grid container spacing={2} sx={{ marginTop: "auto" }}>
              <Grid item xs={12} lg={6} md={6}>
                 <motion.div initial={{opacity:1, scale:-0.5,x:-1000}} animate={{opacity:1, scale:1,x:0}}
        transition={{type:'spring',duration:1}}>
                <Typography
                  sx={{
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    mt: { lg: "60px", xs: "-50px" },
                    color: "white",
                  }}
                >
                  Hi👋, I'm Salon Gautam
                </Typography>
                <Typography id="typing"
                  sx={{
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    color: "#00abf0",

                  }}
                >
                 Web devloper
                </Typography></motion.div>
                <Typography sx={{ mt: 2, color: "gray" }}>
                  I'm a student with a passion for Web development. I'm
                  dedicated to creating captivating web experiences by merging
                  design aesthetics with technical skills. Through continuous
                  learning and innovative projects, I'm committed to refining my
                  abilities and crafting user-friendly digital interfaces that
                  leave a lasting impact.
                </Typography>
                <Button
                onClick={downloadFile}
                  sx={{
                    mt: "30px",
                    backgroundColor: "#078ae8",
                    fontSize: "1.2rem",
                    borderRadius: "35px",
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
                  }}
                >
                   Download cv
                </Button>

                <br />
                <motion.div initial={{opacity:1, scale:0.5,x:200}} animate={{opacity:1, scale:1,x:0}}
        transition={{
          ease: "linear",
          duration: 0.5,
          x: { duration: 1 }
        }}>
                <Link href="https://www.facebook.com/saalon.gautam">
                  <IconButton>
                    <Paper
                      elevation={24}
                      sx={{
                        borderRadius: "200px",
                        width: "40px",
                        height: "40px",
                        mt: 4,
                        bgcolor: "transparent",
                        ml: "0px",
                        "&:hover": {
                          backgroundColor: "black",
                          color: "white",
                          borderRadius: "200px",
                          opacity: [0.9, 0.8, 1.7],
                          transform: "scale(1.05)",
                          transition: "0.3s",
                        },
                      }}
                    >
                      <FacebookOutlinedIcon
                        sx={{
                          width: "40px",
                          height: "40px",
                          color: "#00abf0",
                          "&:hover": {
                            backgroundColor: "black",
                            color: "white",
                            borderRadius: "200px",
                            opacity: [0.9, 0.8, 1.7],
                            transform: "scale(1.05)",
                            transition: "0.3s",
                          },
                        }}
                      ></FacebookOutlinedIcon>
                    </Paper>
                  </IconButton>
                </Link>
                <Link href="https://twitter.com/">
                  <IconButton>
                    <Paper
                      elevation={24}
                      sx={{
                        borderRadius: "200px",
                        width: "40px",
                        height: "40px",
                        mt: 4,
                        bgcolor: "transparent",
                        ml: "10px",
                      }}
                    >
                      <TwitterIcon
                        sx={{
                          width: "40px",
                          height: "40px",
                          color: "#00abf0",
                          "&:hover": {
                            backgroundColor: "black",
                            color: "white",
                            borderRadius: "200px",
                            opacity: [0.9, 0.8, 1.7],
                            transform: "scale(1.05)",
                            transition: "0.3s",
                          },
                        }}
                      ></TwitterIcon>
                    </Paper>
                  </IconButton>
                </Link>
                <Link href="https://www.instagram.com/salongautam/">
                  <IconButton>
                    <Paper
                      elevation={24}
                      sx={{
                        borderRadius: "10px",
                        width: "40px",
                        height: "40px",
                        mt: 4,
                        bgcolor: "transparent",
                        ml: "10px",
                      }}
                    >
                      <InstagramIcon
                        sx={{
                          width: "40px",
                          height: "40px",
                          color: "#00abf0",
                          "&:hover": {
                            backgroundColor: "transparent",
                            color: "white",
                            borderRadius: "15px",
                            opacity: [0.9, 0.8, 1.7],
                            transform: "scale(1.05)",
                            transition: "0.3s",
                          },
                        }}
                      ></InstagramIcon>
                    </Paper>
                  </IconButton>
                </Link></motion.div>
              </Grid>
              <Grid item xs={12} lg={6} md={6}>
              <motion.div initial={{opacity:1, scale:-0.5,x:500}} animate={{opacity:1, scale:1,x:0}}
        transition={{type:'spring',duration:1}}>
                <Box
                  component="img"
                  src="home.png"
                  sx={{
                    width: "100%",
                    height: "100%",
                  }}
                /></motion.div>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </React.Fragment>
    </div>
  );
}
