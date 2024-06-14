import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BadgesModule } from './badges/badges.module';
import { PrismaModule } from 'prisma/prisma.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [BadgesModule, PrismaModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
