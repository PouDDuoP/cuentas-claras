import { Injectable } from '@nestjs/common';
import { PrismaClient, Prisma } from '@prisma/client';
import { DebtRepositoryPort } from '../../../domain/ports/debt.repository.port';
import { Debt } from '../../../domain/entities/debt.entity';

@Injectable()
export class PrismaDebtRepository implements DebtRepositoryPort {
  constructor(private readonly prisma: PrismaClient) {}

  async createDebt(debt: Debt): Promise<Debt> {
    const debtCreateData: Prisma.DebtCreateInput = {
      id: debt.id,
      amount: debt.amount,
      dueDate: debt.dueDate,
      status: debt.status,
    };

    const createdDebt = await this.prisma.debt.create({
      data: debtCreateData,
    });

    return new Debt(
      createdDebt.id,
      createdDebt.amount,
      createdDebt.dueDate,
      createdDebt.status,
    );
  }
}
