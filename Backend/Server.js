import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoute from "./routes/contact.js";

dotenv.config();
const app=express();

app.use(cors());
app.use(express.json());

//routes
app.use("/api/contact", contactRoute);
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
