const express = require("express")
const Router = express.Router()
const { check } = require("express-validator")
const AuthController = require("../Controllers/Company/AuthController")
const EmployeeController = require("../Controllers/Employee/EmployeeController")

const ValidateEmployee = [
  check("Staffid")
    .exists()
    .withMessage("Invalid Request")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Please Provide Staff ID")
    .bail()
    .isNumeric()
    .withMessage("Staff ID only should contain Numbers"),
  // #######################################################################
  check("Name")
    .exists()
    .withMessage("Invalid Request")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Please Provide Name")
    .bail()
    .matches(/^[a-z A-Z]+$/i)
    .withMessage("Invalid Employee Name"),
  // #######################################################################
  check("Gender")
    .exists()
    .withMessage("Invalid Request")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Please Provide Gender")
    .bail()
    .isIn(["male", "female"])
    .withMessage("Gender is either Male or Female"),
  // #######################################################################
  check("Email")
    .exists()
    .withMessage("Invalid Request")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Please Provide An Email Address")
    .bail()
    .isEmail()
    .withMessage("Invalid Email Address")
    .normalizeEmail(),
  // #######################################################################
  check("Nationality")
    .exists()
    .withMessage("Invalid Request")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Please Provide Nationality")
    .bail()
    .matches(/^[a-z A-Z]+$/i)
    .withMessage("Invalid Nationality"),
  // #######################################################################
  check("MobilePhone")
    .exists()
    .withMessage("Invalid Request")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Please Provide MobilePhone")
    .bail()
    .isNumeric()
    .withMessage("MobilePhone only should contain Numbers"),
  // #######################################################################
  check("EmployeeCategory")
    .exists()
    .withMessage("Invalid Request")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Please Provide Employee Category")
    .bail()
    .isIn(["A", "B", "C", "D"])
    .withMessage("Invalid Category must be A, B, C, D"),
  // #######################################################################
  check("DateOfJoin")
    .exists()
    .withMessage("Invalid Request")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Please Provide Date Of Join")
    .bail()
    .matches(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/)
    .withMessage("Invalid Date"),
  check("EmployeeSalary")
    .exists()
    .withMessage("Invalid Request")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Please Provide Employee Salary")
    .bail()
    .isFloat()
    .withMessage("Invalid Salary"),
]

const ValidateEmployeeOptional = [
  check("Staffid")
    .optional()
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Please Provide Staff ID")
    .bail()
    .isNumeric()
    .withMessage("Staff ID only should contain Numbers"),
  // #######################################################################
  check("Name")
    .optional()
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Please Provide Name")
    .bail()
    .isString()
    .withMessage("Invalid Employee Name"),
  // #######################################################################
  check("Gender")
    .optional()
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Please Provide Gender")
    .bail()
    .isIn(["male", "female"])
    .withMessage("Gender is either Male or Female"),
  // #######################################################################
  check("Email")
    .optional()
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Please Provide An Email Address")
    .bail()
    .isEmail()
    .withMessage("Invalid Email Address")
    .normalizeEmail(),
  // #######################################################################
  check("Nationality")
    .optional()
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Please Provide Nationality")
    .bail()
    .isAlpha()
    .withMessage("Invalid Nationality"),
  // #######################################################################
  check("MobilePhone")
    .optional()
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Please Provide MobilePhone")
    .bail()
    .isNumeric()
    .withMessage("MobilePhone only should contain Numbers"),
  // #######################################################################
  check("EmployeeCategory")
    .optional()
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Please Provide Employee Category")
    .bail()
    .isIn(["A", "B", "C", "D"])
    .withMessage("Invalid Category must be A, B, C, D"),
  // #######################################################################
  check("DateOfJoin")
    .optional()
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Please Provide Date Of Join")
    .bail()
    .isString()
    .withMessage("Invalid Date"),
  check("EmployeeSalary")
    .optional()
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Please Provide Employee Salary")
    .bail()
    .isFloat()
    .withMessage("Invalid Salary"),
]

// Get All Employees - Private
Router.get(
  "/",
  AuthController.ProtectAccess,
  EmployeeController.GetAllEmployees
)

// Add New Employee - Private
Router.post(
  "/",
  AuthController.ProtectAccess,
  ValidateEmployee,
  EmployeeController.CreateEmployee
)

// Update An Employee - Private
Router.put(
  "/:id",
  AuthController.ProtectAccess,
  ValidateEmployeeOptional,
  EmployeeController.UpdateEmployee
)

// Delete an Employee - Private
Router.delete(
  "/:id",
  AuthController.ProtectAccess,
  EmployeeController.DeleteEmployee
)

module.exports = Router
