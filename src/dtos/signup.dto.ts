import { IsAlphanumeric, IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator"

export class SignupDto{

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;


    @MinLength(8)
    password: string;
}