import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async createUser(data) {
    return this.prisma.user.create({
      data: data,
    });
  }
  async findUserByEmail(email) {
    return this.prisma.user.findFirst({
      where: {
        email: email,
      },
    });
  }
  async findBadgesUser(id) {
    const badgesUser = await this.prisma.user.findMany({
      where: {
        id_user: {
          equals: `${id}`,
        },
      },
      select: {
        badges: true,
      },
    });
    return badgesUser;
  }
  async deleteBadgeUser(idUser, idBadge) {
    await this.prisma.user.update({
      where: {
        id_user: idUser,
      },
      data: {
        badges: {
          delete: {
            id_badge: idBadge,
          },
        },
      },
    });
  }
  async recoveryBadges(idUser, slug) {
    const badgeSlugExists = await this.prisma.badges.findMany({
      where: {
        slug: slug,
      },
    });
    const badgeSlugUser = await this.prisma.user.findMany({
      where: {
        id_user: idUser,
      },
      include: {
        badges: {
          where: {
            slug: slug,
          },
        },
      },
    });
    if (badgeSlugUser.length > 0 && badgeSlugExists !== null) {
      const badgeData = badgeSlugExists[0];
      const createBadgeUser = await this.prisma.user.update({
        where: {
          id_user: idUser,
        },
        data: {
          badges: {
            connect: [
              {
                id_badge: `${badgeData.id_badge}`,
              },
            ],
          },
        },
        include: {
          badges: { include: { user: true } },
        },
      });

      return createBadgeUser;
    }
  }
  async findBadgesUsers() {
    return await this.prisma.user.findMany({
      include: { badges: true },
    });
  }
}
