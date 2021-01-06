import { CREATE_ORDER, CLEAR_ORDER, FETCH_ORDERS } from "../types";

const orderReducer = (state = {}, action) => {
    switch (action.type) {