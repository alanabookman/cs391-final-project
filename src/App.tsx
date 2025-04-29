/*
  File implemented by William Parker (wqparker@bu.edu)
  This file uses the 'react-router' convention convered in 
  class to facilitate simple static page navigation
*/

/* 
  import header (present in all pages), and main body components
  of the JobContent and AboutPage, as well as the react-router parts
  and styled-components
*/
import AboutPage from './components/AboutPage'
import JobContent from "./components/JobContent";
import Header from "./components/Header";
import { createBrowserRouter, Route, Routes, RouterProvider } from "react-router";
import { styled } from "styled-components";

// simple styled component for the wrapping of the whole page
const StyledWrapper = styled.div`
    width: 80vw;
    margin: auto;
    border: 5px black solid;
`;

// root function with the static routes to other components
function Root() {
  return (
    <StyledWrapper>
      <Header />
      <Routes>
        <Route path="/" element={<JobContent />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </StyledWrapper>
  );
}

// router const
const router = createBrowserRouter([{ path: "*", Component: Root }]);

// export main App component
export default function App() {
  return <RouterProvider router={router} />
}

