import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import session from "express-session";
import connectPgSimple from "connect-pg-simple";

const app = express();
const PGStore = connectPgSimple(session);

const PORT = process.env.PORT || 3000;
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";

app.use(cors({ origin: CLIENT_URL, credentials: true }));

app.use(
  session({
    secret: "hangoutPlanner", // change later on
    saveUninitialized: true,
    resave: false,
    cookie: {
      maxAge: 60000 * 60,
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    },
    store: new PGStore({
      createTableIfMissing: true,
    }),
  }),
);

console.log(process.env.PORT);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
