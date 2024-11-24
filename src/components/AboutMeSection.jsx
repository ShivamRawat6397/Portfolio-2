import React, { forwardRef } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Link,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { styled } from "@mui/system";

// Custom theme with vibrant colors
const theme = createTheme({
  palette: {
    primary: {
      main: "#4CAF50", // Vibrant green
    },
    secondary: {
      main: "#FF5722", // Bright orange
    },
    background: {
      default: "#F9FAFC", // Light background color
    },
    text: {
      primary: "#212121", // Dark text color
      secondary: "#757575", // Subtle gray text
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h4: {
      fontWeight: 700,
    },
    body1: {
      lineHeight: 1.8,
    },
  },
  shadows: [
    "none",
    "0px 1px 3px rgba(0,0,0,0.2)",
    "0px 3px 6px rgba(0,0,0,0.3)",
    ...Array(23).fill("0px 5px 20px rgba(0,0,0,0.2)"),
  ],
});

// Styled hover card with glowing effect
const HoverCard = styled(Card)(({ theme }) => ({
  transition: "transform 0.4s ease, box-shadow 0.4s ease",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
  },
}));

// Redesigned AboutMeSection with emojis
const AboutMeSection = forwardRef((props, ref) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        id="about"
        ref={ref}
        sx={{
          py: 8,
          px: 3,
          background: "linear-gradient(to bottom, #ffffff, #e8f5e9)",
        }}
      >
        {/* Overview Section */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h4"
            sx={{
              color: "primary.main",
              mb: 2,
              textTransform: "uppercase",
            }}
          >
            About Me ✨
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              maxWidth: "700px",
              mx: "auto",
              mb: 4,
              fontSize: "1.1rem",
            }}
          >
            Hello! I'm <b>Shivam Rawat</b> 👨‍💻, a passionate{" "}
            <b>Software Engineer</b> 🚀 at <b>LTIMindtree</b>. With a strong
            academic foundation and expertise in cutting-edge technologies, I
            specialize in building modern, user-friendly applications. 💡
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              maxWidth: "700px",
              mx: "auto",
              fontSize: "1.1rem",
            }}
          >
            My journey includes mastering cloud computing ☁️ on AWS, excelling
            in data structures 🧩, and creating solutions that combine design 🎨
            with technology. When I’m not coding, I enjoy brainstorming new
            ideas and exploring innovative tech trends. 🌟
          </Typography>
        </Box>

        {/* Resume Section */}
        <Box sx={{ textAlign: "center", mt: 8 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "secondary.main",
              mb: 3,
            }}
          >
            My Resume 📄
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              maxWidth: "600px",
              mx: "auto",
              mb: 4,
              fontSize: "1.1rem",
            }}
          >
            Curious about my professional journey? Take a closer look at my
            resume for an in-depth view of my work experience, education, and
            technical expertise. 👇
          </Typography>
          <Link
            href="/Shivam_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
          >
            <HoverCard
              sx={{
                maxWidth: 250,
                mx: "auto",
                boxShadow: 3,
                borderRadius: 3,
                p: 2,
                background: "linear-gradient(to bottom, #ffffff, #fbe9e7)",
              }}
            >
              <CardMedia
                component="img"
                image="/Resume.png"
                alt="Resume"
                sx={{
                  width: "100%",
                  borderRadius: 2,
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                }}
              />
              <CardContent
                sx={{
                  textAlign: "center",
                  p: 1,
                  background: "#fff8e1",
                  borderRadius: 2,
                }}
              >
                <Typography
                  variant="body2"
                  color="text.primary"
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  Click to View Resume
                </Typography>
              </CardContent>
            </HoverCard>
          </Link>
        </Box>
      </Box>
    </ThemeProvider>
  );
});

export default AboutMeSection;
