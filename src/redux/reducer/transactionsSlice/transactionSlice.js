import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createTransaction, deleteTransaction, getTransactions, updateTransaction } from './transactionsApi';

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  transactions: []
}

export const fetchGetTransactions = createAsyncThunk("transaction/fetchGetTransactions", async () => {
  const transactions = await getTransactions()

  return transactions;
})

export const fetchCreateTransaction = createAsyncThunk("transaction/fetchCreateTransaction", async (data) => {
  const transaction = await createTransaction(data);

  return transaction
})

export const fetchUpdateTransaction = createAsyncThunk("transaction/fetchUpdateTransaction", async ({ id, data }) => {
  const transaction = await updateTransaction(id, data);

  return transaction
})

export const fetchDeleteTransaction = createAsyncThunk("transaction/fetchDeleteTransaction", async (id) => {
  const transaction = await deleteTransaction(id);

  return transaction
})

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  extraReducers: builder => {
    //? get transactions

    builder
      .addCase(fetchGetTransactions.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
        state.transactions = []
      })
      .addCase(fetchGetTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.transactions = action.payload;
      })
      .addCase(fetchGetTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error;
        state.transactions = [];
      })

    //? create transactions

    builder
      .addCase(fetchCreateTransaction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchCreateTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.transactions = [...state.transactions, action.payload];
      })
      .addCase(fetchCreateTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error;
      })

    //? update transactions

    builder
      .addCase(fetchUpdateTransaction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchUpdateTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";

        const indexToUpdate = state.transactions.findIndex(transaction => transaction.id === action.payload.id);
        state.transactions[indexToUpdate] = action.payload;

      })
      .addCase(fetchUpdateTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error;
      })

    //? delete transactions

    builder
      .addCase(fetchDeleteTransaction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchDeleteTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.transactions = state.transactions.filter(transaction => transaction.id !== action.payload.id)

      })
      .addCase(fetchDeleteTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error;
      })


  }
})

export default transactionSlice.reducer;