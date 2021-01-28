function UpdatedComponent(OriginalComponent) {
  function newComponent() {
    /*
      const num = 60
      num.toFixed(2) >> return 60.00
      num.toFixed(2).split(".") >> 60,00   every . split
      p[0] >> 60
      p[1] >> 00

      p[0].split("") >> 6,0
      .reverse() >> 0,6
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
        "," +
        p[1]
      );
    }
    return <OriginalComponent moneyFormatter={moneyFormatter} />;
  }
  return newComponent;
}

export default UpdatedComponent;
