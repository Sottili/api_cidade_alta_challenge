import {
  Controller,
  Post,
  Res,
  HttpStatus,
  Param,
  Get,
  Body,
  Delete,
} from '@nestjs/common';
import { Response } from 'express';
import { UsersService } from './users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}
  @Post('create')
  async createUser(@Res() res: Response, @Body() body: any) {
    try {
      const saltOrRounds = 10;
      const hash = await bcrypt.hash(body.password, saltOrRounds);
      const data = { email: body.email, password: hash };
      await this.usersService.createUser(data);
      return res.status(HttpStatus.CREATED).send();
    } catch (e) {
      res.status(HttpStatus.BAD_REQUEST).send();
    }
  }
  @Get('badges/:id')
  async findBadgesUser(
    @Res() res: Response,
    @Param() params: any,
    @Body() body: any,
  ) {
    try {
      const tokenVerify = this.jwtService.verify(body.jwt, {
        secret: 'topSecret512',
      });

      if (tokenVerify !== null) {
        const badgesUser = await this.usersService.findBadgesUser(params.id);
        await res.status(HttpStatus.OK).send(badgesUser);
      }
    } catch (e) {
      res.status(HttpStatus.BAD_REQUEST).send(e);
    }
  }
  @Post('badges/:id')
  async recoveryBadgesUser(
    @Param() params: any,
    @Res() res: Response,
    @Body() body: any,
  ) {
    try {
      const tokenVerify = this.jwtService.verify(body.jwt, {
        secret: 'topSecret512',
      });

      if (tokenVerify !== null) {
        const recoveryBadgesToUser = this.usersService.recoveryBadges(
          params.id,
          body.slug,
        );
        return await res.status(HttpStatus.OK).send(recoveryBadgesToUser);
      }
    } catch (e) {
      return res.status(HttpStatus.BAD_REQUEST).send(e);
    }
  }
  @Delete('badges/:id')
  async deleteBadgeUser(
    @Res() res: Response,
    @Param() params: any,
    @Body() body: any,
  ) {
    try {
      const tokenVerify = this.jwtService.verify(body.jwt, {
        secret: 'topSecret512',
      });

      if (tokenVerify !== null) {
        const badgesUser = await this.usersService.deleteBadgeUser(
          params.id,
          body.idBadge,
        );
        await res.status(HttpStatus.OK).send(badgesUser);
      }
    } catch (e) {
      res.status(HttpStatus.BAD_REQUEST).send();
    }
  }
  @Get('badges')
  async findBadgesAllUsers(@Res() res: Response) {
    try {
      const badgesUser = await this.usersService.findBadgesUsers();
      await res.status(HttpStatus.OK).send(badgesUser);
    } catch (e) {
      res.status(HttpStatus.BAD_REQUEST).send();
    }
  }
}
