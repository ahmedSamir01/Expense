function UpdatedComponent(OriginalComponent) {
  function newComponent() {
    /*

const num = 6
num.toFixed(2) >> return 600

*/
    function moneyFormatter(num) {
      let p = num.toFixed(2).split(".");
      return (
        "$ " +
        p[0]
          .split("")
          .reverse()
          .reduce(function (acc, num, i) {
            return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
          }, "") +
        "." +
        p[1]
      );
    }
    return <OriginalComponent moneyFormatter={moneyFormatter} />;
  }
  return newComponent;
}

export default UpdatedComponent;
