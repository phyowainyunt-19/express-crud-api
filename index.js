import express from "express";
import bodyParser from "body-parser";

// Router Import
import userRoutes from "./routes/route.user.js";

// PORT
const PORT = 5000;

// APP
const app = express();

// MIDDLEWARE
app.use(bodyParser.json());
app.use('/users', userRoutes)

app.get("/", (req, res) => {
  console.log("[TEST]");

  res.send("HELLO!");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
