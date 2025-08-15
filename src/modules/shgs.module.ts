import { Module } from '@nestjs/common';
import { JwtAuthGuard } from 'src/guards/auth.guard';
import { JwksService } from 'src/services/jwks.service';

@Module({
  imports: [],
  controllers: [],
  providers: [JwtAuthGuard, JwksService],
  exports: [JwtAuthGuard],
})
export class SHGSModule {}
