import React, { forwardRef } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";

const projects = [
  {
    title: "BlogHub",
    description:
      "A modern blogging platform built with a robust backend and interactive frontend. Explore scalable blogging with BlogHub.",
    link: "https://github.com/ShivamRawat6397/BlogHub",
    image: "/BlogHub.png",
  },
  {
    title: "CashPal",
    description:
      "A basic Paytm clone developed using the MERN stack. Includes user authentication and transaction features.",
    link: "https://github.com/ShivamRawat6397/CashPal",
    image: "/CashPal.png",
  },
  {
    title: "Youtube-Clone",
    description:
      "A YouTube clone built using React.js and YouTube Data API. Includes video browsing, searching, and uploading features.",
    link: "https://github.com/ShivamRawat6397/Youtube-Clone",
    image: "/YoutubeClone.png",
  },
  {
    title: "PassGuard",
    description:
      "A secure password manager built with React and Express.js. Manage your sensitive information safely.",
    link: "https://github.com/ShivamRawat6397/PassGuard",
    image: "/PassGuard.png",
  },
  {
    title: "Multiple-Disease-Prediction",
    description:
      "Predict diseases using ML models and Streamlit. Inputs health parameters to predict conditions like diabetes and heart disease.",
    link: "https://github.com/ShivamRawat6397/Multiple-Disease-Prediction-",
    image: "/MultipleDisease.png",
  },
];

const Projects = forwardRef((props, ref) => {
  return (
    <Box
      ref={ref}
      id="projects"
      sx={{
        background: "linear-gradient(to bottom, #f8f9fa, #e9ecef)", // Clean light gradient
        py: 10,
        px: 4,
        color: "#212529", // Neutral dark color for text
        textAlign: "center",
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h3"
        component="h2"
        sx={{
          fontWeight: "700",
          mb: 6,
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          color: "#495057", // Subtle dark gray
        }}
      >
        My Projects 💻
      </Typography>
      {/* Grid Container */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          gap: 6,
        }}
      >
        {projects.map((project, index) => (
          <Card
            key={index}
            sx={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "12px",
              background: "white", // Clean white background
              boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)", // Subtle shadow
              color: "#212529", // Neutral text color
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            {/* Image Section */}
            <Box
              sx={{
                height: "180px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <CardMedia
                component="img"
                image={project.image}
                alt={project.title}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.4s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
            </Box>
            {/* Content Section */}
            <CardContent sx={{ p: 3, textAlign: "left" }}>
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  fontWeight: "bold",
                  mb: 1,
                  color: "#343a40", // Dark gray for title
                }}
              >
                {project.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  mb: 2,
                  lineHeight: 1.6,
                  color: "#6c757d", // Muted gray for description
                }}
              >
                {project.description}
              </Typography>
              <Button
                variant="contained"
                href={project.link}
                target="_blank"
                sx={{
                  mt: 1,
                  background: "#007bff", // Subtle blue accent
                  color: "white",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  "&:hover": {
                    background: "#0056b3", // Slightly darker blue on hover
                  },
                }}
              >
                View on GitHub
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
});

export default Projects;
