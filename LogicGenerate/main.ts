import { generateEquation } from './logic/generate.ts'

console.log(generateEquation({
    countOperationsParams: 1,
    operationsParams: {
        operations: ['+', '-', '/']
    }
}))
