import express from "express";
import cors from "cors";
import driverRouter from "./routes/driverRoute.js"; // Đảm bảo thêm đuôi .js

// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use("/api", driverRouter); // Sử dụng router cho các API liên quan đến driver

app.get("/", (req, res) => {
    res.send("API Working");
});

app.listen(port, () => {
    console.log(`Server Start on http://localhost:${port}`);
});