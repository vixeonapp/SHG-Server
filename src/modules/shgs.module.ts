import { Module } from '@nestjs/common';
import { ShgsController } from 'src/controllers/shgs.controller';
import { JwtAuthGuard } from 'src/guards/auth.guard';
import { GuildService } from 'src/services/guild.service';
import { JwksService } from 'src/services/jwks.service';

@Module({
  imports: [],
  controllers: [ShgsController],
  providers: [JwtAuthGuard, JwksService, GuildService],
  exports: [JwtAuthGuard],
})
export class SHGSModule {}
