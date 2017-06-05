import models from './models';

const express = require('express');

const config = {
  session: 'session',
};

const allowedOrigins = [
  'http://localhost',
  'http://localhost:3000',
  'http://146.185.163.215',
  'http://146.185.163.215:80',
  'http://web-1.testappstack.caf3f958.cont.dockerapp.io:80',
  'http://web-1.testappstack.caf3f958.cont.dockerapp.io',
];

function setCrossOriginHeader (request, response) {
  const origin = request.headers.origin;

  if (allowedOrigins.indexOf(origin) > -1) {
    response.set({
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Credentials': true,
    });
  }
}

export default (req, res, next) => {
  setCrossOriginHeader(req, res);
  if (req.cookies[config.session]) {
    models.User.findAll({
      where: {
        session: req.cookies[config.session],
      },
    }).then((result) => {
      const user = result[0];

      if (!user) {
        console.log('There is no such user');
        res.end();
      } else {
        let { id, session, createdAt, updatedAt, ...filteredUser } = user.dataValues;
        req.session = req.cookies[config.session];
        req.user = filteredUser;
        console.log(req.user);
        // res.status(200).json(filteredUser);
      }
      next();
    }).catch((err) => {
      console.log(err.message);
    });
  } else {
    next();
  }

};
