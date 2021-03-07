const nodemailer = require("nodemailer");

class MailerService {
  constructor() {
    this.transport = this.config();
  }

  config = () =>
    nodemailer.createTransport({
      host: "smtp.gmail.com",
      auth: {
        user: "rest.api.node@gmail.com",
        pass: "pnzkxchwwqddzhve"
      }
    });

  sendMail = mail => {
    this.transport.sendMail(mail);
  };

  welcomeMailContent = userMail => ({
    from: '"Node API" <rest-api-node@gmail.com>',
    to: userMail,
    subject: "Welcome to Node API",
    html:
      "<p>Welcome to Node API!</p>" +
      "<p>This API is developed to provide Front End developers with a server and database configurations for connection testing and to provide a visualization of the data streamlining for the development process. The API provides HTTP methods via AJAX requests to collect, insert and update the given data.</p>" +
      'Github: <a href="https://github.com/renanlopescoder/rest-api-node">rest-api-node</a>' +
      "<br><br>Happy Hack!," +
      "<br>Node API Team 🤖" +
      '<br><br><img src="http://pluspng.com/img-png/github-octocat-logo-vector-png--896.jpg" alt="Github Logo" height="82" width="82">' +
      '<img src="https://raw.githubusercontent.com/renanlopescoder/rest-api-node/master/logo.png" alt="Node Logo" height="65" width="150">'
  });
}

module.exports = new MailerService();
