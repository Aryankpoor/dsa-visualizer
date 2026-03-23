import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sorting from "./pages/Sorting";
import Searching from "./pages/Searching";
import Navbar from "./components/Navbar";
import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sorting" element={<Sorting />} />
        <Route path="/searching" element={<Searching />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;