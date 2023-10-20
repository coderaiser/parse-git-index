'use strict';

const binarnia = require('binarnia');

const parseHeader = require('./parse-header');
const parseEntries = require('./parse-entries');
const offset = binarnia.sizeof(require('./header'));

module.exports = (buffer) => {
    const header = parseHeader(buffer);
    const {count} = header;
    const entries = parseEntries({
        buffer,
        count,
        offset,
    });
    
    return {
        header,
        entries,
    };
};
