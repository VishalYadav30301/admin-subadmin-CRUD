import { IsAlphanumeric, IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class LoginDto{

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(8)
    password: string;
}