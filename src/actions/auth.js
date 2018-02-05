const mongoose =  require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 15;
const jwt = require('jsonwebtoken');
const model = mongoose.model('User');

/**
 * Auth API para gerenciamento de autenticação de usuários
 *
 * Requires: Json Web Token, simple-encryptor, bcrypt e mongoose
 * @description simple-encrytor usado para criptografar dados do usuário em localStorage e Json Web Token para autenticação do usuário no sistema.
 *
 * Modelo: user.js
 * Nome: User
 * Collection no MongoDB: users
 * Atualização: EcmaScript 6
 * Conceitos Aplicados: Criptografia unidirecional e bidirecional Arrow Functions e Variáveis com Escopo de Bloco.
 *
 */

module.exports = (app) => {

  let actions = {};

  actions.login = (req, res) => {
    model.findOne({ email: req.body.email })
    .then(
      (user) => {
        const password = req.body.password;
        const hash = user.password;
        bcrypt.compare(password, hash, (error, success) => {
          if (error) {
            console.log('Error, password mismatch with user ' + user.username);
            res.sendStatus(401);
          } else if (success) {
            var token = jwt.sign({ user: user.username }, app.get('secret'),{
              expiresIn: 84600
            });
            return res.status(200).json(
              {
                user_id: user._id,
                nickname : user.nickname,
                username: user.username,
                photo : user.photo,
                email : user.email,
                token: token,
              }
            );
          };
        });
      },
      (error) => {
        console.log('Error, user does not exists');
        res.sendStatus(401);
      }
    )
  };

  actions.verifyToken = (req, res, next) => {
    let token = req.get('Autorization');
      if(token) {
        console.log('Verificando Token');
        jwt.verify(
          token,
          app.get('secret'),
          (error, decoded) => {
            if(error) {
              console.log('Token Rejeitado');
              res.sendStatus(401);
            }
            req.user = decoded;
            console.log('Usuario aprovado');
            next();
          }
        );
      } else {
        console.log('Token não enviado');
        res.sendStatus(401);
      }
  };

  return actions;
};
