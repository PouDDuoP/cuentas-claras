import { Injectable } from '@nestjs/common';
import { DebtRepositoryPort } from '../../domain/ports/debt.repository.port';
import { CreateDebtDto } from '../../dto/create-debt.dto';

@Injectable()
export class CreateDebtService {
  constructor(private readonly debtRepository: DebtRepositoryPort) {}

  async execute(dto: CreateDebtDto) {
    return this.debtRepository.createDebt(
      dto.accountId,
      dto.amount,
      new Date(dto.dueDate),
    );
  }
}
