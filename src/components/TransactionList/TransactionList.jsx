import React, { useEffect } from "react";
import TransactionListItem from "./../TransactionListItem/TransactionListItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetTransactions } from "./../../redux/reducer/transactionsSlice/transactionSlice";

const TransactionList = () => {
  const dispatch = useDispatch();
  const { transactions, isLoading, isError } = useSelector(
    (state) => state.transactions
  );

  useEffect(() => {
    dispatch(fetchGetTransactions());
  }, []);

  //? render decision

  let content = null;

  if (isLoading) content = <p>Loading...</p>;

  if (!isLoading && isError) content = <p>There was an error occured!</p>;

  if (!isLoading && !isError && transactions.length < 1)
    content = <p>No transactions available!</p>;

  if (!isLoading && !isError && transactions.length > 0)
    content = transactions.map((transaction) => (
      <TransactionListItem key={transaction.id} transaction={transaction} />
    ));

  return (
    <>
      <p className="second_heading">Your Transactions:</p>
      <div className="conatiner_of_list_of_transactions">
        <ul>{content}</ul>
      </div>
    </>
  );
};

export default TransactionList;
