import { Module } from '@nestjs/common';
import { BadgesService } from './badges.service';
import { BadgesController } from './badges.controller';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  controllers: [BadgesController],
  providers: [BadgesService],
  imports: [PrismaModule],
})
export class BadgesModule {}
