const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const expressSession = require("express-session");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const db = require("./db");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  expressSession({ secret: "secret", resave: false, saveUninitialized: false })
);
app.use(
  cors({
    origin: "http://localhost:3000", // Ensure this matches your frontend URL
    credentials: true,
  })
);

app.use(cookieParser("secret"));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);

app.get("/", (req, res) => {
  res.send("running");
});

app.post("/register", async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;
  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }
  const query =
    "INSERT INTO user (username, email, password) VALUES (?, ?, ?);";
  const query2 = "SELECT * FROM user WHERE email = ?;";
  const query3 = "SELECT * FROM user WHERE username = ?;";

  db.query(query2, [email], async (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error", err });
    }

    if (result.length > 0) {
      return res.status(400).json({ message: "Email already exists" });
    }

    db.query(query3, [username], async (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Database error", err });
      }

      if (result.length > 0) {
        return res.status(400).json({ message: "Username already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      db.query(query, [username, email, hashedPassword], (err, result) => {
        if (err) {
          return res.status(500).json({ message: "Database error", err });
        }
        res.status(200).json({ message: "User registered" });
      });
    });
  });
});

app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.error("Authentication error:", err); // Log error
      return res.status(500).json({ message: "Authentication error", err });
    }
    if (!user) {
      console.log("No user found:", info.message); // Log message
      return res.status(400).json({ message: "No user found" });
    }
    req.login(user, (err) => {
      if (err) {
        console.error("Login error:", err); // Log error
        return res.status(500).json({ message: "Login error", err });
      }
      return res
        .status(200)
        .json({ message: "Successfully Authenticated", user });
    });
  })(req, res, next);
});

app.get("/login", (req, res) => {
  if (req.user) {
    res.json(req.user);
  } else {
    res.status(401).json({ message: "Not authenticated" });
  }
});

app.listen(3001, () => {
  console.log("Server started on port 3001");
});
