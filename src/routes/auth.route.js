import JWT from 'jsonwebtoken';
import models from '../models';
const express = require('express');
const router = express.Router( );

router.get('/', (req, res) => {
  console.log('AUTH', req.user);
  if (req.user) {
    res.status(200).json(req.user);
  } else {
    res.json({});
  }
});

export default router;
