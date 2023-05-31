import { createClientUseCase } from "./createClientUseCase";
import { validationService } from "../../services/validationService/validationService";
import { mongoRepository } from "../../repositories/DB/mongoRepository";
import { PrismaClient } from "@prisma/client";
import ClientEntity from "../../entities/client";

test("CreateClientUseCase", async () => {
    const prisma = new PrismaClient();
    const clientRepositoryInstance = mongoRepository(prisma);
    const createClientUseCaseInstance = createClientUseCase(validationService, clientRepositoryInstance);

    const client = new ClientEntity("NOME", "EMAIL", "PHONE", "CPF", new Date("1999-01-01T00:00:00.000Z"));
    const newClient = await createClientUseCaseInstance.execute(client);

    expect(newClient.id).not.toBeUndefined();
    expect(newClient.name).toBe("NOME");
    expect(newClient.email).toBe("EMAIL");
    expect(newClient.phone).toBe("PHONE");
    expect(newClient.cpf).toBe("CPF");
    expect(newClient.birthDate).toStrictEqual(new Date("1999-01-01T00:00:00.000Z"));

    expect(async()=>{
        return await clientRepositoryInstance.deleteClient(newClient.id as string);
    }).not.toThrow();
});
