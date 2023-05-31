import { appFactory } from "./app";
import request from "supertest";

test("Server is running", async () => {
  const appDriver = appFactory();
  const app = appDriver.getApp();

  const response = await request(app).get("/");

  expect(response.status).toEqual(200);
});

describe("API REST", () => {
  const appDriver = appFactory();
  const app = appDriver.getApp();

  let clientId: string;

  test("Create client", async () => {
    const response = await request(app).post("/client").send({
      name: "Teste",
      email: "teste@gmail.com",
      phone: "999999999",
      cpf: "99999999999",
      birthDate: "1999-01-01T00:00:00.000Z",
    });
    
    clientId = response.body.clientId;

    expect(response.status).toEqual(201);
    expect(clientId).not.toBeUndefined();
  });

  test("Get client", async () => {
    const response = await request(app).get(`/client/${clientId}`);

    expect(response.status).toEqual(200);
    expect(response.body.id).not.toBeUndefined();
    expect(response.body.name).toBe("Teste");
    expect(response.body.email).toBe("teste@gmail.com");
    expect(response.body.phone).toBe("999999999");
    expect(response.body.cpf).toBe("99999999999");
  });

});