import {Application} from '@loopback/core';
import {RestComponent, RestServer} from '@loopback/rest';
import {
  AuthenticationComponent,
  AuthenticationBindings,
} from '@loopback/authentication';
import {MyAuthStrategyProvider} from './src/providers/auth-strategy'
import {MySequence} from './src/sequence'
import {MyController} from './src/controllers/my-controller'

const app = new Application({
  components: [AuthenticationComponent, RestComponent],
  rest: {
    port: 3030,
    sequence: MySequence
  },
  controllers: [MyController]
});

(async function start() {
  // Grab the REST server instance
  const server = await app.getServer(RestServer);
  // Setup our handler!
  // server.handler((sequence, request, response) => {
  //   sequence.send(response, 'Hello world!');
  // });
  server.bind(AuthenticationBindings.STRATEGY)
  .toProvider(MyAuthStrategyProvider);

  await app.start();
  console.log(`REST server listening on port ${server.getSync('rest.port')}`);
})();
