import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import "@fontsource/manrope";
import "@fontsource/bebas-neue";
import "@fontsource/inter";
import "@fontsource/roboto";
import About from "./pages/About";
import ReactGA from 'react-ga4';
import React, { useEffect } from 'react';

const MEASUREMENT_ID = "G-303EWNKBE4";
ReactGA.initialize(MEASUREMENT_ID);

function Analytics() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return null; // This component doesn't render anything visible
}

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
      fontFamily: "Manrope",
      h1: {
        fontFamily: "Bebas Neue",
      },
      h2: {
        fontFamily: "Bebas Neue",
      },
      h3: {
        fontFamily: "Bebas Neue",
      },
      h4: {
        fontFamily: "Bebas Neue",
      },
      h5: {
        fontFamily: "Bebas Neue",
      },
      h6: {
        fontFamily: "Bebas Neue",
      },
      button: {
        fontFamily: '"Roboto", "Inter"',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box className="App">
        <Router>
          <Analytics /> {/* Include the Analytics component inside the Router */}
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;