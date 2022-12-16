import React, { useState, useEffect } from "react";
import { Button } from "antd";

const User = (props) => {
  const {
    usersPerPage,
    totalUsers,
    currentPage,
    paginate,
    prevPage,
    nextPage,
  } = props;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <div className="pagination">
        {currentPage !== 1 && (
          <li>
            <Button onClick={() => prevPage()}> Prev</Button>
          </li>
        )}
        {pageNumbers.map((num) => (
          <li className="page" key={num}>
            <a  className="paginate" onClick={() => paginate(num)}>{num}</a>
          </li>
        ))}
        {pageNumbers.length !== currentPage && (
          <li>
            <Button onClick={() => nextPage()}>Next</Button>
          </li>
        )}
      </div>
    </nav>
  );
};

export default User;
