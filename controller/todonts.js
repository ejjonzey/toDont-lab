const express = require('express');
const router = express.Router();
const data = require('../data');

//index todonts
router.get('/',(req, res) => {
	res.render('todonts/index', {
		todonts: data.seededToDonts
	});
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const todo = data.seededTodos[id];
  res.render('todos/show',{
    todo: todo,
    id: id
  });
});
module.exports = router;