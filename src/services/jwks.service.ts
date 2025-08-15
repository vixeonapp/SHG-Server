import { Injectable } from '@nestjs/common';
import { JwksClient, SigningKey } from 'jwks-rsa';
import { decode, verify, JwtPayload as DefaultJwtPayload } from 'jsonwebtoken';

interface JwtPayload extends DefaultJwtPayload {
  guild_id?: string;
}

@Injectable()
export class JwksService {
  private readonly client = new JwksClient({
    jwksUri: process.env.VIXEON_JWKS_URL ?? '',
    cache: true,
    cacheMaxEntries: 5,
    cacheMaxAge: 10 * 60 * 1000, // 10 minutes
  });

  private async getSigningKeyAsync(kid: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.client.getSigningKey(kid, (err: Error | null, key?: SigningKey) => {
        if (err) {
          reject(err);
          return;
        }
        if (!key) {
          reject(new Error(`Signing key not found for kid: ${kid}`));
          return;
        }
        resolve(key.getPublicKey());
      });
    });
  }

  async verifyToken(token: string): Promise<JwtPayload> {
    const decoded = decode(token, { complete: true }) as {
      header: { kid: string };
    } | null;

    if (decoded === null) {
      throw new Error('Failed to decode token');
    }

    if (!('header' in decoded) || !decoded.header?.kid) {
      throw new Error('No "kid" found in token header');
    }

    const signingKey = await this.getSigningKeyAsync(decoded.header.kid);

    return new Promise<JwtPayload>((resolve, reject) => {
      verify(
        token,
        signingKey,
        { algorithms: ['RS256'], issuer: 'vixeon' },
        (err, payload) => {
          if (err) {
            reject(new Error('Invalid token'));
            return;
          }
          resolve(payload as JwtPayload);
        },
      );
    });
  }
}
