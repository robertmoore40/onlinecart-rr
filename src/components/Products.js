import React, { Component } from "react";
import formatCurrency from "../util";

import Fade from "react-reveal/Fade";
import Modal from "react-modal";

import Zoom from "react-reveal/Zoom";
import { connect } from "react-redux";

import { fetchProducts } from "../actions/productActions";
import { addToCart } from "../actions/cartActions";

class Products extends Component {
    constructor(props) {
      super(props);
      this.state = {
        product: null,
      };
    }
    componentDidMount() {
        this.props.fetchProducts();
      }
      openModal = (product) => {
        this.setState({ product });
      };
      closeModal = () => {
        this.setState({ product: null });
      };
      render() {
        const { product } = this.state;
        return (
            <div>
        <Fade bottom cascade>
          {!this.props.products ? (
            <div>Loading...</div>
          ) : (
            <ul className="products">
            {this.props.products.map((product) => (
              <li key={product._id}>