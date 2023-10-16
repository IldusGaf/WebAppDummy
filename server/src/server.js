const app = require('./app');
const {host, port} = require('../config/serverConfig');

app.listen(port, host, () => console.log('App started'))