const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const userRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const postRouter = require("./routes/posts");


const port = process.env.PORT || 3001;

dotenv.config();

// mongoose connect to my database
mongoose.connect("mongodb+srv://soph:social-app123@users.twgqlhj.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser: true, useUnifiedTopology : true})
.then(() => console.log('connected to database'))
.catch((err) => console.log(err));

/* middleware 
use methods to call between processing req and res */
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors);



// test
app.get("/", (req, res) => {
    res.send("Hello world");
})

// test route users
// app.get("/users", (req, res) => {
//     res.send("Welcome to users page");
// })

// Routes
app.use("/users", userRouter);
app.use("/auth", authRouter);
app.use("/posts", postRouter);


// PORT 
app.listen(port, () => {
    console.log(`Server Started at ${port}`)
})