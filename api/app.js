import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"; // Import CORS package
import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";
const PORT = 8080;

const app = express();

app.use(
  cors({
    origin: "https://sirproject.onrender.com", // Allow requests from your front-end
    credentials: true,
  })
);
// app.use(
//   cors({
//     origin: "http://localhost:5173", // Allow requests from your front-end
//     credentials: true,
//   })
// );

// Middleware
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);


// app.use("/", (req, res) => {
//   res.send("hello")
// })

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
