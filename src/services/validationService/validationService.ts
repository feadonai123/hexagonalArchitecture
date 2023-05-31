import ValidationError from "../../errors/validationError"
import { IValidationService } from "./IValidationService"

export const validationService : IValidationService = {
  validateName(name: string): void {
    if (!name) {
      throw new ValidationError("Name is required")
    }
  },
  validateEmail(email: string): void {
    if (!email) {
      throw new ValidationError("Email is required")
    }
  },
  validatePhone(phone: string): void {
    if (!phone) {
      throw new ValidationError("Phone is required")
    }
  },
  validateCpf(cpf: string): void {
    if (!cpf) {
      throw new ValidationError("CPF is required")
    }
  },
  validateBirthDate(birthDate: Date): void {
    if (!birthDate) {
      throw new ValidationError("Birth date is required")
    }
    if (!(birthDate instanceof Date) || isNaN(birthDate.getTime())) {
      throw new Error('Birth date must be a valid date')
    }
  }
}