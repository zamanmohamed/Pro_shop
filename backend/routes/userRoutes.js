import express from "express";
const router = express.Router();
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
} from "../controllers/userControllers.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(registerUser);
router.post("/login", authUser);

/*මෙම routes 2ක protect කර ඇති බැවින් 
headers හි authorization තුල හරිම userට අදාල JWT token 
එක තිබුනොත් පමණයි මෙම routes වලට ඇතුලුවිය හැක්කෙ*/
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
