import React from "react";

const Pagination = ({ userPerPage, setCurrentPage, state }) => {
  const { users } = state;
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  const numOfUser = Math.ceil(users.length / userPerPage);
  for (let i = 1; i <= numOfUser; i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul
        className="pagination"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              onClick={(e) => {
                e.preventDefault();
                paginate(number);
              }}
              href=""
              className="page-link"
              style={{
                display: "flex",
                borderRadius: "3px",
                width: "2rem",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
