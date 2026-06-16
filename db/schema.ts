import {
  pgTable,
  text,
  varchar,
  integer,
  timestamp,
} from "drizzle-orm/pg-core";

export const products = pgTable("products", {
  id: text("id").primaryKey().notNull(),

  title: varchar("title", { length: 255 }).notNull(),

  description: varchar("description", {
    length: 1000,
  }).notNull(),

  price: integer("price").notNull(),

  category: varchar("category", { length: 255 }).notNull(),

  images: varchar("images", { length: 255 }).array().notNull(),

  stock: integer("stock").notNull(),

  rating: integer("rating"),

  createdAt: timestamp("created_at")
    .defaultNow()
    .notNull(),
});