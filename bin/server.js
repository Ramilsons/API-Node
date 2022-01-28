const app = require('../src/app.js');
const debug = require('debug')('nodestr:server');
const http = require('http');

const port = 3000;

app.listen(port, () => {
    console.log('Servidor iniciado!!!');
})

// Irá disparar a função onError quando identificar um erro;
app.on('error', onError);
app.on('listening', onListening);

function onError(error){
    if(error.syscall !== 'listen'){
        throw error;
    }

    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

    switch (error.code){
        case 'EACESS':
            console.error(bind + ' requer um maior privilégio');
            process.exit(1);
            break;
    
        case 'EADDRINUSE':
            console.error(bind + ' está sendo usada');
            process.exit(1);
            break;

        default:
            throw error;
    }
}

function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;

    debug('Listening on ' + bind);
}

