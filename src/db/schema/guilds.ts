import { InferSelectModel } from 'drizzle-orm';
import { bigint, pgTable, varchar } from 'drizzle-orm/pg-core';

export const guilds = pgTable('guilds', {
  id: bigint({ mode: 'number' }).notNull().primaryKey(),
  title: varchar({ length: 15 }).notNull(),
  about: varchar({ length: 255 }),
  icon_url: varchar({ length: 255 }),
  banner_url: varchar({ length: 255 }),
  banner_color: varchar({ length: 6 }), // hex code (FFFFFF)
  file_limit: bigint({ mode: 'number' }).notNull().default(0), // in bytes
  link: varchar({ length: 255 }),
});

// SHGS SIDE
export type SHGuild = InferSelectModel<typeof guilds>;

export const channels = pgTable('channels', {
  id: bigint({ mode: 'number' }).notNull().primaryKey(),
  guild_id: bigint({ mode: 'number' })
    .notNull()
    .references(() => guilds.id, { onDelete: 'cascade' }),
  name: varchar({ length: 50 }).notNull(),
  type: varchar({ length: 10 }).notNull(), // 'text' or 'voice'
  description: varchar({ length: 255 }),
});

export type SHChannel = InferSelectModel<typeof channels>;
