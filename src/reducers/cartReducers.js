import { ADD_TO_CART, REMOVE_FROM_CART } from "../types";

export const cartReducer = (
    state = { cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]") },
    action