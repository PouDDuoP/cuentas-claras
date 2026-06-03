import { Debt } from '../entities/debt.entity';

export interface DebtRepositoryPort {
  createDebt(accountId: string, amount: number, dueDate: Date): Promise<Debt>;
  getDebtsByAccountId(accountId: string): Promise<Debt[]>;
  updateDebtStatus(debtId: string, status: 'pending' | 'paid'): Promise<void>;
}
