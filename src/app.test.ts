// TODO ler sobre vitest
import { appFactory } from "./app";
import request from "supertest";

test("Server is running", async () => {
  const appDriver = appFactory();
  const app = appDriver.getApp();

  const response = await request(app).get("/");

  expect(response.status).toEqual(200);
});

test("HTTP Create client", async () => {
  const appDriver = appFactory();
  const app = appDriver.getApp();

  const response = await request(app).post("/client").send({
    name: "Teste",
    email: "teste@gmail.com",
    phone: "999999999",
    cpf: "99999999999",
    birthDate: "1999-01-01T00:00:00.000Z",
  });

  expect(response.status).toEqual(201);
});