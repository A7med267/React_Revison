import React from "react";
import "./index.css";

import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import Todo from "./Todo";

function App() {
  const [alignment, setAlignment] = React.useState("all");

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: "100vh",
      }}
    >
      <Card
        sx={{
          width: "100%",
          minHeight: 400,
          bgcolor: "#fef7e6",
          padding: 2,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "primary.main",
            fontWeight: "bold",
          }}
        >
          دفتر المهام
        </Typography>

        <Divider sx={{ margin: "10px" }} />

        {/* Filter Buttons */}

        <ToggleButtonGroup 
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="task filter"
        >
          <ToggleButton className="toggelbtn" value="notCompleted">
            غير منجزة
          </ToggleButton>

          <ToggleButton className="toggelbtn" value="completed">
            منجزة
          </ToggleButton>

          <ToggleButton className="toggelbtn" value="all">
            الكل
          </ToggleButton>
        </ToggleButtonGroup>

        {/* Task */}

        <Todo />
        
      </Card>
    </Container>
  );
}

export default App;