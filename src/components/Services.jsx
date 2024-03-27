import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";
import Container from "@mui/material/Container";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
function Home() {
  const [data] = useState([
    { services: "Web Design", image: "web.avif"},
    { services: " App Design", image: "app.avif" },
    { services: "UI/UX Design", image: "uiux.avif" },
  ]);
  return (
    <Container>
      <Grid>
        <Box sx={{ mt: 15 }}>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "1.2rem",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            What I Offer
          </Typography>
          <Typography
            sx={{ textAlign: "center", fontSize: "1.9rem", color: "#00abf0" }}
          >
            Services
          </Typography>
        </Box>
        <Grid container>
          <Grid
            container
            spacing={2}
            sx={{
              gap: 10,
              display: "flex",
              mt: 5,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {" "}
          {data.map((data)=>( <Grid item xs={12} lg={3} md={4}>
              {" "}
              <Card
                sx={{
                  backgroundImage: `url(${data.image})`,
                  backgroundSize: "cover",
                  position: "relative",
                  borderRadius: "25px",
                  bgcolor: "#2f285f",
                  height: { lg: "190px", xs: "230px" },
                  padding: "2rem",
                  cursor: "pointer",
                  "&:hover": {
                    transition: "0.3s",
                    transform: "scale(1.02)",
                  },
                  border: "1px solid black",
                }}
              >
                <Paper elevation={24}>
                  {" "}
                  <Card
                    sx={{
                      width: { lg: "415px", xs: "415px", md: "415px" },
                      height: "55px",
                      borderRadius: "25px 2px",

                      bgcolor: "#0d3959",
                      ml: -6,
                      mt: -2.01,

                      border: "1px solid black",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "white",
                        textAlign: "center",
                        fontSize: "1.2rem",
                        mr: { lg: 14, xs: 5 },
                        mt: 1.5,
                      }}
                    >
                      {" "}
                      {data.services}
                    </Typography>
                  </Card>
                </Paper>

                <Typography sx={{ display: "flex", mt: 3 }}>
                  <Typography
                    sx={{
                      mt: { lg: 16, xs: 22 },
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    Learn more...
                  </Typography>
                </Typography>
              </Card>
            </Grid>))}
           
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
