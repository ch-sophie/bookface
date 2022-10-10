const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const postRouter = require("./routes/posts");
const cors = require('cors')

const PORT = process.env.PORT || 3001;

dotenv.config();

// mongoose
mongoose.connect("mongodb+srv://soph:social-app123@users.twgqlhj.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser: true, useUnifiedTopology : true})
.then(() => console.log('connected to database'))
.catch((err) => console.log(err));

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors());


// Routes
app.use("/users", userRouter);
app.use("/auth", authRouter);
app.use("/posts", postRouter);

// PORT 
app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`)
})