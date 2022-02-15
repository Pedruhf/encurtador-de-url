import { Router } from "express";
import {
  createUserController,
  updateUserController,
  deleteUserController,
  loginUserController,
} from "../../main/composers/user";
import { authUser } from "../../main/middlewares/auth";

const userRoutes = Router();

userRoutes.post("/", (req, res) => {
  createUserController.handle(req, res);
});

userRoutes.put("/", authUser, (req, res) => {
  updateUserController.handle(req, res);
});

userRoutes.delete("/", authUser, (req, res) => {
  deleteUserController.handle(req, res);
});

userRoutes.post("/login", (req, res) => {
  loginUserController.handle(req, res);
});

export { userRoutes };