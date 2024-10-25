import { generateParams } from './../entities/types/generateParams.ts'

function randint(dia: [number, number], fixedNumber?: number){
    return (Math.random() * (dia[1] + Math.abs(dia[0])) + dia[0]).toFixed(fixedNumber)
}

export function generateEquation(params: generateParams): string {
    const generateStack = {
        a: {
            dia: [-500,500],
            haveX: false,
            value: '',
        },
        b: {
            dia: [-500,500],
            haveX: true,
            value: '',
        },
        c: {
            dia: [-500,500],
            haveX: true,
            value: '',
        }
    }

    for(item in generateStack){
        console.log(generateStack[item])

        generateStack[item].value += randint(generateStack[item].dia, 2)

        for(let i = 0;i !== params.countOperationsParams;i++){
            let operations = params.operationsParams.operations
            let indexOperation = Math.floor(Math.random() * operations.length)
            let operation = operations[indexOperation]
            console.log(operation)

            generateStack[item].value += ` ${operation} ${randint(generateStack[item].dia, 2)}${generateStack[item].haveX ? 'x' : ''}`
        }
    }
    
    return `${generateStack.a.value}x + ${generateStack.b.value} = ${generateStack.c.value}`
}
