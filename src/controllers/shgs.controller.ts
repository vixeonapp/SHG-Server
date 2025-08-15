import { Controller, Get, NotFoundException, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/guards/auth.guard';
import { GuildService } from 'src/services/guild.service';
import { RequestWithJwt } from 'src/types/jwt';

@Controller()
export class ShgsController {
  private readonly guildService: GuildService;

  constructor(guildService: GuildService) {
    this.guildService = guildService;
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id/guild')
  async getGuild(@Req() req: RequestWithJwt) {
    const { id } = req.params;

    if (!id || isNaN(Number(id))) {
      throw new Error('Invalid guild ID');
    }

    const guild = await this.guildService.getGuildById(Number(id));

    if (!guild) {
      throw new NotFoundException('Guild not found');
    }

    return guild;
  }
}
