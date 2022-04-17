import { combineReducers } from "redux";
import ProductReducer from '../containers/ProductsList/reducer'
export default combineReducers({
  productsState: ProductReducer,
});
