import express from "express";
const app = express();
app.get("/", (req, res) => {
    res.json({ message: "Connection to backend" });
});
app.get("/about", (req, res) => {
    res.json({ message: "on about page" });
});
app.listen(3000, () => {
    console.log("server running on 3000");
});
