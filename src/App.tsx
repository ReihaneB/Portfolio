import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import ScrollToTop from "./hooks/useScrollToTop";

export default function App() {
  return (
    <div className="mt-12 lg:flex lg:justify-center mb-36">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/:id" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
