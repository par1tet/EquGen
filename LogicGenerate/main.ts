import { generateEquation } from './logic/generate.ts'

console.log(generateEquation({
    countOperationsParams: 1,
    operationsParams: {
        operations: [{
            type: "+",
            haveX: true,
        }, {
            type: "-",
            haveX: true,
        }, {
            type: "/",
            haveX: false,
        },]
    },
    generateStack: {
        a: {
            dia: [-500,500],
            haveX: false,
            value: '',
            withBrackets: true,
        },
        b: {
            dia: [-500,500],
            haveX: true,
            value: '',
            withBrackets: false,
        },
        c: {
            dia: [-500,500],
            haveX: true,
            value: '',
            withBrackets: true,
        }
    },
    countNumbersAfterPoint: 1
}))
