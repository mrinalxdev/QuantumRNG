import { useMemo } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material"
import Navbar from "./scenes/navbar";
import Dashboard from "./scenes/dashboard";


function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <>
      <div className="app">
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
              <Navbar />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/predictions" element={<div>Predictions Page</div>} />
                </Routes>
            </Box>
          </ThemeProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
