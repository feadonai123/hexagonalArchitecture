import { validationService } from "./validationService";

test("ValidationService", async () => {
    expect(()=>validationService.validateName("NOME")).not.toThrow();
    expect(()=>validationService.validateEmail("EMAIL")).not.toThrow();
    expect(()=>validationService.validatePhone("PHONE")).not.toThrow();
    expect(()=>validationService.validateCpf("CPF")).not.toThrow();
    expect(()=>validationService.validateBirthDate(new Date("1999-01-01T00:00:00.000Z"))).not.toThrow();
});