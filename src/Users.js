import React, { useState, useEffect } from "react";
import axios from "axios";
import User from "./User";
import About from "./About";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentpage] = useState(0);
  const [usersPerPage] = useState(10);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      const res = await axios.get("https://randomuser.me/api/?results=100");
      setUsers(res.data.results);
      setTotalUsers(res.data.results.length);
      setIsLoading(false);
      console.log(res.data.results);
    };

    fetchUser();
  }, []);

  const indexOfLastUser = currentPage + usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUser = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNum) => setCurrentpage(pageNum);

  const prevPage = () => setCurrentpage(currentPage - 1);
  const nextPage = () => setCurrentpage(currentPage + 1);

  const showPagination = () => {
    return (
      <User
        usersPerPage={usersPerPage}
        totalUsers={totalUsers}
        currentPage={currentPage}
        paginate={paginate}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    );
  };

  return (
    <div>
      <nav className="nav">
        <h1 className="logo">AltSchool____</h1>
        <ul className=".nav-links">
          <li>
            <Link to="/Users">Users</Link>
          </li>
          <li>
            <Link to="/Users/About">About</Link>
          </li>
          <li>
            <Link className="home-link" to="/">
              Home
            </Link>
          </li>
        </ul>
      </nav>
      <main className="user-container">
        <h1 className="user-head">Fluna BackEnd Engineers</h1>
        {!isLoading
          ? currentUser.map((user) => (
              <>
                <div className="profile-card">
                  <div className="image">
                    <img
                      className="img"
                      src={user.picture.medium}
                      alt={user.name.first}
                    />
                  </div>
                  <h3>
                    {user.name.title} {user.name.first} {user.name.last}
                  </h3>
                  <p>{user.email}</p>
                  <p>{user.dob.age}years old</p>
                </div>
              </>
            ))
          : <h1 className="loading">Loading...</h1>}
      </main>
      <Routes>
        <Route path="/Users/About" element={About}>
          About
        </Route>
      </Routes>
      <div>{showPagination()}</div>
    </div>
  );
}

export default Users;
