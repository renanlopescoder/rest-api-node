const nodemailer = require('nodemailer');
 
module.exports = (app) => {
 
  let api = {};
 
  api.getMail = () => {
    
    let mailConfig = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      auth: {
          user: 'rest.api.node@gmail.com',
          pass: 'pnzkxchwwqddzhve' 
      }
    });
    return mailConfig;
  }
 
  return api;
};