const express = require('express');
const app = express();
const port = 3000;

// Giả lập dữ liệu giống như bạn đã cung cấp trước đó
const results = [
    { grandPrix: "Bahrain", date: "02 Mar 2024", winner: "Max Verstappen", car: "Red Bull Racing Honda RBPT", laps: 57, time: "1:31:44.742" },
    { grandPrix: "Saudi Arabia", date: "09 Mar 2024", winner: "Max Verstappen", car: "Red Bull Racing Honda RBPT", laps: 50, time: "1:20:43.273" },
    // Thêm các cuộc đua khác ở đây...
];

const driverStandings = [
    { pos: 1, driver: "Max Verstappen", nationality: "NED", car: "Red Bull Racing Honda RBPT", pts: 331 },
    { pos: 2, driver: "Lando Norris", nationality: "GBR", car: "McLaren Mercedes", pts: 279 },
    // Thêm các tay đua khác ở đây...
];

const constructorStandings = [
    { pos: 1, team: "McLaren Mercedes", pts: 516 },
    { pos: 2, team: "Red Bull Racing Honda RBPT", pts: 475 },
    // Thêm các đội đua khác ở đây...
];

// Route trả về dữ liệu các cuộc đua
app.get('/api/races', (req, res) => {
    res.json(results);
});

// Route trả về dữ liệu bảng xếp hạng tay đua
app.get('/api/drivers', (req, res) => {
    res.json(driverStandings);
});

// Route trả về dữ liệu bảng xếp hạng đội đua
app.get('/api/constructors', (req, res) => {
    res.json(constructorStandings);
});

// Bật server
app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});
