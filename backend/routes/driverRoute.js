import express from "express";
import { getDriver } from "../controller/driverController.js"; // Đảm bảo thêm đuôi .js
import { getGrandprix } from "../controller/grandprixController.js";
import { getTeamStanding } from "../controller/teamStandController.js";
const driverRouter = express.Router();

driverRouter.get("/getDriver", getDriver); // Sử dụng đúng tên hàm
driverRouter.get("/getGrandprix", getGrandprix);
driverRouter.get("/getTeamStanding", getTeamStanding);
export default driverRouter;