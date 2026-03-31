import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";

import BubbleSort from "./pages/sorting/BubbleSort";
import SelectionSort from "./pages/sorting/selectionSort";
import InsertionSort from "./pages/sorting/insertionSort";

import LinearSearch from "./pages/searching/LinearSearch";
import BinarySearch from "./pages/searching/BinarySearch";

import LCS from "./pages/dp/lcs";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Home */}
          <Route path="/" element={<h1>Welcome to DSA Visualizer</h1>} />

          {/* Sorting */}
          <Route path="/sorting/bubble" element={<BubbleSort />} />
          <Route path="/sorting/selection" element={<SelectionSort />} />
          <Route path="/sorting/insertion" element={<InsertionSort />} />

          {/* Searching */}
          <Route path="/searching/linear" element={<LinearSearch />} />
          <Route path="/searching/binary" element={<BinarySearch />} />

          <Route path="/dp/lcs" element={<LCS />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;