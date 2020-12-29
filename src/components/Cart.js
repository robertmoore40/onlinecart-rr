import React, { Component } from "react";
import formatCurrency from "../util";

import Fade from "react-reveal/Fade";
import { connect } from "react-redux";

import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";

import { removeFromCart } from "../actions/cartActions";
import { createOrder, clearOrder } from "../actions/orderActions";

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          email: "",
          address: "",
          showCheckout: false,
        };
      }
       handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  createOrder = (e) => {
    e.preventDefault();