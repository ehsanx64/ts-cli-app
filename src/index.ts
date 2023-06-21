import { getGreeting } from './getGreeting';
import "dotenv/config";

console.log('#########################');
const greeting = getGreeting("Ehsan");
console.log(greeting);

// dotenv test
console.log('## Env');
console.log('ENVAR1: ' + process.env.ENVAR1);


