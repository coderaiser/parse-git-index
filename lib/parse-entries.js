'use strict';

const {sizeof} = require('binarnia');

const parseEntry = require('./parse-entry');
const entrySize = sizeof(require('./entry'));

module.exports = ({buffer, count, offset}) => {
    const entries = [];
    
    for (let i = 0; i < count; i++) {
        const entry = parseEntry({
            buffer,
            offset,
        });
        
        entries.push(entry);
        
        const filePathSize = Number(entry.filePathSize);
        
        offset += pad(entrySize + filePathSize);
    }
    
    return entries;
};

// NUL byte(s) 1 NUL byte to pad the entry to a multiple of eight bytes while keeping the name NUL-terminated
// https://mincong-h.github.io/2018/04/28/git-index/
function pad(a) {
    const diff = a % 8;
    return a + (8 - diff);
}
