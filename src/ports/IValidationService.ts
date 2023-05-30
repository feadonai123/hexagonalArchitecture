export interface IValidationService {
  validateName(name: string): void
  validateEmail(email: string): void
  validatePhone(phone: string): void
  validateCpf(cpf: string): void
  validateBirthDate(birthDate: Date): void
}