import { dbRepository } from "@/infra/repositories/dbRepository/dbRepository";
import { clientUseCase } from "./clientUseCase";
import { validationService } from "@/infra/services/validationService/validationService";
import { PrismaClient } from "@prisma/client";
import ClientEntity from "@/domain/entities/client";

describe("Client UseCase", () => {
    const prisma = new PrismaClient();
    const clientRepositoryInstance = dbRepository(prisma);
    const clientUseCaseInstance = clientUseCase(validationService, clientRepositoryInstance);

    let newClient: ClientEntity;
    
    test("Create", async () => {
        const client = new ClientEntity("NOME", "EMAIL", "PHONE", "CPF", new Date("1999-01-01T00:00:00.000Z"));
        newClient = await clientUseCaseInstance.createClient(client);

        expect(newClient.id).not.toBeUndefined();
        expect(newClient.name).toBe("NOME");
        expect(newClient.email).toBe("EMAIL");
        expect(newClient.phone).toBe("PHONE");
        expect(newClient.cpf).toBe("CPF");
        expect(newClient.birthDate).toStrictEqual(new Date("1999-01-01T00:00:00.000Z"));
    });

    test("Get", async () => {
        const clientDB = await clientUseCaseInstance.getClient(newClient.id as string);
        expect(clientDB.id).toBe(newClient.id);
    });

    test("Delete", async () => {
        expect(async()=>{
            return await clientRepositoryInstance.deleteClient(newClient.id as string);
        }).not.toThrow();
    });
    
});
