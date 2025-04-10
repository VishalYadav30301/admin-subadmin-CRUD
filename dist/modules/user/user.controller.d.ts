import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("src/models/user.schema").User> & import("src/models/user.schema").User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findUseryId(id: any): Promise<(import("mongoose").Document<unknown, {}, import("src/models/user.schema").User> & import("src/models/user.schema").User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    findUserByEmail(email: string): Promise<(import("mongoose").Document<unknown, {}, import("src/models/user.schema").User> & import("src/models/user.schema").User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    deleteUserById(id: any): Promise<(import("mongoose").Document<unknown, {}, import("src/models/user.schema").User> & import("src/models/user.schema").User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    deleteUserByEmail(email: string): Promise<(import("mongoose").Document<unknown, {}, import("src/models/user.schema").User> & import("src/models/user.schema").User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
}
