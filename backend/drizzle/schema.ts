import { pgTable, foreignKey, serial, uuid, varchar, unique, primaryKey, text } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const topicCategoryMap = pgTable("topic_category_map", {
	id: serial().primaryKey().notNull(),
	categoryId: uuid("category_id"),
	topicId: uuid("topic_id"),
}, (table) => [
	foreignKey({
			columns: [table.categoryId],
			foreignColumns: [categories.id],
			name: "topic_category_map_category_id_categories_id_fk"
		}),
	foreignKey({
			columns: [table.topicId],
			foreignColumns: [topics.id],
			name: "topic_category_map_topic_id_topics_id_fk"
		}),
]);

export const questions = pgTable("questions", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	title: varchar({ length: 255 }).notNull(),
	problemLink: varchar("problem_link", { length: 500 }),
	difficulty: varchar({ length: 50 }),
});

export const questionTopicMap = pgTable("question_topic_map", {
	id: serial().primaryKey().notNull(),
	questionId: uuid("question_id"),
	topicId: uuid("topic_id"),
}, (table) => [
	foreignKey({
			columns: [table.questionId],
			foreignColumns: [questions.id],
			name: "question_topic_map_question_id_questions_id_fk"
		}),
	foreignKey({
			columns: [table.topicId],
			foreignColumns: [topics.id],
			name: "question_topic_map_topic_id_topics_id_fk"
		}),
]);

export const topics = pgTable("topics", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	name: varchar({ length: 255 }).notNull(),
});

export const users = pgTable("users", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	username: varchar({ length: 255 }).notNull(),
	email: varchar({ length: 255 }).notNull(),
	password: varchar({ length: 255 }),
	role: varchar({ length: 50 }).default('user').notNull(),
}, (table) => [
	unique("users_email_unique").on(table.email),
]);

export const categories = pgTable("categories", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	name: varchar({ length: 255 }).notNull(),
});

export const userQuestionStatus = pgTable("user_question_status", {
	userId: uuid("user_id").notNull(),
	questionId: uuid("question_id").notNull(),
	status: varchar({ length: 50 }).default('unsolved').notNull(),
	note: text(),
}, (table) => [
	foreignKey({
			columns: [table.userId],
			foreignColumns: [users.id],
			name: "user_question_status_user_id_users_id_fk"
		}),
	foreignKey({
			columns: [table.questionId],
			foreignColumns: [questions.id],
			name: "user_question_status_question_id_questions_id_fk"
		}),
	primaryKey({ columns: [table.userId, table.questionId], name: "user_question_status_user_id_question_id_pk"}),
]);
