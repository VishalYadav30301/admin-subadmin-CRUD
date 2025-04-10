import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { SignupDto } from 'src/dtos/signup.dto';
import { AuthService } from './auth.service';
import { LoginDto } from 'src/dtos/login.dto';
import { UserRole } from 'src/models/user.schema';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { Role } from 'src/decorators/role.decorator';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){}

    @Post("signup")
    @Role(UserRole.SUPER_ADMIN)
    @UseGuards(AuthGuard)
    async signup(@Body() signupData: SignupDto){
        return this.authService.signup(signupData);
    }

    @Post("login")
    async login(@Body() credential: LoginDto){
        return this.authService.login(credential);
    }
}
