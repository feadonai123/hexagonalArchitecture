import { dbRepository } from "./dbRepository";
import { PrismaClient } from '@prisma/client';
import ClientEntity from "@/domain/entities/client";

describe("DB Repository", () => {

    const prisma = new PrismaClient();
    const clientRepositoryInstance = dbRepository(prisma);

    const client = new ClientEntity("NOME", "EMAIL", "PHONE", "CPF", new Date("1999-01-01T00:00:00.000Z"));
    let newClient: ClientEntity;

    test("CreateClient", async () => {
        newClient = await clientRepositoryInstance.createClient(client)
        expect(newClient.id).not.toBeUndefined();
    });

    test("GetClient", async () => {
        const clientDB = await clientRepositoryInstance.getClient(newClient.id as string);
        expect(clientDB.id).toBe(newClient.id);
    });

    test("DeleteClient", async () => {
        expect(async()=>{
            return await clientRepositoryInstance.deleteClient(newClient.id as string);
        }).not.toThrow();
    });
});
