"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientController = void 0;
const createClientController_1 = require("@/controllers/client/routes/createClientController");
const clientController = (app, expressRouter, createClientUseCase) => {
    const routes = [
        expressRouter.post("/", (0, createClientController_1.createClientController)(createClientUseCase).listenForRequest)
    ];
    return {
        listenForRoutes() {
            routes.forEach(route => app.use("/client", route));
        }
    };
};
exports.clientController = clientController;
