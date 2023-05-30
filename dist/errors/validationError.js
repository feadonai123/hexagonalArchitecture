"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const appError_1 = __importDefault(require("./appError"));
class ValidationError extends appError_1.default {
    constructor(message, statusCode = 400) {
        super(message, statusCode);
        this.message = message;
        this.statusCode = statusCode;
    }
}
exports.default = ValidationError;
