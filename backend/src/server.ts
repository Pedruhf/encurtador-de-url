import "./infra/database/mongoDB";
import express from "express";
import config from "./main/config";
import { userRoutes } from "./presentation/routes/userRoutes";
import { urlRoutes } from "./presentation/routes/urlRoutes";

const app = express();

app.use(express.json());
app.use("/users", userRoutes);
app.use("/", urlRoutes);

app.listen(config.PORT, () => {
  console.log(`SERVER IS RUNNING IN ${config.APP_URL}:${config.PORT}`);
});