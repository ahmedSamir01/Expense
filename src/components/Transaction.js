import React from "react";
import { ContextData } from "../context/GlobalState";

export default function Transaction({ transaction, moneyFormatter }) {
  const { DelTrans } = React.useContext(ContextData);

  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}
        {moneyFormatter(transaction.amount)}
      </span>
      <button onClick={() => DelTrans(transaction.id)} className="delete-btn">
        x
      </button>
    </li>
  );
}
