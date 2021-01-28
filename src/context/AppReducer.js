function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return { transactions: [...state.transactions, action.payload] };
    case "DEL":
      return {
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };

    default:
      return state;
  }
}
export default reducer;
