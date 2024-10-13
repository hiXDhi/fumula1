import { createPool } from 'mysql';

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "formula1",
    connectionLimit: 10
});

pool.getConnection((err, connection) => {
    if (err) {
        return console.log("Connection failed: ", err);
    }
    console.log("Connected successfully!");
    connection.release(); // Release the connection back to the pool
});

export default pool;