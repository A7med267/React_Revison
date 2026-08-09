import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#22304A",
      light: "#3D4E6E",
      dark: "#141D2E",
      contrastText: "#FAF6EC",
    },
  },

  typography: {
    fontFamily: '"Lalezar", cursive',
  },
});

export default theme;