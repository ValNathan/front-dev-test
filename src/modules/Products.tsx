import React from "react";
import useTable from "../hooks/useTable";
import Table from "../components/Table";
import Filters from "../components/Filters";
import filterProduct from "../utils/filterProduct";

const Products = () => {
  const { loading, items, filter, pages, currentPage, setCurrentPage } =
    useTable("./data/products.json", 30);

  return (
    <div>
      {loading && <p>loading...</p>}
      <Filters
        onFilter={(filters) => {
          filter(filterProduct(filters));
        }}
      />

      {/* `useTable` hook provides `pages`, `currentPage` and `setCurrentPage` handler */}
      {/* use above elements to create a functional pagination system */}
      <div>
        <p>
          Page {currentPage + 1} / {pages}
        </p>
        {currentPage + 1 > 1 && (
          <button
            onClick={() => {
              setCurrentPage(currentPage - 1);
            }}
          >
            Previous
          </button>
        )}
        {currentPage + 1 < pages && (
          <button
            onClick={() => {
              setCurrentPage(currentPage + 1);
            }}
          >
            Next
          </button>
        )}
      </div>

      {/* todo: implement sort feature for each column */}

      <Table
        data={items}
        //  add `quantity` column at the end of the table
        columns={[
          {
            name: "id",
            description: "#",
            width: 64,
          },
          {
            name: "name",
            description: "Product",
          },
          {
            name: "price",
            description: "Price",
            width: 100,
          },
          {
            name: "quantity",
            description: "Quantity",
            width: 100,
          },
        ]}
      />
    </div>
  );
};

export default Products;
