import express from "express";
import {
  getAllUsers,
  register,
  login,
  getMyProfile,
  logout,
  update,
} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.get("/all", getAllUsers);

router.post("/new", register);
router.post("/login", login);
router.get("/logout", logout);
router.put("/update", isAuthenticated, update);

router.get("/me", isAuthenticated, getMyProfile);
// ===========================================================
// router.get("/userid/special", special);
/*
// -------------------------------------------
router
  .route("/userid/:id")
  .get(getUserDetails)
  .put(updateUserDetails)
  .delete(deleteUser);
//below 3 is same as above line 
router.get("/userid/:id", getUserDetails);
router.put("/userid/:id", updateUserDetails);
router.delete("/userid/:id", deleteUser);
*/
export default router;
