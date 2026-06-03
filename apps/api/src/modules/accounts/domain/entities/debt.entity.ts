export class Debt {
  constructor(
    public readonly id: string,
    public amount: number,
    public dueDate: Date,
    public status: 'pending' | 'paid',
  ) {}

  isOverdue(): boolean {
    return new Date() > this.dueDate && this.status === 'pending';
  }
}
