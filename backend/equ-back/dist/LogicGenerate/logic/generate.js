"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateEquation = generateEquation;
function randint(dia, fixedNumber) {
    return (Math.random() * (dia[1] + Math.abs(dia[0])) + dia[0]).toFixed(fixedNumber);
}
function generateEquation(params) {
    for (let item in params.generateStack) {
        let generateStack = params.generateStack;
        if (generateStack[item].withBrackets)
            generateStack[item].value = '(' + generateStack[item].value;
        generateStack[item].value += randint(generateStack[item].dia, params.countNumbersAfterPoint);
        for (let i = 0; i !== params.countOperationsParams; i++) {
            let operations = params.operationsParams.operations;
            let indexOperation = Math.floor(Math.random() * operations.length);
            let operation = operations[indexOperation];
            console.log(operation);
            console.log(generateStack[item].haveX && operation.haveX);
            generateStack[item].value += ` ${operation.type} ${randint(generateStack[item].dia, params.countNumbersAfterPoint)}${(generateStack[item].haveX && operation.haveX) ? 'x' : ''}`;
        }
        if (generateStack[item].withBrackets) {
            params.generateStack[item].value += ')';
        }
    }
    return `${params.generateStack.a.value}x + ${params.generateStack.b.value} = ${params.generateStack.c.value}`;
}
//# sourceMappingURL=generate.js.map