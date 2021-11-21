import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectCredit } from './connect-credit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ConnectCredit])],
})
export class ConnectCreditModule {}
