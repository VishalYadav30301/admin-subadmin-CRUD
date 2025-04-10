import { Controller, Delete, Get, Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { Role } from 'src/decorators/role.decorator';
import { UserRole } from 'src/models/user.schema';
import { AuthGuard } from 'src/guards/auth/auth.guard';

@Controller('admin')
@Role(UserRole.SUPER_ADMIN)
@UseGuards(AuthGuard)

export class UserController {

    constructor(private userService: UserService){}

    @Get("getAdmins")
    async findAll(){
        return this.userService.findAllUser();
    }

    @Get("getById/:id")
    async findUseryId(@Param("id") id:any){
        return this.userService.findUserById(id);
    }


    @Get("getByEmail/:email")
    async findUserByEmail(@Param("email") email:string){
        return this.userService.findUserByEmail(email);
    }

    @Delete("deleteById/:id")
    async deleteUserById(@Param("id") id:any){
        return this.userService.deleteUserById(id);
    }

    @Delete("deleteByEmail/:email")
    async deleteUserByEmail(@Param("id") email:string){
        return this.userService.deleteUserByEmail(email);
    }
}
