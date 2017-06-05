import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import useragent from 'express-useragent';
import routes from './routes/index';
// import rides from './routes/rides.route';
// import users from './routes/users.route';
// import reservations from './routes/reservations.route';
import auth from './routes/auth.route';
import login from './routes/login.route';
import oauth from './oauth.middleware';
import models from './models';
// import config from './config'
const requestLanguage = require('express-request-language');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(useragent.express());
app.use(requestLanguage({
  languages: ['en', 'ru'],
  cookie: {
    name: 'language',
    options: { maxAge: 24 * 3600 * 1000 },
  },
}));
app.set('json spaces', 20);

app.use(oauth);

app.use('/api/auth', auth);
app.use('/api/login', login);
// app.use('/api/users', users);
app.use('/api/', routes);


// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
// no stacktraces leaked to user unless in development environment
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send((app.get('env') === 'development') ? err : {});
});

export default app;
