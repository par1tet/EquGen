import { generateParams } from './../entities/types/generateParams.ts'

export function generateEquation(params: generateParams): string {
    const a = (Math.random() * 1000 - 500).toFixed(2)
    const b = (Math.random() * 1000 - 500).toFixed(2)
    const c = (Math.random() * 1000 - 500).toFixed(2)
    
    return `${a}x + ${b} = ${c}`
}
