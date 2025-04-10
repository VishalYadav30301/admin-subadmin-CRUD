import { SignupDto } from 'src/dtos/signup.dto';
import { AuthService } from './auth.service';
import { LoginDto } from 'src/dtos/login.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(signupData: SignupDto): Promise<import("mongoose").Document<unknown, {}, import("src/models/user.schema").User> & import("src/models/user.schema").User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    login(credential: LoginDto): Promise<{
        accessToken: string;
    }>;
}
