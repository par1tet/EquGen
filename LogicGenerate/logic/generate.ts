import { generateParams } from './../entities/types/generateParams.ts'

function randint(dia: [number, number], fixedNumber?: number){
    return (Math.random() * (dia[1] + Math.abs(dia[0])) + dia[0]).toFixed(fixedNumber)
}

export function generateEquation(params: generateParams): string {
    for(item in params.generateStack){
        generateStack = params.generateStack
        if(generateStack[item].withBrackets) generateStack[item].value = '(' + generateStack[item].value

        generateStack[item].value += randint(generateStack[item].dia, params.countNumbersAfterPoint)

        for(let i = 0;i !== params.countOperationsParams;i++){
            let operations = params.operationsParams.operations
            let indexOperation = Math.floor(Math.random() * operations.length)
            let operation = operations[indexOperation]
            console.log(operation)
            console.log(generateStack[item].haveX && operation.haveX)

            generateStack[item].value += ` ${operation.type} ${randint(generateStack[item].dia, params.countNumbersAfterPoint)}${(generateStack[item].haveX && operation.haveX) ? 'x' : ''}`
        }

        if(generateStack[item].withBrackets) generateStack[item].value += ')'
    }
    
    return `${generateStack.a.value}x + ${generateStack.b.value} = ${generateStack.c.value}`
}
