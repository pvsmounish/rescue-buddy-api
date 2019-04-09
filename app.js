if (process.env.NODE_ENV === 'development') {
    require('dotenv').config({path: __dirname + '/.env'});
}

require('./src/app');