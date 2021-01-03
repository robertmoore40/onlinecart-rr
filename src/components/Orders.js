import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchOrders } from "../actions/orderActions";
import formatCurrency from "../util";