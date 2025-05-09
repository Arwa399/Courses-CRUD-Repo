const express = require("express");
const connectDB = require("./DB/db.config");
const bodyParser = require("body-parser");
const courseRoutes = require("./Route/course.route")

const app = express();
app.use(bodyParser.json());

app.use("/courses", courseRoutes)
app.get("/", (req, res) => {
res.send("Hello World!");
});
connectDB();


app.listen(3000, () =>{
    console.log("Server is running on 3000")
})