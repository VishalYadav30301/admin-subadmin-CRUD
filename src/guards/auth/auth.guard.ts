import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { TokenService } from 'src/modules/token/token.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private tokenService: TokenService,
    private reflector: Reflector
  ){}
  async canActivate(
    context: ExecutionContext,
  )  {
    // Getting Request Object
    const request = context.switchToHttp().getRequest();

    //Checking the AccessToken
    const accessToken = request.headers.authorization?.split(" ")[1]

    if(!accessToken)
      return false;

    const requiredRole = this.reflector.getAllAndOverride("role", [context.getHandler(), context.getClass()])
    
    try{
      const payload = await this.tokenService.verify(accessToken);
      const {userId, role} = payload
      console.log({requiredRole, role})
      request.userId = userId
      return role === requiredRole;
    }catch(err){
      throw new UnauthorizedException("Login Required!!")
    }
  }
}
