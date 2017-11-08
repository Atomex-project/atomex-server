import {Application} from '@loopback/core';
import {RestComponent, RestServer} from '@loopback/rest';

const app = new Application({
  components: [RestComponent],
  rest: {
    port: 3000
  }
});

(async function start() {
  // Grab the REST server instance
  const server = await app.getServer(RestServer);
  // Setup our handler!
  server.handler((sequence, request, response) => {
    sequence.send(response, 'Hello world!');
  });
  await app.start();
  console.log(`REST server listening on port ${server.getSync('rest.port')}`);
})();
