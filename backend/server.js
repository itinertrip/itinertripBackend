import app from "./app.js";
import dotenv from "dotenv";

const PORT = process.env.PORT || 1234;

if (process.env.NODE_ENV !== "PRODUCTION") {
  dotenv.config({ path: "backend/config.env" });
}

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
