import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Error404 from "./pages/Error404";
import Project from "./pages/Project";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/project/:id" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}
