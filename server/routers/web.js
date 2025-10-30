const express = require('express')
const UserController = require('../controllers/userController')
const route = express.Router()
const isauth = require('../middleware/isauth')
const upload = require('../config/multer')
const CourseController = require('../controllers/courseContriller')

route.post('/signUp',UserController.signUp)
route.post('/signIn',UserController.signIn)
route.get('/logout',UserController.logOut)
route.get('/getUserProfile',isauth,UserController.getUserProfile)
route.put('/updateProfile',isauth,upload.single('profilePhoto'),UserController.updateProfile)

//coursecontroller
route.post('/CreateCourse',CourseController.CreateCourse)
route.put('/EditCourse',CourseController.EditCourse)
route.get('/GetCourseBYID',CourseController.GetCourseByID)
route.get('/getuserbyid/:courseId',CourseController.GetCourseByID)
//route.post('/coursedeletebyid/:courseId',CourseController.courseDelete)



//lecture
route.get('/CreateLecture',CourseController.CreateLecture)




 




module.exports =route