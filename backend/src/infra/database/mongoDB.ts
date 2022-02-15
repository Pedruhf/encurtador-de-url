import mongoose from 'mongoose';
import config from "../../main/config";

const DB = config.MONGO_URL;
mongoose.connect(DB);
mongoose.connection.on("connected", () => { console.log("MONGODB CONNECTED") });
