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
  models
    .User
    .findOne({
      where: {
        email: req.body.email,
        password: req.body.password
      },
      include: [{
        all: true,
      }],
    })
    .then((user) => {
      if (!user) {
        res.status(404);
        res.json({
          notFound: 'Empty',
        });
        return;
      }
      res.status(200);
      res.json(user);
    })
    .catch((err) => {
      res.status(500);
      res.json({
        error: err.message,
      });
    });
});

router.get('/:id', (req, res) => {
  models
    .User
    .findOne({
      where: {
        id: req.params.id,
      },
      include: [{
        all: true,
      }],
    })
    .then((user) => {
      if (!user) {
        res.status(404);
        res.json({
          notFound: 'Empty',
        });
        return;
      }
      res.status(200);
      res.json(user);
    })
    .catch((err) => {
      res.status(500);
      res.json({
        error: err.message,
      });
    });
});

router.post('/', (req, res) => {
  models.User.create({
    username: 'test1',
    email: 'test1@test.test',
    password: 'test',
    photo: ' ',
    session: 'qwertyu',
  }).then(user => {
    res.status(200);
    res.json(user);
  }).catch(err => {
    res.status(500);
    res.json({
      error: err.message,
    });
  });
});

export default router;
