import React from "react";
import editImage from "../../assets/edit.svg";
import deleteImage from "../../assets/delete.svg";
import { useDispatch } from 'react-redux';
import { editModeOn } from "../../redux/reducer/transactionsSlice/transactionSlice";

const TransactionListItem = ({ transaction }) => {
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editModeOn(transaction))
  }

  return (
    <li
      className={`transaction ${
        transaction.type === "income" ? "income" : "expense"
      }`}
    >
      <p>{transaction.name}</p>
      <div className="right">
        <p>৳ {transaction.amount}</p>
        <button onClick={handleEdit} className="link">
          <img className="icon" src={editImage} />
        </button>
        <button className="link">
          <img className="icon" src={deleteImage} />
        </button>
      </div>
    </li>
  );
};

export default TransactionListItem;
