import { Injectable } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { db } from 'src/db';
import { channels, guilds, SHChannel, SHGuild } from 'src/db/schema';

@Injectable()
export class GuildService {
  constructor() {
    // Initialization logic if needed
  }

  async getGuildById(id: number): Promise<SHGuild | undefined> {
    const result = await db
      .select()
      .from(guilds)
      .where(eq(guilds.id, id))
      .limit(1)
      .execute();
    return result[0];
  }

  async getGuildChannels(id: number): Promise<SHChannel[]> {
    const result = await db
      .select()
      .from(channels)
      .where(eq(channels.guild_id, id))
      .execute();
    return result;
  }
}
