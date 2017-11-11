"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@loopback/core");
const rest_1 = require("@loopback/rest");
const authentication_1 = require("@loopback/authentication");
const auth_strategy_1 = require("./src/providers/auth-strategy");
const sequence_1 = require("./src/sequence");
const my_controller_1 = require("./src/controllers/my-controller");
const app = new core_1.Application({
    components: [authentication_1.AuthenticationComponent, rest_1.RestComponent],
    rest: {
        port: 3030,
        sequence: sequence_1.MySequence
    },
    controllers: [my_controller_1.MyController]
});
(async function start() {
    // Grab the REST server instance
    const server = await app.getServer(rest_1.RestServer);
    // Setup our handler!
    // server.handler((sequence, request, response) => {
    //   sequence.send(response, 'Hello world!');
    // });
    server.bind(authentication_1.AuthenticationBindings.STRATEGY)
        .toProvider(auth_strategy_1.MyAuthStrategyProvider);
    await app.start();
    console.log(`REST server listening on port ${server.getSync('rest.port')}`);
})();
