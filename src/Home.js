import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <nav className="nav">
        <h1 className="logo">AltSchol____</h1>
        <ul className=".nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="Users">Users</Link>
          </li>
          <li>
            <Link to="/Users/About">About</Link>
          </li>
        </ul>
      </nav>
      <main className="home-main">
        <h1>Welcome to my User's Page</h1>
        <p>Time to see our awesome Devops!!</p>
        <h5>Click on Users </h5>
        <Link className="use" to="Users">
          Users
        </Link>
      </main>
      <footer className="footer">
        <h3>&copy; Copyright 2022 All Rights Reserved</h3>
      </footer>
    </div>
  );
}
