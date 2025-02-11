const winston = require('winston');
const { combine, timestamp, json } = winston.format;

const logger = winston.createLogger({
    level: 'info',
    // format: winston.format.json(),
    format: combine(
        timestamp(),
        json(),
    ),
    // defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});

logger.add(new winston.transports.Console({
    format: winston.format.simple(),
}));

module.exports = function buildLogger(service) {
    return {
        log: (message) => {
            logger.info('info', {message, service} );
        },
        error: (message) => {
            logger.error('info', {
                message, 
                service,
                at: new Date().toISOString(),
            } );
        },
    }
}



