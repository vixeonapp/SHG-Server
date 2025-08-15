import { bigint, pgTable, varchar } from 'drizzle-orm/pg-core';

export const guilds = pgTable('guilds', {
  id: bigint({ mode: 'number' }).notNull().primaryKey(),
  title: varchar({ length: 15 }).notNull(),
  about: varchar({ length: 255 }),
  icon_url: varchar({ length: 255 }),
  banner_url: varchar({ length: 255 }),
  banner_color: varchar({ length: 6 }), // hex code (FFFFFF)
  file_limit: bigint({ mode: 'number' }).notNull().default(0), // in bytes
});
