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
const app_1 = require("./app");
const supertest_1 = __importDefault(require("supertest"));
test("Server is running", () => __awaiter(void 0, void 0, void 0, function* () {
    const appDriver = (0, app_1.appFactory)();
    const app = appDriver.getApp();
    const response = yield (0, supertest_1.default)(app).get("/");
    expect(response.status).toEqual(200);
}));
test("Create client", () => __awaiter(void 0, void 0, void 0, function* () {
    const appDriver = (0, app_1.appFactory)();
    const app = appDriver.getApp();
    const response = yield (0, supertest_1.default)(app).post("/client").send({
        name: "Teste",
        email: ""
    });
    expect(response.status).toEqual(201);
}));
