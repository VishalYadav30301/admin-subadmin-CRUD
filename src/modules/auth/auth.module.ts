import { Module, OnModuleInit } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { TokenModule } from '../token/token.module';
import { JwtService } from '@nestjs/jwt';
import { TokenService } from '../token/token.service';
import { UserService } from '../user/user.service';

@Module({
  imports:[
    UserModule,
    TokenModule
  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule{}
