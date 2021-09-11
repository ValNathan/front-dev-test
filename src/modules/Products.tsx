import React from "react";
import useTable from "../hooks/useTable";
import Table from "../components/Table";
import Filters from "../components/Filters";
import filterProduct from "../utils/filterProduct";

const Products = () => {
  const { loading, items, filter } = useTable("./data/products.json", 30);

  return (
    <div>
      {loading && <p>loading...</p>}
      <Filters
        onFilter={(filters) => {
          filter(filterProduct(filters));
        }}
      />

      {/* `useTable` hook provides `pages`, `currentPage` and `setCurrentPage` handler */}
      {/* todo: use above elements to create a functional pagination system */}

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
            width: 64,
          },
          {
            name: "quantity",
            description: "Quantity",
            width: 64,
          },
        ]}
      />
    </div>
  );
};

export default Products;
