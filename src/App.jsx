import React from "react";
import Balance from "./components/Balance/Balance";
import Layout from "./components/Layout/Layout";
import TransactionList from "./components/TransactionList/TransactionList";
import TransactionForm from './components/TransactionForm/TransactionForm';

function App() {
  return (
    <>
      <Layout>
        <Balance />
        <TransactionForm />
        <TransactionList />
      </Layout>
    </>
  );
}

export default App;
