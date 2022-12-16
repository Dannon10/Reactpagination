import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <nav className="nav">
        <h1 className="logo">AltSchol____</h1>
        <ul className=".nav-links">
          <li>
            <Link to="/Users">Users</Link>
          </li>
          <li>
            <Link to="/Users/About">About</Link>
          </li>
          <li>
            <Link className="home-link" to="/">
              Home Page
            </Link>
          </li>
        </ul>
      </nav>
      <h1 className="about">Want to learn more about us?</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
        veritatis consequuntur aliquam optio? Natus, voluptatibus laudantium
        nisi magni commodi, suscipit ipsam, cupiditate enim omnis veniam
        expedita accusamus vel earum blanditiis autem libero laboriosam odio
        laborum. Ipsam est, quia quasi minus et quidem, eveniet excepturi
        cupiditate aliquid dignissimos dolores, assumenda doloribus.
      </p>
    </div>
  );
}
