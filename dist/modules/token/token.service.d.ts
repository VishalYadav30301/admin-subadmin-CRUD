import { JwtService } from '@nestjs/jwt';
export declare class TokenService {
    private jwtService;
    constructor(jwtService: JwtService);
    hash(data: any): Promise<string>;
    compare(password: any, hashedPassword: any): Promise<boolean>;
    sign(payload: any): Promise<string>;
    verify(accessToken: any): Promise<any>;
}
