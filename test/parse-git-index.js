'use strict';

const {join} = require('path');
const {readFileSync} = require('fs');

const test = require('supertape');
const parseGitIndex = require('..');
const parseHeader = require('../lib/parse-header');

const indexPath = join(__dirname, 'fixture', 'index');
const indexParsedPath = join(__dirname, 'fixture', 'index.json');
const index = readFileSync(indexPath);
const indexParsed = require(indexParsedPath);

test('parse-git-index', (t) => {
    const result = parseGitIndex(index);
    
    t.deepEqual(result, indexParsed, 'should equal');
    t.end();
});

test('parse-git-index: parse header', (t) => {
    const result = parseHeader(index);
    const expected = {
        signature: 'DIRC',
        version: '0x2',
        count: '0xb',
    };
    
    t.deepEqual(result, expected, 'should equal');
    t.end();
});
