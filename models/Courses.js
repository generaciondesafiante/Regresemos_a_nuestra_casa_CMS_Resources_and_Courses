const { Schema, model } = require("mongoose");

const CourseSchema = new Schema({
  courseName: {
    type: String,
    required: true,
    trim: true,
  },

  topics: [
    {
      topicName: { type: String, required: true, trim: true },
      lessons: [
        {
          videoId: {
            type: String,
            required: true,
            trim: true,
          },
          videoName: {
            type: String,
            required: true,
            trim: true,
          },
          description: {
            type: String,
            required: true,
            trim: true,
          },
          videoUrl: {
            type: String,
            required: true,
            trim: true,
          },
          rating: {
            type: Number,
          },
        },
      ],
    },
  ],
});

module.exports = model("Courses", CourseSchema);
