import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCreateTransaction,
  fetchUpdateTransaction,
  editModeOff,
} from "../../redux/reducer/transactionsSlice/transactionSlice";

const TransactionForm = () => {
  const dispatch = useDispatch();
  const { isLoading, editData } = useSelector((state) => state.transactions);

  const [data, setData] = useState({
    name: "",
    type: "income",
    amount: 0,
  });

  useEffect(() => {
    if (Object.keys(editData).length > 0) {
      setData(editData);
    }
  }, [editData]);

  const reset = () => {
    setData({
      name: "",
      type: "income",
      amount: 0,
    });
  };

  const handleCreateSubmit = (event) => {
    event.preventDefault();
    const transactionData = {
      ...data,
      amount: parseInt(data.amount),
    };
    dispatch(fetchCreateTransaction(transactionData));
    reset();
  };

  const handleUpdateSubmit = (event) => {
    event.preventDefault();
    const updatedData = {
      name: data.name,
      amount: data.amount,
      type: data.type,
    };

    dispatch(fetchUpdateTransaction({ id: editData.id, data: updatedData }));

    handleCancelEdit();
  };

  const handleCancelEdit = () => {
    dispatch(editModeOff());
    reset();
  };

  return (
    <div className="form">
      <h3>Add new transaction</h3>

      <form
        onSubmit={
          Object.keys(editData).length > 0
            ? handleUpdateSubmit
            : handleCreateSubmit
        }
      >
        <div className="form-group">
          <label htmlFor="transaction_name">Name</label>
          <input
            type="text"
            name="transaction_name"
            placeholder="Enter title"
            value={data.name}
            onChange={(e) =>
              setData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>

        <div className="form-group radio">
          <label htmlFor="transaction_type">Type</label>
          <div className="radio_group">
            <input
              type="radio"
              value="income"
              name="transaction_type"
              onChange={(e) =>
                setData((prev) => ({ ...prev, type: e.target.value }))
              }
              checked={data.type === "income"}
            />
            <label htmlFor="transaction_type">Income</label>
          </div>
          <div className="radio_group">
            <input
              type="radio"
              value="expense"
              name="transaction_type"
              placeholder="Expense"
              onChange={(e) =>
                setData((prev) => ({ ...prev, type: e.target.value }))
              }
              checked={data.type === "expense"}
            />
            <label htmlFor="transaction_type">Expense</label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="transaction_amount">Amount</label>
          <input
            type="number"
            placeholder="Enter amount"
            name="transaction_amount"
            onChange={(e) =>
              setData((prev) => ({ ...prev, amount: e.target.value }))
            }
            value={data.amount}
          />
        </div>

        <button disabled={isLoading} className="btn">
          {Object.keys(editData).length > 0
            ? "Update Transaction"
            : "Add Transaction"}
        </button>
      </form>

      {Object.keys(editData).length > 0 && (
        <button onClick={handleCancelEdit} className="btn cancel_edit">
          Cancel Edit
        </button>
      )}
    </div>
  );
};

export default TransactionForm;
