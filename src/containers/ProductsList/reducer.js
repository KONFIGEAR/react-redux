import { actionTypes } from "./constants";


const initialState = {
  products: [],
  selectedProduct: null,
  loading: true,
  error: false,
};
const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_PRODUCTS:
      console.log(action.payload);
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: false,
      }

    case actionTypes.SET_SELECTED_PRODUCT:
      return {
        ...state,
        selectedProduct: state.products.find(item => item.id === action.payload)
      }

    case actionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload
      }

    default:
      return state;
  };



}

export default productListReducer;
