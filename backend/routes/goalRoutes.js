const express = require('express')
const router = express.Router()
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController')

//  combination of 
//  router.get('/', getGoals)
//  router.post('/', setGoal)
router.route('/').get(getGoals).post(setGoal)

//  combination of 
//  router.put('/:id', updateGoal)
//  router.delete('/:id', deleteGoal)
router.route('/:id').put(updateGoal).delete(deleteGoal)

module.exports = router
