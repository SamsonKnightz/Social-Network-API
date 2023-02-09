const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addReaction,
  removeReaction,
  updateUser,
} = require('../../controllers/userController');

// /api/students
router.route('/').get(getUsers).post(createUser);

// /api/students/:studentId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

router.route('/:userId').put(updateUser);

// /api/users/:userId/reactions
router.route('/:userId/reactions').post(addReaction);

// /api/users/:userId/reactions/:reactionId
router.route('/:userId/reactions/:reactionId').delete(removeReaction);


module.exports = router;
