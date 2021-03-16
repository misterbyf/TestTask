const createUser = (req, res) => {
  res.status(201).json({
    user: 'userCreated'
  });
};
const getUser = (req, res) => {
  res.status(200).json({
    user: 'showUsers'
  });
};
const updateUser = (req, res) => {
  res.status(200).json({
    user: 'userUpdate'
  });
};

module.exports = {
  createUser,
  getUser,
  updateUser
};
