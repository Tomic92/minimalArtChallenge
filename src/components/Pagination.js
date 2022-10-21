import React from "react";

export default function Pagination({
  pokemonsPerPage,
  pokemonsLength,
  setCurrentPage,
  currentPage,
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
              setCurrentPage(currentPage === 1 ? currentPage : currentPage - 1)
            }
          >
            {"<"}
          </button>
          
          {pageNumbers?.map(n=>(
            <button key={n} className="page-item">
              <a href={"#!"} className="page-link" onClick={()=>setCurrentPage(n)}>
                {n}
              </a>
            </button>
          ))}
          
          <button
            type="button"
            className="page-link"
            onClick={() =>
              setCurrentPage(currentPage === totalPages ? currentPage : currentPage + 1)
            }
          >
            {">"}
          </button>
        </ul>
      </nav>
    </div>
  );
}
