import React from "react";
import reducer from "./AppReducer";

const initState = {
  transactions: [],
};

export const ContextData = React.createContext();

export function ContextProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initState);

  // isMins checker
  const [isMinus, setIsMinus] = React.useState(false);

  // actions
  function AddTrans(transaction) {
    dispatch({
      type: "ADD",
      payload: transaction,
    });
  }
  function DelTrans(id) {
    dispatch({
      type: "DEL",
      payload: id,
    });
  }

  return (
    <ContextData.Provider
      value={{
        AddTrans,
        DelTrans,
        transactions: state.transactions,
        isMinus,
        setIsMinus,
      }}
    >
      {children}
    </ContextData.Provider>
  );
}
