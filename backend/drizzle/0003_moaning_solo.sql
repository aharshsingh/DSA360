ALTER TABLE "users" ALTER COLUMN "password" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "user_question_status" ADD COLUMN "category_id" uuid NOT NULL;--> statement-breakpoint
ALTER TABLE "user_question_status" ADD CONSTRAINT "user_question_status_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE no action ON UPDATE no action;