import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import BubbleSort from "./pages/sorting/BubbleSort";
import SelectionSort from "./pages/sorting/selectionSort";
import InsertionSort from "./pages/sorting/insertionSort";

<Routes>
  <Route path="/" element={<h1>Welcome</h1>} />
  <Route path="/sorting/bubble" element={<BubbleSort />} />
  <Route path="/sorting/selection" element={<SelectionSort />} />
  <Route path="/sorting/insertion" element={<InsertionSort />} />
</Routes>

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<h1>Welcome</h1>} />
          <Route path="/sorting" element={<BubbleSort />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;