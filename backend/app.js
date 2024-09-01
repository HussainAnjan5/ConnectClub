// Backend code
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = 8080;
const connect = require("./Config");
connect();
app.use(cors());
const userRoute = require("./routes/user.routes");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/MOO755729", userRoute);

// Route to send frontend the backend URL
app.get("/backendUrl", (req, res) => {
    const backendUrl = "http://localhost:8080/M00755729";
    res.json({ url: backendUrl });
});

app.listen(PORT, (req, res) => {
    console.log(`Server Connected successfully at port ${PORT}/`);
});
