import React from "react";
import { Avatar, Box, Button, Typography } from "@mui/material";

function StudentFrame(student) {
  const { value, label, section, nickname } = student;
  return (
    <Box sx={{ width: 200, height: 250 }}>
      <img src="url(../../../images/batch/Sajulga.jpg)" alt={value} />
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        {value}
      </Typography>
      <Typography variant="p" sx={{ fontSize: "0.75rem" }}>
        {nickname.length < 30 ? nickname : `${nickname.slice(0, 30)}...`}
      </Typography>
    </Box>
  );
}

export default StudentFrame;
