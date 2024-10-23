import { generateEquation } from './logic/generate.ts'

console.log(generateEquation({
    countOperationsParams: 2,
    operationsParams: {
        sum: true
    }
}))
