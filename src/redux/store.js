import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "./reducer/transactionsSlice/transactionSlice";

const store = configureStore({
  reducer: {
    transactions: transactionReducer
  }
})

export default store;