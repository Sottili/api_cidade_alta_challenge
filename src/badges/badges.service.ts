import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class BadgesService {
  constructor(private prisma: PrismaService) {}
  findAll() {
    return this.prisma.badges.findMany();
  }
  findOne(id: number) {
    return this.prisma.badges.findUnique({
      where: {
        id: `${id}`,
      },
    });
  }
}
