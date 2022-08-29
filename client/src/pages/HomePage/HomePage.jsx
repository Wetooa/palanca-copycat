import React from "react";
import { useState } from "react";
import allStudents from "../../constants/students";
import {
  Grid,
  Typography,
  Box,
  TextField,
  MenuItem,
  Select,
} from "@mui/material";
import StudentFrame from "./components/StudentFrame";
import { Container } from "@mui/system";

function HomePage() {
  const [filteredStudents, setFilteredStudents] = useState(allStudents);

  return (
    <Box
      sx={{
        textAlign: "center",
        width: "90vw",
        margin: "auto",
        marginTop: "20px",
      }}
    >
      <Typography sx={{ textAlign: "end" }}>Sign In via Google</Typography>
      <Container
        sx={{
          textAlign: "center",
          maxWidth: "770px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h2">Dear kōhai,</Typography>
        <Typography>
          As our journey in Pisay comes to an end, new frontiers await us in the
          next chapter of our lives. Feel free to send us messages of support
          for us to take in our future endeavors.
        </Typography>
        <Typography>“Lilipad at lalaban, gagawa ng kasaysayan”</Typography>
        <Typography>-Gayang Mingor</Typography>
      </Container>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <TextField type="text" />
        <Select label="Section">
          <MenuItem>Block A</MenuItem>
          <MenuItem>Block B</MenuItem>
          <MenuItem>Block C</MenuItem>
        </Select>
      </Box>
      <Box sx={{ paddingTop: 10, alignContent: "center" }}>
        <Grid
          container
          columns={{ sm: 2, md: 3, lg: 4 }}
          spacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {filteredStudents.map((student, index) => {
            return (
              <Grid item>
                <StudentFrame key={index} {...student} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}

export default HomePage;
