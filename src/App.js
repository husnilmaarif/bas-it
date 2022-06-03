import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Navigasi from "./components/Navigasi";

// pages
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Navigasi />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
