import React from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import EditIcon from "@mui/icons-material/Edit";
import "./index.css";





function Todo({todo , handleDelete , handleEidite ,handleCheck}) {
//   const todoJsx = todos.map((todo) => {
    return (
      <Card
        // key={todo.id}
        className="task"
        sx={{
          width: "90%",
          margin: "20px auto",
          bgcolor: "#ece6d3",
          padding: "0 15px",
          direction: "rtl",
        }}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Task Content */}

          <Grid size={{ xs: 8 }}>
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                padding: "10px 0",
              }}
            >
              <Checkbox 
              checked={todo.isCompleted}
              onChange={()=> handleCheck(todo.id)} />

              <Box>
                <Typography
                  sx={{
                    color: "text.primary",
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
                  {todo.title}
                </Typography>

                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: 16,
                  }}
                >
                  {todo.details}
                </Typography>
              </Box>
            </CardContent>
          </Grid>

          {/* Task Actions */}

          <Grid size={{ xs: 4 }}>
            <CardActions
              sx={{
                justifyContent: "flex-start",
                gap: 1,
                padding: 0,
                marginTop: "16px",
              }}
            >
              <Button variant="contained" size="small"
                 onClick={()=>handleEidite(todo.id)}>
                <EditIcon sx={{ width: 20 }} />
              </Button>

              <Button
                variant="contained"
                size="small"
                color="error"
                onClick={()=>handleDelete(todo.id)}
              >
                <DeleteTwoToneIcon sx={{ width: 20 }} />
              </Button>
            </CardActions>
          </Grid>
        </Grid>
      </Card>
    );
//   });

}

export default Todo;