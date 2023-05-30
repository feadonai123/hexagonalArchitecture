"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationService = void 0;
const validationError_1 = __importDefault(require("@/errors/validationError"));
exports.validationService = {
    validateName(name) {
        if (!name) {
            throw new validationError_1.default("Name is required");
        }
    },
    validateEmail(email) {
        if (!email) {
            throw new validationError_1.default("Email is required");
        }
    },
    validatePhone(phone) {
        if (!phone) {
            throw new validationError_1.default("Phone is required");
        }
    },
    validateCpf(cpf) {
        if (!cpf) {
            throw new validationError_1.default("CPF is required");
        }
    },
    validateBirthDate(birthDate) {
        if (!birthDate) {
            throw new validationError_1.default("Birth date is required");
        }
    }
};
