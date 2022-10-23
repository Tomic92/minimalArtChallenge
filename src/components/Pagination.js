import React from "react";

export default function Pagination({
  pokemonsPerPage,
  pokemonsLength,
  setCurrentPage,
  currentPage,
  scrollTop,
}) {
  const pageNumbers = [];
  const totalPages = Math.ceil(pokemonsLength / pokemonsPerPage);
  for (let p = 1; p <= totalPages; p++) {
    pageNumbers.push(p);
  }

  return (
    <div>
      <nav>
        <ul className="pagination justify-content-center">
          <button
            type="button"
            className="page-link"
            onClick={() =>
              setCurrentPage(
                currentPage === 1 ? currentPage : currentPage - 1
              ) + scrollTop()
            }
          >
            {"<"}
          </button>

          {pageNumbers?.map((n) => (
            <button key={n} className="page-item">
              <a
                href={"#!"}
                className="page-link"
                onClick={() => setCurrentPage(n) + scrollTop()}
              >
                {n}
              </a>
            </button>
          ))}

          <button
            type="button"
            className="page-link"
            onClick={() =>
              setCurrentPage(
                currentPage === totalPages ? currentPage : currentPage + 1
              ) + scrollTop()
            }
          >
            {">"}
          </button>
        </ul>
      </nav>
    </div>
  );
}
