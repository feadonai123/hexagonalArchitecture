"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClientUseCase = void 0;
const client_1 = __importDefault(require("@/entities/client"));
const createClientUseCase = (validationService, clientRepository) => {
    return {
        execute(clientData) {
            return __awaiter(this, void 0, void 0, function* () {
                validationService.validateName(clientData.name);
                validationService.validateEmail(clientData.email);
                validationService.validatePhone(clientData.phone);
                validationService.validateCpf(clientData.cpf);
                validationService.validateBirthDate(clientData.birthDate);
                const client = new client_1.default(clientData.name, clientData.email, clientData.phone, clientData.cpf, clientData.birthDate);
                clientRepository.create(client);
            });
        }
    };
};
exports.createClientUseCase = createClientUseCase;
