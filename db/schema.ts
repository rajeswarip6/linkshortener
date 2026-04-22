import { pgTable, bigint, varchar, timestamp, uniqueIndex, index } from 'drizzle-orm/pg-core';

export const shortenedLinks = pgTable(
  'shortened_links',
  {
    id: bigint('id', { mode: 'number' }).primaryKey().generatedAlwaysAsIdentity(),
    userId: varchar('user_id', { length: 255 }).notNull(),
    originalUrl: varchar('original_url', { length: 2048 }).notNull(),
    slug: varchar('slug', { length: 50 }).notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
  },
  (table) => ({
    slugIndex: uniqueIndex('slug_unique_idx').on(table.slug),
    userIdIndex: index('user_id_idx').on(table.userId),
  })
);
