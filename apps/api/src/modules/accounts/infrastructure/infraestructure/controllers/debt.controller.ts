import { Body, Controller, Post } from '@nestjs/common';
import { CreateDebtDto } from '../../dto/create-debt.dto';
import { CreateDebtService } from '../../application/use-cases/create-debt.service';

@Controller('debts')
export class DebtController {
  constructor(private readonly createDebtService: CreateDebtService) {}

  @Post()
  async createDebt(@Body() createDebtDto: CreateDebtDto) {
    return await this.createDebtService.execute(createDebtDto);
  }
}
