module.exports.createUser = (req, res) => {
  res.status(201).json({
    user: 'userCreated'
  });
};

module.exports.getUser = (req, res) => {
  res.status(200).json({
    user: 'showUsers'
  });
};

module.exports.updateUser = (req, res) => {
  res.status(200).json({
    user: 'userUpdate'
  });
};
