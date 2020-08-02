import React from "react";
import PropTypes from "prop-types";
import { ProductCategoryRow } from "./ProductCategoryRow";
import { ProductRow } from "./ProductRow";

// ToDO: map over products and return a product row with name and price for each product


export const ProductTable = ({ products }) => {
  const renderProductRows = () =>
    products.map(({ name, price }, i) =>
      <ProductRow name={name} price={price} key={i} />
    );
;

  return (
    <table>
      <thead>
        <tbody>
          <ProductCategoryRow />

          {renderProductRows()}
        </tbody>
      </thead>
    </table>
  );
};

ProductTable.propTypes = {
  products: PropTypes.array.isRequired,
  searchText: PropTypes.string,
};


/**export const ProductTable = ({ products }) => {
  const renderProductRows = () =>
    products.map(({ name, price }, i) => <ProductRow name={name} price={price} key={i} />)
*/
