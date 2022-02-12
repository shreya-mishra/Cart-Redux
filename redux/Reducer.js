import { addQty, subQty, totalCost } from './helpers/helper';

const initialState = {
  quantity: 0,
  total: 0,
  newCart: [],
};
const cartReducer = (state = initialState, action) => {
  let param = {};
  switch (action.type) {
    case 'ADDQTY':
    param = totalCost(state.newCart, action.payload, "add");
      return {
        ...state,
        total: param.total, 
        quantity: param.quantity,
        newCart: param.newCart,
      };
    case 'SUBQTY':
     param = totalCost(state.newCart, action.payload, "sub");
      return {
        ...state,
        total: param.total, 
        quantity: param.quantity,
        newCart: param.newCart,
      };

    case 'NEWCART':
      console.log('reducer', action.payload);
      return {
        ...state,
        newCart: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
