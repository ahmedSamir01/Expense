import React from "react";
import Transaction from "./Transaction";
import UpdatedComponent from "../HOC/MoneyFormatter";
import { ContextData } from "../context/GlobalState";

// we are using HOC here 

function TransactionList({ moneyFormatter }) {
  const { transactions } = React.useContext(ContextData);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction
            key={transaction.id}
            transaction={transaction}
            moneyFormatter={moneyFormatter}
          />
        ))}
      </ul>
    </>
  );
}

export default UpdatedComponent(TransactionList);
