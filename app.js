const Application = require('@loopback/core').Application;

const app = new Application();
app.bind('message').to('Hello world!');
app.get('message').then(value => {
  console.log(value);
});
