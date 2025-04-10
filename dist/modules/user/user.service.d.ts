import { ConfigService } from '@nestjs/config';
import { Model } from 'mongoose';
import { SignupDto } from 'src/dtos/signup.dto';
import { User } from 'src/models/user.schema';
import { TokenService } from '../token/token.service';
export declare class UserService {
    private userModel;
    private configService;
    private tokenService;
    constructor(userModel: Model<User>, configService: ConfigService, tokenService: TokenService);
    createSuperAdmin(): Promise<void>;
    createUser(userData: SignupDto): Promise<import("mongoose").Document<unknown, {}, User> & User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findAllUser(): Promise<(import("mongoose").Document<unknown, {}, User> & User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findUserById(id: any): Promise<(import("mongoose").Document<unknown, {}, User> & User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    findUserByEmail(email: string): Promise<(import("mongoose").Document<unknown, {}, User> & User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    deleteUserById(id: any): Promise<(import("mongoose").Document<unknown, {}, User> & User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    deleteUserByEmail(email: string): Promise<(import("mongoose").Document<unknown, {}, User> & User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    findUserByRole(role: any): Promise<(import("mongoose").Document<unknown, {}, User> & User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
}
