import React from "react";
import { Box, Typography, Button, Stack, Container } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#ffffff", // Pure white background
        position: "relative",
        overflow: "hidden",
        color: "#333", // Dark grey for text
        padding: "0 20px",
        zIndex: 1,
      }}
    >
      {/* Content Section */}
      <Container>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={6}
          alignItems="center"
          justifyContent="space-between"
          sx={{ zIndex: 2 }}
        >
          {/* Left Section - Intro */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                mb: 2,
                letterSpacing: 1.2,
                lineHeight: "1.3",
              }}
            >
              Welcome! I’m{" "}
              <motion.span
                style={{
                  background: "linear-gradient(to right, #333, #666)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                Shivam Rawat
              </motion.span>
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 3,
                color: "#666", // Light grey subtitle
              }}
            >
              Software Engineer at LTIMindtree
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#555",
                fontSize: "1.2rem",
                lineHeight: "1.8",
                maxWidth: 600,
                mb: 4,
              }}
            >
              I craft elegant solutions and delightful user experiences with a
              passion for modern web design and functionality. Let’s innovate
              and create something amazing together.
            </Typography>
            <Stack direction="row" spacing={2}>
              <Link to="about" smooth={true} duration={500}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      background: "#333", // Dark button
                      color: "white",
                      fontWeight: "bold",
                      px: 3,
                      py: 1.5,
                      borderRadius: "30px",
                      boxShadow: "0 4px 12px rgba(51, 51, 51, 0.2)",
                      "&:hover": {
                        background: "#555",
                      },
                    }}
                  >
                    About Me
                  </Button>
                </motion.div>
              </Link>
              <Link to="tech-stack" smooth={true} duration={500}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      background: "#555", // Medium grey button
                      color: "white",
                      fontWeight: "bold",
                      px: 3,
                      py: 1.5,
                      borderRadius: "30px",
                      boxShadow: "0 4px 12px rgba(85, 85, 85, 0.2)",
                      "&:hover": {
                        background: "#666",
                      },
                    }}
                  >
                    Tech Stack
                  </Button>
                </motion.div>
              </Link>
              <Link to="projects" smooth={true} duration={500}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      borderColor: "#333",
                      color: "#333",
                      fontWeight: "bold",
                      px: 3,
                      py: 1.5,
                      borderRadius: "30px",
                      "&:hover": {
                        borderColor: "#555",
                        color: "#555",
                      },
                    }}
                  >
                    Projects
                  </Button>
                </motion.div>
              </Link>
            </Stack>
          </motion.div>

          {/* Right Section - Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Box
                sx={{
                  width: "280px",
                  height: "280px",
                  background: "#f9f9f9", // Light grey profile background
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                  overflow: "hidden",
                }}
              >
                {/* Cool Animated Ring Around the Profile Image */}
                <Box
                  sx={{
                    position: "absolute",
                    width: "320px",
                    height: "320px",
                    borderRadius: "50%",
                    border: "8px solid transparent",
                    background:
                      "conic-gradient(from 180deg, #ff6f61, #ffd166, #ff6f61)",
                    animation: "pulse 2s infinite ease-in-out",
                    zIndex: 1,
                  }}
                />
                <Box
                  component="img"
                  src="me.jpg" // Replace with your image URL
                  alt="Shivam Rawat"
                  sx={{
                    width: "90%",
                    height: "90%",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "4px solid white", // Clean white border
                    zIndex: 2,
                  }}
                />
              </Box>
            </motion.div>
          </motion.div>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
