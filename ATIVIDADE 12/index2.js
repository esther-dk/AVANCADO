const winston = require('winston');


const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
    ),
    transports: [
        new winston.transports.Console()
    ]
});

function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    const startTime = process.hrtime(); 

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            logger.info(`Número ${number} não é primo, divisível por ${i}`);
            return false; // Retorna falso se encontrar um divisor
        }
    }

    const endTime = process.hrtime(startTime); 
    const executionTime = (endTime[0] * 1e3 + endTime[1] * 1e-6).toFixed(3);
    logger.info(`Tempo de execução da função isPrime: ${executionTime} ms`);
    
    return true; 
}

const numbersToCheck = [2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Números primos:");
for (const number of numbersToCheck) {
    if (isPrime(number)) {
        console.log(number);
    }
}
