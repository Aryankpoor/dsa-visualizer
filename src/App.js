import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";

import BubbleSort from "./pages/sorting/BubbleSort";
import SelectionSort from "./pages/sorting/selectionSort";
import InsertionSort from "./pages/sorting/insertionSort";

import LinearSearch from "./pages/searching/LinearSearch";
import BinarySearch from "./pages/searching/BinarySearch";

import LCS from "./pages/dp/lcs";
import Knapsack from "./pages/dp/Knapsack";

import BFS from "./pages/graph/BFS";
import DFS from "./pages/graph/DFS";

import MergeSort from "./pages/sorting/MergeSort";
import QuickSort from "./pages/sorting/QuickSort";

import Home from "./pages/Home";
function App() {
  return (
    
    <div className="bg-gray-50 min-h-screen">
      <Router>
      <Layout>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Sorting */}
          <Route path="/sorting/bubble" element={<BubbleSort />} />
          <Route path="/sorting/selection" element={<SelectionSort />} />
          <Route path="/sorting/insertion" element={<InsertionSort />} />
          <Route path="/sorting/merge" element={<MergeSort />} />
          <Route path="/sorting/quick" element={<QuickSort />} />

          {/* Searching */}
          <Route path="/searching/linear" element={<LinearSearch />} />
          <Route path="/searching/binary" element={<BinarySearch />} />

          <Route path="/dp/lcs" element={<LCS />} />
          <Route path="/dp/knapsack" element={<Knapsack />} />

          <Route path="/sorting/merge" element={<MergeSort />} />
        <Route path="/sorting/quick" element={<QuickSort />} />

          
        </Routes>
      </Layout>
    </Router>
    </div>
  );
}

export default App;