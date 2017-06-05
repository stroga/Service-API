import express from 'express';

import dataMockDesign from '../mocks/mockDesign';
import dataMockServices from '../mocks/mockServices';

const router = express.Router();

router.get('/', (req, res) => {
  if (req.useragent.isMobile) {
    console.log('Mobile phone');
  }

  res.status(200).sendFile('index.html', {root: `${__dirname}`});
});

router.get('/lang', (req, res) => {
  const lang = req.language;
  res
    .status(200)
    .json(Object.assign({}, dataMockDesign[lang], {services: dataMockServices[lang]}, {lang}));
});

router.get('/language/:lang', (req, res) => {
  const lang = req.params.lang;
  res
    .cookie('language', req.params.lang, {maxAge: 24 * 3600 * 1000, httpOnly: true})
    .status(200)
    .json(Object.assign({}, dataMockDesign[lang], {services: dataMockServices[lang]}, {lang}));
});

export default router;
