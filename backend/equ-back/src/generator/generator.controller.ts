import { Controller, Post, Body } from '@nestjs/common';
import { createEquationDto } from './dto/createEquation.dto'
import { GeneratorService } from './generator.service'

@Controller('generator')
export class GeneratorController {
    constructor(private generatorService: GeneratorService){}

    @Post('create_equation')
    createEquation(@Body() dto: createEquationDto){
        return this.generatorService.generateEquation(dto)
    }
}
