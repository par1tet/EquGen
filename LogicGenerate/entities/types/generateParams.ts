import { operationsParams } from './operationsParams.ts'

export type generateParams = {
    diaX: [number, number],
    countOperationsParams: number,
    operationsParams: operationsParams,
    generateStack: {
        {
            dia: [number,number],
            haveX: boolean,
            value: string,
            withBrackets: boolean
        }
    },
    countNumbersAfterPoint: number
}
