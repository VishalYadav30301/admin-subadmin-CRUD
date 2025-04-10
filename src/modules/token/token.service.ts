import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from "bcrypt";

@Injectable()
export class TokenService {

    constructor(private jwtService: JwtService){}

    

    async compare(password:any, hashedPassword:any){
        return await bcrypt.compare(password, hashedPassword)
    }


    async hash(data:any){
        const salt = await bcrypt.genSalt(10)
        return await bcrypt.hash(data, salt)
    }
   

    async verify(accessToken:any){
        return await this.jwtService.verifyAsync(accessToken);
    }

    async sign(payload:any){
        return await this.jwtService.sign(payload);
    }

}
