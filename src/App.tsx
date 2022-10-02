import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Error404 from "./pages/error404";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
