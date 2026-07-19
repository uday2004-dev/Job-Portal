import express from "express";
import authenticateToken from "../middleware/isAuthenticated.js";
import {
  getAdminJobs,
  getAlljobs,
  getJobById,
  postjob,
} from "../controllers/job.controllers.js";

const router = express.Router();

// ✅ protected (admin / logged in)
router.route("/post").post(authenticateToken, postjob);
router.route("/getadminjobs").get(authenticateToken, getAdminJobs);

// ✅ public routes
router.route("/get").get(getAlljobs);
router.route("/get/:id").get(getJobById);

export default router;