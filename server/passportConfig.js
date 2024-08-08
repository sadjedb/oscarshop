const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const db = require("./db");

module.exports = (passport) => {
  passport.use(
    new LocalStrategy(
      { usernameField: "email" },
      async (email, password, done) => {
        try {
          const query = "SELECT * FROM user WHERE email = ?;";
          db.query(query, [email], async (err, results) => {
            if (err) return done(err);
            if (results.length === 0)
              return done(null, false, { message: "No user found" });

            const user = results[0];
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch)
              return done(null, false, { message: "Incorrect password" });

            return done(null, user);
          });
        } catch (error) {
          return done(error);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    const query = "SELECT * FROM user WHERE id = ?;";
    db.query(query, [id], (err, results) => {
      if (err) return done(err);
      done(null, results[0]);
    });
  });
};
