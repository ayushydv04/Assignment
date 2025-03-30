import React from "react";
import Home from "./pages/Home";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <Home />
      <ToastContainer position="top-right" />
    </div>
  );
}

export default App;
