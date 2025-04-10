import { Module, OnApplicationBootstrap, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule, ConfigService } from "@nestjs/config"
import config from './config/config';
import { UserService } from './modules/user/user.service';
import { UserRole } from './models/user.schema';

@Module({
  imports: [
    UserModule,
    AuthModule,

    ConfigModule.forRoot({
      isGlobal:true,
      load:[config],
      envFilePath:'.env'
    }),
    
    MongooseModule.forRootAsync({
      imports:[ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>("database.uri")
      }),
      inject:[ConfigService]
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnApplicationBootstrap {

  constructor(private userService: UserService){}
  async onApplicationBootstrap() {
    const superAdmin = await this.userService.findUserByRole(UserRole.SUPER_ADMIN)
    if(!superAdmin){
      console.log(`Registering Super Admin .....`)
      this.userService.createSuperAdmin()
    }
  }
}



