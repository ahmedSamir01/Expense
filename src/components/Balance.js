import React from "react";
import {ContextData} from "../context/GlobalState";
import UpdatedComponent from "../HOC/MoneyFormatter";

function Balance({ moneyFormatter }) {
    const { transactions, isMinus } = React.useContext(ContextData);
  // get all amount to + them
  const amounts = transactions.map(transaction => transaction.amount);
  // + them
  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>
        {isMinus ? "-" : ""}
        {moneyFormatter(total)}
      </h1>

    </>
  );
}
export default UpdatedComponent(Balance);
