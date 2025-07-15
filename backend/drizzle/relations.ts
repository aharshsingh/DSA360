import { relations } from "drizzle-orm/relations";
import { categories, topicCategoryMap, topics, questions, questionTopicMap, users, userQuestionStatus } from "./schema";

export const topicCategoryMapRelations = relations(topicCategoryMap, ({one}) => ({
	category: one(categories, {
		fields: [topicCategoryMap.categoryId],
		references: [categories.id]
	}),
	topic: one(topics, {
		fields: [topicCategoryMap.topicId],
		references: [topics.id]
	}),
}));

export const categoriesRelations = relations(categories, ({many}) => ({
	topicCategoryMaps: many(topicCategoryMap),
}));

export const topicsRelations = relations(topics, ({many}) => ({
	topicCategoryMaps: many(topicCategoryMap),
	questionTopicMaps: many(questionTopicMap),
}));

export const questionTopicMapRelations = relations(questionTopicMap, ({one}) => ({
	question: one(questions, {
		fields: [questionTopicMap.questionId],
		references: [questions.id]
	}),
	topic: one(topics, {
		fields: [questionTopicMap.topicId],
		references: [topics.id]
	}),
}));

export const questionsRelations = relations(questions, ({many}) => ({
	questionTopicMaps: many(questionTopicMap),
	userQuestionStatuses: many(userQuestionStatus),
}));

export const userQuestionStatusRelations = relations(userQuestionStatus, ({one}) => ({
	user: one(users, {
		fields: [userQuestionStatus.userId],
		references: [users.id]
	}),
	question: one(questions, {
		fields: [userQuestionStatus.questionId],
		references: [questions.id]
	}),
}));

export const usersRelations = relations(users, ({many}) => ({
	userQuestionStatuses: many(userQuestionStatus),
}));