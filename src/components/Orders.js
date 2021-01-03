import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchOrders } from "../actions/orderActions";
import formatCurrency from "../util";


class Orders extends Component {
    componentDidMount() {
      this.props.fetchOrders();
    }
    render() {
      const { orders } = this.props;