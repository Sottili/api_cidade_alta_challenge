import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class BadgesService {
  constructor(private prisma: PrismaService) {}
  async findAll() {
    return await this.prisma.badges.findMany();
  }
  async findByName(name: number) {
    return await this.prisma.badges.findMany({
      where: {
        name: `${name}`,
      },
    });
  }
  async findUsersContainsBadges(slug: string) {
    return await this.prisma.badges.findMany({
      where: {
        slug: slug,
      },
      include: {
        user: true,
      },
    });
  }
}
