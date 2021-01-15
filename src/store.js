import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import { productsReducer } from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";