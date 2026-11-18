import express from "express";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";

// Create an express app
const app = express();

// Parse JSON requests coming from the client
// (must be declared BEFORE the routes so req.body is populated)
app.use(express.json());

// Routes declaration
app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);

app.get("/", (req, res) => {
    res.send("Welcome to my Backend API!");
});

export default app;
