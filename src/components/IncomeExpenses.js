import React from "react";
import UpdatedComponent from "../HOC/MoneyFormatter";
import { ContextData } from "../context/GlobalState";

function IncomeExpenses({ moneyFormatter }) {
  const { transactions, setIsMinus } = React.useContext(ContextData);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;

  React.useEffect(() => {
    return expense > income ? setIsMinus(true) : setIsMinus(false);
  }, [expense, income, setIsMinus]);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{moneyFormatter(income)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{moneyFormatter(expense)}</p>
      </div>
    </div>
  );
}
export default UpdatedComponent(IncomeExpenses);
