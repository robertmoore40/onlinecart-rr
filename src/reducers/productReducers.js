import {
    FETCH_PRODUCTS,
    FILTER_PRODUCTS_BY_SIZE,
    ORDER_PRODUCTS_BY_PRICE,
} from "../types";

export const productsReducer = (state = {}, action) => {
    switch (action.type) {
        case FILTER_PRODUCTS_BY_SIZE:
            return {
              ...state,
              size: action.payload.size,
              filteredItems: action.payload.items,
            };