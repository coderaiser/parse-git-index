'use strict';

const binarnia = require('binarnia');
const schema = require('./entry');

const endian = 'BE';

module.exports = ({buffer, offset}) => {
    return binarnia({
        offset,
        buffer,
        endian,
        schema,
    });
};
