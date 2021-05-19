// config.js
const dotenv = require('dotenv');

//get the NODE_ENV from the arguments set in the package.json file
const NODE_ENV = process.argv[2] || process.env.NODE_ENV;
process.env.NODE_ENV = NODE_ENV;

let result = dotenv.config({ path: './.env' });

if (result.error) {
    throw result.error;
}
const { parsed: envs } = result;
module.exports = envs;