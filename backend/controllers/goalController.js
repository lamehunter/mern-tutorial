// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = (req, res) => {
    res.status(200).json({ message: 'Get goals json message' })
}

// @desc    Set goal
// @route   POST /api/goals
// @access  Private
const setGoal = (req, res) => {
    res.status(200).json({ message: 'Set(create) a goal' })
}

// @desc    Update goal
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = (req, res) => {
    res.status(200).json({
        message: `Updated a goal with id ${req.params.id}`
    })
}

// @desc    Delete goals
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = (req, res) => {
    res.status(200).json({        
        message: `Deleted a goal with id ${req.params.id}`
    })
}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}