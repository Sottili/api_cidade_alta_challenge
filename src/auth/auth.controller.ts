import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async authenticateUser(@Body() body, @Res() res: Response) {
    try {
      const user = await this.authService.validateUser(
        body.email,
        body.password,
      );
      const returnData = { user: user };

      res.status(HttpStatus.OK).send(returnData);
    } catch {
      res.status(HttpStatus.BAD_REQUEST).send();
    }
  }
}
