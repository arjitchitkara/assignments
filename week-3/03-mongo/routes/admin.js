const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  try {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    await Admin.create({
      username: username,
      password: password,
    });
    res.status(201).send("Admin created");
  } catch (error) {
    res.status(500).send("Error creating admin");
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  try {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imagelink = req.body.imagelink;

    const newCourse = await Course.create({
      title: title,
      description: description,
      price: price,
      imagelink: imagelink,
    });
    console.log(newCourse);
    res.status(201).json({
      message: "Course created",
      courseId: newCourse._id, //important
    });
  } catch (error) {
    res.status(500).send("Error creating course");
  }
});

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic

  Course.find({}).then(function (response) {
    res.json({
      courses: response,
    });
  });
});
//better way ↓
// router.get("/courses", adminMiddleware, async (req, res) => {
//   // Implement fetching all courses logic

//   const response = await Course.find({});
//   res.json({
//     courses: response,
//   });
// });

module.exports = router;
