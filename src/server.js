require('dotenv').config();

const Hapi = require('@hapi/hapi');

const { PORT, HOST } = process.env;

const routes = require('./routes');

const init = async () => {
    const server = Hapi.server({
        port: PORT || 9000,
        host: HOST || 'localhost',
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });
    
    server.route(routes);

    await server.start();

    console.log(`Server running on port ${server.info.uri}`);
};

init();
