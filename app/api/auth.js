  let mongoose =  require('mongoose');
  let bcrypt = require('bcrypt');
  const saltRounds = 15;
  let jwt = require('jsonwebtoken');

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

  let api = {};
  let model = mongoose.model('User');

  api.login = function(req, res){
    model.findOne({email: req.body.email})
    .then(
      (user) => {
        bcrypt.compare(req.body.password, user.password).then(function(result){
          if(result == true){
            var token = jwt.sign({user:user.username}, app.get('secret'),{
              expiresIn: 84600
            });
            return res.status(200).json(
              {
                user_id: user._id,
                nickname : user.nickname,
                username: user.username,                
                photo : user.photo,
                email : user.email,
                token: token
              });
          }
        }, 
        (error) => {
          console.log('Error, password incorreto para o usuário ' + user.username);
          res.sendStatus(401);        
        });
      },
      (error) => {
        console.log('Error, usuário inexistente');
        res.sendStatus(401);
      })
    };


  api.createUser = (req,res) => {
    bcrypt.hash(req.body.password, saltRounds, (err,hash) => {
      req.body.password = hash;
      model.create(req.body).then(
        (user)=> {
          res.json(user);
        },
        (error) => {
          console.log(error);
          res.status(404).json(error);
      });
    });
  };

  api.verifyToken = (req, res, next) => {
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

  return api;
};