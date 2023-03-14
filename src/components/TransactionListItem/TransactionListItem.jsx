import React from "react";
import editImage from "../../assets/edit.svg";
import deleteImage from "../../assets/delete.svg";

const TransactionListItem = ({ transaction }) => {
  return (
    <li
      className={`transaction ${
        transaction.type === "income" ? "income" : "expense"
      }`}
    >
      <p>{transaction.name}</p>
      <div className="right">
        <p>৳ {transaction.amount}</p>
        <button className="link">
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
