import { Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { JwtModule, JwtService } from "@nestjs/jwt"
import { ConfigModule, ConfigService } from '@nestjs/config';
@Module({
  imports:[
    JwtModule.registerAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>("jwt.secret"),
        signOptions:{expiresIn:configService.get<string>("jwt.expiry")}
      })
    })
  ],
  providers: [TokenService],
  exports:[TokenService]
})
export class TokenModule {}
