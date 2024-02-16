const { Schema, model } = require("mongoose");

const LessonSchema = new Schema({
  videoId: { type: String, required: true, trim: true },
  videoName: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  videoUrl: { type: String, required: true, trim: true },
  length: { type: String, required: false },
  rating: { type: Number },
  typeLesson: { type: String, required: false },
  sequentialLesson: { type: String, required: false },
});

const TopicSchema = new Schema({
  topicName: { type: String, required: true, trim: true },
  sequentialTopic: { type: String, required: false },
  lessons: [LessonSchema],
});

const CourseSchema = new Schema({
  courseName: { type: String, required: true, trim: true },
  mandatory: { type: Boolean, required: true, trim: true },
  topics: [TopicSchema],
});

module.exports = model("Courses", CourseSchema);
