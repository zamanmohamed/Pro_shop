import express from "express";
const router = express.Router();
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUser,
} from "../controllers/userControllers.js";
import { protect, admin } from "../middleware/authMiddleware.js";

//මෙහිදී  isAdmin --> true  නම් පමණ්ක් get request එක වැඩ කරයි
router.route("/").post(registerUser).get(protect, admin, getUsers);

router.post("/login", authUser);

/*මෙම routes 2ක protect කර ඇති බැවින් 
headers හි authorization තුල හරිම userට අදාල JWT token 
එක තිබුනොත් පමණයි මෙම routes වලට ඇතුලුවිය හැක්කෙ*/
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

router.route("/:id").delete(protect, admin, deleteUser);

export default router;
