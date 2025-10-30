const CourseModel = require("../models/course");
const lectureModel = require ('../models/lecture')
class CourseController {
  static CreateCourse = async (req, res) => {
    try {
      const { courseTitle, category } = req.body;
      if (!courseTitle || !category) {
        return res.status(400).json({
          message: "Course title and category is required.",
        });
      }

      const course = await CourseModel.create({
        courseTitle,
        category,
        creator: req.id,
      });

      return res.status(201).json({
        course,
        message: "Course created.",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Failed to create course",
      });
    }
  };

  static EditCourse = async (req, res) => {
    try {
      const courseId = req.params.courseId;
      const {
        courseTitle,
        subTitle,
        description,
        category,
        courseLevel,
        coursePrice,
      } = req.body;
      const thumbnail = req.file;

      let course = await CourseModel.findById(courseId);
      if (!course) {
        return res.status(404).json({
          message: "Course not found!",
        });
      }
      let courseThumbnail;
      if (thumbnail) {
        if (course.courseThumbnail) {
          const publicId = course.courseThumbnail
            .split("/")
            .pop()
            .split(".")[0];
          await deleteMediaFromCloudinary(publicId); // delete old image
        }
        // upload a thumbnail on clourdinary
        courseThumbnail = await uploadMedia(thumbnail.path);
      }

      const updateData = {
        courseTitle,
        subTitle,
        description,
        category,
        courseLevel,
        coursePrice,
        courseThumbnail: courseThumbnail?.secure_url,
      };

      course = await CourseModel.findByIdAndUpdate(courseId, updateData, {
        new: true,
      });

      return res.status(200).json({
        course,
        message: "Course updated successfully.",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Failed to create course",
      });
    }
  };

  static GetCourseByID = async (req, res) => {
    try {
      const { courseId } = req.params;

      const course = await CourseModel.findById(courseId);

      if (!course) {
        return res.status(404).json({
          message: "Course not found!",
        });
      }
      return res.status(200).json({
        course,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Failed to get course by id",
      });
    }
  };



  // Lecture

   static CreateLecture = async (req, res) => {
    try {
      const {lectureTitle} = req.body;
        const {courseId} = req.params;

        if(!lectureTitle || !courseId){
            return res.status(400).json({
                message:"Lecture title is required"
            })
        };

        // create lecture
        const lecture = await lectureModel.create({lectureTitle});

        const course = await CourseModel.findById(courseId);
        if(course){
            course.lectures.push(lecture._id);
            await course.save();
        }

        return res.status(201).json({
            lecture,
            message:"Lecture created successfully."
        });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Failed to create course",
      });
    }
  };

  static GetCourseLecture = async (req, res) => {
    try {
      const {courseId} = req.params;
        const course = await CourseModel.findById(courseId).populate("lectures");
        if(!course){
            return res.status(404).json({
                message:"Course not found"
            })
        }
        return res.status(200).json({
            lectures: course.lectures
        });
      
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Failed to get course by id",
      });
    }
  };

  static EditLecture = async (req, res) => {
    try {
      const {lectureTitle, videoInfo, isPreviewFree} = req.body;
        
        const {courseId, lectureId} = req.params;
        const lecture = await lectureModel.findById(lectureId);
        if(!lecture){
            return res.status(404).json({
                message:"Lecture not found!"
            })
        }

        // update lecture
        if(lectureTitle) lecture.lectureTitle = lectureTitle;
        if(videoInfo?.videoUrl) lecture.videoUrl = videoInfo.videoUrl;
        if(videoInfo?.publicId) lecture.publicId = videoInfo.publicId;
        lecture.isPreviewFree = isPreviewFree;

        await lecture.save();

        // Ensure the course still has the lecture id if it was not aleardy added;
        const course = await CourseModel.findById(courseId);
        if(course && !course.lectures.includes(lecture._id)){
            course.lectures.push(lecture._id);
            await course.save();
        };
        return res.status(200).json({
            lecture,
            message:"Lecture updated successfully."
        })

    
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Failed to create course",
      });
    }
  };

  static RemoveLecture = async (req, res) => {
    try {
      const {lectureId} = req.params;
        const lecture = await lectureModel.findByIdAndDelete(lectureId);
        if(!lecture){
            return res.status(404).json({
                message:"Lecture not found!"
            });
        }
        // delete the lecture from couldinary as well
        if(lecture.publicId){
            await deleteVideoFromCloudinary(lecture.publicId);
        }

        // Remove the lecture reference from the associated course
        await Course.updateOne(
            {lectures:lectureId}, // find the course that contains the lecture
            {$pull:{lectures:lectureId}} // Remove the lectures id from the lectures array
        );

        return res.status(200).json({
            message:"Lecture removed successfully."
        })
      
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Failed to get course by id",
      });
    }
  };

  static GetLectureByID = async (req, res) => {
    try {
      const {lectureId} = req.params;
        const lecture = await lectureModel.findById(lectureId);
        if(!lecture){
            return res.status(404).json({
                message:"Lecture not found!"
            });
        }
        return res.status(200).json({
            lecture
        });
      
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Failed to get course by id",
      });
    }
  };



 


}
module.exports = CourseController;
