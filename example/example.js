const {readFileSync} = require('fs');
const {join} = require('path');

const parseGitIndex = require('..');

const index = readFileSync(join(__dirname, '../.git/index'));

console.log(parseGitIndex(index));
