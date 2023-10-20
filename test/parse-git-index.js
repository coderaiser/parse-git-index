'use strict';

const {join} = require('path');
const {readFileSync} = require('fs');

const test = require('supertape');
const parseGitIndex = require('..');
const parseHeader = require('../lib/parse-header');

const indexParsedPath = join(__dirname, 'fixture', 'index.json');

const indexParsed = require(indexParsedPath);
const indexPath = join(__dirname, 'fixture', 'index');
const index = readFileSync(indexPath);

test('parse-git-index: parse', (t) => {
    const result = parseGitIndex(index);
    
    t.deepEqual(result, indexParsed);
    t.end();
});

test('parse-git-index: parse header', (t) => {
    const result = parseHeader(index);
    const expected = {
        signature: 'DIRC',
        version: '0x2',
        count: '0xb',
    };
    
    t.deepEqual(result, expected);
    t.end();
});
