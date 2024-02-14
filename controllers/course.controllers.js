const { response } = require("express");
const Course = require("../models/Courses");
const { Types } = require("mongoose");

const coursesData = async (req, res = response) => {
  try {
    let courses = await Course.find();
    res.json({
      ok: true,
      courses: courses.map((course) => ({
        _id: course._id,
        courseName: course.courseName,
        mandatory: course.mandatory,
        topics: course.topics.map((topic) => ({
          topicName: topic.topicName,
          _id: topic._id,
          lessons: topic.lessons.map((lesson) => ({
            _id: lesson._id,
            videoId: lesson.videoId,
            videoName: lesson.videoName,
            description: lesson.description,
            videoUrl: lesson.videoUrl,
            length: lesson.length,
            rating: lesson.rating,
            typeLessson: lesson.typeLessson,
          })),
        })),
      })),
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error al acceder a los cursos",
    });
  }
};

const createCourse = async (req, res = response) => {
  try {
    const { courseName, topics } = req.body;

    const newTopics = topics.map((topic) => {
      const newTopicId = new Types.ObjectId();
      return {
        _id: newTopicId,
        topicName: topic.topicName,
        lessons: topic.lessons.map((lesson) => {
          const newLessonId = new Types.ObjectId();
          return {
            _id: newLessonId,
            videoId: lesson.videoId,
            videoName: lesson.videoName,
            description: lesson.description,
            videoUrl: lesson.videoUrl,
            length: lesson.length,
            rating: lesson.rating,
            typeLesson: lesson.typeLesson,
          };
        }),
      };
    });

    const newCourse = await Course.create({
      courseName,
      topics: newTopics,
    });

    res.json({
      ok: true,
      course: {
        _id: newCourse._id,
        courseName: newCourse.courseName,
        topics: newCourse.topics.map((topic) => ({
          _id: topic._id,
          topicName: topic.topicName,
          lessons: topic.lessons.map((lesson) => ({
            _id: lesson._id,
            videoId: lesson.videoId,
            videoName: lesson.videoName,
            description: lesson.description,
            videoUrl: lesson.videoUrl,
            length: lesson.length,
            rating: lesson.rating,
            typeLesson: lesson.typeLesson,
          })),
        })),
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error al crear el curso",
    });
  }
};

module.exports = {
  coursesData,
  createCourse,
};
