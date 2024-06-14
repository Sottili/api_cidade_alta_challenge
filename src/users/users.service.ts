import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  findAll() {
    return this.prisma.user.findMany();
  }
  createUser(data) {
    return this.prisma.user.create({
      data: data,
    });
  }
}
