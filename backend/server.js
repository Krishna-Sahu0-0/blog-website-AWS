const express = require("express");
const cors = require("cors");

const blogRoutes = require("./routes/blogRoutes");

const app = express();

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
}));
app.use(express.json());

app.use("/api/blogs", blogRoutes);

app.get("/", (req, res) => {
    res.send("Blog API Running");
});

const PORT = 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server Running On Port ${PORT}`);
});
