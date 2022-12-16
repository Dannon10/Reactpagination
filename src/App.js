import "./styles.css";
import React from "react";
import Home from "./Home";
import Users from "./Users";
import About from "./About";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Users/About" element={<About />}></Route>
      <Route path="Users" element={<Users />}></Route>
      <Route
        path="*"
        element={
          <>
            <div className="error-404">
              <h1>Error 404 </h1>
              <h2>Page Not Found!</h2>
              <Link className="home-link" to="/">
                Home Page
              </Link>
            </div>
          </>
        }
      ></Route>
    </Routes>
  );
}
