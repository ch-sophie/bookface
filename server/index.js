const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const postRouter = require("./routes/posts");

dotenv.config();

// mongoose
// connect to my database
mongoose.connect('mongodb+srv://soph:auth123@cluster0.cixjynk.mongodb.net/test',{useNewUrlParser: true, useUnifiedTopology : true})
.then(() => console.log('connected'))
.catch((err) => console.log(err));

/* middleware 
use methods to call between processing req and res */
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// test
// app.get("/", (req, res) => {
//     res.send("Hello world");
// })

// app.get("/users", (req, res) => {
//     res.send("Welcome to users page");
// })

// Routes
app.use("/users", userRouter);
app.use("/auth", authRouter);
app.use("/posts", postRouter);

// PORT 
app.listen(3001, () => {
    console.log(`Server Started at ${3001}`)
})