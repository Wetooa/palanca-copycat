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
  const [section, setSection] = useState("all");

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
          marginTop: "20px",
          marginBottom: "10px",
          textAlign: "center",
          maxWidth: "770px",
          display: "flex",
          flexDirection: "column",
          rowGap: "15px",
          justifyContent: "center",
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: "bold" }}>
          Dear kōhai,
        </Typography>
        <Typography variant="p">
          As our journey in Pisay comes to an end, new frontiers await us in the
          next chapter of our lives. Feel free to send us messages of support
          for us to take in our future endeavors.
        </Typography>
        <Typography variant="p">
          “Lilipad at lalaban, gagawa ng kasaysayan”
        </Typography>
        <Typography variant="p">-Gayang Mingor</Typography>
      </Container>
      <Box
        sx={{
          display: "flex",
          margin: "20px 20px",
          justifyContent: "center",
        }}
      >
        <TextField
          type="text"
          sx={{ flexGrow: 2 }}
          placeholder="sige kinsa man..."
        />
        <Select
          label="Section"
          sx={{ flexGrow: 1 }}
          value={section}
          onChange={(e) => setSection(e.target.value)}
        >
          <MenuItem value="All">All Section</MenuItem>
          <MenuItem value="A">Block A</MenuItem>
          <MenuItem value="B">Block B</MenuItem>
          <MenuItem value="C">Block C</MenuItem>
        </Select>
      </Box>
      <Box sx={{ paddingTop: 10, alignContent: "center" }}>
        <Grid container justifyContent={"space-around"}>
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
