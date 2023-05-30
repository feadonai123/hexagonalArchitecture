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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClientController = void 0;
const createClientController = (createClientUseCase) => {
    return {
        listenForRequest(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const { name, email, phone, cpf, birthDate } = req.body;
                createClientUseCase.execute({
                    name,
                    email,
                    phone,
                    cpf,
                    birthDate
                });
                res.status(201).send("Cliente criado com sucesso");
            });
        }
    };
};
exports.createClientController = createClientController;
