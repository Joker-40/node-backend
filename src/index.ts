import * as dotenv from "dotenv";
import express from "express";
import Auth from "./routes/auth.router"

dotenv.config({ path: ".env.local" });

const app = express();
const port = process.env.PORT;

app.use("/", Auth);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
