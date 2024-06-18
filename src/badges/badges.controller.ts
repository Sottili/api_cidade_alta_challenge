import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { BadgesService } from './badges.service';
import { Response } from 'express';

@Controller('badges')
export class BadgesController {
  constructor(private readonly badgesService: BadgesService) {}
  @Get()
  async findAll(@Res() res: Response) {
    try {
      const badges = await this.badgesService.findAll();
      return res.status(HttpStatus.OK).send(badges);
    } catch (e) {
      return res.status(HttpStatus.BAD_REQUEST).send();
    }
  }
  @Get(':name')
  async findByName(@Res() res: Response, @Param() params: any) {
    try {
      const badges = await this.badgesService.findByName(params.name);
      return res.status(HttpStatus.OK).send(badges);
    } catch (e) {
      return res.status(HttpStatus.BAD_REQUEST).send();
    }
  }
  @Get(':slug')
  async findBadgesUsers(@Res() res: Response, @Param() params: any) {
    try {
      const badgesByUsers = await this.badgesService.findUsersContainsBadges(
        params.slug,
      );
      await res.status(HttpStatus.OK).send(badgesByUsers);
    } catch (e) {
      return res.status(HttpStatus.BAD_REQUEST).send();
    }
  }
}
