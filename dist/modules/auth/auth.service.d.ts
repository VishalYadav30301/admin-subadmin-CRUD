import { SignupDto } from 'src/dtos/signup.dto';
import { UserService } from '../user/user.service';
import { LoginDto } from 'src/dtos/login.dto';
import { TokenService } from '../token/token.service';
export declare class AuthService {
    private userService;
    private tokenService;
    constructor(userService: UserService, tokenService: TokenService);
    signup(signupData: SignupDto): Promise<import("mongoose").Document<unknown, {}, import("../../models/user.schema").User> & import("../../models/user.schema").User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    login(credential: LoginDto): Promise<{
        accessToken: string;
    }>;
}
