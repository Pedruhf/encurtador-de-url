import { Router } from "express";
import {
  createUrlController,
  deleteUrlController,
  redirectUrlController,
  getMostAccessedUrlsController,
} from "../../main/composers/url";
import { authUser } from "../../main/middlewares/auth";

const urlRoutes = Router();

urlRoutes.get("/:code", (req, res) => {
  redirectUrlController.handle(req, res);
});

urlRoutes.get("/urls/most-accesseds", (req, res) => {
  getMostAccessedUrlsController.handle(req, res);
});

urlRoutes.post("/", (req, res) => {
  createUrlController.handle(req, res);
});

urlRoutes.post("/auth", authUser, (req, res) => {
  createUrlController.handle(req, res);
});

urlRoutes.delete("/:id", authUser, (req, res) => {
  deleteUrlController.handle(req, res);
});


export { urlRoutes };
