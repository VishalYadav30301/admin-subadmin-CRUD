import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum UserRole {
    SUPER_ADMIN = 'SUPER_ADMIN',
    SUB_ADMIN = 'SUB_ADMIN',
  }

@Schema({timestamps: true})
export class User extends Document{

    @Prop({required: true})
    name: string;

    @Prop({required: true, unique: true})
    email: string;

    @Prop({required: true})
    password: string;

    @Prop({enum: UserRole, default: UserRole.SUB_ADMIN})
    role: UserRole;

    @Prop({default: false})
    isActive: boolean;
}


export const UserSchema = SchemaFactory.createForClass(User);