import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Sorting from "./pages/Sorting";
import BubbleSort from "./pages/algorithms/BubbleSort";
import MergeSort from "./pages/algorithms/MergeSort";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sorting" element={<Sorting />} />

        {/* Algorithm routes */}
        <Route path="/sorting/bubble" element={<BubbleSort />} />
        <Route path="/sorting/merge" element={<MergeSort />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;