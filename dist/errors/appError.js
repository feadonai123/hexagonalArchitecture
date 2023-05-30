"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppError {
    constructor(message, statusCode = 400) {
        this.message = message;
        this.statusCode = statusCode;
    }
    getMessage() {
        return this.message;
    }
    getStatusCode() {
        return this.statusCode;
    }
}
exports.default = AppError;
