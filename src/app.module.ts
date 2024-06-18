import { Module } from '@nestjs/common';
import { BadgesModule } from './badges/badges.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [BadgesModule, UsersModule, AuthModule],
})
export class AppModule {}
