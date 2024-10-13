import pool from '../config/db.js'; // Đường dẫn tới file db.js

// Hàm để lấy dữ liệu từ database

const getGrandprix = (req, res) => {
    pool.query('SELECT * FROM grandprixresults', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
};


export { getGrandprix }