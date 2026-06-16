CREATE TABLE "products" (
	"id" text PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"description" varchar(1000) NOT NULL,
	"price" integer NOT NULL,
	"category" varchar(255) NOT NULL,
	"images" varchar(255)[] NOT NULL,
	"stock" integer NOT NULL,
	"rating" integer,
	"created_at" timestamp DEFAULT now() NOT NULL
);
