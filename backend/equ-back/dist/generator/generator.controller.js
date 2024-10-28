"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneratorController = void 0;
const common_1 = require("@nestjs/common");
const createEquation_dto_1 = require("./dto/createEquation.dto");
const generator_service_1 = require("./generator.service");
let GeneratorController = class GeneratorController {
    constructor(generatorService) {
        this.generatorService = generatorService;
    }
    createEquation(dto) {
        return this.generatorService.generateEquation(dto);
    }
};
exports.GeneratorController = GeneratorController;
__decorate([
    (0, common_1.Post)('create_equation'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createEquation_dto_1.createEquationDto]),
    __metadata("design:returntype", void 0)
], GeneratorController.prototype, "createEquation", null);
exports.GeneratorController = GeneratorController = __decorate([
    (0, common_1.Controller)('generator'),
    __metadata("design:paramtypes", [generator_service_1.GeneratorService])
], GeneratorController);
//# sourceMappingURL=generator.controller.js.map