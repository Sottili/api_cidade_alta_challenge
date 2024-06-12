import { Injectable } from '@nestjs/common';
import { CreateBadgeDto } from './dto/create-badge.dto';
import { UpdateBadgeDto } from './dto/update-badge.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class BadgesService {
  constructor(private prisma: PrismaService) {}
  create(createBadgeDto: CreateBadgeDto) {
    return 'This action adds a new badge';
  }

  findAll() {
    return this.prisma.badges.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} badge`;
  }

  update(id: number, updateBadgeDto: UpdateBadgeDto) {
    return `This action updates a #${id} badge`;
  }

  remove(id: number) {
    return `This action removes a #${id} badge`;
  }
}
