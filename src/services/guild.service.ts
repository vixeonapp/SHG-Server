import { Injectable } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { db } from 'src/db';
import { guilds, SHGuild } from 'src/db/schema';

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
}
