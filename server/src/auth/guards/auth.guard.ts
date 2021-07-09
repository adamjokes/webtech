import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService,) {}

  canActivate(context: ExecutionContext): boolean {

    const request = context.switchToHttp().getRequest()
    // console.log('request',request);
    
    if (request.headers.authorization) {
        
      const result = this.jwtService.verify(request.headers.authorization);
    //   console.log('result',result);
      return result
      
    }
    return false
  }
}