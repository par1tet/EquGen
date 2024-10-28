import { operationsParams } from './operationsParams'

export type generateParams = {
    diaX: [number, number],
    countOperationsParams: number,
    operationsParams: operationsParams,
    generateStack: {
        [index: string]: {
            dia: [number,number],
            haveX: boolean,
            value: string,
            withBrackets: boolean
        }
    },boolean
    countNumbersAfterPoint: number
}
