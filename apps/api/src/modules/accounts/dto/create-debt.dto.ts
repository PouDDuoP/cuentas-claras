import { IsNumber, IsString, IsUUID } from 'class-validator';

export class CreateDebtDto {
  @IsUUID()
  accountId: string;

  @IsNumber()
  amount: number;

  @IsString()
  dueDate: string;
}
