import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { JwksService } from 'src/services/jwks.service';
import {
  JwtPayload,
  RequestWithJwt,
  UnverifiedJwtPayload,
} from 'src/types/jwt';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly jwksService: JwksService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<RequestWithJwt>();
    const authHeader = request.headers['authorization'];
    const token = authHeader?.startsWith('Bearer ')
      ? authHeader.slice(7)
      : undefined;

    if (!token) {
      throw new UnauthorizedException('Not authorized.');
    }

    try {
      // Verify if token comes from official vixeon server
      const payload: UnverifiedJwtPayload =
        await this.jwksService.verifyToken(token);
      if (payload === null || payload === undefined) {
        throw new UnauthorizedException('Invalid session token');
      }
      if (!payload.iss || !payload.guild_id || !payload.exp) {
        throw new UnauthorizedException('Invalid session token');
      }

      request.payload = payload as JwtPayload;

      return true;
    } catch (error) {
      console.error(error);
      throw new UnauthorizedException('Invalid session token');
    }
  }
}
