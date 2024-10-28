(() => {
  // logic/generate.ts
  function randint(dia, fixedNumber) {
    return (Math.random() * (dia[1] + Math.abs(dia[0])) + dia[0]).toFixed(fixedNumber);
  }
  function generateEquation(params) {
    for (item in params.generateStack) {
      generateStack = params.generateStack;
      if (generateStack[item].withBrackets) generateStack[item].value = "(" + generateStack[item].value;
      generateStack[item].value += randint(generateStack[item].dia, 2);
      for (let i = 0; i !== params.countOperationsParams; i++) {
        let operations = params.operationsParams.operations;
        let indexOperation = Math.floor(Math.random() * operations.length);
        let operation = operations[indexOperation];
        console.log(operation);
        console.log(generateStack[item].haveX && operation.haveX);
        generateStack[item].value += ` ${operation.type} ${randint(generateStack[item].dia, 2)}${generateStack[item].haveX && operation.haveX ? "x" : ""}`;
      }
      if (generateStack[item].withBrackets) generateStack[item].value += ")";
    }
    return `${generateStack.a.value}x + ${generateStack.b.value} = ${generateStack.c.value}`;
  }

  // main.ts
  console.log(generateEquation({
    countOperationsParams: 1,
    operationsParams: {
      operations: [{
        type: "+",
        haveX: true
      }, {
        type: "-",
        haveX: true
      }, {
        type: "/",
        haveX: false
      }]
    },
    generateStack: {
      a: {
        dia: [-500, 500],
        haveX: false,
        value: "",
        withBrackets: true
      },
      b: {
        dia: [-500, 500],
        haveX: true,
        value: "",
        withBrackets: false
      },
      c: {
        dia: [-500, 500],
        haveX: true,
        value: "",
        withBrackets: true
      }
    }
  }));
})();
