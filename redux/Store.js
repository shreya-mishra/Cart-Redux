import { createStore } from "redux";
import cartReducer from "./Reducer";

const store = createStore(cartReducer);

export default store;
