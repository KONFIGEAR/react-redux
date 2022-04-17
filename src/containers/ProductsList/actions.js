import { actionTypes } from "./constants";

const loadProducts = (payload) => {
    return {
        type: actionTypes.LOAD_PRODUCTS,
        payload,
    };
};

const setSelectedProduct = (id) => {
    return {
        type: actionTypes.SET_SELECTED_PRODUCT,
        payload: id,
    };
};

const setLoading = (loading) => {
    return {
        type: actionTypes.SET_LOADING,
        payload: loading,
    };
};
const setError = (error) => {
    return {
        type: actionTypes.SET_ERROR,
        payload: error,
    };
};

export { loadProducts, setSelectedProduct, setLoading, setError };
