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