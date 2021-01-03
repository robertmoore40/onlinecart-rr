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
      return !orders ? (
        <div>Orders</div>
      ) : (
        <div className="orders">
        <h2>Orders</h2>
        <table>
          <thead>
          <tr>
              <th>ID</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>NAME</th>