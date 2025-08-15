import { Request } from 'express';

interface RequestWithJwt extends Request {
  payload: JwtPayload;
}

interface UnverifiedJwtPayload {
  iss?: string;
  guild_id?: string;
  exp?: number;
}

interface JwtPayload {
  iss: string;
  guild_id: string;
  exp: number;
}

export { RequestWithJwt, UnverifiedJwtPayload, JwtPayload };
