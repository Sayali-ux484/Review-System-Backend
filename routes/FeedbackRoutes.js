import { createAdmin , createAlumni,createStudent,getAllUsers} from "../Controllers/usercontroller.js";
import { createCompany ,getCompanies} from "../Controllers/companyController.js";
import { createReview,getAllReviews } from "../Controllers/reviewController.js";
import { likeReviews } from "../Controllers/likesController.js";
import express from "express";
import { isAdmin } from "../Middleware/Middleware.js";

const router =express.Router()

router.post("/admin/create",createAdmin )
router.post("/alumni/create",createAlumni )
router.post("/student/create",createStudent )
router.post("/company/create",isAdmin,createCompany )
router.post("/review/create",createReview )
router.post("/like/create",likeReviews )


router.get("/user/get",getCompanies )
router.get("/user/get",getAllUsers )
router.get("/user/get",getAllReviews )

export default router;