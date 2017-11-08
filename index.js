"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@loopback/core");
const rest_1 = require("@loopback/rest");
const app = new core_1.Application({
    components: [rest_1.RestComponent],
    rest: {
        port: 3000
    }
});
(async function start() {
    // Grab the REST server instance
    const server = await app.getServer(rest_1.RestServer);
    // Setup our handler!
    server.handler((sequence, request, response) => {
        sequence.send(response, 'Hello world!');
    });
    await app.start();
    console.log(`REST server listening on port ${server.getSync('rest.port')}`);
})();
