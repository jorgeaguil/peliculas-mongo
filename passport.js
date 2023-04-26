const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('./models/user');

function initialize(passport) {
  const authenticateUser = async (email, password, done) => {
    // Buscar usuario por email
    const user = await User.findOne({ email: email });
    if (!user) {
      return done(null, false, { message: 'Email o contraseña incorrectos' });
    }

    // Verificar la contraseña
    try {
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'Email o contraseña incorrectos' });
      }
    } catch (error) {
      return done(error);
    }
  };

  passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser));
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    return done(null, user);
  });
}

module.exports = initialize;
