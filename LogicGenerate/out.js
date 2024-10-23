(() => {
  // logic/generate.ts
  function generateEquation(params) {
    const a = (Math.random() * 1e3 - 500).toFixed(2);
    const b = (Math.random() * 1e3 - 500).toFixed(2);
    const c = (Math.random() * 1e3 - 500).toFixed(2);
    return `${a}x + ${b} = ${c}`;
  }

  // main.ts
  console.log(generateEquation({
    countOperationsParams: 2,
    operationsParams: {
      sum: true
    }
  }));
})();
