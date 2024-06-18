//auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}
  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findUserByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Usuário ou Senha Inválidos');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new UnauthorizedException('A senha está inválida!');
    } else {
      const jwt = await this.generateToken(user);
      const dataReturn = { jwt: jwt, id_user: user.id_user, email: user.email };
      return dataReturn;
    }
  }
  async generateToken(user) {
    const access_token = this.jwtService.sign(
      { email: user.email },
      {
        secret: 'topSecret512',
        expiresIn: '300s',
      },
    );
    return access_token;
  }
}
