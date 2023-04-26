/*const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('./models/user');
passport.use(new LocalStrategy(async (username, password, done) => {
    try {
      const user = await User.findOne({ username });
      if (!user) {
        return done(null, false, { message: 'Nombre de usuario incorrecto' });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return done(null, false, { message: 'Contraseña incorrecta' });
      }
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }));
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (error) {
      done(error);
    }
  });
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  
  app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
  }));
  
  app.use(passport.initialize());
  app.use(passport.session());
  
  app.use('/peliculas', isLoggedIn, peliculasRoutes);
  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/login');
  }
  */      