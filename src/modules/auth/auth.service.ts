import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { SignupDto } from 'src/dtos/signup.dto';
import { UserService } from '../user/user.service';
import { LoginDto } from 'src/dtos/login.dto';
import { TokenService } from '../token/token.service';

@Injectable()
export class AuthService {

    constructor(
        private userService: UserService,
        private tokenService: TokenService
    ){}

    async signup(signupData: SignupDto){
        const {email, password} = signupData;

        //Check the Existence of the User
        const existingUser = await this.userService.findUserByEmail(email);

        if(existingUser){
            throw new UnauthorizedException({message:"Email Already Exist!!"})
        }

        //Hash the Password
        const hashedPassword = await this.tokenService.hash(password)

        return await this.userService.createUser({...signupData, password:hashedPassword});
    }


    async login(credential: LoginDto){
        const {email, password} = credential;
        
        //Checking Existence of the User

        const existingUser = await this.userService.findUserByEmail(email);
        
        if(!existingUser){
            throw new NotFoundException({message:"Email Invalid Credentials!!"})
        }

        // Matching the Password given by user and password in our database

        const isValid = await this.tokenService.compare(password, existingUser.password)

        if(!isValid)
            throw new UnauthorizedException({message:"Invalid Credentials"})

        const payload = {userId:existingUser._id, role:existingUser.role}
        const accessToken = await this.tokenService.sign(payload);
        existingUser.isActive = true;
        existingUser.save();
        return {accessToken};
    }

}

