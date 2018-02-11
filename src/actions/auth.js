const mongoose =  require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 15;
const jwt = require('jsonwebtoken');
const model = mongoose.model('User');

module.exports = (app) => {
  let actions = {};
  const SECRET = app.get('secret');

  actions.login = (req, res) => {
    model.findOne({ email: req.body.email })
    .then(
      (user) => {
        bcrypt.compare(req.body.password, user.password, (error, success) => {
          if (error) {
            res.status(401).send({ error: error, message: 'Password mismatch'});
          } else if (success) {
            const token = jwt.sign({ user_id: user._id }, SECRET, { expiresIn: '3h' });
            return res.status(200).json(
              {
                id: user._id,
                nickname : user.nickname,
                username: user.username,
                photo : user.photo,
                email : user.email,
                token: token,
              }
            );
          };
        });
      }
    )
    .catch(error => res.status(401).send({ error: error, message: 'Error, user does not exists' }))
  };

  actions.verifyToken = (req, res, next) => {
    const TOKEN = req.get('Authorization');
    if (TOKEN) {
      jwt.verify(TOKEN, SECRET, (error, decoded) => {
        if (error) {
          res.status(401).send({ error: error, message: 'Invalid Token' });
        } else {
          req.user = decoded;
          next();
        }
      });
    } else {
      res.status(401).send('Token is required');
    };
  };

  return actions;
};
