import { Injectable } from '@nestjs/common';
import { createEquationDto } from './dto/createEquation.dto'
import { generateEquation } from './../LogicGenerate/logic/generate'

@Injectable()
export class GeneratorService {
    generateEquation(dto: createEquationDto){
        console.log(dto)
        return {"equation":generateEquation(dto.generateParams)}
    }
}
