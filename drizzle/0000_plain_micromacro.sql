CREATE TABLE "shortened_links" (
	"id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "shortened_links_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"user_id" varchar(255) NOT NULL,
	"original_url" varchar(2048) NOT NULL,
	"slug" varchar(50) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX "slug_unique_idx" ON "shortened_links" USING btree ("slug");--> statement-breakpoint
CREATE INDEX "user_id_idx" ON "shortened_links" USING btree ("user_id");