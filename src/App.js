import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import "@fontsource/manrope"; // Import Manrope font
import "@fontsource/bebas-neue"; // Import Bebas Neue font
import "@fontsource/inter"; // Import Inter font
import "@fontsource/roboto"; // Import Roboto font

function App() {
  let theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#d3e97a",
      },
      secondary: {
        main: "#c7c7c7",
      },
    },
    typography: {
      fontFamily: 'Manrope',
      h1: {
        fontFamily: 'Bebas Neue',
      },
      h2: {
        fontFamily: 'Bebas Neue',
      },
      h3: {
        fontFamily: 'Bebas Neue',
      },
      h4: {
        fontFamily: 'Bebas Neue',
      },
      h5: {
        fontFamily: 'Bebas Neue',
      },
      h6: {
        fontFamily: 'Bebas Neue',
      },
      button: {
        fontFamily: '"Roboto", "Inter"',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box className="App">
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
