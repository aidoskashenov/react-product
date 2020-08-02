import React, { Fragment } from "react";

import { ProductTable } from "./ProductTable";
import { SearchBar } from "./SearchBar";
import api from "api";

export class FilterableProductTable extends React.Component {
  state = {
    products: [],
    searchText: "",
  };

  async componentDidMount() {
    this.setState({ products: await api.index()});
  }

  render() {
    return (
      <main>
        <SearchBar />
        <ProductTable products={this.state.products} />
      </main>
    );
  }
}
