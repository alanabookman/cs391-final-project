/*
  File implemented by William Parker (wqparker@bu.edu)
  This file uses the 'react-router' convention convered in 
  class to facilitate simple static page navigation
*/

/* 
  import header (present in all pages), and main body components
  of the JobContent, AboutPage, and Footer, as well as the react-router parts
  and styled-components. Also the DarkMode/LightMode button and the theme wrapper for it
*/
import AboutPage from './components/AboutPage'
import JobContent from "./components/JobContent";
import Header from "./components/Header";
import { createBrowserRouter, Route, Routes, RouterProvider } from "react-router";
import { styled } from "styled-components";
import { useState } from "react";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from "./components/Themes.ts";
import { GlobalStyles } from "./components/globalStyles.ts";
import ThemeButton from "./components/ThemeButton.tsx";
import Footer from "./components/Footer.tsx";

// this import statement makes sure the Footer Carousel component works
// see the notes in Footer.jsx for more info
import 'bootstrap/dist/css/bootstrap.min.css';

// simple styled component for the wrapping of the whole page
const StyledWrapper = styled.div`
    width: 100vw;
    margin: auto;
    border: 5px black solid;
    background-color: ${props => props.theme.bodyBackground};
`;

// Container for the theme button
const ThemeButtonContainer = styled.div`
    background-color: ${props => props.theme.bodyBackground};
    padding: 10px;
    display: flex;
    justify-content: flex-end;
`;

// root function with the static routes to other components and 
// other main components of footer, header, and theme button
function Root() {
  const [darkMode, setDarkMode] = useState(false);
  const themetoggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <StyledWrapper>
        <Header />
        <ThemeButtonContainer>
          <ThemeButton themetoggle={themetoggle} darkMode={darkMode} />
        </ThemeButtonContainer>
        <Routes>
          <Route path="/" element={<JobContent />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </StyledWrapper>
    </ThemeProvider>
  );
}

// router const
const router = createBrowserRouter([{ path: "*", Component: Root }]);

// export main App component
export default function App() {
  return <RouterProvider router={router} />
}

