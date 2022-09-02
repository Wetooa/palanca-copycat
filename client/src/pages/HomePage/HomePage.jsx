import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import allStudents from "../../constants/students";
import {
  Grid,
  Typography,
  Box,
  TextField,
  MenuItem,
  Select,
  Autocomplete,
} from "@mui/material";
import StudentFrame from "./components/StudentFrame";
import { Container } from "@mui/system";

function HomePage() {
  const [filteredStudents, setFilteredStudents] = useState(allStudents);
  const [section, setSection] = useState("all");
  const [studentSearch, setStudentSearch] = useState("");

  const handleTest = async () => {
    try {
      const { data } = await axios.get("/api/v1/palanca");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button onClick={handleTest}>testing</button>
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
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            Dear kōhai,
          </Typography>
          <Typography variant="p">
            As our journey in Pisay comes to an end, new frontiers await us in
            the next chapter of our lives. Feel free to send us messages of
            support for us to take in our future endeavors.
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
          <Autocomplete
            sx={{ flexGrow: 2 }}
            limitTags={10}
            options={filteredStudents}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Student"
                placeholder="sige kinsa man"
              />
            )}
          />
          <Select
            label="Section"
            sx={{ flexGrow: 1 }}
            defaultValue={"all"}
            value={section}
            onChange={(e) => setSection(e.target.value)}
          >
            <MenuItem value="all">All Section</MenuItem>
            <MenuItem value="a">Block A</MenuItem>
            <MenuItem value="b">Block B</MenuItem>
            <MenuItem value="c">Block C</MenuItem>
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
    </>
  );
}

export default HomePage;
