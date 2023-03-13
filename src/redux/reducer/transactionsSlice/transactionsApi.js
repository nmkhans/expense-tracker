import axios from '../../../utils/axios';

export const getTransactions = async () => {
  const res = await axios.get("/transactions");

  return res.data;
}

export const createTransaction = async (data) => {
  const res = await axios.post("/transactions", data);

  return res.data
}

export const updateTransaction = async (id, data) => {
  const res = await axios.put(`/transactions/${id}`, data);

  return res.data;
}

export const deleteTransaction = async (id) => {
  const res = await axios.delete(`/transactions/${id}`);

  return res.data;
}