const express = require('express');
const router = express.Router();
const data = require('../data');

//index todonts
router.get('/',(req, res) => {
	res.render('todonts/index', {
		todonts: data.seededToDonts
	});
});

/* NEW TODONTS */
router.get('/new', (req, res) => {
  res.render('todonts/new');
})

/* SHOW TODONTS */
router.get('/:id', (req, res) => {
  const id = req.params.id;
  const todonts = data.seededToDonts[id];
  res.render('todonts/show',{
    todonts: todonts,
    id: id
  });
});

/* EDIT TODONTS */
router.get('/:id/edit', (req, res) => {
  const id = req.params.id;
  const todonts = data.seededTodonts[id];
  res.render("todonts/edit", {
    todonts: todonts,
    id: id
  })
});

/* UPDATE TODONTS */
router.put('/:id', (req, res) => {
  // We have the ID
  const id = req.params.id;
  // Use the id to grab specific index in array
  const todonts = data.seededTodonts[id];
  // Update the description and urgent values
  todonts.description = req.body.description;
  todonts.urgent = req.body.urgent;
  // redirect back to individual todo
  res.method = "GET";
  res.redirect(`/todonts/${id}`);
});

/* SAVE TODONTS */
router.post('/', (req, res) => {
  console.log(req.body);

  const newToDonts = {
    description: req.body.description,
    urgent: req.body.urgent
  };
  data.seededToDonts.push(newToDonts);

  res.redirect("/todonts");
});

/* DELETE TODONTS */
router.delete('/:id', (req, res) => {
  data.seededToDonts.splice(req.params.id, 1);

  res.method= "GET";
  res.redirect("/todonts");
});


module.exports = router;