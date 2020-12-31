import React, { Component } from "react";
import { connect } from "react-redux";
import { filterProducts, sortProducts } from "../actions/productActions";

class Filter extends Component {
    render() {
      return !this.props.filteredProducts ? (
        <div>Loading...</div>
        ) : (
          <div className="filter">
              <div className="filter-result">
          {this.props.filteredProducts.length} Products
        </div>
        <div className="filter-sort">
          Order{" "}
          <select
            value={this.props.sort}
            onChange={(e) =>
                this.props.sortProducts(
                  this.props.filteredProducts,
                  e.target.value