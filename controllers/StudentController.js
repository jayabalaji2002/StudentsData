// Importing Validation.js
// const { validateEmail, validatePhoneNumber } = require("../validation");

const Student = require("../models/Studentee");

// Show the data of list of employees from models

const index = (req, res, next) => {
  Student.find()
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: "An error Occured!",
      });
    });
};

// Showing Single employee only
const show = (req, res, next) => {
  let studentID = req.body.studentID;
  Student.findById(studentID)
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: "An error Occured!",
      });
    });
};

// adding new employee
const store = (req, res, next) => {
//   const { name, designation, email, phone, age, avatar } = req.body;

  let student = new Student({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    fatherName: req.body.fatherName,
    email: req.body.email,
    age: req.body.age,
    phone: req.body.phone
  });

  // Validate email and phone number before saving
//   if (!validateEmail(email)) {
//     return res.json({ message: "Invalid email" });
//   }

//   if (!validatePhoneNumber(phone)) {
//     return res.json({ message: "Invalid phone number" });
//   }

  // Check if age is less than 20
//   if (age > 20) {
//     return res.json({ message: "Employee must be under 20 years old" });
//   }

//   if (req.files) {
//     let path = "";
//     req.files.forEach(function (files, index, arr) {
//       path = path + files.path + ",";
//     });
//     path = path.substring(0, path.lastIndexOf(","));
//     employee.avatar = path;
//   }
  student
    .save()
    .then((response) => {
      res.json({
        message: "Student Data Added Successfully!",
      });
    })
    .catch((error) => {
      res.json({
        message: "An error Occured While Storing!",
      });
    });
};

// update an employee

const update = (req, res, next) => {
  let studentID = req.body.studentID;

  let updateData = {
    firstName: req.body.firstNamename,
    lastName: req.body.lastName,
    fatherName: req.body.fatherName,
    email: req.body.email,
    age: req.body.age,
    phone: req.body.phone
  };

  Student.findByIdAndUpdate(studentID, { $set: updateData })
    .then(() => {
      res.json({
        message: "Student Data update Successfully!",
      });
    })

    .catch((error) => {
      res.json({
        message: "An error Occured while Updating Schenreo!",
      });
    });
};


// delete an employee
const destroy = (req, res, next) => {
  let studentID = req.body.studentID;

  Student.findOneAndDelete({ _id: studentID })
    .then(() => {
      res.json({
        message: "Student Data Deleted Successfully!",
      })
    })
    .catch((error) => {
      res.json({
        message: "An error Occurred While Deleting Data",
      })
    })
}


module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
