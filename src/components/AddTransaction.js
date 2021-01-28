import React from "react";
import { ContextData } from "../context/GlobalState";

function AddTransaction() {
  const { AddTrans } = React.useContext(ContextData);
  let newTransaction;

  const [text, setText] = React.useState("");
  const [amount, setAmount] = React.useState("");

  const TRef = React.useRef("");
  const ARef = React.useRef("");

  function handleText() {
    setText(TRef.current.value);
  }
  function handleAmount() {
    setAmount(ARef.current.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (text && amount) {
      newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount,
      };
      AddTrans(newTransaction);
      setText("");
      setAmount("");
    } else {
      alert("empty block!");
    }
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter text..."
            value={text}
            ref={TRef}
            onChange={handleText}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
          </label>
          <input
            type="number"
            placeholder="Enter amount..."
            value={amount}
            ref={ARef}
            onChange={handleAmount}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}
export default AddTransaction;
