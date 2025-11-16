import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import Loader from "./Components/LoadingAnimation";
import "./App.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const showLoader = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  // Show loader while loading
  if (isLoading) {
    return <Loader />;
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage onShowLoader={showLoader} />} />
          <Route path="/home" element={<HomePage onShowLoader={showLoader} />} />
          {/* Redirect unknown routes to home */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

// Reusable HomePage component
function HomePage({ onShowLoader }) {
  return (
    <div>
      <Home onShowLoader={onShowLoader} />
    </div>
  );
}

export default App;
