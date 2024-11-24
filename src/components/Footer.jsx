import React from "react";
import { Box, Typography, Link, IconButton, Divider } from "@mui/material";
import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#333", // Darker, more professional background color
        color: "white",
        py: 4,
        px: 2,
        textAlign: "center",
        position: "relative",
      }}
    >
      {/* Divider */}
      <Divider sx={{ marginBottom: 3, borderColor: "white" }} />

      {/* Social Links Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 3, // Spacing between the social icons
          mb: 3,
        }}
      >
        {/* LinkedIn */}
        <IconButton
          component={Link}
          href="https://www.linkedin.com/in/shivam-rawat-180354329/"
          target="_blank"
          color="inherit"
          sx={{
            "&:hover": {
              color: "#0A66C2",
              transform: "scale(1.1)",
              transition: "all 0.3s",
            },
          }}
        >
          <LinkedIn fontSize="large" />
        </IconButton>

        {/* GitHub */}
        <IconButton
          component={Link}
          href="https://github.com/ShivamRawat6397"
          target="_blank"
          color="inherit"
          sx={{
            "&:hover": {
              color: "#6e5494",
              transform: "scale(1.1)",
              transition: "all 0.3s",
            },
          }}
        >
          <GitHub fontSize="large" />
        </IconButton>

        {/* Instagram */}
        <IconButton
          component={Link}
          href="https://www.instagram.com/shivamrawat524/"
          target="_blank"
          color="inherit"
          sx={{
            "&:hover": {
              color: "#C13584",
              transform: "scale(1.1)",
              transition: "all 0.3s",
            },
          }}
        >
          <Instagram fontSize="large" />
        </IconButton>
      </Box>

      {/* Footer Text */}
      <Typography variant="body2" sx={{ mt: 3 }}>
        &copy; {new Date().getFullYear()} Shivam Rawat. All Rights Reserved.
      </Typography>

      {/* Back to Top Button */}
      <Link
        href="#top"
        sx={{
          position: "absolute",
          bottom: 16,
          right: 16,
          backgroundColor: "primary.main",
          borderRadius: "50%",
          padding: 2,
          color: "white",
          "&:hover": {
            backgroundColor: "primary.dark",
            transform: "scale(1.1)",
            transition: "all 0.3s",
          },
        }}
      >
        &#8593; {/* Up Arrow Symbol */}
      </Link>
    </Box>
  );
};

export default Footer;
