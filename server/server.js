require('dotenv').config();

const express = require("express");
const cors = require("cors");

const app = express();

const Crouter = require("./routes/contact-route");
const connectDb = require("./utils/db")

app.use(express.json());
app.use(cors());

app.use("/api/v1", Crouter);

const PORT = 8080;

connectDb().then(() =>{

    app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
    
});
})









