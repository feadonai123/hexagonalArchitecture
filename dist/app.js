"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appFactory = void 0;
const express_1 = __importDefault(require("express"));
const clientController_1 = require("./controllers/client/clientController");
const createClientUseCase_1 = require("./useCases/createClientUseCase");
const clientRepository_1 = require("./repositories/clientRepository");
const validationService_1 = require("./services/validationService");
const appFactory = () => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.get('/', (req, res) => {
        res.status(200).end();
    });
    const router = express_1.default.Router();
    const clientRepositoryInstance = (0, clientRepository_1.clientRepository)();
    const createClientUseCaseInstance = (0, createClientUseCase_1.createClientUseCase)(validationService_1.validationService, clientRepositoryInstance);
    (0, clientController_1.clientController)(app, router, createClientUseCaseInstance).listenForRoutes();
    return {
        start(portNumber) {
            app.listen(portNumber, () => {
                console.log(`Servidor rodando na porta ${portNumber}`);
            });
        },
        getApp() {
            return app;
        }
    };
};
exports.appFactory = appFactory;
