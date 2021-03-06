const express = require('express');

const Actions = require('./actions-model');
const { validateActionId } = require('./actions-middlware')

const router = express.Router();


router.get('/', (req, res, next) => {
    Actions.get()
    .then(actions => {
        res.json(actions);
    })
    .catch(next)
    });

router.get('/:id', validateActionId, (req, res) => {
    res.json(req.action)
})

router.post('/', (req, res, next) => {
    Actions.insert(req.action)
    .then(newAction => {
        res.status(201).json(newAction)
    })
    .catch(next)
})

router.put('/:id', validateActionId, (req, res, next) => {
    Actions.update(req.params.id, req.body)
    .then(updatedAction => {
        res.json(updatedAction)
    })
    .catch(next)
})

router.delete('/:id', validateActionId, async (req, res, next) => {
  try {
    const response = await Actions.remove(req.params.id)
    res.json(response)
  } catch (err) {
      next(err)
  }
})
    


module.exports = router;