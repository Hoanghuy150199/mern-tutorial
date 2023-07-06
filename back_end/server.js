const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT || 8003;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.get("/api/goals", (req, res) => {
//   res.status(200).json({ message: "get goals" });
// });

app.use("/api/goals", require("./routes/goalRoute"));

app.use(errorHandler);

app.listen(port, () => console.log(`App is listening on port ${port}`));
