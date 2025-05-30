import { Document } from "mongoose";
export declare enum UserRole {
    SUPER_ADMIN = "SUPER_ADMIN",
    SUB_ADMIN = "SUB_ADMIN"
}
export declare class User extends Document {
    name: string;
    email: string;
    password: string;
    role: UserRole;
    isActive: boolean;
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any, Document<unknown, any, User> & User & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User, Document<unknown, {}, import("mongoose").FlatRecord<User>> & import("mongoose").FlatRecord<User> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
