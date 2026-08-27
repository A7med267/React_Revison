import "./index.css";
import React, { useEffect, useState, useMemo, useContext } from "react";import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Todo from "./Todo";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { v4 as uuidv4 } from "uuid";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import SnackBar from "./SnacBar";
import { ToastContext } from "./context/ToastContext";



function App() {

const {
  message,
  open,
  severity,
  handleOpenSnackbar,
  handleCloseSnackbar
} = useContext(ToastContext);


const [alignment, setAlignment] = React.useState("all");
const [edit, setEdit] = useState(false);
const [todos, setTodos] = useState([]);
const [isLoaded, setIsLoaded] = useState(false);
const [formInput, setFormInput] = useState({
  id: uuidv4(),
  title: "",
  details: "",
  isCompleted: false,
});

const [openDialog, setOpenDialog] = useState(false);
const [deleteId, setDeleteId] = useState(null);

function handleOpenDeleteDialog(id) {
  setDeleteId(id);
  setOpenDialog(true);
}


function handleConfirmDelete() {
  handleDelete(deleteId);
  setOpenDialog(false);
  setDeleteId(null);
}


useEffect(() => {
  const storageTodos = localStorage.getItem("todos");

  if (storageTodos) {
    setTodos(JSON.parse(storageTodos));
  }
  setIsLoaded(true);
}, []);

useEffect(() => {
  if (isLoaded) {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
}, [todos, isLoaded]);



  function handleClick() {   // Add Click
    if (formInput.title.trim() === "") {
      return alert("Enter Your Task");
    }
    if (edit) {
      const newTodos = todos.map((todo) => {
        if (todo.id === formInput.id) {
          return formInput;
        }
        return todo;
      });
      setTodos(newTodos);
      setEdit(false);

      setFormInput({
        id: uuidv4(),
        title: "",
        details: "",
        isCompleted: false,
      });
    } else {
      const newTodo = {
        id: uuidv4(),
        title: formInput.title,
        details: "",
        isCompleted: false,
      };
      const updatedTodos =[...todos, newTodo]
      setTodos(updatedTodos);

       handleOpenSnackbar("تمت إضافة المهمة بنجاح");
      setFormInput({
        id: uuidv4(),
        title: "",
        details: "",
        isCompleted: false,
      });
    }
  }

  function handleDelete(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
   handleOpenSnackbar("تم حذف المهمة بنجاح", "error");
  }

  function handleEidite(id) {
    const todo = todos.find((todo) => todo.id == id);
    setFormInput(todo);
    setEdit(true);
  }

  function handleCheck(id) {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  }

  const filteredTodos = useMemo(() => {
    console.log("useMemo اتنفذ - بيفلتر الـ todos");
    return todos.filter((todo) => {
      if (alignment === "completed") {
        return todo.isCompleted === true;
      }

      if (alignment === "notCompleted") {
        return todo.isCompleted === false;
      }

      return true;
    });
  }, [todos, alignment]);

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
        minHeight: "100vh",
        padding: 2,
      }}
    >
      <Card
        sx={{
          width: "100%",
          minHeight: 400,
          bgcolor: "#fef7e6",
          textAlign: "center",
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

       <SnackBar
          open={open}
            message={message}
            severity={severity}
          handleClose={handleCloseSnackbar}
        />

        {/* add task  */}
        <Grid
          container
          spacing={2}
          sx={{
            margin: "18px 0",
          }}
        >
          <Grid size={{ xs: 12, sm: 9 }}>

            <TextField
              label="إضافة مهمة"
              variant="outlined"
              fullWidth
              direction="ltr"
              value={formInput.title}
              onChange={(e) =>
                setFormInput({ ...formInput, title: e.target.value })
              }
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 3 }}>
           <Button
            sx={{
              width: "100%",
              height: "50px",
            }}
            variant="contained"
            onClick={handleClick}
          >
            {edit ? "تعديل" : "إضافة"}
          </Button>
          </Grid>
        </Grid>

        {/* Task */}

        {filteredTodos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            handleDelete={handleOpenDeleteDialog}
            handleCheck={handleCheck}
            handleEidite={handleEidite}
          />
        ))}
      </Card>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} dir="rtl">
        <DialogTitle>تأكيد الحذف</DialogTitle>

        <DialogContent>
          <DialogContentText>
            هل أنت متأكد أنك تريد حذف هذه المهمة؟
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>إلغاء</Button>

          <Button
            onClick={handleConfirmDelete}
            color="error"
            variant="contained"
          >
            حذف
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  
  );
}

export default App;
