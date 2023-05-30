import { appFactory } from "./app";
import request from "supertest";

test("Server is running", async () => {
  const appDriver = appFactory();
  const app = appDriver.getApp();

  const response = await request(app).get("/");

  expect(response.status).toEqual(200);
});

test("Create client", async () => {
  const appDriver = appFactory();
  const app = appDriver.getApp();

  const response = await request(app).post("/client").send({
    name: "Teste",
    email: ""
  });

  expect(response.status).toEqual(201);
});