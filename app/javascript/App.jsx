import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar";
import Routing from "./routes/routing";

export default function App() {
  useEffect(() => {
    console.log("app component has been called");
  });

  return (
    <div>
      <Router>
        <Navbar />
        <Routing />
      </Router>
    </div>
  );
}
