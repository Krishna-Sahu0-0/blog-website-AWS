const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "127.0.0.1",
    user: "bloguser",
    password: "Blog@123",
    database: "blog_app",
    waitForConnections: true,
    connectionLimit: 10
});

console.log("MySQL Pool Created");

module.exports = pool;
