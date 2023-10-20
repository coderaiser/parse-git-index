'use strict';

const binarnia = require('binarnia');
const schema = require('./header');

const endian = 'BE';

module.exports = (buffer) => {
    return binarnia({
        buffer,
        endian,
        schema,
    });
};
