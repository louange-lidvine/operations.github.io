import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme.js"
import { CssBaseline } from "@mui/material";
// import './index.css'
// import { CssBaseline, createTheme } from "@mui/material";
// import { ThemeProvider } from "@emotion/react";
// import { colors } from "@mui/material";
// const theme = createTheme({
//     palette: {
//         primary: {
//             main: "#556cd6",
//         },
//         secondary: {
//             main: "#19857b",
//         },
//         error: {
//             main: colors.red.A400,
//         },
//     },
// });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider theme={theme} >
            <CssBaseline />
            <App />
        
            </ThemeProvider>
      
    </React.StrictMode>
);
