import { createEquationDto } from './dto/createEquation.dto';
import { GeneratorService } from './generator.service';
export declare class GeneratorController {
    private generatorService;
    constructor(generatorService: GeneratorService);
    createEquation(dto: createEquationDto): {
        equation: string;
    };
}
