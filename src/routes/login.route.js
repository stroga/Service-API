import crypto from 'crypto';

import models from '../models';

const express = require('express');

const router = express.Router();

function prepareDateToGiveBack (usersArr) {
  return usersArr.map(user => {
    const { session, ...filteredUser } = user.dataValues;
    return filteredUser;
  });
}

function isEnoughRights (storedParam, requestedParam) {
  return storedParam === requestedParam;
}

function normalizeCoordinates (rideInfo) {
  rideInfo.from = rideInfo.from.coordinates.join();
  rideInfo.to = rideInfo.to.coordinates.join();
  return rideInfo;
}

const messagesForResponse = {
  notFound: 'User does not exist',
};

router.post('/', (req, res) => {
  console.log(req.session);
  models
    .User
    .findOne({
      where: {
        email: req.body.email,
        password: req.body.password,
      },
      include: [{
        all: true,
      }],
    })
    .then((user) => {
      if (!user) {
        // res.status(404);
        res.status(404).json({
          notFound: 'Empty',
        });
      } else {
        let { id, session, createdAt, updatedAt, ...filteredUser } = user.dataValues;
        if (!session) {
          session = crypto.randomBytes(20).toString('hex');
          user.update({
            session,
          });
        } else {
          session: req.session
        }
        console.log("DOne");
        res.status(200).json(Object.assign({}, filteredUser, { session }));
      }
    })
    .catch((err) => {
      res.status(500);
      res.json({
        error: err.message,
      });
    });
});

export default router;
