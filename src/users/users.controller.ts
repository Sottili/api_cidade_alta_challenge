import { Controller, Post, Req, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post()
  createUser(@Req() request: Request) {
    return this.usersService.createUser(request.body);
  }
  @Get()
  findAll() {
    return this.usersService.findAll();
  }
}
