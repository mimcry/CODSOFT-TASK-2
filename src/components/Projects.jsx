import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,Link,Button
} from "@mui/material";
import Container from "@mui/material/Container";

function Home() {
  const [data] = useState([
    {
      image: "hotel.png",
      type: "Hotel Website",
      description:
        "simple hotel website about booking a room and ordering a food.",
        link:"https://github.com/mimcry/Personal_website_using_Material_UI-and-React_Js.git"
       
    },
    {
      image: "personal.png",
      type: "Personal portfolio",
      description:
        "Personal portfolio where you can show your skills, projects and the field you're working on.",
        link:"https://github.com/mimcry/Personal_website_using_Material_UI-and-React_Js.git"
    }, {
      image: "foodie.png",
      type: "Foodie",
      description:
        "Foodie is on of the food ordering website from where you can order your food.",
        link:"https://github.com/imnabid/Foodie-a-food-delivery-website.git"
       
    },
    {
      image: "swarmnet.png",
      type: "Swarmnet",
      description:
        "Swarmnet is P2P file sharing system made with the help of Rust and React JS",
        link:"https://github.com/imnabid/SwarmNet-peer-to-peer-file-sharing.git"
       
    },
  ]);
  return (<div id="Projects">
    <Container>
      <Box sx={{ mt: 15 }}>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "1.2rem",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          What I have done
        </Typography>
        <Typography
          sx={{ textAlign: "center", fontSize: "1.9rem", color: "#00abf0" }}
        >
          My <span style={{ color: "white" }}>Projects 📟</span>
        </Typography>

        <Grid container spacing={4}>
          {" "}
          {data.map((data) => (
           
            <Grid item lg={3} xs={12} md={6}>
              <Paper
                elevation={24}
                sx={{ bgcolor: "white", borderRadius: "35px", maxWidth: 345 }}
              > 
                <Card sx={{ maxWidth: 345, borderRadius: "15px", mt: 6 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image={data.image}
                      alt="hotel website"
                    />
                    <CardContent sx={{ bgcolor: "#0d3959" }}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        color="white"
                      >
                        {data.type}
                      </Typography>
                      <Typography variant="body2" color="gray">
                        {data.description}
                      </Typography>
              <Box sx={{display:"flex",mb:1}}>
                <Link href={data.link}>  
               <Button
              sx={{
                mt: {lg:"20px",md:"20px",xs:"20px"},
                backgroundColor: "#078ae8",
                fontSize: "1rem",
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
              ml:{md:"50px",lg:"0px",xs:"50px"}
              }}
            >
             Github
            </Button></Link>  
            <Link >
            <Button
              sx={{
                mt: {lg:"20px",md:"20px",xs:"20px"},
                backgroundColor: "white",
                fontSize: "1rem",
                borderRadius: "15px",
                border: "2px solid gray",
                color: "black",
                cursor: "pointer",
                marginLeft: "10px",
                padding: "5px 10px 5px",
                "&:hover": {
                 color:"white",
                  opacity: [0.9, 0.8, 1.7],
                  transform: "scale(1.05)",
                  transition: "0.3s",
                },
              
              }}
            >
            Live Demo
            </Button></Link>   
            </Box>
                    </CardContent>
                    
                  </CardActionArea>
                 
                </Card>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Grid container></Grid>
    </Container></div>
  );
}

export default Home;
