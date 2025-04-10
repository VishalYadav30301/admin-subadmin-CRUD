import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SignupDto } from 'src/dtos/signup.dto';
import { User } from 'src/models/user.schema';
import { UserRole } from 'src/models/user.schema';
import { TokenService } from '../token/token.service';

@Injectable()
export class UserService {

    constructor(@InjectModel(User.name) private userModel: Model<User>,
                private configService: ConfigService,
                private tokenService: TokenService
        ){}

    async createSuperAdmin(){

        let password = this.configService.get<string>("superAdmin.password");
        let hashedPassword = await this.tokenService.hash(password)

        await this.userModel.create({
            name:"SuperAdmin",
            email: this.configService.get<string>("superAdmin.email"),
            password: hashedPassword,
            role: UserRole.SUPER_ADMIN
        })
        console.log(`Super Admin Registered`)
    }

    
    async createUser(userData: SignupDto){
        return await this.userModel.create(userData);
    }

    async findAllUser(){
        return await this.userModel.find({});
    }

    async findUserById(id: any){
        return await this.userModel.findById(id);
    }

    async findUserByEmail(email: string){
        return await this.userModel.findOne({email});
    }

    async deleteUserById(id: any){
        return await this.userModel.findByIdAndDelete(id);
    }

    async deleteUserByEmail(email:string){
        return await this.userModel.findOneAndDelete({email});
    }

    async findUserByRole(role:any){
        return await this.userModel.findOne({role})
    }

}
