import { configureStore } from "@reduxjs/toolkit";
const initialState = {
  cardNumber: "",
  cvc: "",
  cardName: "",
  month: "",
  year: "",
};
const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "cardNumber":
      return { ...state, cardNumber: action.cardNumber };
    case "cvc":
      return { ...state, cvc: action.cvc };
    case "cardName":
      return { ...state, cardName: action.cardName };
    case "month":
      return { ...state, month: action.month };
    case "year":
      return { ...state, year: action.year };
    default:
      return state;
  }
};
const store = configureStore({ reducer: reducer });

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
