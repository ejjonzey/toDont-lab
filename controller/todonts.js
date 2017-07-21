const express = require('express');
const router = express.Router();
const data = require('../data');

//index todonts
router.get('/',(req, res) => {
	res.render('todonts/index', {
		todonts: data.seededToDonts
	});
});

/* SHOW TODO */
router.get('/:id', (req, res) => {
  const id = req.params.id;
  const todonts = data.seededToDonts[id];
  res.render('todonts/show',{
    todonts: todonts,
    id: id
  });
});

module.exports = router;