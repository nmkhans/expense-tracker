import React from "react";
import Balance from "./components/Balance/Balance";
import ExpenceForm from "./components/ExpenceForm/ExpenceForm";
import Layout from "./components/Layout/Layout";
import TransactionList from "./components/TransactionList/TransactionList";

function App() {
  return (
    <>
      <Layout>
        <Balance />
        <ExpenceForm />
        <TransactionList />
      </Layout>
    </>
  );
}

export default App;
