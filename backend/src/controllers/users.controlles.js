const usersCtrl = {};

usersCtrl.getUsers = (req, res) => res.json({ message: [] });

usersCtrl.createUser = (req, res) => res.json({ message: 'User Saved' });

usersCtrl.deleteUser = (req, res) => res.json({ message: 'User Deleted' });

module.exports = usersCtrl;