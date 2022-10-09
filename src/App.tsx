import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./pages/About";
import Error404 from "./pages/Error404";
import Project from "./pages/Project";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id" element={<Home />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
