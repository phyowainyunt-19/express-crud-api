import express from "express";
import { v4 as uuidv4 } from "uuid";

// import user controller
import {
  getUsers,
  createUser,
  getSpecificUser,
  deleteSpecificUser,
  updateSpecificUser,
} from "../controllers/controller.user.js";

const router = express.Router();

router.get("/", getUsers);

router.post("/", createUser);

router.get("/:id", getSpecificUser);

router.delete("/:id", deleteSpecificUser);

router.patch("/:id", updateSpecificUser);

export default router;
