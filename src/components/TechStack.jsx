import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const techStackData = [
  {
    title: "Development",
    description: [
      "Frontend (MERN and NEXT.JS)",
      "Backend (PostgreSQL and MongoDB)",
    ],
    image: "/web.png",
    alt: "weblogo",
  },
  {
    title: "Skills",
    description: [
      "C++",
      "MongoDB",
      "Java",
      "TypeScript",
      "Python",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "JavaScript",
      "React.js",
      "Next.js",
      "PostgreSQL",
      "Node.js",
      "Express.js",
    ],
    image: "/Skills.png",
    alt: "Skills",
  },
  {
    title: "Others",
    description: [
      "SQL",
      "NoSQL",
      "Prisma",
      "Hono",
      "NPM",
      "Adobe XD",
      "Terraform",
      "AWS services",
    ],
    image: "/other.png",
    alt: "Other",
  },
  {
    title: "Core Subjects",
    description: [
      "Data Structures",
      "Object-Oriented Programming",
      "Operating System",
      "Database Management System",
      "Computer Networks",
    ],
    image: "/subject.jpg",
    alt: "core",
  },
];

const TechStack = () => {
  return (
    <Box
      id="tech-stack"
      sx={{
        py: 8,
        px: 3,
        background: "linear-gradient(to bottom, #e3f2fd, #e8eaf6)", // Light blue gradient background
        borderRadius: 2,
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: 5,
          color: "#1565c0", // Blue color for title
          textTransform: "uppercase",
        }}
      >
        Technical Expertise 🌟
      </Typography>

      <Box
        sx={{
          display: "grid",
          gap: 4,
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          },
        }}
      >
        {techStackData.map((item, index) => (
          <Card
            key={index}
            sx={{
              height: "100%",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Soft shadow
              borderRadius: 4,
              p: 3,
              background: "white", // Clean white card
              position: "relative",
              overflow: "hidden",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            {/* Circular Background Accent */}
            <Box
              sx={{
                position: "absolute",
                top: "-30px",
                right: "-30px",
                width: "140px",
                height: "140px",
                borderRadius: "50%",
                background: "rgba(21, 101, 192, 0.1)", // Light blue accent
                zIndex: -1,
              }}
            />
            <CardMedia
              component="img"
              src={item.image}
              alt={item.alt}
              sx={{
                width: 80,
                height: 80,
                margin: "0 auto",
                borderRadius: "50%",
                border: "2px solid #e0e0e0", // Subtle border for image
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            />
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  mt: 2,
                  mb: 3,
                  color: "#1e88e5", // Blue accent for headings
                  textTransform: "uppercase",
                }}
              >
                {item.title}
              </Typography>
              <List
                dense
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  textAlign: "left",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {item.description.map((desc, idx) => (
                  <ListItem
                    key={idx}
                    sx={{
                      p: 0,
                      "&:before": {
                        content: '"•"', // Bullet marker
                        color: "#42a5f5", // Light blue accent for marker
                        fontWeight: "bold",
                        display: "inline-block",
                        marginRight: "8px",
                      },
                    }}
                  >
                    <ListItemText
                      primary={desc}
                      primaryTypographyProps={{
                        variant: "body2",
                        color: "text.secondary",
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default TechStack;
