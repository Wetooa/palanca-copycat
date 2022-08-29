import React from "react";
import { Box, Button, Typography } from "@mui/material";

function StudentFrame(student) {
  const { value, label, section, nickname } = student;
  return (
    <Box sx={{ width: 200, height: 250 }}>
      <Typography>{value}</Typography>
      <Button variant="contained">Send message</Button>
    </Box>
  );
}

export default StudentFrame;
