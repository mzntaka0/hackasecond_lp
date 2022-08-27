import { createTheme, Theme } from "@mui/material";

const mainTheme: Theme = createTheme({
  palette: {
    primary: {
      main: "#F3A800",
      light: "#FDF1D5",
      dark: "#F38200",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#4AB58C",
      light: "#7EE8BC",
      dark: "#00845F",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#EFEFEF",
      paper: "#FFFFFF",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          background: "#FFFFFF",
        },
      },
    },
  },
  typography: {
    fontFamily:
      '"ヒラギノ角ゴシック Pro", "Hiragino Kaku Gothic Pro","游ゴシック体", "Yu Gothic","メイリオ","Meiryo","Osaka","ＭＳ Ｐゴシック","MS PGothic","sans-serif"',
  },
});

export default mainTheme;
