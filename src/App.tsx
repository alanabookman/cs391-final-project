import AboutPage from './components/AboutPage'
import JobContent from "./components/JobContent";
import Header from "./components/Header";
import { createBrowserRouter, Route, Routes, RouterProvider } from "react-router";
import { styled } from "styled-components";
>>>>>>> main

const StyledWrapper = styled.div`
    width: 80vw;
    margin: auto;
    border: 5px black solid;
`;


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

const router = createBrowserRouter([{ path: "*", Component: Root }]);

export default function App() {
  return <RouterProvider router={router} />
}

