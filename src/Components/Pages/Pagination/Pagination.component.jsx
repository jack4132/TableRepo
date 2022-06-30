import React from "react";
import "./Pagination.component.css";
function Pagination({setPage, page, length}) {
  const clickPage = n => {
    setPage(n);
    console.log(n, length, Math.ceil(length / 10));
  };
  return (
    <div className="pagination-container">
      <div className="btn" onClick={() => clickPage(1)}>
        First
      </div>
      <div className="btn" onClick={() => page > 1 && clickPage(page - 1)}>
        Previous
      </div>
      <div
        className="btn"
        onClick={() => page < Math.ceil(length / 10) && clickPage(page + 1)}
      >
        Next
      </div>
      <div className="btn" onClick={() => clickPage(Math.ceil(length / 10))}>
        Last
      </div>
    </div>
  );
}

export default Pagination;
