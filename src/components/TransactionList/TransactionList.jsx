import React from "react";
import TransactionListItem from "./../TransactionListItem/TransactionListItem";

const TransactionList = () => {
  return (
    <>
      <p className="second_heading">Your Transactions:</p>
      <div className="conatiner_of_list_of_transactions">
        <ul>
          <TransactionListItem />
          <TransactionListItem />
        </ul>
      </div>
    </>
  );
};

export default TransactionList;
