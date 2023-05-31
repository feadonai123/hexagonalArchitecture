import { mongoRepository } from "./mongoRepository";
import { PrismaClient } from '@prisma/client';
import ClientEntity from "../../entities/client";

test("CreateClientRepository", async () => {
    const prisma = new PrismaClient();
    const clientRepositoryInstance = mongoRepository(prisma);
    const client = new ClientEntity("NOME", "EMAIL", "PHONE", "CPF", new Date("1999-01-01T00:00:00.000Z"));

    const newClient = await clientRepositoryInstance.createClient(client)
    expect(newClient.id).not.toBeUndefined();

    expect(async()=>{
        return await clientRepositoryInstance.deleteClient(newClient.id as string);
    }).not.toThrow();
});
